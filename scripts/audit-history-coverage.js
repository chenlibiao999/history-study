const path = require("node:path");
const fs = require("node:fs");

global.window = {};
require(path.join(__dirname, "../data/dynasties/shang/metadata.js"));
require(path.join(__dirname, "../data/dynasties/shang/events.js"));
require(path.join(__dirname, "../data/dynasties/shang/emperors.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/metadata.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/events.js"));
require(path.join(__dirname, "../data/dynasties/western-zhou/emperors.js"));
for (const dir of fs.readdirSync(path.join(__dirname, "../data/dynasties"))) {
  for (const file of ["metadata.js", "sources.js", "events.js", "emperors.js"]) {
    const target = path.join(__dirname, "../data/dynasties", dir, file);
    if (fs.existsSync(target)) {
      try { require(target); } catch (error) {}
    }
  }
}
require(path.join(__dirname, "../data/territory-population.js"));
require(path.join(__dirname, "../data/political-maps.js"));
require(path.join(__dirname, "../data/index.js"));

const weakModuleThresholds = [
  ["spring-autumn-warring-states", 45, "春秋战国需覆盖春秋霸政、卿大夫坐大、战国变法、合纵连横、秦兼并前置和统一战争"],
  ["eastern-han", 35, "东汉需覆盖光武统一、明章治理、外戚宦官、士人清议、豪强庄园、羌乱、黄巾与军阀化"],
  ["tang", 60, "唐朝需覆盖初唐统一、贞观制度、武周、开天转折、安史、藩镇财政、边疆和唐末军阀"],
  ["xin", 20, "新朝虽短但改革密度高，需覆盖代汉、复古改革、财政货币、边疆失衡、民变和东汉承接"],
  ["qin", 20, "秦朝短但制度密度高，需覆盖统一战争、郡县、法律、财政、边疆与秦末崩溃"],
  ["sui", 20, "隋朝短但承上启下，需覆盖统一战争、三省六部、科举、运河、高句丽战争与隋末争霸"],
  ["liao", 20, "辽需覆盖契丹建国、南北面官、燕云、澶渊、承天太后、女真兴起与灭亡"],
  ["western-xia", 20, "西夏需覆盖党项建国、宋夏战争、文字制度、河西经营、蒙夏战争与灭亡"],
  ["jin", 20, "金需覆盖女真兴起、灭辽灭北宋、制度汉化、海陵迁都、大定之治、蒙金战争"],
  ["mongol", 20, "蒙古帝国需覆盖统一草原、千户制、西征、灭金灭夏、继承危机与四汗国分化"],
  ["hittite-anatolia", 35, "赫梯首版仍偏骨架，需补足安纳托利亚内政、附庸条约、边疆和崩溃前压力"],
  ["neo-assyrian-empire", 40, "新亚述需补足行省化、迁徙政策、历代王征战、巴比伦与埃及问题"],
  ["achaemenid-persia", 45, "阿契美尼德需补足行省、王道、地方精英、埃及叛乱和晚期危机"],
  ["roman-republic", 55, "罗马共和国需补足王政终结、阶级斗争、意大利统一、布匿战争与内战"],
  ["roman-empire", 70, "罗马帝国需补足元首制、边疆、三世纪危机、基督教化、分治与西部终局"],
  ["byzantium", 55, "拜占庭需补足七世纪危机、军区制、圣像破坏、马其顿复兴、1204与1453"],
  ["maya-civilization", 45, "玛雅需补足前古典、古典城邦竞争、后古典北尤卡坦和西班牙征服"],
  ["mexica-aztec-triple-alliance", 45, "墨西卡/阿兹特克需补足三方同盟、贡赋、花战、特拉斯卡拉、围城"],
  ["inca-empire", 45, "印加需补足四大苏尤、道路仓储、米塔基普、内战、卡哈马卡和维尔卡班巴"]
];

const data = window.HISTORY_DATA;
const rows = weakModuleThresholds.map(([dynastyId, minCount, reason]) => {
  const dynasty = (data.dynasties || []).find((item) => item.id === dynastyId);
  const count = data.dynastyEvents?.[dynastyId]?.length || 0;
  return { dynastyId, title: dynasty?.title || dynastyId, count, minCount, gap: Math.max(0, minCount - count), reason };
}).filter((item) => item.gap > 0).sort((a, b) => b.gap - a.gap || a.count - b.count);

console.log(`coverageGaps=${rows.length}`);
for (const row of rows) {
  console.log(`- ${row.dynastyId} ${row.title}: 当前 ${row.count} / 建议 ${row.minCount}，缺口 ${row.gap}。${row.reason}`);
}
