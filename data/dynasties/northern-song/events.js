(() => {
  const dynastyId = "northern-song";
  const dynasty = "北宋";
  const source = {
    "id": "songshi-zizhi-tongjian",
    "type": "正史与编年史",
    "title": "《宋史》《续资治通鉴长编》北宋相关纪事",
    "author": "脱脱等、李焘等",
    "authorityLevel": "公开权威史料，待逐条补卷链接",
    "note": "先作为北宋主线顺序、制度变化和战争关系的史料入口。",
    "credibility": "高",
    "credibilityLevel": "high"
  };

  function event(item) {
    return {
      "id": item.id,
      "title": item.title,
      "aliases": item.aliases || [],
      "era": item.era,
      "period": dynasty,
      "time": item.time,
      "regions": item.regions,
      "topics": item.topics,
      "summary": item.summary,
      "bookmarked": false,
      "people": (item.people || []).map((name) => ({
        name,
        role: "关键人物",
        years: "",
        color: "var(--accent-blue)",
        bio: `${name}是此事件中的关键行动者，具体作用需要结合事件过程理解。`,
        events: [item.title]
      })),
      "relations": [],
      "background": item.background,
      "process": item.process,
      "results": item.results,
      "debates": [
        {
          "view": "学习提示",
          "content": item.tip
        }
      ],
      "claims": [
        {
          "statement": item.claim,
          "status": "较稳妥",
          "statusType": "stable",
          "confidence": "medium",
          "sourceIds": ["songshi-zizhi-tongjian"],
          "note": "当前先按主线整理，后续可逐条补《宋史》《续资治通鉴长编》公开卷链接。"
        }
      ],
      "citations": [
        {
          "sourceId": "songshi-zizhi-tongjian",
          "reference": item.reference || "《宋史》《续资治通鉴长编》相关纪事",
          "status": "待核原文",
          "plainText": item.plainText,
          "note": "不是纯原文摘录，先给学习用白话释义；后续补公开卷目链接。"
        }
      ],
      "causalChain": item.causalChain || [],
      "sources": [source],
      "reviewQuestions": [
        {
          "type": "主线理解",
          "question": item.question,
          "answer": item.answer
        }
      ],
      "notes": [],
      dynastyId,
      dynasty,
      "topicIds": item.topicIds || []
    };
  }

  window.NORTHERN_SONG_EVENTS = [
    event({
      id: "nsong-chenqiao-song-founded",
      title: "陈桥兵变与北宋建国",
      aliases: ["陈桥兵变"],
      era: "建国与统一收束",
      time: "960",
      regions: ["陈桥驿", "开封"],
      topics: ["建国", "政变", "军政"],
      summary: "赵匡胤在禁军拥立下取代后周建立宋朝，北宋从五代军人政治中诞生。",
      people: ["赵匡胤", "柴宗训"],
      background: ["周世宗去世后幼主即位，禁军将领赵匡胤掌握军事威望，后周统一事业尚未完成。"],
      process: [
        { time: "960", title: "禁军拥立", description: "赵匡胤率军北上途中在陈桥驿被拥立为帝，随后回师开封取得政权。这个过程仍带有五代军队拥立君主的特点。" },
        { time: "960后", title: "建立宋朝", description: "赵匡胤建宋后继承后周的开封、禁军和统一路线。北宋不是从零开始，而是在后周制度和军事基础上继续整合天下。" }
      ],
      results: ["北宋建立。", "五代北方王朝更替结束，但南方诸国、北汉和辽的问题仍在。"],
      tip: "这件事要同时看五代遗产和宋初制度转向。",
      claim: "北宋建国承接后周基础，也暴露了必须限制武将拥立的制度压力。",
      plainText: "史料主线可概括为：赵匡胤由禁军拥立建宋，随后要把五代式军人政治转成更稳定的皇权秩序。",
      question: "北宋建国后是否马上统一全国？",
      answer: "没有。宋还要继续处理南方诸国、北汉和辽控制的燕云问题。"
    }),
    event({
      id: "nsong-military-centralization",
      title: "杯酒释兵权与禁军中央化",
      aliases: ["杯酒释兵权"],
      era: "建国与统一收束",
      time: "961前后",
      regions: ["开封"],
      topics: ["制度", "军政", "皇权"],
      summary: "宋太祖削弱功臣宿将和地方节度使兵权，把军队控制逐步集中到中央禁军体系。",
      people: ["赵匡胤", "石守信"],
      background: ["五代政权频繁被禁军和藩镇推翻，宋太祖必须解决武将拥兵自重问题。"],
      process: [
        { time: "961前后", title: "解除宿将兵权", description: "宋太祖以相对温和方式让石守信等禁军宿将离开核心兵权，减少功臣集团再次拥立或废立皇帝的可能。" },
        { time: "960s", title: "兵权归中央", description: "朝廷逐步加强禁军、枢密院和三衙等军政安排，使调兵权、统兵权和领兵权分离。这样能抑制地方割据，但也提高中央财政负担。" }
      ],
      results: ["武将拥兵威胁下降。", "宋朝形成重文抑武和中央集兵的基本方向。"],
      tip: "不要只把它当轶事，要看它背后的制度逻辑。",
      claim: "北宋军政中央化是对五代藩镇和禁军政治的制度回应。",
      plainText: "白话看法：宋太祖不是只劝老将退休，而是在重建军权结构，让军队更难变成私人政治资本。",
      question: "杯酒释兵权的核心目的是什么？",
      answer: "削弱功臣和地方武将兵权，把军事控制权集中到皇帝和中央。"
    }),
    event({
      id: "nsong-civil-service-state",
      title: "文官政治与科举扩张",
      era: "建国与统一收束",
      time: "960s-1000s",
      regions: ["开封", "全国"],
      topics: ["制度", "科举", "官僚"],
      summary: "北宋扩大科举和文官任用，形成以士大夫官僚治理国家的基本结构。",
      people: ["赵匡胤", "赵光义"],
      background: ["宋初需要削弱武将和藩镇，同时扩大可由中央选拔、调动和监督的官僚队伍。"],
      process: [
        { time: "960s后", title: "扩大取士", description: "宋朝逐渐扩大科举录取和文官任用，让更多士人进入中央官僚体系。科举不只是考试制度，也是皇权吸纳地方精英的工具。" },
        { time: "太宗朝", title: "士大夫政治成形", description: "太宗以后，文官在行政、财政和地方治理中的地位继续上升。国家治理更依赖制度化官僚，而不是五代式军功集团。" }
      ],
      results: ["士大夫官僚成为北宋政治核心。", "文官体系增强中央控制，也带来冗官和财政压力。"],
      tip: "科举要和中央集权、财政负担、士大夫政治一起看。",
      claim: "北宋文官政治是宋代区别于五代的重要制度特征。",
      plainText: "史料读法：宋朝通过科举和文官任用，把地方读书人吸进中央体系，减少武人割据的空间。",
      question: "北宋为什么重视科举文官？",
      answer: "它既能扩大人才来源，也能削弱武将和地方藩镇的政治基础。"
    }),
    event({
      id: "nsong-southern-unification",
      title: "宋初平定南方诸国",
      aliases: ["平定南方诸国"],
      era: "建国与统一收束",
      time: "963-978",
      regions: ["荆湖", "四川", "岭南", "江南", "两浙"],
      topics: ["军事", "统一", "南方"],
      summary: "北宋继承后周路线，先后处理荆湖、后蜀、南汉、南唐和吴越，基本完成南方整合。",
      people: ["赵匡胤", "李煜", "钱俶"],
      background: ["北宋建立时南方仍有多个政权，且彼此分散，适合采取分区推进策略。"],
      process: [
        { time: "963-965", title: "取荆湖和后蜀", description: "宋先控制长江中游和四川，取得交通节点和上游资源。这个顺序能切断南方政权之间的联动，并增强宋朝战略纵深。" },
        { time: "971-978", title: "南汉、南唐、吴越归宋", description: "宋继续灭南汉、迫降南唐，并接受吴越纳土。南方核心财赋区逐步进入宋朝体系，统一重心随后转向北汉和辽。" }
      ],
      results: ["南方主要割据政权被纳入北宋。", "江南、四川和岭南资源增强宋朝财政基础。"],
      tip: "这里重点看统一路线和区域顺序，不要只背灭国年份。",
      claim: "宋初南方整合为北宋提供了长期财赋基础。",
      plainText: "白话看法：宋朝先把分散的南方政权逐个处理，取得江南和四川财富，再考虑更难的北方问题。",
      question: "宋初为什么先处理南方？",
      answer: "南方政权分散、互相难以协同，处理后还能增强宋朝财政和战略纵深。"
    }),
    event({
      id: "nsong-northern-han-annexed",
      title: "北汉灭亡与五代十国终结",
      era: "建国与统一收束",
      time: "979",
      regions: ["太原", "河东"],
      topics: ["军事", "统一", "北方"],
      summary: "宋太宗灭北汉，结束五代十国分裂局面，但燕云和辽的边疆问题仍未解决。",
      people: ["赵光义", "刘继元"],
      background: ["北汉据太原并依靠辽支持，是宋朝统一北方最后一个割据点。"],
      process: [
        { time: "979", title: "围攻太原", description: "宋太宗集中力量进攻北汉，太原坚固且有辽的外援压力。宋军最终攻下太原，北汉主刘继元投降。" },
        { time: "979后", title: "转向燕云", description: "北汉灭亡后，宋朝基本完成中原和南方统一，但辽仍控制燕云。宋太宗很快北伐辽，说明统一并未解决北方边防核心问题。" }
      ],
      results: ["北汉灭亡。", "五代十国局面结束。", "宋辽围绕燕云的矛盾成为下一阶段主线。"],
      tip: "北汉灭亡是分裂终结点，不是边疆问题终结点。",
      claim: "979年结束的是五代十国割据，不是宋辽边界矛盾。",
      plainText: "史料主线是：宋灭北汉后看似统一，但燕云仍在辽手中，所以北方战争马上继续。",
      question: "北汉灭亡后北宋最大的未解问题是什么？",
      answer: "辽控制燕云，宋辽边界和北方防御问题仍然存在。"
    }),
    event({
      id: "nsong-taizong-liao-campaigns",
      title: "太宗北伐辽与高梁河、雍熙失利",
      era: "太宗真宗守成",
      time: "979-986",
      regions: ["幽州", "高梁河", "燕云"],
      topics: ["军事", "宋辽", "边疆"],
      summary: "宋太宗两次大规模北伐辽，试图收复燕云，但高梁河和雍熙北伐均告失利。",
      people: ["赵光义", "辽景宗"],
      background: ["燕云十六州长期在辽控制下，宋灭北汉后希望趁势解决北方屏障问题。"],
      process: [
        { time: "979", title: "高梁河失利", description: "宋太宗灭北汉后乘势进攻幽州，但军队疲惫且补给不足。高梁河之战失利后，宋军由进攻转为防守，收复燕云的难度显现。" },
        { time: "986", title: "雍熙北伐失败", description: "宋朝再次分路北伐辽，初期有所推进，但各路协调、补给和辽军反击导致失败。此后北宋对辽战略更趋谨慎。" }
      ],
      results: ["北宋未能收复燕云。", "宋辽关系由主动北伐转向长期对峙。"],
      tip: "这件事是理解宋代北方防御和重文抑武评价的关键。",
      claim: "太宗北伐失败奠定北宋对辽长期守势。",
      plainText: "白话看法：宋灭北汉后想一口气拿回燕云，但两次大败让宋朝认识到辽不是普通割据政权。",
      question: "太宗北伐为什么重要？",
      answer: "它决定北宋未能恢复燕云屏障，宋辽长期对峙由此定型。"
    }),
    event({
      id: "nsong-taizong-succession-state-building",
      title: "太宗朝皇权巩固与制度扩张",
      era: "太宗真宗守成",
      time: "976-997",
      regions: ["开封", "全国"],
      topics: ["皇权", "制度", "官僚"],
      summary: "宋太宗继位后巩固皇权、扩大文官体系和中央行政控制，北宋制度进一步成形。",
      people: ["赵光义"],
      background: ["太宗继位存在政治敏感性，同时北宋需要把统一后的地区纳入稳定治理。"],
      process: [
        { time: "976后", title: "继位与权力重组", description: "赵光义即位后需要巩固自身合法性，并处理太祖旧臣和宗室关系。皇权稳定是继续统一和制度扩张的前提。" },
        { time: "980s-990s", title: "扩大中央治理", description: "太宗朝继续扩大科举、文官任用和地方监督，让新纳入地区逐渐接受中央管理。制度扩张增强控制，也带来官僚规模增长。" }
      ],
      results: ["北宋皇权和官僚体系进一步稳定。", "冗官、冗兵和财政压力的长期问题开始积累。"],
      tip: "太宗朝不能只看对辽失败，也要看制度国家的扩张。",
      claim: "太宗朝是北宋从建国军事政权转向官僚国家的重要阶段。",
      plainText: "史料读法：太宗一方面北伐受挫，另一方面把统一后的国家机器继续做大。",
      question: "太宗朝的制度意义是什么？",
      answer: "它扩张文官和中央控制，使北宋国家形态更加稳定。"
    }),
    event({
      id: "nsong-chanyuan-treaty",
      title: "澶渊之盟与宋辽长期和平",
      aliases: ["澶渊之盟"],
      era: "太宗真宗守成",
      time: "1004-1005",
      regions: ["澶州", "开封", "辽"],
      topics: ["外交", "宋辽", "边疆"],
      summary: "辽军南下逼近黄河，宋真宗亲征后议和，澶渊之盟形成宋辽百余年和平框架。",
      people: ["赵恒", "寇准", "萧太后"],
      background: ["宋辽长期对峙，北宋无力轻易收复燕云，辽也难以长期深入中原治理。"],
      process: [
        { time: "1004", title: "辽军南下", description: "辽军大举南下到澶州附近，开封震动。寇准主张真宗亲征，以稳定军心和朝廷信心，避免仓促迁都导致局势崩溃。" },
        { time: "1005", title: "议和成盟", description: "宋辽达成澶渊之盟，宋向辽输送岁币，双方约为兄弟之国。盟约有屈辱感，但换来边境长期稳定和经济恢复空间。" }
      ],
      results: ["宋辽维持长期和平。", "北宋以岁币换取边境稳定，财政和外交格局固定化。"],
      tip: "澶渊之盟要两面看：军事未胜、政治稳定。",
      claim: "澶渊之盟用财政成本换取了宋辽边境长期和平。",
      plainText: "白话看法：宋没有收复燕云，但也避免了长期大战，用岁币换来相对稳定的北方边境。",
      question: "澶渊之盟是失败还是成功？",
      answer: "军事上不是胜利，但从长期边境稳定看有现实收益。"
    }),
    event({
      id: "nsong-east-fengshan-heavenly-texts",
      title: "真宗封禅与天书政治",
      era: "太宗真宗守成",
      time: "1008-1012",
      regions: ["泰山", "开封"],
      topics: ["皇权", "礼制", "财政"],
      summary: "宋真宗在澶渊之后推动天书和封禅活动，以神圣叙事强化皇权，但也耗费财政和政治信用。",
      people: ["赵恒", "王钦若"],
      background: ["澶渊之盟后，真宗需要缓解未能军事压倒辽国的心理和政治压力。"],
      process: [
        { time: "1008", title: "天书叙事", description: "朝廷宣称出现天书祥瑞，把皇权合法性转向天命和礼制包装。它能短期强化尊崇，却也让政治议题偏离实际边防和财政问题。" },
        { time: "1008-1012", title: "封禅与礼仪扩张", description: "真宗进行泰山封禅等大型礼仪活动，消耗大量资源。北宋皇权声望得到形式提升，但士大夫后世多批评其虚耗。" }
      ],
      results: ["皇权礼制神圣化增强。", "财政负担和政治虚饰问题加重。"],
      tip: "这件事要和澶渊之后的皇权焦虑联系起来。",
      claim: "天书封禅是宋真宗以礼制补偿军事压力的政治操作。",
      plainText: "史料读法：真宗用祥瑞和封禅提高皇权声望，但这些活动不能真正解决边防和财政问题。",
      question: "真宗为什么推动天书封禅？",
      answer: "它有助于强化皇权神圣性，缓解澶渊后军事压力带来的政治焦虑。"
    }),
    event({
      id: "nsong-western-xia-rise",
      title: "西夏兴起与宋夏战争",
      aliases: ["西夏兴起"],
      era: "仁宗朝调整",
      time: "1038-1044",
      regions: ["西北", "延州", "夏州"],
      topics: ["边疆", "宋夏", "军事"],
      summary: "李元昊称帝建立西夏，宋夏战争爆发，北宋西北防线和财政压力显著增加。",
      people: ["李元昊", "赵祯", "范仲淹"],
      background: ["党项势力长期在西北发展，宋朝对边疆控制有限，辽宋和平后西北问题更加突出。"],
      process: [
        { time: "1038", title: "李元昊称帝", description: "李元昊建立西夏并挑战宋朝册封秩序，西北地方问题升级为国家间对抗。宋朝必须同时面对辽和夏两个外部压力。" },
        { time: "1040s", title: "宋夏攻防", description: "宋军在西北多次失利，范仲淹等人整顿边防和堡寨。战争暴露北宋军费高、战斗力不足和边疆治理薄弱的问题。" }
      ],
      results: ["西夏成为北宋长期边患。", "西北军费上升，促成仁宗朝改革讨论。"],
      tip: "宋夏战争是庆历改革的重要背景。",
      claim: "西夏兴起把北宋边疆压力从东北扩展到西北。",
      plainText: "白话看法：西夏不是小叛乱，而是能长期牵制宋朝的西北政权。",
      question: "西夏兴起对北宋有什么影响？",
      answer: "它增加西北军费和防御压力，也推动朝廷反思军政财政问题。"
    }),
    event({
      id: "nsong-qingli-reforms",
      title: "庆历新政",
      era: "仁宗朝调整",
      time: "1043-1045",
      regions: ["开封", "全国"],
      topics: ["改革", "官僚", "财政"],
      summary: "范仲淹、富弼等推动庆历新政，试图整顿吏治、财政和军事，但很快受阻。",
      people: ["赵祯", "范仲淹", "富弼"],
      background: ["宋夏战争和冗官冗兵压力暴露北宋制度问题，朝廷需要调整治理结构。"],
      process: [
        { time: "1043", title: "提出改革方案", description: "范仲淹等人提出明黜陟、抑侥幸、精贡举等方案，核心是提高官僚质量和行政效率。改革目标不是单点政策，而是整顿整个官僚运行。" },
        { time: "1045前后", title: "改革受阻", description: "新政触动既得利益，也引发保守官僚抵触，范仲淹等相继外放。庆历新政失败说明北宋改革难点在于官僚体系内部阻力。" }
      ],
      results: ["改革很快中止。", "仁宗朝问题未根本解决，为王安石变法埋下前奏。"],
      tip: "庆历新政是神宗变法前的重要试探。",
      claim: "庆历新政揭示北宋改革问题已经出现，但政治条件不足。",
      plainText: "史料主线是：范仲淹想整顿官僚和财政，但改革触动太多利益，很快被迫停止。",
      question: "庆历新政为什么重要？",
      answer: "它提前暴露北宋冗官、财政和军政问题，也为后来的熙宁变法提供前奏。"
    }),
    event({
      id: "nsong-rensong-literati-politics",
      title: "仁宗朝士大夫政治成熟",
      aliases: ["仁宗朝士大夫政治"],
      era: "仁宗朝调整",
      time: "1022-1063",
      regions: ["开封", "全国"],
      topics: ["政治", "士大夫", "文化"],
      summary: "仁宗朝科举与文官政治成熟，台谏、朋党议论和士大夫公共政治影响扩大。",
      people: ["赵祯", "欧阳修", "包拯"],
      background: ["北宋文官体系扩张后，士大夫不只是行政官，也越来越成为政策争论和舆论力量。"],
      process: [
        { time: "仁宗朝", title: "士大夫群体扩大", description: "科举持续扩大使更多士人进入官僚体系，文学、经学和政治议论互相交织。仁宗朝形成北宋政治文化的高峰形态。" },
        { time: "仁宗朝中后期", title: "台谏政治活跃", description: "台谏官和名臣通过奏议、弹劾和舆论影响政策。它能约束皇权和官僚，也容易让政策分歧转为朋党标签。" }
      ],
      results: ["北宋士大夫政治成熟。", "政策争论和党争倾向逐渐增强。"],
      tip: "仁宗朝不只有太平形象，也有后续党争的制度土壤。",
      claim: "仁宗朝士大夫政治成熟，为北宋文化繁荣和政治争论同时提供条件。",
      plainText: "白话看法：仁宗朝官僚和读书人很活跃，能推动治理，也会让政策争论越来越尖锐。",
      question: "仁宗朝为什么常被看作北宋政治文化高峰？",
      answer: "因为文官、科举、台谏和士大夫文化都发展成熟。"
    }),
    event({
      id: "nsong-nong-zhigao-rebellion",
      title: "侬智高起事与岭南治理",
      era: "仁宗朝调整",
      time: "1052-1055",
      regions: ["广南西路", "邕州", "岭南"],
      topics: ["边疆", "地方治理", "民变"],
      summary: "侬智高在岭南起事，反映北宋边疆民族、地方治理和财政控制的复杂矛盾。",
      people: ["侬智高", "狄青"],
      background: ["岭南边地族群、贸易和地方权力关系复杂，宋朝行政控制并不稳固。"],
      process: [
        { time: "1052", title: "岭南起事扩大", description: "侬智高起事后攻掠邕州等地，威胁广南地区秩序。事件不是普通地方盗乱，而是边疆治理和地方族群关系失衡的体现。" },
        { time: "1053-1055", title: "狄青平定", description: "宋廷派狄青等率军南下平定局势。军事胜利恢复表面秩序，但岭南治理仍需要处理羁縻、赋役和地方豪强关系。" }
      ],
      results: ["起事被平定。", "北宋认识到岭南边疆治理不能只依靠常规州县制度。"],
      tip: "这个事件补足北宋南方边疆线，不要只盯辽夏。",
      claim: "侬智高起事暴露北宋岭南边疆治理的结构性难题。",
      plainText: "史料读法：侬智高起事说明宋朝在岭南的控制并不深，军事平定只是解决了一层问题。",
      question: "侬智高起事反映什么问题？",
      answer: "反映岭南边疆族群、地方权力和宋朝行政控制之间的矛盾。"
    }),
    event({
      id: "nsong-yingzong-succession",
      title: "英宗继统与濮议",
      aliases: ["英宗继统", "濮议"],
      era: "仁宗朝调整",
      time: "1063-1067",
      regions: ["开封"],
      topics: ["皇权", "礼制", "士大夫政治"],
      summary: "宋英宗以宗室入继大统，围绕生父称号的濮议引发礼法争论和政治分化。",
      people: ["赵曙", "司马光", "欧阳修"],
      background: ["仁宗无子，英宗以宗室身份入继，皇统合法性需要通过礼制解释稳固。"],
      process: [
        { time: "1063", title: "英宗即位", description: "英宗继承仁宗帝位，但其生父并非仁宗，皇统与亲属名分出现礼法难题。宋代士大夫重视礼制，继承问题很快变成政治议题。" },
        { time: "1060s", title: "濮议争论", description: "朝臣围绕英宗应如何尊称生父濮王展开激烈争论。表面是礼制名分，实质牵动皇权、士大夫解释权和政治阵营分化。" }
      ],
      results: ["英宗皇统获得礼制安排。", "士大夫政治分歧加深，神宗朝改革前的政治张力上升。"],
      tip: "濮议不是小礼仪，而是士大夫政治如何介入皇权合法性。",
      claim: "濮议显示北宋礼制问题会迅速政治化。",
      plainText: "白话看法：英宗继位后，怎么称呼亲生父亲成了大争论，因为这关系到皇位继承的解释权。",
      question: "濮议为什么重要？",
      answer: "它把礼制、皇权合法性和士大夫政治分化连接在一起。"
    }),
    event({
      id: "nsong-wang-anshi-reforms",
      title: "王安石变法",
      era: "神宗哲宗变法党争",
      time: "1069-1085",
      regions: ["开封", "全国"],
      topics: ["改革", "财政", "制度"],
      summary: "宋神宗任用王安石推行青苗、免役、市易、保甲等新法，试图富国强兵，引发深刻争议。",
      people: ["赵顼", "王安石", "司马光"],
      background: ["北宋长期冗官、冗兵、边防和财政压力积累，庆历新政失败后问题仍未解决。"],
      process: [
        { time: "1069后", title: "推行新法", description: "王安石在神宗支持下推行青苗、免役、市易、方田均税、保甲等政策。目标是增加国家财政能力，并把地方社会组织纳入国家治理。" },
        { time: "1070s-1080s", title: "争议扩大", description: "新法在执行中出现扰民、地方官逐利和政策变形等问题，反对派则批评其破坏祖宗法度。改革从政策争论逐渐演化为政治阵营对立。" }
      ],
      results: ["北宋财政和基层治理出现新尝试。", "新旧党争加深，政治互信被削弱。"],
      tip: "王安石变法不要简单判断好坏，要分政策目标、执行成本和政治后果。",
      claim: "王安石变法是北宋试图突破财政军政困局的最大改革。",
      plainText: "史料主线是：神宗和王安石想让国家更有钱、更能打，但执行和政治反弹让改革变成长期党争。",
      question: "王安石变法的核心目标是什么？",
      answer: "富国强兵，通过财政、役法、基层组织和军事制度调整增强国家能力。"
    }),
    event({
      id: "nsong-baojia-and-military-reform",
      title: "保甲法与将兵法改革",
      era: "神宗哲宗变法党争",
      time: "1070s",
      regions: ["全国", "西北"],
      topics: ["军事", "改革", "基层治理"],
      summary: "新法中的保甲和将兵法试图改善基层治安与军队战斗力，但执行效果不均。",
      people: ["赵顼", "王安石"],
      background: ["北宋军费高而战斗力不足，中央集兵体系难以有效应对边疆战争。"],
      process: [
        { time: "1070s", title: "保甲组织基层", description: "保甲法试图把乡村民户编组起来，承担治安和训练功能。它能增强国家对基层的触达，也可能加重民户负担。" },
        { time: "1070s", title: "将兵法整军", description: "将兵法让将领相对固定训练和统率部队，试图改善兵不知将、将不知兵的问题。它针对宋军结构弱点，但受财政、官僚和边防条件制约。" }
      ],
      results: ["宋朝尝试提升基层动员和军队效率。", "改革执行差异大，成为新旧党争焦点之一。"],
      tip: "军事改革要和北宋长期军政结构联系，不要只看单条法令。",
      claim: "保甲和将兵法体现王安石变法的国家能力建设方向。",
      plainText: "白话看法：新法不只管钱，也想把基层和军队重新组织起来，但执行时很容易变形。",
      question: "保甲法和将兵法解决什么问题？",
      answer: "一个试图加强基层组织和治安，一个试图提高军队训练和统率效率。"
    }),
    event({
      id: "nsong-xihe-hehuang-expansion",
      title: "熙河开边与河湟经营",
      aliases: ["熙河开边"],
      era: "神宗哲宗变法党争",
      time: "1070s-1090s",
      regions: ["熙河", "河湟", "西北"],
      topics: ["边疆", "军事", "宋夏"],
      summary: "北宋在西北推进熙河开边，试图压缩西夏并经营河湟，但成本和争议长期存在。",
      people: ["赵顼", "王韶"],
      background: ["宋夏长期对峙，神宗朝希望通过西北进取改变被动边防。"],
      process: [
        { time: "1070s", title: "王韶经略熙河", description: "王韶在神宗支持下推进熙河开边，争取吐蕃诸部并建立新的州县和军事据点。它试图从侧翼压缩西夏战略空间。" },
        { time: "后续", title: "经营成本上升", description: "河湟经营需要持续军费、粮运和地方安抚，朝廷内部对收益和成本争论不断。边疆扩张并不只是打胜仗，还要长期消化治理。" }
      ],
      results: ["北宋西北版图和影响扩大。", "边疆经营成本加重，成为党争和财政争论内容。"],
      tip: "熙河开边是北宋少有的主动边疆推进，要和财政压力一起看。",
      claim: "熙河开边体现神宗朝富国强兵在西北的军事化实践。",
      plainText: "史料主线是：宋朝想从西北侧翼压缩西夏，但拿下地区后还要长期花钱经营。",
      question: "熙河开边的矛盾在哪里？",
      answer: "它增强了西北主动性，但治理和军费成本很高。"
    }),
    event({
      id: "nsong-yuanfeng-official-reform",
      title: "元丰改制",
      era: "神宗哲宗变法党争",
      time: "1080-1082",
      regions: ["开封"],
      topics: ["制度", "官制", "改革"],
      summary: "宋神宗推行元丰改制，调整官制名实，试图提高中央行政效率。",
      people: ["赵顼"],
      background: ["北宋前期官、职、差遣分离，名实复杂，行政效率和责任边界存在问题。"],
      process: [
        { time: "1080-1082", title: "调整三省六部", description: "元丰改制恢复和调整三省六部等官制，使部分职官名实更接近实际行政。改革试图减少北宋官制长期形成的重叠和混乱。" },
        { time: "改制后", title: "制度效果有限", description: "改制改善了中央官制形式，但北宋官僚规模、差遣运行和政治派系问题仍然存在。制度名目调整不能单独解决财政和党争。" }
      ],
      results: ["中央官制进一步规范。", "北宋行政结构有所调整，但深层问题仍在。"],
      tip: "元丰改制是制度史节点，和王安石新法同属神宗改革大背景。",
      claim: "元丰改制是神宗朝试图重塑中央行政结构的重要尝试。",
      plainText: "白话看法：神宗不只改财政和军队，也想让中央官制更清楚、更有效。",
      question: "元丰改制主要改什么？",
      answer: "主要调整中央官制名实和行政结构，提高制度运行清晰度。"
    }),
    event({
      id: "nsong-yuanyou-reversal",
      title: "元祐更化与旧党执政",
      aliases: ["元祐更化"],
      era: "神宗哲宗变法党争",
      time: "1085-1093",
      regions: ["开封", "全国"],
      topics: ["党争", "改革", "皇权"],
      summary: "神宗死后，高太后临朝，司马光等旧党废罢多项新法，北宋政治进入新旧党争高峰。",
      people: ["高太后", "司马光", "赵煦"],
      background: ["王安石变法争议巨大，神宗去世后幼主哲宗即位，太皇太后和旧党取得主导权。"],
      process: [
        { time: "1085后", title: "旧党回朝", description: "司马光等旧党人物重新执政，批评新法扰民并主张恢复祖宗旧制。改革路线迅速逆转，政策连续性受到冲击。" },
        { time: "1080s-1090s", title: "废罢新法", description: "青苗、免役等多项新法被废除或调整，新党人物被排挤。政治分歧从政策评价变成人事清算，党争逻辑进一步固化。" }
      ],
      results: ["新法大幅后退。", "新旧党争加深，哲宗亲政后又出现反向清算。"],
      tip: "元祐更化要和绍圣绍述连着看，理解政策反复。",
      claim: "元祐更化把改革争议推向党争化和人事清算。",
      plainText: "史料主线是：神宗死后旧党上台，废除很多新法，但这又为哲宗亲政后的反清算埋下伏笔。",
      question: "元祐更化的后果是什么？",
      answer: "新法被大幅废罢，政治斗争从政策之争走向党派清算。"
    }),
    event({
      id: "nsong-shaosheng-restoration",
      title: "绍圣绍述与哲宗亲政",
      aliases: ["绍圣绍述"],
      era: "神宗哲宗变法党争",
      time: "1093-1100",
      regions: ["开封", "西北"],
      topics: ["党争", "改革", "边疆"],
      summary: "哲宗亲政后恢复神宗新法路线，打击元祐旧党，并继续推进西北政策。",
      people: ["赵煦", "章惇"],
      background: ["高太后去世后，哲宗摆脱旧党主导，试图继承神宗改革和对外进取路线。"],
      process: [
        { time: "1093后", title: "恢复新法路线", description: "哲宗亲政后任用章惇等人，重新推崇神宗政策，史称绍述。旧党人物被贬斥，新旧党争出现反向清算。" },
        { time: "1090s", title: "继续西北经营", description: "朝廷在西北继续推进对夏压力和河湟经营，试图证明新法路线能带来边疆成果。但财政和政治代价仍然存在。" }
      ],
      results: ["新党重新占上风。", "北宋政治报复循环加深，徽宗朝党禁基础形成。"],
      tip: "哲宗不是过渡皇帝，他让新旧党争进一步制度化。",
      claim: "绍圣绍述使北宋政治从政策争论进入更强烈的党派报复。",
      plainText: "白话看法：哲宗亲政后恢复父亲神宗路线，也反过来清算旧党，使政治裂痕更深。",
      question: "绍圣绍述的核心是什么？",
      answer: "恢复神宗新法路线，并对元祐旧党进行政治清算。"
    }),
    event({
      id: "nsong-huizong-caijing-politics",
      title: "徽宗朝蔡京当政与新法变质",
      aliases: ["蔡京当政"],
      era: "徽钦危局与靖康",
      time: "1100-1125",
      regions: ["开封", "全国"],
      topics: ["政治", "党争", "财政"],
      summary: "宋徽宗时期蔡京等以绍述新法为名扩张财政和权力，政治清洗与奢侈财政加重危机。",
      people: ["赵佶", "蔡京"],
      background: ["新旧党争长期积累后，徽宗朝把党争标签和财政扩张结合起来。"],
      process: [
        { time: "1100后", title: "蔡京掌权", description: "蔡京等人借绍述神宗之名进入权力核心，打击元祐党人。政策目标逐渐从制度改革转向权力巩固和财政汲取。" },
        { time: "徽宗朝", title: "财政与政治恶化", description: "朝廷通过新名目聚敛财富，同时宫廷消费和工程活动扩张。政治上党禁加深，真正能纠偏的士大夫空间被压缩。" }
      ],
      results: ["北宋政治生态恶化。", "财政汲取和社会不满上升，末年危机加速。"],
      tip: "徽宗朝不能只看艺术，要看政治和财政如何失控。",
      claim: "徽宗朝新法名义下的权力财政化削弱了北宋自我修复能力。",
      plainText: "史料主线是：徽宗重用蔡京，打着继承新法的旗号扩权聚财，改革精神逐渐变成政治工具。",
      question: "徽宗朝蔡京政治的问题在哪里？",
      answer: "它把新法变成权力和财政工具，加深党禁、聚敛和政治失衡。"
    }),
    event({
      id: "nsong-huashi-gang",
      title: "花石纲与东南民力消耗",
      aliases: ["花石纲"],
      era: "徽钦危局与靖康",
      time: "1100s-1120s",
      regions: ["江南", "开封"],
      topics: ["财政", "社会", "民变"],
      summary: "徽宗朝为宫廷园林搜求奇花异石，花石纲运输扰动东南民生，加剧社会不满。",
      people: ["赵佶", "朱勔"],
      background: ["徽宗朝宫廷消费扩张，江南财赋和物产成为朝廷汲取重点。"],
      process: [
        { time: "徽宗朝", title: "搜求花石", description: "朝廷为艮岳等宫廷工程搜求奇花异石，地方官和承办者层层摊派。江南民户不仅承担财物，还要承受运输和役使压力。" },
        { time: "1110s-1120s", title: "民怨积累", description: "花石纲破坏地方生产和生活秩序，成为东南社会不满的重要象征。它与赋役、官吏侵扰一起，为方腊起义提供背景。" }
      ],
      results: ["东南民力受到消耗。", "徽宗朝社会矛盾加深。"],
      tip: "花石纲不是趣闻，是财政和社会危机的窗口。",
      claim: "花石纲体现徽宗朝宫廷消费对地方社会的过度汲取。",
      plainText: "白话看法：朝廷为了宫廷享乐向江南搜刮奇石花木，地方百姓承担实际成本。",
      question: "花石纲为什么会引发民怨？",
      answer: "因为它把宫廷消费成本转嫁给地方，扰动生产、运输和民户生活。"
    }),
    event({
      id: "nsong-fangla-uprising",
      title: "方腊起义与东南危机",
      aliases: ["方腊起义"],
      era: "徽钦危局与靖康",
      time: "1120-1121",
      regions: ["两浙", "睦州", "江南"],
      topics: ["民变", "财政", "社会危机"],
      summary: "方腊在东南起义，迅速波及两浙和江南部分地区，暴露徽宗朝地方治理和财政汲取危机。",
      people: ["方腊", "童贯"],
      background: ["东南长期承担财赋，花石纲、赋役和官吏侵扰加重社会矛盾。"],
      process: [
        { time: "1120", title: "起义爆发", description: "方腊起义在睦州一带爆发，并迅速扩展到江南重要地区。东南本是北宋财赋重地，起义说明国家汲取已经冲击社会承受能力。" },
        { time: "1121", title: "朝廷镇压", description: "宋廷调集军队平定起义，短期恢复东南秩序。但镇压消耗大量军力和财政，也让北宋在金辽局势变化时更加被动。" }
      ],
      results: ["方腊起义被镇压。", "东南社会和北宋军政资源受到严重消耗。"],
      tip: "方腊起义要和靖康前夜连起来看，它削弱了宋朝应对北方危机的能力。",
      claim: "方腊起义是徽宗朝财政社会矛盾集中爆发。",
      plainText: "史料读法：东南不只是富庶，它被长期汲取后爆发大起义，朝廷虽然平定却付出沉重成本。",
      question: "方腊起义和靖康危机有什么关系？",
      answer: "它消耗北宋财政和军力，使朝廷在随后北方剧变中更难应对。"
    }),
    event({
      id: "nsong-haishang-alliance",
      title: "海上之盟与联金灭辽",
      aliases: ["海上之盟"],
      era: "徽钦危局与靖康",
      time: "1118-1125",
      regions: ["辽", "金", "燕云", "开封"],
      topics: ["外交", "宋金", "辽"],
      summary: "北宋与金结盟夹攻辽，希望收复燕云，但对金实力和自身军力判断失误。",
      people: ["赵佶", "童贯", "完颜阿骨打"],
      background: ["女真崛起建立金，辽国衰落，北宋看到收复燕云的机会。"],
      process: [
        { time: "1118前后", title: "宋金结盟", description: "北宋通过海路与金联系，约定南北夹攻辽国。宋朝希望借金灭辽之机收回燕云，改变百余年边防困局。" },
        { time: "1120s", title: "宋军表现失利", description: "攻辽过程中金军迅速推进，宋军却在燕京方向表现不佳。金由此看清北宋军事虚弱，为随后南下侵宋埋下伏笔。" }
      ],
      results: ["辽国被金灭亡。", "北宋短暂取得部分燕云，但暴露军事实力不足。", "宋金关系迅速转向危险。"],
      tip: "海上之盟是靖康之变的关键前因。",
      claim: "联金灭辽是北宋外交战略上的高风险误判。",
      plainText: "白话看法：宋想借金收复燕云，却让更强的新敌人靠近自己，还暴露了自身军力不足。",
      question: "海上之盟最大的风险是什么？",
      answer: "宋低估金的威胁，高估自己接收燕云和抵御金军的能力。"
    }),
    event({
      id: "nsong-jin-destroys-liao-yanyun",
      title: "金灭辽与燕云短暂回归",
      era: "徽钦危局与靖康",
      time: "1125",
      regions: ["燕京", "辽", "金"],
      topics: ["战争", "宋金", "燕云"],
      summary: "金灭辽后，北宋以巨大代价取得部分燕云地区，但实际控制薄弱且很快失守。",
      people: ["赵佶", "完颜吴乞买"],
      background: ["宋金盟约约定灭辽后归还燕云部分地区，但宋军战力弱，谈判地位不稳。"],
      process: [
        { time: "1125", title: "辽亡", description: "金军灭辽，东北亚和华北边疆格局彻底改变。辽这个长期与宋保持均势的对手消失，金成为更具进攻性的强权。" },
        { time: "1125前后", title: "燕云回归不稳", description: "北宋通过赎买和交涉取得部分燕云州县，但当地残破、控制薄弱，防务没有真正建立。名义回归没有转化为可靠边防。" }
      ],
      results: ["辽朝灭亡。", "金直接成为北宋北方最大威胁。", "燕云问题没有真正解决。"],
      tip: "燕云短暂回归不是胜利终点，而是更大危机前夜。",
      claim: "金灭辽打破宋辽均势，使北宋暴露在金的直接压力下。",
      plainText: "史料主线是：宋终于碰到燕云回归机会，但新兴金国比辽更危险，宋没有建立有效防线。",
      question: "辽亡为什么反而让北宋更危险？",
      answer: "辽作为缓冲消失，金直接面对北宋，并已看出宋军虚弱。"
    }),
    event({
      id: "nsong-jingkang-crisis",
      title: "靖康之变与北宋灭亡",
      aliases: ["靖康之变", "北宋灭亡"],
      era: "徽钦危局与靖康",
      time: "1125-1127",
      regions: ["开封", "金"],
      topics: ["亡国", "宋金", "皇权"],
      summary: "金军两次南下围攻开封，徽宗、钦宗被俘，北宋灭亡。",
      people: ["赵佶", "赵桓", "完颜宗望", "完颜宗翰"],
      background: ["海上之盟后宋金关系破裂，北宋军事、财政和政治决断能力都已严重削弱。"],
      process: [
        { time: "1125-1126", title: "金军第一次围开封", description: "金军南下逼近开封，北宋朝廷仓促求和并割地赔款。虽然暂时退兵，但朝廷没有完成有效防御和政治整顿。" },
        { time: "1126-1127", title: "第二次围城与俘帝", description: "金军再次南下围攻开封，城破后徽宗、钦宗及大量宗室官员被俘北去。北宋中央政权崩溃，南宋在逃亡和重建中开始。" }
      ],
      results: ["北宋灭亡。", "宋室南渡，进入南宋阶段。", "宋金长期对峙取代宋辽格局。"],
      tip: "靖康之变要看长期制度、财政、军事和外交误判的共同结果。",
      claim: "靖康之变是北宋末年政治失衡、军事虚弱和外交误判集中爆发。",
      plainText: "白话看法：北宋不是被一次突袭打垮，而是长期问题在金军压力下集中崩盘。",
      question: "靖康之变为什么是北宋最大转折？",
      answer: "它直接导致北宋灭亡，皇帝被俘，宋朝政治中心南移。"
    })
  ];
})();
(() => {
  const learningCases = {
    "nsong-military-centralization": { label: "宋为何以强干弱枝防五代", claim: "宋初集中禁军、财赋和任官，是对五代军人拥立的制度反应。它降低地方武将改朝的机会，却使边防更依赖高财政与复杂指挥，形成“防内乱”与“应外敌”之间的长期取舍。", sections: [["要防什么", "陈桥兵变证明军队可决定皇位，宋必须拆分调兵、统兵与领兵权。"], ["怎样集中", "禁军、枢密与财政中枢共同限制地方军政独立。"], ["代价", "军队规模和后勤支出上升，边将临机决断受限，面对辽夏金时问题逐渐显现。"]], evidence: { title: "材料锚点：《宋史》兵志与宋初诏令", content: "可比较五代节度使与宋代禁军、地方将领的资源差异。" }, misconception: "重文轻武不是简单的文化偏好，而是针对军人政治风险的制度选择。", memory: ["防陈桥", "军财归中枢", "边防有代价"], question: "宋的军政集中为何能同时带来安全与脆弱？", answer: "它抑制内部分裂，却提高了中央财政负担并降低边军自主弹性。" },
    "nsong-chanyuan-treaty": { label: "澶渊之盟为何不是单纯屈辱", claim: "澶渊之盟以岁币换取宋辽边境长期稳定。对宋而言，支付成本与持续大规模战争相比可能更可控；对辽而言，盟约也承认其政治地位。它是力量均势下的风险管理，而非胜负的单向标签。", sections: [["危机", "辽军南下逼近黄河，宋廷面临守都、军心与财政的即时压力。"], ["为何能议和", "真宗亲临前线稳定局势后，双方都难以低成本取得决定性胜利。"], ["长期影响", "百余年和平让边境贸易与内部发展得以延续，但燕云问题并未消失。"]], evidence: { title: "材料锚点：《续资治通鉴长编》澶渊纪事", content: "应同时看战争压力、盟约条款和后续边境稳定，避免只以岁币判断。" }, misconception: "岁币不自动等于战败赔款；需比较它与持续战争的成本和收益。", memory: ["黄河危机", "均势议和", "长期和平"], question: "澶渊之盟为何能维持很久？", answer: "双方都从稳定边境中受益，且短期内都难以以低代价改变力量均势。" },
    "nsong-western-xia-rise": { label: "西夏如何暴露北宋西北困境", claim: "西夏并非边地小政权的偶发挑战。李元昊将党项部落、河套走廊与国家制度结合，迫使宋在辽之外再承担一条高成本边防线，堡寨、军费和地方治理从此相互纠缠。", sections: [["为何能建国", "党项长期拥有边地军事与地方资源，宋的册封关系无法替代实际控制。"], ["宋为何难胜", "西北地形、补给距离和骑兵机动限制了宋军，堡寨防御比深入进攻更可持续。"], ["制度后果", "边费推动庆历改革、财政讨论与军政调整，西夏问题贯穿中期宋政。"]], evidence: { title: "材料锚点：《宋史·夏国传》与西夏文书研究", content: "中原史料多从宋方叙述，应结合西夏制度与边疆地理看其国家化过程。" }, misconception: "宋夏战争不能只记为宋军战斗力弱；地理、补给和多线边防同样决定战略。", memory: ["党项建国", "堡寨补给", "边费入政"], question: "西夏为何会影响北宋内部改革？", answer: "长期西北军费和防务暴露财政、军队与基层动员的缺口。" },
    "nsong-yuanyou-reversal": { label: "元祐更化为何让党争制度化", claim: "元祐废改新法并非正常轮替。政策、人事与道德评价被捆绑，新旧两方都把前朝官员视为需清算的政治标签，导致后续绍圣再度翻转，国家难以维持长期政策学习。", sections: [["改革遗产", "新法执行确有问题，但也形成了新的财政与行政安排。"], ["更化的方式", "旧党回朝后迅速废罢并排挤新党，政策分歧转为身份阵营。"], ["长期成本", "绍圣复新法又反向清算，官僚更在意站队与自保，边防财政难获得稳定讨论空间。"]], evidence: { title: "材料锚点：《续资治通鉴长编》元祐、绍圣人事记录", content: "比较法令废改和官员升贬，可见党争如何从意见不同变成人事排斥。" }, misconception: "党争不只是思想之争；当人事清洗与政策绑定时，会破坏制度连续性。", memory: ["废法", "排人", "再反转"], question: "元祐更化的长期问题是什么？", answer: "它使政策评价与政治身份绑死，后续政权更替容易变为全面翻案。" },
    "nsong-haishang-alliance": { label: "海上之盟为何把宋推向更危险的北方", claim: "宋联金灭辽的目标是收回燕云，但它误判了金的军事能力与自身攻辽表现。辽的消失并未自动改善宋的边防，反而用一个更具进攻性的强权替换了可长期均势相处的对手。", sections: [["宋的目标", "燕云关系到北方防御纵深，宋希望借金军实现单独难以完成的目标。"], ["判断失误", "金军迅速灭辽，宋军在燕京方向表现不佳，金由此看清宋的军事实力和防线缺口。"], ["格局反转", "燕云短暂回归却无法稳固，金很快把军事压力转向开封。"]], evidence: { title: "材料锚点：《宋史》《金史》海上之盟与攻辽记事", content: "应对照双方作战与交涉，而不只从宋方“收复燕云”愿望理解结盟。" }, misconception: "海上之盟不是“联弱抗强”的简单外交错误；它是对力量、地理和接收能力的综合误判。", memory: ["想取燕云", "金看穿宋弱", "辽亡换强金"], question: "辽亡为何反而让北宋更危险？", answer: "辽是长期均势对手，金更具扩张力且已通过联合作战看清宋的弱点。" },
    "nsong-jingkang-crisis": { label: "靖康为何是长期失衡的集中爆发", claim: "靖康并非一次突袭击垮北宋。军政集中带来的边防局限、党争损害的纠错能力、对金外交的误判，以及开封在平原上的防御压力，在金军两次南下时同时失效。", sections: [["第一轮危机", "1125至1126年宋廷以割地赔款暂缓围城，却未建立可靠的防线和政治协调。"], ["第二轮崩解", "金军再围开封，朝廷的军事、财政与决策体系无法承受，二帝及大量宗室官员被俘。"], ["历史转换", "北宋覆灭不等于宋史结束；南渡后的政权必须在长江以南重新组织财政、军队和合法性。"]], evidence: { title: "材料锚点：《宋史·徽宗纪》《钦宗纪》与《金史》", content: "双方材料都带有归责叙事；两次围城、和议与防务失效的顺序较为明确。" }, misconception: "不要用“徽宗昏庸”替代解释；个人决断在长期制度和战略约束中才产生毁灭性后果。", memory: ["第一次求和", "第二次城破", "南渡重建"], question: "为什么靖康不是单一人物导致的悲剧？", answer: "它将长期军政、党争、外交和地理防御的缺陷集中暴露在极端外压下。" },
    "nsong-wang-anshi-reforms": {
      label: "变法真正要解决什么",
      claim: "王安石变法的核心不是“新党压旧党”，而是北宋在冗兵、冗官、边防和财政压力下，试图把国家的税收、信贷、役法与基层组织重新接起来；争议集中在成本由谁承担、执行能否被控制。",
      sections: [
        ["财政为何吃紧", "宋朝要供养庞大官僚和禁军，又面对辽、西夏的边防支出。传统赋役与地方资源之间的连接不足，朝廷需要新的收入和动员能力。"],
        ["新法怎样介入", "青苗、免役、市易、保甲等措施分别涉及农村信贷、劳役折纳、市场调节和地方治安。它们不是同一项政策，而是试图改变国家进入社会的方式。"],
        ["为何引发党争", "反对者担心地方官为完成考核强行摊派，新法支持者则认为不改革便无法承担财政与边防。分歧既有价值判断，也有具体执行和利益再分配问题。"]
      ],
      evidence: { title: "材料锚点：青苗法与免役法的争论", content: "《宋史》与《续资治通鉴长编》记录王安石、司马光等围绕取息、役钱和地方执行的争论，说明问题并非一句“好法/坏法”可以概括。" },
      misconception: "不要把所有新法都归成单一政策，也不要把变法成败只解释为人物派系胜负。",
      memory: ["冗费边防", "青苗免役保甲", "目标与执行"],
      question: "为什么说王安石变法同时是财政改革和国家能力改革？",
      answer: "它不只增加收入，还试图通过信贷、役法、市场和保甲让中央更稳定地获取资源并组织基层。"
    },
    "nsong-southern-unification": { label: "宋初统一如何收束五代十国", claim: "北宋先取分散的南方政权、再处理有辽援的北汉，是基于交通、财赋与外援关系的战区排序；979年完成五代十国范围内的统一，但燕云仍使北方边防问题延续。", sections: [["南方战区", "荆湖、蜀、岭南与江南政权彼此分散，宋军可依长江和运河逐段取得资源节点。"], ["北方限制", "北汉与辽相互支援，宋需在南方资源已整合后再发动太原战役。"], ["结果边界", "统一结束十国格局，却没有收回燕云，也未消除辽的北方压力。"]], evidence: { title: "材料锚点：《宋史·太祖纪》《太宗纪》与《续资治通鉴长编》", content: "应按荆湖、蜀、江南和太原各战区的接收过程阅读，不把统一写成单一年份。" }, misconception: "979年灭北汉完成的是五代十国范围内的统一，不等于北方战略问题已经解决。" },
    "nsong-huizong-caijing-politics": { label: "徽宗朝为何由政策延续转为东南危机", claim: "蔡京当政、财政取用和花石纲并非彼此孤立；当中央以江南财赋、转运和地方征发持续供给宫廷与工程时，执行压力会沿地方行政传导，方腊起事显示这种压力已转化为区域秩序危机。", sections: [["财政与工程", "中央持续调取东南物资、劳役与运输资源，地方官须在既有税役之外完成额外任务。"], ["地方传导", "花石纲依托漕运和地方征发运行，成本由不同层级向基层转移。"], ["危机结果", "方腊起事不能化约为单一政策后果，但它暴露东南治理、财政与社会压力已相互叠加。"]], evidence: { title: "材料锚点：《宋史·徽宗纪》《蔡京传》与方腊相关纪事", content: "传世人物褒贬很强，应将财政征发、物资运输与起事范围分别核对。" }, misconception: "方腊起事不是花石纲一项政策的机械后果，而是东南多重征发与治理失灵叠加后的危机。" }
  };
  window.NORTHERN_SONG_EVENTS = window.NORTHERN_SONG_EVENTS.map((item) => learningCases[item.id] ? { ...item, learningCase: learningCases[item.id], contentLevel: "core" } : { ...item, contentLevel: "outline" });

  const originalById = new Map(window.NORTHERN_SONG_EVENTS.map((item) => [item.id, item]));
  const mergePlans = {
    "nsong-military-centralization": ["nsong-military-centralization"],
    "nsong-southern-unification": ["nsong-southern-unification", "nsong-northern-han-annexed"],
    "nsong-chanyuan-treaty": ["nsong-chanyuan-treaty", "nsong-east-fengshan-heavenly-texts"],
    "nsong-western-xia-rise": ["nsong-western-xia-rise"],
    "nsong-wang-anshi-reforms": ["nsong-wang-anshi-reforms", "nsong-baojia-and-military-reform", "nsong-xihe-hehuang-expansion", "nsong-yuanfeng-official-reform"],
    "nsong-yuanyou-reversal": ["nsong-yuanyou-reversal", "nsong-shaosheng-restoration"],
    "nsong-huizong-caijing-politics": ["nsong-huizong-caijing-politics", "nsong-huashi-gang", "nsong-fangla-uprising"],
    "nsong-haishang-alliance": ["nsong-haishang-alliance", "nsong-jin-destroys-liao-yanyun"],
    "nsong-jingkang-crisis": ["nsong-jingkang-crisis"]
  };
  const coreAnchors = {
    "nsong-military-centralization": { regnal: "961年前后；宋太祖建隆至乾德年间", coordinate: "34.80N, 114.31E", admin: "开封府，今河南省开封市", terrainTransport: "汴河与开封城；禁军、漕运和全国财赋中枢" },
    "nsong-southern-unification": { regnal: "963-979年；宋太祖乾德至宋太宗太平兴国四年", coordinate: "34.80N, 114.31E", admin: "开封与江南、太原诸战区", terrainTransport: "长江、运河与汾河谷地；南北战区的粮运和军路" },
    "nsong-chanyuan-treaty": { regnal: "1004-1005年；宋真宗景德元年至二年", coordinate: "35.20N, 115.02E", admin: "澶州，今河南省濮阳市", terrainTransport: "黄河下游与河北平原；辽军南下、宋军北援的交通轴线" },
    "nsong-western-xia-rise": { regnal: "1038-1044年；宋仁宗宝元至庆历年间", coordinate: "38.49N, 106.23E", admin: "兴庆府，今宁夏银川市", terrainTransport: "河套、贺兰山与黄河灌区；西北堡寨和补给路线" },
    "nsong-wang-anshi-reforms": { regnal: "1069-1085年；宋神宗熙宁至元丰年间", coordinate: "34.80N, 114.31E", admin: "开封府与各路州县", terrainTransport: "汴河漕运、州县簿籍与西北军费供给网络" },
    "nsong-yuanyou-reversal": { regnal: "1085-1093年；宋哲宗元祐年间", coordinate: "34.80N, 114.31E", admin: "开封府，今河南省开封市", terrainTransport: "中央诏令经路、州、县人事与财政网络传导" },
    "nsong-huizong-caijing-politics": { regnal: "1100-1125年；宋徽宗建中靖国至宣和年间", coordinate: "34.80N, 114.31E", admin: "开封府与两浙、江南东路", terrainTransport: "汴河至江南运河；东南物资、花石与漕运路线" },
    "nsong-haishang-alliance": { regnal: "1118-1125年；宋徽宗政和至宣和年间", coordinate: "34.80N, 114.31E", admin: "开封府与燕京地区", terrainTransport: "海路使节、燕云山地关隘与华北进军路线" },
    "nsong-jingkang-crisis": { regnal: "1125-1127年；宋徽宗宣和末至宋钦宗靖康二年", coordinate: "34.80N, 114.31E", admin: "开封府，今河南省开封市", terrainTransport: "黄河下游平原；开封城防、汴河补给与金军南下通道" }
  };
  const keptIds = Object.keys(mergePlans);
  const coreEvents = keptIds.map((id) => {
    const item = originalById.get(id);
    const members = mergePlans[id].map((memberId) => originalById.get(memberId));
    const process = members.flatMap((member) => member.process.map((step) => ({
      time: step.time,
      title: `${member.title}：${step.title}`,
      description: step.description
    })));
    const learningCase = learningCases[id];
    return {
      ...item,
      timeAnchor: { time: item.time, ...coreAnchors[id] },
      spatialAnchor: coreAnchors[id],
      factLayer: process.slice(0, 5).map((step) => ({
        text: `[事实层] ${step.time}：${step.description}`,
        sourceId: "songshi-zizhi-tongjian"
      })),
      debates: [
        { view: "[主流说]", content: learningCase.claim },
        { view: "[挑战说]", content: learningCase.misconception }
      ],
      causalChain: [
        { kind: "cause", label: "[表层因]", title: "直接条件", description: process[0]?.description || item.summary },
        { kind: "cause", label: "[深层因]", title: "制度与资源", description: process[1]?.description || item.background?.[0] || item.summary },
        { kind: "cause", label: "[结构因]", title: "北宋结构", description: learningCase.claim },
        { kind: "impact", label: "[传导机制]", title: "后续关联", description: item.results?.[0] || item.summary }
      ],
      process,
      contentLevel: "core",
      contentPresentation: "tiered",
      learningCase,
      mergedEventIds: members.slice(1).map((member) => member.id)
    };
  });
  const mergedIds = new Set(Object.values(mergePlans).flat());
  const outlineEvents = window.NORTHERN_SONG_EVENTS.filter((item) => !mergedIds.has(item.id));
  const timelineKey = (item) => Number(String(item.time || "").match(/\d+/)?.[0] || 0);
  const timeline = [...coreEvents, ...outlineEvents].sort((left, right) => timelineKey(left) - timelineKey(right));
  window.NORTHERN_SONG_EVENTS = timeline.map((item, index) => ({
    ...item,
    previousEventIds: index ? [timeline[index - 1].id] : [],
    nextEventIds: index < timeline.length - 1 ? [timeline[index + 1].id] : []
  }));
})();
