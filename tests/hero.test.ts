import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { after, before, test } from "node:test";

const port = 3107;
const baseUrl = `http://127.0.0.1:${port}`;
let devServer: ChildProcess;
let homePage = "";
let projectPage = "";
let robots = "";
let sitemap = "";

before(async () => {
  devServer = spawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
    { stdio: "ignore" },
  );

  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);

      if (response.ok) {
        homePage = await response.text();
        const [projectResponse, robotsResponse, sitemapResponse] = await Promise.all([
          fetch(`${baseUrl}/projects/numeru`),
          fetch(`${baseUrl}/robots.txt`),
          fetch(`${baseUrl}/sitemap.xml`),
        ]);

        assert.equal(projectResponse.status, 200);
        assert.equal(robotsResponse.status, 200);
        assert.equal(sitemapResponse.status, 200);

        [projectPage, robots, sitemap] = await Promise.all([
          projectResponse.text(),
          robotsResponse.text(),
          sitemapResponse.text(),
        ]);
        return;
      }
    } catch {
      // The development server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Next.js development server did not become ready");
});

after(() => {
  devServer?.kill("SIGTERM");
});

test("introduces Anas as an end-to-end product builder", () => {
  assert.match(homePage, /I build digital products from idea to <span[^>]*>launch<\/span>/);
  assert.match(homePage, /I design, build and ship web and mobile apps\./);
});

