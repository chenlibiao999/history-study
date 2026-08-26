(() => {
  const dynastyId = "africa-essential-empires";
  const dynasty = "非洲核心帝国与贸易网络";
  const sources = window.AFRICA_ESSENTIAL_EMPIRES_SOURCES || [];
  const sourceMap = {
    kush: ["africa-essential-empires-main-source"],
    carthage: ["africa-essential-empires-main-source", "africa-essential-empires-carthage"],
    aksum: ["africa-essential-empires-main-source", "africa-essential-empires-aksum"],
    ghana: ["africa-essential-empires-main-source"],
    mali: ["africa-essential-empires-main-source", "africa-essential-empires-mali"],
    songhai: ["africa-essential-empires-main-source", "africa-essential-empires-songhai"],
    swahili: ["africa-essential-empires-main-source"],
    independence: ["africa-essential-empires-main-source"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.AFRICA_ESSENTIAL_EMPIRES_EVENTS = [["kush","库施王国与尼罗河南段","尼罗河与东北非","约前1000-350","库施承接并改造尼罗河王权传统，是理解埃及以南非洲国家形成的入口。"],["carthage","迦太基与西地中海贸易","北非地中海","前9-前2世纪","腓尼基殖民城市发展为商业强权，深度影响地中海权力格局。"],["aksum","阿克苏姆王国","尼罗河与东北非","1-7世纪","阿克苏姆连接红海、非洲内陆和印度洋贸易，并较早形成基督教王国传统。"],["ghana","加纳帝国与黄金贸易","跨撒哈拉西非","约8-11世纪","西非国家依托黄金、盐和商路发展，进入伊斯兰世界贸易网络。"],["mali","马里帝国与曼萨穆萨","跨撒哈拉西非","13-15世纪","马里控制尼日尔河和黄金贸易，廷巴克图成为学术与商业中心。"],["songhai","桑海帝国","跨撒哈拉西非","15-16世纪","桑海继承并扩展西非帝国传统，显示萨赫勒国家治理能力。"],["swahili","斯瓦希里海岸城邦","印度洋东非","10-16世纪","东非海岸城邦以伊斯兰文化和印度洋贸易连接非洲、阿拉伯和印度。"],["independence","非洲独立浪潮","殖民与独立","1950-1960年代","二战后殖民体系瓦解，非洲国家在冷战和发展压力中重新组织政治秩序。"]].map(event);
})();
