(() => {
  // keyEvents 别名回填：由 scripts/backfill-keyevent-aliases.js 生成，勿手工改动格式
  const eventAliases = {
    "islamic-world-mughal-akbar": ["莫卧儿帝国高峰"]
  };
  const dynastyId = "islamic-world";
  const dynasty = "伊斯兰世界";
  const sources = window.ISLAMIC_WORLD_SOURCES || [];
  const people = (names, title) => (names || []).map((name) => ({
    name,
    role: "关键人物/群体",
    years: "",
    color: "var(--accent-gold)",
    bio: `${name}需要放在“${title}”的宗教共同体、哈里发政治、城市商业、军事集团或跨区域学术网络中理解。`,
    events: [title]
  }));
  const buildProcess = (title, summary, result, time) => [
    { time, title: "背景积累", description: `${title}发生前，阿拉伯半岛、拜占庭-萨珊边疆、红海和印度洋贸易、部落联盟、城市商贸与宗教思想已经长期互动。` },
    { time, title: "事件展开", description: `${summary} 学习时要区分信仰共同体、哈里发名义、地方王朝、军人政权和商业文化网络这些不同层次。` },
    { time, title: "影响延伸", description: `${result} 它会继续影响西亚、北非、中亚、南亚、东南亚和欧洲边缘的政治、宗教、法律与贸易联系。` }
  ];
  const event = (id, title, era, time, summary, result, names, topics, regions = ["西亚", "阿拉伯半岛"]) => ({
    id, title, aliases: eventAliases[id] || [], era, period: dynasty, time, regions, topics, summary, bookmarked: false,
    people: people(names, title), relations: [], background: [`${title}要放在晚期古代欧亚非交界地的长期变化中理解，重点看宗教、贸易、军队和城市网络如何共同塑造伊斯兰世界。`],
    process: buildProcess(title, summary, result, time), results: [result], debates: [{ view: "学习提示", content: "伊斯兰世界不是单一国家，哈里发、苏丹、埃米尔、乌理玛、商人网络和地方社会经常并行存在。" }],
    claims: [{ statement: summary, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["islamic-world-britannica"], note: "首版按主线学习版整理，具体阿拉伯文、波斯文史料和现代研究页码后续逐条补充。" }],
    citations: [{ sourceId: "islamic-world-britannica", reference: "伊斯兰世界公开通史入口", status: "待逐条细核", plainText: `白话理解：${summary}`, note: "先提供可读释义；涉及宗教史和教派形成时保持审慎口径。" }],
    causalChain: [], sources, reviewQuestions: [{ type: "主线理解", question: `${title}为什么重要？`, answer: result }], notes: [], dynastyId, dynasty, topicIds: topics
  });
  const rows = [
    ["islamic-world-late-antique-arabia", "阿拉伯半岛晚期古代背景", "阿拉伯半岛与伊斯兰兴起", "6世纪", "麦加、麦地那、也门、叙利亚边疆和波斯湾之间存在贸易、部落联盟和多种宗教传统。", "伊斯兰兴起不是孤立事件，而是在拜占庭、萨珊和阿拉伯社会交界中出现的新整合。", ["古莱什部落", "阿拉伯部落"], ["阿拉伯半岛", "晚期古代", "贸易"]],
    ["islamic-world-hijra-medina", "希吉拉与麦地那共同体", "阿拉伯半岛与伊斯兰兴起", "622", "穆罕默德及追随者从麦加迁往麦地那，新的宗教与政治共同体逐步形成。", "希吉拉成为伊斯兰纪年起点，也标志信仰共同体开始具备政治组织能力。", ["穆罕默德", "麦地那社群"], ["希吉拉", "乌玛", "麦地那"]],
    ["islamic-world-muhammad-arabia", "穆罕默德统一阿拉伯半岛", "阿拉伯半岛与伊斯兰兴起", "630-632", "穆罕默德重返麦加并整合半岛部落，伊斯兰共同体在阿拉伯半岛形成主导力量。", "半岛整合为后续正统哈里发扩张提供信仰、政治和军事基础。", ["穆罕默德", "阿拉伯部落"], ["麦加", "阿拉伯统一", "伊斯兰兴起"]],
    ["islamic-world-rashidun-ridda", "正统哈里发与里达战争", "正统哈里发与早期扩张", "632-634", "阿布伯克尔处理穆罕默德去世后的部落脱离和继承危机，重建共同体权威。", "里达战争稳定了早期哈里发，使其能够把军事力量转向拜占庭和萨珊边疆。", ["阿布伯克尔", "阿拉伯部落"], ["正统哈里发", "里达战争", "继承"]],
    ["islamic-world-yarmuk-qadisiyya", "雅穆克、卡迪西亚与早期征服", "正统哈里发与早期扩张", "636前后", "阿拉伯军队在雅穆克击败拜占庭，在卡迪西亚击败萨珊，打开叙利亚、两河和伊朗通道。", "拜占庭和萨珊长期消耗后的边疆崩塌，使伊斯兰政权迅速进入旧帝国核心区。", ["哈立德·伊本·瓦利德", "阿拉伯军队", "拜占庭", "萨珊"], ["雅穆克", "卡迪西亚", "征服"], ["叙利亚", "两河", "伊朗"]],
    ["islamic-world-first-fitna", "第一次内战与逊尼什叶分化", "正统哈里发与早期扩张", "656-661", "奥斯曼被杀后，阿里、穆阿维叶等围绕合法继承和政治权威发生内战。", "早期内战为逊尼、什叶等政治宗教分化留下深层记忆。", ["阿里", "穆阿维叶", "奥斯曼"], ["第一次内战", "逊尼", "什叶"]],
    ["islamic-world-umayyad-caliphate", "倭马亚哈里发与帝国行政", "倭马亚与阿拔斯", "661-750", "倭马亚以大马士革为中心，将阿拉伯征服国家扩展到北非、伊比利亚、中亚和印度河边缘。", "哈里发从半岛共同体变成跨区域帝国，阿拉伯语行政和军事定居点影响深远。", ["倭马亚王朝", "阿卜杜勒马利克"], ["倭马亚", "大马士革", "帝国行政"], ["叙利亚", "北非", "中亚", "伊比利亚"]],
    ["islamic-world-tours-talass", "图尔与怛罗斯后的扩张边界", "倭马亚与阿拔斯", "732-751", "伊斯兰军队在西欧和中亚方向遇到法兰克、唐和地方力量，扩张速度开始转向边界治理。", "伊斯兰世界继续扩大影响，但军事征服逐步让位于贸易、城市和地方王朝扩散。", ["法兰克军队", "阿拔斯军队", "唐军"], ["图尔战役", "怛罗斯", "边界"], ["高卢", "中亚"]],
    ["islamic-world-abbasid-revolution", "阿拔斯革命与巴格达", "倭马亚与阿拔斯", "750以后", "阿拔斯借呼罗珊力量推翻倭马亚，并建设巴格达作为新的帝国和学术中心。", "帝国重心从叙利亚转向伊拉克和伊朗文化圈，阿拉伯、波斯和多民族精英共同参与治理。", ["阿拔斯王朝", "呼罗珊力量"], ["阿拔斯", "巴格达", "呼罗珊"], ["伊拉克", "呼罗珊"]],
    ["islamic-world-translation-movement", "翻译运动与智慧宫", "倭马亚与阿拔斯", "8-10世纪", "巴格达等城市翻译希腊、叙利亚、波斯和印度知识，发展医学、天文、数学和哲学。", "伊斯兰世界成为旧世界知识汇聚和再创造中心，并影响拉丁欧洲和后续科学传统。", ["阿拔斯赞助者", "翻译家", "学者"], ["翻译运动", "智慧宫", "学术"], ["巴格达", "叙利亚", "波斯"]],
    ["islamic-world-cordoba-caliphate", "科尔多瓦哈里发与安达卢斯", "区域王朝与学术网络", "929-1031", "后倭马亚在伊比利亚建立科尔多瓦哈里发，形成西地中海伊斯兰政治和文化中心。", "安达卢斯连接伊斯兰、基督教和犹太文化，也成为欧洲与伊斯兰世界交流的重要通道。", ["阿卜杜拉赫曼三世", "安达卢斯学者"], ["科尔多瓦", "安达卢斯", "西地中海"], ["伊比利亚"]],
    ["islamic-world-fatimid-cairo", "法蒂玛王朝与开罗", "区域王朝与学术网络", "969以后", "什叶派法蒂玛王朝控制埃及并建设开罗，挑战阿拔斯哈里发的宗教政治权威。", "埃及重新成为东地中海和红海贸易中心，伊斯兰世界呈现多哈里发并立局面。", ["法蒂玛王朝", "开罗精英"], ["法蒂玛", "开罗", "什叶派"], ["埃及", "北非"]],
    ["islamic-world-regional-dynasties", "哈里发权威地方化", "区域王朝与学术网络", "10-11世纪", "萨曼、布益、哈姆丹、伽色尼等地方王朝在名义承认或挑战哈里发中掌握实权。", "政治分裂没有终止伊斯兰世界联系，法学、朝觐、商业和书写文化维持共同空间。", ["萨曼王朝", "布益王朝", "伽色尼王朝"], ["地方王朝", "哈里发", "商业网络"], ["伊朗", "中亚", "两河"]],
    ["islamic-world-seljuk-sunni", "塞尔柱与逊尼复兴", "突厥化与十字军时代", "11世纪", "塞尔柱突厥进入呼罗珊、伊朗和两河，以苏丹权力保护阿拔斯哈里发并推动逊尼学术制度。", "伊斯兰政治形成哈里发象征与苏丹军政并行结构，突厥化影响西亚和安纳托利亚。", ["图格里勒贝格", "尼扎姆·穆勒克"], ["塞尔柱", "逊尼复兴", "苏丹"], ["呼罗珊", "巴格达", "安纳托利亚"]],
    ["islamic-world-crusades-levant", "十字军与东地中海", "突厥化与十字军时代", "1095以后", "西欧十字军进入黎凡特并建立诸国，穆斯林地方政权在分裂与反击中重组。", "十字军战争把西欧、拜占庭、黎凡特和埃及更紧密地卷入东地中海政治。", ["十字军", "塞尔柱", "黎凡特穆斯林政权"], ["十字军", "黎凡特", "东地中海"], ["叙利亚", "巴勒斯坦", "埃及"]],
    ["islamic-world-saladin-ayyubids", "萨拉丁与阿尤布王朝", "突厥化与十字军时代", "1171-1193", "萨拉丁结束法蒂玛王朝，整合埃及和叙利亚，并在哈丁战役后夺回耶路撒冷。", "埃及-叙利亚轴线成为抵抗十字军和重组逊尼政治的核心。", ["萨拉丁", "阿尤布王朝"], ["萨拉丁", "阿尤布", "耶路撒冷"], ["埃及", "叙利亚", "耶路撒冷"]],
    ["islamic-world-mamluk-ayn-jalut", "马穆鲁克击退蒙古", "突厥化与十字军时代", "1260", "埃及马穆鲁克在艾因贾鲁特击退蒙古军，阻止蒙古继续进入埃及和北非。", "马穆鲁克巩固埃及和叙利亚，成为中世纪后期伊斯兰世界重要军事政权。", ["马穆鲁克", "蒙古军"], ["艾因贾鲁特", "马穆鲁克", "蒙古"], ["叙利亚", "埃及"]],
    ["islamic-world-mongol-baghdad", "蒙古攻陷巴格达", "蒙古冲击与重组", "1258", "旭烈兀率蒙古军攻陷巴格达，阿拔斯哈里发在伊拉克的政治中心被摧毁。", "巴格达陷落象征古典哈里发时代结束，但伊斯兰社会和文化网络在其他中心延续。", ["旭烈兀", "阿拔斯哈里发"], ["蒙古", "巴格达", "阿拔斯终结"], ["巴格达", "两河"]],
    ["islamic-world-ilkhanate-islamization", "伊儿汗国伊斯兰化", "蒙古冲击与重组", "13-14世纪", "蒙古伊儿汗国在伊朗和两河逐步接受伊斯兰，并吸收波斯官僚与学术传统。", "蒙古统治者被伊斯兰制度吸纳，说明征服并未中断区域文化连续性。", ["伊儿汗国", "合赞汗"], ["伊儿汗", "伊斯兰化", "波斯官僚"], ["伊朗", "两河"]],
    ["islamic-world-timurid-cultural-world", "帖木儿时代的伊斯兰文化圈", "蒙古冲击与重组", "14-15世纪", "帖木儿及其后裔连接河中、呼罗珊、伊朗和印度边缘，赞助波斯语文学、建筑与学术。", "帖木儿文化圈影响萨非、莫卧儿和中亚伊斯兰政治文化。", ["帖木儿", "帖木儿后裔"], ["帖木儿", "波斯语文化", "中亚"], ["撒马尔罕", "赫拉特", "伊朗"]],
    ["islamic-world-ottoman-constantinople", "奥斯曼夺取君士坦丁堡", "火药帝国与近代转型", "1453", "奥斯曼攻陷君士坦丁堡，将其发展为伊斯坦布尔，控制东地中海关键枢纽。", "奥斯曼成为连接巴尔干、安纳托利亚、阿拉伯地区和地中海的核心伊斯兰帝国。", ["穆罕默德二世", "奥斯曼军队"], ["奥斯曼", "君士坦丁堡", "东地中海"], ["君士坦丁堡", "巴尔干", "安纳托利亚"]],
    ["islamic-world-safavid-shia", "萨法维与什叶派伊朗", "火药帝国与近代转型", "1501以后", "萨法维王朝在伊朗建立，并把十二伊玛目什叶派推为国家核心身份。", "伊朗与逊尼派奥斯曼、乌兹别克形成清晰宗教政治边界，重塑西亚格局。", ["伊斯玛仪一世", "萨法维王朝"], ["萨法维", "什叶派", "伊朗"], ["伊朗", "阿塞拜疆"]],
    ["islamic-world-mughal-akbar", "莫卧儿帝国高峰与阿克巴改革", "火药帝国与近代转型", "1556-1605", "阿克巴扩张莫卧儿帝国并改革税制、贵族体系和宗教政策，整合北印度多元社会。", "莫卧儿把波斯语宫廷文化、突厥蒙古军事传统和南亚地方社会结合起来。", ["阿克巴", "莫卧儿贵族"], ["莫卧儿", "阿克巴", "南亚"], ["北印度", "德里", "阿格拉"]],
    ["islamic-world-indian-ocean-islam", "印度洋与东南亚伊斯兰化", "火药帝国与近代转型", "13-17世纪", "穆斯林商人、苏菲网络和港口王国推动伊斯兰在印度洋、马六甲海峡和群岛传播。", "伊斯兰世界不只靠征服扩张，贸易、婚姻、学术和港口政治也能形成深远影响。", ["穆斯林商人", "苏菲网络", "港口王国"], ["印度洋", "东南亚伊斯兰化", "贸易"], ["印度洋", "马六甲", "印尼群岛"]],
    ["islamic-world-ottoman-tanzimat-caliphate-end", "奥斯曼改革与哈里发终结", "火药帝国与近代转型", "1839-1924", "奥斯曼在欧洲压力和内部危机中推行坦志麦特改革，第一次世界大战后帝国解体，1924年哈里发制度被废止。", "近代伊斯兰世界进入民族国家、殖民秩序和改革思想并行的新阶段。", ["奥斯曼改革派", "土耳其共和国"], ["坦志麦特", "奥斯曼解体", "哈里发终结"], ["奥斯曼帝国", "安纳托利亚", "阿拉伯地区"]]
  ];
  window.ISLAMIC_WORLD_EVENTS = rows.map(([id, title, era, time, summary, result, names, topics, regions]) => event(id, title, era, time, summary, result, names, topics, regions));

  // 只有能独立解释因果转折的单元保留为卡片；被吸收的原事件保留在父卡过程节点。
  const plans = {
    "islamic-world-hijra-medina": { members: ["islamic-world-late-antique-arabia", "islamic-world-hijra-medina", "islamic-world-muhammad-arabia"], label: "共同体怎样取得政治组织能力", claim: "伊斯兰兴起不是由一次启示自动完成；贸易城市、部落保护和麦地那的仲裁需求，使信仰共同体得以转成可动员的政治组织。", sections: [["从麦加到麦地那", "麦加的商贸与部落秩序提供了传播环境，却也限制了新共同体；622年的希吉拉改变了组织基地。"], ["盟约与资源", "共同体以成员义务、仲裁、军事协作和救济连接信仰与政治，而非一开始就是现代国家。"], ["半岛整合", "630年重返麦加到632年整合部落，才为继承危机和后续扩张提供资源。"]], evidence: ["麦地那宪章传统", "传本和解释有争议，但可检验成员、义务与仲裁如何被表述。"], misconception: "622年不是一个成熟国家在瞬间诞生。", memory: ["商路", "希吉拉", "盟约"] },
    "islamic-world-rashidun-ridda": { members: ["islamic-world-rashidun-ridda", "islamic-world-yarmuk-qadisiyya"], label: "继承危机如何转成征服能力", claim: "里达战争首先重建的是征税、效忠和军事动员；雅穆克与卡迪西亚的胜利才使这一能力进入被长期战争耗损的拜占庭和萨珊边疆。", sections: [["继承而非自然服从", "穆罕默德去世后，部落脱离和领导权争议迫使阿布伯克尔重建共同体权威。"], ["边疆窗口", "636年前后两场战役打开叙利亚、两河与伊朗通道，但胜利也依赖两大帝国长期消耗。"], ["征服后的难题", "进入旧帝国核心区不等于立刻形成统一社会，税制、驻军和地方精英合作才决定统治能否延续。"]], evidence: ["早期征服叙事与钱币、文书", "编年史常强调英雄事迹，需与行政和物质材料对读。"], misconception: "不能把扩张只解释为单场战役或单一宗教热情。", memory: ["里达", "边疆崩塌", "征服治理"] },
    "islamic-world-first-fitna": { members: ["islamic-world-first-fitna"], label: "合法性为何成为内战问题", claim: "第一次内战把继承、亲属、功绩和共同体意见的冲突公开化；此后哈里发权威无法只靠征服或单一血缘解决。", sections: [["危机触发", "奥斯曼遇刺后，谁有资格领导共同体成为首要政治问题。"], ["竞争语言", "阿里、穆阿维叶及各自支持者动用亲属、地区、宗教与复仇语言争取正当性。"], ["历史记忆", "它是后来逊尼与什叶传统的重要参照，但7世纪派别不能直接套成现代社群地图。"]], evidence: ["早期伊斯兰编年史", "叙事形成较晚并带宗派立场，需比较不同传本。"], misconception: "不能把当时各派当成今日固定教派的原样。", memory: ["继承", "内战", "合法性"] },
    "islamic-world-umayyad-caliphate": { members: ["islamic-world-umayyad-caliphate", "islamic-world-tours-talass"], label: "征服国家如何变成帝国", claim: "倭马亚以大马士革为中心，把军队、阿拉伯语行政和边疆驻军制度化；图尔和怛罗斯显示扩张开始遇到边界，帝国必须转向治理与网络。", sections: [["行政重组", "大马士革成为军政中心，货币、行政语言和驻军让持续动员成为可能。"], ["扩张的边界", "在高卢与中亚面对法兰克、唐及地方力量，军事推进不再等同无止境扩张。"], ["帝国而非同质国家", "北非、伊比利亚、中亚与印度河边缘的控制强度和地方合作方式差异很大。"]], evidence: ["钱币、铭文与早期行政材料", "可观察语言和权力象征变化，不能单独证明所有地区的实际控制深度。"], misconception: "不能把倭马亚版图看作均质、稳定的现代国界。", memory: ["大马士革", "行政", "边界"] },
    "islamic-world-abbasid-revolution": { members: ["islamic-world-abbasid-revolution"], label: "革命怎样移动帝国重心", claim: "阿拔斯利用呼罗珊军政网络推翻倭马亚，并以巴格达连接两河与伊朗行政传统；革命改变中心，却没有消除地方与阶层差异。", sections: [["东部动员", "呼罗珊的军事、社会与宣传网络使反倭马亚力量得以集中。"], ["巴格达的选择", "新都靠近两河灌溉、商路和伊朗行政文化，改变了帝国资源重心。"], ["革命后的治理", "王朝更替仍要依赖税收、官僚与军队，不能把它理解成自动实现平等。"]], evidence: ["革命叙事、钱币与巴格达城址", "材料能追踪中心转移，但不能把所有参与者的目标化为一项。"], misconception: "阿拔斯革命不是一次完成社会平等的革命。", memory: ["呼罗珊", "巴格达", "官僚"] },
    "islamic-world-translation-movement": { members: ["islamic-world-translation-movement"], label: "翻译为何是制度工程", claim: "阿拉伯语学术繁荣依靠宫廷赞助、书籍市场、医生与多语译者网络，而不是由单一的“智慧宫”或君主独自创造。", sections: [["谁出资", "哈里发和城市精英把知识活动接入宫廷、医院、市场和抄写网络。"], ["怎样流动", "希腊语、叙利亚语、波斯语和阿拉伯语译者连接不同学术传统。"], ["不能神话单点", "智慧宫重要，但数百年的知识生产分布在多个城市和机构。"]], evidence: ["译本序言、书目与医学哲学文献", "可见译者和赞助关系，具体机构规模仍有争议。"], misconception: "不要把知识史简化为一座建筑或一位君主。", memory: ["赞助", "多语", "书籍市场"] },
    "islamic-world-regional-dynasties": { members: ["islamic-world-cordoba-caliphate", "islamic-world-fatimid-cairo", "islamic-world-regional-dynasties"], label: "政治分裂为何没有打散伊斯兰世界", claim: "10至11世纪多王朝并立削弱了单一哈里发的政治实权，却通过法学、朝觐、商业、书写语言和城市网络维持了共同空间。", sections: [["多中心出现", "科尔多瓦、开罗和伊朗-中亚各王朝不再从属一个稳定政治中心。"], ["开罗的挑战", "法蒂玛控制埃及并建开罗，使宗教政治权威公开竞争，也重接红海与东地中海贸易。"], ["联系没有消失", "地方政权更替不等于文明断裂；法学、商贸和学术网络跨越王朝边界。"]], evidence: ["钱币、旅行记、法学与商贸文书", "不同材料可分别观察政治主张和跨区域往来。"], misconception: "分裂不等于伊斯兰世界从此不存在。", memory: ["多哈里发", "开罗", "网络"] },
    "islamic-world-seljuk-sunni": { members: ["islamic-world-seljuk-sunni"], label: "苏丹为何能与哈里发并行", claim: "塞尔柱军事集团以苏丹身份掌握军政，而保留阿拔斯哈里发的象征合法性；军人权力与法学教育共同重塑西亚秩序。", sections: [["军政与象征", "塞尔柱进入巴格达后形成苏丹掌军政、哈里发供名义合法性的并行结构。"], ["制度支撑", "尼扎米亚等教育与法学网络把统治、宗教知识和精英培养相连。"], ["区域后果", "突厥化与波斯官僚传统共同影响伊朗、两河和安纳托利亚。"]], evidence: ["维齐尔文献、学院记录与编年史", "官方叙事强调秩序，需注意地方执行差异。"], misconception: "不能把哈里发保留理解为其仍直接掌握全部军政。", memory: ["苏丹", "哈里发", "学院"] },
    "islamic-world-crusades-levant": { members: ["islamic-world-crusades-levant"], label: "十字军为何重组东地中海", claim: "十字军国家并非简单的欧陆殖民飞地；它们迫使拜占庭、黎凡特、叙利亚与埃及的多方政权重算贸易、军事与联盟。", sections: [["进入黎凡特", "1099年前后建立的十字军诸国控制关键海岸与圣地，但依赖补给、港口和地方关系。"], ["地方分裂与合作", "穆斯林政权之间既有竞争也有结盟，不能预设所有行动者天然一致。"], ["东地中海系统", "战争把西欧、拜占庭、意大利海港和埃及贸易更紧密地卷入同一空间。"]], evidence: ["阿拉伯、拉丁与拜占庭编年史", "三类叙事对宗教、暴力和责任的描述差异很大。"], misconception: "十字军时代不能只写成两块文明的整体对撞。", memory: ["港口", "联盟", "黎凡特"] },
    "islamic-world-saladin-ayyubids": { members: ["islamic-world-saladin-ayyubids"], label: "哈丁如何依赖区域整合", claim: "萨拉丁在哈丁的胜利依赖此前连接埃及财政与叙利亚军政资源；1187年收复耶路撒冷不是一场孤立战役的必然结果。", sections: [["先整合资源", "结束法蒂玛王朝后，埃及的财政和叙利亚的军事网络被纳入同一权力框架。"], ["战役的作用", "哈丁削弱十字军野战力量，打开耶路撒冷的政治空间。"], ["不是终局", "沿海据点、谈判和后续十字军仍持续，不能把1187年写成战争结束。"]], evidence: ["阿拉伯与拉丁编年史", "双方对人物、损失与宗教意义有不同叙述，适合比较。"], misconception: "收复耶路撒冷不等于十字军国家立即消失。", memory: ["埃及财政", "叙利亚军队", "哈丁"] },
    "islamic-world-mongol-baghdad": { members: ["islamic-world-mongol-baghdad", "islamic-world-mamluk-ayn-jalut", "islamic-world-ilkhanate-islamization", "islamic-world-timurid-cultural-world"], label: "蒙古冲击为何转为区域重组", claim: "1258年巴格达陷落摧毁阿拔斯政治中心，却未终结伊斯兰社会；马穆鲁克、伊儿汗与帖木儿时代分别重组军事、官僚与波斯语文化网络。", sections: [["巴格达陷落", "围城造成巨大破坏，伤亡数字须谨慎；被摧毁的是政治中心，不是全部城市与学术网络。"], ["军事与制度回应", "1260年艾因贾鲁特后，马穆鲁克巩固埃及-叙利亚；伊儿汗国则逐步吸收伊斯兰和波斯官僚传统。"], ["文化中心迁移", "帖木儿时期的撒马尔罕、赫拉特等城市显示网络改组与延续，而非文明空白。"]], evidence: ["波斯、阿拉伯编年史与城市考古", "叙事立场不同，考古只能校验部分破坏和延续。"], misconception: "巴格达陷落不是“伊斯兰文明终结”。", memory: ["破坏", "马穆鲁克", "重组"] },
    "islamic-world-ottoman-constantinople": { members: ["islamic-world-ottoman-constantinople"], label: "君士坦丁堡为何改变帝国尺度", claim: "1453年并非奥斯曼崛起的单一原因，却让其取得东地中海枢纽，并将巴尔干、安纳托利亚与后来的阿拉伯地区置入更大军政和商业框架。", sections: [["攻城与枢纽", "夺城连接海峡、港口、财政与象征资本，伊斯坦布尔随即成为帝国中心。"], ["统治方式", "奥斯曼依靠军役、土地授予、税收和地方合作维持跨语言、跨宗教秩序。"], ["避免目的论", "早期扩张充满边疆竞争与偶然机会，并非民族国家的直线预演。"]], evidence: ["早期奥斯曼编年史、碑铭与档案", "王朝叙事常带事后合法化，需要与物质材料互证。"], misconception: "1453年不是中东或欧洲历史的单一断裂点。", memory: ["海峡", "伊斯坦布尔", "军政"] },
    "islamic-world-safavid-shia": { members: ["islamic-world-safavid-shia"], label: "宗教身份怎样成为国家边界", claim: "萨法维将十二伊玛目什叶派置为伊朗国家身份核心，使宗教实践、官僚组织与奥斯曼-乌兹别克竞争相互强化，而非只改变信仰标签。", sections: [["国家建构", "伊斯玛仪一世的军事动员与地方控制，使新王朝得以把宗教政策转成统治资源。"], ["制度化过程", "教法学者、仪式与教育网络的扩展需要时间，不能视为1501年一夜完成。"], ["区域竞争", "与逊尼奥斯曼及乌兹别克的对峙把身份选择嵌入边疆、贸易与战争。"]], evidence: ["萨法维文书、旅行记与宗教机构材料", "政策宣布与地方接受程度必须区分。"], misconception: "不能把伊朗什叶化理解为瞬时且毫无地方差异的变化。", memory: ["国家身份", "制度化", "边疆"] },
    "islamic-world-mughal-akbar": { members: ["islamic-world-mughal-akbar"], label: "莫卧儿如何统治多元北印度", claim: "阿克巴的扩张和改革靠的是税制、贵族整合与地方合作；所谓宗教宽容是这套统治技术的一部分，不能脱离军事财政结构单独理解。", sections: [["财政基础", "土地税评估与征收把中央、地方中介和军政贵族连接起来。"], ["精英整合", "不同出身的贵族和地方统治者被编入服务与奖赏体系。"], ["政策的边界", "宗教政策随政局调整，不能把莫卧儿写成现代世俗国家。"]], evidence: ["阿克巴时期宫廷编年史与税收材料", "宫廷材料强调理想秩序，需与地方记录互证。"], misconception: "阿克巴改革不是脱离财政和武力的抽象宽容。", memory: ["税制", "贵族", "地方合作"] },
    "islamic-world-indian-ocean-islam": { members: ["islamic-world-indian-ocean-islam"], label: "伊斯兰为何能沿海路传播", claim: "印度洋和东南亚的伊斯兰化主要经由商人、苏菲网络、婚姻、港口政治和地方统治者选择展开，不能被简化为军事征服的外溢。", sections: [["港口网络", "红海、印度、马六甲和群岛港口把商业信用、语言与宗教联系结合。"], ["地方选择", "统治者接受伊斯兰常服务于贸易、外交与合法性，但各地实践不同。"], ["多重媒介", "商人、学者、苏菲和婚姻网络共同作用，时间跨度长且非线性。"]], evidence: ["碑铭、港口考古、旅行记与地方编年史", "能说明联系与时间线，但不足以替代每个社区的细部历史。"], misconception: "不能把东南亚伊斯兰化写成一次征服或单向输入。", memory: ["港口", "婚姻", "地方选择"] },
    "islamic-world-ottoman-tanzimat-caliphate-end": { members: ["islamic-world-ottoman-tanzimat-caliphate-end"], label: "改革为何走向主权危机", claim: "坦志麦特试图重建税收、军队、法律与国际承认；改革同时暴露地方执行差异和列强干预，帝国解体后哈里发制度也失去原有政治基础。", sections: [["重建国家能力", "征兵、税收和行政统一是改革的核心，并非单纯模仿欧洲。"], ["权利与外交", "臣民平等语言既服务国内治理，也回应欧洲外交和少数社群保护问题。"], ["解体与废止", "一战、民族运动和战后安排改变主权框架，1924年废止哈里发是这一长过程的后果。"]], evidence: ["改革敕令、法律、外交文书与议会材料", "官方目标不能直接证明地方实施效果。"], misconception: "不能把坦志麦特理解为自动成功或注定失败的西化。", memory: ["税收军队", "外交", "主权"] }
  };
  const originalById = new Map(window.ISLAMIC_WORLD_EVENTS.map((item) => [item.id, item]));
  const canonicalById = new Map();
  Object.entries(plans).forEach(([parentId, plan]) => plan.members.forEach((id) => canonicalById.set(id, parentId)));
  window.ISLAMIC_WORLD_EVENTS = window.ISLAMIC_WORLD_EVENTS
    .filter((item) => canonicalById.get(item.id) === item.id)
    .map((item, index, kept) => {
      const plan = plans[item.id];
      const absorbed = plan.members.filter((id) => id !== item.id).map((id) => originalById.get(id));
      const process = plan.members.map((id) => {
        const source = originalById.get(id);
        return {
          time: source.time,
          title: source.title,
          description: `${source.summary} 在本单元中，它不是独立结论，而是通向“${plan.label}”的一个可追踪因果步骤。`
        };
      });
      return {
        ...item,
        title: item.title,
        aliases: [...new Set([...item.aliases, ...absorbed.map((source) => source.title)])],
        background: [],
        process,
        results: [item.results[0]],
        debates: [{ view: "边界提示", content: plan.misconception }],
        claims: [{ statement: plan.claim, status: "较稳妥", statusType: "stable", confidence: "medium", sourceIds: ["islamic-world-britannica", "islamic-world-met"], note: "核心判断须结合该卡材料锚点阅读。" }],
        citations: [{ sourceId: "islamic-world-britannica", reference: plan.evidence[0], status: "待逐条细核", plainText: plan.evidence[1], note: "这是材料类型锚点，不把概括性通史入口伪装成细部证据。" }],
        learningCase: { ...plan, evidence: { title: `材料锚点：${plan.evidence[0]}`, content: plan.evidence[1] }, question: `复述：${plan.label}`, answer: plan.claim },
        contentLevel: "core",
        contentPresentation: "tiered",
        previousEventIds: index ? [kept[index - 1].id] : [],
        nextEventIds: index < kept.length - 1 ? [kept[index + 1].id] : []
      };
    });
})();
