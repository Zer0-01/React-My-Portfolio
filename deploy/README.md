# Deployment

Production only: pushes to `main` deploy to https://anaszulkifli.dev
(also `www.` and `portfolio.`).

## How a deploy works

`.github/workflows/ci-cd.yml` runs on every pull request and push:

1. **Checks**: `npm test`, type check and a production build.
2. **Image** (`main` only): builds the Dockerfile and pushes it to
   `ghcr.io/zer0-01/react-my-portfolio:<commit sha>` (and `:production`).
3. **Deploy**: SSHes to the server with a key that can only run `deploy.sh`,
   sending a short-lived GHCR token and `deploy/compose.yaml`. `deploy.sh`
   pulls the image, starts it and waits until it is healthy. If it doesn't
   become healthy, it rolls back to the previous image tag.

Caddy (`/home/ubuntu/apps/infra`) terminates TLS and proxies the domains to
`portfolio:3000` on the shared `web` network.

## Server layout

```
/home/ubuntu/apps/portfolio-deploy/
  deploy.sh          # copy of deploy/deploy.sh; update it by hand when it changes
  production/
    compose.yaml     # written by each deploy
    release.env      # IMAGE_TAG currently deployed
    deploy.log       # one line per successful deploy
```

## One-time setup

### Server

```sh
install -D -m 755 deploy/deploy.sh /home/ubuntu/apps/portfolio-deploy/deploy.sh
ssh-keygen -t ed25519 -N '' -C portfolio-ci -f ~/.ssh/portfolio_deploy_ci
echo "command=\"/home/ubuntu/apps/portfolio-deploy/deploy.sh\",restrict $(cat ~/.ssh/portfolio_deploy_ci.pub)" >> ~/.ssh/authorized_keys
```

### GitHub (Settings → Environments, Secrets and variables → Actions)

- Environment `production` (optionally with required reviewers).
- Repository variable `DEPLOY_HOST`: the server's IP or hostname.
- Repository secret `DEPLOY_SSH_KEY`: contents of `~/.ssh/portfolio_deploy_ci`.
- Repository secret `DEPLOY_KNOWN_HOSTS`: output of
  `ssh-keyscan -t ed25519 <DEPLOY_HOST>`.

## Common tasks

Run these from `/home/ubuntu/apps/portfolio-deploy/production`:

```sh
cat release.env                                     # what's deployed
tail deploy.log                                     # deploy history
docker compose --env-file release.env logs -f       # logs
docker compose --env-file release.env restart       # restart
```

Roll back: re-run an older successful "CI/CD" workflow run from the Actions
tab, or set `IMAGE_TAG` in `release.env` to an older SHA and run
`docker compose --env-file release.env up -d --wait`.
