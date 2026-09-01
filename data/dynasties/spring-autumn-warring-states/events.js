(() => {
  const dynastyId = "spring-autumn-warring-states";
  const dynasty = "春秋战国";
  const source = {
    id: "saws-main-source",
    type: "经传、正史与编年史",
    title: "《左传》《史记》《战国策》《资治通鉴》先秦相关纪事",
    author: "左丘明传统归名、司马迁、刘向、司马光等",
    authorityLevel: "公开权威史料入口，待逐条补卷目链接",
    note: "先提供春秋战国主线白话学习入口，后续逐条补《左传》《史记》《战国策》具体链接。",
    credibility: "高",
    credibilityLevel: "high",
    url: "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98"
  };

  function event(item) {
    return {
      id: item.id,
      title: item.title,
      aliases: item.aliases || [],
      era: item.era,
      period: dynasty,
      time: item.time,
      regions: item.regions || ["中原"],
      topics: item.topics || [],
      summary: item.summary,
      bookmarked: false,
      people: (item.people || []).map((name) => ({
        name,
        role: "关键人物",
        years: "",
        color: "var(--accent-gold)",
        bio: `${name}是此事件中的关键行动者，具体作用需要结合事件过程理解。`,
        events: [item.title]
      })),
      relations: [],
      background: item.background,
      process: item.process,
      results: item.results,
      debates: [{ view: "学习提示", content: item.tip }],
      claims: [{
        statement: item.claim,
        status: "较稳妥",
        statusType: "stable",
        confidence: "medium",
        sourceIds: ["saws-main-source"],
        note: "当前先按春秋战国主线整理，后续可逐条补公开卷目链接。"
      }],
      citations: [{
        sourceId: "saws-main-source",
        reference: item.reference || "《左传》《史记》《战国策》相关纪事",
        status: "待核原文",
        plainText: item.plainText,
        note: "不是纯原文摘录，先给学习用白话释义；后续补公开卷目链接。"
      }],
      causalChain: item.causalChain || [],
      sources: [source],
      reviewQuestions: [{ type: "主线理解", question: item.question, answer: item.answer }],
      notes: [],
      unificationProfile: item.unificationProfile,
      dynastyId,
      dynasty,
      topicIds: item.topicIds || []
    };
  }

  window.SAWS_EVENTS = [
    event({
      id: "saws-eastward-move",
      title: "周平王东迁与东周开始",
      aliases: ["平王东迁"],
      era: "春秋前期",
      time: "前770",
      regions: ["镐京", "洛邑"],
      topics: ["东周", "王室衰微", "分封"],
      summary: "犬戎攻破镐京后，周平王迁都洛邑，西周结束，东周开始，周王室控制力明显下降。",
      people: ["周平王", "周幽王", "郑武公"],
      background: ["西周晚期王室权威下降，宗周所在的关中安全恶化，诸侯力量在护送和拥立过程中变得更关键。"],
      process: [
        { time: "前771", title: "镐京陷落", description: "犬戎攻入镐京，周幽王被杀，西周宗周根基崩溃。王室失去关中核心区，原有分封秩序受到严重打击。" },
        { time: "前770", title: "迁都洛邑", description: "周平王在郑、晋、秦等诸侯支持下迁都洛邑。迁都保住王室名义，却说明周天子已需要依赖诸侯保护。" },
        { time: "东迁后", title: "王室衰微", description: "东周王室土地、军队和财政都大幅缩水，只能以礼制名分维持共主地位，实际政治竞争转向诸侯之间。" }
      ],
      results: ["东周开始。", "周天子权威下降。", "诸侯竞争成为春秋主线。"],
      tip: "东迁是春秋战国长期分裂的起点，不只是换都城。",
      claim: "周平王东迁标志西周封建秩序进入衰退阶段。",
      plainText: "白话看法：周王室还在，但已经没有足够实力控制诸侯，春秋局面由此展开。",
      question: "为什么东迁是春秋战国的起点？",
      answer: "因为周王室失去西周核心实力后，诸侯开始成为实际政治主角。"
    }),
    event({
      id: "saws-zheng-zhuang-rise",
      title: "郑庄公小霸与王室受挫",
      aliases: ["郑庄公小霸"],
      era: "春秋前期",
      time: "前743-前701",
      regions: ["郑", "洛邑", "繻葛"],
      topics: ["诸侯", "王室", "霸政前奏"],
      summary: "郑庄公利用靠近王畿和强大国力挑战周王室，繻葛之战中王师失败，周天子威望进一步受损。",
      people: ["郑庄公", "周桓王"],
      background: ["东迁后郑国护王有功，又控制中原交通要地，具备在王畿周边扩张影响的条件。"],
      process: [
        { time: "郑庄公时期", title: "郑国坐大", description: "郑国依靠地理位置和政治资源在中原活跃，既借周王室名义行事，又逐渐不受王室约束。" },
        { time: "前707", title: "繻葛之战", description: "周桓王率诸侯讨伐郑国失败，并在战斗中受伤。王师被诸侯击败，象征周天子的军事威慑已严重下降。" },
        { time: "战后", title: "霸政前奏", description: "郑国虽未形成长期霸主秩序，但它展示了强诸侯可以凌驾王室的现实，为齐桓公等霸主出现铺路。" }
      ],
      results: ["周王室军事威望受挫。", "强诸侯主导中原政治的趋势加强。"],
      tip: "郑庄公是春秋霸政出现前的重要过渡人物。",
      claim: "郑庄公小霸说明东周王室已经无力单独约束强国。",
      plainText: "史料主线是：郑国原本护王有功，后来强到可以击败王师，周王室共主地位变得更虚弱。",
      question: "郑庄公为什么不是普通诸侯？",
      answer: "因为他率先展示强诸侯能挑战王室，是春秋霸政的前奏。"
    }),
    event({
      id: "saws-qi-huan-hegemony",
      title: "齐桓公尊王攘夷与春秋首霸",
      aliases: ["春秋首霸"],
      era: "春秋霸政",
      time: "前685-前643",
      regions: ["齐", "中原"],
      topics: ["霸主", "尊王攘夷", "改革"],
      summary: "齐桓公任用管仲改革，以尊王攘夷号召会盟诸侯，成为春秋首霸。",
      people: ["齐桓公", "管仲"],
      background: ["周王室衰弱后，中原诸侯仍需要一种能维持秩序的政治名义，齐国凭海盐经济和改革实力率先具备条件。"],
      process: [
        { time: "前685以后", title: "管仲改革", description: "管仲帮助齐国整顿内政、财政和军政，使齐国拥有较强动员能力。霸主不是只靠名声，而要有国家实力支撑。" },
        { time: "前681以后", title: "多次会盟", description: "齐桓公以会盟方式协调诸侯，打着尊王攘夷旗号保护周王室和中原秩序，获得政治合法性。" },
        { time: "霸业后期", title: "霸权依赖个人和制度", description: "齐桓公晚年内政失序，说明春秋霸权既依赖改革积累，也高度依赖君主和重臣组合。" }
      ],
      results: ["齐桓公成为春秋首霸。", "尊王攘夷成为霸政的重要政治语言。"],
      tip: "齐桓公霸业要看管仲改革和会盟秩序，不要只背春秋五霸。",
      claim: "齐桓公霸政是周王室衰微后诸侯秩序的一种替代方案。",
      plainText: "白话看法：齐国用实力维持诸侯秩序，但仍借周天子的名义来取得合法性。",
      question: "尊王攘夷为什么有用？",
      answer: "它既维护周王室名义，又让强国以保护中原的名义领导诸侯。"
    }),
    event({
      id: "saws-song-xiang-failure",
      title: "宋襄公争霸失败",
      era: "春秋霸政",
      time: "前643-前638",
      regions: ["宋", "泓水"],
      topics: ["霸政", "礼制", "战争"],
      summary: "齐桓公死后宋襄公试图继承霸权，但泓水之战败于楚，说明旧礼观念已难适应春秋现实战争。",
      people: ["宋襄公", "楚成王"],
      background: ["齐桓公死后霸权空缺，中等诸侯也试图借会盟和礼制争夺领导权。"],
      process: [
        { time: "前643后", title: "霸权空缺", description: "齐国内乱后无法继续主持诸侯秩序，宋襄公试图以礼义和会盟承接霸主地位，但宋国实力并不足以压服大国。" },
        { time: "前638", title: "泓水之战", description: "宋襄公在战场上拘泥旧礼，未能利用战机，最终被楚军击败。战争规则已经从礼制竞争转向实际胜负。" },
        { time: "战后", title: "南方楚国压力上升", description: "宋国失败后，中原诸侯认识到楚国已是不可忽视的大国，晋楚争霸的格局逐渐形成。" }
      ],
      results: ["宋襄公争霸失败。", "楚国北上压力更加突出。", "春秋战争现实化趋势明显。"],
      tip: "泓水之战常被用来说明礼制战争向现实战争转变。",
      claim: "宋襄公失败体现春秋礼制秩序已无法约束争霸战争。",
      plainText: "史料主线是：宋襄公想用旧礼做霸主，但面对楚国强兵，礼让不能替代军事能力。",
      question: "宋襄公失败说明什么？",
      answer: "说明春秋战争越来越看实力和战机，旧礼制已难以决定胜负。"
    }),
    event({
      id: "saws-jin-wen-chengpu",
      title: "晋文公回国与城濮之战",
      aliases: ["城濮之战"],
      era: "春秋霸政",
      time: "前636-前632",
      regions: ["晋", "城濮", "楚"],
      topics: ["霸主", "晋楚争霸", "会盟"],
      summary: "晋文公回国整顿晋国，在城濮之战击败楚军，并通过践土会盟确立霸主地位。",
      people: ["晋文公", "楚成王", "子玉"],
      background: ["晋国内乱后需要重新整合，楚国北上威胁中原，诸侯需要新的强国制衡楚国。"],
      process: [
        { time: "前636", title: "重耳即位", description: "长期流亡的重耳回国成为晋文公，依靠追随集团和国内贵族重建政治秩序，为晋国重新参与中原霸政奠定基础。" },
        { time: "前632", title: "城濮之战", description: "晋军与楚军在城濮决战，晋文公利用盟友和战术安排击败楚军，阻止楚国继续压迫中原。" },
        { time: "战后", title: "践土会盟", description: "晋文公会盟诸侯并尊奉周王室，晋国成为新的中原霸主，晋楚争霸成为春秋中期主线。" }
      ],
      results: ["晋文公确立霸业。", "晋楚争霸格局形成。"],
      tip: "城濮之战是春秋霸权从齐转向晋的重要节点。",
      claim: "晋文公霸业使中原诸侯获得制衡楚国的核心力量。",
      plainText: "白话看法：晋国通过打败楚国取得霸主资格，霸主地位来自军事胜利和会盟承认。",
      question: "城濮之战为什么重要？",
      answer: "它确立晋文公霸主地位，并奠定晋楚长期争霸格局。"
    }),
    event({
      id: "saws-qin-mu-western-hegemony",
      title: "秦穆公西向扩张",
      era: "春秋霸政",
      time: "前659-前621",
      regions: ["秦", "西戎", "关中"],
      topics: ["秦国", "西戎", "霸主"],
      summary: "秦穆公在东方受晋制约后转向西方，扩张西戎，奠定秦国关中和西部发展的基础。",
      people: ["秦穆公", "百里奚", "蹇叔"],
      background: ["秦国处在西部边缘，东方通道受晋国影响，必须在关中和西戎方向寻找发展空间。"],
      process: [
        { time: "穆公前期", title: "任用贤臣", description: "秦穆公任用百里奚、蹇叔等人整顿国政，改善军政和外交判断，使秦国从西陲诸侯向区域强国发展。" },
        { time: "崤之战后", title: "东进受挫", description: "秦军东进在崤之战中遭晋军重创，说明秦国暂时难以越过晋国进入中原争霸核心。" },
        { time: "后期", title: "西霸戎狄", description: "秦国转向西方，征服或控制多个西戎部族，扩展土地和人口，为战国秦国崛起积累地缘基础。" }
      ],
      results: ["秦国西部基础扩大。", "秦国长期以关中为根基的格局加强。"],
      tip: "秦的崛起不是从商鞅突然开始，春秋秦穆公已奠定西部基础。",
      claim: "秦穆公西向扩张为后世秦国崛起提供地缘和资源基础。",
      plainText: "史料主线是：秦向东被晋挡住后，把力量投向西方，扩大了自己的基本盘。",
      question: "秦穆公为什么重要？",
      answer: "他让秦国从西陲诸侯成长为有广阔西部基础的大国。"
    }),
    event({
      id: "saws-chu-zhuang-hegemony",
      title: "楚庄王问鼎与邲之战",
      aliases: ["邲之战"],
      era: "春秋霸政",
      time: "前613-前591",
      regions: ["楚", "洛邑", "邲"],
      topics: ["楚国", "霸主", "晋楚争霸"],
      summary: "楚庄王整顿楚国并北上争霸，在邲之战击败晋军，楚国霸权达到高峰。",
      people: ["楚庄王", "周定王"],
      background: ["楚国长期被中原诸侯视为南方强国，随着国力增强，开始更直接争夺中原秩序主导权。"],
      process: [
        { time: "楚庄王前期", title: "整顿内政", description: "楚庄王稳定国内贵族和军政秩序，增强北上争霸能力。楚国霸业并非只靠地大，而靠内部整合。" },
        { time: "问鼎中原", title: "挑战周室象征", description: "楚庄王问鼎轻重的故事反映楚国对周王室象征权威的挑战，也说明中原秩序已无法排斥楚国。" },
        { time: "前597", title: "邲之战胜晋", description: "楚军在邲之战击败晋军，楚庄王由此取得霸主声望，晋楚力量对比阶段性转向楚国。" }
      ],
      results: ["楚庄王称霸。", "楚国成为中原秩序的核心竞争者。"],
      tip: "问鼎不是单纯典故，要看楚国挑战周礼秩序的政治含义。",
      claim: "楚庄王霸业说明南方楚国已能正面主导中原争霸。",
      plainText: "白话看法：楚国从被中原排斥的南方大国，变成能打败晋国、影响周王室的霸主。",
      question: "楚庄王问鼎说明什么？",
      answer: "说明楚国已强到可以挑战周王室象征权威和中原霸权。"
    }),
    event({
      id: "saws-jin-qing-dafu-rise",
      title: "晋国六卿坐大",
      era: "春秋晚期",
      time: "前6世纪-前5世纪",
      regions: ["晋"],
      topics: ["卿大夫", "晋国", "战国前奏"],
      summary: "晋国公室衰弱，韩、赵、魏、智等卿族掌握军政土地，三家分晋的结构前提形成。",
      people: ["赵氏", "韩氏", "魏氏", "智氏"],
      background: ["晋国长期霸业依赖卿大夫统兵治政，随着公室弱化，卿族逐渐成为实际权力中心。"],
      process: [
        { time: "春秋中后期", title: "卿族掌军政", description: "晋国多个卿族控制军队、采邑和外交事务，国君对核心资源的控制下降，国家权力逐渐被大夫家族分割。" },
        { time: "前5世纪", title: "卿族兼并", description: "韩、赵、魏、智等家族相互竞争，兼并弱族并扩大封邑，晋国权力由公室转向大夫家族。" },
        { time: "三家分晋前", title: "智氏败亡", description: "赵、韩、魏联合灭智氏，晋国最强卿族被清除，三家瓜分晋国的格局基本形成。" }
      ],
      results: ["晋公室名存实弱。", "韩赵魏三家分晋条件成熟。"],
      tip: "三家分晋不是突然发生，而是晋国内部卿族长期坐大的结果。",
      claim: "晋国六卿坐大标志春秋贵族政治向战国封君国家转变。",
      plainText: "史料主线是：晋国霸权越强，卿大夫掌握资源越多，最后反而掏空了晋公室。",
      question: "晋国为什么会被三家瓜分？",
      answer: "因为卿大夫长期掌握军政土地，公室逐渐失去实际控制力。"
    }),
    event({
      id: "saws-wu-yue-rise",
      title: "吴越争霸与南方入局",
      aliases: ["吴越争霸"],
      era: "春秋晚期",
      time: "前6世纪-前473",
      regions: ["吴", "越", "楚"],
      topics: ["吴越", "南方", "争霸"],
      summary: "吴国、越国先后崛起并卷入中原争霸，夫差北上会盟，越王勾践灭吴，南方政治力量更深进入诸侯格局。",
      people: ["阖闾", "夫差", "勾践", "伍子胥"],
      background: ["春秋后期楚国压力和中原争霸牵动东南地区，吴越通过军事改革和对外战争迅速崛起。"],
      process: [
        { time: "前506", title: "吴破楚入郢", description: "吴王阖闾时期，吴军在伍子胥、孙武等传统叙事人物推动下攻破楚都郢，显示东南吴国已能重创老牌大国楚国。" },
        { time: "前494", title: "夫差败越", description: "吴王夫差击败越国，勾践被迫臣服。吴国随后北上争霸，试图进入中原会盟体系。" },
        { time: "前473", title: "越灭吴", description: "越王勾践长期恢复国力并最终灭吴。吴越争霸说明春秋晚期竞争范围已从中原扩展到东南。" }
      ],
      results: ["吴国兴亡，越国取代吴国。", "东南地区深度卷入春秋争霸。"],
      tip: "吴越争霸不是边缘故事，它说明春秋格局已经全国化。",
      claim: "吴越争霸把东南力量纳入春秋后期大国竞争。",
      plainText: "白话看法：春秋不再只是中原和楚晋，吴越也能影响大国格局。",
      question: "吴越争霸为什么应纳入主线？",
      answer: "因为它改变楚国和中原争霸环境，并显示东南地区成为重要政治力量。"
    }),
    event({
      id: "saws-confucius-and-hundred-schools-prelude",
      title: "孔子周游与士阶层兴起",
      era: "春秋晚期",
      time: "前551-前479",
      regions: ["鲁", "卫", "中原"],
      topics: ["思想", "士", "儒家"],
      summary: "孔子在礼崩乐坏背景下整理礼乐、周游列国，士人以知识和政治方案参与诸侯竞争的时代开启。",
      people: ["孔子"],
      background: ["贵族世官秩序松动后，士阶层活动空间扩大，诸侯需要能处理礼制、行政和外交的人才。"],
      process: [
        { time: "孔子早年", title: "整理礼乐", description: "孔子关注周礼和政治秩序，希望以礼乐重建社会规范。这反映春秋晚期对旧秩序崩解的回应。" },
        { time: "周游列国", title: "推行政治主张", description: "孔子带弟子周游列国，试图向诸侯推行仁政和礼治方案。虽然当时难以实现，却开创士人以学说影响政治的路径。" },
        { time: "后世影响", title: "儒家形成", description: "孔子弟子整理传播其思想，儒家逐渐成为战国诸子百家之一，并在后世长期影响中国政治文化。" }
      ],
      results: ["士阶层思想影响上升。", "儒家思想源流形成。"],
      tip: "思想史要和社会结构变化联系，不是单独背名言。",
      claim: "孔子活动体现春秋晚期士人政治和诸子思想的兴起。",
      plainText: "史料主线是：旧贵族秩序松动后，有知识和政治方案的士人开始走到历史中心。",
      question: "孔子为什么应放进春秋战国主线？",
      answer: "因为他代表士阶层和思想方案在乱世政治中的兴起。"
    }),
    event({
      id: "saws-three-families-partition-jin",
      title: "三家分晋与战国格局形成",
      era: "战国形成",
      time: "前453-前403",
      regions: ["晋", "韩", "赵", "魏"],
      topics: ["战国七雄", "分裂", "卿大夫"],
      summary: "韩、赵、魏瓜分晋国并被周天子正式承认为诸侯，战国七雄格局基本形成。",
      people: ["韩氏", "赵氏", "魏氏", "周威烈王"],
      background: ["晋国六卿长期坐大，智氏被灭后韩赵魏掌握晋国主要土地和军政资源。"],
      process: [
        { time: "前453", title: "三家灭智", description: "韩、赵、魏联合消灭智氏，晋国内部最强卿族败亡，三家实际控制晋国大部分土地。" },
        { time: "前5世纪", title: "晋国名存实亡", description: "晋国公室保留空名，韩赵魏各自运作军政和外交，实际已经成为独立政权，旧诸侯名分落后于现实权力。" },
        { time: "前403", title: "周天子命为诸侯", description: "周威烈王正式承认韩、赵、魏为诸侯，这一名分确认标志战国新格局被制度化承认。" }
      ],
      results: ["晋国分裂为韩、赵、魏。", "战国七雄格局基本形成。"],
      tip: "三家分晋通常被视为春秋到战国的核心分界。",
      claim: "三家分晋标志卿大夫取代旧诸侯公室成为新国家主体。",
      plainText: "白话看法：晋国内部大夫家族把国家瓜分，并最终得到周天子承认，旧分封秩序进一步瓦解。",
      question: "为什么三家分晋是战国开端标志？",
      answer: "因为它把春秋贵族内部夺权变成新的诸侯国家格局。"
    }),
    event({
      id: "saws-tian-family-replaces-qi",
      title: "田氏代齐",
      era: "战国形成",
      time: "前481-前386",
      regions: ["齐"],
      topics: ["齐国", "卿大夫", "政权更替"],
      summary: "田氏逐步取代姜姓齐国公室，最终获得诸侯名分，齐国政权结构发生根本变化。",
      people: ["田氏", "齐康公", "周安王"],
      background: ["齐国内部大夫田氏长期经营民心和军政资源，公室权力逐渐被架空。"],
      process: [
        { time: "春秋晚期", title: "田氏坐大", description: "田氏通过施惠民众、掌握军政和削弱对手，逐步成为齐国最强大夫家族，公室对地方和军队的控制同步下降。" },
        { time: "前481以后", title: "控制齐政", description: "田氏实际掌握齐国政权，姜姓齐君名义仍在，但已经难以控制国家资源，齐国进入权臣代公室阶段。" },
        { time: "前386", title: "正式列侯", description: "周天子承认田和为齐侯，田氏取代姜齐成为合法诸侯，战国齐国由此完成政权家族更替。" }
      ],
      results: ["田齐取代姜齐。", "战国政权更替不再局限于王室血统。"],
      tip: "田氏代齐和三家分晋一样，说明旧贵族秩序彻底松动。",
      claim: "田氏代齐体现战国国家权力从旧宗法血统转向实际军政控制。",
      plainText: "史料主线是：田氏先掌握齐国实际权力，再取得名分，齐国换了统治家族。",
      question: "田氏代齐为什么重要？",
      answer: "它说明大夫家族可以取代旧诸侯公室，战国政治更重实际实力。"
    }),
    event({
      id: "saws-li-kui-wei-reform",
      title: "李悝变法与魏国强盛",
      aliases: ["李悝变法"],
      era: "战国变法",
      time: "前445-前396",
      regions: ["魏"],
      topics: ["变法", "魏国", "法制"],
      summary: "魏文侯任用李悝、吴起等改革，魏国率先强盛，战国竞争进入制度和人才竞争阶段。",
      people: ["魏文侯", "李悝", "吴起"],
      background: ["战国初期新兴国家需要摆脱旧贵族限制，用法令、军功和农业财政增强国家能力。"],
      process: [
        { time: "魏文侯时期", title: "任用人才", description: "魏文侯重用李悝、吴起、西门豹等人才，说明战国竞争越来越依赖可流动的士人和制度改革。" },
        { time: "李悝变法", title: "法制财政调整", description: "李悝推行尽地力、平籴和法经等改革传统，提高农业、财政和法令管理能力，使国家更能直接动员民力。" },
        { time: "战国初期", title: "魏国称强", description: "魏国凭借改革和军事人才成为战国初期最强国家，对秦、韩、赵、齐等国形成压力。" }
      ],
      results: ["魏国率先强盛。", "变法成为战国强国共同道路。"],
      tip: "战国不是简单打仗，核心是国家动员能力竞争。",
      claim: "李悝变法开启战国制度竞争的重要先声。",
      plainText: "史料主线是：魏国先改革，所以先强；后来秦国也会走更彻底的变法道路。",
      question: "魏国为什么能在战国初期强盛？",
      answer: "因为它较早通过变法、人才和军事改革提高国家动员能力。"
    }),
    event({
      id: "saws-wuqi-chu-reform",
      title: "吴起变法与楚国贵族阻力",
      aliases: ["吴起变法"],
      era: "战国变法",
      time: "前401-前381",
      regions: ["楚"],
      topics: ["变法", "楚国", "贵族"],
      summary: "吴起在楚悼王支持下推行变法，试图削弱贵族、强化军政，但楚悼王死后吴起被杀，改革受挫。",
      people: ["吴起", "楚悼王"],
      background: ["楚国疆域广大但贵族势力强，国家资源难以像新兴强国那样集中动员。"],
      process: [
        { time: "楚悼王时期", title: "吴起入楚", description: "吴起受楚悼王任用，试图以法令和军政改革解决楚国贵族坐大、行政低效的问题。" },
        { time: "变法期间", title: "削贵族强军政", description: "改革限制旧贵族特权，整顿官制和军队，使楚国短期战力增强，但直接触动贵族利益。" },
        { time: "前381", title: "吴起被杀", description: "楚悼王去世后，贵族反扑并杀死吴起。楚国改革受挫，显示变法成败取决于君主支持和利益结构。" }
      ],
      results: ["楚国改革未能长期延续。", "贵族阻力成为楚国制度转型难点。"],
      tip: "吴起变法能帮助理解为什么楚国大而不够强。",
      claim: "吴起变法失败暴露楚国贵族结构对中央集权改革的限制。",
      plainText: "白话看法：楚国不是没有改革方案，而是贵族势力太强，改革者一失去君主保护就被反扑。",
      question: "吴起变法为什么失败？",
      answer: "因为改革触动贵族利益，又过度依赖楚悼王个人支持。"
    }),
    event({
      id: "saws-shang-yang-reforms",
      title: "商鞅变法与秦国崛起",
      aliases: ["商鞅变法"],
      era: "战国变法",
      time: "前356-前338",
      regions: ["秦", "关中"],
      topics: ["变法", "秦国", "法家"],
      summary: "秦孝公任用商鞅变法，推行军功爵、县制、什伍连坐和重农抑商，秦国国家动员能力大幅提升。",
      people: ["秦孝公", "商鞅"],
      background: ["秦国虽有西部地缘基础，但战国初期仍被东方诸国视为落后，必须用制度改革突破。"],
      process: [
        { time: "前356", title: "第一次变法", description: "商鞅推行什伍连坐、奖励耕战和军功爵，打破旧贵族世袭优势，把国家资源导向农业生产和战争。" },
        { time: "前350前后", title: "迁都咸阳与县制", description: "秦国迁都咸阳并推行县制，强化中央对地方的直接控制。县制让秦国比传统分封更能统一征税征兵。" },
        { time: "变法后", title: "秦国战力提升", description: "秦国以法令、军功和土地制度重组社会，士兵、农民和官吏都被纳入国家奖励惩罚体系，战争能力持续上升。" }
      ],
      results: ["秦国迅速强盛。", "军功爵和县制成为秦统一的重要制度基础。"],
      tip: "商鞅变法是理解秦一统的核心前因。",
      claim: "商鞅变法把秦国改造成战国后期最强国家机器。",
      plainText: "史料主线是：秦国通过奖励耕战和按军功分配地位，把整个社会改造成服务战争和农业的体系。",
      question: "商鞅变法为什么能推动秦统一？",
      answer: "它显著提高秦国征兵、征税、奖惩和地方控制能力。"
    }),
    event({
      id: "saws-guiling-maling",
      title: "桂陵马陵之战与魏国衰落",
      aliases: ["桂陵马陵"],
      era: "战国变法",
      time: "前354-前341",
      regions: ["桂陵", "马陵", "齐", "魏"],
      topics: ["齐魏争霸", "军事", "孙膑"],
      summary: "齐国在桂陵、马陵两次击败魏国，魏国霸权衰落，齐秦等强国上升。",
      people: ["孙膑", "庞涓", "齐威王", "魏惠王"],
      background: ["魏国战国初期长期强盛，但多线扩张引发齐、赵、韩等国联合或反击。"],
      process: [
        { time: "前354", title: "桂陵之战", description: "魏攻赵时，齐军采用围魏救赵策略攻击魏国要害，迫使魏军回救并遭受打击，魏国扩张节奏被打断。" },
        { time: "前341", title: "马陵之战", description: "齐军再次利用诱敌和伏击击败魏军，庞涓败死，魏国精锐受到重创，战国初期魏国优势明显下降。" },
        { time: "战后", title: "魏国霸权下降", description: "魏国连续败于齐国，战国初期领先优势被削弱，秦国在西方获得更大扩张空间。" }
      ],
      results: ["魏国霸权衰落。", "齐国威望上升。", "战国强国格局重新调整。"],
      tip: "这两战要和魏国变法强盛、秦国后起联系起来看。",
      claim: "桂陵、马陵之战打破魏国战国初期优势。",
      plainText: "白话看法：魏国早期最强，但两次被齐国打败后，优势明显下降。",
      question: "桂陵马陵为什么重要？",
      answer: "它们削弱魏国霸权，为秦、齐等国上升打开空间。"
    }),
    event({
      id: "saws-hundred-schools",
      title: "诸子百家与战国士人政治",
      era: "战国变法",
      time: "前5世纪-前3世纪",
      regions: ["齐", "魏", "楚", "秦"],
      topics: ["思想", "诸子百家", "士人"],
      summary: "儒、墨、道、法、兵、纵横等学派兴起，士人以治国、战争和秩序方案参与各国竞争。",
      people: ["孟子", "墨子", "庄子", "韩非", "苏秦", "张仪"],
      background: ["旧贵族秩序瓦解后，各国求强求治，士人凭学说和技能在列国之间流动。"],
      process: [
        { time: "战国前中期", title: "学派竞争", description: "儒家讲仁政礼义，墨家讲兼爱非攻，法家讲法术势，道家反思权力和秩序，各家都回应乱世问题。" },
        { time: "稷下学宫等", title: "士人聚集", description: "齐国稷下学宫等场所吸引大量学者，学术讨论与政治咨询相连，思想成为国家竞争资源。" },
        { time: "战国后期", title: "法家影响上升", description: "随着兼并战争加剧，能提高君主集权和国家动员的法家方案更受强国重视，尤其影响秦国。" }
      ],
      results: ["中国思想史核心学派形成。", "政治思想与战国国家竞争紧密结合。"],
      tip: "诸子百家不是纯文化栏目，而是各国求强求治的思想工具箱。",
      claim: "诸子百家反映战国社会结构和国家竞争的深刻变化。",
      plainText: "白话看法：各家学说都在回答乱世怎么治理、怎么打仗、怎么建立秩序。",
      question: "为什么战国会出现诸子百家？",
      answer: "因为旧秩序瓦解，各国急需新的治理和竞争方案，士人因此获得空间。"
    }),
    event({
      id: "saws-suqin-zhangyi-diplomacy",
      title: "合纵连横与纵横家外交",
      era: "秦一统前夜",
      time: "前4世纪-前3世纪",
      regions: ["秦", "六国"],
      topics: ["外交", "合纵连横", "秦六国"],
      summary: "战国后期围绕秦国扩张，六国合纵抗秦与秦国连横破合纵反复展开，外交成为兼并战争的重要组成部分。",
      people: ["苏秦", "张仪"],
      background: ["秦国变法后不断东进，东方六国既需要联合抗秦，又受自身利益冲突牵制。"],
      process: [
        { time: "战国中后期", title: "合纵抗秦", description: "合纵主张东方诸国联合抵抗秦国，核心难点是六国利益不一致，很难长期保持信任和统一行动。" },
        { time: "张仪时期", title: "连横破纵", description: "秦国利用连横外交分别拉拢、威胁或欺骗各国，打破合纵联盟，使六国难以形成稳定抗秦战线。" },
        { time: "后续", title: "外交服务战争", description: "战国外交不只是口舌之争，而是为割地、结盟、离间和军事进攻服务，直接影响秦统一进程。" }
      ],
      results: ["六国抗秦联盟难以稳定。", "秦国利用外交削弱对手协同。"],
      tip: "合纵连横是理解六国为何不能共同抗秦的关键。",
      claim: "战国外交格局加速了秦强六弱的形成。",
      plainText: "史料主线是：六国知道秦强，但彼此也互相猜疑，秦就利用这种分裂逐个击破。",
      question: "六国为什么难以长期合纵？",
      answer: "因为各国利益、边界矛盾和对秦恐惧程度不同，联盟缺少稳定约束。"
    }),
    event({
      id: "saws-king-wuling-reform",
      title: "赵武灵王胡服骑射",
      aliases: ["胡服骑射"],
      era: "秦一统前夜",
      time: "前307",
      regions: ["赵", "北方"],
      topics: ["赵国", "军事改革", "骑兵"],
      summary: "赵武灵王推行胡服骑射，学习北方骑射方式，增强赵国北方作战能力。",
      people: ["赵武灵王"],
      background: ["赵国北接胡地，既面临中原诸侯竞争，也要处理北方游牧骑兵压力。"],
      process: [
        { time: "前307", title: "推行胡服", description: "赵武灵王要求改穿便于骑射的服装，冲击中原传统礼俗。改革从服饰入手，实质是军事适应。" },
        { time: "改革后", title: "发展骑兵", description: "赵国学习北方骑射技术，建立更适合边地作战的骑兵力量，提升机动性和北方扩张能力。" },
        { time: "长期影响", title: "赵国军力增强", description: "赵国成为战国后期能与秦长期抗衡的强国之一，胡服骑射是其军事能力的重要来源。" }
      ],
      results: ["赵国骑兵力量增强。", "军事改革突破旧礼俗限制。"],
      tip: "胡服骑射说明战国改革不只在秦国发生。",
      claim: "赵武灵王改革体现战国国家为军事竞争主动吸收边地技术。",
      plainText: "白话看法：赵国为了打得赢，愿意学习胡人骑射，说明战国竞争很现实。",
      question: "胡服骑射为什么重要？",
      answer: "它提高赵国骑兵能力，也体现军事需求压倒旧礼俗。"
    }),
    event({
      id: "saws-yue-yi-attacks-qi",
      title: "乐毅伐齐与田单复国",
      aliases: ["乐毅伐齐"],
      era: "秦一统前夜",
      time: "前284-前279",
      regions: ["齐", "燕"],
      topics: ["齐国", "燕国", "合纵"],
      summary: "燕将乐毅联合诸国伐齐，齐国几乎灭亡；田单后来以即墨为据点复国，齐国元气大伤。",
      people: ["乐毅", "燕昭王", "田单"],
      background: ["齐国强盛引起各国忌惮，燕国长期怨齐，合纵攻齐成为战国后期重要转折。"],
      process: [
        { time: "前284", title: "五国伐齐", description: "燕将乐毅率联军攻齐，迅速攻占齐国大量城邑。齐国强盛引发的反齐联盟取得压倒性成果。" },
        { time: "齐国危亡", title: "即墨坚守", description: "齐国只剩少数城邑坚守，田单在即墨组织抵抗，保存复国火种。强国也可能因外交孤立而迅速崩溃。" },
        { time: "前279前后", title: "田单复国", description: "田单利用燕国内部变化和火牛阵等传统叙事中的战术反攻，收复齐地。但齐国从此元气大伤。" }
      ],
      results: ["齐国由强转弱。", "秦国东进少了一个强大制衡者。"],
      tip: "乐毅伐齐削弱齐国，间接有利于秦国统一。",
      claim: "齐国被重创改变战国后期强国平衡。",
      plainText: "史料主线是：齐国差点被灭，虽然后来复国，但已难再有效制衡秦国。",
      question: "乐毅伐齐和秦统一有什么关系？",
      answer: "它削弱齐国这个东方强国，使秦国后期面对的制衡力量减少。"
    }),
    event({
      id: "saws-changping-battle",
      title: "长平之战",
      era: "秦一统前夜",
      time: "前260",
      regions: ["长平", "赵", "秦"],
      topics: ["秦赵", "大战", "统一前夜"],
      summary: "秦赵在长平决战，赵军惨败，秦国消灭东方最强军事对手之一，统一趋势明显加速。",
      people: ["白起", "赵括", "廉颇", "秦昭襄王"],
      background: ["秦国东进上党地区，赵国接收上党后与秦直接冲突，双方都投入巨大兵力争夺战略主动权。"],
      process: [
        { time: "战前", title: "上党争夺", description: "韩国上党问题引发秦赵冲突。上党地理位置关键，关系秦国能否继续向东压迫三晋。" },
        { time: "前260", title: "赵国换将", description: "赵国用赵括替换廉颇，试图改变持久防守局面。秦国则暗中起用白起，准备诱赵军决战。" },
        { time: "决战", title: "赵军惨败", description: "秦军切断赵军补给并围困赵军主力，赵军最终崩溃。赵国大量青壮和精锐损失，国力遭到难以恢复的打击。" }
      ],
      results: ["赵国军事力量重创。", "秦国统一六国的最大军事障碍被削弱。"],
      tip: "长平之战是秦统一前最关键的军事转折之一。",
      claim: "长平之战使秦赵力量对比发生决定性变化。",
      plainText: "白话看法：赵国是最能打的东方强国之一，长平惨败后已经很难单独挡住秦国。",
      question: "长平之战为什么是统一前夜关键事件？",
      answer: "因为它重创赵国主力，秦国东进最大军事障碍明显削弱。"
    }),
    event({
      id: "saws-lu-buwei-and-qin-politics",
      title: "吕不韦执政与秦王政亲政",
      aliases: ["秦王政亲政"],
      era: "秦一统前夜",
      time: "前249-前238",
      regions: ["秦", "咸阳"],
      topics: ["秦国", "权臣", "亲政"],
      summary: "秦王政即位初期吕不韦执政，后秦王政亲政并清除嫪毐、吕不韦势力，统一战争的最高权力集中完成。",
      people: ["秦王政", "吕不韦", "嫪毐"],
      background: ["秦昭襄王后秦国已是最强国家，但最高权力仍经历幼主、太后和权臣关系调整。"],
      process: [
        { time: "前249前后", title: "吕不韦执政", description: "秦王政年少即位，吕不韦以相邦身份掌握朝政，延续秦国强势政策并维护统一战争前的政局。" },
        { time: "前238", title: "嫪毐之乱", description: "嫪毐集团发动叛乱失败，秦王政借机清理太后和嫪毐势力，宫廷权力结构被重组。" },
        { time: "亲政后", title: "吕不韦失势", description: "吕不韦被罢免并最终退出政治，秦王政亲自掌握最高权力，秦国统一战争进入集中决策阶段。" }
      ],
      results: ["秦王政完成亲政。", "秦国统一战争决策权高度集中。"],
      tip: "秦灭六国前，要先看秦国内部最高权力如何集中。",
      claim: "秦王政亲政为随后连续灭六国提供稳定最高决策中心。",
      plainText: "史料主线是：秦国已经强大，但还要先解决权臣和宫廷问题，才能全力灭六国。",
      question: "秦王政亲政为什么是统一前提？",
      answer: "因为统一战争需要持续、集中和高压的最高决策。"
    }),
    event({
      id: "saws-qin-destroys-six-states",
      title: "秦灭六国与统一战争",
      aliases: ["秦灭六国"],
      era: "秦一统前夜",
      time: "前230-前221",
      regions: ["韩", "赵", "魏", "楚", "燕", "齐", "秦"],
      topics: ["统一战争", "秦国", "六国"],
      summary: "秦王政利用秦国制度和军事实力，先后灭韩、赵、魏、楚、燕、齐，结束战国分裂并完成统一。",
      people: ["秦王政", "王翦", "王贲", "李信", "李斯"],
      background: ["商鞅变法后秦国国家能力长期领先，长平之后赵国受创，齐国也已衰弱，六国合纵难以稳定。"],
      process: [
        { time: "前230", title: "灭韩", description: "秦先灭韩国，打开三晋方向缺口。韩国地处秦东出要道，弱小而关键，先灭韩符合由近及远的战略。" },
        { time: "前228", title: "灭赵", description: "秦军攻破邯郸，赵国灭亡。赵曾是秦最强对手之一，长平后国力削弱，仍长期抵抗到此时。" },
        { time: "前225", title: "灭魏", description: "王贲率秦军以水攻等方式攻破大梁，魏国灭亡。三晋相继被灭后，秦国东出中原的障碍大幅减少。" },
        { time: "前223", title: "灭楚", description: "秦起初轻敌受挫，后由王翦率大军稳扎稳打灭楚。楚国地广人众，是统一战争中最难处理的对手之一。" },
        { time: "前222-前221", title: "灭燕齐完成统一", description: "王贲等继续灭燕，随后秦军迫使齐国投降。六国相继灭亡，秦王政完成全国统一，进入秦朝帝国阶段。" }
      ],
      unificationProfile: { requiredKeywords: ["韩", "赵", "魏", "楚", "燕", "齐", "王翦", "王贲", "邯郸", "大梁"] },
      results: ["战国分裂结束。", "秦王政完成统一。", "秦朝帝国制度展开。"],
      tip: "秦统一不是单场战争，而是制度优势、外交分化和军事顺序共同作用。",
      claim: "秦灭六国是战国长期变法兼并趋势的最终结果。",
      plainText: "史料主线是：秦不是突然变强，而是长期变法、军功制度、外交分化和连续战争共同完成统一。",
      question: "秦为什么能灭六国？",
      answer: "因为秦的制度动员能力更强，六国难以稳定联合，秦又按战略顺序逐个击破。"
    })
  ];

  const learningCases = {
    "saws-eastward-move": { label: "王室仍在，权力中心已变", claim: "东迁保住了周王名义，却把军事、财政和保护责任转给诸侯，春秋由此成为多中心竞争。", sections: [["机制", "迁都后王室依赖郑、晋、秦等诸侯，礼制共主与实际强制力分离。"], ["后果", "霸主以尊王名义协调诸侯，正说明天子已不能独立维持秩序。"]], evidence: { title: "材料锚点：《左传》春秋纪年与东周遗址框架", content: "迁都年代较明确，但东周早期具体政治过程仍应区分后出叙事。" }, misconception: "东迁只是地理迁移。", memory: ["名义保留", "实力下移", "诸侯竞争"], question: "东迁如何改变政治结构？", answer: "它让周王保有名分，却失去独立支配诸侯的资源。" },
    "saws-qi-huan-hegemony": { label: "霸主是实力加合法性的组合", claim: "齐桓公以改革提供动员能力，再以会盟和尊王攘夷把力量包装为公共秩序。", sections: [["能力", "财政、军政与资源整顿使齐能承担协调成本。"], ["合法性", "会盟并非单纯外交仪式，而是强国借周王名义领导诸侯的制度。"]], evidence: { title: "材料锚点：《左传》《国语》与齐国相关传世记载", content: "管仲改革细节含后世整理成分，应抓国家能力与会盟机制。" }, misconception: "春秋首霸只靠个人威望。", memory: ["改革", "会盟", "尊王"], question: "齐桓公为什么能成霸？", answer: "因为国家能力和政治名义同时成立。" },
    "saws-three-families-partition-jin": { label: "大国的内部权力可重画国际格局", claim: "三家分晋不是一次普通政变，而是卿大夫长期控制军政资源后取得诸侯地位，春秋旧秩序转入战国竞争。", sections: [["机制", "家族掌握封邑、军队和外交，逐步掏空公室。"], ["后果", "晋被魏赵韩替代，强国数量与竞争方式都被重置。"]], evidence: { title: "材料锚点：《史记·晋世家》及战国早期传世材料", content: "前453与前403分别对应消灭智氏和周威烈王承认，不能混为一个日期。" }, misconception: "战国从某一天突然开始。", memory: ["卿大夫", "资源外移", "三国承认"], question: "三家分晋为何是时代转折？", answer: "它显示公室被家族军政资源取代，并形成新的竞争者。" },
    "saws-shang-yang-reforms": { label: "变法把国家能力嵌入日常激励", claim: "商鞅变法的重点不是几条法令，而是把军功、土地、户籍和县制连成能持续征税、征兵与奖惩的体系。", sections: [["机制", "以军功爵与编户制度改变个人收益，再以县制压缩旧贵族的中间权力。"], ["后果", "秦的优势来自可重复动员，而非单次军事胜利。"]], evidence: { title: "材料锚点：《商君书》、秦律材料与《史记·商君列传》", content: "《商君书》成书与归属复杂，制度影响须同出土秦律和后续秦政结合理解。" }, misconception: "商鞅变法等于秦立刻无敌。", memory: ["军功", "编户", "县制"], question: "商鞅变法怎样提高秦的竞争力？", answer: "它把奖励、征发和地方控制组织成持续的国家动员体系。" },
    "saws-hundred-schools": { label: "士人竞争改变了政治知识的生产方式", claim: "诸子百家兴起与列国求才相互推动，思想不是脱离战争的闲谈，而是对秩序、官僚和统治技术的竞争性回答。", sections: [["条件", "变法和游说扩大了非世袭士人的上升空间。"], ["影响", "儒、法、墨、道等为不同政治难题提供可供君主选择的语言和方案。"]], evidence: { title: "材料锚点：传世诸子文本与出土简帛", content: "文本常经过后世编纂，不能把书中每段话直接还原为单一人物的现场发言。" }, misconception: "百家只是哲学流派名单。", memory: ["列国求才", "士人流动", "政治方案"], question: "战国为何会出现百家争鸣？", answer: "列国竞争需要新的人才和治理方案，推动士人及其学说流动。" },
    "saws-qin-destroys-six-states": { label: "统一是制度优势、外交分化与战争累积的合力", claim: "秦灭六国并非只靠强兵，而是长期动员体系配合逐国击破、关东诸国协调失败后的结果。", sections: [["能力", "商鞅以来的征发与地方控制支撑连续战争。"], ["策略", "远交近攻和逐国灭亡避免同时面对完整关东联盟。"], ["限度", "统一战争结束诸侯格局，不等于秦帝国的治理问题已经解决。"]], evidence: { title: "材料锚点：《史记·秦始皇本纪》《战国策》与秦简", content: "统一过程的外交言辞多见于后出文本，宜与制度和战争结果交叉理解。" }, misconception: "六国被灭只是因为秦军更勇敢。", memory: ["动员体系", "逐国击破", "统一不等于稳定"], question: "秦为何能完成统一？", answer: "持续国家动员、外交分化和各国协调失败共同构成条件。" }
  };
  const coreIds = new Set(Object.keys(learningCases));
  window.SAWS_EVENTS = window.SAWS_EVENTS.map((item) => ({ ...item, contentLevel: coreIds.has(item.id) ? "core" : "outline", learningCase: learningCases[item.id] || null }));

  const originalById = new Map(window.SAWS_EVENTS.map((item) => [item.id, item]));
  const mergePlans = {
    "saws-eastward-move": ["saws-eastward-move", "saws-zheng-zhuang-rise"],
    "saws-qi-huan-hegemony": ["saws-qi-huan-hegemony", "saws-song-xiang-failure"],
    "saws-jin-wen-chengpu": ["saws-jin-wen-chengpu", "saws-qin-mu-western-hegemony", "saws-chu-zhuang-hegemony"],
    "saws-wu-yue-rise": ["saws-wu-yue-rise"],
    "saws-three-families-partition-jin": ["saws-jin-qing-dafu-rise", "saws-three-families-partition-jin", "saws-tian-family-replaces-qi"],
    "saws-li-kui-wei-reform": ["saws-li-kui-wei-reform", "saws-wuqi-chu-reform", "saws-guiling-maling"],
    "saws-shang-yang-reforms": ["saws-shang-yang-reforms"],
    "saws-hundred-schools": ["saws-confucius-and-hundred-schools-prelude", "saws-hundred-schools"],
    "saws-suqin-zhangyi-diplomacy": ["saws-suqin-zhangyi-diplomacy"],
    "saws-king-wuling-reform": ["saws-king-wuling-reform"],
    "saws-yue-yi-attacks-qi": ["saws-yue-yi-attacks-qi"],
    "saws-changping-battle": ["saws-changping-battle"],
    "saws-qin-destroys-six-states": ["saws-lu-buwei-and-qin-politics", "saws-qin-destroys-six-states"]
  };
  const caseAdditions = {
    "saws-jin-wen-chengpu": { label: "霸政为何不断换手", claim: "晋文公在城濮建立中原霸权，秦穆公转向西陲、楚庄王北上问鼎，显示霸主秩序取决于地区资源、会盟名义和军事胜负的不断重组。", sections: [["竞争", "城濮以后的晋楚对峙不是两国轮流称雄，而是强国用会盟、盟友与战场胜负争夺秩序解释权。"], ["边界", "秦穆公的西向扩张奠定关中基础，但并不等于其已进入中原霸主序列。"]], evidence: { title: "材料锚点：《左传》《国语》与春秋金文", content: "会盟和战争次序主要见于传世叙事；金文可补充诸侯交往与王命背景，具体修辞应与事实层分开。" }, misconception: "春秋五霸是固定不变的排名。", memory: ["城濮", "晋楚", "西陲秦"], question: "春秋霸权为何不能稳定传承？", answer: "它依赖国家资源、联盟和周王名义的临时结合，任何一项变化都可能重组霸主格局。" },
    "saws-wu-yue-rise": { label: "边缘地区如何改变全国格局", claim: "吴越争霸把东南的军事动员、楚国压力与中原会盟连到一起，说明春秋后期的竞争范围已超出传统中原。", sections: [["进入", "吴破楚、夫差北上使东南国家能直接干预楚与中原的力量关系。"], ["替代", "越灭吴说明新兴国家同样受内部资源、长期恢复与联盟变化制约，胜利并非永久。"]], evidence: { title: "材料锚点：《左传》《国语》、吴越金文与考古", content: "阖闾、夫差、勾践的基本战争框架可互证；孙武、火攻等戏剧化细节不可当作无争议史实。" }, misconception: "吴越只是中原争霸的边缘插曲。", memory: ["吴破楚", "北上会盟", "越灭吴"], question: "吴越争霸为何属于春秋主线？", answer: "它改变了楚国与诸侯的战略环境，并显示竞争已经扩展为跨区域格局。" },
    "saws-li-kui-wei-reform": { label: "变法竞争先带来优势，也会重排强弱", claim: "魏国以李悝、吴起等改革率先集中资源，却在桂陵、马陵后失去先发优势；战国强弱取决于制度能否持续转化为军事与财政能力。", sections: [["先发", "法令、农业财政、人才任用和军政调整使魏国成为战国早期最强国家。"], ["反转", "魏国多线扩张后被齐国连续击败，说明改革带来的优势不能自动抵消战略过伸和对手学习。"]], evidence: { title: "材料锚点：《史记》魏世家、兵家叙事与战国制度材料", content: "李悝、吴起制度的具体条文多经后世归纳；应把握早期国家能力竞争，而非把每项改革视为可精确复原。" }, misconception: "变法成功就会永久强盛。", memory: ["魏国先强", "制度竞争", "桂陵马陵"], question: "魏国为何先强后弱？", answer: "它较早形成动员优势，却在扩张、战争和对手反制中失去相对领先地位。" },
    "saws-suqin-zhangyi-diplomacy": { label: "六国明知秦强，为何仍难合纵", claim: "合纵连横的关键不是苏秦、张仪的个人口才，而是六国彼此存在边界、利益和安全次序冲突，秦可借此逐一瓦解联合。", sections: [["共同威胁", "六国面对秦东进时有结盟需求，却无法稳定分担风险、军费与让步成本。"], ["秦的策略", "连横通过分别许诺、威胁或结盟服务于逐国作战，使外交成为战争准备的一部分。"]], evidence: { title: "材料锚点：《战国策》《史记》与战国盟书材料", content: "纵横家故事高度文学化；联盟反复和各国行动结果比个人演说更可靠地反映结构困境。" }, misconception: "六国失败只是因为没有听从某位纵横家。", memory: ["共同威胁", "利益分裂", "逐国击破"], question: "合纵为何难以持续？", answer: "成员间的利益与安全优先级不同，缺乏能约束背离者的共同机制。" },
    "saws-king-wuling-reform": { label: "军事学习为何要挑战礼俗", claim: "赵武灵王以胡服骑射适应北方作战，说明战国国家会为生存与扩张主动改造旧礼俗；改革的核心是军队组织与边疆战略。", sections: [["适应", "服饰改变服务于骑兵训练和机动战，不应把它缩成文化模仿。"], ["限度", "赵国军力提升并未消除其内部继承和地缘压力，技术创新不是国家强弱的唯一变量。"]], evidence: { title: "材料锚点：《战国策》《史记·赵世家》及北方考古材料", content: "改革叙事主要出自后出文献；骑射扩展的长期趋势可与边疆交流和军事考古背景结合理解。" }, misconception: "胡服骑射只是换一套衣服。", memory: ["北方压力", "骑兵", "礼俗让位"], question: "胡服骑射改变了什么？", answer: "它让赵国以更适合边地的骑兵和机动能力参与战国竞争。" },
    "saws-yue-yi-attacks-qi": { label: "强国为何会因孤立接近覆灭", claim: "乐毅伐齐显示大国一旦失去盟友并遭联合打击，城邑与军力优势可迅速崩解；田单复国虽恢复齐国，却未恢复其原有的制衡能力。", sections: [["崩解", "五国伐齐利用齐国外交孤立，使燕军能快速占领大部分齐地。"], ["余波", "即墨反攻保住齐国，但长期损耗使它难再担当东方最强制衡者。"]], evidence: { title: "材料锚点：《史记·田单列传》《战国策》与齐燕考古", content: "火牛阵等细节带有显著叙事色彩；齐国受重创及其后果则是理解后期均势的重要事实。" }, misconception: "田单复国就等于齐国恢复强盛。", memory: ["外交孤立", "五国伐齐", "复国而不复强"], question: "乐毅伐齐为何影响秦统一前的均势？", answer: "它削弱了能够制衡秦的东方强国，改变了后期各国力量结构。" },
    "saws-changping-battle": { label: "长平为何改变统一的可行性", claim: "长平之战不是单纯名将对决，而是上党争夺、补给能力、决战选择与秦赵国力差距共同把赵国主力消耗殆尽。", sections: [["机制", "秦以持久围困切断赵军补给，将区域争夺转为无法承受的国家资源消耗。"], ["后果", "赵国仍未立即灭亡，但其恢复能力受重创，关东对秦的军事制衡明显减弱。"]], evidence: { title: "材料锚点：《史记》秦赵叙事与战国地理、兵器材料", content: "坑杀人数及换将动机存在夸张和争议；赵军遭决定性重创及其战略后果较为明确。" }, misconception: "长平之后秦已毫无阻力地统一六国。", memory: ["上党", "补给围困", "赵国重创"], question: "长平之战为何是统一前夜转折？", answer: "它显著降低了赵国作为东方军事屏障的能力，使秦的逐国进攻更可行。" }
  };
  const summaryOverrides = {
    "saws-eastward-move": "平王东迁保留周王名义，郑庄公在繻葛挫败王师则证明实际军政资源已下移到强诸侯。",
    "saws-qi-huan-hegemony": "齐桓公以改革、会盟和尊王攘夷组织霸政；宋襄公泓水失利说明礼制名义不能替代军事实力。",
    "saws-jin-wen-chengpu": "晋文公城濮取胜后，秦穆公西向扩张、楚庄王问鼎和邲之战共同重组春秋霸主竞争。",
    "saws-three-families-partition-jin": "晋国六卿坐大、三家分晋与田氏代齐显示军政资源脱离公室后，旧诸侯可被新家族取代，战国国家由此形成。",
    "saws-li-kui-wei-reform": "魏国以李悝等改革率先强盛，吴起在楚的改革受贵族反扑，桂陵马陵又使魏国优势下降，战国进入持续的制度竞争。",
    "saws-hundred-schools": "孔子周游和士人流动为新知识阶层开路，战国诸子百家把秩序、战争与统治方案带入列国竞争。",
    "saws-qin-destroys-six-states": "吕不韦执政、秦王政亲政完成统一战争前的权力集中；秦随后逐国灭六国，结束战国诸侯格局。"
  };
  const keptIds = Object.keys(mergePlans);
  window.SAWS_EVENTS = keptIds.map((id, index) => {
    const item = originalById.get(id);
    const members = mergePlans[id].map((memberId) => originalById.get(memberId));
    return {
      ...item,
      summary: summaryOverrides[id] || item.summary,
      process: members.flatMap((member) => member.process.map((step) => ({ time: step.time, title: `${member.title}：${step.title}`, description: step.description }))),
      contentLevel: "core",
      contentPresentation: "tiered",
      learningCase: caseAdditions[id] || item.learningCase,
      previousEventIds: index ? [keptIds[index - 1]] : [],
      nextEventIds: index < keptIds.length - 1 ? [keptIds[index + 1]] : [],
      mergedEventIds: members.slice(1).map((member) => member.id)
    };
  });
})();
