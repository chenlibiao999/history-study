(() => {
  const dynastyId = "polynesian-oceania-core";
  const dynasty = "大洋洲航海与岛屿社会核心";
  const sources = window.POLYNESIAN_OCEANIA_CORE_SOURCES || [];
  const sourceMap = {
    australia: ["polynesian-oceania-core-main-source"],
    lapita: ["polynesian-oceania-core-main-source", "polynesian-oceania-core-lapita"],
    "polynesian-voyaging": ["polynesian-oceania-core-main-source", "polynesian-oceania-core-polynesian"],
    maori: ["polynesian-oceania-core-main-source", "polynesian-oceania-core-maori"],
    hawaii: ["polynesian-oceania-core-main-source", "polynesian-oceania-core-polynesian"],
    "colonial-contact": ["polynesian-oceania-core-main-source"]
  };
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => {
    const sourceIds = sourceMap[slug] || [dynastyId + "-main-source"];
    return { id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: [dynasty], topics: [], summary, bookmarked: false, people: [], relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium-high", sourceIds, note: "已从单一通史入口升级为阶段性来源组合，后续仍可继续补专书和论文。" }], citations: sourceIds.map((sourceId) => ({ sourceId, reference: "阶段核对来源", status: "已做首轮来源分层", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" })), causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] };
  };
  window.POLYNESIAN_OCEANIA_CORE_EVENTS = [["australia","澳大利亚原住民深时历史","澳洲深时","约前50000以后","澳大利亚原住民社会具有极长连续性，不能从欧洲接触才开始叙述。"],["lapita","拉皮塔文化扩散","拉皮塔扩散","约前1500-前500","拉皮塔陶器和迁徙网络是理解远洋岛屿定居的重要线索。"],["polynesian-voyaging","波利尼西亚远航定居","波利尼西亚航海","约前1000-1200","远航技术、亲族组织和岛屿生态适应推动太平洋大范围定居。"],["maori","毛利社会形成","波利尼西亚航海","约1250以后","新西兰毛利社会体现波利尼西亚迁徙后的本地化发展。"],["hawaii","夏威夷王权形成","波利尼西亚航海","18世纪末","夏威夷在接触时代前后形成跨岛王权，成为太平洋政治转型案例。"],["colonial-contact","欧洲接触与殖民压力","接触与殖民","18-19世纪","传教、贸易、疾病和殖民行政改变太平洋岛屿社会。"]].map(event);
})();
