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
