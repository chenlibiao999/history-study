(() => {
  const dynastyId = "south-asia-imperial-core";
  const dynasty = "南亚核心帝国与殖民分治";
  const sources = window.SOUTH_ASIA_IMPERIAL_CORE_SOURCES || [];
  const sourceMap = {
    "indus-urban": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-met-timeline"],
    "vedic-society": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "mahajanapadas": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "maurya-ashoka": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "gupta": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-met-timeline"],
    "delhi": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "mughal-akbar": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "british-raj": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"],
    "partition": ["south-asia-imperial-core-main-source", "south-asia-imperial-core-harvard-chronology"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.SOUTH_ASIA_IMPERIAL_CORE_EVENTS = [["indus-urban","印度河城市文明","印度河城市","约前2600-前1900","哈拉帕和摩亨佐达罗等城市展示规划、贸易和工艺体系。"],["vedic-society","吠陀社会形成","吠陀与十六大国","约前1500-前600","吠陀文本、祭祀、部落和早期等级关系塑造北印度社会。"],["mahajanapadas","十六大国与城市化","吠陀与十六大国","约前600-前300","恒河流域出现国家、城市、货币和思想竞争。"],["maurya-ashoka","孔雀帝国与阿育王","孔雀笈多","前322-前232","孔雀帝国整合北印度，阿育王以法诏表达帝国治理理想。"],["gupta","笈多时代","孔雀笈多","约320-550","笈多时期北印度王权、梵语文化、数学和宗教艺术发展。"],["delhi","德里苏丹国","德里与莫卧儿","1206-1526","突厥阿富汗军事集团在北印度建立苏丹国，连接伊斯兰世界和南亚。"],["mughal-akbar","莫卧儿与阿克巴改革","德里与莫卧儿","1556-1605","阿克巴改革税制、贵族体系和宗教政策，强化帝国整合。"],["british-raj","英属印度形成","殖民与分治","1757-1858","东印度公司扩张和1857后王冠统治重塑南亚。"],["partition","印度独立与分治","殖民与分治","1947","英属印度分为印度和巴基斯坦，暴力迁徙深刻改变南亚。"]].map(event);
})();
