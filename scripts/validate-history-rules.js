const path = require("node:path");
const fs = require("node:fs");

global.window = {};
require(path.join(__dirname, "../data/time-utils.js"));
require(path.join(__dirname, "../data/dynasties/shang/metadata.js"));
require(path.join(__dirname, "../data/dynasties/shang/events.js"));
require(path.join(__dirname, "../data/dynasties/shang/emperors.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/metadata.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/events.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/emperors.js"));
require(path.join(__dirname, "../data/dynasties/spring-autumn-warring-states/metadata.js"));
require(path.join(__dirname, "../data/dynasties/spring-autumn-warring-states/events.js"));
require(path.join(__dirname, "../data/dynasties/spring-autumn-warring-states/emperors.js"));
require(path.join(__dirname, "../data/dynasties/qin/metadata.js"));
require(path.join(__dirname, "../data/dynasties/qin/events.js"));
require(path.join(__dirname, "../data/dynasties/qin/emperors.js"));
require(path.join(__dirname, "../data/dynasties/western-han/metadata.js"));
require(path.join(__dirname, "../data/dynasties/western-han/events.js"));
require(path.join(__dirname, "../data/dynasties/western-han/emperors.js"));
require(path.join(__dirname, "../data/dynasties/xin/metadata.js"));
require(path.join(__dirname, "../data/dynasties/xin/events.js"));
require(path.join(__dirname, "../data/dynasties/xin/emperors.js"));
require(path.join(__dirname, "../data/dynasties/eastern-han/metadata.js"));
require(path.join(__dirname, "../data/dynasties/eastern-han/events.js"));
require(path.join(__dirname, "../data/dynasties/eastern-han/emperors.js"));
require(path.join(__dirname, "../data/dynasties/late-han-three-kingdoms/metadata.js"));
require(path.join(__dirname, "../data/dynasties/late-han-three-kingdoms/events.js"));
require(path.join(__dirname, "../data/dynasties/late-han-three-kingdoms/emperors.js"));
require(path.join(__dirname, "../data/dynasties/northern-southern/metadata.js"));
require(path.join(__dirname, "../data/dynasties/northern-southern/events.js"));
require(path.join(__dirname, "../data/dynasties/northern-southern/emperors.js"));
require(path.join(__dirname, "../data/dynasties/sui/metadata.js"));
require(path.join(__dirname, "../data/dynasties/sui/events.js"));
require(path.join(__dirname, "../data/dynasties/sui/emperors.js"));
require(path.join(__dirname, "../data/dynasties/tang/metadata.js"));
require(path.join(__dirname, "../data/dynasties/tang/events.js"));
require(path.join(__dirname, "../data/dynasties/tang/emperors.js"));
require(path.join(__dirname, "../data/dynasties/five-dynasties-ten-kingdoms/metadata.js"));
require(path.join(__dirname, "../data/dynasties/five-dynasties-ten-kingdoms/events.js"));
require(path.join(__dirname, "../data/dynasties/five-dynasties-ten-kingdoms/emperors.js"));
require(path.join(__dirname, "../data/dynasties/northern-song/metadata.js"));
require(path.join(__dirname, "../data/dynasties/northern-song/events.js"));
require(path.join(__dirname, "../data/dynasties/northern-song/emperors.js"));
require(path.join(__dirname, "../data/dynasties/southern-song/metadata.js"));
require(path.join(__dirname, "../data/dynasties/southern-song/events.js"));
require(path.join(__dirname, "../data/dynasties/southern-song/emperors.js"));
require(path.join(__dirname, "../data/dynasties/liao/metadata.js"));
require(path.join(__dirname, "../data/dynasties/liao/events.js"));
require(path.join(__dirname, "../data/dynasties/liao/emperors.js"));
require(path.join(__dirname, "../data/dynasties/western-xia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/western-xia/events.js"));
require(path.join(__dirname, "../data/dynasties/western-xia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/jin/metadata.js"));
require(path.join(__dirname, "../data/dynasties/jin/events.js"));
require(path.join(__dirname, "../data/dynasties/jin/emperors.js"));
require(path.join(__dirname, "../data/dynasties/mongol/metadata.js"));
require(path.join(__dirname, "../data/dynasties/mongol/events.js"));
require(path.join(__dirname, "../data/dynasties/mongol/emperors.js"));
require(path.join(__dirname, "../data/dynasties/yuan/metadata.js"));
require(path.join(__dirname, "../data/dynasties/yuan/events.js"));
require(path.join(__dirname, "../data/dynasties/yuan/emperors.js"));
require(path.join(__dirname, "../data/dynasties/ming/metadata.js"));
require(path.join(__dirname, "../data/dynasties/ming/events.js"));
require(path.join(__dirname, "../data/dynasties/ming/emperors.js"));
require(path.join(__dirname, "../data/dynasties/qing/metadata.js"));
require(path.join(__dirname, "../data/dynasties/qing/events.js"));
require(path.join(__dirname, "../data/dynasties/qing/emperors.js"));
require(path.join(__dirname, "../data/dynasties/modern-china/metadata.js"));
require(path.join(__dirname, "../data/dynasties/modern-china/events.js"));
require(path.join(__dirname, "../data/dynasties/modern-china/emperors.js"));
require(path.join(__dirname, "../data/dynasties/republican-china/metadata.js"));
require(path.join(__dirname, "../data/dynasties/republican-china/events.js"));
require(path.join(__dirname, "../data/dynasties/republican-china/emperors.js"));
require(path.join(__dirname, "../data/dynasties/war-of-resistance/metadata.js"));
require(path.join(__dirname, "../data/dynasties/war-of-resistance/events.js"));
require(path.join(__dirname, "../data/dynasties/war-of-resistance/emperors.js"));
require(path.join(__dirname, "../data/dynasties/liberation-construction/metadata.js"));
require(path.join(__dirname, "../data/dynasties/liberation-construction/events.js"));
require(path.join(__dirname, "../data/dynasties/liberation-construction/emperors.js"));
require(path.join(__dirname, "../data/dynasties/reform-opening/metadata.js"));
require(path.join(__dirname, "../data/dynasties/reform-opening/events.js"));
require(path.join(__dirname, "../data/dynasties/reform-opening/emperors.js"));
require(path.join(__dirname, "../data/dynasties/ancient-greece/metadata.js"));
require(path.join(__dirname, "../data/dynasties/ancient-greece/sources.js"));
require(path.join(__dirname, "../data/dynasties/ancient-greece/events.js"));
require(path.join(__dirname, "../data/dynasties/ancient-greece/emperors.js"));
require(path.join(__dirname, "../data/dynasties/roman-republic/metadata.js"));
require(path.join(__dirname, "../data/dynasties/roman-republic/sources.js"));
require(path.join(__dirname, "../data/dynasties/roman-republic/events.js"));
require(path.join(__dirname, "../data/dynasties/roman-republic/emperors.js"));
require(path.join(__dirname, "../data/dynasties/roman-empire/metadata.js"));
require(path.join(__dirname, "../data/dynasties/roman-empire/sources.js"));
require(path.join(__dirname, "../data/dynasties/roman-empire/events.js"));
require(path.join(__dirname, "../data/dynasties/roman-empire/emperors.js"));
require(path.join(__dirname, "../data/dynasties/byzantium/metadata.js"));
require(path.join(__dirname, "../data/dynasties/byzantium/sources.js"));
require(path.join(__dirname, "../data/dynasties/byzantium/events.js"));
require(path.join(__dirname, "../data/dynasties/byzantium/emperors.js"));
require(path.join(__dirname, "../data/dynasties/medieval-western-europe/metadata.js"));
require(path.join(__dirname, "../data/dynasties/medieval-western-europe/sources.js"));
require(path.join(__dirname, "../data/dynasties/medieval-western-europe/events.js"));
require(path.join(__dirname, "../data/dynasties/medieval-western-europe/emperors.js"));
require(path.join(__dirname, "../data/dynasties/russian-eastern-europe/metadata.js"));
require(path.join(__dirname, "../data/dynasties/russian-eastern-europe/sources.js"));
require(path.join(__dirname, "../data/dynasties/russian-eastern-europe/events.js"));
require(path.join(__dirname, "../data/dynasties/russian-eastern-europe/emperors.js"));
require(path.join(__dirname, "../data/dynasties/ottoman-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/ottoman-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/ottoman-world/events.js"));
require(path.join(__dirname, "../data/dynasties/ottoman-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/modern-europe/metadata.js"));
require(path.join(__dirname, "../data/dynasties/modern-europe/sources.js"));
require(path.join(__dirname, "../data/dynasties/modern-europe/events.js"));
require(path.join(__dirname, "../data/dynasties/modern-europe/emperors.js"));
require(path.join(__dirname, "../data/dynasties/ancient-egypt/metadata.js"));
require(path.join(__dirname, "../data/dynasties/ancient-egypt/sources.js"));
require(path.join(__dirname, "../data/dynasties/ancient-egypt/events.js"));
require(path.join(__dirname, "../data/dynasties/ancient-egypt/emperors.js"));
require(path.join(__dirname, "../data/dynasties/african-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/african-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/african-world/events.js"));
require(path.join(__dirname, "../data/dynasties/african-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/americas-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/americas-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/americas-world/events.js"));
require(path.join(__dirname, "../data/dynasties/americas-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/oceania-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/oceania-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/oceania-world/events.js"));
require(path.join(__dirname, "../data/dynasties/oceania-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/ancient-near-east/metadata.js"));
require(path.join(__dirname, "../data/dynasties/ancient-near-east/sources.js"));
require(path.join(__dirname, "../data/dynasties/ancient-near-east/events.js"));
require(path.join(__dirname, "../data/dynasties/ancient-near-east/emperors.js"));
require(path.join(__dirname, "../data/dynasties/sumer-early-mesopotamia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/sumer-early-mesopotamia/sources.js"));
require(path.join(__dirname, "../data/dynasties/sumer-early-mesopotamia/events.js"));
require(path.join(__dirname, "../data/dynasties/sumer-early-mesopotamia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/indus-civilization/metadata.js"));
require(path.join(__dirname, "../data/dynasties/indus-civilization/sources.js"));
require(path.join(__dirname, "../data/dynasties/indus-civilization/events.js"));
require(path.join(__dirname, "../data/dynasties/indus-civilization/emperors.js"));
require(path.join(__dirname, "../data/dynasties/maurya-gupta/metadata.js"));
require(path.join(__dirname, "../data/dynasties/maurya-gupta/sources.js"));
require(path.join(__dirname, "../data/dynasties/maurya-gupta/events.js"));
require(path.join(__dirname, "../data/dynasties/maurya-gupta/emperors.js"));
require(path.join(__dirname, "../data/dynasties/delhi-sultanate-mughal/metadata.js"));
require(path.join(__dirname, "../data/dynasties/delhi-sultanate-mughal/sources.js"));
require(path.join(__dirname, "../data/dynasties/delhi-sultanate-mughal/events.js"));
require(path.join(__dirname, "../data/dynasties/delhi-sultanate-mughal/emperors.js"));
require(path.join(__dirname, "../data/dynasties/mainland-southeast-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/mainland-southeast-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/mainland-southeast-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/mainland-southeast-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/island-southeast-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/island-southeast-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/island-southeast-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/island-southeast-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/colonial-southeast-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/colonial-southeast-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/colonial-southeast-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/colonial-southeast-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/south-asia-imperial-core/metadata.js"));
require(path.join(__dirname, "../data/dynasties/south-asia-imperial-core/sources.js"));
require(path.join(__dirname, "../data/dynasties/south-asia-imperial-core/events.js"));
require(path.join(__dirname, "../data/dynasties/south-asia-imperial-core/emperors.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia-core-kingdoms/metadata.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia-core-kingdoms/sources.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia-core-kingdoms/events.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia-core-kingdoms/emperors.js"));
require(path.join(__dirname, "../data/dynasties/steppe-silk-road-core/metadata.js"));
require(path.join(__dirname, "../data/dynasties/steppe-silk-road-core/sources.js"));
require(path.join(__dirname, "../data/dynasties/steppe-silk-road-core/events.js"));
require(path.join(__dirname, "../data/dynasties/steppe-silk-road-core/emperors.js"));
require(path.join(__dirname, "../data/dynasties/africa-essential-empires/metadata.js"));
require(path.join(__dirname, "../data/dynasties/africa-essential-empires/sources.js"));
require(path.join(__dirname, "../data/dynasties/africa-essential-empires/events.js"));
require(path.join(__dirname, "../data/dynasties/africa-essential-empires/emperors.js"));
require(path.join(__dirname, "../data/dynasties/mesoamerica-andes-core/metadata.js"));
require(path.join(__dirname, "../data/dynasties/mesoamerica-andes-core/sources.js"));
require(path.join(__dirname, "../data/dynasties/mesoamerica-andes-core/events.js"));
require(path.join(__dirname, "../data/dynasties/mesoamerica-andes-core/emperors.js"));
require(path.join(__dirname, "../data/dynasties/polynesian-oceania-core/metadata.js"));
require(path.join(__dirname, "../data/dynasties/polynesian-oceania-core/sources.js"));
require(path.join(__dirname, "../data/dynasties/polynesian-oceania-core/events.js"));
require(path.join(__dirname, "../data/dynasties/polynesian-oceania-core/emperors.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-international-system/metadata.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-international-system/sources.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-international-system/events.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-international-system/emperors.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-collapse/metadata.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-collapse/sources.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-collapse/events.js"));
require(path.join(__dirname, "../data/dynasties/bronze-age-collapse/emperors.js"));
require(path.join(__dirname, "../data/dynasties/japan/metadata.js"));
require(path.join(__dirname, "../data/dynasties/japan/sources.js"));
require(path.join(__dirname, "../data/dynasties/japan/events.js"));
require(path.join(__dirname, "../data/dynasties/japan/emperors.js"));
require(path.join(__dirname, "../data/dynasties/korean-peninsula/metadata.js"));
require(path.join(__dirname, "../data/dynasties/korean-peninsula/sources.js"));
require(path.join(__dirname, "../data/dynasties/korean-peninsula/events.js"));
require(path.join(__dirname, "../data/dynasties/korean-peninsula/emperors.js"));
require(path.join(__dirname, "../data/dynasties/south-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/south-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/south-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/south-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/southeast-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/central-asia/metadata.js"));
require(path.join(__dirname, "../data/dynasties/central-asia/sources.js"));
require(path.join(__dirname, "../data/dynasties/central-asia/events.js"));
require(path.join(__dirname, "../data/dynasties/central-asia/emperors.js"));
require(path.join(__dirname, "../data/dynasties/iranian-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/iranian-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/iranian-world/events.js"));
require(path.join(__dirname, "../data/dynasties/iranian-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/islamic-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/islamic-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/islamic-world/events.js"));
require(path.join(__dirname, "../data/dynasties/islamic-world/emperors.js"));
require(path.join(__dirname, "../data/dynasties/roman-world/metadata.js"));
require(path.join(__dirname, "../data/dynasties/roman-world/sources.js"));
require(path.join(__dirname, "../data/dynasties/roman-world/events.js"));
require(path.join(__dirname, "../data/dynasties/roman-world/emperors.js"));
require(path.join(__dirname, "../data/topics/imperial-exam.js"));
require(path.join(__dirname, "../data/topics/song-mongol-yuan-war.js"));
require(path.join(__dirname, "../data/regions/east-asia/metadata.js"));
require(path.join(__dirname, "../data/regions/east-asia/china/package.js"));
require(path.join(__dirname, "../data/regions/east-asia/japan/package.js"));
require(path.join(__dirname, "../data/regions/east-asia/korean-peninsula/package.js"));
require(path.join(__dirname, "../data/regions/south-asia/metadata.js"));
require(path.join(__dirname, "../data/regions/south-asia/south-asia/package.js"));
require(path.join(__dirname, "../data/regions/southeast-asia/metadata.js"));
require(path.join(__dirname, "../data/regions/southeast-asia/southeast-asia/package.js"));
require(path.join(__dirname, "../data/regions/central-asia/metadata.js"));
require(path.join(__dirname, "../data/regions/central-asia/central-asia/package.js"));
require(path.join(__dirname, "../data/regions/europe/metadata.js"));
require(path.join(__dirname, "../data/regions/europe/europe/package.js"));
require(path.join(__dirname, "../data/regions/africa/metadata.js"));
require(path.join(__dirname, "../data/regions/africa/africa/package.js"));
require(path.join(__dirname, "../data/regions/west-asia/metadata.js"));
require(path.join(__dirname, "../data/regions/west-asia/west-asia/package.js"));
require(path.join(__dirname, "../data/regions/americas/metadata.js"));
require(path.join(__dirname, "../data/regions/americas/americas/package.js"));
require(path.join(__dirname, "../data/regions/oceania/metadata.js"));
require(path.join(__dirname, "../data/regions/oceania/oceania/package.js"));
require(path.join(__dirname, "../data/regions/afro-eurasia-crossroads/metadata.js"));
require(path.join(__dirname, "../data/regions/afro-eurasia-crossroads/afro-eurasia-crossroads/package.js"));
require(path.join(__dirname, "../data/filter-catalog.js"));
require(path.join(__dirname, "../data/territory-population.js"));
require(path.join(__dirname, "../data/political-maps.js"));
require(path.join(__dirname, "../data/label-aliases.js"));
require(path.join(__dirname, "../data/index.js"));

