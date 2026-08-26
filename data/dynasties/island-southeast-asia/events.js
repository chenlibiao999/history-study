(() => {
  const dynastyId = "island-southeast-asia";
  const dynasty = "岛屿东南亚与海峡贸易";
  const sources = window.ISLAND_SOUTHEAST_ASIA_SOURCES || [];
  const sourceMap = {
  "srivijaya": [
    "island-southeast-asia-main-source",
    "island-southeast-asia-met-timeline"
  ],
  "sailendra": [
    "island-southeast-asia-met-timeline"
  ],
  "east-java": [
    "island-southeast-asia-main-source"
  ],
  "majapahit": [
    "island-southeast-asia-main-source",
    "island-southeast-asia-met-timeline"
  ],
  "islamization": [
    "island-southeast-asia-main-source"
  ],
  "malacca": [
    "island-southeast-asia-main-source"
  ],
  "portuguese-malacca": [
    "island-southeast-asia-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.ISLAND_SOUTHEAST_ASIA_EVENTS = [["srivijaya","室利佛逝海峡网络","海峡佛教网络","7-13世纪","室利佛逝依托马六甲和巽他海峡，发展佛教、贡赋和海上贸易网络。"],["sailendra","夏连特拉与婆罗浮屠","爪哇王权","8-9世纪","爪哇中部佛教王权和婆罗浮屠显示岛屿东南亚与印度洋佛教世界的联系。"],["east-java","东爪哇政权延续","爪哇王权","10-13世纪","中爪哇重心转向东爪哇后，农业、港口和王权结构继续演化。"],["majapahit","满者伯夷","爪哇王权","13-15世纪","满者伯夷以爪哇为中心，通过贡赋、贸易和军事影响周边群岛。"],["islamization","港口伊斯兰化","伊斯兰港口","13-16世纪","穆斯林商人、苏丹国和海上贸易推动岛屿东南亚多地伊斯兰化。"],["malacca","马六甲苏丹国","伊斯兰港口","15世纪","马六甲成为连接印度洋、南海和群岛世界的伊斯兰港口枢纽。"],["portuguese-malacca","葡萄牙占领马六甲","伊斯兰港口","1511","葡萄牙进入马六甲标志欧洲海权直接介入东南亚海峡贸易。"]].map(event);
})();
