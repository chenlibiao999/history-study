(() => {
  const dynastyId = "steppe-silk-road-core";
  const dynasty = "中亚草原与丝路核心";
  const sources = window.STEPPE_SILK_ROAD_CORE_SOURCES || [];
  const sourceMap = {
    saka: ["steppe-silk-road-core-main-source"],
    sogdians: ["steppe-silk-road-core-main-source", "steppe-silk-road-core-silk-road"],
    turks: ["steppe-silk-road-core-main-source", "steppe-silk-road-core-silk-road"],
    "arab-transoxiana": ["steppe-silk-road-core-main-source", "steppe-silk-road-core-silk-road"],
    timur: ["steppe-silk-road-core-main-source", "steppe-silk-road-core-timurid"],
    "russian-rule": ["steppe-silk-road-core-main-source"],
    "soviet-delimitation": ["steppe-silk-road-core-main-source"],
    independence: ["steppe-silk-road-core-main-source"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.STEPPE_SILK_ROAD_CORE_EVENTS = [["saka","塞种与草原网络","草原游牧","约前500","塞种等草原力量连接黑海、伊朗和中亚绿洲。"],["sogdians","粟特商人与丝路城市","粟特丝路","4-8世纪","粟特城市和商人网络连接中国、草原、伊朗和印度。"],["turks","突厥汗国","突厥化","552以后","突厥汗国把草原政治和丝路控制推向新阶段。"],["arab-transoxiana","河中伊斯兰化","突厥化","8-10世纪","阿拉伯征服后，河中逐步进入伊斯兰政治文化圈。"],["timur","帖木儿帝国","帖木儿","14世纪末","帖木儿以河中为中心重组伊朗、中亚和印度边缘。"],["russian-rule","俄国征服中亚","俄国苏联","19世纪","俄国控制草原和绿洲，把中亚纳入帝国边疆。"],["soviet-delimitation","苏联民族划界","俄国苏联","1920年代","苏联按民族共和国重塑中亚政治地图。"],["independence","中亚五国独立","俄国苏联","1991","苏联解体后，中亚共和国成为独立国家。"]].map(event);
})();