const data = window.HISTORY_DATA;
const emperors = data.emperors || [];
const errors = [];
const warnings = [];

function hasValue(value) {
  return value !== undefined && value !== null && value !== "";
}

function requireFields(kind, item, fields) {
  for (const field of fields) {
    if (!hasValue(item[field])) {
      errors.push(`${kind} ${item.id || item.title || item.name || "unknown"}: 缺少 ${field}`);
    }
  }
}

function requireArrayFields(kind, item, fields) {
  for (const field of fields) {
    if (!Array.isArray(item[field])) {
      errors.push(`${kind} ${item.id || item.title || item.name || "unknown"}: ${field} 必须是数组`);
    }
  }
}

function validateFilterCatalog() {
  const catalog = window.HISTORY_FILTER_CATALOG;
  if (!catalog) {
    errors.push("缺少 HISTORY_FILTER_CATALOG");
    return;
  }
  for (const type of ["periods", "regions", "topics"]) {
    if (!Array.isArray(catalog[type]) || !catalog[type].length) {
      errors.push(`HISTORY_FILTER_CATALOG.${type} 必须是非空数组`);
      continue;
    }
    for (const group of catalog[type]) {
      requireFields(`filter.${type}`, group, ["id", "title"]);
      requireArrayFields(`filter.${type} ${group.id || group.title}`, group, ["terms", "children"]);
      for (const child of group.children || []) {
        if (!Array.isArray(child) || !hasValue(child[0]) || !Array.isArray(child[1])) {
          errors.push(`filter.${type} ${group.id || group.title}: children 必须是 [label, terms[]]`);
        }
      }
    }
  }
}

