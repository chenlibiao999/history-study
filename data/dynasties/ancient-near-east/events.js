(() => {
  const dynastyId = "ancient-near-east";
  const dynasty = "古代西亚核心帝国";
  const sources = window.ANCIENT_NEAR_EAST_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: name + "需要放在“" + title + "”的制度、战争、贸易或文化背景中理解。", events: [title] }));
  const process = (title, summary, time) => [{ time, title: "背景积累", description: title + "发生前，区域生态、交通、权力竞争、经济基础和文化传统已经长期积累，学习时需要先看清这些前置条件。" }, { time, title: "事件展开", description: summary + " 它不是孤立名词，而是在前后阶段的制度变化、战争压力、贸易网络和观念传播中逐步形成。" }, { time, title: "影响延伸", description: "这一节点继续影响后续政治秩序、社会结构、文化传播、区域边界和跨区域联系，也为后来的国家形成或帝国转型留下条件。" }];
  const event = ([slug, title, era, time, summary]) => ({ id: dynastyId + "-" + slug, title, aliases: [], era, period: dynasty, time, regions: ["古代西亚核心帝国"], topics: [], summary, bookmarked: false, people: people([], title), relations: [], background: [title + "要放在" + dynasty + "的长时段主线中理解。"], process: process(title, summary, time), results: ["这一事件是理解" + dynasty + "后续走向的关键节点。"], debates: [{ view: "学习提示", content: "这是第一版必要学习骨架，后续可继续补专门史料和争议。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["ancient-near-east-britannica"], note: "首版按主线学习版整理，后续逐条细核。" }], citations: [{ sourceId: "ancient-near-east-britannica", reference: "公开通史入口", status: "待逐条细核", plainText: "白话理解：" + summary, note: "保留估算和分层口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: title + "为什么重要？", answer: "因为它改变了" + dynasty + "的制度、权力或区域关系。" }], notes: [], dynastyId, dynasty, topicIds: [] });
  window.ANCIENT_NEAR_EAST_EVENTS = [
    ["neolithic-near-east", "西亚新石器与农业起源", "农业起源", "约前10000-前7000", "新月沃地出现驯化植物、村落和祭祀中心，为城市和国家形成奠基。"],
    ["jericho-catalhoyuk", "耶利哥与恰塔霍裕克", "农业起源", "约前9000-前6000", "早期聚落显示定居生活、仪式空间和区域交换正在成形。"],
    ["uruk-expansion", "乌鲁克城市化扩展", "早期帝国", "约前4000-前3100", "南两河城市、文字雏形、神庙经济和远距离交换扩展。"],
    ["akkadian-empire", "阿卡德帝国", "早期帝国", "约前2334-前2154", "萨尔贡建立跨城邦帝国，把两河政治推向更大尺度。"],
    ["ur-iii", "乌尔第三王朝", "早期帝国", "约前2112-前2004", "乌尔第三王朝以官僚、税收和神庙经济重建两河秩序。"],
    ["old-babylon-hammurabi", "汉谟拉比与古巴比伦", "古巴比伦", "约前1792-前1750", "汉谟拉比整合巴比伦尼亚，并以法典展示王权和秩序理想。"],
    ["hittite-rise", "赫梯与安纳托利亚强权", "赫梯与黎凡特", "约前17-前13世纪", "赫梯在安纳托利亚形成王国，并进入叙利亚和埃及竞争圈。"],
    ["kadesh", "卡迭石与青铜时代外交", "赫梯与黎凡特", "约前1274-前1259", "埃及与赫梯围绕叙利亚冲突，随后以条约确认势力平衡。"],
    ["levant-city-states", "黎凡特城邦与海上网络", "赫梯与黎凡特", "前2千纪", "乌加里特、腓尼基等城市连接埃及、两河、安纳托利亚和地中海。"],
    ["neo-assyrian-rise", "新亚述帝国兴起", "新亚述与新巴比伦", "前10-前7世纪", "新亚述以常备军、行省和强制迁徙建立西亚军事帝国。"],
    ["assyrian-deportations", "亚述行省与迁徙政策", "新亚述与新巴比伦", "前8-前7世纪", "亚述通过行省化和人口迁徙削弱地方反抗并调动资源。"],
    ["fall-nineveh", "尼尼微陷落", "新亚述与新巴比伦", "前612", "新巴比伦与米底联军攻陷尼尼微，新亚述帝国瓦解。"],
    ["neo-babylonian", "新巴比伦与尼布甲尼撒", "新亚述与新巴比伦", "前626-前539", "新巴比伦控制两河和黎凡特，巴比伦成为西亚大城。"],
    ["babylonian-exile", "巴比伦之囚", "新亚述与新巴比伦", "前586以后", "犹大王国被灭后精英被迁往巴比伦，影响犹太宗教传统。"],
    ["cyrus-babylon", "居鲁士进入巴比伦", "新亚述与新巴比伦", "前539", "波斯占领巴比伦，西亚进入阿契美尼德帝国时代。"]
  ].map(event);
})();
