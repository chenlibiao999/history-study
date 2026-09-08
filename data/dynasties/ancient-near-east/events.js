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
(() => {
  const events = window.ANCIENT_NEAR_EAST_EVENTS || [];
  const narratives = {
    "ancient-near-east-neolithic-near-east": "新月沃地出现驯化植物、村落和祭祀中心，为城市和国家形成奠基。谷物与牲畜的可储存剩余，使定居人口、劳作分工和公共仪式能够在河谷及山前地带持续积累。",
    "ancient-near-east-jericho-catalhoyuk": "耶利哥与恰塔霍裕克显示早期定居聚落已能组织建筑、储存与仪式空间。它们不是后世城市国家的直接复制品，却说明人口聚集和区域交换早于文字与王权。",
    "ancient-near-east-uruk-expansion": "乌鲁克时期的南两河城市把神庙经济、手工业和远距离交换集中到更大聚落。泥板与印章记录的管理需求，解释了文字为何首先嵌入物资与劳动的组织。",
    "ancient-near-east-akkadian-empire": "萨尔贡的阿卡德将多座两河城市置入更大尺度的军事与贡赋框架。帝国依赖驻军、道路和地方精英合作，因而其扩张并不等于对所有区域的同等直接控制。",
    "ancient-near-east-ur-iii": "乌尔第三王朝以官僚记录、徭役与神庙经济重新整合南两河。大量行政泥板可见资源调配的密度，也显示这种高度集中体系对农业、运输和地方服从的依赖。",
    "ancient-near-east-old-babylon-hammurabi": "汉谟拉比通过联盟、战争与城市整合扩大巴比伦的支配范围。《汉谟拉比法典》首先是王权秩序的公开表述，不能直接视作所有社会成员日常生活的完整实录。",
    "ancient-near-east-hittite-rise": "赫梯在安纳托利亚高原组织王权，并经山口进入北叙利亚的青铜时代竞争网络。其力量来自宫廷、附庸与战车军事的组合，而非孤立的单一民族扩张。",
    "ancient-near-east-kadesh": "卡迭石之战围绕叙利亚通道展开，埃及与赫梯都以王室铭文宣示胜利。其后条约更能说明双方承认长期均势：边境、安全与王族关系需要制度化处理。",
    "ancient-near-east-levant-city-states": "黎凡特港口与城邦通过木材、金属、奢侈品和书写体系连接埃及、两河、安纳托利亚与地中海。乌加里特等地的文书表明这些城市既受大国压力，也拥有自身商贸与外交选择。",
    "ancient-near-east-neo-assyrian-rise": "新亚述以常备军、行省和强制迁徙建立跨区域军事帝国。迁徙既服务于削弱反抗，也服务于调动劳力与手工业；不同省份的控制强度和社会后果并不相同。",
    "ancient-near-east-assyrian-deportations": "亚述将征服后的城市接入行省、贡赋和人口转移体系，以降低地方精英重新动员的能力。铭文多从王权胜利出发，需与地方遗址和后续人口分布区分阅读。",
    "ancient-near-east-fall-nineveh": "前612年尼尼微被新巴比伦与米底联军攻陷，亚述长期军政网络随之瓦解。帝国崩溃不是单次围城的结果，也与长期战争、王位危机和边疆压力有关。",
    "ancient-near-east-neo-babylonian": "新巴比伦在亚述崩解后控制两河和黎凡特，并以巴比伦城的重建展示王权与城市资源的重新集中。其秩序仍依赖对西部行省、灌溉农业和地区商路的持续维系。",
    "ancient-near-east-babylonian-exile": "犹大精英被迁往巴比伦，是新巴比伦征服政策的一部分。流亡经验在后来的文本传统中具有关键位置，但其人口规模、社会构成与地方生活不能只由宗教叙事推断。",
    "ancient-near-east-cyrus-babylon": "居鲁士于前539年进入巴比伦，使西亚主要政治中心纳入阿契美尼德帝国。居鲁士圆柱等材料呈现合法性语言，但帝国统治仍须通过既有神庙、城市精英和贡赋网络落实。"
  };
  window.ANCIENT_NEAR_EAST_EVENTS = events.map((event, index) => ({
    ...event, contentLevel: "mainline", contentPresentation: "tiered",
    mainlineNarrative: narratives[event.id] || event.summary,
    background: [], process: [], results: [], debates: [], reviewQuestions: [],
    previousEventIds: index ? [events[index - 1].id] : [], nextEventIds: index < events.length - 1 ? [events[index + 1].id] : []
  }));
})();
