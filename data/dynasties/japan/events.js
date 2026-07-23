(() => {
  const dynastyId = "japan";
  const dynasty = "日本";
  const sources = window.JAPAN_SOURCES || [];

  function people(names, title) {
    return (names || []).map((name) => ({
      name,
      role: "关键人物/群体",
      years: "",
      color: "var(--accent-gold)",
      bio: `${name}需要放在“${title}”的具体制度、战争、外交或社会结构中理解，不能只当作孤立人物记忆。`,
      events: [title]
    }));
  }

  function sourceFor(item) {
    if (item.time.includes("前") || item.era === "绳文" || item.era === "弥生") return ["japan-met-yayoi", "japan-columbia-timeline"];
    if (["飞鸟", "飞鸟/奈良", "奈良", "平安"].some((era) => item.era.includes(era))) return ["japan-met-500-1000", "japan-columbia-timeline"];
    if (["明治", "大正", "昭和前期", "战后", "平成", "令和", "幕末"].some((era) => item.era.includes(era))) return ["japan-ndl-modern", "japan-loc-country-study"];
    return ["japan-loc-country-study", "japan-columbia-timeline"];
  }

  function buildProcess(item) {
    return [
      {
        time: item.time,
        title: "结构背景",
        description: `${item.title}要放在日本列岛内部社会变化和东亚区域互动中理解；此前的土地制度、地方豪族、宫廷权威、武士集团、海外压力或经济结构，已经为这一节点积累了条件。`
      },
      {
        time: item.time,
        title: "事件推进",
        description: `${item.summary} 事件推进中，相关人物、朝廷、幕府、大名、军部、民众或外部势力重新调整关系，权力和资源分配随之改变。`
      },
      {
        time: item.time,
        title: "主线影响",
        description: `${item.title}的意义不只在当年发生了什么，而在于它怎样推动日本从部落联盟、律令国家、武家政权、幕藩体制、近代国家到战后国家的连续转型。`
      }
    ];
  }

  function event(item) {
    const sourceIds = item.sourceIds || sourceFor(item);
    return {
      id: item.id,
      dynastyId,
      title: item.title,
      aliases: item.aliases || [],
      era: item.era,
      period: dynasty,
      time: item.time,
      regions: item.regions || ["东亚", "日本列岛"],
      topics: item.topics || [],
      summary: item.summary,
      bookmarked: false,
      people: people(item.people, item.title),
      relations: item.relations || [],
      background: item.background || [`${item.title}要放在日本历史主线中理解：列岛地理、稻作与首领制、天皇与贵族、武士与幕府、东亚秩序、全球压力和现代国家建设会持续交织。`],
      process: item.process || buildProcess(item),
      results: item.results || [item.summary],
      debates: [{ view: "学习提示", content: "注意区分考古推断、后世编纂史书、近现代档案和现代研究结论；本页面先给主线白话释义，不放难读原文。" }],
      claims: [{
        statement: item.summary,
        status: "较稳妥",
        statusType: "stable",
        confidence: item.confidence || "medium",
        sourceIds,
        note: "首版按高可信公开资料和通史框架整理，后续可继续细化到原始档案、考古报告或专门研究。"
      }],
      citations: [{
        sourceId: sourceIds[0],
        reference: item.reference || "日本史公开权威资料入口",
        status: "主线版",
        plainText: `白话理解：${item.summary}`,
        note: "古代部分重考古和外部文献互校，近现代部分优先使用档案与通史入口。"
      }],
      causalChain: item.causalChain || [],
      sources,
      reviewQuestions: [{
        type: "主线理解",
        question: `${item.title}为什么应放入日本历史主线？`,
        answer: "因为它改变了日本列岛内部权力结构、社会制度、文化方向或对外关系，能够帮助理解前后阶段的因果转折。"
      }],
      notes: [],
      dynasty,
      topicIds: item.topicIds || []
    };
  }

  const items = [
  {
    "id": "jp-jomon-pottery-settlements",
    "title": "绳文陶器与定居生活",
    "era": "绳文",
    "time": "约前14500-前300",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "考古文化",
      "社会经济"
    ],
    "people": [
      "绳文人群"
    ],
    "summary": "日本列岛出现早期陶器、贝冢、竖穴住居和长期聚落，说明绳文社会并非简单流动采猎，而有复杂的资源利用和礼仪生活。"
  },
  {
    "id": "jp-jomon-ritual-dogu",
    "title": "土偶、石圈与绳文礼仪",
    "era": "绳文",
    "time": "约前3000-前300",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "考古文化"
    ],
    "people": [
      "绳文共同体"
    ],
    "summary": "绳文后期大量土偶、石圈和仪式性遗物出现，显示列岛史前社会已有丰富的精神世界和区域差异。"
  },
  {
    "id": "jp-yayoi-rice-metal",
    "title": "弥生稻作与金属器扩散",
    "era": "弥生",
    "time": "约前300-公元250",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会经济",
      "东亚交流"
    ],
    "people": [
      "弥生人群",
      "朝鲜半岛移民与交流者"
    ],
    "summary": "水稻农耕、青铜器和铁器从大陆与朝鲜半岛方向传入并扩散，推动聚落扩大、阶层分化和区域首领形成。"
  },
  {
    "id": "jp-yayoi-chiefdoms",
    "title": "弥生诸小国与汉魏记载",
    "era": "弥生",
    "time": "1-3世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权形成",
      "东亚交流"
    ],
    "people": [
      "倭地诸国",
      "汉魏使者"
    ],
    "summary": "中国史书记录倭地多国并立、互有争战，说明日本列岛开始进入可被外部文字史料观察的政治竞争阶段。"
  },
  {
    "id": "jp-himiko-wei-tribute",
    "title": "卑弥呼与邪马台国遣魏",
    "era": "弥生",
    "time": "239",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权形成",
      "东亚交流"
    ],
    "people": [
      "卑弥呼",
      "魏朝"
    ],
    "summary": "卑弥呼遣使魏朝并获得册封，显示倭地联盟政权借东亚册封秩序强化内部权威。"
  },
  {
    "id": "jp-kofun-yamato-rise",
    "title": "古坟时代与大和政权兴起",
    "era": "古坟",
    "time": "3-5世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权形成",
      "考古文化"
    ],
    "people": [
      "大和王权",
      "地方豪族"
    ],
    "summary": "大型前方后圆坟在畿内及各地扩展，反映大和王权和地方首领之间的联盟、等级与祭祀政治。"
  },
  {
    "id": "jp-wa-five-kings",
    "title": "倭五王遣南朝",
    "era": "古坟",
    "time": "5世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "东亚交流",
      "政权形成"
    ],
    "people": [
      "倭五王",
      "南朝刘宋"
    ],
    "summary": "倭王多次遣使中国南朝，争取将军号和对朝鲜半岛事务的外部承认，体现大和政权进入东亚外交秩序。"
  },
  {
    "id": "jp-buddhism-introduction",
    "title": "佛教传入日本",
    "era": "飞鸟",
    "time": "538/552",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "东亚交流"
    ],
    "people": [
      "百济王权",
      "钦明天皇",
      "苏我氏"
    ],
    "summary": "佛教经由百济传入日本宫廷，引发礼制、外交、建筑、文字和政治合法性的长期变化。"
  },
  {
    "id": "jp-soga-mononobe-conflict",
    "title": "苏我氏与物部氏之争",
    "era": "飞鸟",
    "time": "587",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "文化宗教"
    ],
    "people": [
      "苏我马子",
      "物部守屋"
    ],
    "summary": "围绕佛教接受和宫廷权力的冲突以苏我氏胜利告终，亲佛教势力在大和朝廷中取得优势。"
  },
  {
    "id": "jp-shotoku-regency",
    "title": "圣德太子摄政与十七条宪法",
    "era": "飞鸟",
    "time": "593-604",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "文化宗教"
    ],
    "people": [
      "圣德太子",
      "推古天皇"
    ],
    "summary": "圣德太子摄政期间推行冠位、佛教护持和十七条宪法，试图用大陆制度语言重塑朝廷秩序。"
  },
  {
    "id": "jp-sui-missions",
    "title": "遣隋使与日出处天子书",
    "era": "飞鸟",
    "time": "600-607",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "东亚交流",
      "制度治理"
    ],
    "people": [
      "小野妹子",
      "隋炀帝",
      "圣德太子"
    ],
    "summary": "日本向隋朝派遣使节，学习制度与佛教文化，并在外交文书中表达更强的君主身份意识。"
  },
  {
    "id": "jp-taika-reform",
    "title": "大化改新",
    "era": "飞鸟",
    "time": "645",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "政权斗争"
    ],
    "people": [
      "中大兄皇子",
      "中臣镰足",
      "苏我入鹿"
    ],
    "summary": "中大兄皇子和中臣镰足打倒苏我氏核心，发布改革诏令，推动土地、户籍和官僚制度向律令国家转型。"
  },
  {
    "id": "jp-baekgang-663",
    "title": "白村江战役",
    "era": "飞鸟",
    "time": "663",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "东亚交流"
    ],
    "people": [
      "日本援百济军",
      "唐朝",
      "新罗"
    ],
    "summary": "日本援助百济复国军在白村江败于唐新罗联军，朝鲜半岛局势改变并迫使日本加强本土防御和制度改革。"
  },
  {
    "id": "jp-jinshin-war",
    "title": "壬申之乱",
    "era": "飞鸟",
    "time": "672",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "制度治理"
    ],
    "people": [
      "大海人皇子",
      "大友皇子"
    ],
    "summary": "天智天皇死后继承冲突爆发，大海人皇子胜出成为天武天皇，强化皇位和中央集权建设。"
  },
  {
    "id": "jp-taiho-code",
    "title": "大宝律令",
    "era": "飞鸟/奈良",
    "time": "701",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "东亚交流"
    ],
    "people": [
      "文武天皇",
      "藤原不比等"
    ],
    "summary": "大宝律令以唐制为重要参照建立官僚、刑名、户籍和赋役框架，日本律令国家形态基本成型。"
  },
  {
    "id": "jp-heijo-kyo",
    "title": "平城京建都",
    "era": "奈良",
    "time": "710",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "城市"
    ],
    "people": [
      "元明天皇"
    ],
    "summary": "朝廷迁都平城京，按唐长安模式规划首个长期都城，国家佛教、官僚行政和贵族政治集中展开。"
  },
  {
    "id": "jp-kojiki-nihonshoki",
    "title": "《古事记》《日本书纪》成书",
    "era": "奈良",
    "time": "712-720",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "制度治理"
    ],
    "people": [
      "太安万侣",
      "舍人亲王"
    ],
    "summary": "朝廷编纂神话、谱系和历史叙事，为天皇统治提供神圣谱系和国家记忆。"
  },
  {
    "id": "jp-todaiji-state-buddhism",
    "title": "东大寺与国家佛教",
    "era": "奈良",
    "time": "743-752",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "制度治理"
    ],
    "people": [
      "圣武天皇",
      "行基"
    ],
    "summary": "圣武天皇推动东大寺和大佛建设，把佛教护国、疫病危机和中央权威结合起来。"
  },
  {
    "id": "jp-manyoshu",
    "title": "《万叶集》与早期和歌传统",
    "era": "奈良",
    "time": "759前后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "社会文化"
    ],
    "people": [
      "大伴家持",
      "柿本人麻吕"
    ],
    "summary": "《万叶集》汇集贵族、地方官和民间歌谣，显示汉字书写被用于表达日本本土情感和语言。"
  },
  {
    "id": "jp-heian-capital",
    "title": "迁都平安京",
    "era": "平安",
    "time": "794",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "城市"
    ],
    "people": [
      "桓武天皇"
    ],
    "summary": "朝廷迁都平安京，试图摆脱奈良佛教政治干预并建立新的贵族都城秩序。"
  },
  {
    "id": "jp-saicho-kukai",
    "title": "最澄、空海入唐与新佛教",
    "era": "平安",
    "time": "804-806",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "东亚交流"
    ],
    "people": [
      "最澄",
      "空海"
    ],
    "summary": "最澄和空海随遣唐使入唐，归国后分别发展天台、真言密教，深刻影响平安宗教与贵族文化。"
  },
  {
    "id": "jp-fujiwara-regency",
    "title": "藤原摄关政治形成",
    "era": "平安",
    "time": "858以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "贵族政治"
    ],
    "people": [
      "藤原良房",
      "藤原道长"
    ],
    "summary": "藤原氏通过外戚、摄政和关白制度控制朝廷，天皇名义权威与贵族家族政治交织。"
  },
  {
    "id": "jp-end-tang-missions",
    "title": "停止遣唐使",
    "era": "平安",
    "time": "894",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "东亚交流",
      "文化宗教"
    ],
    "people": [
      "菅原道真",
      "宇多天皇"
    ],
    "summary": "朝廷停止派遣遣唐使，标志官方直接学习唐制告一段落，日本文化开始更明显本土化。"
  },
  {
    "id": "jp-kokufu-culture",
    "title": "国风文化成熟",
    "era": "平安",
    "time": "10-11世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "社会文化"
    ],
    "people": [
      "紫式部",
      "清少纳言"
    ],
    "summary": "假名文学、物语、日记和宫廷审美成熟，说明外来汉文化被贵族社会吸收后转化为日本特色表达。"
  },
  {
    "id": "jp-taira-masakado",
    "title": "平将门之乱",
    "era": "平安",
    "time": "935-940",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "地方武士"
    ],
    "people": [
      "平将门"
    ],
    "summary": "关东武士平将门反叛朝廷，暴露地方武士力量上升和中央对地方控制削弱。"
  },
  {
    "id": "jp-shoen-warrior-rise",
    "title": "庄园制扩大与武士集团兴起",
    "era": "平安",
    "time": "10-11世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会经济",
      "地方武士"
    ],
    "people": [
      "地方领主",
      "武士集团"
    ],
    "summary": "免税庄园扩张削弱公地公民制，地方领主和武士集团逐渐成为实际治安与军事力量。"
  },
  {
    "id": "jp-former-nine-years",
    "title": "前九年之役与东北边疆",
    "era": "平安",
    "time": "1051-1062",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "边疆治理"
    ],
    "people": [
      "源赖义",
      "安倍氏"
    ],
    "summary": "朝廷和源氏武士在东北对安倍氏作战，显示边疆治理、地方豪族和武士声望紧密相关。"
  },
  {
    "id": "jp-cloistered-rule",
    "title": "院政开始",
    "era": "平安",
    "time": "1086以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "贵族政治"
    ],
    "people": [
      "白河上皇"
    ],
    "summary": "退位天皇以院厅掌握政治资源，形成天皇、摄关家、寺社和武士之间的新权力组合。"
  },
  {
    "id": "jp-hogen-heiji",
    "title": "保元、平治之乱",
    "era": "平安末",
    "time": "1156-1160",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "地方武士"
    ],
    "people": [
      "源义朝",
      "平清盛",
      "后白河天皇"
    ],
    "summary": "宫廷内部继承与院政矛盾引发武士介入，源平两大武士集团进入中央政治。"
  },
  {
    "id": "jp-taira-regime",
    "title": "平清盛政权",
    "era": "平安末",
    "time": "1167-1180",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权兴亡",
      "经济财政"
    ],
    "people": [
      "平清盛"
    ],
    "summary": "平清盛以太政大臣身份控制朝廷和濑户内海贸易，开创武士掌握中央权力的先例。"
  },
  {
    "id": "jp-genpei-war",
    "title": "源平合战",
    "era": "平安末/镰仓",
    "time": "1180-1185",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "源赖朝",
      "源义经",
      "平氏"
    ],
    "summary": "源氏与平氏全面战争，平氏在坛之浦败亡，武家政权取代贵族政治成为日本主线。"
  },
  {
    "id": "jp-kamakura-shogunate",
    "title": "镰仓幕府建立",
    "era": "镰仓",
    "time": "1192",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "武家政治"
    ],
    "people": [
      "源赖朝"
    ],
    "summary": "源赖朝获得征夷大将军称号，镰仓幕府以御家人、守护地头和军事封建关系组织全国权力。"
  },
  {
    "id": "jp-jokyu-war",
    "title": "承久之乱",
    "era": "镰仓",
    "time": "1221",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "武家政治"
    ],
    "people": [
      "后鸟羽上皇",
      "北条义时"
    ],
    "summary": "后鸟羽上皇试图倒幕失败，幕府扩大对京都和西国的控制，朝廷政治地位进一步下降。"
  },
  {
    "id": "jp-goseibai-shikimoku",
    "title": "御成败式目",
    "era": "镰仓",
    "time": "1232",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "法律"
    ],
    "people": [
      "北条泰时"
    ],
    "summary": "北条泰时制定武家基本法，明确土地诉讼、御家人义务和幕府裁判原则。"
  },
  {
    "id": "jp-mongol-invasions",
    "title": "元日战争",
    "era": "镰仓",
    "time": "1274、1281",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "东亚交流"
    ],
    "people": [
      "忽必烈",
      "北条时宗",
      "镰仓武士"
    ],
    "summary": "元朝两次出兵日本均未成功，幕府虽守住本土，却因无新土地赏赐而加深御家人财政危机。"
  },
  {
    "id": "jp-kamakura-fall",
    "title": "镰仓幕府灭亡",
    "era": "镰仓",
    "time": "1333",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权兴亡",
      "武家政治"
    ],
    "people": [
      "后醍醐天皇",
      "足利尊氏",
      "新田义贞"
    ],
    "summary": "后醍醐天皇倒幕运动与武士叛离结合，镰仓幕府被推翻，旧武家秩序崩溃。"
  },
  {
    "id": "jp-kenmu-restoration",
    "title": "建武新政",
    "era": "南北朝",
    "time": "1333-1336",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "政权斗争"
    ],
    "people": [
      "后醍醐天皇",
      "足利尊氏"
    ],
    "summary": "后醍醐天皇试图恢复天皇亲政，但赏罚和武士利益安排失衡，很快引发足利尊氏反叛。"
  },
  {
    "id": "jp-nanboku-cho",
    "title": "南北朝分裂",
    "era": "南北朝",
    "time": "1336-1392",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "武家政治"
    ],
    "people": [
      "足利尊氏",
      "后醍醐天皇"
    ],
    "summary": "京都北朝与吉野南朝并立，武家、朝廷和地方守护在长期内战中重新分配权力。"
  },
  {
    "id": "jp-muromachi-shogunate",
    "title": "室町幕府与守护大名体制",
    "era": "室町",
    "time": "1338以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "武家政治"
    ],
    "people": [
      "足利尊氏",
      "足利义满"
    ],
    "summary": "足利幕府依靠守护大名治理地方，中央权威比镰仓更依赖诸大名合作。"
  },
  {
    "id": "jp-yoshimitsu-ming-trade",
    "title": "足利义满与明日勘合贸易",
    "era": "室町",
    "time": "1401-1404",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "东亚交流",
      "经济财政"
    ],
    "people": [
      "足利义满",
      "明成祖"
    ],
    "summary": "足利义满向明朝遣使并开展勘合贸易，日本进入以幕府为主体的东亚朝贡贸易网络。"
  },
  {
    "id": "jp-onin-war",
    "title": "应仁之乱",
    "era": "室町/战国",
    "time": "1467-1477",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "细川氏",
      "山名氏",
      "足利义政"
    ],
    "summary": "京都大名内战摧毁室町幕府威信，地方大名割据加深，日本进入战国时代。"
  },
  {
    "id": "jp-sengoku-daimyo",
    "title": "战国大名与分国法",
    "era": "战国",
    "time": "15-16世纪",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "战争军事"
    ],
    "people": [
      "战国大名"
    ],
    "summary": "各地战国大名通过城下町、家臣团、分国法和检地加强领国经营，地方政权能力上升。"
  },
  {
    "id": "jp-firearms-tanegashima",
    "title": "铁炮传入种子岛",
    "era": "战国",
    "time": "1543",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "全球交流"
    ],
    "people": [
      "葡萄牙商人",
      "种子岛时尧"
    ],
    "summary": "葡萄牙人携火绳枪抵达种子岛，日本大名迅速仿制并将铁炮纳入战争体系。"
  },
  {
    "id": "jp-christianity-nanban",
    "title": "基督教与南蛮贸易",
    "era": "战国",
    "time": "1549以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "文化宗教",
      "全球交流"
    ],
    "people": [
      "方济各·沙勿略",
      "九州大名"
    ],
    "summary": "耶稣会传教士和葡萄牙贸易进入日本，部分大名借贸易、火器和宗教网络强化实力。"
  },
  {
    "id": "jp-nobunaga-kyoto",
    "title": "织田信长入京",
    "era": "战国",
    "time": "1568",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权兴亡",
      "战争军事"
    ],
    "people": [
      "织田信长",
      "足利义昭"
    ],
    "summary": "织田信长拥立足利义昭入京，掌握畿内政治主动权，战国统一进程进入中央舞台。"
  },
  {
    "id": "jp-nagashino",
    "title": "长筱合战",
    "era": "战国",
    "time": "1575",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "制度治理"
    ],
    "people": [
      "织田信长",
      "德川家康",
      "武田胜赖"
    ],
    "summary": "织田德川联军击败武田骑兵，铁炮、阵地和动员体系在战国战争中的作用更加突出。"
  },
  {
    "id": "jp-honnoji",
    "title": "本能寺之变",
    "era": "战国",
    "time": "1582",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权斗争",
      "战争军事"
    ],
    "people": [
      "织田信长",
      "明智光秀",
      "丰臣秀吉"
    ],
    "summary": "明智光秀袭杀织田信长，统一事业短暂中断，丰臣秀吉迅速夺取织田遗产。"
  },
  {
    "id": "jp-hideyoshi-unification",
    "title": "丰臣秀吉统一日本",
    "era": "安土桃山",
    "time": "1585-1590",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权兴亡",
      "制度治理"
    ],
    "people": [
      "丰臣秀吉"
    ],
    "summary": "丰臣秀吉通过关白权威、军事征服和大名臣服完成日本列岛主要政治统一。"
  },
  {
    "id": "jp-sword-hunt-land-survey",
    "title": "刀狩与太阁检地",
    "era": "安土桃山",
    "time": "1580s-1590s",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "社会经济"
    ],
    "people": [
      "丰臣秀吉"
    ],
    "summary": "丰臣政权推行检地和刀狩，固定石高、身份和土地关系，为江户幕藩体制奠定基础。"
  },
  {
    "id": "jp-korea-invasions",
    "title": "丰臣秀吉侵朝战争",
    "era": "安土桃山",
    "time": "1592-1598",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "东亚交流"
    ],
    "people": [
      "丰臣秀吉",
      "明朝",
      "朝鲜王朝"
    ],
    "summary": "丰臣政权两次侵略朝鲜，遭朝鲜和明朝抵抗，战争消耗巨大并改变东亚国际关系。"
  },
  {
    "id": "jp-sekigahara",
    "title": "关原之战",
    "era": "安土桃山/江户",
    "time": "1600",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "政权兴亡"
    ],
    "people": [
      "德川家康",
      "石田三成"
    ],
    "summary": "德川家康在关原击败西军，取得全国霸权，为江户幕府建立铺路。"
  },
  {
    "id": "jp-edo-shogunate",
    "title": "江户幕府建立",
    "era": "江户",
    "time": "1603",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "武家政治"
    ],
    "people": [
      "德川家康"
    ],
    "summary": "德川家康受封征夷大将军，江户幕府建立，幕藩体制成为近世日本政治主干。"
  },
  {
    "id": "jp-sankin-kotai",
    "title": "参勤交代制度化",
    "era": "江户",
    "time": "1635",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "社会经济"
    ],
    "people": [
      "德川家光",
      "诸大名"
    ],
    "summary": "幕府要求大名定期往返江户并留置家属，削弱反叛能力并推动交通、城市和消费经济。"
  },
  {
    "id": "jp-shimabara-rebellion",
    "title": "岛原之乱",
    "era": "江户",
    "time": "1637-1638",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "文化宗教"
    ],
    "people": [
      "天草四郎",
      "德川幕府"
    ],
    "summary": "岛原、天草地区因重税和基督教压迫爆发叛乱，幕府镇压后进一步强化禁教和海禁政策。"
  },
  {
    "id": "jp-closed-country-nagasaki",
    "title": "锁国体制与长崎贸易",
    "era": "江户",
    "time": "1639以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "经济财政"
    ],
    "people": [
      "德川幕府",
      "荷兰商馆",
      "中国商人"
    ],
    "summary": "幕府限制海外往来，但保留长崎等窗口与荷兰、中国、朝鲜、琉球和虾夷地联系。"
  },
  {
    "id": "jp-genroku-culture",
    "title": "元禄文化与町人经济",
    "era": "江户",
    "time": "17世纪末-18世纪初",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会文化",
      "经济财政"
    ],
    "people": [
      "井原西鹤",
      "近松门左卫门",
      "町人"
    ],
    "summary": "大阪、京都、江户商业繁荣，町人文化、浮世草子、歌舞伎和净瑠璃发展成熟。"
  },
  {
    "id": "jp-kyoho-reforms",
    "title": "享保改革",
    "era": "江户",
    "time": "1716-1745",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "经济财政"
    ],
    "people": [
      "德川吉宗"
    ],
    "summary": "德川吉宗整顿财政、鼓励新田、设置目安箱并调整米价政策，试图修补幕府财政危机。"
  },
  {
    "id": "jp-tenmei-famine",
    "title": "天明大饥荒与社会动荡",
    "era": "江户",
    "time": "1780s",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会经济",
      "政权危机"
    ],
    "people": [
      "农民",
      "德川幕府"
    ],
    "summary": "火山喷发、冷害和财政脆弱叠加造成大饥荒，百姓一揆和打毁加剧幕府治理压力。"
  },
  {
    "id": "jp-russian-contacts",
    "title": "俄国南下与北方警备",
    "era": "江户",
    "time": "18世纪末-19世纪初",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "战争军事"
    ],
    "people": [
      "德川幕府",
      "俄国使节",
      "松前藩"
    ],
    "summary": "俄国进入北太平洋和千岛、桦太方向，使幕府开始重视虾夷地直辖和北方防务。"
  },
  {
    "id": "jp-perry-opening",
    "title": "黑船来航",
    "era": "幕末",
    "time": "1853-1854",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "全球交流"
    ],
    "people": [
      "佩里",
      "德川幕府"
    ],
    "summary": "美国佩里舰队迫使日本开港，幕府锁国秩序被打破，国内尊王攘夷与开国争论激化。"
  },
  {
    "id": "jp-unequal-treaties",
    "title": "安政五国条约",
    "era": "幕末",
    "time": "1858",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "经济财政"
    ],
    "people": [
      "井伊直弼",
      "欧美列强"
    ],
    "summary": "幕府签订通商条约，开放港口并接受领事裁判权和低关税，国内反幕情绪迅速上升。"
  },
  {
    "id": "jp-meiji-restoration",
    "title": "明治维新",
    "era": "明治",
    "time": "1868",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权兴亡",
      "制度治理"
    ],
    "people": [
      "明治天皇",
      "萨长土肥",
      "德川庆喜"
    ],
    "summary": "倒幕派恢复天皇政权并建立新政府，日本从幕藩体制转向中央集权近代国家。"
  },
  {
    "id": "jp-abolish-han",
    "title": "废藩置县",
    "era": "明治",
    "time": "1871",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "政权兴亡"
    ],
    "people": [
      "明治政府",
      "旧大名"
    ],
    "summary": "明治政府废除藩国改设府县，旧大名交出领地和军政权，中央政府直接统治全国。"
  },
  {
    "id": "jp-iwakura-mission",
    "title": "岩仓使节团",
    "era": "明治",
    "time": "1871-1873",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "制度治理"
    ],
    "people": [
      "岩仓具视",
      "大久保利通",
      "木户孝允"
    ],
    "summary": "明治政府派使团考察欧美制度并尝试修约，回国后推动殖产兴业、教育和国家制度建设。"
  },
  {
    "id": "jp-conscription-land-tax",
    "title": "征兵令与地租改正",
    "era": "明治",
    "time": "1873",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "经济财政"
    ],
    "people": [
      "明治政府",
      "农民",
      "士族"
    ],
    "summary": "明治政府推行普遍征兵和货币地税，建立近代军队与稳定财政，也激化士族和农民不满。"
  },
  {
    "id": "jp-satsuma-rebellion",
    "title": "西南战争",
    "era": "明治",
    "time": "1877",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "政权危机"
    ],
    "people": [
      "西乡隆盛",
      "明治政府"
    ],
    "summary": "西乡隆盛率士族反叛失败，标志旧士族军事政治力量基本退出国家主轴。"
  },
  {
    "id": "jp-meiji-constitution",
    "title": "《大日本帝国宪法》颁布",
    "era": "明治",
    "time": "1889",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "制度治理",
      "政治制度"
    ],
    "people": [
      "伊藤博文",
      "明治天皇"
    ],
    "summary": "明治政府颁布宪法，确立天皇主权、帝国议会和内阁官僚体制，形成近代日本国家法制框架。"
  },
  {
    "id": "jp-first-sino-japanese-war",
    "title": "甲午战争",
    "era": "明治",
    "time": "1894-1895",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "东亚交流"
    ],
    "people": [
      "日本帝国",
      "清朝",
      "朝鲜"
    ],
    "summary": "日本在朝鲜问题上与清朝开战并获胜，取得台湾和赔款，东亚传统秩序发生重大转折。"
  },
  {
    "id": "jp-russo-japanese-war",
    "title": "日俄战争",
    "era": "明治",
    "time": "1904-1905",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "边疆外交"
    ],
    "people": [
      "日本帝国",
      "俄国"
    ],
    "summary": "日本与俄国争夺满洲和朝鲜利益并取胜，成为近代亚洲第一个击败欧洲列强的国家。"
  },
  {
    "id": "jp-korea-annexation",
    "title": "日本吞并朝鲜",
    "era": "明治",
    "time": "1910",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "帝国扩张",
      "东亚交流"
    ],
    "people": [
      "日本帝国",
      "大韩帝国"
    ],
    "summary": "日本正式吞并朝鲜，将殖民统治制度化，东亚地区力量关系进一步帝国化。"
  },
  {
    "id": "jp-taisho-democracy",
    "title": "大正民主",
    "era": "大正",
    "time": "1912-1926",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政治制度",
      "社会文化"
    ],
    "people": [
      "政党政治家",
      "民众运动"
    ],
    "summary": "政党内阁、普选运动、劳工运动和社会言论空间扩大，日本政治出现有限民主化趋势。"
  },
  {
    "id": "jp-manchurian-incident",
    "title": "九一八事变与满洲国",
    "era": "昭和前期",
    "time": "1931-1932",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "帝国扩张"
    ],
    "people": [
      "关东军",
      "日本政府",
      "中国东北"
    ],
    "summary": "关东军发动九一八事变并扶植满洲国，日本军部独走和大陆扩张显著加速。"
  },
  {
    "id": "jp-second-sino-japanese-war",
    "title": "全面侵华战争爆发",
    "era": "昭和前期",
    "time": "1937",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "东亚交流"
    ],
    "people": [
      "日本军部",
      "中国军民"
    ],
    "summary": "卢沟桥事变后中日战争全面化，日本陷入长期大陆战争并加深国内战时体制。"
  },
  {
    "id": "jp-pearl-harbor-pacific-war",
    "title": "太平洋战争爆发",
    "era": "昭和前期",
    "time": "1941",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "战争军事",
      "全球战争"
    ],
    "people": [
      "日本帝国",
      "美国",
      "英荷殖民势力"
    ],
    "summary": "日本袭击珍珠港并向东南亚扩张，局部中日战争扩大为亚太与世界大战的一部分。"
  },
  {
    "id": "jp-defeat-occupation-constitution",
    "title": "战败、占领与和平宪法",
    "era": "战后",
    "time": "1945-1947",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政权转型",
      "制度治理"
    ],
    "people": [
      "昭和天皇",
      "盟军占领当局",
      "日本政府"
    ],
    "summary": "日本投降后接受盟军占领，进行非军事化、民主化改革并颁布1947年宪法。"
  },
  {
    "id": "jp-san-francisco-treaty",
    "title": "旧金山和约与恢复主权",
    "era": "战后",
    "time": "1951-1952",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "边疆外交",
      "全球冷战"
    ],
    "people": [
      "日本政府",
      "美国",
      "盟国"
    ],
    "summary": "旧金山和约使日本恢复主权，同时日美安保体制把战后日本纳入美国主导的冷战秩序。"
  },
  {
    "id": "jp-1955-system",
    "title": "五五年体制形成",
    "era": "战后",
    "time": "1955",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "政治制度",
      "全球冷战"
    ],
    "people": [
      "自由民主党",
      "日本社会党"
    ],
    "summary": "自由民主党成立并长期执政，保守政治、经济增长和日美同盟构成战后日本政治基本框架。"
  },
  {
    "id": "jp-high-growth",
    "title": "高度经济增长",
    "era": "战后",
    "time": "1955-1973",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "经济财政",
      "社会文化"
    ],
    "people": [
      "日本企业",
      "通产省",
      "劳动者"
    ],
    "summary": "日本依靠产业政策、出口、教育和城市化实现高速增长，成为世界主要工业经济体。"
  },
  {
    "id": "jp-oil-shock-adjustment",
    "title": "石油危机与产业调整",
    "era": "战后",
    "time": "1973以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "经济财政",
      "全球经济"
    ],
    "people": [
      "日本政府",
      "日本企业"
    ],
    "summary": "石油危机打断高速增长，日本转向节能、技术密集产业和更成熟的宏观调控。"
  },
  {
    "id": "jp-bubble-heisei",
    "title": "泡沫经济与平成长期调整",
    "era": "平成",
    "time": "1980s-1990s",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "经济财政",
      "社会文化"
    ],
    "people": [
      "日本银行",
      "企业集团",
      "家庭部门"
    ],
    "summary": "资产泡沫膨胀后破裂，银行不良债权、低增长和人口结构问题成为平成日本核心议题。"
  },
  {
    "id": "jp-1995-crises",
    "title": "阪神大震灾与东京地铁沙林事件",
    "era": "平成",
    "time": "1995",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会危机",
      "制度治理"
    ],
    "people": [
      "日本政府",
      "奥姆真理教",
      "市民"
    ],
    "summary": "自然灾害和恐怖袭击同年冲击日本社会，暴露城市防灾、危机响应和新宗教治理问题。"
  },
  {
    "id": "jp-2011-triple-disaster",
    "title": "东日本大震灾与福岛核事故",
    "era": "平成",
    "time": "2011",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会危机",
      "能源"
    ],
    "people": [
      "日本政府",
      "东京电力",
      "东北居民"
    ],
    "summary": "地震、海啸和核事故叠加，深刻影响日本能源政策、地方复兴和社会风险意识。"
  },
  {
    "id": "jp-reiwa-demographic-security",
    "title": "令和时期的人口、安保与区域调整",
    "era": "令和",
    "time": "2019以后",
    "regions": [
      "东亚",
      "日本列岛"
    ],
    "topics": [
      "社会经济",
      "边疆外交"
    ],
    "people": [
      "日本政府",
      "日本社会"
    ],
    "summary": "令和日本面对少子高龄化、地方衰退、技术竞争和东亚安全压力，战后体制进入新的调整阶段。"
  }
];
  window.JAPAN_EVENTS = items.map(event);
})();