validateFilterCatalog();

const catalogPeriods = new Set(
  (window.HISTORY_FILTER_CATALOG?.periods || []).flatMap((group) => [
    ...(group.terms || []),
    ...(group.children || []).flatMap((child) => child[1] || [])
  ])
);
const uncoveredPeriods = [...new Set((data.events || []).map((event) => event.period).filter(hasValue))]
  .filter((period) => !catalogPeriods.has(period));
if (uncoveredPeriods.length) {
  errors.push(`历史单元目录未覆盖事件时期：${uncoveredPeriods.join("、")}`);
}

for (const event of data.events || []) {
  requireFields("event", event, ["id", "title", "time", "era", "period", "summary"]);
  requireArrayFields("event", event, ["regions", "topics", "people", "background", "process", "results", "debates", "sources", "citations", "claims", "notes", "aliases"]);
}

const rawEvents = Object.entries(window)
  .filter(([key, value]) => key.endsWith("_EVENTS") && Array.isArray(value))
  .flatMap(([, events]) => events);
const rawEventIds = new Set(rawEvents.map((event) => event.id));
const rawLabels = new Map();
for (const event of rawEvents) {
  for (const label of [event.title, ...(event.aliases || [])]) {
    if (!rawLabels.has(label)) rawLabels.set(label, []);
    rawLabels.get(label).push(event.id);
  }
}
for (const [label, eventId] of Object.entries(window.LABEL_ALIASES || {})) {
  if (!rawEventIds.has(eventId)) {
    errors.push(`集中别名「${label}」引用了不存在的事件 ID：${eventId}`);
    continue;
  }
  const conflicts = (rawLabels.get(label) || []).filter((id) => id !== eventId);
  if (conflicts.length) {
    errors.push(`集中别名「${label}」与既有事件标签冲突：${conflicts.join("、")}`);
  }
}

for (const emperor of emperors) {
  requireFields("emperor", emperor, ["title", "name", "phase", "reign", "position", "plainText", "source"]);
  requireArrayFields("emperor", emperor, ["names", "keyEvents", "relatedEventIds"]);
}

const eastAsiaRegion = data.regions?.find((region) => region.id === "east-asia");
if (!eastAsiaRegion) {
  errors.push("缺少东亚区域包 data.regions.east-asia");
}

const europeRegion = data.regions?.find((region) => region.id === "europe");
if (!europeRegion) {
  errors.push("缺少欧洲区域包 data.regions.europe");
}

const chinaPackage = data.civilizationPackages?.find((item) => item.id === "china");
if (!chinaPackage) {
  errors.push("缺少中国历史收束包 data.civilizationPackages.china");
} else {
  const dynastyIds = new Set((data.dynasties || []).map((dynasty) => dynasty.id));
  for (const moduleId of chinaPackage.moduleIds || []) {
    if (!dynastyIds.has(moduleId)) {
      errors.push(`中国历史收束包引用了不存在的模块：${moduleId}`);
    }
  }
  const packagedEventCount = (chinaPackage.moduleIds || []).reduce((sum, moduleId) => {
    return sum + (data.dynastyEvents?.[moduleId] || []).length;
  }, 0);
  const chinaEventCount = (data.events || []).filter((event) => (chinaPackage.moduleIds || []).includes(event.dynastyId)).length;
  if (packagedEventCount !== chinaEventCount) {
    errors.push(`中国历史收束包事件数 ${packagedEventCount} 与当前总事件数 ${(data.events || []).length} 不一致`);
  }
}

