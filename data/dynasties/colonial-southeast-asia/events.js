(() => {
  const dynastyId = "colonial-southeast-asia";
  const dynasty = "殖民东南亚与民族国家形成";
  const sources = window.COLONIAL_SOUTHEAST_ASIA_SOURCES || [];
  const sourceMap = {
  "malacca-1511": [
    "colonial-southeast-asia-main-source"
  ],
  "voc": [
    "colonial-southeast-asia-indonesia",
    "colonial-southeast-asia-main-source"
  ],
  "british-burma-malaya": [
    "colonial-southeast-asia-main-source"
  ],
  "french-indochina": [
    "colonial-southeast-asia-vietnam",
    "colonial-southeast-asia-main-source"
  ],
  "philippines-us": [
    "colonial-southeast-asia-main-source"
  ],
  "japanese-occupation": [
    "colonial-southeast-asia-main-source"
  ],
  "postwar-independence": [
    "colonial-southeast-asia-indonesia",
    "colonial-southeast-asia-vietnam",
    "colonial-southeast-asia-main-source"
  ]
};
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "该节点保留为二级拆分模块的必要学习内容，后续不再短期扩张事件量。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "按二级模块做首轮来源分层。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.COLONIAL_SOUTHEAST_ASIA_EVENTS = [["malacca-1511","葡萄牙占领马六甲","欧洲海权","1511","葡萄牙控制马六甲后，欧洲海权进入东南亚贸易节点。"],["voc","荷兰东印度公司扩张","欧洲海权","17世纪","荷兰东印度公司在群岛贸易、香料产地和港口中扩张势力。"],["british-burma-malaya","英国在缅甸与马来亚扩张","殖民分区","19世纪","英国控制缅甸和马来亚，把大陆边疆和海峡港口纳入帝国体系。"],["french-indochina","法属印度支那形成","殖民分区","19世纪后期","法国把越南、柬埔寨和老挝纳入印度支那殖民体系。"],["philippines-us","菲律宾从西班牙到美国统治","殖民分区","1898以后","美西战争后菲律宾转入美国统治，东南亚殖民格局更加多元。"],["japanese-occupation","日本占领东南亚","战争与独立","1941-1945","日本占领削弱欧洲殖民权威，也加速民族主义和战后独立运动。"],["postwar-independence","战后独立与国家形成","战争与独立","1945-1954","印度尼西亚、越南等独立斗争推动殖民东南亚向民族国家体系转变。"]].map(event);
})();
