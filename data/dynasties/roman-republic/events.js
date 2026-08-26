(() => {
  const dynastyId = "roman-republic";
  const dynasty = "罗马共和国";
  const sources = window.ROMAN_REPUBLIC_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: name + "需要放在“" + title + "”的制度、战争、贸易或文化背景中理解。", events: [title] }));
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => ({ id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: ["罗马共和国"], topics: [], summary, bookmarked: false, people: people([], title), relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["roman-republic-britannica"], note: "首版按主线学习版整理，后续逐条细核。" }], citations: [{ sourceId: "roman-republic-britannica", reference: "公开通史入口", status: "待逐条细核", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] });
  window.ROMAN_REPUBLIC_EVENTS = [
    ["republic-founding", "共和国建立", "共和制度", "前509传统纪年", "罗马以执政官、元老院和年度官职替代王政叙事。"],
    ["twelve-tables", "十二铜表法", "共和制度", "约前451-前450", "成文法回应平民诉求，限制贵族法律垄断。"],
    ["samnite-wars", "萨莫奈战争", "意大利扩张", "前343-前290", "罗马通过长期战争控制意大利中南部。"],
    ["pyrrhic-war", "皮洛士战争", "意大利扩张", "前280-前275", "罗马击退伊庇鲁斯干预，巩固意大利霸权。"],
    ["first-punic-war", "第一次布匿战争", "地中海霸权", "前264-前241", "罗马与迦太基争夺西西里，获得首批海外行省。"],
    ["hannibal-war", "汉尼拔战争", "地中海霸权", "前218-前201", "汉尼拔入侵意大利，罗马最终反攻击败迦太基。"],
    ["gracchi", "格拉古改革", "共和危机", "前133-前121", "土地与公民兵危机引发改革和政治暴力。"],
    ["sulla", "苏拉独裁", "共和危机", "前82-前79", "苏拉以军队进入罗马并重组共和制度。"],
    ["caesar", "凯撒内战", "共和危机", "前49-前44", "凯撒击败庞培并集中权力，共和传统破裂。"],
    ["actium", "亚克兴战役", "共和危机", "前31", "屋大维击败安东尼，共和国转入元首制帝国。"]
  ].map(event);
})();
