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

(() => {
  const details = {
    "ancient-near-east-neolithic-near-east": {
      regnal:"约前10000-前7000；新月沃地新石器化", coordinate:"33.3N, 44.4E", admin:"两河上游、黎凡特与安纳托利亚山前，今伊拉克、叙利亚、约旦、土耳其一带", terrain:"幼发拉底河—底格里斯河上游、约旦河谷与山前雨养农业带",
      background:"[事实层] 全新世早期气候与野生谷物资源为多地定居试验提供条件；不同聚落的驯化与定居节奏并不相同。",
      facts:["[事实层] 约前10千纪，黎凡特和两河上游出现长期定居聚落与谷物利用。","[事实层] 小麦、大麦、豆类及山羊、绵羊的驯化在多个区域逐步发生。","[事实层] 耶利哥等遗址可见建筑、储藏与公共空间的长期积累。","[事实层] 可储存粮食提高了人口定居、劳动分工和风险管理的可能。","[事实层] 新石器聚落并非已经形成城市国家，文字、税收和国家机构仍属后来的发展。"],
      result:["即时：定居、储存与驯化在若干生态带稳定下来。","中期：人口增长和交换网络为更复杂的聚落组织提供条件。","后续关联：剩余、管理与区域交换成为两河城市化的前置条件，但不构成必然因果。"],
      claim:"[解释层] 可储存的农业剩余经由定居人口与劳动组织，才可能转化为后来的城市管理；农业本身不自动产生国家。", debate:"[主流说] 驯化与定居是多中心、渐进过程；[挑战说] 具体起源地、迁徙路线与各物种驯化时间仍随考古和古DNA研究调整。"
    },
    "ancient-near-east-uruk-expansion": {
      regnal:"约前4000-前3100；乌鲁克时期", coordinate:"31.3N, 45.6E", admin:"南两河乌鲁克及周边，今伊拉克南部", terrain:"幼发拉底河下游冲积平原、灌溉渠网与通向波斯湾的水路",
      background:"[事实层] 南两河灌溉农业和聚落集中，为神庙、手工业与物资管理形成更大规模的组织空间。",
      facts:["[事实层] 乌鲁克在前4千纪后期发展为南两河最大的聚落之一。","[事实层] 神庙建筑、标准化容器和印章反映劳动与物资的集中管理。","[事实层] 早期泥板记录与计数符号首先服务于物资、劳力和储存的核算。","[事实层] 乌鲁克风格物质文化见于两河以外若干地点，显示交换、移民或组织联系。","[事实层] 这种联系的性质因地点不同而异，不能一概视作乌鲁克的殖民帝国。"],
      result:["即时：城市中心把生产、仪式与管理集中在更大的空间内。","中期：文字和印章技术进入行政记录体系。","后续关联：城邦竞争与王权组织在两河进一步发展。"],
      claim:"[解释层] 灌溉剩余经神庙与仓储管理转化为对劳力和物资的持续调度，解释了文字为何先嵌入行政实践。", debate:"[主流说] 乌鲁克具有广泛区域影响；[挑战说] 外部据点究竟是殖民、贸易站还是地方选择性借用，须按遗址分别判断。"
    },
    "ancient-near-east-akkadian-empire": {
      regnal:"约前2334-前2154；阿卡德王朝", coordinate:"33.3N, 44.4E", admin:"阿卡德中心及南北两河城市，今伊拉克中部", terrain:"底格里斯—幼发拉底河航道、两河冲积平原与通往叙利亚的陆路",
      background:"[事实层] 早王朝城邦竞争已形成军队、贡纳与城市精英网络，为更大尺度的征服和驻军提供组织条件。",
      facts:["[事实层] 萨尔贡在前24世纪后期建立跨越南北两河的王权。","[事实层] 王室铭文记载对城邦、叙利亚方向和贸易通道的军事行动。","[事实层] 帝国依赖驻军、地方总督和既有城市精英维系征服后的秩序。","[事实层] 阿卡德语行政与王权语言在多地传播，但未取代所有地方传统。","[事实层] 前22世纪帝国瓦解与内乱、边疆压力及环境问题的关系仍需区分材料。"],
      result:["即时：多个城邦被置入更大的军事与贡纳框架。","中期：总督、驻军与王室意识形态成为后世帝国可借鉴的组织方式。","后续关联：乌尔第三王朝以更密集的行政记录重建南两河秩序。"],
      claim:"[解释层] 征服通过驻军、地方代理人与河道运输被转化为可持续征发；军事胜利本身不足以解释帝国维持。", debate:"[主流说] 阿卡德是早期跨区域帝国的重要案例；[挑战说] 帝国边界、直接控制强度及气候在崩解中的权重存在争论。"
    },
    "ancient-near-east-old-babylon-hammurabi": {
      regnal:"约前1792-前1750；古巴比伦汉谟拉比时期", coordinate:"32.5N, 44.4E", admin:"巴比伦及巴比伦尼亚，今伊拉克中南部", terrain:"幼发拉底河中下游灌溉区、两河水运与通向北方城邦的陆路",
      background:"[事实层] 乌尔第三王朝崩解后，阿摩利人王朝与旧城邦在灌溉区、商路和水利控制上长期竞争。",
      facts:["[事实层] 汉谟拉比在位期间通过联盟与战争扩张巴比伦的支配范围。","[事实层] 王室书信和年名反映水利、征兵、司法与地方官吏的日常治理。","[事实层] 《汉谟拉比法典》以碑刻形式公开王权维护秩序的理想。","[事实层] 法典条文涉及财产、债务、家庭和职业责任，但不能直接等同所有案件的实际判决。","[事实层] 汉谟拉比去世后，巴比伦对外围地区的控制迅速承受压力。"],
      result:["即时：巴比伦在两河政治中取得优势。","中期：法典和王权司法语言成为后世理解巴比伦秩序的重要材料。","后续关联：中央对水利、城市与地方官的依赖限制了统一控制的持续性。"],
      claim:"[解释层] 联盟和战争夺取城市后，水利、文书和地方官把权力转化为日常治理；法典更多呈现王权秩序宣示。", debate:"[主流说] 法典是理解王权法律语言的关键文本；[挑战说] 它究竟在多大程度上直接适用于司法实践，仍不能脱离书信和契约材料判断。"
    },
    "ancient-near-east-kadesh": {
      regnal:"前1274-前1259；埃及拉美西斯二世与赫梯穆瓦塔里二世时期", coordinate:"34.6N, 36.5E", admin:"卡迭石，今叙利亚霍姆斯省奥龙特河畔", terrain:"奥龙特河谷、北叙利亚通道与埃及—安纳托利亚军队补给线",
      background:"[事实层] 埃及与赫梯争夺北叙利亚附庸和河谷通道，双方均依靠战车、附庸王与长距离补给。",
      facts:["[事实层] 前1274年埃及与赫梯军队在卡迭石附近交战。","[事实层] 埃及王室铭文强调拉美西斯二世的个人战功。","[事实层] 赫梯材料显示其在叙利亚仍保持重要政治影响。","[事实层] 前1259年前后双方缔结已知最早的国际和约之一。","[事实层] 条约规定互不侵犯、援助和王室关系，反映长期均势而非一方彻底胜利。"],
      result:["即时：双方未能以单次会战决定叙利亚归属。","中期：和约使边境和附庸关系获得制度化安排。","后续关联：青铜时代大国秩序依赖外交、婚姻、使节与贸易网络共同维系。"],
      claim:"[解释层] 战场僵持经由条约、边境承认和王室联结转化为稳定均势，说明外交并非战争的附属结果。", debate:"[主流说] 铭文与条约共同显示双方形成均势；[挑战说] 双方王室叙事都夸大胜利，具体战术过程不能只采用单方材料。"
    },
    "ancient-near-east-neo-assyrian-rise": {
      regnal:"前10-前7世纪；新亚述帝国", coordinate:"36.4N, 43.1E", admin:"亚述、尼尼微与行省网络，今伊拉克北部", terrain:"底格里斯河上游、扎格罗斯山前与通往黎凡特的商贸军路",
      background:"[事实层] 亚述核心区拥有城市、农业腹地和军事传统；周边城邦与山地、黎凡特通道的竞争推动持续扩军。",
      facts:["[事实层] 新亚述诸王建立常备军并广泛使用攻城、骑兵和后勤体系。","[事实层] 征服地区被改置为行省或附庸，需缴纳贡赋与提供兵员。","[事实层] 人口迁徙被用于削弱反抗中心并调动劳力、手工业者。","[事实层] 王室铭文记录征服规模，但多服务于统治者的胜利叙事。","[事实层] 帝国后期的内战、长期战争和边疆压力削弱了中心对行省的调度。"],
      result:["即时：亚述形成覆盖两河、黎凡特与部分埃及的军事帝国。","中期：行省、道路和人口调动重组了若干地区的城市与精英网络。","后续关联：高度军事化的资源征发也提高了继承危机与边疆失守的系统风险。"],
      claim:"[解释层] 军事征服经由行省、贡赋和人口调动成为帝国能力；同一链条也使中心对不断征发和信息传递高度依赖。", debate:"[主流说] 行省与迁徙是亚述统治的重要工具；[挑战说] 实际迁徙规模和地方社会后果须以地方遗址、文书和铭文交叉估计。"
    },
    "ancient-near-east-cyrus-babylon": {
      regnal:"前539；阿契美尼德居鲁士二世入巴比伦", coordinate:"32.5N, 44.4E", admin:"巴比伦，今伊拉克巴比伦省", terrain:"幼发拉底河水系、两河灌溉核心与通往伊朗高原、黎凡特的道路",
      background:"[事实层] 新巴比伦王国依赖两河城市、神庙与西部行省；波斯在伊朗高原整合后取得对米底和小亚细亚的优势。",
      facts:["[事实层] 前539年居鲁士军队进入巴比伦，新巴比伦王朝结束。","[事实层] 居鲁士圆柱以恢复秩序和尊重城市神祇的语言呈现新统治。","[事实层] 波斯保留并利用巴比伦的神庙、行政和精英网络。","[事实层] 巴比伦并未失去经济文化重要性，而被纳入更大帝国的区域体系。","[事实层] 圆柱文本是王权合法性材料，不能直接推出普遍宽容或现代权利观念。"],
      result:["即时：两河政治中心转入阿契美尼德统治。","中期：既有城市和文书网络成为跨区域帝国治理的基础。","后续关联：西亚各地被纳入更广的道路、贡赋和行政协调体系。"],
      claim:"[解释层] 征服通过承接神庙、城市精英和文书制度降低治理转换成本；合法性语言与地方统治实践必须分开检验。", debate:"[主流说] 居鲁士采取了利用既有制度的统治策略；[挑战说] “宽容政策”的范围与动机不能仅据居鲁士圆柱作普遍化推论。"
    }
  };
  const sourceId = "ancient-near-east-britannica";
  window.ANCIENT_NEAR_EAST_EVENTS = window.ANCIENT_NEAR_EAST_EVENTS.map((event) => {
    const detail = details[event.id];
    if (!detail) return event;
    return { ...event, contentLevel:"core", contentPresentation:"tiered", timeAnchor:{time:event.time,regnal:detail.regnal,coordinate:detail.coordinate,admin:detail.admin,terrainTransport:detail.terrain}, spatialAnchor:{coordinate:detail.coordinate,admin:detail.admin,terrainTransport:detail.terrain}, background:[detail.background], factLayer:detail.facts.map((text)=>({text,sourceId})), process:detail.facts.map((description,index)=>({time:event.time,title:`事实节点 ${index + 1}`,description:`${description} 这一事实应结合王室铭文、行政文书、考古材料及${detail.terrain}的空间条件交叉核验。`})), results:detail.result, debates:[{view:"[主流说]",content:detail.claim},{view:"[挑战说]",content:detail.debate}], claims:[{statement:detail.facts[0],status:"较稳定",statusType:"stable",confidence:"medium",sourceIds:[sourceId],note:"[事实层] 由本卡引用材料支持。"},{statement:detail.claim,status:"需结合材料",statusType:"conditional",confidence:"medium",sourceIds:[sourceId],note:"[解释层] 仅按本卡材料范围说明机制。"}], causalChain:[{kind:"cause",label:"[表层因]",title:"直接条件",description:detail.facts[0]},{kind:"cause",label:"[深层因]",title:"资源与制度",description:detail.facts[1]},{kind:"cause",label:"[结构因]",title:"区域结构",description:detail.claim},{kind:"impact",label:"[传导机制]",title:"后续关联",description:detail.result[2]}], learningCase:{label:`[解释层] ${event.title}`,claim:detail.claim,sections:[["争议边界",detail.debate]],evidence:{title:"材料锚点：王室铭文、行政文书与考古",content:"本卡以本模块来源中的文本、物质遗存和现代研究交叉限定事实与解释范围。"},misconception:"不得把王权叙事、考古分布或现代国界直接互相替代。"} };
  });
})();
