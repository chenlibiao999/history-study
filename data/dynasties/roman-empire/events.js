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
  const details = {
    "roman-empire-augustus": ["前31-14年；奥古斯都时期","41.89N, 12.49E","罗马城与帝国元首制中枢","台伯河、地中海航线和行省税粮网络","屋大维在前31年亚克兴获胜后控制罗马世界|前27年获奥古斯都称号并以元首身份统治|他保留元老院和共和官职的形式|军团、行省与财政的关键控制权集中于元首|元首制成为此后数世纪帝国权力框架","元首制以共和名义集中军政资源，既降低内战风险，也使继承问题长期悬而未决。"],
    "roman-empire-julio-claudian": ["14-68年；朱里亚-克劳狄王朝","41.89N, 12.49E","罗马、莱茵河和东部行省","地中海、莱茵多瑙边界与粮食航线","14年奥古斯都去世，提比略继位|王朝依托军团宣誓、皇室财富和元老院协作统治|卡利古拉、克劳狄和尼禄时期皇权与精英关系反复紧张|64年罗马大火与尼禄政策加深政治危机|68年尼禄自杀，引发四帝之年内战","早期帝国已形成皇权继承实践，但未建立稳定法定继承程序。"],
    "roman-empire-flavian": ["69-96年；弗拉维王朝","41.89N, 12.49E","罗马与帝国西部行省","莱茵军团、地中海税粮和罗马城市空间","69年内战后维斯帕先获军队支持即位|弗拉维王朝重整财政并控制军团|耶路撒冷在70年被提图斯攻陷|斗兽场等工程展示皇权与城市公共资源|96年图密善被刺，王朝结束","弗拉维重建表明军队承认、财政与公共象征共同支撑皇权稳定。"],
    "roman-empire-trajan": ["98-117年；图拉真时期","41.89N, 12.49E","罗马、达契亚与美索不达米亚战区","多瑙河、黑海通道和幼发拉底河边境","98年图拉真即位|101至106年罗马征服达契亚并获得矿产资源|113至117年发动东方战争进入美索不达米亚|帝国疆域在其时期达到最大范围|图拉真死后多数东方新占领地难以维持","最大扩张提高声望与资源，却扩大边境、驻军和补给成本。"],
    "roman-empire-hadrian": ["117-138年；哈德良时期","55.02N, -2.29E","罗马、不列颠与多瑙河边界","边墙、军营、道路与海上行省交通","117年哈德良继位后放弃部分东方新占领地|他巡行多处行省并强化边境军营|122年开始修建哈德良长城|边界治理强调驻军、道路和行政整合|守成政策使扩张转向可防御的稳定边界","帝国安全更多依赖长期边境治理而非继续征服。"],
    "roman-empire-antonine-plague": ["165年后；安敦尼王朝后期","41.89N, 12.49E","罗马、意大利与边疆行省","地中海港口、军团道路和多瑙河边境","约165年疫病在罗马军队和城市中传播|马可·奥勒留时期同时面对多瑙河战争|人口损失影响税收、征兵和地方生产|古代来源难以精确计算死亡规模|疫病与边防压力共同削弱二世纪稳定","瘟疫不是帝国衰落的唯一原因，却放大了财政、兵源和边境压力。"],
    "roman-empire-third-century": ["235-284年；三世纪危机","41.89N, 12.49E","罗马、高卢、巴尔干与东方行省","莱茵多瑙边界、地中海与东西军路","235年亚历山大·塞维鲁被杀后军人皇帝频繁更替|哥特、法兰克和萨珊压力加重边防|260年瓦勒良被萨珊俘虏|高卢帝国与帕尔米拉一度脱离中央控制|奥勒良在270年代重建大部分统一","军队政治、外患与货币贬值互相强化，使帝国必须重构统治方式。"],
    "roman-empire-diocletian": ["284年后；戴克里先时期","43.77N, 11.25E","尼科米底亚、米兰等帝国行政中心","多瑙河、东方边境、税粮和驿传网络","284年戴克里先即位|他实行四帝共治以分担边疆和继承风险|行政区和军政层级扩大|税制以人口与土地评估支撑军队供给|305年戴克里先退位后共治制仍陷入继承竞争","改革提高统治与征税能力，但行政军事成本也更高。"],
    "roman-empire-constantine": ["306-337年；君士坦丁时期","41.01N, 28.98E","罗马、米尔维安桥与君士坦丁堡","博斯普鲁斯海峡、多瑙河和黑海通道","312年君士坦丁在米尔维安桥击败马克森提乌斯|313年米兰敕令确认基督教合法地位|324年他击败李锡尼统一帝国|330年君士坦丁堡成为新的皇帝驻地|基督教与东部新都改变晚期帝国权力重心","新都和宗教政策重组了帝国资源与合法性，并强化东部中心地位。"],
    "roman-empire-western-fall": ["476年；西罗马皇帝被废","45.44N, 12.33E","意大利拉文纳与西欧诸王国","阿尔卑斯山口、意大利道路和地中海西部航线","五世纪西部军队越来越依赖日耳曼将领和盟军|410年罗马被洗劫，455年再遭汪达尔劫掠|西部行省相继由地方军政集团和王国控制|476年奥多亚塞废黜罗慕路斯·奥古斯都|东罗马帝国仍延续，西欧转入后罗马王国并存格局","476年终结西部皇帝序列，不等于罗马制度、人口与文化在西欧突然消失。"]
  };
  const timeline = window.ROMAN_EMPIRE_EVENTS.map((item) => { const detail = details[item.id]; const facts = detail[4].split("|"); const claim = detail[5]; return { ...item, contentLevel: "core", contentPresentation: "tiered", timeAnchor: { time: item.time, regnal: detail[0], coordinate: detail[1], admin: detail[2], terrainTransport: detail[3] }, spatialAnchor: { coordinate: detail[1], admin: detail[2], terrainTransport: detail[3] }, factLayer: facts.map((text) => ({ text: `[事实层] ${text}`, sourceId: "roman-empire-britannica" })), learningCase: { label: item.title, claim, sections: [["事实链", facts.join(" ")]], evidence: { title: "材料锚点：古典作者、法令、钱币与考古", content: "应以塔西佗、卡西乌斯·狄奥、法令碑铭、钱币和考古材料交叉核验。" }, misconception: "[争议边界] 具体人数、动机与古代叙事修辞需与材料类型区分。" }, debates: [{ view: "[主流说]", content: claim }, { view: "[争议边界]", content: "具体人数、动机与古代叙事修辞需与材料类型区分。" }], causalChain: [{ kind: "cause", label: "[表层因]", title: "直接条件", description: facts[0] }, { kind: "cause", label: "[深层因]", title: "资源与制度", description: facts[1] }, { kind: "cause", label: "[结构因]", title: "帝国结构", description: claim }, { kind: "impact", label: "[传导机制]", title: "后续关联", description: facts[4] }], process: facts.map((description, index) => ({ time: item.time, title: `事实 ${index + 1}`, description: `${description} 该事实的时间、地点、参与群体和结果应以文献、碑铭、钱币与考古材料交叉核验。` })) }; });
  window.ROMAN_EMPIRE_EVENTS = timeline.map((item, index) => ({ ...item, previousEventIds: index ? [timeline[index - 1].id] : [], nextEventIds: index < timeline.length - 1 ? [timeline[index + 1].id] : [] }));
})();
