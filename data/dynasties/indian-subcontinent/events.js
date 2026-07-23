(() => {
  const dynastyId = "indian-subcontinent";
  const dynasty = "印度地区";
  const sources = window.INDIAN_SUBCONTINENT_SOURCES || [];

  function people(names, title) {
    return (names || []).map((name) => ({
      name,
      role: "关键人物/群体",
      years: "",
      color: "var(--accent-gold)",
      bio: `${name}需要放在“${title}”的制度、战争、宗教、贸易或殖民背景中理解，不能只当作孤立人物记忆。`,
      events: [title]
    }));
  }

  function buildProcess(item) {
    return [
      {
        time: item.time,
        title: "结构背景",
        description: `${item.title}要放在区域长期结构中理解：地理通道、农耕与贸易网络、宗教传播、国家能力、外来征服或殖民压力，已经为这一节点积累了条件。`
      },
      {
        time: item.time,
        title: "事件推进",
        description: `${item.summary} 事件推进中，王朝、城邦、寺院、商人、殖民者、军队或民族运动重新调整关系，权力和资源分配随之改变。`
      },
      {
        time: item.time,
        title: "主线影响",
        description: `${item.title}的意义不只在单次胜负或制度名称，而在于它怎样改变区域政治整合、宗教文化、海陆贸易、殖民秩序或现代国家形成。`
      }
    ];
  }

  function event(item) {
    const sourceIds = item.sourceIds || ["india-loc-country-study"];
    return {
      id: item.id,
      dynastyId,
      title: item.title,
      aliases: item.aliases || [],
      era: item.era,
      period: dynasty,
      time: item.time,
      regions: item.regions || [],
      topics: item.topics || [],
      summary: item.summary,
      bookmarked: false,
      people: people(item.people, item.title),
      relations: item.relations || [],
      background: item.background || [`${item.title}要放在${dynasty}长期主线中理解，重点看区域内部政权、宗教文化、贸易路线和外部世界如何交织。`],
      process: item.process || buildProcess(item),
      results: item.results || [item.summary],
      debates: [{ view: "学习提示", content: "本模块先给主线白话释义；古代部分注意考古、铭文和后世文献互校，近现代部分注意殖民档案和民族国家叙事的差异。" }],
      claims: [{
        statement: item.summary,
        status: "较稳妥",
        statusType: "stable",
        confidence: item.confidence || "medium",
        sourceIds,
        note: "首版按高可信公开资料和通史框架整理，后续可继续细化到铭文、档案、考古报告和专门研究。"
      }],
      citations: [{
        sourceId: sourceIds[0],
        reference: item.reference || `${dynasty}公开权威资料入口`,
        status: "主线版",
        plainText: `白话理解：${item.summary}`,
        note: "不放难读原文，先给学习者能读懂的解释。"
      }],
      causalChain: item.causalChain || [],
      sources,
      reviewQuestions: [{
        type: "主线理解",
        question: `${item.title}为什么应放入${dynasty}主线？`,
        answer: "因为它改变了区域权力结构、社会制度、宗教文化、贸易网络或对外关系，能帮助理解前后阶段的因果转折。"
      }],
      notes: [],
      dynasty,
      topicIds: item.topicIds || []
    };
  }

  const items = [
  {
    "id": "indus-early-harappan",
    "title": "早期哈拉帕聚落与印度河城市化前夜",
    "era": "印度河文明",
    "time": "约前3300-前2600",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "城市化",
      "考古文化"
    ],
    "people": [
      "早期哈拉帕人群"
    ],
    "summary": "印度河流域和旁遮普、信德地区出现区域聚落、手工业和长距离交换，为成熟哈拉帕城市体系奠定基础。",
    "sourceIds": [
      "india-loc-country-study",
      "india-columbia-topic"
    ]
  },
  {
    "id": "indus-mature-harappan",
    "title": "成熟哈拉帕城市文明",
    "era": "印度河文明",
    "time": "约前2600-前1900",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "城市化",
      "社会经济"
    ],
    "people": [
      "哈拉帕",
      "摩亨佐-达罗"
    ],
    "summary": "哈拉帕、摩亨佐-达罗等城市展现规划街道、排水系统、度量衡和远程贸易，是南亚最早的城市文明高峰。",
    "sourceIds": [
      "india-loc-country-study",
      "india-columbia-topic"
    ]
  },
  {
    "id": "indus-trade-mesopotamia",
    "title": "印度河与两河贸易网络",
    "era": "印度河文明",
    "time": "约前2500-前1900",
    "regions": [
      "南亚",
      "印度河",
      "两河流域",
      "阿拉伯海"
    ],
    "topics": [
      "海上贸易",
      "跨区域交流"
    ],
    "people": [
      "印度河商人",
      "两河商人"
    ],
    "summary": "印度河文明通过阿拉伯海与波斯湾进入两河贸易圈，说明南亚很早就是印度洋-西亚交换网络的一部分。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "indus-decline",
    "title": "印度河城市体系衰落",
    "era": "印度河文明",
    "time": "约前1900以后",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "环境变化",
      "城市化"
    ],
    "people": [
      "哈拉帕诸城市"
    ],
    "summary": "成熟哈拉帕城市网络逐渐解体，人口和聚落向不同区域转移，南亚进入更分散的后城市阶段。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "vedic-punjab",
    "title": "早期吠陀社会形成",
    "era": "吠陀时代",
    "time": "约前1500-前1000",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "社会结构"
    ],
    "people": [
      "吠陀部落"
    ],
    "summary": "印度河后期变化后， Indo-Aryan 语言社群和吠陀祭祀传统在西北和恒河上游逐渐形成。",
    "sourceIds": [
      "india-loc-country-study",
      "india-columbia-topic"
    ]
  },
  {
    "id": "vedic-ganges-iron",
    "title": "铁器与恒河流域扩展",
    "era": "吠陀时代",
    "time": "约前1000-前600",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "农业扩张",
      "国家形成"
    ],
    "people": [
      "恒河流域诸部"
    ],
    "summary": "铁器、农耕和定居扩展推动恒河流域政治社会复杂化，为列国和城市复兴提供条件。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "mahajanapadas",
    "title": "十六大国与第二次城市化",
    "era": "列国时代",
    "time": "约前600-前300",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "国家形成",
      "城市化"
    ],
    "people": [
      "摩揭陀",
      "拘萨罗",
      "跋耆"
    ],
    "summary": "恒河流域出现十六大国、城市、货币和新型政权竞争，南亚政治重心明显东移。",
    "sourceIds": [
      "india-harvard-timeline",
      "india-columbia-topic"
    ]
  },
  {
    "id": "buddha-jain",
    "title": "佛教、耆那教兴起",
    "era": "列国时代",
    "time": "约前6-前5世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "思想"
    ],
    "people": [
      "释迦牟尼",
      "大雄"
    ],
    "summary": "佛教和耆那教在城市化、苦行传统和刹帝利政治环境中兴起，对南亚和亚洲宗教史产生深远影响。",
    "sourceIds": [
      "india-columbia-topic"
    ]
  },
  {
    "id": "magadha-rise",
    "title": "摩揭陀崛起",
    "era": "列国时代",
    "time": "前6-前4世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "频毗娑罗",
      "阿阇世"
    ],
    "summary": "摩揭陀凭借恒河平原资源、铁矿、象军和交通位置扩张，逐渐压倒其他大国。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "alexander-indus",
    "title": "亚历山大进入印度河地区",
    "era": "外部冲击",
    "time": "前327-前325",
    "regions": [
      "南亚",
      "印度河",
      "希腊化世界"
    ],
    "topics": [
      "战争军事",
      "跨区域交流"
    ],
    "people": [
      "亚历山大",
      "波罗斯"
    ],
    "summary": "亚历山大东征进入印度河流域并与当地政权交战，打开希腊化世界和西北南亚的新联系。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "maurya-founded",
    "title": "孔雀帝国建立",
    "era": "孔雀帝国",
    "time": "约前321",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "统一战争"
    ],
    "people": [
      "旃陀罗笈多",
      "考底利耶"
    ],
    "summary": "旃陀罗笈多在摩揭陀基础上建立孔雀王朝，南亚第一次形成大规模帝国整合。",
    "sourceIds": [
      "india-met-mauryan",
      "india-harvard-timeline"
    ]
  },
  {
    "id": "seleucid-maurya",
    "title": "塞琉古-孔雀和约",
    "era": "孔雀帝国",
    "time": "前303",
    "regions": [
      "南亚",
      "印度河",
      "西亚"
    ],
    "topics": [
      "边疆外交",
      "战争军事"
    ],
    "people": [
      "旃陀罗笈多",
      "塞琉古一世"
    ],
    "summary": "孔雀帝国与塞琉古王朝达成和约，西北边疆、外交婚盟和战象交换体现南亚与希腊化西亚的连接。",
    "sourceIds": [
      "india-met-mauryan"
    ]
  },
  {
    "id": "ashoka-kalinga",
    "title": "阿育王征服羯陵伽",
    "era": "孔雀帝国",
    "time": "约前261",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "战争军事",
      "文化宗教"
    ],
    "people": [
      "阿育王"
    ],
    "summary": "阿育王征服羯陵伽后转向宣扬法和佛教护持，帝国暴力、道德统治和宗教传播在此交汇。",
    "sourceIds": [
      "india-met-mauryan"
    ]
  },
  {
    "id": "ashoka-edicts",
    "title": "阿育王铭文与法的传播",
    "era": "孔雀帝国",
    "time": "前3世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "制度治理",
      "文化宗教"
    ],
    "people": [
      "阿育王"
    ],
    "summary": "阿育王以岩石和石柱铭文传播统治理念，是南亚早期国家意识、文字政治和佛教传播的重要证据。",
    "sourceIds": [
      "india-met-mauryan"
    ]
  },
  {
    "id": "maurya-decline",
    "title": "孔雀帝国瓦解",
    "era": "后孔雀时代",
    "time": "约前185",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "区域分裂"
    ],
    "people": [
      "巽伽王朝",
      "地方势力"
    ],
    "summary": "孔雀帝国瓦解后，南亚重新进入多政权并立，西北、中恒河和德干各自发展。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "indo-greek-kushan",
    "title": "印度-希腊、塞种与贵霜进入西北",
    "era": "西北诸王国",
    "time": "前2世纪-公元3世纪",
    "regions": [
      "南亚",
      "中亚",
      "印度河"
    ],
    "topics": [
      "跨区域交流",
      "政权兴亡"
    ],
    "people": [
      "印度-希腊诸王",
      "贵霜王朝"
    ],
    "summary": "西北南亚成为希腊化、中亚、伊朗和印度文化交汇区，推动犍陀罗艺术和佛教传播。",
    "sourceIds": [
      "india-harvard-timeline",
      "india-columbia-topic"
    ]
  },
  {
    "id": "kushan-kanishka",
    "title": "迦腻色伽与贵霜佛教网络",
    "era": "贵霜时代",
    "time": "2世纪",
    "regions": [
      "南亚",
      "中亚",
      "丝绸之路"
    ],
    "topics": [
      "文化宗教",
      "跨区域交流"
    ],
    "people": [
      "迦腻色伽"
    ],
    "summary": "贵霜帝国连接北印度、中亚和丝绸之路，佛教艺术、僧团和商路网络向中亚、东亚扩散。",
    "sourceIds": [
      "india-columbia-topic"
    ]
  },
  {
    "id": "satavahana-deccan",
    "title": "萨陀婆诃那与德干贸易",
    "era": "德干诸国",
    "time": "前1世纪-3世纪",
    "regions": [
      "南亚",
      "德干",
      "印度洋"
    ],
    "topics": [
      "经济财政",
      "海上贸易"
    ],
    "people": [
      "萨陀婆诃那王朝"
    ],
    "summary": "德干地区在萨陀婆诃那等王朝下连接北印度、南印度和印度洋贸易，区域政治不再只是恒河中心。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "sangam-south",
    "title": "泰米尔桑伽姆时代",
    "era": "南印度古典期",
    "time": "约前3世纪-3世纪",
    "regions": [
      "南亚",
      "泰米尔地区",
      "印度洋"
    ],
    "topics": [
      "社会文化",
      "海上贸易"
    ],
    "people": [
      "朱罗",
      "潘地亚",
      "哲罗"
    ],
    "summary": "南印度泰米尔地区形成文学、港口贸易和区域王权传统，与罗马和印度洋贸易有密切联系。",
    "sourceIds": [
      "india-columbia-topic"
    ]
  },
  {
    "id": "gupta-rise",
    "title": "笈多帝国兴起",
    "era": "笈多时代",
    "time": "约320",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "旃陀罗笈多一世",
      "沙摩陀罗笈多"
    ],
    "summary": "笈多王朝在恒河流域兴起并扩张，北印度进入常被称为古典时代的政治文化高峰。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "gupta-classical-culture",
    "title": "笈多古典文化与科学",
    "era": "笈多时代",
    "time": "4-5世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "科学技术"
    ],
    "people": [
      "笈多宫廷",
      "阿耶波多"
    ],
    "summary": "笈多时代梵文文学、数学、天文学、雕塑和印度教传统发展成熟，影响后世南亚文化结构。",
    "sourceIds": [
      "india-columbia-topic"
    ]
  },
  {
    "id": "huna-pressure-gupta",
    "title": "嚈哒压力与笈多衰落",
    "era": "笈多时代",
    "time": "5-6世纪",
    "regions": [
      "南亚",
      "西北印度",
      "中亚"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "嚈哒",
      "笈多王朝"
    ],
    "summary": "中亚游牧力量和内部财政压力削弱笈多帝国，北印度重新走向区域化。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "harsha-kanauj",
    "title": "戒日王与曲女城",
    "era": "后笈多时代",
    "time": "606-647",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "戒日王",
      "玄奘"
    ],
    "summary": "戒日王短暂整合北印度，玄奘到访记录了佛教、宫廷和区域政治状态。",
    "sourceIds": [
      "india-harvard-timeline",
      "india-columbia-topic"
    ]
  },
  {
    "id": "xuanzang-india",
    "title": "玄奘取经与那烂陀",
    "era": "佛教交流",
    "time": "7世纪",
    "regions": [
      "南亚",
      "中国",
      "丝绸之路"
    ],
    "topics": [
      "文化宗教",
      "跨区域交流"
    ],
    "people": [
      "玄奘",
      "那烂陀僧团"
    ],
    "summary": "玄奘赴印度求法并学习于那烂陀，推动中印佛教知识交流和东亚对印度的认识。",
    "sourceIds": [
      "india-columbia-topic"
    ]
  },
  {
    "id": "tripartite-kannauj",
    "title": "曲女城三方争霸",
    "era": "早期中世纪",
    "time": "8-10世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "瞿折罗-普腊蒂哈腊",
      "波罗",
      "罗湿陀罗拘陀"
    ],
    "summary": "普腊蒂哈腊、波罗和罗湿陀罗拘陀围绕曲女城竞争，显示中世纪印度多中心格局。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "pala-buddhism",
    "title": "波罗王朝与佛教大学网络",
    "era": "早期中世纪",
    "time": "8-12世纪",
    "regions": [
      "南亚",
      "孟加拉",
      "比哈尔"
    ],
    "topics": [
      "文化宗教",
      "教育"
    ],
    "people": [
      "波罗王朝",
      "那烂陀",
      "超戒寺"
    ],
    "summary": "波罗王朝护持佛教寺院大学，连接孟加拉、比哈尔、喜马拉雅和东南亚佛教网络。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "chola-rise",
    "title": "朱罗王朝兴起",
    "era": "南印度帝国",
    "time": "9-11世纪",
    "regions": [
      "南亚",
      "泰米尔地区",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "海上贸易"
    ],
    "people": [
      "朱罗王朝"
    ],
    "summary": "朱罗王朝在南印度崛起，依靠农业、寺庙经济和海上贸易扩展权力。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "chola-raid-srivijaya",
    "title": "朱罗远征室利佛逝",
    "era": "印度洋战争",
    "time": "1025",
    "regions": [
      "南亚",
      "东南亚",
      "印度洋"
    ],
    "topics": [
      "战争军事",
      "海上贸易"
    ],
    "people": [
      "拉真陀罗一世",
      "室利佛逝"
    ],
    "summary": "朱罗舰队袭击室利佛逝，显示南印度国家已能介入马六甲和海上贸易秩序。",
    "sourceIds": [
      "sea-met-1000-1400",
      "india-harvard-timeline"
    ]
  },
  {
    "id": "ghaznavid-raids",
    "title": "伽色尼王朝进入北印度",
    "era": "伊斯兰进入",
    "time": "11世纪",
    "regions": [
      "南亚",
      "中亚",
      "印度河"
    ],
    "topics": [
      "战争军事",
      "跨区域交流"
    ],
    "people": [
      "马哈茂德·伽色尼"
    ],
    "summary": "伽色尼王朝多次进攻北印度，开启突厥-伊斯兰政治力量深入南亚的阶段。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "ghurid-tarain",
    "title": "古尔王朝与塔拉因战役",
    "era": "伊斯兰进入",
    "time": "1192",
    "regions": [
      "南亚",
      "北印度"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "穆罕默德·古尔",
      "普里特维拉吉"
    ],
    "summary": "古尔军在塔拉因击败拉其普特势力，为德里苏丹国建立铺路。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "delhi-sultanate-founded",
    "title": "德里苏丹国建立",
    "era": "德里苏丹国",
    "time": "1206",
    "regions": [
      "南亚",
      "北印度"
    ],
    "topics": [
      "政权兴亡",
      "制度治理"
    ],
    "people": [
      "顾特卜丁·艾巴克"
    ],
    "summary": "德里苏丹国建立，北印度进入以突厥-阿富汗军事贵族和波斯化行政为主的统治阶段。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "delhi-khalji-expansion",
    "title": "卡尔吉扩张与德干压力",
    "era": "德里苏丹国",
    "time": "1290s-1310s",
    "regions": [
      "南亚",
      "北印度",
      "德干"
    ],
    "topics": [
      "战争军事",
      "经济财政"
    ],
    "people": [
      "阿拉乌丁·卡尔吉"
    ],
    "summary": "卡尔吉王朝扩张到德干并推行市场、税收和军费改革，德里苏丹国达到重要高峰。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "tughlaq-experiments",
    "title": "图格鲁克改革与失控",
    "era": "德里苏丹国",
    "time": "14世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "制度治理",
      "政权危机"
    ],
    "people": [
      "穆罕默德·本·图格鲁克"
    ],
    "summary": "图格鲁克政权尝试迁都、货币和扩张改革，但执行成本和地方反弹加剧帝国失控。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "vijayanagara-bahmani",
    "title": "毗奢耶那伽罗与巴赫曼尼对峙",
    "era": "德干南印度",
    "time": "14-16世纪",
    "regions": [
      "南亚",
      "德干",
      "南印度"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "毗奢耶那伽罗",
      "巴赫曼尼苏丹国"
    ],
    "summary": "南印度和德干形成强大区域政权对峙，宗教、军事、贸易和地方贵族网络交织。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "timur-delhi",
    "title": "帖木儿洗劫德里",
    "era": "德里苏丹国",
    "time": "1398",
    "regions": [
      "南亚",
      "中亚",
      "北印度"
    ],
    "topics": [
      "战争军事",
      "政权危机"
    ],
    "people": [
      "帖木儿",
      "德里苏丹国"
    ],
    "summary": "帖木儿入侵并洗劫德里，重创苏丹国威信和北印度政治经济。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "lodis-panipat",
    "title": "洛迪王朝与第一次帕尼帕特战役",
    "era": "莫卧儿前夜",
    "time": "1526",
    "regions": [
      "南亚",
      "北印度"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "巴布尔",
      "易卜拉欣·洛迪"
    ],
    "summary": "巴布尔在帕尼帕特击败洛迪苏丹，火器和骑兵战术帮助莫卧儿王朝进入印度。",
    "sourceIds": [
      "india-harvard-timeline"
    ]
  },
  {
    "id": "mughal-founded",
    "title": "莫卧儿帝国建立",
    "era": "莫卧儿帝国",
    "time": "1526",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "巴布尔"
    ],
    "summary": "莫卧儿帝国以中亚-波斯政治文化和印度资源结合，开启北印度新的帝国时代。",
    "sourceIds": [
      "india-loc-country-study",
      "india-harvard-timeline"
    ]
  },
  {
    "id": "sher-shah-suri",
    "title": "舍尔沙改革与莫卧儿中断",
    "era": "莫卧儿帝国",
    "time": "1540-1555",
    "regions": [
      "南亚",
      "北印度"
    ],
    "topics": [
      "制度治理",
      "政权斗争"
    ],
    "people": [
      "舍尔沙",
      "胡马雍"
    ],
    "summary": "舍尔沙短暂取代莫卧儿并强化道路、税收和行政，为后来莫卧儿治理提供经验。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "akbar-consolidation",
    "title": "阿克巴帝国整合",
    "era": "莫卧儿帝国",
    "time": "1556-1605",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "制度治理",
      "文化宗教"
    ],
    "people": [
      "阿克巴"
    ],
    "summary": "阿克巴通过军事扩张、曼萨布制、税制和宗教包容政策整合北印度和部分德干。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "mughal-culture-taj",
    "title": "莫卧儿宫廷文化与泰姬陵",
    "era": "莫卧儿帝国",
    "time": "17世纪",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "建筑艺术"
    ],
    "people": [
      "贾汉吉尔",
      "沙贾汗"
    ],
    "summary": "莫卧儿宫廷绘画、建筑和波斯-印度文化融合达到高峰，泰姬陵成为帝国文化象征。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "aurangzeb-deccan",
    "title": "奥朗则布德干战争",
    "era": "莫卧儿帝国",
    "time": "1658-1707",
    "regions": [
      "南亚",
      "德干",
      "北印度"
    ],
    "topics": [
      "战争军事",
      "政权危机"
    ],
    "people": [
      "奥朗则布",
      "德干苏丹国"
    ],
    "summary": "奥朗则布长期南征扩大帝国疆域，却消耗财政并激化地方、宗教和马拉塔压力。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "maratha-rise",
    "title": "马拉塔势力兴起",
    "era": "区域强权",
    "time": "17世纪后期",
    "regions": [
      "南亚",
      "德干",
      "西印度"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "希瓦吉",
      "马拉塔联盟"
    ],
    "summary": "马拉塔势力从德干山地兴起，以机动作战和地方财政挑战莫卧儿秩序。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "european-trading-posts",
    "title": "欧洲商站进入印度洋",
    "era": "欧洲进入",
    "time": "16-17世纪",
    "regions": [
      "南亚",
      "印度洋",
      "欧洲"
    ],
    "topics": [
      "海上贸易",
      "殖民扩张"
    ],
    "people": [
      "葡萄牙",
      "荷兰",
      "英国东印度公司",
      "法国东印度公司"
    ],
    "summary": "欧洲商人和武装公司在印度洋建立商站，逐步从贸易竞争转向军事和政治干预。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "plassey-1757",
    "title": "普拉西战役",
    "era": "公司统治",
    "time": "1757",
    "regions": [
      "南亚",
      "孟加拉",
      "欧洲"
    ],
    "topics": [
      "战争军事",
      "殖民扩张"
    ],
    "people": [
      "罗伯特·克莱武",
      "孟加拉纳瓦布"
    ],
    "summary": "英国东印度公司在普拉西击败孟加拉纳瓦布，开始把商业公司转化为领土统治力量。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "buxar-diwani",
    "title": "布克萨尔战役与孟加拉税收权",
    "era": "公司统治",
    "time": "1764-1765",
    "regions": [
      "南亚",
      "孟加拉",
      "北印度"
    ],
    "topics": [
      "经济财政",
      "殖民扩张"
    ],
    "people": [
      "英国东印度公司",
      "莫卧儿皇帝"
    ],
    "summary": "东印度公司取得孟加拉、比哈尔和奥里萨税收权，公司财政基础由贸易利润转向土地收入。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "mysore-wars",
    "title": "迈索尔战争",
    "era": "公司统治",
    "time": "1767-1799",
    "regions": [
      "南亚",
      "南印度",
      "欧洲"
    ],
    "topics": [
      "战争军事",
      "殖民扩张"
    ],
    "people": [
      "海德尔·阿里",
      "提普苏丹",
      "英国东印度公司"
    ],
    "summary": "迈索尔与英国公司多次战争，南印度抵抗和欧洲技术、联盟竞争交织。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "anglo-maratha-wars",
    "title": "英马拉塔战争",
    "era": "公司统治",
    "time": "1775-1818",
    "regions": [
      "南亚",
      "德干",
      "北印度"
    ],
    "topics": [
      "战争军事",
      "殖民扩张"
    ],
    "people": [
      "马拉塔联盟",
      "英国东印度公司"
    ],
    "summary": "三次英马拉塔战争后，公司击败最强印度区域联盟，英属印度霸权基本成形。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "sikh-empire",
    "title": "锡克帝国兴起",
    "era": "区域强权",
    "time": "1799-1849",
    "regions": [
      "南亚",
      "旁遮普",
      "印度河"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "兰季特·辛格"
    ],
    "summary": "锡克帝国在旁遮普兴起，短期成为西北印度的重要强权，控制印度河上游战略区域。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "railways-telegraph",
    "title": "铁路、电报与殖民国家能力",
    "era": "殖民印度",
    "time": "1850s以后",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "基础设施",
      "殖民治理"
    ],
    "people": [
      "英国殖民政府",
      "印度劳工"
    ],
    "summary": "铁路、电报和邮政扩展加强殖民统治、商品流通和军事调动，也重塑印度社会空间。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "rebellion-1857",
    "title": "1857年印度大起义",
    "era": "殖民印度",
    "time": "1857-1858",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "战争军事",
      "殖民危机"
    ],
    "people": [
      "印度士兵",
      "英国东印度公司",
      "莫卧儿皇帝巴哈杜尔沙二世"
    ],
    "summary": "印度士兵和多地力量反抗公司统治，起义失败后英国取消公司统治并转入王冠直接统治。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "british-raj",
    "title": "英属印度王冠统治",
    "era": "英属印度",
    "time": "1858",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "殖民治理",
      "政权兴亡"
    ],
    "people": [
      "英国王室",
      "印度总督"
    ],
    "summary": "1858年后印度由英国王冠直接统治，殖民官僚、军队、土邦和铁路财政组成新的帝国治理体系。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "inc-founded",
    "title": "印度国民大会党成立",
    "era": "民族运动",
    "time": "1885",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "民族运动",
      "政治制度"
    ],
    "people": [
      "印度国民大会党"
    ],
    "summary": "印度国民大会党成立，印度民族主义从精英请愿、政治协商逐步走向大众动员。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "bengal-partition-swadeshi",
    "title": "孟加拉分治与抵制运动",
    "era": "民族运动",
    "time": "1905-1911",
    "regions": [
      "南亚",
      "孟加拉"
    ],
    "topics": [
      "民族运动",
      "殖民治理"
    ],
    "people": [
      "英国殖民政府",
      "印度民族主义者"
    ],
    "summary": "英国分治孟加拉激起抵制英货和民族教育运动，民族主义群众化明显加强。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "muslim-league",
    "title": "全印穆斯林联盟成立",
    "era": "民族运动",
    "time": "1906",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "政治制度",
      "民族运动"
    ],
    "people": [
      "全印穆斯林联盟"
    ],
    "summary": "穆斯林联盟成立，殖民印度政治开始更明确呈现宗教共同体代表和权力分配问题。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "gandhi-noncooperation",
    "title": "甘地与非合作运动",
    "era": "民族运动",
    "time": "1919-1922",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "民族运动",
      "社会动员"
    ],
    "people": [
      "甘地",
      "印度国民大会党"
    ],
    "summary": "一战后镇压和罗拉特法激化不满，甘地推动非合作运动，把民族运动扩大到群众层面。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "salt-march",
    "title": "食盐进军",
    "era": "民族运动",
    "time": "1930",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "民族运动",
      "殖民经济"
    ],
    "people": [
      "甘地",
      "英国殖民政府"
    ],
    "summary": "甘地以食盐税为切入口发动非暴力抵抗，把殖民经济控制转化为可见的群众政治议题。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "quit-india",
    "title": "退出印度运动",
    "era": "民族运动",
    "time": "1942",
    "regions": [
      "南亚",
      "印度次大陆",
      "印度洋"
    ],
    "topics": [
      "民族运动",
      "二战"
    ],
    "people": [
      "甘地",
      "国大党",
      "英国殖民政府"
    ],
    "summary": "二战期间国大党要求英国立即退出印度，殖民政府镇压领导层但独立压力继续上升。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "partition-independence",
    "title": "印巴分治与独立",
    "era": "现代南亚",
    "time": "1947",
    "regions": [
      "南亚",
      "印度",
      "巴基斯坦"
    ],
    "topics": [
      "民族国家",
      "社会危机"
    ],
    "people": [
      "尼赫鲁",
      "真纳",
      "蒙巴顿"
    ],
    "summary": "英国撤离伴随印巴分治，印度和巴基斯坦独立，同时出现大规模迁徙和族群暴力。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "constitution-republic",
    "title": "印度共和国宪法生效",
    "era": "现代印度",
    "time": "1950",
    "regions": [
      "南亚",
      "印度"
    ],
    "topics": [
      "制度治理",
      "民族国家"
    ],
    "people": [
      "尼赫鲁",
      "安贝德卡尔"
    ],
    "summary": "印度宪法生效，确立联邦、议会民主、基本权利和共和国体制。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "nonaligned-bandung",
    "title": "不结盟与万隆会议",
    "era": "冷战南亚",
    "time": "1955-1961",
    "regions": [
      "南亚",
      "印度",
      "亚非会议"
    ],
    "topics": [
      "边疆外交",
      "全球冷战"
    ],
    "people": [
      "尼赫鲁",
      "不结盟国家"
    ],
    "summary": "印度在万隆会议和不结盟运动中强调反殖民、自主外交和第三世界合作。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "green-revolution",
    "title": "绿色革命",
    "era": "现代印度",
    "time": "1960s-1970s",
    "regions": [
      "南亚",
      "印度"
    ],
    "topics": [
      "农业",
      "社会经济"
    ],
    "people": [
      "印度政府",
      "农民",
      "农业科学家"
    ],
    "summary": "高产品种、灌溉和化肥推广提高粮食产量，也带来区域不平衡和生态压力。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "bangladesh-war",
    "title": "孟加拉国独立战争与印巴战争",
    "era": "现代南亚",
    "time": "1971",
    "regions": [
      "南亚",
      "印度",
      "巴基斯坦",
      "孟加拉国"
    ],
    "topics": [
      "战争军事",
      "民族国家"
    ],
    "people": [
      "印度",
      "巴基斯坦",
      "孟加拉民族主义者"
    ],
    "summary": "东巴危机、难民潮和印巴战争导致孟加拉国独立，南亚地缘格局重组。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "economic-liberalization-1991",
    "title": "印度1991年经济改革",
    "era": "现代印度",
    "time": "1991",
    "regions": [
      "南亚",
      "印度"
    ],
    "topics": [
      "经济财政",
      "制度治理"
    ],
    "people": [
      "纳拉辛哈·拉奥",
      "曼莫汉·辛格"
    ],
    "summary": "国际收支危机推动印度放松许可证制度、降低关税和引入市场化改革，经济发展路径转折。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "nuclear-tests-1998",
    "title": "印度核试验与南亚核化",
    "era": "现代南亚",
    "time": "1998",
    "regions": [
      "南亚",
      "印度",
      "巴基斯坦"
    ],
    "topics": [
      "战争军事",
      "边疆外交"
    ],
    "people": [
      "印度政府",
      "巴基斯坦政府"
    ],
    "summary": "印度进行核试验后巴基斯坦跟进，南亚安全格局进入核威慑时代。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  },
  {
    "id": "india-21st-century",
    "title": "二十一世纪印度崛起与社会挑战",
    "era": "现代印度",
    "time": "21世纪",
    "regions": [
      "南亚",
      "印度",
      "印度洋"
    ],
    "topics": [
      "经济财政",
      "社会结构"
    ],
    "people": [
      "印度政府",
      "印度社会"
    ],
    "summary": "印度在服务业、技术、人口规模和印太战略中影响上升，同时面对不平等、宗教政治、城市化和边疆安全挑战。",
    "sourceIds": [
      "india-loc-country-study"
    ]
  }
];
  window.INDIAN_SUBCONTINENT_EVENTS = items.map(event);
})();
