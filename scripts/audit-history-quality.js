const fs = require("node:fs");
const path = require("node:path");

global.window = {};

function requireIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    require(filePath);
  }
}

function requireTree(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      requireTree(entryPath);
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      require(entryPath);
    }
  }
}

const dataDir = path.join(__dirname, "../data");
const dynastyDir = path.join(dataDir, "dynasties");
requireIfExists(path.join(dataDir, "time-utils.js"));
for (const dir of fs.readdirSync(dynastyDir).sort()) {
  for (const file of ["metadata.js", "sources.js", "events.js", "emperors.js"]) {
    requireIfExists(path.join(dynastyDir, dir, file));
  }
}
requireTree(path.join(dataDir, "topics"));
requireTree(path.join(dataDir, "regions"));
requireIfExists(path.join(dataDir, "territory-population.js"));
requireIfExists(path.join(dataDir, "political-maps.js"));
require(path.join(dataDir, "index.js"));

const data = window.HISTORY_DATA || {};
const normalizedEventsByDynasty = Object.groupBy(data.events || [], (event) => event.dynastyId);
const errors = [];
const warnings = [];
const sharedEventIds = [];
const shortProcessEvents = [];
const genericProcessEvents = [];
const badGeoRegions = [];
const structuredProcessNodes = [];
const structuredProcessGaps = [];

function labelForEvent(event) {
  return `${event.dynastyId || "unknown"}/${event.id || event.title || "untitled"}`;
}

function pushBadToken(value, label) {
  if (value == null) return;
  if (typeof value === "string") {
    if (/\[object Object\]|undefined|null|NaN/.test(value)) {
      errors.push(`${label}: contains broken display token`);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => pushBadToken(item, `${label}[${index}]`));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      pushBadToken(child, `${label}.${key}`);
    }
  }
}

function collectDuplicates(items, getKey) {
  const seen = new Map();
  for (const item of items || []) {
    const key = getKey(item);
    if (!key) continue;
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(item);
  }
  return [...seen.entries()].filter(([, rows]) => rows.length > 1);
}

const dynastyIds = new Set((data.dynasties || []).map((dynasty) => dynasty.id));
const eventIds = new Set((data.events || []).map((event) => event.id));
const knownRegionRoots = new Set(["东亚", "南亚", "东南亚", "西亚", "欧洲", "非洲", "北美", "南美", "亚非欧交界"]);
const genericProcessSuffix = "这一步会改变后续权力配置、区域格局或制度运行，所以需要放在主线中理解。";

for (const [key, rows] of collectDuplicates(data.dynasties, (item) => item.id)) {
  errors.push(`dynasties: duplicate ${key} x${rows.length}`);
}
for (const [key, rows] of collectDuplicates(data.emperors, (item) => `${item.dynastyId}:${item.id || item.name}`)) {
  errors.push(`emperors: duplicate ${key} x${rows.length}`);
}
for (const [key, rows] of collectDuplicates(data.events, (item) => item.id)) {
  const buckets = new Set(rows.map((event) => event.dynastyId));
  if (buckets.size === 1) {
    errors.push(`events: duplicate ${key} x${rows.length} in ${[...buckets][0]}`);
  } else {
    sharedEventIds.push(`${key} (${[...buckets].join(", ")})`);
  }
}
pushBadToken(data, "HISTORY_DATA");

for (const dynasty of data.dynasties || []) {
  const events = data.dynastyEvents?.[dynasty.id];
  const emperors = data.dynastyEmperors?.[dynasty.id];
  if (!Array.isArray(events)) errors.push(`${dynasty.id}: missing dynastyEvents collection`);
  if (!Array.isArray(emperors)) errors.push(`${dynasty.id}: missing dynastyEmperors collection`);
  for (const [key, rows] of collectDuplicates(events, (event) => event.id)) {
    errors.push(`${dynasty.id}: duplicate event id ${key} x${rows.length}`);
  }
  for (const event of events || []) {
    if (event.dynastyId !== dynasty.id) {
      errors.push(`${labelForEvent(event)}: stored under wrong dynastyEvents bucket ${dynasty.id}`);
    }
  }
}

for (const [dynastyId, events] of Object.entries(normalizedEventsByDynasty)) {
  if (!dynastyIds.has(dynastyId)) {
    errors.push(`dynastyEvents.${dynastyId}: dynasty metadata does not exist`);
  }
  let reversals = 0;
  let previous = null;
  for (const event of events || []) {
    if (!Number.isFinite(event.timelineStartYear)) {
      errors.push(`${labelForEvent(event)}: timelineStartYear is not a usable timeline year`);
    }
    if (previous !== null && Number.isFinite(event.timelineStartYear) && event.timelineStartYear < previous) {
      reversals += 1;
    }
    if (Number.isFinite(event.timelineStartYear)) previous = event.timelineStartYear;
  }
  if ((events || []).length >= 12 && reversals > Math.max(2, Math.floor(events.length * 0.12))) {
    warnings.push(`${dynastyId}: raw event order has ${reversals} timeline reversals; check whether the left timeline will feel jumpy`);
  }
}