const europePackage = data.civilizationPackages?.find((item) => item.id === "europe");
if (!europePackage) {
  errors.push("缺少欧洲历史包 data.civilizationPackages.europe");
} else {
  const requiredEuropeSlots = [
    "ancient-greece",
    "roman-republic",
    "roman-empire",
    "byzantium",
    "medieval-western-europe",
    "renaissance-reformation",
    "early-modern-europe",
    "revolutionary-industrial-europe",
    "world-wars-europe",
    "cold-war-europe"
  ];
  const slotIds = new Set((europePackage.nextExpansionSlots || []).map((slot) => slot.id));
  for (const slotId of requiredEuropeSlots) {
    if (!slotIds.has(slotId)) {
      errors.push(`欧洲历史包缺少后续扩展位：${slotId}`);
    }
  }
}

if (europePackage) {
  const europeDynastyIds = new Set((data.dynasties || []).map((dynasty) => dynasty.id));
  for (const moduleId of europePackage.moduleIds || []) {
    if (!europeDynastyIds.has(moduleId)) {
      errors.push(`欧洲历史包引用了不存在的模块：${moduleId}`);
    }
  }
}

const packageIds = new Set((data.civilizationPackages || []).map((item) => item.id));
const packageDynastyIds = new Set((data.dynasties || []).map((dynasty) => dynasty.id));
for (const region of data.regions || []) {
  for (const packageId of region.packageIds || []) {
    if (!packageIds.has(packageId)) {
      errors.push(`区域 ${region.id} 引用了不存在的历史包：${packageId}`);
    }
  }
}
for (const historyPackage of data.civilizationPackages || []) {
  if (historyPackage.regionId && !(data.regions || []).some((region) => region.id === historyPackage.regionId)) {
    errors.push(`历史包 ${historyPackage.id} 引用了不存在的区域：${historyPackage.regionId}`);
  }
  for (const moduleId of historyPackage.moduleIds || []) {
    if (!packageDynastyIds.has(moduleId)) {
      errors.push(`历史包 ${historyPackage.id} 引用了不存在的模块：${moduleId}`);
    }
  }
}

const bannedAliasLabels = new Set([
  "贞观之治",
  "灭高句丽",
  "天宝政治",
  "藩镇延续",
  "宦官影响",
  "宫廷失序",
  "牛李党争",
  "财政整顿",
  "河陇部分恢复",
  "财政消耗",
  "地方军阀坐大",
  "中兴局面",
  "河北复叛",
  "藩镇反复"
]);

const eventIds = new Set(data.events.map((event) => event.id));
const eventTitles = new Set(data.events.map((event) => event.title));
const dynastyIds = new Set((data.dynasties || []).map((dynasty) => dynasty.id));
const unificationKeywords = ["统一战争", "南北统一"];

function isEstimateShape(value) {
  if (!value || typeof value !== "object") return false;
  if (typeof value.value === "number") return true;
  if (typeof value.min === "number" && typeof value.max === "number") return value.min <= value.max;
  if (typeof value.min === "number" || typeof value.max === "number") return true;
  return false;
}

const territoryConfidenceLevels = new Set(["high", "medium-high", "medium", "medium-low", "low"]);
const politicalMapLayerTypes = new Set(["core-admin", "vassal", "military", "contested", "influence"]);
const eventById = new Map(data.events.map((event) => [event.id, event]));
const bannedPoliticalMapKeys = new Set(["points", "coordinates", "geojson", "path", "d", "polygon", "polyline", "svg", "viewBox"]);

function scanForBannedPoliticalMapKeys(value, label) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => scanForBannedPoliticalMapKeys(item, `${label}[${index}]`));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (bannedPoliticalMapKeys.has(key)) {
      errors.push(`${label}.${key}: self-drawn geometry fields are forbidden under reference-map-only policy`);
    }
    scanForBannedPoliticalMapKeys(child, `${label}.${key}`);
  }
}

for (const dynasty of data.dynasties || []) {
  const profile = dynasty.territoryPopulation;
  if (!profile) {
    errors.push(`${dynasty.id}: 缺少 territoryPopulation`);
    continue;
  }
  if (profile.areaUnit !== "万平方公里") {
    errors.push(`${dynasty.id}: territoryPopulation.areaUnit 必须是 万平方公里`);
  }
  if (profile.populationUnit !== "万人") {
    errors.push(`${dynasty.id}: territoryPopulation.populationUnit 必须是 万人`);
  }
  if (profile.applicability === "notApplicable") {
    if (!profile.reason) errors.push(`${dynasty.id}: notApplicable territoryPopulation 需要 reason`);
    if ((profile.records || []).length) errors.push(`${dynasty.id}: notApplicable territoryPopulation 不应有 records`);
    continue;
  }
  if (!["polity", "fragmented-period", "civilization-zone"].includes(profile.applicability)) {
    errors.push(`${dynasty.id}: territoryPopulation.applicability 非法：${profile.applicability}`);
  }
  if (!Array.isArray(profile.records) || !profile.records.length) {
    errors.push(`${dynasty.id}: territoryPopulation 至少需要一条时间序列记录`);
    continue;
  }
  for (const record of profile.records) {
    const label = `${dynasty.id}/${record.label || record.year || "record"}`;
    if (typeof record.year !== "number") errors.push(`${label}: territoryPopulation record 需要数字 year`);
    if (!record.label) errors.push(`${label}: territoryPopulation record 需要 label`);
    if (!isEstimateShape(record.areaEstimate)) errors.push(`${label}: areaEstimate 结构非法`);
    if (!isEstimateShape(record.populationEstimate)) errors.push(`${label}: populationEstimate 结构非法`);
    if (record.areaUnit !== "万平方公里") errors.push(`${label}: record areaUnit 必须是 万平方公里`);
    if (record.populationUnit !== "万人") errors.push(`${label}: record populationUnit 必须是 万人`);
    if (!territoryConfidenceLevels.has(record.confidence)) {
      errors.push(`${label}: territoryPopulation record confidence 非法：${record.confidence}`);
    }
    if (!record.sourceBasis) errors.push(`${label}: territoryPopulation record 需要 sourceBasis`);
    if (!record.note) errors.push(`${label}: territoryPopulation record 需要 note`);
  }
}

