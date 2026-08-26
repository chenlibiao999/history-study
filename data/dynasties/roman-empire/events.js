(() => {
  const dynastyId = "roman-empire";
  const dynasty = "罗马帝国";
  const sources = window.ROMAN_EMPIRE_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: name + "需要放在“" + title + "”的制度、战争、贸易或文化背景中理解。", events: [title] }));
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => ({ id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: ["罗马帝国"], topics: [], summary, bookmarked: false, people: people([], title), relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["roman-empire-britannica"], note: "首版按主线学习版整理，后续逐条细核。" }], citations: [{ sourceId: "roman-empire-britannica", reference: "公开通史入口", status: "待逐条细核", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] });
  window.ROMAN_EMPIRE_EVENTS = [
    ["augustus", "奥古斯都与元首制", "元首制", "前31-14", "奥古斯都以共和名义稳定皇权，建立帝国治理框架。"],
    ["julio-claudian", "朱里亚-克劳狄王朝", "元首制", "14-68", "早期皇权在家族继承、军队和元老院之间寻找平衡。"],
    ["flavian", "弗拉维王朝与帝国恢复", "元首制", "69-96", "内战后弗拉维王朝重建财政、军队和城市象征。"],
    ["trajan", "图拉真最大扩张", "帝国高峰", "98-117", "帝国在达契亚和东方战役后达到最大疆域。"],
    ["hadrian", "哈德良边界治理", "帝国高峰", "117-138", "哈德良强化边界、巡行和防御，转向守成治理。"],
    ["antonine-plague", "安敦尼瘟疫与压力", "帝国高峰", "165以后", "疫病、边疆战争和财政压力削弱帝国稳定。"],
    ["third-century", "三世纪危机", "三世纪危机", "235-284", "军人皇帝、边疆入侵和财政通胀造成长期危机。"],
    ["diocletian", "戴克里先改革", "晚期帝国", "284以后", "税制、军队、行政和四帝共治重组晚期帝国。"],
    ["constantine", "君士坦丁与新都", "晚期帝国", "306-337", "君士坦丁支持基督教并建设君士坦丁堡。"],
    ["western-fall", "西罗马政治终结", "晚期帝国", "476", "西部皇帝被废，西欧进入后罗马王国时代。"]
  ].map(event);
})();
