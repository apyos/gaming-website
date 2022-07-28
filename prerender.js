import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

// Get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Load template and server build
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// Render the index page and insert it into the template
const appHtml = await render();
const html = template
  .replace(`<!--app-html-->`, appHtml)
  .replace(/.*<script type="module" .*><\/script>\n/, "");

// Write the index.html file
const filePath = `dist/static/index.html`;
fs.writeFileSync(toAbsolute(filePath), html);
