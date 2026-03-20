const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.lavmotors.com";
const OUT_DIR = path.join(__dirname, "scraped");

async function scrape() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Loading homepage...");
  await page.goto(SITE_URL, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));

  console.log("Taking full-page screenshot...");
  await page.screenshot({
    path: path.join(OUT_DIR, "homepage-full.png"),
    fullPage: true,
  });

  await page.screenshot({
    path: path.join(OUT_DIR, "homepage-viewport.png"),
  });

  console.log("Extracting text content...");
  const textContent = await page.evaluate(() => {
    const body = document.body;
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
    const texts = [];
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent.trim();
      if (text && text.length > 1) {
        const parent = node.parentElement;
        const tag = parent ? parent.tagName : "UNKNOWN";
        texts.push({ tag, text });
      }
    }
    return texts;
  });

  fs.writeFileSync(path.join(OUT_DIR, "text-content.json"), JSON.stringify(textContent, null, 2));

  console.log("Extracting page structure...");
  const structure = await page.evaluate(() => {
    const data = {};
    data.navLinks = [...document.querySelectorAll("nav a, header a")].map((a) => ({
      text: a.textContent.trim(),
      href: a.href,
    }));
    data.allLinks = [...new Set([...document.querySelectorAll("a")].map((a) => a.href))].filter((h) => h.startsWith("http"));
    data.headings = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((h) => ({
      tag: h.tagName,
      text: h.textContent.trim(),
    }));
    data.images = [...document.querySelectorAll("img")].map((img) => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
    }));
    data.buttons = [...document.querySelectorAll("button, [role='button']")].map((b) => b.textContent.trim()).filter(Boolean);
    data.sections = [...document.querySelectorAll("section, div[id*='comp-']")].slice(0, 30).map((s) => {
      const style = window.getComputedStyle(s);
      return { id: s.id, bg: style.backgroundColor, text: s.textContent.trim().slice(0, 300) };
    });
    return data;
  });

  fs.writeFileSync(path.join(OUT_DIR, "structure.json"), JSON.stringify(structure, null, 2));

  const internalLinks = structure.allLinks.filter(
    (link) => link.includes("lavmotors.com") && !link.includes("#") && link !== SITE_URL && link !== SITE_URL + "/"
  );
  console.log("Found internal links:", internalLinks);

  for (const link of internalLinks) {
    const pageName = new URL(link).pathname.replace(/\//g, "-").replace(/^-/, "") || "home";
    console.log("Scraping:", link);
    try {
      await page.goto(link, { waitUntil: "networkidle0", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 3000));
      await page.screenshot({ path: path.join(OUT_DIR, `page-${pageName}.png`), fullPage: true });
      const pageText = await page.evaluate(() => document.body.innerText);
      fs.writeFileSync(path.join(OUT_DIR, `page-${pageName}-text.txt`), pageText);
    } catch (e) {
      console.log("  Failed:", e.message);
    }
  }

  console.log("Taking mobile screenshot...");
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(SITE_URL, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 5000));
  await page.screenshot({ path: path.join(OUT_DIR, "homepage-mobile.png"), fullPage: true });

  await browser.close();
  console.log("\nDone! Check the 'scraped' folder.");
}

scrape().catch(console.error);
