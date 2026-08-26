(() => {
  const dynastyId = "byzantium";
  const dynasty = "拜占庭帝国";
  const sources = window.BYZANTIUM_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: name + "需要放在“" + title + "”的制度、战争、贸易或文化背景中理解。", events: [title] }));
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => ({ id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: ["拜占庭帝国"], topics: [], summary, bookmarked: false, people: people([], title), relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["byzantium-britannica"], note: "首版按主线学习版整理，后续逐条细核。" }], citations: [{ sourceId: "byzantium-britannica", reference: "公开通史入口", status: "待逐条细核", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] });
  window.BYZANTIUM_EVENTS = [
    ["constantinople", "君士坦丁堡成为新都", "新罗马", "330", "新都使帝国重心转向东地中海和黑海通道。"],
    ["justinian-code", "查士丁尼法典", "查士丁尼", "529-534", "法典整理罗马法传统，影响后世欧洲法学。"],
    ["justinian-reconquest", "查士丁尼再征服", "查士丁尼", "533-565", "东罗马收复北非、意大利和部分西地中海。"],
    ["arab-losses", "失去叙利亚与埃及", "收缩与改革", "7世纪", "阿拉伯扩张夺走帝国最富庶东南行省。"],
    ["themes", "军区制与防御国家", "收缩与改革", "7-8世纪", "军区制把军政和土地动员结合，支撑安纳托利亚防御。"],
    ["iconoclasm", "圣像破坏运动", "收缩与改革", "726-843", "皇权、教会和修道院围绕圣像崇敬长期冲突。"],
    ["macedonian", "马其顿王朝复兴", "中期复兴", "867-1025", "帝国在巴尔干和东方恢复影响，文化与法学复兴。"],
    ["schism", "东西教会大分裂", "中期复兴", "1054", "罗马和君士坦丁堡教会裂痕制度化。"],
    ["manzikert", "曼齐刻尔特战役", "十字军冲击", "1071", "拜占庭在安纳托利亚遭塞尔柱重创。"],
    ["fourth-crusade", "第四次十字军攻陷君士坦丁堡", "十字军冲击", "1204", "拉丁占领破坏拜占庭国力。"],
    ["fall-1453", "君士坦丁堡陷落", "晚期灭亡", "1453", "奥斯曼攻陷君士坦丁堡，东罗马灭亡。"]
  ].map(event);
})();
