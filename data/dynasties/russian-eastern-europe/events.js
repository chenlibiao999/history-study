(() => {
  const dynastyId = "russian-eastern-europe";
  const dynasty = "俄罗斯与东欧";
  const sources = window.RUSSIAN_EASTERN_EUROPE_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: `${name}需要放在“${title}”的东欧、草原、帝国或革命背景中理解。`, events: [title] }));
  const process = (title, summary, result, time) => [{ time, title: "背景积累", description: `${title}发生前，东欧森林、草原通道、东正教、贸易城市和帝国边疆已经长期互动。` }, { time, title: "事件展开", description: `${summary} 学习时要把罗斯、莫斯科、帝国和苏联作为不同政治形态区分。` }, { time, title: "影响延伸", description: `${result} 它继续影响欧洲、内亚和现代国际秩序。` }];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["东欧", "俄罗斯"]) => ({ id, title, aliases: [], era, period: dynasty, time, regions, topics, summary, bookmarked: false, people: people(names, title), relations: [], background: [`${title}要放在东欧、草原和欧亚帝国边疆的长期主线中理解。`], process: process(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "俄罗斯史常跨欧洲和亚洲，不能只按现代欧洲边界理解。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["russian-eastern-europe-britannica-russia"], note: "首版为主线学习版，后续补原始文献和专业研究。" }], citations: [{ sourceId: "russian-eastern-europe-britannica-russia", reference: "俄罗斯史公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "疆域和人口另按估算口径处理。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics });
  const rows = [
    ["russian-eastern-europe-kievan-rus", "基辅罗斯形成", "基辅罗斯", "约862-988", "东斯拉夫、瓦良格贸易和第聂伯河路线推动基辅罗斯形成。", "基辅罗斯成为东斯拉夫政治和文化记忆的重要源头。", ["留里克王公", "基辅罗斯社群"], ["基辅罗斯", "东斯拉夫"]],
    ["russian-eastern-europe-christianization", "弗拉基米尔受洗", "基辅罗斯", "988", "弗拉基米尔接受拜占庭基督教，推动罗斯东正教化。", "东正教和拜占庭文化深刻影响俄罗斯与东欧政治身份。", ["弗拉基米尔一世"], ["东正教", "拜占庭"]],
    ["russian-eastern-europe-mongol-conquest", "蒙古征服罗斯", "蒙古统治与莫斯科兴起", "1237-1240", "蒙古军队攻破罗斯诸城，罗斯进入金帐汗国宗主权体系。", "蒙古统治改变税收、军事和王公竞争格局。", ["拔都", "罗斯诸公"], ["蒙古", "金帐汗国"]],
    ["russian-eastern-europe-kulikovo", "库利科沃与莫斯科兴起", "蒙古统治与莫斯科兴起", "1380", "莫斯科大公德米特里在库利科沃击败马麦军队。", "该战被后世视为莫斯科凝聚罗斯反汗权记忆的重要节点。", ["德米特里顿斯科伊", "马麦"], ["莫斯科", "金帐"]],
    ["russian-eastern-europe-ivan-iii", "伊凡三世摆脱汗权", "蒙古统治与莫斯科兴起", "1480", "乌格拉河对峙后，莫斯科基本摆脱金帐汗国宗主权。", "莫斯科国家开始以罗斯继承者和东正教中心自居。", ["伊凡三世"], ["莫斯科", "汗权"]],
    ["russian-eastern-europe-ivan-iv", "伊凡四世与沙皇称号", "沙皇国家", "1547以后", "伊凡四世称沙皇并推进集权，同时以特辖制制造贵族恐怖。", "沙皇权威和国家暴力成为莫斯科国家的重要特征。", ["伊凡四世"], ["沙皇", "集权"]],
    ["russian-eastern-europe-siberia", "西伯利亚扩张", "沙皇国家", "16-17世纪", "哥萨克、商人和国家力量越过乌拉尔进入西伯利亚。", "俄罗斯从东欧国家扩展为横跨欧亚的帝国。", ["叶尔马克", "哥萨克"], ["西伯利亚", "扩张"]],
    ["russian-eastern-europe-romanov", "罗曼诺夫王朝建立", "沙皇国家", "1613", "混乱时期后米哈伊尔罗曼诺夫即位，王朝稳定重建。", "罗曼诺夫王朝为俄罗斯帝国时代提供政治连续性。", ["米哈伊尔罗曼诺夫"], ["罗曼诺夫", "混乱时期"]],
    ["russian-eastern-europe-peter", "彼得大帝改革", "帝国改革与扩张", "1682-1725", "彼得改革军队、行政、海军和首都，使俄罗斯进入欧洲列强体系。", "俄罗斯帝国化与西化改革并行，但也加重国家控制。", ["彼得一世"], ["改革", "圣彼得堡"]],
    ["russian-eastern-europe-catherine", "大叶卡捷琳娜与帝国扩张", "帝国改革与扩张", "1762-1796", "俄罗斯向黑海、波兰和草原扩张，并参与瓜分波兰。", "俄罗斯成为东欧和黑海秩序的决定性强权。", ["叶卡捷琳娜二世"], ["扩张", "波兰"]],
    ["russian-eastern-europe-crimea-reforms", "克里米亚战争与改革", "帝国改革与扩张", "1853-1861", "克里米亚战争失败暴露俄国制度弱点，亚历山大二世随后废除农奴制。", "改革试图现代化帝国，却没有解决社会和政治矛盾。", ["亚历山大二世"], ["克里米亚战争", "农奴制"]],
    ["russian-eastern-europe-1905", "1905年革命", "帝国改革与扩张", "1905", "日俄战争失败和社会危机引发革命，沙皇被迫设立杜马。", "1905年暴露帝国危机，也预示1917年革命。", ["尼古拉二世", "革命者"], ["革命", "杜马"]],
    ["russian-eastern-europe-1917", "1917年革命", "革命与苏联", "1917", "二月革命推翻沙皇，十月革命使布尔什维克夺权。", "俄罗斯进入社会主义革命和内战时代，改变20世纪世界政治。", ["列宁", "布尔什维克"], ["1917", "革命"]],
    ["russian-eastern-europe-soviet-stalin", "苏联成立与斯大林工业化", "革命与苏联", "1922-1930年代", "苏联成立后，斯大林推行工业化、集体化和高度集权体制。", "苏联快速工业化伴随巨大社会代价，并塑造计划经济国家。", ["斯大林", "苏联共产党"], ["苏联", "工业化"]],
    ["russian-eastern-europe-great-patriotic-war", "卫国战争", "革命与苏联", "1941-1945", "纳粹德国入侵苏联，东线战争成为二战最惨烈战场之一。", "苏联胜利奠定其战后超级大国地位，也重塑东欧秩序。", ["斯大林", "苏联人民"], ["二战", "东线"]],
    ["russian-eastern-europe-collapse", "冷战与苏联解体", "冷战与解体", "1947-1991", "苏联与美国长期冷战，改革、经济停滞、民族问题和政治危机最终导致1991年解体。", "苏联解体结束冷战两极格局，也重塑欧亚国家版图。", ["戈尔巴乔夫", "苏联加盟共和国"], ["冷战", "苏联解体"]]
  ];
  window.RUSSIAN_EASTERN_EUROPE_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));
})();
