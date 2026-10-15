import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

process.env.CACHE_DIR = path.join(tmpdir(), "arif-portfolio-deploy-cache");

const require = createRequire(import.meta.url);
const { publish } = require("gh-pages");
const outputDirectory = path.resolve("out");

if (!existsSync(path.join(outputDirectory, "index.html"))) {
  throw new Error("Static export not found. Run `npm run build` before deploying.");
}

try {
  await publish(outputDirectory, {
    branch: "gh-pages",
    dotfiles: true,
    nojekyll: true,
  });
  console.log("Published the static export to the gh-pages branch.");
} catch (error) {
  console.error("GitHub Pages deployment failed.");
  console.error(error);
  process.exitCode = 1;
}
