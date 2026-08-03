const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dataRoot = path.join(root, "data");
const output = path.join(dataRoot, "bundle.js");
const sources = [];

function add(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (fs.existsSync(absolutePath)) sources.push(relativePath.replaceAll(path.sep, "/"));
}

const dynastyRoot = path.join(dataRoot, "dynasties");
for (const dynasty of fs.readdirSync(dynastyRoot).sort()) {
  for (const file of ["metadata.js", "sources.js", "events.js", "emperors.js"]) {
    add(path.join("data", "dynasties", dynasty, file));
  }
}

for (const file of fs.readdirSync(path.join(dataRoot, "topics")).sort()) {
  if (file.endsWith(".js")) add(path.join("data", "topics", file));
}

function addRegionFiles(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes: true}).sort((a, b) => a.name.localeCompare(b.name))) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) addRegionFiles(absolutePath);
    else if (entry.isFile() && entry.name.endsWith(".js")) add(path.relative(root, absolutePath));
  }
}

addRegionFiles(path.join(dataRoot, "regions"));
add("data/territory-population.js");
add("data/political-maps.js");
add("data/index.js");

const chunks = ["// Generated static data bundle. Source files remain split by dynasty/region."];
for (const relativePath of sources) {
  chunks.push(`\n// --- ${relativePath} ---\n`);
  chunks.push(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

fs.writeFileSync(output, `${chunks.join("\n")}\n`, "utf8");
console.log(`Generated ${path.relative(root, output)} from ${sources.length} source files.`);