test("provides direct contact and portfolio actions", () => {
  assert.match(homePage, /href="https:\/\/wa\.me\/601154066082"/);
  assert.match(homePage, />Let(?:&#x27;|')s work together</);
  assert.match(homePage, />View CV</);
  assert.match(homePage, /Software Engineer/);
});

test("keeps professional profile links available without competing with the main actions", () => {
  assert.match(homePage, /href="https:\/\/www\.linkedin\.com\/in\/anas-zulkifli-mohd-jeffry"/);
  assert.match(homePage, /href="https:\/\/github\.com\/Zer0-01"/);
});

test("closes every page with a contact prompt, email and footer links", () => {
  for (const page of [homePage, projectPage]) {
    assert.match(page, />Have a product in mind\?</);
    assert.match(page, /href="mailto:anas\.zulkifli2001@gmail\.com"/);
    assert.match(page, /aria-label="Footer navigation"/);
    assert.match(page, /href="#top"/);
    assert.doesNotMatch(page, /id="top"/, "an element with id=\"top\" would stop Back to top reaching the page top");
  }
});

test("omits the standalone portfolio statistics section", () => {
  assert.doesNotMatch(homePage, /Years Experience/);
  assert.doesNotMatch(homePage, /Completed Projects/);
  assert.doesNotMatch(homePage, /Side Projects/);
});

test("places selected work directly after the hero, before experience", () => {
  const heroIndex = homePage.indexOf('id="hero-heading"');
  const workIndex = homePage.indexOf('id="work"');
  const experienceIndex = homePage.indexOf('id="experience"');

  assert.ok(heroIndex >= 0, "expected the hero heading to be rendered");
  assert.ok(workIndex > heroIndex, "expected work after the hero");
  assert.ok(experienceIndex > workIndex, "expected experience after work");
});

test("shows role progression and concrete contributions without product names", () => {
  assert.match(homePage, />Mobile Developer</);
  assert.match(homePage, />Junior Mobile Developer</);
  assert.match(homePage, />Software Engineer Intern</);
  assert.match(homePage, />Jan 2026 – Now</);
  assert.match(homePage, />Sep 2024 – Dec 2025</);
  assert.match(homePage, />Mar – Aug 2024</);
  assert.match(homePage, /commerce and field app for farmers/);
  assert.match(homePage, /preparing and running automated drone missions/);
  assert.match(homePage, /fuel-retail point-of-sale app/);
  assert.match(homePage, /legacy native stock-management app to Flutter/);
  assert.doesNotMatch(homePage, /MIST FA|Ronpos/);
});

test("places the tech stack after experience", () => {
  const experienceIndex = homePage.indexOf('id="experience"');
  const techStackIndex = homePage.indexOf('id="tech-stack"');

  assert.ok(experienceIndex >= 0, "expected experience to be rendered");
  assert.ok(techStackIndex > experienceIndex, "expected tech stack after experience");
});

test("groups the tech stack into short labelled rows without a skills tab", () => {
  for (const group of ["Mobile", "Web", "Backend &amp; data", "AI tools", "Tooling"]) {
    assert.match(homePage, new RegExp(`>${group}</h3>`));
  }
  for (const technology of ["Flutter", "Bloc", "Swift", "Kotlin", "Next\\.js", "React", "Nuxt", "Vue", "Tailwind CSS", "NestJS", "Go", "PostgreSQL", "Firebase", "Claude", "Codex", "Git", "GitHub", "Fastlane", "Netlify"]) {
    assert.match(homePage, new RegExp(`>${technology}</li>`));
  }

  assert.doesNotMatch(homePage, />Skills</);
});

test("features three projects and lists the rest as more projects", () => {
  assert.match(homePage, />Aonic Agriculture</);
  assert.match(homePage, />LQ Studio</);
  assert.match(homePage, />Wedding RSVP</);

  assert.match(homePage, />More projects</);
  for (const slug of ["numeru", "vortex-academia", "iseba", "muzika-kata"]) {
    assert.match(homePage, new RegExp(`href="/projects/${slug}"`));
  }
});

test("describes each featured project in one short line with its technologies", () => {
  assert.match(homePage, /Shopping, credit and offline field tools for farmers, in one app\./);
  assert.match(homePage, /Replaced WhatsApp back-and-forth with online session booking\./);
  assert.match(homePage, /My own wedding invitation: details, RSVPs and messages in one link\./);
  assert.match(homePage, />Mobile Developer · Aonic</);
  assert.match(homePage, />Co-founder &amp; Developer · LakarSoft</);
  assert.match(homePage, />Personal project</);

  assert.match(homePage, />Flutter</);
  assert.match(homePage, />Go</);
  assert.match(homePage, />PostgreSQL</);
  assert.match(homePage, />Firebase</);
});

test("uses product imagery without exposing an unfinished case-study action", () => {
  assert.match(homePage, /alt="Aonic Agriculture screen 1 of 5"/);
  assert.match(homePage, /alt="LQ Studio screen 1 of 6"/);
  assert.match(homePage, /alt="Wedding RSVP screen 1 of 5"/);
  assert.doesNotMatch(homePage, /View case study/i);
});

test("lets visitors switch between web project screens", () => {
  assert.match(homePage, /aria-label="Show screen 2 of 6"/);
  assert.match(homePage, /aria-pressed="true"/);
});

test("keeps the theme toggle accessible without rendering a tooltip", () => {
  assert.match(homePage, /aria-label="Toggle color theme"/);
  assert.doesNotMatch(homePage, /role="tooltip"/);
  assert.doesNotMatch(homePage, /theme-toggle-tooltip/);
});

test("publishes descriptive canonical and social metadata for the portfolio", () => {
  assert.match(
    homePage,
    /<title>Anas Zulkifli \| Product-focused Developer<\/title>/,
  );
  assert.match(
    homePage,
    /<meta name="description" content="Anas Zulkifli is a product-focused developer building reliable web and mobile experiences from idea to launch\."/,
  );
  assert.match(homePage, /<link rel="canonical" href="https:\/\/anaszulkifli\.dev"/);
  assert.match(homePage, /<meta property="og:type" content="website"/);
  assert.match(homePage, /<meta property="og:url" content="https:\/\/anaszulkifli\.dev"/);
  assert.match(homePage, /<meta name="twitter:card" content="summary_large_image"/);
});

test("describes the portfolio owner with crawlable structured data", () => {
  assert.match(homePage, /<script type="application\/ld\+json">/);
  assert.match(homePage, /"@type":"Person"/);
  assert.match(homePage, /"name":"Anas Zulkifli"/);
  assert.match(homePage, /"url":"https:\/\/anaszulkifli\.dev"/);
  assert.match(homePage, /"jobTitle":"Product-focused Developer"/);
});

test("publishes project-specific metadata instead of inheriting the homepage title", () => {
  assert.match(projectPage, /<title>Numeru \| Anas Zulkifli<\/title>/);
  assert.match(
    projectPage,
    /<meta name="description" content="A calculator app for everyday maths and splitting bills\."/,
  );
  assert.match(
    projectPage,
    /<link rel="canonical" href="https:\/\/anaszulkifli\.dev\/projects\/numeru"/,
  );
  assert.match(
    projectPage,
    /<meta property="og:url" content="https:\/\/anaszulkifli\.dev\/projects\/numeru"/,
  );
});

test("presents project facts, short sections and a next-project link", () => {
  assert.match(projectPage, /<h1[^>]*>Numeru<\/h1>/);
  assert.match(projectPage, /<dt[^>]*>Role<\/dt><dd[^>]*>Mobile Developer<\/dd>/);
  assert.match(projectPage, /<dt[^>]*>For<\/dt><dd[^>]*>LakarSoft<\/dd>/);
  assert.match(projectPage, />What I built</);
  assert.match(projectPage, />Bill splitting</);
  assert.doesNotMatch(projectPage, /Coming soon/);
  assert.match(projectPage, /aria-label="Next project"/);
  assert.match(projectPage, /href="\/projects\/vortex-academia"/);
});

test("allows search engines to crawl pages and rendering assets", () => {
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \//i);
  assert.doesNotMatch(robots, /Disallow:/i);
  assert.match(robots, /Sitemap: https:\/\/anaszulkifli\.dev\/sitemap\.xml/i);
});

test("lists the canonical homepage and every published project in the sitemap", () => {
  const expectedUrls = [
    "https://anaszulkifli.dev",
    "https://anaszulkifli.dev/projects/aonic-agriculture",
    "https://anaszulkifli.dev/projects/numeru",
    "https://anaszulkifli.dev/projects/e-wedding",
    "https://anaszulkifli.dev/projects/vortex-academia",
    "https://anaszulkifli.dev/projects/iseba",
    "https://anaszulkifli.dev/projects/muzika-kata",
  ];

  for (const url of expectedUrls) {
    assert.match(sitemap, new RegExp(`<loc>${url}</loc>`));
  }
});

test("offers section navigation in page order with a single contact action", () => {
  assert.match(homePage, /aria-label="Main navigation"/);
  const workLink = homePage.indexOf('href="/#work"');
  const experienceLink = homePage.indexOf('href="/#experience"');
  const stackLink = homePage.indexOf('href="/#tech-stack"');

  assert.ok(workLink >= 0, "expected a Work nav link");
  assert.ok(experienceLink > workLink, "expected Experience after Work");
  assert.ok(stackLink > experienceLink, "expected Stack after Experience");
  assert.match(homePage, />Let(?:&#x27;|')s talk/);
  assert.match(homePage, /aria-label="Open menu"/);
});

test("shows a breadcrumb back to selected work on project pages", () => {
  assert.match(projectPage, /aria-label="Breadcrumb"/);
  assert.match(projectPage, /aria-current="page"[^>]*>numeru</);
  assert.doesNotMatch(homePage, /aria-label="Breadcrumb"/);
});
