(() => {
  const dynastyId = "maurya-gupta";
  const dynasty = "孔雀与笈多";
  const sources = window.MAURYA_GUPTA_SOURCES || [];
  const sourceMap = {
  "magadha-rise": [
    "maurya-gupta-main-source",
    "maurya-gupta-harvard-chronology"
  ],
  "chandragupta": [
    "maurya-gupta-main-source",
    "maurya-gupta-harvard-chronology"
  ],
  "ashoka-kalinga": [
    "maurya-gupta-ashoka",
    "maurya-gupta-main-source"
  ],
  "maurya-decline": [
    "maurya-gupta-main-source"
  ],
  "gupta-rise": [
    "maurya-gupta-main-source",
    "maurya-gupta-harvard-chronology"
  ],
  "gupta-classical": [
    "maurya-gupta-main-source"
  ],
  "huna-pressure": [
    "maurya-gupta-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.MAURYA_GUPTA_EVENTS = [["magadha-rise","摩揭陀扩张","摩揭陀扩张","前6-前4世纪","摩揭陀依托恒河平原、铁器、城市和军事资源，成为北印度国家竞争的胜出者。"],["chandragupta","旃陀罗笈多建立孔雀帝国","孔雀帝国","前322左右","旃陀罗笈多在亚历山大东征后重组北印度权力，建立孔雀帝国。"],["ashoka-kalinga","阿育王与羯陵伽战争","孔雀帝国","前261左右","羯陵伽战争后，阿育王以法诏表达统治伦理，并推动佛教和帝国意识形态传播。"],["maurya-decline","孔雀帝国瓦解","孔雀帝国","前2世纪","孔雀帝国衰落后，次大陆重新进入区域王国、外来政权和贸易网络并行阶段。"],["gupta-rise","笈多王权兴起","笈多时代","约320以后","笈多王朝在恒河流域重建北印度强权，形成古典梵语文化的重要背景。"],["gupta-classical","笈多古典文化","笈多时代","4-5世纪","数学、天文学、文学、印度教和佛教艺术在笈多时代持续发展。"],["huna-pressure","嚈哒压力与笈多衰落","笈多时代","5-6世纪","内部分权和西北压力削弱笈多王权，北印度再次分化。"]].map(event);
})();
