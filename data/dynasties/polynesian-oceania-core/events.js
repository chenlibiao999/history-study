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

(() => {
  const details = {
    australia:["-25.3, 133.8","澳大利亚大陆","海岸、沙漠、河流与区域迁徙通道","原住民深时历史依靠考古、口述传统与生态知识共同重建。"],
    lapita:["-17.7, 168.3","俾斯麦群岛至西太平洋岛链","季风、独木舟航线与岛屿资源网络","拉皮塔陶器与聚落遗存显示跨岛迁徙和交换，而非单一民族的线性扩张。"],
    "polynesian-voyaging":["-17.7, -149.4","中东波利尼西亚及远洋岛链","星象、洋流、风向与双体舟航线","航海知识以亲族、口传和实践传承，太平洋岛屿间存在长期联系。"],
    maori:["-41.3, 174.8","新西兰北岛与南岛","库克海峡、河谷、森林与沿海航线","毛利社会在定居后适应温带生态，形成不同于热带岛屿的土地和部族组织。"],
    hawaii:["20.8, -156.3","夏威夷群岛","岛间航线、火山坡地与海岸渔场","夏威夷王权形成结合岛屿资源、战争联盟和接触时代的新武器贸易。"],
    "colonial-contact":["-33.9, 151.2","澳大利亚、新西兰与太平洋岛屿","港口、传教站、殖民航线与种植园网络","接触带来贸易、疾病、传教和殖民行政，其影响因岛屿与社群而异。"]
  };
  const world = window.OCEANIA_WORLD_EVENTS || [];
  const map = {australia:"oceania-world-australia-settlement",lapita:"oceania-world-lapita","polynesian-voyaging":"oceania-world-polynesian-voyaging",maori:"oceania-world-maori",hawaii:"oceania-world-hawaii","colonial-contact":"oceania-world-cook"};
  window.POLYNESIAN_OCEANIA_CORE_EVENTS = window.POLYNESIAN_OCEANIA_CORE_EVENTS.map((event) => {
    const slug = event.id.replace("polynesian-oceania-core-", ""); const d = details[slug]; const related = world.find((item) => item.id === map[slug]);
    if (!d || !related) return event;
    const [coordinate, admin, terrainTransport, boundary] = d;
    const facts = [related.summary, related.results?.[0], boundary, ...related.process.map((step) => step.description)].filter(Boolean).slice(0,5);
    const sourceId = "polynesian-oceania-core-main-source";
    return {...event,contentLevel:"core",contentPresentation:"tiered",timeAnchor:{time:event.time,regnal:event.era,coordinate,admin,terrainTransport},spatialAnchor:{coordinate,admin,terrainTransport},factLayer:facts.map((text)=>({text,sourceId})),process:facts.map((description,index)=>({time:event.time,title:`事实节点 ${index+1}`,description:`${description}；这一环节经由${terrainTransport}上的人口、物资、知识或权力关系，塑造后续大洋洲秩序。`})),causalChain:[{kind:"cause",label:"[表层因]",title:"直接条件",description:facts[0]},{kind:"cause",label:"[深层因]",title:"生态与组织",description:facts[2]},{kind:"cause",label:"[结构因]",title:"海洋世界",description:event.summary},{kind:"impact",label:"[传导机制]",title:"后续影响",description:facts[4]}],debates:[{view:"[争议边界]",content:"考古、口述传统与殖民档案的证据类型不同；不能以殖民记录单独替代原住民的历史知识。"}],sources:window.POLYNESIAN_OCEANIA_CORE_SOURCES||[]};
  });
})();
(() => {
  const events = window.POLYNESIAN_OCEANIA_CORE_EVENTS || [];
  window.POLYNESIAN_OCEANIA_CORE_EVENTS = events.map((event, index) => ({
    ...event,
    contentLevel: "mainline",
    contentPresentation: "tiered",
    background: [], process: [], results: [], debates: [], claims: [], citations: [],
    sources: [], reviewQuestions: [],
    previousEventIds: index ? [events[index - 1].id] : [],
    nextEventIds: index < events.length - 1 ? [events[index + 1].id] : []
  }));
})();
