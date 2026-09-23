import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { after, before, test } from "node:test";

const port = 3107;
const baseUrl = `http://127.0.0.1:${port}`;
let devServer: ChildProcess;
let homePage = "";

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
  assert.match(homePage, /I build digital products from idea to launch\./);
  assert.match(homePage, /I turn real problems into clear, reliable digital experiences/);
  assert.match(homePage, /Product-focused developer/);
});

test("provides direct contact and portfolio actions", () => {
  assert.match(homePage, /href="https:\/\/wa\.me\/601154066082"/);
  assert.match(homePage, />Let(?:&#x27;|')s work together</);
  assert.match(homePage, /href="#work"/);
  assert.match(homePage, />View my work</);
});

test("keeps professional profile links available without competing with the main actions", () => {
  assert.match(homePage, /href="https:\/\/www\.linkedin\.com\/in\/anas-zulkifli-mohd-jeffry"/);
  assert.match(homePage, /href="https:\/\/github\.com\/Zer0-01"/);
  assert.match(homePage, />View CV</);
});
