(() => {
  const dynastyId = "mesoamerica-andes-core";
  const dynasty = "中美洲与安第斯核心文明";
  const sources = window.MESOAMERICA_ANDES_CORE_SOURCES || [];
  const sourceMap = {
    olmec: ["mesoamerica-andes-core-main-source"],
    chavin: ["mesoamerica-andes-core-main-source"],
    "maya-classic": ["mesoamerica-andes-core-main-source", "mesoamerica-andes-core-maya"],
    teotihuacan: ["mesoamerica-andes-core-main-source"],
    "wari-tiwanaku": ["mesoamerica-andes-core-main-source"],
    aztec: ["mesoamerica-andes-core-main-source", "mesoamerica-andes-core-aztec"],
    inca: ["mesoamerica-andes-core-main-source", "mesoamerica-andes-core-inca"],
    conquest: ["mesoamerica-andes-core-main-source", "mesoamerica-andes-core-aztec", "mesoamerica-andes-core-inca"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.MESOAMERICA_ANDES_CORE_EVENTS = [["olmec","奥尔梅克文明","早期文明","约前1500-前400","奥尔梅克常被视为中美洲复杂社会的重要早期代表。"],["chavin","查文文化","早期文明","约前900-前200","查文展示安第斯宗教中心、工艺和高地交流网络。"],["maya-classic","古典玛雅城邦","古典城邦","约250-900","玛雅城邦发展文字、历法、神庙和复杂政治竞争。"],["teotihuacan","特奥蒂瓦坎","古典城邦","约1-7世纪","特奥蒂瓦坎以大型城市和区域影响塑造中墨西哥政治文化。"],["wari-tiwanaku","瓦里与蒂瓦纳科","高原帝国","约600-1000","安第斯出现高原国家和区域整合，为后来的印加体系提供背景。"],["aztec","阿兹特克联盟","高原帝国","1428-1521","阿兹特克在墨西哥盆地建立贡赋帝国，直至西班牙征服。"],["inca","印加帝国","高原帝国","约1438-1533","印加以道路、劳役和行政体系整合安第斯大范围地区。"],["conquest","西班牙征服断裂","征服断裂","1519-1533","军事联盟、疾病和帝国冲突共同导致中美洲与安第斯政治结构剧变。"]].map(event);
})();

(() => {
  const details = {
    olmec: ["约前1500-前400；中美洲早期形成期", "18.0, -94.8", "墨西哥湾沿岸圣洛伦索、拉文塔", "热带低地河流、湾岸航线与高地交换", ["圣洛伦索在约前1400年前后形成大型仪式中心。", "拉文塔在前一千纪中期成为重要中心。", "巨型石雕头像显示精英动员远距离玄武岩的能力。", "奥尔梅克图像和玉石物件进入中美洲交换网络。", "不同中心的兴衰并非一个统一帝国的扩张与崩溃。"], "[主流说] 奥尔梅克是重要早期传统；[争议边界] “母文化”不能抹去其他地区的主动发展。"],
    chavin: ["约前900-前200；安第斯早期地平线", "-9.6, -77.2", "秘鲁安卡什查文·德·万塔尔", "安第斯高地通道、山谷农牧区与太平洋沿岸", ["查文·德·万塔尔位于高地山谷交通节点。", "中心遗存包括下沉广场、石雕和复杂的仪式空间。", "猫科和混合神灵图像见于石刻、陶器与纺织品。", "海岸、高地和东坡物品说明跨生态交换。", "查文影响以宗教与物质风格为主，不等同直接统治。"], "[无争议] 遗址是区域仪式中心；[争议边界] 其政治控制范围无法按现代疆界确定。"],
    "maya-classic": ["250-900；玛雅古典期", "17.2, -89.6", "危地马拉佩滕低地及尤卡坦南部", "石灰岩低地、季节性水源与萨克贝道路", ["玛雅城邦以王朝碑铭记录登基、战争和联盟。", "玛雅文字记录可读的王名、日期和政治事件。", "蒂卡尔、卡拉克穆尔等城邦长期竞争。", "农业、蓄水和贡赋支持高密度城市聚居。", "9世纪后许多南部低地中心衰落，但玛雅社会并未消失。"], "[主流说] 古典低地的政治分裂与环境、战争、治理压力交织；[挑战说] 不存在单一“玛雅文明突然消失”。"],
    teotihuacan: ["约1-7世纪；中美洲古典期", "19.7, -98.8", "墨西哥谷特奥蒂瓦坎", "墨西哥谷湖盆、黑曜石产地与高原道路", ["特奥蒂瓦坎在前2世纪至6世纪间发展为大型城市。", "太阳金字塔、月亮金字塔和亡者大道构成城市仪式轴线。", "城市居民包含多个区域来源的社区。", "帕丘卡黑曜石交换连接中美洲多地。", "约6世纪后城市政治秩序瓦解，其原因仍有争论。"], "[主流说] 城市具有广泛影响；[争议边界] 影响、殖民地与直接帝国统治必须区分。"],
    "wari-tiwanaku": ["约600-1000；安第斯中期地平线", "-16.6, -68.7", "瓦里高地与的的喀喀湖蒂瓦纳库", "安第斯高原、山谷道路与垂直生态带", ["瓦里以阿亚库乔高地为中心建设行政性聚落。", "蒂瓦纳库依托的的喀喀湖盆地形成仪式与生产中心。", "两者的图像、道路和聚落布局影响安第斯多地。", "高地农牧、梯田与跨生态交换支持区域整合。", "它们均在约10世纪后发生重组，未直接等同于印加国家。"], "[争议边界] 瓦里和蒂瓦纳库的统治范围、行政强度与互动关系仍在讨论。"],
    aztec: ["1428-1521；阿兹特克三城同盟", "19.4, -99.1", "墨西哥盆地特诺奇蒂特兰、特斯科科、特拉科潘", "湖盆堤道、奇南帕农田与高原贸易路线", ["1428年三城同盟击败阿斯卡波察尔科后扩张。", "特诺奇蒂特兰建于湖岛并由堤道连接湖岸。", "贡赋册记录多地向同盟中心输送物资。", "帝国通过战争、盟友与地方中介维持不同强度的控制。", "1519至1521年的征服利用本地反同盟力量、疾病和西班牙军事资源。"], "[争议边界] 同盟并非统一民族国家；贡赋关系不等于各地被同样直接管理。"],
    inca: ["约1438-1533；印加扩张期", "-13.5, -71.9", "库斯科及安第斯诸省", "安第斯山脉、印加道路、吊桥与垂直生态带", ["15世纪中期印加自库斯科向安第斯多方向扩张。", "道路、驿站和仓储连接军队、劳役与物资调度。", "米塔劳役制度用于道路、农业和国家工程。", "地方首领常被保留并纳入贡赋和政治关系。", "1532年阿塔瓦尔帕被俘时帝国内战与疾病冲击已削弱整合。"], "[争议边界] 印加控制有核心区与边缘区之分，不能用现代国界描绘其行政强度。"],
    conquest: ["1519-1533；西班牙征服中美洲与安第斯", "19.4, -99.1", "墨西哥谷、库斯科与安第斯核心区", "加勒比海航线、墨西哥高原道路与安第斯山道", ["1519年科尔特斯进入墨西哥高原并与特拉斯卡拉等结盟。", "1521年特诺奇蒂特兰陷落，西班牙在墨西哥谷建立殖民中心。", "1532年皮萨罗在卡哈马卡俘获阿塔瓦尔帕。", "天花等疾病与既有政治冲突放大了征服后果。", "殖民统治依赖原住民中介、矿业、传教和强制劳役，并持续遭遇抵抗。"], "[主流说] 征服由本地联盟、疾病、武力和帝国危机共同造成；[争议边界] 不能归为少数欧洲人单独获胜。"]
  };
  const sourceId = "mesoamerica-andes-core-main-source";
  window.MESOAMERICA_ANDES_CORE_EVENTS = window.MESOAMERICA_ANDES_CORE_EVENTS.map((event) => {
    const detail = details[event.id.replace("mesoamerica-andes-core-", "")];
    if (!detail) return event;
    const [regnal, coordinate, admin, terrainTransport, facts, debate] = detail;
    return { ...event, contentLevel:"core", contentPresentation:"tiered", timeAnchor:{time:event.time,regnal,coordinate,admin,terrainTransport}, spatialAnchor:{coordinate,admin,terrainTransport}, factLayer:facts.map((text)=>({text,sourceId})), process:facts.map((description,index)=>({time:event.time,title:`事实节点 ${index + 1}`,description:`${description}；这一事实经由${terrainTransport}上的人口、物资、权力或军事组织，影响后续区域秩序。`})), causalChain:[{kind:"cause",label:"[表层因]",title:"直接条件",description:facts[0]},{kind:"cause",label:"[深层因]",title:"资源与组织",description:facts[2]},{kind:"cause",label:"[结构因]",title:"区域结构",description:event.summary},{kind:"impact",label:"[传导机制]",title:"后续影响",description:facts[4]}], debates:[{view:"[争议边界]",content:debate}], sources:window.MESOAMERICA_ANDES_CORE_SOURCES || event.sources };
  });
})();
(() => {
  const events = window.MESOAMERICA_ANDES_CORE_EVENTS || [];
  window.MESOAMERICA_ANDES_CORE_EVENTS = events.map((event, index) => ({
    ...event,
    contentLevel: "mainline",
    contentPresentation: "tiered",
    background: [], process: [], results: [], debates: [], claims: [], citations: [],
    sources: [], reviewQuestions: [],
    previousEventIds: index ? [events[index - 1].id] : [],
    nextEventIds: index < events.length - 1 ? [events[index + 1].id] : []
  }));
})();
