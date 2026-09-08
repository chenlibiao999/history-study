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
  const timeline = [["funan","扶南港口国家","早期港口","1-6世纪","扶南在湄公河下游连接印度洋和南海贸易，是大陆东南亚早期国家形成入口。"],["chenla","真腊与高棉前史","早期港口","6-8世纪","真腊和湄公河流域诸政权为后来的吴哥王权提供政治和文化背景。"],["angkor-founded","吴哥王权形成","高棉与缅甸","9世纪","高棉王权以都城、神庙、农业平原和水利体系组织大型国家。"],["angkor-peak","吴哥高峰","高棉与缅甸","12世纪","吴哥窟和阇耶跋摩七世时期体现高棉王权的宗教、军事和公共工程能力。"],["pagan","蒲甘王国","高棉与缅甸","11-13世纪","蒲甘整合伊洛瓦底江流域，并推动上座部佛教制度化。"],["ayutthaya","大城王国兴起","泰越缅竞争","1351以后","大城在湄南河流域发展为贸易和军事强国，成为近世大陆东南亚核心政权。"],["burma-siam-vietnam","缅暹越竞争格局","泰越缅竞争","16-18世纪","缅甸、暹罗和越南扩张塑造大陆东南亚近世政治地图。"]].map(event);
  const narratives = {
    "mainland-southeast-asia-funan": "湄公河下游的港口与运河网络把内陆农产、海上航线和外来宗教联系起来；“扶南”所指的政治范围与统治强度仍须从中国记载和考古材料分别判断。",
    "mainland-southeast-asia-chenla": "真腊不是简单取代扶南的单一国家标签，湄公河流域多个权力中心、铭文传统和地方网络共同构成吴哥前史。",
    "mainland-southeast-asia-angkor-founded": "9世纪后，高棉王权将都城、神庙、贡役和洞里萨湖平原的水利农业结合；水利既服务稻作，也服务王权动员与仪式秩序。",
    "mainland-southeast-asia-angkor-peak": "吴哥窟与阇耶跋摩七世时期的道路、医院和寺院显示国家资源集中；大型工程并不自动意味着全域持续繁荣，环境和地方政治同样制约体系。",
    "mainland-southeast-asia-pagan": "蒲甘利用伊洛瓦底江谷地的农业、航运和佛教捐赠整合上缅甸；寺院土地与王权财政之间的关系是理解其扩张和压力的关键。",
    "mainland-southeast-asia-ayutthaya": "大城位于湄南河水网与湾区贸易之间，以稻米腹地、港口商人和军事动员连接内陆与海洋；其外交需放在缅甸、越南和华人贸易网络中理解。",
    "mainland-southeast-asia-burma-siam-vietnam": "16至18世纪，缅甸、暹罗、越南的扩张由王朝战争、山地边疆、稻作平原和人口迁徙共同塑造，现代国界不能倒投为当时固定边界。"
  };
  window.MAINLAND_SOUTHEAST_ASIA_EVENTS = timeline.map((item, index) => ({ ...item, contentLevel: "mainline", contentPresentation: "tiered", mainlineNarrative: narratives[item.id], background: [], process: [], results: [], debates: [], reviewQuestions: [], previousEventIds: index ? [timeline[index - 1].id] : [], nextEventIds: index < timeline.length - 1 ? [timeline[index + 1].id] : [] }));
})();
