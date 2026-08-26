(() => {
  const dynastyId = "mainland-southeast-asia";
  const dynasty = "大陆东南亚王国";
  const sources = window.MAINLAND_SOUTHEAST_ASIA_SOURCES || [];
  const sourceMap = {
  "funan": [
    "mainland-southeast-asia-main-source"
  ],
  "chenla": [
    "mainland-southeast-asia-main-source"
  ],
  "angkor-founded": [
    "mainland-southeast-asia-angkor",
    "mainland-southeast-asia-main-source"
  ],
  "angkor-peak": [
    "mainland-southeast-asia-angkor"
  ],
  "pagan": [
    "mainland-southeast-asia-main-source"
  ],
  "ayutthaya": [
    "mainland-southeast-asia-main-source"
  ],
  "burma-siam-vietnam": [
    "mainland-southeast-asia-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.MAINLAND_SOUTHEAST_ASIA_EVENTS = [["funan","扶南港口国家","早期港口","1-6世纪","扶南在湄公河下游连接印度洋和南海贸易，是大陆东南亚早期国家形成入口。"],["chenla","真腊与高棉前史","早期港口","6-8世纪","真腊和湄公河流域诸政权为后来的吴哥王权提供政治和文化背景。"],["angkor-founded","吴哥王权形成","高棉与缅甸","9世纪","高棉王权以都城、神庙、农业平原和水利体系组织大型国家。"],["angkor-peak","吴哥高峰","高棉与缅甸","12世纪","吴哥窟和阇耶跋摩七世时期体现高棉王权的宗教、军事和公共工程能力。"],["pagan","蒲甘王国","高棉与缅甸","11-13世纪","蒲甘整合伊洛瓦底江流域，并推动上座部佛教制度化。"],["ayutthaya","大城王国兴起","泰越缅竞争","1351以后","大城在湄南河流域发展为贸易和军事强国，成为近世大陆东南亚核心政权。"],["burma-siam-vietnam","缅暹越竞争格局","泰越缅竞争","16-18世纪","缅甸、暹罗和越南扩张塑造大陆东南亚近世政治地图。"]].map(event);
})();
