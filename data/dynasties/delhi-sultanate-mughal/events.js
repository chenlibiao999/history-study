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
(() => {
  const events = window.DELHI_SULTANATE_MUGHAL_EVENTS || [];
  const narratives = {
    "delhi-sultanate-mughal-delhi-founded": "1206年后，德里成为突厥—阿富汗军事精英、波斯文行政文化与北印度税源的交汇点。苏丹国在地方合作、驻军和城市财政中形成。",
    "delhi-sultanate-mughal-khalji-tughluq": "哈勒吉和图格鲁克向德干推进，试图把军事征服转为税收与行政控制；山地距离、地方政权与补给成本限制了长期统治。",
    "delhi-sultanate-mughal-babur-panipat": "1526年帕尼帕特战役中，巴布尔的火器、骑兵战术和洛迪王朝内部裂缝共同作用；胜利打开北印度中枢，却未立即控制全次大陆。",
    "delhi-sultanate-mughal-akbar-reforms": "曼萨卜等级、札吉尔分封与土地税评估连接皇帝、贵族和地方社会；拉其普特联盟与行政标准化是莫卧儿整合的关键中介。",
    "delhi-sultanate-mughal-aurangzeb-peak": "德干征服扩大版图，也延长战争、驻军和财政征发。版图扩大不等于治理能力同步增加，地方势力因此获得更多活动空间。",
    "delhi-sultanate-mughal-company-rule": "1757年普拉西战役后，公司把孟加拉税收用于雇佣军与贸易，再逐步进入司法、土地和行政领域，商业组织由此转为领土国家。",
    "delhi-sultanate-mughal-raj-1858": "1857年起义涉及兵团、地方王公、农民与城市群体，诉求并不相同。镇压后王冠接管公司，军队、土地与行政分类被重新组织。"
  };
  window.DELHI_SULTANATE_MUGHAL_EVENTS = events.map((event, index) => ({
    ...event, contentLevel: "mainline", contentPresentation: "tiered",
    mainlineNarrative: narratives[event.id], background: [], process: [], results: [], debates: [], reviewQuestions: [],
    previousEventIds: index ? [events[index - 1].id] : [], nextEventIds: index < events.length - 1 ? [events[index + 1].id] : []
  }));
})();
