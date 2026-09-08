(() => {
  const dynastyId = "indus-civilization";
  const dynasty = "印度河文明";
  const sources = window.INDUS_CIVILIZATION_SOURCES || [];
  const sourceMap = {
  "early-villages": [
    "indus-civilization-main-source"
  ],
  "urbanization": [
    "indus-civilization-main-source",
    "indus-civilization-met-timeline"
  ],
  "trade-craft": [
    "indus-civilization-main-source",
    "indus-civilization-met-timeline"
  ],
  "political-question": [
    "indus-civilization-main-source"
  ],
  "decline": [
    "indus-civilization-main-source"
  ],
  "legacy": [
    "indus-civilization-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  const timeline = [["early-villages","早期农业聚落积累","城市形成","约前7000-前3300","俾路支和印度河流域早期聚落为后来的城市文明准备农业、工艺和交换基础。"],["urbanization","哈拉帕城市化","城市形成","约前2600","哈拉帕、摩亨佐达罗等城市出现规划街区、排水系统、标准化度量和远距离贸易。"],["trade-craft","工艺、印章与贸易网络","城市高峰","约前2500-前2000","印章、珠饰、铜器和与两河流域的联系显示印度河城市经济并非孤立发展。"],["political-question","无王宫与文字未释读问题","城市高峰","约前2500-前1900","印度河城市缺少清晰王宫和大型王墓，文字尚未释读，使其权力结构仍有较大解释空间。"],["decline","城市体系衰退","衰退转型","约前1900以后","气候、河道、贸易和地方化等多因素可能推动大城市衰退，不能简化为单一入侵叙事。"],["legacy","后印度河区域转型","衰退转型","约前1900-前1300","城市衰退后，人口和文化传统向旁遮普、恒河上游及地方聚落网络延续转化。"]].map(event);
  const narratives = {
    "indus-civilization-early-villages": "梅赫尔格尔等早期聚落显示农业、畜牧和手工业在城市出现前已长期积累；不同河谷的定居速度和组织方式并不一致。",
    "indus-civilization-urbanization": "约前2600年后，哈拉帕与摩亨佐达罗的街区、排水、砖制标准和度量体系同时出现，表明多个城市共享制度化的生产与管理规范。",
    "indus-civilization-trade-craft": "印章、珠饰与标准砝码把工艺生产和交换联系起来；两河流域记录的“梅卢哈”贸易说明其跨区联系，但不能据此推定单一中央贸易官署。",
    "indus-civilization-political-question": "缺少可确认的王宫、王陵和已释读文字，使研究者不能把其他古代国家模式直接套入印度河；权力可能通过城市机构、商贸群体或宗教实践分散运作。",
    "indus-civilization-decline": "前1900年前后，若干大城市缩小或被放弃，聚落转向地方化。河道变化、季风波动、贸易收缩和社会调整可以并存，尚无单一原因获得决定性证据。",
    "indus-civilization-legacy": "城市衰退后并非人口突然消失：旁遮普、古吉拉特和恒河上游仍可观察到聚落与物质传统的重组，南亚历史从此进入多中心的区域发展。"
  };
  window.INDUS_CIVILIZATION_EVENTS = timeline.map((item, index) => ({ ...item, contentLevel: "mainline", contentPresentation: "tiered", mainlineNarrative: narratives[item.id], background: [], process: [], results: [], debates: [], reviewQuestions: [], previousEventIds: index ? [timeline[index - 1].id] : [], nextEventIds: index < timeline.length - 1 ? [timeline[index + 1].id] : [] }));
})();