for (const event of data.events || []) {
  const label = labelForEvent(event);
  if (!dynastyIds.has(event.dynastyId)) {
    errors.push(`${label}: event.dynastyId has no metadata`);
  }
  if (!Array.isArray(event.people)) {
    errors.push(`${label}: people must be an array`);
  } else {
    for (const [index, person] of event.people.entries()) {
      if (!person || typeof person !== "object" || Array.isArray(person)) {
        errors.push(`${label}: people[${index}] must be an object`);
      } else if (typeof person.name !== "string" || !person.name.trim()) {
        errors.push(`${label}: people[${index}].name must be a non-empty string`);
      }
    }
  }
  if (!Array.isArray(event.process) || event.process.length < 3) {
    shortProcessEvents.push(label);
  }
  let genericCount = 0;
  for (const [index, item] of (event.process || []).entries()) {
    if (!item || typeof item !== "object") {
      errors.push(`${label}: process[${index}] must be an object`);
      continue;
    }
    if (!item.time || !item.title || !item.description) {
      errors.push(`${label}: process[${index}] is missing time/title/description`);
    }
    const hasStructuredFields = ["participants", "action", "impact"].some((field) => field in item);
    if (hasStructuredFields) {
      structuredProcessNodes.push(`${label}[${index}]`);
      for (const field of ["participants", "action", "impact"]) {
        if ((field === "participants" && (!Array.isArray(item[field]) || !item[field].length)) || (field !== "participants" && typeof item[field] !== "string")) {
          structuredProcessGaps.push(`${label}[${index}].${field}`);
        }
      }
    }
    if (String(item.description || "").includes(genericProcessSuffix)) genericCount += 1;
  }
  if (genericCount >= 2) {
    genericProcessEvents.push(`${label} x${genericCount}`);
  }
  if (!Array.isArray(event.regions) || !event.regions.length) {
    errors.push(`${label}: regions is required`);
  }
  if (event.sourceRequirement === "verified") {
    const hasHttps = (event.sources || []).some((source) => /^https:\/\//.test(source.url || ""));
    if (!hasHttps) errors.push(`${label}: verified event has no HTTPS source`);
  }
  for (const relatedId of [...(event.previousEventIds || []), ...(event.nextEventIds || [])]) {
    if (!eventIds.has(relatedId)) errors.push(`${label}: relation points to missing event ${relatedId}`);
  }
}

for (const historyPackage of data.civilizationPackages || []) {
  const packageEvents = (historyPackage.moduleIds || [])
    .flatMap((moduleId) => normalizedEventsByDynasty[moduleId] || []);
  const roots = new Set(packageEvents.flatMap((event) => event.regions || []).map((region) => String(region).trim()).filter(Boolean));
  if (roots.size > 12) warnings.push(`${historyPackage.id}: package has ${roots.size} region labels; check taxonomy consistency`);
}

if (sharedEventIds.length) warnings.push(`sharedEventIds=${sharedEventIds.length}; samples=${sharedEventIds.slice(0, 12).join(" | ")}`);
if (shortProcessEvents.length) warnings.push(`processLt3=${shortProcessEvents.length}; samples=${shortProcessEvents.slice(0, 12).join(" | ")}`);
if (genericProcessEvents.length) warnings.push(`genericProcessSuffix=${genericProcessEvents.length}; samples=${genericProcessEvents.slice(0, 12).join(" | ")}`);
if (badGeoRegions.length) warnings.push(`badGeoRegionTaxonomy=${badGeoRegions.length}; samples=${badGeoRegions.slice(0, 12).join(" | ")}`);

const byModule = Object.entries(normalizedEventsByDynasty)
  .map(([dynastyId, events]) => ({
    dynastyId,
    events: (events || []).length,
    processLt3: (events || []).filter((event) => (event.process || []).length < 3).length,
    eventsWithoutMap: (events || []).filter((event) => !(data.politicalMaps?.[dynastyId]?.snapshots || []).some((map) => (map.eventIds || []).includes(event.id))).length
  }))
  .sort((a, b) => b.events - a.events);

const levelCounts = ["core", "mainline", "outline"].map((level) => [level, (data.events || []).filter((event) => event.contentLevel === level).length]);
const unstructuredProcessNodes = (data.events || []).flatMap((event) => (event.process || []).map((node) => ({ event, node })))
  .filter(({ node }) => !["participants", "action", "impact"].every((field) => field in node));

console.log(`qualityErrors=${errors.length}`);
console.log(`qualityWarnings=${warnings.length}`);
console.log(`processStructuredNodes=${structuredProcessNodes.length}`);
console.log(`processStructuredGaps=${structuredProcessGaps.length}`);
console.log(`unstructuredProcessNodes=${unstructuredProcessNodes.length}`);
console.log(`contentLevels=${levelCounts.map(([level, count]) => `${level}:${count}`).join(",")}`);
console.log("topModulesByEventCount=");
for (const row of byModule.slice(0, 12)) {
  console.log(`- ${row.dynastyId}: events=${row.events}, processLt3=${row.processLt3}, eventsWithoutMap=${row.eventsWithoutMap}`);
}

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings.slice(0, 80)) console.log("- " + warning);
  if (warnings.length > 80) console.log(`- ... ${warnings.length - 80} more warnings`);
}

if (errors.length) {
  console.log("\nErrors:");
  for (const error of errors) console.log("- " + error);
  process.exit(1);
}
