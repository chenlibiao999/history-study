(() => {
  const dynastyId = "delhi-sultanate-mughal";
  const dynasty = "德里苏丹国与莫卧儿";
  const sources = window.DELHI_SULTANATE_MUGHAL_SOURCES || [];
  const sourceMap = {
  "delhi-founded": [
    "delhi-sultanate-mughal-main-source"
  ],
  "khalji-tughluq": [
    "delhi-sultanate-mughal-main-source"
  ],
  "babur-panipat": [
    "delhi-sultanate-mughal-mughal",
    "delhi-sultanate-mughal-main-source"
  ],
  "akbar-reforms": [
    "delhi-sultanate-mughal-akbar",
    "delhi-sultanate-mughal-mughal"
  ],
  "aurangzeb-peak": [
    "delhi-sultanate-mughal-mughal",
    "delhi-sultanate-mughal-main-source"
  ],
  "company-rule": [
    "delhi-sultanate-mughal-main-source"
  ],
  "raj-1858": [
    "delhi-sultanate-mughal-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.DELHI_SULTANATE_MUGHAL_EVENTS = [["delhi-founded","德里苏丹国建立","德里苏丹国","1206","突厥阿富汗军事集团以德里为中心建立苏丹国，把北印度更紧密接入伊斯兰政治世界。"],["khalji-tughluq","哈勒吉与图格鲁克扩张","德里苏丹国","13-14世纪","德里苏丹国多次向德干和南印度推进，但长期控制受交通、地方势力和财政压力限制。"],["babur-panipat","巴布尔与第一次帕尼帕特战役","莫卧儿扩张","1526","巴布尔击败洛迪王朝，开启莫卧儿在北印度的统治。"],["akbar-reforms","阿克巴改革","莫卧儿扩张","1556-1605","阿克巴通过曼萨卜、税制和宗教政策整合贵族与地方社会，强化帝国基础。"],["aurangzeb-peak","奥朗则布时期最大扩张","莫卧儿扩张","17世纪后期","莫卧儿疆域达到高峰，但德干战争和财政军事负担也加重帝国张力。"],["company-rule","东印度公司扩张","殖民转折","1757以后","普拉西战役后，东印度公司逐步从贸易公司转为领土统治力量。"],["raj-1858","1857起义与王冠统治","殖民转折","1857-1858","1857起义后，英国王冠取代公司直接治理印度，殖民国家形态进一步制度化。"]].map(event);
})();
