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
  const details = {
    "byzantium-constantinople": ["330年；君士坦丁一世时期","41.01N, 28.98E","君士坦丁堡","博斯普鲁斯海峡、黑海与地中海航线","330年君士坦丁将拜占庭城定为新都|新都靠近巴尔干、多瑙河和东方边境|博斯普鲁斯控制黑海与爱琴海交通|皇帝与官僚资源逐渐向东地中海集中|君士坦丁堡成为东罗马长期政治中心","新都转移使帝国资源重心东移，并加强对海峡和东方行省的控制。"],
    "byzantium-justinian-code": ["529-534年；查士丁尼一世时期","41.01N, 28.98E","君士坦丁堡法学与行政中枢","东地中海驿传、法院与行省行政网络","529年开始编订法学汇纂|534年《民法大全》主要部分完成|编纂吸收罗马皇帝敕令和法学家意见|法典服务东罗马行政和司法统一|其文本后在中世纪和近代欧洲法学中重新传播","法典整理保留了罗马法传统，但不等于古典法在各地实际执行完全相同。"],
    "byzantium-justinian-reconquest": ["533-565年；查士丁尼一世时期","36.75N, 3.06E","北非、意大利与君士坦丁堡","地中海航路、亚得里亚海与意大利道路","533年贝利撒留进攻汪达尔王国|北非重新纳入东罗马控制|535年开始哥特战争争夺意大利|长期战争破坏意大利城市和税源|收复区军费与防御成本难以持续承担","再征服短期恢复地中海帝国形象，却以财政、兵力和地方破坏为代价。"],
    "byzantium-arab-losses": ["7世纪；希拉克略后期至倭马亚时期","31.77N, 35.21E","叙利亚、埃及与安纳托利亚","地中海东岸、尼罗河粮食区和小亚细亚军路","636年雅尔穆克战役后东罗马失去叙利亚|639年后阿拉伯军进入埃及|642年前后亚历山大里亚失守|两地原为税粮和城市资源核心|帝国重心退守安纳托利亚与巴尔干","失去富庶行省迫使帝国由地中海型大帝国转为以安纳托利亚防御为核心的国家。"],
    "byzantium-themes": ["7-8世纪；东罗马防御国家形成","39.00N, 35.00E","安纳托利亚诸军区","小亚细亚高原、山口和军粮道路","阿拉伯扩张后常备野战军向安纳托利亚驻扎|军区长官兼具军事和行政职责|兵员与土地、税收和地方供给联系加强|军区有助于快速应对边境袭击|制度并非一次完成且各地差异明显","军区制把军事防御与地方资源结合，是收缩期维持帝国的重要机制。"],
    "byzantium-iconoclasm": ["726-843年；伊苏里亚至阿摩里王朝","41.01N, 28.98E","君士坦丁堡与帝国教区","海峡首都、修道院网络和巴尔干安纳托利亚教区","726年前后皇帝限制圣像崇敬|圣像政策引发教会、修道院与宫廷冲突|787年第二次尼西亚公会议恢复圣像崇敬|815年后圣像破坏再次出现|843年恢复圣像崇敬成为正教传统纪念日","圣像之争涉及神学、皇权、修道院财富与地方政治，不能化为单一宗教冲突。"],
    "byzantium-macedonian": ["867-1025年；马其顿王朝","41.01N, 28.98E","君士坦丁堡、巴尔干与叙利亚北部","多瑙河、安纳托利亚军路和地中海港口","867年巴西尔一世建立马其顿王朝|帝国在巴尔干和东方多次反攻|巴西尔二世在1018年征服保加利亚|首都文化、法学和抄本生产活跃|扩张依赖税收、军区和贵族军事资源","中期复兴恢复帝国影响力，但军事贵族和财政集中也带来后续张力。"],
    "byzantium-schism": ["1054年；东西教会关系恶化","41.01N, 28.98E","罗马与君士坦丁堡","亚得里亚海、巴尔干教区和地中海教会网络","罗马教廷与君士坦丁堡长期争论权威和礼仪|1054年教宗使节与牧首相互绝罚|当时裂痕并未立即切断所有往来|拉丁与希腊教会制度差异持续扩大|1204年十字军攻城进一步固化分裂","1054年是关系制度化断裂的象征，东西教会的分离是长期过程。"],
    "byzantium-manzikert": ["1071年；罗曼努斯四世时期","38.95N, 42.04E","曼齐刻尔特与安纳托利亚东部","幼发拉底上游、安纳托利亚高原和亚美尼亚山口","1071年罗曼努斯四世率军对塞尔柱作战|军中派系与盟军离散削弱指挥|拜占庭军在曼齐刻尔特失利且皇帝被俘|战后安纳托利亚内战持续|突厥部落趁机进入小亚细亚腹地","战役本身并非立即丧失全安纳托利亚，战后内战和地方失序使损失扩大。"],
    "byzantium-fourth-crusade": ["1204年；第四次十字军","41.01N, 28.98E","君士坦丁堡与爱琴海","博斯普鲁斯、金角湾和威尼斯海运路线","十字军因债务和威尼斯利益转向君士坦丁堡|1203年扶植阿莱克修斯四世引发城内危机|1204年十字军攻陷并劫掠城市|拉丁帝国与希腊继承政权并存|1261年虽收复城市但帝国资源已严重受损","1204年打碎了帝国财政、海军和领土整合，后期复兴难以恢复原有实力。"],
    "byzantium-fall-1453": ["1453年；君士坦丁十一世时期","41.01N, 28.98E","君士坦丁堡","博斯普鲁斯、金角湾和奥斯曼巴尔干军路","1453年穆罕默德二世围攻君士坦丁堡|奥斯曼军使用重炮与海陆封锁|5月29日城破，君士坦丁十一世战死|奥斯曼取得海峡与东地中海战略中心|东罗马皇帝政权终结","1453年终结东罗马皇帝政权，但罗马法、正教会和希腊文化传统继续存在。"]
  };
  const timeline = window.BYZANTIUM_EVENTS.map((item) => { const d=details[item.id], facts=d[4].split("|"), claim=d[5]; return {...item,contentLevel:"core",contentPresentation:"tiered",timeAnchor:{time:item.time,regnal:d[0],coordinate:d[1],admin:d[2],terrainTransport:d[3]},spatialAnchor:{coordinate:d[1],admin:d[2],terrainTransport:d[3]},factLayer:facts.map(text=>({text:`[事实层] ${text}`,sourceId:"byzantium-britannica"})),learningCase:{label:item.title,claim,sections:[["事实链",facts.join(" ")]],evidence:{title:"材料锚点：编年史、法令与考古",content:"须以普罗科匹厄斯、狄奥法内斯等文本、法令、钱币和考古材料交叉核验。"},misconception:"[争议边界] 叙事作者立场与具体数字、动机需同材料类型区分。"},debates:[{view:"[主流说]",content:claim},{view:"[争议边界]",content:"叙事作者立场与具体数字、动机需同材料类型区分。"}],causalChain:[{kind:"cause",label:"[表层因]",title:"直接条件",description:facts[0]},{kind:"cause",label:"[深层因]",title:"资源与制度",description:facts[1]},{kind:"cause",label:"[结构因]",title:"拜占庭结构",description:claim},{kind:"impact",label:"[传导机制]",title:"后续关联",description:facts[4]}],process:facts.map((description,index)=>({time:item.time,title:`事实 ${index+1}`,description:`${description} 该事实的时间、地点、参与群体和结果应以文本、法令、钱币与考古材料交叉核验。`}))}; });
  window.BYZANTIUM_EVENTS=timeline.map((item,index)=>({...item,previousEventIds:index?[timeline[index-1].id]:[],nextEventIds:index<timeline.length-1?[timeline[index+1].id]:[]}));
})();
