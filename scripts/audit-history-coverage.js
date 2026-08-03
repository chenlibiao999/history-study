const path = require("node:path");
const fs = require("node:fs");

global.window = {};

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

// Global rule: coverage thresholds apply to all regions and civilizations.
// Long-duration dynasties, empires, states, and civilization zones get higher baselines.
// Short-lived polities are not forced upward once their main chain is clear.
const longCycleThresholds = [
  ["shang", 34, "商朝超过五百年，需覆盖方国、都邑、礼制、军事与商周转折"],
  ["western-zhou", 39, "西周超过二百年，需覆盖封建、宗法礼制、王权衰落与东迁前因"],
  ["spring-autumn-warring-states", 51, "春秋战国跨度长且诸侯线复杂，需覆盖争霸、变法、合纵连横与秦统一前置"],
  ["western-han", 30, "西汉超过二百年，需覆盖郡国、财政、儒学、边疆与外戚前夜"],
  ["eastern-han", 39, "东汉近二百年，需覆盖统一、外戚宦官、羌乱、士人清议、黄巾与地方化"],
  ["northern-southern", 44, "五胡十六国南北朝近三百年且极复杂，后续应继续按多主线加密"],
  ["tang", 63, "唐朝近三百年，需覆盖统一、贞观、武周、开天转折、安史、藩镇、财政与唐末"],
  ["liao", 24, "辽超过二百年，需覆盖契丹建国、南北面官、燕云、澶渊、女真兴起与灭亡"],
  ["western-xia", 24, "西夏近二百年，需覆盖党项建国、宋夏战争、文字制度、河西经营与蒙夏战争"],
  ["jin", 24, "金超过百年，需覆盖女真兴起、灭辽灭北宋、汉地治理、迁都与蒙金战争"],
  ["northern-song", 31, "北宋超过百年，需覆盖建国集权、宋辽宋夏、财政变法、党争与靖康危机"],
  ["southern-song", 31, "南宋超过百年，需覆盖南渡、宋金和战、权臣政治、宋蒙战争与亡国"],
  ["yuan", 30, "元朝按蒙古-元连续帝国理解超过百年，需覆盖建元、统一、行省、多民族治理与元末"],
  ["ming", 35, "明朝近三百年，需覆盖建国、靖难、海洋、财政、党争、辽东、民变与明清转折"],
  ["qing", 37, "清朝近三百年，需覆盖入关、统一、边疆、盛世、财政、外患与近代转型"],
  ["japan", 83, "日本为长周期区域文明，需按古代、中世、近世、近现代连续覆盖"],
  ["ancient-egypt", 50, "古埃及为超长文明，需覆盖古王国、中王国、新王国、晚期与希腊化转折"],
  ["nubia-kush", 25, "努比亚与库施是长周期尼罗河文明线，需覆盖 Kerma、Napata、Meroe 与埃及互动"],
  ["ancient-greece", 60, "古希腊需覆盖爱琴、城邦、波希战争、伯罗奔尼撒、马其顿与希腊化"],
  ["roman-republic", 55, "罗马共和国需覆盖王政终结、阶级斗争、意大利统一、布匿战争与内战"],
  ["roman-empire", 70, "罗马帝国需覆盖元首制、边疆、三世纪危机、基督教化、分治与西部终局"],
  ["byzantium", 55, "拜占庭超过千年，需覆盖七世纪危机、军区制、圣像破坏、马其顿复兴、1204 与 1453"],
  ["viking-nordic-europe", 30, "北欧与维京世界跨度长，需覆盖扩张、贸易、基督教化与王国形成"],
  ["iberia-reconquista", 35, "伊比利亚再征服运动跨度近千年，需覆盖穆斯林政权、基督教王国与统一"],
  ["eastern-europe-slavic", 40, "东欧斯拉夫与罗斯世界跨度长，需覆盖罗斯、波兰、巴尔干与草原压力"],
  ["russia", 64, "俄罗斯区域需覆盖基辅罗斯、莫斯科、帝国、改革、革命与现代转型"],
  ["renaissance-reformation", 25, "文艺复兴与宗教改革跨数百年，需覆盖人文主义、印刷、宗教改革与国家竞争"],
  ["early-modern-europe", 34, "近代早期欧洲跨数百年，需覆盖国家建构、战争、财政、殖民与革命前夜"],
  ["sumer-early-mesopotamia", 46, "苏美尔与早期两河为超长早期文明线，需覆盖城市、文字、王权、帝国与法典传统"],
  ["hittite-anatolia", 35, "赫梯与安纳托利亚需覆盖王权、条约、叙利亚竞争、卡迭石与青铜时代崩溃"],
  ["neo-assyrian-empire", 40, "新亚述需覆盖行省化、迁徙政策、历代王征战、巴比伦与埃及问题"],
  ["achaemenid-persia", 45, "阿契美尼德需覆盖行省、王道、地方精英、埃及叛乱和晚期危机"],
  ["phoenician-carthage", 44, "腓尼基与迦太基跨度长，需覆盖城市网络、殖民、海贸与罗马冲突"],
  ["islamic-middle-east", 49, "中东与伊斯兰世界为长周期区域线，需覆盖正统哈里发、倭马亚、阿拔斯、突厥波斯化与奥斯曼前夜"],
  ["indian-subcontinent", 65, "印度次大陆为超长区域文明，需覆盖早期城市、帝国、宗教、苏丹国、莫卧儿与殖民转折"],
  ["southeast-asia", 63, "东南亚为长周期区域文明，需覆盖海陆网络、印度化、佛教化、港市与殖民前夜"],
  ["maya-civilization", 45, "玛雅是长周期文明网络，需覆盖前古典、古典城邦竞争、后古典北尤卡坦和西班牙征服"],
  ["north-america", 34, "北美是区域总包，后续应按原住民社会、殖民、建国、扩张、内战与现代拆密"],
  ["south-america", 34, "南美是区域总包，后续应按安第斯、殖民、独立、国家形成与现代转型拆密"],
  ["african-civilizations", 35, "非洲文明主线是区域总包，后续应按尼罗河、萨赫勒、东非海岸、西非帝国与南部非洲拆密"],
  ["inca-empire", 45, "印加政权短但安第斯文明线长，需覆盖前史、道路仓储、扩张、内战、征服与维尔卡班巴"],
  ["mexica-aztec-triple-alliance", 45, "墨西卡-阿兹特克政权短但需覆盖迁徙、三方同盟、贡赋、花战、围城与殖民改造"]
];

const shortLivedEnough = [
  "qin",
  "xin",
  "sui",
  "five-dynasties-ten-kingdoms",
  "late-han-three-kingdoms",
  "mongol",
  "republican-china",
  "war-of-resistance",
  "liberation-war",
  "reform-opening"
];

const data = window.HISTORY_DATA;
const rows = longCycleThresholds.map(([dynastyId, minCount, reason]) => {
  const dynasty = (data.dynasties || []).find((item) => item.id === dynastyId);
  const count = data.dynastyEvents?.[dynastyId]?.length || 0;
  return { dynastyId, title: dynasty?.title || dynastyId, count, minCount, gap: Math.max(0, minCount - count), reason };
}).filter((item) => item.gap > 0).sort((a, b) => b.gap - a.gap || a.count - b.count);

console.log(`coverageGaps=${rows.length}`);
for (const row of rows) {
  console.log(`- ${row.dynastyId} ${row.title}: 当前 ${row.count} / 建议 ${row.minCount}，缺口 ${row.gap}。${row.reason}`);
}

console.log(`shortLivedExcluded=${shortLivedEnough.length}`);
