(() => {
  const dynastyId = "southeast-asia-core-kingdoms";
  const dynasty = "东南亚核心王国与海洋网络";
  const sources = window.SOUTHEAST_ASIA_CORE_KINGDOMS_SOURCES || [];
  const sourceMap = {
    funan: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    champa: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    angkor: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-unesco-angkor"],
    pagan: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    srivijaya: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    majapahit: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    malacca: ["southeast-asia-core-kingdoms-main-source", "southeast-asia-core-kingdoms-met-timeline"],
    colonial: ["southeast-asia-core-kingdoms-main-source"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.SOUTHEAST_ASIA_CORE_KINGDOMS_EVENTS = [["funan","扶南与早期港口国家","早期港口","1-6世纪","湄公河下游港口国家连接印度洋和南海贸易。"],["champa","占婆与海岸网络","早期港口","2-15世纪","占婆沿越南中南部海岸发展海贸、印度教王权和区域竞争。"],["angkor","吴哥帝国","大陆王国","9-15世纪","高棉王权以水利、神庙和农业平原支撑大型国家。"],["pagan","蒲甘王国","大陆王国","11-13世纪","蒲甘整合伊洛瓦底江流域，并推动上座部佛教制度化。"],["srivijaya","室利佛逝","海洋帝国","7-13世纪","室利佛逝控制马六甲和巽他海峡佛教海贸网络。"],["majapahit","满者伯夷","海洋帝国","13-15世纪","爪哇政权以贡赋和海贸影响群岛多地。"],["malacca","马六甲苏丹国","殖民转型","15世纪","马六甲成为伊斯兰化海峡贸易枢纽。"],["colonial","殖民东南亚分区","殖民转型","16-20世纪","欧洲和美国殖民体系重塑区域边界。"]].map(event);
})();