const politicalMaps = data.politicalMaps || {};
scanForBannedPoliticalMapKeys(politicalMaps, "politicalMaps");
for (const [dynastyId, profile] of Object.entries(politicalMaps)) {
  if (!dynastyIds.has(dynastyId)) {
    errors.push(`politicalMaps.${dynastyId}: dynastyId does not exist in metadata`);
  }
  if (!profile.title) errors.push(`politicalMaps.${dynastyId}: missing title`);
  if (profile.mapPolicy !== "reference-map-only") {
    errors.push(`politicalMaps.${dynastyId}: mapPolicy must be reference-map-only`);
  }
  if (!profile.note) errors.push(`politicalMaps.${dynastyId}: missing note`);
  if (!Array.isArray(profile.snapshots)) {
    errors.push(`politicalMaps.${dynastyId}: snapshots must be an array`);
    continue;
  }

  for (const snapshot of profile.snapshots) {
    const label = `${dynastyId}/${snapshot.id || "snapshot"}`;
    if (!snapshot.id) errors.push(`${label}: missing snapshot id`);
    if (snapshot.dynastyId !== dynastyId) errors.push(`${label}: snapshot.dynastyId must match profile key`);
    if (!snapshot.title) errors.push(`${label}: missing title`);
    if (!snapshot.period) errors.push(`${label}: missing period`);
    if (!snapshot.timeRange) errors.push(`${label}: missing timeRange`);
    if (!snapshot.basis) errors.push(`${label}: missing basis`);
    if (!snapshot.note) errors.push(`${label}: missing note`);
    if (!territoryConfidenceLevels.has(snapshot.confidence)) errors.push(`${label}: invalid confidence ${snapshot.confidence}`);
    if (!snapshot.referenceMap) {
      errors.push(`${label}: referenceMap is required; do not add self-drawn schematic maps`);
    } else {
      const referenceFields = ["src", "title", "sourceTitle", "sourceUrl", "author", "license", "note"];
      for (const field of referenceFields) {
        if (!snapshot.referenceMap[field]) errors.push(`${label}: referenceMap missing ${field}`);
      }
      if (snapshot.referenceMap.src) {
        if (!snapshot.referenceMap.src.startsWith("assets/maps/")) {
          errors.push(`${label}: referenceMap src must be local assets/maps path`);
        }
        const referencePath = path.join(__dirname, "..", snapshot.referenceMap.src);
        if (!fs.existsSync(referencePath)) {
          errors.push(`${label}: referenceMap src file does not exist: ${snapshot.referenceMap.src}`);
        } else if (fs.statSync(referencePath).size <= 0) {
          errors.push(`${label}: referenceMap src file is empty: ${snapshot.referenceMap.src}`);
        }
      }
      if (snapshot.referenceMap.sourceUrl && !/^https:\/\/commons\.wikimedia\.org\//.test(snapshot.referenceMap.sourceUrl)) {
        errors.push(`${label}: referenceMap sourceUrl should point to a Wikimedia Commons file page`);
      }
    }
    if (!Array.isArray(snapshot.eventIds) || !snapshot.eventIds.length) {
      errors.push(`${label}: must link at least one eventId`);
    } else {
      for (const eventId of snapshot.eventIds) {
        if (!eventIds.has(eventId)) {
          errors.push(`${label}: linked eventId does not exist: ${eventId}`);
        } else if (eventById.get(eventId)?.dynastyId !== dynastyId) {
          errors.push(`${label}: linked eventId belongs to ${eventById.get(eventId)?.dynastyId}, expected ${dynastyId}: ${eventId}`);
        }
      }
    }
    if (!Array.isArray(snapshot.layers) || !snapshot.layers.length) {
      errors.push(`${label}: must contain at least one layer`);
      continue;
    }
    if (!snapshot.layers.some((layer) => layer.type === "core-admin")) {
      errors.push(`${label}: must contain core-admin layer to show actual political control`);
    }

    for (const layer of snapshot.layers) {
      const layerLabel = `${label}/${layer.label || layer.type || "layer"}`;
      if (!politicalMapLayerTypes.has(layer.type)) errors.push(`${layerLabel}: invalid layer.type ${layer.type}`);
      if (!layer.label) errors.push(`${layerLabel}: missing label`);
      if (!/^#[0-9a-f]{6}$/i.test(layer.color || "")) errors.push(`${layerLabel}: color must be hex #RRGGBB`);
      if (!layer.note) errors.push(`${layerLabel}: missing note`);
      if (!Array.isArray(layer.areas) || !layer.areas.length) {
        errors.push(`${layerLabel}: must contain at least one area`);
        continue;
      }
      for (const area of layer.areas) {
        const areaLabel = `${layerLabel}/${area.label || "area"}`;
        if (!area.label) errors.push(`${areaLabel}: missing label`);
        if (!area.note) errors.push(`${areaLabel}: missing note`);
      }
    }
  }
}

[
  "shang",
  "spring-autumn-warring-states",
  "qin",
  "western-han"
].forEach((dynastyId) => {
  const snapshots = politicalMaps[dynastyId]?.snapshots || [];
  if (!snapshots.length) {
    errors.push(`${dynastyId}: China reference map first batch should contain at least one sourced snapshot`);
  }
});

const medievalWesternEuropeMaps = politicalMaps["medieval-western-europe"]?.snapshots || [];
if (medievalWesternEuropeMaps.length && medievalWesternEuropeMaps.length < 2) {
  errors.push("medieval-western-europe: reference map pilot should contain at least 2 sourced snapshots");
}
[
  "mwe-charlemagne-coronation-800",
  "mwe-treaty-of-verdun-843"
].forEach((eventId) => {
  if (medievalWesternEuropeMaps.length && !medievalWesternEuropeMaps.some((snapshot) => (snapshot.eventIds || []).includes(eventId))) {
    errors.push(`medieval-western-europe: political maps missing key linked event ${eventId}`);
  }
});

function parseEventStartYear(time) {
  return window.HISTORY_TIME.parseTimelineStartYear(time);
}

if (!Array.isArray(data.dynasties) || !data.dynasties.length) {
  errors.push("缺少 dynasties 汇总");
}
for (const dynastyId of dynastyIds) {
  if (!data.dynastyEvents || !data.dynastyEvents[dynastyId]) {
    errors.push(`缺少${dynastyId}独立事件集合 data.dynastyEvents.${dynastyId}`);
  }
  if (!data.dynastyEmperors || !data.dynastyEmperors[dynastyId]) {
    errors.push(`缺少${dynastyId}独立帝王集合 data.dynastyEmperors.${dynastyId}`);
  }
}

for (const event of data.events) {
  if (!event.dynastyId) errors.push(`${event.id || event.title}: 缺少 dynastyId`);
  if (event.dynastyId && !dynastyIds.has(event.dynastyId)) {
    errors.push(`${event.title}: dynastyId 未在 metadata 中声明`);
  }
  const dynasty = (data.dynasties || []).find((item) => item.id === event.dynastyId);
  const eventStartYear = parseEventStartYear(event.time);
  if (dynasty?.strictEventStart && eventStartYear !== null && eventStartYear < dynasty.startYear) {
    errors.push(`${event.title}: 起始年份 ${eventStartYear} 早于 ${dynasty.title} 的边界 ${dynasty.startYear}`);
  }
  if (!event.id || !event.title || !event.time || !event.era || !event.summary) {
    errors.push(`${event.id || event.title}: 基础字段不完整`);
  }
  const isOutline = event.contentLevel === "outline";
  if (!["core", "mainline", "outline"].includes(event.contentLevel)) {
    errors.push(`${event.title}: contentLevel 必须是 core、mainline 或 outline`);
  }
  const hasLearningCase = Boolean(event.learningCase?.claim);
  if (event.contentLevel === "core" && (!hasLearningCase || !event.learningCase?.evidence)) {
    errors.push(`${event.title}: 核心案例必须具备独有判断和材料锚点`);
  }
  if (event.contentLevel === "mainline" && !((event.previousEventIds || []).length || (event.nextEventIds || []).length)) {
    errors.push(`${event.title}: 主线节点必须至少关联一个前后事件`);
  }
  if (!Array.isArray(event.people)) {
    errors.push(`${event.title}: people 必须是数组`);
  }
  for (const person of event.people || []) {
    if (!person || typeof person !== "object") {
      errors.push(`${event.title}: people 条目必须是对象`);
      continue;
    }
    if (typeof person.name !== "string" || !person.name.trim()) {
      errors.push(`${event.title}: people.name 必须是非空字符串`);
    }
    if (String(person.name || "").includes("[object Object]")) {
      errors.push(`${event.title}: people.name 出现 [object Object]，疑似重复包装人物数据`);
    }
    if (person.role !== undefined && typeof person.role !== "string") {
      errors.push(`${event.title}: people.role 必须是字符串`);
    }
  }
  if (event.contentLevel === "core" && !hasLearningCase && unificationKeywords.some((keyword) => event.title.includes(keyword))) {
    if ((event.process || []).length < 5) {
      errors.push(`${event.title}: 统一战争类事件至少需要 5 个关键过程节点`);
    }
    const processText = (event.process || []).map((item) => item.title + item.description).join(" ");
    const requiredKeywords = event.unificationProfile?.requiredKeywords || [];
    if (!requiredKeywords.length) {
      errors.push(`${event.title}: 统一战争类事件缺少 unificationProfile.requiredKeywords`);
    }
    requiredKeywords.forEach((keyword) => {
      if (!processText.includes(keyword)) {
        errors.push(`${event.title}: 统一战争过程缺少关键点「${keyword}」`);
      }
    });
  }
  for (const item of event.process || []) {
    const length = (item.description || "").length;
    if (length < 35) errors.push(`${event.title} / ${item.title}: process 描述过短`);
    if (!item.time || !item.title || !item.description) {
      errors.push(`${event.title}: process 节点字段不完整`);
    }
  }
  if (event.contentLevel === "core" && (!Array.isArray(event.results) || event.results.length === 0)) {
    errors.push(`${event.title}: 缺少 results`);
  }
  if (event.contentLevel === "core" && (!Array.isArray(event.sources) || event.sources.length === 0)) {
    errors.push(`${event.title}: 缺少 sources`);
  }
  if (event.contentLevel === "core" && (!Array.isArray(event.citations) || event.citations.length === 0)) {
    errors.push(`${event.title}: 缺少 citations`);
  }
  for (const citation of event.contentLevel === "core" ? event.citations || [] : []) {
    if (!citation.plainText) errors.push(`${event.title}: citation 缺少白话释义`);
  }
  if (event.sourceRequirement === "verified") {
    const hasHttpsSource = (event.sources || []).some((source) => /^https:\/\//.test(source.url || ""));
    if (!hasHttpsSource) errors.push(`${event.title}: 已核事件缺少 HTTPS 公开史料链接`);
    for (const citation of event.citations || []) {
      if (/待核|待补/.test(citation.status || "")) {
        errors.push(`${event.title}: 已核事件的引用状态仍为「${citation.status}」`);
      }
    }
  }
  for (const alias of event.aliases || []) {
    if (bannedAliasLabels.has(alias)) errors.push(`${event.title}: aliases 含非真别名「${alias}」`);
    if (eventTitles.has(alias)) errors.push(`${event.title}: aliases 含另一个事件标题「${alias}」`);
  }
}

let previousTimelineEvent = null;
for (const event of data.events) {
  const startYear = parseEventStartYear(event.time);
  if (startYear === null) {
    errors.push(`${event.id || event.title}: 时间字段无法用于时间线排序「${event.time}」`);
    continue;
  }
  if (previousTimelineEvent && startYear < previousTimelineEvent.startYear) {
    errors.push(`时间线排序倒退：${previousTimelineEvent.event.title}（${previousTimelineEvent.event.time}）之后出现 ${event.title}（${event.time}）`);
  }
  previousTimelineEvent = { event, startYear };
}

for (const event of data.events) {
  if (!/^(?:约)?(?:前)?\d+(?:-(?:前)?\d+)?$/.test(event.time)) {
    errors.push(`${event.id || event.title}: 时间字段未规范为统一年份格式「${event.time}」`);
  }
}

for (const emperor of emperors) {
  if (!emperor.dynastyId) errors.push(`${emperor.title}${emperor.name}: 缺少 dynastyId`);
  if (emperor.dynastyId && !dynastyIds.has(emperor.dynastyId)) {
    errors.push(`${emperor.title}${emperor.name}: dynastyId 未在 metadata 中声明`);
  }
  const related = emperor.relatedEventIds || [];
  if (!related.length) errors.push(`${emperor.title}${emperor.name}: 缺少 relatedEventIds`);
  for (const id of related) {
    if (!eventIds.has(id)) errors.push(`${emperor.title}${emperor.name}: relatedEventIds 无效 ${id}`);
  }
  for (const label of emperor.keyEvents || []) {
    if (eventTitles.has(label) && !related.some((id) => data.events.find((event) => event.id === id)?.title === label)) {
      warnings.push(`${emperor.title}${emperor.name}: keyEvents「${label}」已有事件页但未加入 relatedEventIds`);
    }
  }
}

for (const topic of data.topics || []) {
  if (!topic.id || !topic.title || !Array.isArray(topic.dynastyIds)) {
    errors.push(`${topic.id || topic.title}: 跨朝代专题字段不完整`);
  }
  for (const id of topic.eventIds || []) {
    if (!eventIds.has(id)) errors.push(`${topic.title}: eventIds 无效 ${id}`);
  }
}

const nsEvents = data.dynastyEvents?.["northern-southern"] || [];
if (nsEvents.length) {
  const nsText = nsEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "西晋",
    "东晋",
    "十六国",
    "北魏",
    "南朝",
    "北周"
  ].forEach((keyword) => {
    if (!nsText.includes(keyword)) {
      errors.push(`五胡十六国南北朝主线缺少「${keyword}」覆盖`);
    }
  });
  if (nsEvents.length < 20) {
    errors.push("五胡十六国南北朝作为复杂分裂时期，主线事件不应少于 20 个");
  }
}

const lh3kEvents = data.dynastyEvents?.["late-han-three-kingdoms"] || [];
if (lh3kEvents.length) {
  const text = lh3kEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["黄巾", "董卓", "官渡", "赤壁", "曹丕", "司马"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`东汉末三国主线缺少「${keyword}」覆盖`);
    }
  });
  if (lh3kEvents.length < 35) {
    errors.push("东汉末三国作为重点扩充时期，主线事件不应少于 35 个");
  }
}

