(() => {
  const dynastyId = "southeast-asia";
  const dynasty = "东南亚地区";
  const sources = window.SOUTHEAST_ASIA_SOURCES || [];

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
    const sourceIds = item.sourceIds || ["sea-met-1000-1400"];
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
    "id": "sea-neolithic-austroasiatic",
    "title": "新石器农业与大陆东南亚聚落",
    "era": "史前东南亚",
    "time": "约前3000-前1000",
    "regions": [
      "东南亚",
      "大陆东南亚",
      "海岛东南亚",
      "南海",
      "印度洋"
    ],
    "topics": [
      "农业扩张",
      "考古文化"
    ],
    "people": [
      "早期农耕人群"
    ],
    "summary": "稻作、村落和陶器技术在大陆东南亚扩展，为后来的青铜文化和早期政权奠定基础。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-dongson-bronze",
    "title": "东山文化与青铜鼓网络",
    "era": "青铜铁器时代",
    "time": "约前600-公元200",
    "regions": [
      "东南亚",
      "越南北部",
      "红河"
    ],
    "topics": [
      "考古文化",
      "海陆贸易"
    ],
    "people": [
      "东山文化人群"
    ],
    "summary": "东山铜鼓和青铜器网络连接红河、岭南、岛屿东南亚，显示早期东南亚已形成广域交流圈。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-han-nanyue-vietnam",
    "title": "汉朝控制交趾与越南北部",
    "era": "越南北属",
    "time": "前111以后",
    "regions": [
      "东南亚",
      "越南北部",
      "中国"
    ],
    "topics": [
      "边疆治理",
      "跨区域交流"
    ],
    "people": [
      "汉朝",
      "交趾地方社会"
    ],
    "summary": "汉朝吞并南越后控制红河地区，越南北部进入长期中国郡县统治和地方抵抗并存阶段。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-trung-sisters",
    "title": "征氏姐妹起义",
    "era": "越南北属",
    "time": "40-43",
    "regions": [
      "东南亚",
      "越南北部",
      "中国"
    ],
    "topics": [
      "反抗运动",
      "边疆治理"
    ],
    "people": [
      "征侧",
      "征贰",
      "东汉"
    ],
    "summary": "征氏姐妹反抗东汉统治，虽被镇压，但成为越南历史记忆中反外来统治的重要象征。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-funan-maritime",
    "title": "扶南与早期海上国家",
    "era": "早期国家",
    "time": "1-6世纪",
    "regions": [
      "东南亚",
      "湄公河",
      "印度洋",
      "南海"
    ],
    "topics": [
      "海上贸易",
      "国家形成"
    ],
    "people": [
      "扶南"
    ],
    "summary": "湄公河下游扶南依托港口、河网和印度洋贸易兴起，是东南亚早期国家和印度化文化的重要节点。",
    "sourceIds": [
      "sea-britannica-history",
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-indianization",
    "title": "印度宗教与文字进入东南亚",
    "era": "早期国家",
    "time": "1-7世纪",
    "regions": [
      "东南亚",
      "大陆东南亚",
      "海岛东南亚",
      "南海",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "跨区域交流"
    ],
    "people": [
      "婆罗门",
      "佛教僧侣",
      "本地王权"
    ],
    "summary": "印度文字、梵语、佛教、印度教和王权仪式被本地政权选择性吸收，形成东南亚多样的印度化国家。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-champa",
    "title": "占婆沿海政权形成",
    "era": "早期国家",
    "time": "2世纪以后",
    "regions": [
      "东南亚",
      "越南中部",
      "南海"
    ],
    "topics": [
      "海上贸易",
      "国家形成"
    ],
    "people": [
      "占婆诸王"
    ],
    "summary": "越南中部占婆政权依托海上贸易、印度教文化和沿海城邦网络发展，与越南、中国和高棉长期互动。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-pyu-dvaravati",
    "title": "骠国与堕罗钵底文化圈",
    "era": "早期国家",
    "time": "5-9世纪",
    "regions": [
      "东南亚",
      "缅甸",
      "泰国"
    ],
    "topics": [
      "国家形成",
      "文化宗教"
    ],
    "people": [
      "骠城邦",
      "孟人共同体"
    ],
    "summary": "伊洛瓦底和昭披耶流域出现骠国、堕罗钵底等佛教城邦网络，展示大陆东南亚多中心发展。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-chenla-khmer",
    "title": "真腊与高棉早期整合",
    "era": "高棉前史",
    "time": "6-8世纪",
    "regions": [
      "东南亚",
      "柬埔寨",
      "湄公河"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "真腊",
      "高棉首领"
    ],
    "summary": "真腊取代扶南传统并发展内陆权力，为后来吴哥高棉帝国奠定政治和宗教基础。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-srivijaya-rise",
    "title": "室利佛逝兴起",
    "era": "海岛东南亚",
    "time": "7世纪",
    "regions": [
      "东南亚",
      "苏门答腊",
      "马六甲海峡"
    ],
    "topics": [
      "海上贸易",
      "文化宗教"
    ],
    "people": [
      "室利佛逝"
    ],
    "summary": "室利佛逝控制马六甲海峡和佛教学术网络，成为连接中国、印度和海岛东南亚的海上强权。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-yijing-srivijaya",
    "title": "义净停留室利佛逝",
    "era": "佛教海路",
    "time": "671以后",
    "regions": [
      "东南亚",
      "中国",
      "印度",
      "苏门答腊"
    ],
    "topics": [
      "文化宗教",
      "海上贸易"
    ],
    "people": [
      "义净",
      "室利佛逝僧团"
    ],
    "summary": "唐僧义净赴印度途中停留室利佛逝，说明海上佛教路线和马六甲中转地的重要性。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-borobudur-sailendra",
    "title": "夏连特拉与婆罗浮屠",
    "era": "爪哇古典期",
    "time": "8-9世纪",
    "regions": [
      "东南亚",
      "爪哇"
    ],
    "topics": [
      "文化宗教",
      "建筑艺术"
    ],
    "people": [
      "夏连特拉王朝"
    ],
    "summary": "中爪哇夏连特拉王朝修建婆罗浮屠，体现大乘佛教、王权和火山农业区资源的结合。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-angkor-founded",
    "title": "阇耶跋摩二世与吴哥时代开端",
    "era": "吴哥帝国",
    "time": "802",
    "regions": [
      "东南亚",
      "柬埔寨",
      "湄公河"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "阇耶跋摩二世"
    ],
    "summary": "阇耶跋摩二世建立高棉王权神圣化传统，吴哥时代由此展开。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-angkor-hydraulic",
    "title": "吴哥水利与都城体系",
    "era": "吴哥帝国",
    "time": "9-13世纪",
    "regions": [
      "东南亚",
      "柬埔寨"
    ],
    "topics": [
      "城市化",
      "制度治理"
    ],
    "people": [
      "高棉王权"
    ],
    "summary": "吴哥通过水库、运河、稻作和寺庙城市组织国家资源，成为前现代东南亚最复杂的城市区域之一。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-dai-viet-independence",
    "title": "越南脱离中国直接统治",
    "era": "大越形成",
    "time": "938",
    "regions": [
      "东南亚",
      "越南北部",
      "中国"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "吴权",
      "南汉"
    ],
    "summary": "吴权在白藤江击败南汉，越南北部结束长期中国直接统治，开启自主王朝传统。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-ly-dynasty",
    "title": "李朝建国与升龙",
    "era": "大越王朝",
    "time": "1009-1010",
    "regions": [
      "东南亚",
      "越南北部"
    ],
    "topics": [
      "政权兴亡",
      "城市"
    ],
    "people": [
      "李公蕴"
    ],
    "summary": "李朝建立并迁都升龙，越南国家制度、佛教政治和红河平原治理进入稳定阶段。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-chola-raid-srivijaya",
    "title": "朱罗袭击室利佛逝",
    "era": "印度洋冲击",
    "time": "1025",
    "regions": [
      "东南亚",
      "南亚",
      "马六甲海峡"
    ],
    "topics": [
      "战争军事",
      "海上贸易"
    ],
    "people": [
      "朱罗王朝",
      "室利佛逝"
    ],
    "summary": "南印度朱罗舰队袭击室利佛逝，打破马六甲海峡秩序，显示印度洋海权可以直接影响东南亚。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-pagan-anawrahta",
    "title": "阿奴律陀与蒲甘王国",
    "era": "蒲甘",
    "time": "1044-1077",
    "regions": [
      "东南亚",
      "缅甸"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "阿奴律陀"
    ],
    "summary": "阿奴律陀建立蒲甘强权并护持上座部佛教，缅甸国家和佛教传统的重要基础形成。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-angkor-wat",
    "title": "吴哥窟建造",
    "era": "吴哥帝国",
    "time": "1113-1150前后",
    "regions": [
      "东南亚",
      "柬埔寨"
    ],
    "topics": [
      "建筑艺术",
      "文化宗教"
    ],
    "people": [
      "苏利耶跋摩二世"
    ],
    "summary": "苏利耶跋摩二世修建吴哥窟，把毗湿奴信仰、王权和帝国资源集中在宏大寺庙工程中。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-cham-sack-angkor",
    "title": "占婆攻入吴哥",
    "era": "吴哥帝国",
    "time": "1177",
    "regions": [
      "东南亚",
      "柬埔寨",
      "越南中部"
    ],
    "topics": [
      "战争军事",
      "政权危机"
    ],
    "people": [
      "占婆",
      "高棉帝国"
    ],
    "summary": "占婆军一度攻入吴哥，暴露高棉帝国水陆边疆和王权防御危机。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-jayavarman-vii",
    "title": "阇耶跋摩七世与吴哥通王城",
    "era": "吴哥帝国",
    "time": "1181-约1218",
    "regions": [
      "东南亚",
      "柬埔寨"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "阇耶跋摩七世"
    ],
    "summary": "阇耶跋摩七世恢复高棉力量，建设吴哥通王城和巴戎寺，并短期推崇大乘佛教。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-tran-mongol",
    "title": "陈朝抵抗蒙古元军",
    "era": "大越王朝",
    "time": "1258-1288",
    "regions": [
      "东南亚",
      "越南",
      "元朝"
    ],
    "topics": [
      "战争军事",
      "跨区域交流"
    ],
    "people": [
      "陈朝",
      "忽必烈"
    ],
    "summary": "大越陈朝多次抵抗蒙古元军，白藤江胜利成为越南独立和东亚反蒙古扩张的重要节点。",
    "sourceIds": [
      "sea-met-1000-1400",
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-mongol-java",
    "title": "元军远征爪哇失败",
    "era": "海岛东南亚",
    "time": "1293",
    "regions": [
      "东南亚",
      "爪哇",
      "元朝"
    ],
    "topics": [
      "战争军事",
      "跨区域交流"
    ],
    "people": [
      "元朝",
      "爪哇诸王"
    ],
    "summary": "元军远征爪哇失败，间接促成满者伯夷建立，显示蒙古帝国海上扩张的边界。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-majapahit-founded",
    "title": "满者伯夷建立",
    "era": "满者伯夷",
    "time": "1293",
    "regions": [
      "东南亚",
      "爪哇",
      "海岛东南亚"
    ],
    "topics": [
      "政权兴亡",
      "海上贸易"
    ],
    "people": [
      "罗登·韦查耶"
    ],
    "summary": "满者伯夷在爪哇建立，后来成为海岛东南亚重要帝国和贸易网络中心。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-thai-sukhothai",
    "title": "素可泰与泰人王国兴起",
    "era": "泰人王国",
    "time": "13世纪",
    "regions": [
      "东南亚",
      "泰国"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "素可泰王国"
    ],
    "summary": "泰人政权在高棉影响衰退中兴起，素可泰成为泰国历史记忆中的早期王国。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-ayutthaya-founded",
    "title": "阿瑜陀耶王国建立",
    "era": "泰人王国",
    "time": "1351",
    "regions": [
      "东南亚",
      "泰国",
      "昭披耶河"
    ],
    "topics": [
      "政权兴亡",
      "海上贸易"
    ],
    "people": [
      "拉玛铁菩提一世"
    ],
    "summary": "阿瑜陀耶在昭披耶河流域兴起，结合内陆稻作、海贸和外交，成为大陆东南亚强权。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-lan-xang",
    "title": "澜沧王国建立",
    "era": "老挝",
    "time": "1353",
    "regions": [
      "东南亚",
      "老挝",
      "湄公河"
    ],
    "topics": [
      "政权兴亡",
      "文化宗教"
    ],
    "people": [
      "法昂"
    ],
    "summary": "法昂建立澜沧王国并推崇上座部佛教，老挝历史主线由此成形。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-majapahit-peak",
    "title": "满者伯夷高峰",
    "era": "满者伯夷",
    "time": "14世纪中后期",
    "regions": [
      "东南亚",
      "爪哇",
      "马来群岛"
    ],
    "topics": [
      "政权兴亡",
      "海上贸易"
    ],
    "people": [
      "哈亚姆·武禄",
      "加查·马达"
    ],
    "summary": "满者伯夷在14世纪达到高峰，爪哇宫廷、海贸和附属网络影响广泛。",
    "sourceIds": [
      "sea-met-1000-1400"
    ]
  },
  {
    "id": "sea-zhenghe-malacca",
    "title": "郑和下西洋与马六甲兴起",
    "era": "海上贸易",
    "time": "15世纪初",
    "regions": [
      "东南亚",
      "中国",
      "马六甲海峡"
    ],
    "topics": [
      "海上贸易",
      "跨区域交流"
    ],
    "people": [
      "郑和",
      "马六甲苏丹国"
    ],
    "summary": "明朝郑和航海强化南海-印度洋交通，马六甲在朝贡和贸易网络中快速兴起。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-islam-malacca",
    "title": "马六甲苏丹国与伊斯兰海贸",
    "era": "伊斯兰化",
    "time": "15世纪",
    "regions": [
      "东南亚",
      "马六甲",
      "印度洋"
    ],
    "topics": [
      "文化宗教",
      "海上贸易"
    ],
    "people": [
      "马六甲苏丹国",
      "穆斯林商人"
    ],
    "summary": "马六甲成为穆斯林商人和区域贸易枢纽，伊斯兰在海岛与半岛东南亚扩散。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-vietnam-le-champa",
    "title": "黎朝南进与占婆衰落",
    "era": "大越扩张",
    "time": "1471",
    "regions": [
      "东南亚",
      "越南",
      "占婆"
    ],
    "topics": [
      "战争军事",
      "边疆扩张"
    ],
    "people": [
      "黎圣宗",
      "占婆"
    ],
    "summary": "大越攻破占婆都城，越南南进加速，中部沿海政治文化格局发生重大转折。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-portuguese-malacca",
    "title": "葡萄牙攻占马六甲",
    "era": "欧洲进入",
    "time": "1511",
    "regions": [
      "东南亚",
      "马六甲",
      "欧洲"
    ],
    "topics": [
      "殖民扩张",
      "海上贸易"
    ],
    "people": [
      "葡萄牙",
      "马六甲苏丹国"
    ],
    "summary": "葡萄牙攻占马六甲，欧洲武装贸易力量正式控制东南亚关键海峡据点。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-spanish-philippines",
    "title": "西班牙征服菲律宾与马尼拉",
    "era": "欧洲进入",
    "time": "1565-1571",
    "regions": [
      "东南亚",
      "菲律宾",
      "太平洋"
    ],
    "topics": [
      "殖民扩张",
      "全球贸易"
    ],
    "people": [
      "西班牙",
      "马尼拉"
    ],
    "summary": "西班牙在菲律宾建立殖民统治和马尼拉据点，把东南亚接入美洲白银和太平洋贸易。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-dutch-voc",
    "title": "荷兰东印度公司进入群岛",
    "era": "欧洲公司统治",
    "time": "1602以后",
    "regions": [
      "东南亚",
      "印尼群岛",
      "欧洲"
    ],
    "topics": [
      "殖民扩张",
      "海上贸易"
    ],
    "people": [
      "荷兰东印度公司"
    ],
    "summary": "荷兰东印度公司以香料贸易为核心扩张武装据点，逐步建立对印尼群岛的殖民控制。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-batavia",
    "title": "巴达维亚成为荷兰中心",
    "era": "欧洲公司统治",
    "time": "1619",
    "regions": [
      "东南亚",
      "爪哇",
      "欧洲"
    ],
    "topics": [
      "殖民扩张",
      "城市"
    ],
    "people": [
      "荷兰东印度公司"
    ],
    "summary": "荷兰在雅加达建立巴达维亚，作为控制爪哇、香料群岛和亚洲贸易的殖民城市中心。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-burma-toungoo",
    "title": "东吁王朝整合缅甸",
    "era": "缅甸王朝",
    "time": "16世纪",
    "regions": [
      "东南亚",
      "缅甸"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "东吁王朝"
    ],
    "summary": "东吁王朝整合伊洛瓦底流域并向周边扩张，缅甸成为大陆东南亚强权。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-thai-burmese-wars",
    "title": "缅暹战争与阿瑜陀耶陷落",
    "era": "大陆强权竞争",
    "time": "1767",
    "regions": [
      "东南亚",
      "泰国",
      "缅甸"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "贡榜王朝",
      "阿瑜陀耶"
    ],
    "summary": "缅甸攻陷阿瑜陀耶，暹罗旧王都毁灭，随后吞武里和曼谷王朝重建暹罗国家。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-nguyen-vietnam",
    "title": "阮朝统一越南",
    "era": "越南王朝",
    "time": "1802",
    "regions": [
      "东南亚",
      "越南"
    ],
    "topics": [
      "政权兴亡",
      "制度治理"
    ],
    "people": [
      "阮福映",
      "阮朝"
    ],
    "summary": "阮福映建立阮朝并统一越南，越南国家范围从红河延伸到湄公河三角洲。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-british-singapore",
    "title": "英国建立新加坡据点",
    "era": "欧洲殖民",
    "time": "1819",
    "regions": [
      "东南亚",
      "新加坡",
      "马六甲海峡"
    ],
    "topics": [
      "殖民扩张",
      "海上贸易"
    ],
    "people": [
      "莱佛士",
      "英国东印度公司"
    ],
    "summary": "英国建立新加坡自由港，马六甲海峡贸易秩序和英帝国海上网络进一步重组。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-anglo-burmese",
    "title": "英缅战争与缅甸殖民化",
    "era": "欧洲殖民",
    "time": "1824-1885",
    "regions": [
      "东南亚",
      "缅甸",
      "英属印度"
    ],
    "topics": [
      "战争军事",
      "殖民扩张"
    ],
    "people": [
      "英国",
      "贡榜王朝"
    ],
    "summary": "三次英缅战争后英国吞并缅甸，将其纳入英属印度和殖民经济体系。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-french-indochina",
    "title": "法属印度支那形成",
    "era": "欧洲殖民",
    "time": "1858-1893",
    "regions": [
      "东南亚",
      "越南",
      "柬埔寨",
      "老挝"
    ],
    "topics": [
      "殖民扩张",
      "制度治理"
    ],
    "people": [
      "法国",
      "阮朝",
      "柬埔寨王室"
    ],
    "summary": "法国通过战争、保护国和行政整合控制越南、柬埔寨、老挝，法属印度支那形成。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-siam-reforms",
    "title": "暹罗改革与保持独立",
    "era": "近代暹罗",
    "time": "19世纪后期",
    "regions": [
      "东南亚",
      "泰国"
    ],
    "topics": [
      "制度治理",
      "边疆外交"
    ],
    "people": [
      "拉玛四世",
      "拉玛五世"
    ],
    "summary": "暹罗通过外交平衡、行政改革和边疆让步，在英法夹击中维持名义独立。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-philippine-revolution",
    "title": "菲律宾革命",
    "era": "民族运动",
    "time": "1896-1898",
    "regions": [
      "东南亚",
      "菲律宾",
      "西班牙"
    ],
    "topics": [
      "民族运动",
      "殖民危机"
    ],
    "people": [
      "卡蒂普南",
      "黎刹",
      "阿奎纳多"
    ],
    "summary": "菲律宾反西班牙革命爆发，殖民秩序动摇，但随后美国介入改变独立进程。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-us-philippines",
    "title": "美西战争后美国统治菲律宾",
    "era": "美国殖民",
    "time": "1898-1902",
    "regions": [
      "东南亚",
      "菲律宾",
      "美国"
    ],
    "topics": [
      "殖民扩张",
      "战争军事"
    ],
    "people": [
      "美国",
      "菲律宾共和国"
    ],
    "summary": "美国从西班牙手中取得菲律宾，并通过战争压制菲律宾共和国，东南亚进入美国殖民体系。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-indonesia-nationalism",
    "title": "印尼民族主义兴起",
    "era": "民族运动",
    "time": "1908-1928",
    "regions": [
      "东南亚",
      "印尼"
    ],
    "topics": [
      "民族运动",
      "殖民治理"
    ],
    "people": [
      "布迪·乌托莫",
      "印尼青年"
    ],
    "summary": "荷属东印度出现现代民族组织和青年誓言，印尼共同体意识逐步形成。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-vietnam-nationalism",
    "title": "越南民族主义与革命组织",
    "era": "民族运动",
    "time": "20世纪初",
    "regions": [
      "东南亚",
      "越南",
      "法国"
    ],
    "topics": [
      "民族运动",
      "殖民治理"
    ],
    "people": [
      "潘佩珠",
      "胡志明"
    ],
    "summary": "越南反殖民运动从维新、东游到共产主义组织多线发展，法国殖民秩序面临持续挑战。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-japanese-occupation",
    "title": "日本占领东南亚",
    "era": "二战东南亚",
    "time": "1941-1945",
    "regions": [
      "东南亚",
      "日本",
      "太平洋"
    ],
    "topics": [
      "战争军事",
      "殖民危机"
    ],
    "people": [
      "日本帝国",
      "东南亚民族主义者"
    ],
    "summary": "日本击败欧美殖民军并占领东南亚，既带来残酷统治，也削弱欧洲殖民权威。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-august-revolutions",
    "title": "1945年前后东南亚独立浪潮",
    "era": "战后独立",
    "time": "1945",
    "regions": [
      "东南亚",
      "越南",
      "印尼"
    ],
    "topics": [
      "民族运动",
      "政权兴亡"
    ],
    "people": [
      "胡志明",
      "苏加诺",
      "哈达"
    ],
    "summary": "日本投降后，越南和印尼等地迅速宣布独立，战后东南亚进入反殖民战争和国家建构阶段。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-indonesia-independence",
    "title": "印尼独立战争",
    "era": "战后独立",
    "time": "1945-1949",
    "regions": [
      "东南亚",
      "印尼",
      "荷兰"
    ],
    "topics": [
      "战争军事",
      "民族国家"
    ],
    "people": [
      "苏加诺",
      "荷兰"
    ],
    "summary": "印尼共和国与荷兰殖民复辟力量战争，最终获得国际承认，海岛东南亚最大国家诞生。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-first-indochina-war",
    "title": "第一次印度支那战争",
    "era": "冷战东南亚",
    "time": "1946-1954",
    "regions": [
      "东南亚",
      "越南",
      "法国"
    ],
    "topics": [
      "战争军事",
      "全球冷战"
    ],
    "people": [
      "越盟",
      "法国"
    ],
    "summary": "越盟与法国战争以奠边府和日内瓦会议收束，越南暂时分裂，冷战格局深入东南亚。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-geneva-1954",
    "title": "日内瓦会议与越南分裂",
    "era": "冷战东南亚",
    "time": "1954",
    "regions": [
      "东南亚",
      "越南",
      "全球冷战"
    ],
    "topics": [
      "边疆外交",
      "全球冷战"
    ],
    "people": [
      "越南民主共和国",
      "法国",
      "美国"
    ],
    "summary": "日内瓦安排结束法国战争，却形成南北越政治分裂，为越南战争埋下条件。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-bandung",
    "title": "万隆会议与亚非团结",
    "era": "冷战东南亚",
    "time": "1955",
    "regions": [
      "东南亚",
      "印尼",
      "亚非会议"
    ],
    "topics": [
      "边疆外交",
      "反殖民"
    ],
    "people": [
      "苏加诺",
      "亚非国家"
    ],
    "summary": "万隆会议在印尼召开，反殖民、不结盟和亚非合作成为冷战第三世界政治的重要声音。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-malaysia-formation",
    "title": "马来西亚成立",
    "era": "战后国家建构",
    "time": "1963",
    "regions": [
      "东南亚",
      "马来西亚",
      "新加坡",
      "婆罗洲"
    ],
    "topics": [
      "民族国家",
      "边疆外交"
    ],
    "people": [
      "马来亚",
      "沙巴",
      "砂拉越",
      "新加坡"
    ],
    "summary": "马来亚、沙巴、砂拉越和新加坡组成马来西亚，族群、联邦和区域安全问题交织。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-vietnam-war",
    "title": "越南战争全面升级",
    "era": "冷战东南亚",
    "time": "1960s-1975",
    "regions": [
      "东南亚",
      "越南",
      "美国",
      "中国",
      "苏联"
    ],
    "topics": [
      "战争军事",
      "全球冷战"
    ],
    "people": [
      "北越",
      "南越",
      "美国"
    ],
    "summary": "越南战争把民族统一、冷战代理冲突和美国军事介入结合，深刻影响整个东南亚。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-asean-founded",
    "title": "东盟成立",
    "era": "区域组织",
    "time": "1967",
    "regions": [
      "东南亚",
      "东盟"
    ],
    "topics": [
      "区域合作",
      "全球冷战"
    ],
    "people": [
      "印尼",
      "马来西亚",
      "菲律宾",
      "新加坡",
      "泰国"
    ],
    "summary": "五国成立东盟，试图在冷战、内部叛乱和区域矛盾中建立合作框架。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  },
  {
    "id": "sea-khmer-rouge",
    "title": "红色高棉统治与柬埔寨灾难",
    "era": "冷战东南亚",
    "time": "1975-1979",
    "regions": [
      "东南亚",
      "柬埔寨"
    ],
    "topics": [
      "社会危机",
      "战争军事"
    ],
    "people": [
      "红色高棉",
      "柬埔寨民众"
    ],
    "summary": "红色高棉夺取柬埔寨后实行极端社会改造，造成大规模死亡和国家崩溃。",
    "sourceIds": [
      "sea-britannica-history"
    ]
  },
  {
    "id": "sea-vietnam-cambodia-war",
    "title": "越南进入柬埔寨与中越战争背景",
    "era": "冷战东南亚",
    "time": "1978-1979",
    "regions": [
      "东南亚",
      "越南",
      "柬埔寨",
      "中国"
    ],
    "topics": [
      "战争军事",
      "全球冷战"
    ],
    "people": [
      "越南",
      "红色高棉",
      "中国"
    ],
    "summary": "越南推翻红色高棉，引发地区和大国对立，并与1979年中越战争背景相连。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-doi-moi",
    "title": "越南革新开放",
    "era": "改革时代",
    "time": "1986",
    "regions": [
      "东南亚",
      "越南"
    ],
    "topics": [
      "经济财政",
      "制度治理"
    ],
    "people": [
      "越南共产党"
    ],
    "summary": "越南推行革新开放，从计划经济转向市场化改革和对外开放。",
    "sourceIds": [
      "sea-columbia-topic"
    ]
  },
  {
    "id": "sea-asean-expansion",
    "title": "东盟扩大到大陆东南亚",
    "era": "区域组织",
    "time": "1990s",
    "regions": [
      "东南亚",
      "东盟"
    ],
    "topics": [
      "区域合作",
      "边疆外交"
    ],
    "people": [
      "东盟成员国"
    ],
    "summary": "冷战结束后越南、老挝、缅甸和柬埔寨加入东盟，区域组织覆盖更完整。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  },
  {
    "id": "sea-asian-financial-crisis",
    "title": "亚洲金融危机",
    "era": "现代东南亚",
    "time": "1997",
    "regions": [
      "东南亚",
      "泰国",
      "印尼",
      "马来西亚"
    ],
    "topics": [
      "经济财政",
      "社会危机"
    ],
    "people": [
      "泰国",
      "印尼",
      "国际金融市场"
    ],
    "summary": "金融危机从泰铢危机扩散，重创东南亚经济并引发印尼苏哈托政权倒台。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  },
  {
    "id": "sea-timor-leste",
    "title": "东帝汶独立",
    "era": "现代东南亚",
    "time": "1999-2002",
    "regions": [
      "东南亚",
      "东帝汶",
      "印尼"
    ],
    "topics": [
      "民族国家",
      "边疆外交"
    ],
    "people": [
      "东帝汶民族主义者",
      "印尼"
    ],
    "summary": "东帝汶经公投和国际干预脱离印尼，成为东南亚最年轻国家之一。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  },
  {
    "id": "sea-myanmar-2021",
    "title": "缅甸2021年政变与东盟危机",
    "era": "现代东南亚",
    "time": "2021以后",
    "regions": [
      "东南亚",
      "缅甸",
      "东盟"
    ],
    "topics": [
      "政权危机",
      "区域合作"
    ],
    "people": [
      "缅甸军方",
      "民选政府",
      "东盟"
    ],
    "summary": "缅甸军方政变引发内战和人道危机，也考验东盟不干涉原则和区域协调能力。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  },
  {
    "id": "sea-21st-century-maritime",
    "title": "二十一世纪东南亚海洋与供应链位置",
    "era": "现代东南亚",
    "time": "21世纪",
    "regions": [
      "东南亚",
      "南海",
      "马六甲海峡"
    ],
    "topics": [
      "海上贸易",
      "边疆外交"
    ],
    "people": [
      "东盟",
      "中国",
      "美国",
      "区域国家"
    ],
    "summary": "东南亚处在南海、马六甲和全球供应链关键位置，经济一体化与大国竞争同时增强。",
    "sourceIds": [
      "sea-asean-crs"
    ]
  }
];
  window.SOUTHEAST_ASIA_EVENTS = items.map(event);
})();
