(() => {
  const dynastyId = "oceania-world";
  const dynasty = "大洋洲历史";
  const sources = window.OCEANIA_WORLD_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: `${name}需要放在“${title}”的海洋、土地、亲属、殖民或主权背景中理解。`, events: [title] }));
  const process = (title, summary, result, time) => [
    { time, title: "背景积累", description: `${title}发生前，岛屿生态、航海知识、亲属网络、土地制度或殖民力量已经长期积累。` },
    { time, title: "事件展开", description: `${summary} 学习时要把大陆原住民历史、岛屿航海文明和欧洲殖民冲击分层理解。` },
    { time, title: "影响延伸", description: `${result} 它继续影响太平洋主权、文化复兴、资源治理和区域安全。` }
  ];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["大洋洲"]) => ({ id, title, aliases: [], era, period: dynasty, time, regions, topics, summary, bookmarked: false, people: people(names, title), relations: [], background: [`${title}要放在大洋洲海洋世界、土地关系和殖民后国家形成的长期主线中理解。`], process: process(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "大洋洲许多历史依靠口述传统、考古和殖民档案互证，需要谨慎区分证据层次。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["oceania-world-britannica"], note: "首版为主线学习版，后续逐条补区域研究和本地资料。" }], citations: [{ sourceId: "oceania-world-britannica", reference: "大洋洲公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "人口和时间采用宽估算口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics });
  const rows = [
    ["oceania-world-australia-settlement", "澳大利亚早期定居", "澳大利亚原住民深时历史", "约前50000以后", "人群很早进入澳大利亚大陆，适应沙漠、海岸、森林和草原等环境。", "澳大利亚原住民历史是世界最深的连续文化传统之一。", ["澳大利亚原住民社群"], ["原住民", "迁徙"]],
    ["oceania-world-aboriginal-country", "原住民土地与仪式体系", "澳大利亚原住民深时历史", "约前50000以后（长期延续）", "澳大利亚原住民以土地、亲属、仪式、故事和生态知识组织社会。", "土地不是单纯资源，而是身份、法律、记忆和责任的核心。", ["原住民长老与社群"], ["土地", "仪式"]],
    ["oceania-world-lapita", "拉皮塔文化扩散", "拉皮塔与南岛扩散", "约前1500以后", "拉皮塔陶器和航海社群向太平洋岛屿扩散，连接南岛语人群和岛屿网络。", "拉皮塔是理解美拉尼西亚与波利尼西亚早期扩散的重要线索。", ["拉皮塔社群"], ["拉皮塔", "南岛"]],
    ["oceania-world-polynesian-voyaging", "波利尼西亚远航定居", "波利尼西亚航海", "约前1000-1200", "航海者利用星象、洋流、风向和口传知识跨越太平洋定居多岛。", "太平洋不是隔绝海洋，而是由航海知识连接的巨大世界。", ["波利尼西亚航海者"], ["航海", "波利尼西亚"]],
    ["oceania-world-tonga", "汤加海上势力", "岛屿社会与国家形成", "约10-15世纪", "汤加形成跨岛政治和礼仪影响网络，与萨摩亚、斐济等地互动。", "岛屿社会可以形成超越单岛的海上政治秩序。", ["汤加统治者"], ["汤加", "海上网络"]],
    ["oceania-world-maori", "毛利定居新西兰", "岛屿社会与国家形成", "约13世纪以后", "波利尼西亚人定居新西兰，形成毛利部族、土地和战争传统。", "新西兰历史在欧洲到来前已有成熟社会组织。", ["毛利社群"], ["毛利", "新西兰"], ["新西兰"]],
    ["oceania-world-hawaii", "夏威夷酋邦整合", "岛屿社会与国家形成", "18世纪末", "卡美哈梅哈一世统一夏威夷群岛，建立王国。", "夏威夷展示太平洋岛屿王权在火器、贸易和本地政治中重组。", ["卡美哈梅哈一世"], ["夏威夷", "王国"], ["夏威夷"]],
    ["oceania-world-cook", "库克航行与欧洲接触", "欧洲接触与殖民", "1768-1779", "库克航行把太平洋多地纳入欧洲科学、商业和帝国视野。", "接触带来地图测绘、贸易、疾病、传教和殖民压力。", ["库克", "太平洋岛民"], ["欧洲接触", "航海"]],
    ["oceania-world-australia-colony", "澳大利亚殖民与原住民土地丧失", "欧洲接触与殖民", "1788以后", "英国在悉尼建立殖民地，定居扩张导致原住民土地、人口和社会遭受巨大冲击。", "澳大利亚现代国家形成与原住民主权、土地权和殖民暴力问题紧密相连。", ["英国殖民者", "澳大利亚原住民"], ["澳大利亚", "殖民"], ["澳大利亚"]],
    ["oceania-world-waitangi", "新西兰怀唐伊条约", "欧洲接触与殖民", "1840", "英国王室代表与部分毛利首领签订怀唐伊条约，成为新西兰殖民和主权争议核心文件。", "条约文本差异和执行争议长期影响毛利权利与新西兰政治。", ["毛利首领", "英国王室代表"], ["怀唐伊条约", "主权"], ["新西兰"]],
    ["oceania-world-labor-trade", "太平洋劳工贸易", "欧洲接触与殖民", "19世纪", "殖民种植园和矿业需求推动太平洋岛民被招募或强迫迁移劳动。", "劳工贸易改变岛屿人口、家庭和殖民经济结构。", ["太平洋岛民劳工", "殖民雇主"], ["劳工贸易", "殖民经济"]],
    ["oceania-world-pacific-war", "太平洋战争改变区域格局", "太平洋战争", "1941-1945", "日本、美国、澳新和岛屿社会在太平洋战场中经历军事占领、基地建设和战争破坏。", "太平洋战争重塑区域安全结构，并推动战后美国影响和殖民体系松动。", ["太平洋岛民", "盟军", "日本军队"], ["太平洋战争", "二战"]],
    ["oceania-world-independence", "萨摩亚和巴布亚新几内亚独立", "独立与区域秩序", "1962-1975", "萨摩亚、巴布亚新几内亚等太平洋政治体逐步取得独立或自治。", "大洋洲进入主权国家、自治领地和区域合作并行的新阶段。", ["萨摩亚独立领导者", "巴布亚新几内亚独立领导者"], ["独立", "太平洋国家"]]
  ];
  window.OCEANIA_WORLD_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));
})();