const mingEvents = data.dynastyEvents?.ming || [];
if (mingEvents.length) {
  const text = mingEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["朱元璋", "废丞相", "靖难", "永乐", "郑和", "土木堡", "嘉靖", "张居正", "万历", "萨尔浒", "崇祯", "李自成"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`明朝主线缺少「${keyword}」覆盖`);
    }
  });
  if (mingEvents.length < 24) {
    errors.push("明朝作为完整大一统王朝，主线事件不应少于 24 个");
  }
}

const shangEvents = data.dynastyEvents?.shang || [];
if (shangEvents.length) {
  const text = shangEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["商汤", "伊尹", "太甲", "二里岗", "仲丁", "河亶甲", "祖乙", "盘庚", "武丁", "妇好", "甲骨文", "青铜", "方国", "祖甲", "殷墟", "人牲", "土方", "羌方", "周族", "帝辛", "东南用兵", "牧野"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`商朝主线缺少“${keyword}”覆盖`);
    }
  });
  if (shangEvents.length < 18) {
    errors.push("商朝主线事件不应少于 18 个，至少覆盖建国、伊尹太甲、中商迁徙、迁殷、武丁、甲骨青铜、殷墟祭祀、方国战争、商末灭亡");
  }
}

const westernZhouEvents = data.dynastyEvents?.["western-zhou"] || [];
if (westernZhouEvents.length) {
  const text = westernZhouEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["武王", "分封", "鲁", "齐", "燕", "卫", "晋", "宋", "殷遗民", "宗法", "周公", "三监", "成周", "王畿", "采邑", "成康", "昭王", "穆王", "共王", "懿王", "孝王", "非子", "夷王", "厉王", "国人暴动", "共和", "宣王", "不籍千亩", "料民太原", "千亩之战", "幽王", "犬戎"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`西周主线缺少“${keyword}”覆盖`);
    }
  });
  if (westernZhouEvents.length < 22) {
    errors.push("西周主线事件不应少于 22 个，至少覆盖克商、封国、殷遗民、制度、周公、成康、昭穆共懿孝夷、厉宣幽危机和灭亡");
  }
  const titles = westernZhouEvents.map((event) => event.title).join(" ");
  if (titles.includes("平王东迁")) {
    errors.push("西周模块不应把“平王东迁”作为正式主线事件；前770年以后应归入春秋战国模块");
  }
}

