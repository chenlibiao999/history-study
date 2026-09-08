(() => {
  const dynastyId = "americas-world";
  const dynasty = "美洲文明与国家形成";
  const sources = window.AMERICAS_WORLD_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: `${name}需要放在“${title}”的生态、城市、帝国、殖民或独立背景中理解。`, events: [title] }));
  const process = (title, summary, result, time) => [
    { time, title: "背景积累", description: `${title}发生前，美洲不同生态区的人群、农业、贸易、宗教和政治组织已经长期发展。` },
    { time, title: "事件展开", description: `${summary} 学习时要区分原住民文明自身主线、欧洲殖民冲击和独立后国家建设。` },
    { time, title: "影响延伸", description: `${result} 它继续影响美洲区域秩序、大西洋世界、人口结构和现代国家边界。` }
  ];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["美洲"]) => ({ id, title, aliases: [], era, period: dynasty, time, regions, topics, summary, bookmarked: false, people: people(names, title), relations: [], background: [`${title}要放在美洲本土文明、跨洋接触和殖民后社会重组的长期主线中理解。`], process: process(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "美洲各区材料差异很大，不能用单一帝国或现代国家框架覆盖全部地区。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["americas-world-britannica"], note: "首版为主线学习版，后续逐条补考古、殖民档案和区域研究。" }], citations: [{ sourceId: "americas-world-britannica", reference: "美洲史公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "人口、时间和影响范围保留估算口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics });
  const rows = [
    ["americas-world-peopling", "早期人群进入美洲", "早期迁徙与农业", "约前15000以后", "人群经白令陆桥和沿海路线进入美洲，并适应北极、草原、森林、山地和热带环境。", "美洲历史有漫长本土开端，不应从1492年才开始。", ["早期迁徙社群"], ["迁徙", "原住民"]],
    ["americas-world-agriculture", "玉米、马铃薯与农业扩散", "早期迁徙与农业", "约前7000-前2000", "中美洲玉米、安第斯马铃薯等作物驯化，推动村落、人口增长和复杂社会。", "农业为中美洲、安第斯和北美部分地区的国家形成提供基础。", ["农业社群"], ["农业", "作物"]],
    ["americas-world-olmec", "奥尔梅克与中美洲早期传统", "中美洲早期文明", "约前1500-前400", "奥尔梅克中心发展纪念性建筑、宗教图像和区域交换，被视为中美洲早期传统之一。", "它为后来的玛雅、特奥蒂瓦坎和中美洲宗教政治形式提供重要背景。", ["奥尔梅克精英"], ["奥尔梅克", "中美洲"], ["中美洲"]],
    ["americas-world-chavin", "安第斯早期宗教与区域中心", "安第斯国家", "约前900-前200", "查文等中心通过宗教、工艺和远距离联系影响安第斯多地。", "安第斯国家传统并非印加才出现，而有更早的宗教与区域中心基础。", ["查文祭司与工匠"], ["查文", "安第斯"], ["安第斯"]],
    ["americas-world-maya-classic", "玛雅城邦与古典高峰", "玛雅与特奥蒂瓦坎", "约250-900", "玛雅低地出现众多城邦，发展文字、历法、王权仪式和战争联盟。", "玛雅展示了无统一帝国条件下复杂城市文明的长期竞争与创造。", ["玛雅王室", "书吏"], ["玛雅", "文字", "城邦"], ["中美洲"]],
    ["americas-world-teotihuacan", "特奥蒂瓦坎影响网络", "玛雅与特奥蒂瓦坎", "约1-7世纪", "特奥蒂瓦坎成为大型城市中心，其宗教、贸易和政治影响扩展到中美洲多地。", "中美洲存在强大的跨城邦交流网络，城市影响不必等同直接帝国统治。", ["特奥蒂瓦坎居民"], ["城市", "中美洲"]],
    ["americas-world-tiwanaku-wari", "蒂瓦纳库、瓦里与安第斯整合", "安第斯国家", "约6-10世纪", "蒂瓦纳库和瓦里在高原与安第斯多地形成区域整合和道路、行政影响。", "它们为印加之前的安第斯跨区域治理提供制度和交通背景。", ["蒂瓦纳库精英", "瓦里统治者"], ["安第斯", "区域国家"]],
    ["americas-world-aztec", "阿兹特克三城同盟", "阿兹特克与印加", "1428以后", "特诺奇蒂特兰等三城同盟建立贡赋帝国，控制墨西哥谷及周边地区。", "阿兹特克展示中美洲晚期贡赋、军事和宗教政治的高度整合。", ["阿兹特克贵族", "三城同盟"], ["阿兹特克", "贡赋"], ["墨西哥谷"]],
    ["americas-world-inca", "印加帝国扩张", "阿兹特克与印加", "15世纪", "印加通过道路、劳役、行政仓储和地方联盟控制安第斯广大区域。", "印加把安第斯多生态带整合为美洲最大原住民帝国之一。", ["帕查库特克", "印加贵族"], ["印加", "安第斯", "道路"], ["安第斯"]],
    ["americas-world-columbus", "哥伦布航行与大西洋接触", "欧洲征服与殖民", "1492", "哥伦布航行开启欧洲、美洲和非洲之间持续接触与殖民扩张。", "疾病、物种交换、征服和强制劳动重塑了大西洋世界。", ["哥伦布", "加勒比原住民"], ["大西洋", "殖民"]],
    ["americas-world-aztec-conquest", "阿兹特克帝国被征服", "欧洲征服与殖民", "1519-1521", "科尔特斯、西班牙人和本地盟友攻陷特诺奇蒂特兰，阿兹特克帝国崩溃。", "征服依赖疾病、军事技术、本地政治矛盾和殖民制度共同作用。", ["科尔特斯", "蒙特苏马二世", "特拉斯卡拉盟友"], ["征服", "阿兹特克"], ["墨西哥"]],
    ["americas-world-inca-conquest", "印加帝国被征服", "欧洲征服与殖民", "1532-1533", "皮萨罗利用印加内战和疾病冲击俘获阿塔瓦尔帕，西班牙逐步控制安第斯核心。", "安第斯社会被纳入殖民矿业、传教和行政体系，但本地社群持续抵抗和适应。", ["皮萨罗", "阿塔瓦尔帕"], ["征服", "印加"], ["安第斯"]],
    ["americas-world-atlantic-colonial", "大西洋殖民体系", "欧洲征服与殖民", "16-18世纪", "西班牙、葡萄牙、英国、法国等建立殖民地、种植园、矿业和奴隶贸易网络。", "美洲殖民体系连接欧洲资本、非洲强制迁徙和美洲土地劳作。", ["殖民官员", "被奴役非洲人", "原住民社群"], ["殖民", "奴隶制", "矿业"]],
    ["americas-world-us-independence", "美国独立", "独立与新国家", "1776-1783", "北美十三殖民地反抗英国并建立美国。", "美国独立影响大西洋革命时代，但新国家仍面对奴隶制和原住民土地问题。", ["华盛顿", "十三殖民地"], ["美国独立", "革命"], ["北美"]],
    ["americas-world-haiti", "海地革命", "独立与新国家", "1791-1804", "圣多明各奴隶起义发展为海地独立，建立由前被奴役者创建的新国家。", "海地革命震动奴隶制大西洋世界，是美洲独立史和黑人解放史关键节点。", ["杜桑·卢维杜尔", "海地革命者"], ["海地", "奴隶制", "独立"], ["加勒比"]],
    ["americas-world-latin-independence", "拉美独立运动", "独立与新国家", "1810-1826", "西属美洲在拿破仑战争和本地精英动员中爆发独立战争，形成多个新共和国。", "拉美独立结束伊比利亚帝国大陆统治，但社会等级、土地和区域分裂延续。", ["玻利瓦尔", "圣马丁"], ["拉美独立", "共和国"], ["拉丁美洲"]],
    ["americas-world-us-expansion", "美国大陆扩张与美西战争", "独立与新国家", "19世纪", "美国通过购买、战争、移民和铁路向西扩张，并在1898年战争后进入海外帝国阶段。", "美国扩张深刻改变北美原住民、墨西哥边疆、加勒比和太平洋格局。", ["美国政府", "原住民民族", "墨西哥"], ["美国扩张", "美西战争"], ["北美", "加勒比"]]
  ];
  window.AMERICAS_WORLD_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));
})();
(() => {
  const events = window.AMERICAS_WORLD_EVENTS || [];
  const sources = window.AMERICAS_WORLD_SOURCES || [];
  const narratives = {
    "americas-world-peopling": "考古遗址、古 DNA 与海岸路线研究共同表明，进入美洲不是单一时点的一次迁徙；不同人群随后在极地、内陆平原和热带形成相异生计。",
    "americas-world-agriculture": "作物驯化不是自动通向国家：玉米、马铃薯等提高定居与储存能力，而水利、劳作组织和交换网络才使部分地区出现更大聚落。",
    "americas-world-olmec": "墨西哥湾沿岸的圣洛伦索、拉本塔等中心把大型公共工程、石雕与远距离物资交换聚合起来；其影响可追踪，但不能简单称为所有中美洲文明的直接母体。",
    "americas-world-chavin": "查文-德万塔尔处在山地与海岸之间，祭祀图像、建筑和外来物品显示其作为宗教汇聚点的作用；它并非覆盖整个安第斯的统一帝国。",
    "americas-world-maya-classic": "提卡尔、卡拉克穆尔等城邦以王权、碑铭、历法和联盟竞争组织政治；9 世纪多地政权衰落并不等于玛雅人消失，而是低地城市体系重组。",
    "americas-world-teotihuacan": "这座大型城市通过街区、宗教建筑与贸易网络影响周边；在玛雅地区可见其联系痕迹，但影响方式在直接控制、移民与象征借用之间仍需分别判断。",
    "americas-world-tiwanaku-wari": "高原的蒂瓦纳库与秘鲁中部的瓦里分别发展仪式中心、道路和地方治理网络，为后来的安第斯整合提供经验，却不是印加国家的简单前身。",
    "americas-world-aztec": "三城同盟以战争、贡赋和地方中介扩展权力；其统治既依赖墨西哥谷的湖区农业，也制造了可被西班牙人利用的盟友与敌对关系。",
    "americas-world-inca": "库斯科统治集团将道路、仓储、劳役征发和地方首领合作结合起来，以跨越山地生态带；各地接受程度与控制方式并不相同。",
    "americas-world-columbus": "1492 年后的接触不是单向“发现”：航行开启持续跨洋往来，病原、动植物、人口迁移、军事与征服制度在数十年中共同改变加勒比和大陆。",
    "americas-world-aztec-conquest": "西班牙小部队无法单独解释 1521 年的结局。特拉斯卡拉等本地盟友、围城战、天花流行与既有贡赋冲突共同改变了权力平衡。",
    "americas-world-inca-conquest": "1532 年的卡哈马卡俘虏事件发生在印加内战和疫病冲击之后；西班牙取得库斯科并不意味着安第斯社会立即服从，抵抗和协商持续多年。",
    "americas-world-atlantic-colonial": "矿山、种植园、港口与行政中心把美洲接入大西洋。强制劳动和被奴役非洲人的跨洋迁移是这一体系的组成部分，而非边缘后果。",
    "americas-world-us-independence": "独立战争改变了主权归属和共和制度，但奴隶制、原住民土地扩张以及州与联邦的权力分配没有随 1783 年和平而解决。",
    "americas-world-haiti": "从 1791 年种植园起义到 1804 年独立，革命先后对抗法国殖民权力与再奴役企图；它改变了整个大西洋世界对奴隶制和殖民统治的计算。",
    "americas-world-latin-independence": "1810 年代的战争终结西班牙在多数大陆地区的统治；军事联盟解体后，关税、地方军政力量和土地关系又塑造了新共和国的不同道路。",
    "americas-world-us-expansion": "领土购买、美墨战争、定居者迁移和铁路建设把美国国家权力推向西部；原住民驱逐、墨西哥领土丧失与 1898 年后的海外扩张属于同一扩张链条的不同阶段。"
  };
  const sourceIds = {
    "americas-world-peopling": "americas-world-smithsonian",
    "americas-world-agriculture": "americas-world-met",
    "americas-world-olmec": "americas-world-met",
    "americas-world-chavin": "americas-world-met",
    "americas-world-maya-classic": "americas-world-britannica",
    "americas-world-teotihuacan": "americas-world-met",
    "americas-world-tiwanaku-wari": "americas-world-met",
    "americas-world-aztec": "americas-world-britannica",
    "americas-world-inca": "americas-world-britannica",
    "americas-world-columbus": "americas-world-britannica",
    "americas-world-aztec-conquest": "americas-world-britannica",
    "americas-world-inca-conquest": "americas-world-britannica",
    "americas-world-atlantic-colonial": "americas-world-britannica",
    "americas-world-us-independence": "americas-world-britannica",
    "americas-world-haiti": "americas-world-britannica",
    "americas-world-latin-independence": "americas-world-britannica",
    "americas-world-us-expansion": "americas-world-britannica"
  };
  window.AMERICAS_WORLD_EVENTS = events.map((event, index) => ({
    ...event,
    contentLevel: "mainline",
    contentPresentation: "tiered",
    mainlineNarrative: narratives[event.id] || event.summary,
    claims: [{ statement: event.summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: [sourceIds[event.id] || "americas-world-britannica"], note: "主线节点只陈述来源可支持的范围。" }],
    citations: [{ sourceId: sourceIds[event.id] || "americas-world-britannica", reference: "区域史与馆藏资料入口", status: "待逐条细核", plainText: narratives[event.id] || event.summary, note: "用于定位本卡的区域主线与材料范围。" }],
    sources,
    previousEventIds: index ? [events[index - 1].id] : [],
    nextEventIds: index < events.length - 1 ? [events[index + 1].id] : []
  }));
})();
