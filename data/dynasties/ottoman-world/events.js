(() => {
  const dynastyId = "ottoman-world";
  const dynasty = "奥斯曼世界";
  const sources = window.OTTOMAN_WORLD_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: `${name}需要放在“${title}”的边疆、军政、宗教、改革或民族主义背景中理解。`, events: [title] }));
  const process = (title, summary, result, time) => [{ time, title: "背景积累", description: `${title}发生前，安纳托利亚边疆、拜占庭衰退、伊斯兰政治和巴尔干格局已长期变化。` }, { time, title: "事件展开", description: `${summary} 学习时要区分征服、行省治理、宗教共同体和近代改革。` }, { time, title: "影响延伸", description: `${result} 它继续影响欧洲、西亚、北非和现代民族国家边界。` }];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["安纳托利亚", "巴尔干", "西亚"]) => ({ id, title, aliases: [], era, period: dynasty, time, regions, topics, summary, bookmarked: false, people: people(names, title), relations: [], background: [`${title}要放在奥斯曼连接欧亚非交界的长期主线中理解。`], process: process(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "奥斯曼既是伊斯兰帝国，也是巴尔干和地中海帝国，不能只按单一区域理解。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["ottoman-world-britannica"], note: "首版为主线学习版，后续补档案和专题研究。" }], citations: [{ sourceId: "ottoman-world-britannica", reference: "奥斯曼公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "疆域、民族和宗教问题保留分层口径。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics });
  const rows = [
    ["ottoman-world-frontier-rise", "奥斯曼边疆兴起", "边疆兴起", "约1299-1326", "奥斯曼贝伊国在拜占庭和安纳托利亚突厥诸势力边缘兴起。", "边疆军事、宗教声望和地方联盟共同推动奥斯曼扩张。", ["奥斯曼一世"], ["奥斯曼", "边疆"]],
    ["ottoman-world-bursa", "布尔萨成为早期中心", "边疆兴起", "1326", "奥斯曼攻取布尔萨，获得城市和财政基础。", "布尔萨帮助奥斯曼从边疆军事集团转向稳定政权。", ["奥尔汗"], ["布尔萨", "城市"]],
    ["ottoman-world-balkans-kosovo", "巴尔干扩张与科索沃", "征服与帝国化", "14世纪", "奥斯曼进入巴尔干，并在科索沃等战役后巩固影响。", "巴尔干成为奥斯曼帝国长期核心区之一。", ["穆拉德一世", "巴尔干贵族"], ["巴尔干", "科索沃"]],
    ["ottoman-world-constantinople", "征服君士坦丁堡", "征服与帝国化", "1453", "穆罕默德二世攻陷君士坦丁堡，并将其建设为伊斯坦布尔。", "奥斯曼继承东地中海帝国中心，拜占庭政治终结。", ["穆罕默德二世"], ["君士坦丁堡", "拜占庭"]],
    ["ottoman-world-selim-egypt", "塞利姆一世征服埃及与叙利亚", "征服与帝国化", "1516-1517", "奥斯曼击败马穆鲁克，控制叙利亚、埃及和两圣地。", "奥斯曼成为阿拉伯地区和伊斯兰圣地保护者。", ["塞利姆一世", "马穆鲁克"], ["埃及", "叙利亚"]],
    ["ottoman-world-suleiman", "苏莱曼与帝国高峰", "高峰与制度化", "1520-1566", "苏莱曼时期帝国扩张、法制整理和宫廷文化达到高峰。", "奥斯曼成为16世纪欧亚非交界的核心强权。", ["苏莱曼一世"], ["苏莱曼", "法制"]],
    ["ottoman-world-vienna-1529", "维也纳围城与欧洲边界", "地中海和巴尔干秩序", "1529", "奥斯曼围攻维也纳未果，哈布斯堡-奥斯曼边界长期化。", "中欧边界成为奥斯曼与欧洲强权竞争主轴。", ["苏莱曼一世", "哈布斯堡"], ["维也纳", "哈布斯堡"]],
    ["ottoman-world-lepanto", "勒班陀与地中海竞争", "地中海和巴尔干秩序", "1571", "神圣同盟在勒班陀击败奥斯曼舰队，但东地中海竞争仍持续。", "海战显示地中海力量平衡变化，却未终结奥斯曼海上影响。", ["奥斯曼舰队", "神圣同盟"], ["勒班陀", "地中海"]],
    ["ottoman-world-vienna-1683", "第二次维也纳围城失败", "危机与改革", "1683", "奥斯曼围攻维也纳失败，随后在欧洲连续失地。", "帝国军事优势下降，改革压力逐步上升。", ["卡拉穆斯塔法帕夏", "欧洲联军"], ["维也纳", "衰退"]],
    ["ottoman-world-tanzimat", "坦志麦特改革", "危机与改革", "1839-1876", "奥斯曼推行行政、法律、军队和臣民身份改革。", "改革试图在帝国多民族结构和欧洲压力下重建国家能力。", ["奥斯曼改革派"], ["坦志麦特", "改革"]],
    ["ottoman-world-young-turks", "青年土耳其革命", "民族主义与解体", "1908", "青年土耳其党人恢复宪政，试图挽救帝国。", "宪政与民族主义并行，帝国解体趋势并未逆转。", ["青年土耳其党人"], ["宪政", "民族主义"]],
    ["ottoman-world-wwi", "第一次世界大战中的奥斯曼", "民族主义与解体", "1914-1918", "奥斯曼加入同盟国阵营，战场遍及高加索、阿拉伯地区和达达尼尔。", "战争加速帝国财政、军事和民族关系崩溃。", ["奥斯曼政府", "协约国"], ["一战", "中东"]],
    ["ottoman-world-end", "土耳其独立战争与帝国终结", "民族主义与解体", "1919-1922", "穆斯塔法凯末尔领导独立战争，苏丹制被废除。", "奥斯曼帝国终结，现代土耳其共和国和中东托管体系成形。", ["凯末尔", "奥斯曼苏丹"], ["土耳其", "帝国终结"]]
  ];
  window.OTTOMAN_WORLD_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));
})();