const sawsEvents = data.dynastyEvents?.["spring-autumn-warring-states"] || [];
if (sawsEvents.length) {
  const text = sawsEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["平王东迁", "郑庄公", "齐桓公", "晋文公", "楚庄王", "吴越", "三家分晋", "田氏代齐", "李悝", "商鞅", "合纵连横", "胡服骑射", "长平", "秦灭六国"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`春秋战国主线缺少「${keyword}」覆盖`);
    }
  });
  if (sawsEvents.length < 22) {
    errors.push("春秋战国作为长时段分裂转型时期，主线事件不应少于 22 个");
  }
}

const qinEvents = data.dynastyEvents?.qin || [];
if (qinEvents.length) {
  const text = qinEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["始皇帝", "郡县制", "书同文", "秦律", "匈奴", "百越", "焚书坑儒", "巡游", "沙丘", "陈胜吴广", "巨鹿", "秦朝灭亡"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`秦朝主线缺少「${keyword}」覆盖`);
    }
  });
  if (qinEvents.length < 12) {
    errors.push("秦朝虽短，但统一制度和秦末崩溃主线事件不应少于 12 个");
  }
}

const qingEvents = data.dynastyEvents?.qing || [];
if (qingEvents.length) {
  const text = qingEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["努尔哈赤", "皇太极", "清军入关", "南明", "三藩", "台湾", "尼布楚", "噶尔丹", "雍正", "军机处", "准噶尔", "新疆", "鸦片战争", "太平天国", "洋务", "甲午", "戊戌", "义和团", "新政", "辛亥"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`清朝主线缺少「${keyword}」覆盖`);
    }
  });
  if (qingEvents.length < 30) {
    errors.push("清朝作为从后金到近代转型的长时段王朝，主线事件不应少于 30 个");
  }
}

[
  ["republican-china", 23, ["中华民国", "袁世凯", "护国运动", "北洋", "五四", "中国共产党", "北伐", "南京国民政府", "井冈山"], "民国时期"],
  ["war-of-resistance", 21, ["九一八", "长征", "遵义会议", "西安事变", "卢沟桥", "南京大屠杀", "重庆陪都", "百团大战", "日本投降"], "抗日时期"],
  ["liberation-construction", 26, ["重庆谈判", "三大战役", "中华人民共和国", "土地改革", "抗美援朝", "一五计划", "社会主义改造", "反右", "大跃进", "文化大革命", "联合国"], "解放与建设时期"],
  ["reform-opening", 30, ["十一届三中全会", "家庭联产承包", "经济特区", "南方谈话", "香港", "澳门", "世界贸易组织", "北京奥运", "2012"], "改革开放时期"]
].forEach(([dynastyId, minCount, keywords, label]) => {
  const events = data.dynastyEvents?.[dynastyId] || [];
  if (!events.length) {
    errors.push(`缺少${label}独立事件集合`);
    return;
  }
  const text = events.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  keywords.forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`${label}主线缺少「${keyword}」覆盖`);
    }
  });
  if (events.length < minCount) {
    errors.push(`${label}主线事件不应少于 ${minCount} 个`);
  }
});

const splitModernTotal = ["republican-china", "war-of-resistance", "liberation-construction", "reform-opening"]
  .reduce((sum, dynastyId) => sum + (data.dynastyEvents?.[dynastyId] || []).length, 0);
if (splitModernTotal < 100) {
  errors.push("近现代四时期拆分后合计事件不应少于 100 个");
}

const ancientGreeceEvents = data.dynastyEvents?.["ancient-greece"] || [];
if (ancientGreeceEvents.length) {
  const text = ancientGreeceEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "米诺斯",
    "迈锡尼",
    "线形文字B",
    "特洛伊",
    "黑暗时代",
    "城邦",
    "希腊字母",
    "奥林匹克",
    "大殖民",
    "重装步兵",
    "斯巴达",
    "德拉古",
    "梭伦",
    "克利斯提尼",
    "爱奥尼亚",
    "马拉松",
    "温泉关",
    "萨拉米斯",
    "提洛同盟",
    "伯里克利",
    "悲剧",
    "苏格拉底",
    "伯罗奔尼撒",
    "西西里",
    "底比斯",
    "腓力二世",
    "亚历山大",
    "希腊化",
    "罗马征服"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`古希腊主线缺少“${keyword}”覆盖`);
    }
  });
  if (ancientGreeceEvents.length < 60) {
    errors.push("古希腊作为欧洲扩展首个详细模块，主线事件不应少于 60 个");
  }
}

const medievalWesternEuropeEvents = data.dynastyEvents?.["medieval-western-europe"] || [];
if (medievalWesternEuropeEvents.length) {
  const text = medievalWesternEuropeEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "西罗马",
    "日耳曼",
    "伊比利亚",
    "托莱多",
    "克洛维",
    "法兰克",
    "丕平",
    "查理曼",
    "加洛林",
    "凡尔登",
    "维京",
    "诺曼",
    "奥托",
    "神圣罗马帝国",
    "意大利城市",
    "卡佩",
    "封建",
    "克吕尼",
    "叙任权",
    "卡诺莎",
    "十字军",
    "耶路撒冷",
    "城市",
    "大学",
    "罗马法",
    "大宪章",
    "议会",
    "拉特兰",
    "阿卡",
    "汉萨",
    "阿维尼翁",
    "百年战争",
    "黑死病",
    "农民起义",
    "金玺诏书",
    "教会大分裂",
    "胡斯",
    "贞德",
    "印刷"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`中世纪西欧主线缺少“${keyword}”覆盖`);
    }
  });
  if (medievalWesternEuropeEvents.length < 100) {
    errors.push("中世纪西欧跨度超过一千年且为欧洲中世纪底层模块，主线事件不应少于 100 个");
  }
}

const ancientEgyptEvents = data.dynastyEvents?.["ancient-egypt"] || [];
if (ancientEgyptEvents.length) {
  const text = ancientEgyptEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "尼罗河",
    "上埃及",
    "下埃及",
    "纳尔迈",
    "法老",
    "孟菲斯",
    "古王国",
    "金字塔",
    "胡夫",
    "第一中间期",
    "底比斯",
    "中王国",
    "努比亚",
    "喜克索斯",
    "战车",
    "新王国",
    "雅赫摩斯",
    "哈特谢普苏特",
    "图特摩斯三世",
    "阿蒙神庙",
    "阿肯那顿",
    "阿玛尔纳",
    "拉美西斯二世",
    "卡迭石",
    "海上民族",
    "亚述",
    "波斯征服",
    "托勒密",
    "亚历山大里亚",
    "罗马吞并"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`古埃及主线缺少“${keyword}”覆盖`);
    }
  });
  if (ancientEgyptEvents.length < 45) {
    errors.push("古埃及作为非洲底座模块，主线事件不应少于 45 个");
  }
}

