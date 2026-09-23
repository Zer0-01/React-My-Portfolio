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

test("omits the standalone portfolio statistics section", () => {
  assert.doesNotMatch(homePage, /Years Experience/);
  assert.doesNotMatch(homePage, /Completed Projects/);
  assert.doesNotMatch(homePage, /Side Projects/);
});

test("places professional experience between the hero and selected work", () => {
  const heroIndex = homePage.indexOf('id="hero-heading"');
  const experienceIndex = homePage.indexOf('id="experience"');
  const workIndex = homePage.indexOf('id="work"');

  assert.ok(heroIndex >= 0, "expected the hero heading to be rendered");
  assert.ok(experienceIndex > heroIndex, "expected experience after the hero");
  assert.ok(workIndex > experienceIndex, "expected work after experience");
});

test("shows role progression and concrete contributions without product names", () => {
  assert.match(homePage, />Mobile Developer</);
  assert.match(homePage, />Junior Mobile Developer</);
  assert.match(homePage, />Software Engineer Intern</);
  assert.match(homePage, /January 2026(?:<!-- -->)?–(?:<!-- -->)?Present/);
  assert.match(homePage, /September 2024(?:<!-- -->)?–(?:<!-- -->)?December 2025/);
  assert.match(homePage, /mobile commerce and field-utility app/);
  assert.match(homePage, /executing automated drone missions/);
  assert.match(homePage, /fuel-retail point-of-sale application/);
  assert.match(homePage, /legacy native stock-management application to Flutter/);
  assert.doesNotMatch(homePage, /MIST FA|Ronpos/);
});
