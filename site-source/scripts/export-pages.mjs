import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repository = path.resolve(source, "..");
const destination = path.join(repository, "landing");
const html = await readFile(path.join(source, "dist/index.html"), "utf8");
const routes = [
  "product", "product/chat", "product/predict", "product/how-it-works",
  "product/integrations", "product/enterprise-readiness",
  "solutions/customer-churn", "solutions/customer-lifetime-value",
  "solutions/customer-segmentation", "outcomes", "book-demo", "login", "404",
];
await mkdir(destination, { recursive: true });
await cp(path.join(source, "dist"), destination, { recursive: true });
for (const route of routes) {
  const directory = path.join(destination, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}
await writeFile(path.join(repository, ".nojekyll"), "");
await writeFile(path.join(repository, "landing.html"), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>KINLU | Unified platform</title><meta http-equiv="refresh" content="0;url=/Kinlu-Docs/landing/">
<script>location.replace('/Kinlu-Docs/landing/' + location.search + location.hash);</script></head>
<body><a href="/Kinlu-Docs/landing/">Open the KINLU website</a></body></html>\n`);
console.log(`Exported ${routes.length + 1} page entry points to ${destination}`);
