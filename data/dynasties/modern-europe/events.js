(() => {
  const dynastyId = "modern-europe";
  const dynasty = "近现代欧洲";
  const sources = window.MODERN_EUROPE_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({ name, role: "关键人物/群体", years: "", color: "var(--accent-gold)", bio: `${name}需要放在“${title}”的知识、宗教、国家、工业、战争或一体化背景中理解。`, events: [title] }));
  const process = (title, summary, result, time) => [{ time, title: "背景积累", description: `${title}发生前，城市、王权、教会、商业、科学、财政和军事竞争已经长期积累。` }, { time, title: "事件展开", description: `${summary} 学习时要把思想变化、国家能力和全球扩张联系起来看。` }, { time, title: "影响延伸", description: `${result} 它继续影响欧洲内部秩序和全球现代化进程。` }];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["欧洲"]) => ({ id, title, aliases: [], era, period: dynasty, time, regions, topics, summary, bookmarked: false, people: people(names, title), relations: [], background: [`${title}要放在欧洲从中世纪后期到现代国家体系形成的长时段主线中理解。`], process: process(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "近现代欧洲事件经常具有全球影响，但不能把欧洲经验当作唯一现代化路径。" }], claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["modern-europe-britannica"], note: "首版为主线学习版，后续补专题研究和更细国别材料。" }], citations: [{ sourceId: "modern-europe-britannica", reference: "欧洲史公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "复杂因果先用学习版概括。" }], causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics });
  const rows = [
    ["modern-europe-renaissance", "意大利文艺复兴", "文艺复兴与宗教改革", "14-16世纪", "意大利城市、商业财富和古典复兴推动人文主义、艺术和政治思想变化。", "文艺复兴改变欧洲知识和审美结构，也强化城市与宫廷赞助。", ["人文主义者", "意大利城邦"], ["文艺复兴", "人文主义"], ["意大利"]],
    ["modern-europe-printing", "印刷术与知识传播", "文艺复兴与宗教改革", "15世纪中期以后", "活字印刷在欧洲扩散，书籍、宗教文本和新知识传播速度提高。", "印刷术推动宗教改革、科学交流和公共舆论形成。", ["古腾堡", "出版商"], ["印刷术", "知识传播"]],
    ["modern-europe-reformation", "宗教改革", "文艺复兴与宗教改革", "1517以后", "路德等批判教会权威，新教运动在德意志、瑞士、英格兰等地扩散。", "宗教改革重塑欧洲宗教版图，并与王权、城市和战争结合。", ["路德", "加尔文"], ["宗教改革", "新教"]],
    ["modern-europe-expansion", "大航海与欧洲全球扩张", "近代国家与全球扩张", "15-17世纪", "葡萄牙、西班牙、荷兰、英国、法国等开辟海路、殖民地和全球贸易网络。", "欧洲扩张把美洲、非洲、亚洲和大西洋世界纳入新秩序。", ["葡萄牙航海者", "西班牙王室"], ["大航海", "殖民"]],
    ["modern-europe-westphalia", "三十年战争与威斯特伐利亚", "近代国家与全球扩张", "1618-1648", "宗教、王朝和国家利益交织成三十年战争，和约重组中欧政治。", "威斯特伐利亚成为理解近代欧洲国家体系的重要节点。", ["哈布斯堡", "新教诸侯"], ["三十年战争", "国家体系"]],
    ["modern-europe-science-enlightenment", "科学革命与启蒙", "科学革命与启蒙", "17-18世纪", "科学方法、自然哲学和启蒙思想挑战传统权威，讨论理性、权利和制度改革。", "启蒙和科学革命为现代政治、教育和知识制度提供思想资源。", ["牛顿", "伏尔泰", "卢梭"], ["科学革命", "启蒙"]],
    ["modern-europe-french-revolution", "法国革命", "革命与民族主义", "1789以后", "财政危机、等级矛盾和启蒙政治语言引爆革命，君主制被推翻。", "法国革命塑造公民、民族、宪政和革命战争的现代政治语言。", ["法国革命者", "路易十六"], ["法国革命", "公民"], ["法国"]],
    ["modern-europe-napoleon", "拿破仑战争", "革命与民族主义", "1799-1815", "拿破仑建立帝国并席卷欧洲，同时传播法典和民族主义反应。", "拿破仑战争摧毁旧秩序并推动维也纳体系建立。", ["拿破仑", "欧洲联军"], ["拿破仑", "维也纳体系"]],
    ["modern-europe-industrial-revolution", "工业革命", "工业化与帝国主义", "18世纪后期以后", "英国率先以煤、蒸汽、工厂和资本市场推动生产方式转型。", "工业革命改变人口、城市、阶级、军事和全球贸易力量。", ["英国工厂主", "工人阶级"], ["工业革命", "城市化"], ["英国", "欧洲"]],
    ["modern-europe-1848", "1848年革命", "革命与民族主义", "1848", "欧洲多地爆发自由主义、民族主义和社会改革运动。", "1848虽多被镇压，但推动民族国家和宪政议题长期化。", ["自由派", "民族主义者"], ["1848", "民族主义"]],
    ["modern-europe-unifications", "德意志和意大利统一", "工业化与帝国主义", "1861-1871", "意大利和德意志在战争、外交和民族主义中完成统一。", "欧洲力量平衡改变，德国崛起成为19世纪末核心变量。", ["俾斯麦", "加里波第"], ["统一", "民族国家"], ["德国", "意大利"]],
    ["modern-europe-imperialism", "帝国主义与瓜分世界", "工业化与帝国主义", "19世纪后期", "工业列强争夺殖民地、资源和市场，非洲与亚洲承受强烈压力。", "帝国主义把欧洲竞争全球化，也加剧殖民地社会危机。", ["欧洲列强", "殖民地社会"], ["帝国主义", "殖民"]],
    ["modern-europe-wwi", "第一次世界大战", "世界大战", "1914-1918", "同盟体系、民族主义、帝国竞争和巴尔干危机引发欧洲大战。", "一战摧毁多帝国秩序，催生革命、民族国家和凡尔赛体系。", ["协约国", "同盟国"], ["一战", "凡尔赛"]],
    ["modern-europe-wwii", "第二次世界大战", "世界大战", "1939-1945", "纳粹德国扩张引发欧洲战争，并与全球战场合流。", "二战导致欧洲列强衰落、冷战形成和国际制度重建。", ["纳粹德国", "盟军"], ["二战", "纳粹"]],
    ["modern-europe-cold-war", "冷战欧洲", "冷战与一体化", "1947-1989", "欧洲被北约和华约、资本主义和社会主义阵营分割。", "冷战使欧洲安全依赖超级大国，也推动西欧合作。", ["北约", "华约"], ["冷战", "柏林"]],
    ["modern-europe-eu", "欧洲联盟形成", "冷战与一体化", "1951-1993", "煤钢共同体、欧共体和马斯特里赫特条约推动欧洲一体化。", "欧洲一体化试图以制度合作约束战争风险和经济竞争。", ["欧洲共同体", "欧盟成员国"], ["欧盟", "一体化"]]
  ];
  window.MODERN_EUROPE_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));
})();