const sumerEvents = data.dynastyEvents?.["sumer-early-mesopotamia"] || [];
if (sumerEvents.length) {
  const text = sumerEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "两河流域",
    "底格里斯河",
    "幼发拉底河",
    "灌溉农业",
    "神庙经济",
    "欧贝德",
    "乌鲁克",
    "楔形文字",
    "城邦",
    "基什",
    "乌尔",
    "乌尔王陵",
    "拉伽什",
    "温马",
    "卢加尔扎格西",
    "萨尔贡",
    "阿卡德帝国",
    "纳拉姆辛",
    "古提人",
    "乌尔第三王朝",
    "乌尔纳姆",
    "乌尔纳姆法典",
    "舒尔吉",
    "埃兰",
    "阿摩利人",
    "伊辛-拉尔萨",
    "巴比伦"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`苏美尔与早期两河主线缺少“${keyword}”覆盖`);
    }
  });
  if (sumerEvents.length < 35) {
    errors.push("苏美尔与早期两河作为西亚底座模块，主线事件不应少于 35 个");
  }
}

const bronzeAgeSystemEvents = data.dynastyEvents?.["bronze-age-international-system"] || [];
if (bronzeAgeSystemEvents.length) {
  const text = bronzeAgeSystemEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "埃及",
    "赫梯",
    "巴比伦",
    "卡喜特",
    "亚述",
    "米坦尼",
    "黎凡特",
    "乌加里特",
    "阿拉西亚",
    "塞浦路斯",
    "爱琴",
    "阿马尔那",
    "卡迭石",
    "和平条约",
    "王室联姻",
    "铜",
    "锡",
    "宫殿经济",
    "附庸",
    "礼物",
    "贸易网络",
    "崩溃前夜"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`青铜时代国际体系主线缺少“${keyword}”覆盖`);
    }
  });
  if (bronzeAgeSystemEvents.length < 30) {
    errors.push("青铜时代国际体系作为交界地专题，主线事件不应少于 30 个");
  }
}

const bronzeAgeCollapseEvents = data.dynastyEvents?.["bronze-age-collapse"] || [];
if (bronzeAgeCollapseEvents.length) {
  const text = bronzeAgeCollapseEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  [
    "青铜时代崩溃",
    "宫殿经济",
    "干旱",
    "粮食",
    "铜锡贸易",
    "迈锡尼",
    "线形文字B",
    "哈图沙",
    "赫梯",
    "乌加里特",
    "塞浦路斯",
    "阿拉西亚",
    "梅尔恩普塔",
    "拉美西斯三世",
    "海上民族",
    "麦地那哈布",
    "埃及",
    "迦南",
    "非利士人",
    "以色列",
    "腓尼基",
    "亚兰人",
    "后赫梯",
    "亚述",
    "卡喜特巴比伦",
    "埃兰",
    "铁器",
    "字母文字",
    "多因一果"
  ].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`青铜时代崩溃主线缺少“${keyword}”覆盖`);
    }
  });
  if (bronzeAgeCollapseEvents.length < 50) {
    errors.push("青铜时代崩溃作为交界地专题，主线事件不应少于 50 个");
  }
}

const fdtkEvents = data.dynastyEvents?.["five-dynasties-ten-kingdoms"] || [];
if (fdtkEvents.length) {
  const text = fdtkEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["后梁", "后唐", "后晋", "后汉", "后周", "契丹", "燕云", "南唐", "吴越", "北汉", "宋初"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`五代十国主线缺少「${keyword}」覆盖`);
    }
  });
  if (fdtkEvents.length < 20) {
    errors.push("五代十国作为唐宋之间复杂转型时期，主线事件不应少于 20 个");
  }
}

const northernSongEvents = data.dynastyEvents?.["northern-song"] || [];
if (northernSongEvents.length) {
  const text = northernSongEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["太祖", "太宗", "真宗", "仁宗", "英宗", "神宗", "哲宗", "徽宗", "钦宗", "澶渊", "西夏", "王安石", "靖康"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`北宋主线缺少「${keyword}」覆盖`);
    }
  });
  if (northernSongEvents.length < 24) {
    errors.push("北宋作为制度、边疆和变法党争重点时期，主线事件不应少于 24 个");
  }
}

const southernSongEvents = data.dynastyEvents?.["southern-song"] || [];
if (southernSongEvents.length) {
  const text = southernSongEvents.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  ["高宗", "孝宗", "光宗", "宁宗", "理宗", "度宗", "恭帝", "端宗", "末帝", "岳飞", "绍兴", "蒙古", "襄阳", "崖山"].forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`南宋主线缺少「${keyword}」覆盖`);
    }
  });
  if (southernSongEvents.length < 24) {
    errors.push("南宋作为和战、偏安、宋蒙战争和亡国重点时期，主线事件不应少于 24 个");
  }
}

[
  ["western-han", 24, ["刘邦", "吕后", "文景", "七国之乱", "汉武帝", "匈奴", "盐铁", "霍光", "王莽"], "西汉"],
  ["xin", 8, ["王莽", "改制", "王田", "币制", "绿林", "赤眉", "昆阳", "更始"], "新朝"],
  ["eastern-han", 22, ["刘秀", "洛阳", "明章", "班超", "外戚", "宦官", "党锢", "黄巾", "董卓", "曹丕"], "东汉"],
  ["liao", 10, ["阿保机", "燕云", "南北面官", "澶渊", "萧太后", "女真", "西辽"], "辽"],
  ["western-xia", 10, ["党项", "李元昊", "宋夏", "永乐城", "仁宗", "蒙古", "西夏灭亡"], "西夏"],
  ["jin", 12, ["阿骨打", "辽朝灭亡", "靖康", "绍兴", "海陵", "大定", "蒙古", "蔡州"], "金"],
  ["mongol", 10, ["铁木真", "千户", "西夏", "攻金", "西征", "蒙哥", "忽必烈"], "蒙古帝国"],
  ["yuan", 18, ["大元", "襄阳", "崖山", "行省", "征日", "钞", "宣政院", "科举", "南坡", "两都", "红巾", "北伐"], "元朝"]
].forEach(([dynastyId, minCount, keywords, label]) => {
  const events = data.dynastyEvents?.[dynastyId] || [];
  if (!events.length) return;
  const text = events.map((event) => `${event.title} ${event.era} ${event.summary}`).join(" ");
  keywords.forEach((keyword) => {
    if (!text.includes(keyword)) {
      errors.push(`${label}主线缺少「${keyword}」覆盖`);
    }
  });
  if (events.length < minCount) {
    errors.push(`${label}主线事件不应少于 ${minCount} 个`);
  }
});

console.log(`events=${data.events.length}`);
console.log(`emperors=${emperors.length}`);
console.log(`errors=${errors.length}`);
console.log(`warnings=${warnings.length}`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log("- " + warning);
}

if (errors.length) {
  console.log("\nErrors:");
  for (const error of errors) console.log("- " + error);
  process.exit(1);
}
