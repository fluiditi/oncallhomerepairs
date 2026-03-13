#!/usr/bin/env node
/**
 * Clone a geo directory from plumber-huddersfield as template.
 *
 * Usage:
 *   node scripts/clone-geo.js london London "Greater London" seoConfigLondon seo-london
 *
 * Arguments:
 *   1. slug       - URL slug (e.g. "london")
 *   2. city       - Display city name (e.g. "London")
 *   3. county     - Display county name (e.g. "Greater London")
 *   4. configVar  - Export variable name from seo config (e.g. "seoConfigLondon")
 *   5. configFile - Config file name without extension (e.g. "seo-london")
 *
 * Pass --force to overwrite existing directories.
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const force = args.includes("--force");
const positional = args.filter((a) => a !== "--force");
const [slug, city, county, configVar, configFile] = positional;

if (!slug || !city || !county || !configVar || !configFile) {
  console.error(
    "Usage: node scripts/clone-geo.js <slug> <city> <county> <configVar> <configFile> [--force]"
  );
  process.exit(1);
}

const SRC = path.join(__dirname, "..", "src", "app", "plumber-huddersfield");
const DEST = path.join(__dirname, "..", "src", "app", `plumber-${slug}`);

// Template city values (from Huddersfield)
const FROM_CITY = "Huddersfield";
const FROM_COUNTY = "West Yorkshire";
const FROM_SLUG = "huddersfield";
const FROM_CONFIG_VAR = "seoConfigHuddersfield";
const FROM_CONFIG_FILE = "seo-huddersfield";

// Huddersfield service areas that appear in prose text
const FROM_AREAS = [
  "Holmfirth",
  "Marsden",
  "Slaithwaite",
  "Meltham",
  "Honley",
  "Almondbury",
  "Lindley",
  "Birkby",
  "Kirkheaton",
  "Mirfield",
  "Linthwaite",
  "Golcar",
  "Milnsbridge",
  "Netherton",
  "Lepton",
  "Kirkburton",
  "Shelley",
  "Denby Dale",
];

// Read target config to get its service areas
function getTargetAreas() {
  const configPath = path.join(
    __dirname,
    "..",
    "src",
    "config",
    `${configFile}.ts`
  );
  const configContent = fs.readFileSync(configPath, "utf8");

  // Extract serviceAreas array from config file
  const match = configContent.match(/serviceAreas:\s*\[([\s\S]*?)\]/);
  if (!match) return FROM_AREAS; // fallback

  const areas = [];
  const re = /"([^"]+)"/g;
  let m;
  while ((m = re.exec(match[1])) !== null) {
    // Skip the city name itself (first entry)
    if (m[1] !== city) areas.push(m[1]);
  }
  return areas;
}

const TARGET_AREAS = getTargetAreas();

function replaceContent(content) {
  // Replace config import
  content = content.replace(
    new RegExp(`from "@/config/${FROM_CONFIG_FILE}"`, "g"),
    `from "@/config/${configFile}"`
  );
  content = content.replace(new RegExp(FROM_CONFIG_VAR, "g"), configVar);

  // Replace URL paths
  content = content.replace(
    new RegExp(`/plumber-${FROM_SLUG}`, "g"),
    `/plumber-${slug}`
  );

  // Replace city/county in strings (metadata, headings, prose)
  content = content.replace(new RegExp(FROM_CITY, "g"), city);
  content = content.replace(new RegExp(FROM_COUNTY, "g"), county);

  // Replace area-specific references
  // Map each Huddersfield area to corresponding target area (cycling if needed)
  for (let i = 0; i < FROM_AREAS.length; i++) {
    const targetArea = TARGET_AREAS[i % TARGET_AREAS.length] || city;
    content = content.replace(new RegExp(FROM_AREAS[i], "g"), targetArea);
  }

  // Replace canonical URL slugs
  content = content.replace(
    new RegExp(`plumber-${FROM_SLUG}`, "g"),
    `plumber-${slug}`
  );

  return content;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.name === "page.tsx" || entry.name === "layout.tsx") {
      let content = fs.readFileSync(srcPath, "utf8");
      content = replaceContent(content);
      fs.writeFileSync(destPath, content);
    }
  }
}

if (fs.existsSync(DEST)) {
  if (force) {
    fs.rmSync(DEST, { recursive: true });
  } else {
    console.log(`SKIP: ${DEST} already exists (use --force to overwrite)`);
    process.exit(0);
  }
}

copyDir(SRC, DEST);
console.log(`DONE: Created plumber-${slug} (${city}, ${county})`);
