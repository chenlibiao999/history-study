(() => {
  const dynastyId = "qin";
  const dynasty = "秦朝";
  const source = {
    id: "qin-main-source",
    type: "正史与编年史",
    title: "《史记》《资治通鉴》秦朝相关纪事",
    author: "司马迁、司马光等",
    authorityLevel: "公开权威史料入口，待逐条补卷目链接",
    note: "先提供秦朝主线白话学习入口，后续逐条补《史记·秦始皇本纪》《项羽本纪》等具体链接。",
    credibility: "高",
    credibilityLevel: "high",
    url: "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98/%E5%8D%B7006"
  };

  function event(item) {
    return {
      id: item.id,
      title: item.title,
      aliases: item.aliases || [],
      era: item.era,
      period: dynasty,
      time: item.time,
      regions: item.regions || ["全国"],
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
      learningCase: item.learningCase,
      debates: [{ view: "学习提示", content: item.tip }],
      claims: [{
        statement: item.claim,
        status: "较稳妥",
        statusType: "stable",
        confidence: "medium",
        sourceIds: ["qin-main-source"],
        note: "当前先按秦朝主线整理，后续可逐条补公开卷目链接。"
      }],
      citations: [{
        sourceId: "qin-main-source",
        reference: item.reference || "《史记》《资治通鉴》秦朝相关纪事",
        status: "待核原文",
        plainText: item.plainText,
        note: "不是纯原文摘录，先给学习用白话释义；后续补公开卷目链接。"
      }],
      causalChain: item.causalChain || [],
      sources: [source],
      reviewQuestions: [{ type: "主线理解", question: item.question, answer: item.answer }],
      notes: [],
      dynastyId,
      dynasty,
      topicIds: item.topicIds || []
    };
  }

  window.QIN_EVENTS = [
    event({
      id: "qin-first-emperor-system",
      title: "始皇帝称号与皇帝制度",
      aliases: ["皇帝制度"],
      era: "统一建制",
      time: "前221",
      regions: ["咸阳", "全国"],
      topics: ["皇帝制度", "统一", "中央集权"],
      summary: "秦王政完成统一后称始皇帝，建立皇帝制度，标志最高权力从战国王权转为帝国皇权。",
      people: ["秦始皇", "李斯", "王绾"],
      background: ["六国灭亡后，秦王政需要为前所未有的大一统政权设计最高权力名分和统治结构。"],
      process: [
        { time: "前221", title: "议定尊号", description: "秦王政认为自己的功业超过三皇五帝，采用皇帝称号并自称始皇帝，试图建立传之万世的最高权力名分。" },
        { time: "制度确立", title: "皇帝独尊", description: "皇帝掌握最高立法、行政、军事和司法权，诏令成为国家最高命令。秦朝中央集权由此获得明确顶层形式。" },
        { time: "后续", title: "影响后世", description: "皇帝制度被后世王朝长期继承，秦朝虽短，但其最高权力结构深刻影响中国古代政治。" }
      ],
      results: ["皇帝制度建立。", "大一统王朝最高权力形式确立。"],
      tip: "秦统一后的第一件大事是把战国王权升级为帝国皇权。",
      claim: "始皇帝称号确立了此后两千多年帝制政治的核心形式。",
      plainText: "史料主线是：秦王政不再只是秦王，而是把自己塑造成统一帝国的最高皇帝。",
      question: "始皇帝称号为什么重要？",
      answer: "它确立皇帝制度，成为后世大一统王朝最高权力的基本形式。"
    }),
    event({
      id: "qin-commandery-county",
      title: "废分封与郡县制推行",
      aliases: ["郡县制"],
      era: "统一建制",
      time: "前221",
      regions: ["全国"],
      topics: ["郡县制", "中央集权", "制度"],
      summary: "秦朝拒绝大规模分封，推行郡县制，由中央任免官吏直接治理地方。",
      people: ["秦始皇", "李斯", "王绾"],
      background: ["统一后如何治理六国旧地成为核心问题，分封和郡县代表两种不同的地方控制方案。"],
      process: [
        { time: "前221", title: "分封郡县之争", description: "王绾等主张分封皇子到远地，李斯反对，认为分封会重演周代诸侯割据。争论本质是统一后地方权力如何安排。" },
        { time: "决策后", title: "全国置郡县", description: "秦朝推行郡县制，郡县长官由中央任免，不形成世袭诸侯。中央可以更直接征税、征兵和执行法令。" },
        { time: "长期影响", title: "中央集权基层化", description: "郡县制把统一落实到地方行政层面，使中央权力能够穿透到县级治理，成为后世中国地方治理的核心制度之一。" }
      ],
      results: ["分封制被压制。", "郡县制成为秦帝国地方治理主体。"],
      tip: "郡县制是秦统一能不能真正落地的关键。",
      claim: "郡县制把秦的军事统一转化为行政统一。",
      learningCase: {
        label: "统一之后，地方听谁的",
        claim: "郡县制的核心不是行政名词变化，而是秦拒绝让新征服地区再次形成世袭政治中心，转而把任官、征税和军役置于中央可以调动的链条中。",
        sections: [
          ["分封为何是风险", "王绾主张封皇子，李斯反对；争论的关键是，统一后的地方权力应由宗族世袭，还是由中央任免的官员掌握。"],
          ["郡县如何运作", "郡守、县令等官员由中央任免，不能把职位和辖区作为家族财产继承。政令、赋税、徭役和司法因此有了向下传导的共同框架。"],
          ["它并非无所不能", "郡县制提高了行政穿透力，却不能自动解决边疆、交通、财政和民众负担问题；秦朝短命说明制度集中不等于统治稳固。"]
        ],
        evidence: { title: "材料锚点：廷议中的分封与郡县之争", content: "《史记·秦始皇本纪》记载王绾与李斯围绕分封和郡县提出相反主张。它让我们看到，秦的选择是针对统一后地方权力如何再生产的问题。" },
        misconception: "不要把郡县制理解为秦朝凭空创造的一切地方制度，战国时期已存在郡县实践，秦是在全国范围内确立其主体地位。",
        memory: ["王绾与李斯", "中央任免", "统一不等于稳固"],
        question: "秦选择郡县而非大规模分封，真正要避免什么？",
        answer: "要避免新征服地区形成可世袭、可独立动员资源的地方政治中心，使地方官职和资源更多受中央任免与调度。"
      },
      plainText: "白话看法：秦不让诸侯世袭地方，而是派官员直接管理，这样中央能控制全国。",
      question: "秦为什么不恢复周代分封？",
      answer: "因为分封容易产生地方割据，郡县制更适合中央直接控制。"
    }),
    event({
      id: "qin-standardization",
      title: "书同文、车同轨与度量衡统一",
      era: "统一建制",
      time: "前221后",
      regions: ["全国"],
      topics: ["统一", "文字", "度量衡"],
      summary: "秦朝统一文字、车轨、度量衡和货币，降低各地制度差异，服务全国行政和经济整合。",
      people: ["秦始皇", "李斯"],
      background: ["战国长期分裂导致文字、货币、度量衡和道路制度差异很大，统一帝国需要共同标准。"],
      process: [
        { time: "统一后", title: "统一文字", description: "秦朝以小篆等标准书体规范官方书写，减少六国旧文字差异，便于政令、法律和档案流通。" },
        { time: "统一后", title: "统一度量衡货币", description: "秦朝统一衡量单位和货币形式，让赋税、工程、贸易和司法计算有共同标准，提升行政效率。" },
        { time: "统一后", title: "车同轨修驰道", description: "秦朝规范车轨并修筑道路网络，方便军队调动、官吏往来和物资运输，把空间统一转化为交通统一。" }
      ],
      results: ["全国行政沟通效率提高。", "共同制度标准形成。"],
      tip: "标准化是大一统国家的基础设施，不是零散小政策。",
      claim: "秦朝标准化政策显著推动了统一帝国的制度整合。",
      plainText: "史料主线是：以前各国标准不同，秦要让全国用同一套文字、尺度、货币和交通规则。",
      question: "书同文车同轨为什么重要？",
      answer: "它让全国政令、经济和交通能在统一标准下运行。"
    }),
    event({
      id: "qin-law-and-official-system",
      title: "秦律与官僚体系",
      era: "统一建制",
      time: "前221后",
      regions: ["全国"],
      topics: ["法律", "官僚", "法家"],
      summary: "秦朝以严密法令和官僚考核治理全国，把战国秦国的法家国家机器推广到帝国范围。",
      people: ["秦始皇", "李斯"],
      background: ["秦国长期依靠法令、军功和官僚考核强盛，统一后需要把这套机制覆盖六国旧地。"],
      process: [
        { time: "统一后", title: "法令全国化", description: "秦把原有法律和行政规则推广到六国旧地，要求民众和官吏按统一法令行动，减少地方旧俗旧制影响。" },
        { time: "治理过程", title: "官僚层级运行", description: "中央、郡、县形成层级官僚体系，官吏通过文书、考核和刑罚执行政令，国家对基层控制强度大幅提高。" },
        { time: "社会后果", title: "严刑重役压力", description: "严密法制能提高执行力，但与沉重工程、徭役和赋税结合后，容易激化民众对秦政的恐惧和反感。" }
      ],
      results: ["秦帝国行政执行力强。", "严刑峻法和重役成为社会矛盾来源。"],
      tip: "秦制要两面看：高效率和高压迫同时存在。",
      claim: "秦律和官僚体系是秦朝强控制国家的核心。",
      plainText: "白话看法：秦能快速管住全国，是因为法令和官僚体系很强；但这种强控制也让百姓压力巨大。",
      question: "秦制为什么既强大又危险？",
      answer: "因为它执行力强，但严刑重役会快速积累社会反弹。"
    }),
    event({
      id: "qin-northern-xiongnu-wall",
      title: "北击匈奴与修筑长城",
      aliases: ["北击匈奴"],
      era: "边疆与工程",
      time: "前215-前214",
      regions: ["河套", "北方边郡"],
      topics: ["匈奴", "长城", "边疆"],
      summary: "秦始皇派蒙恬北击匈奴，收复河套并连接旧长城，建立北方边防体系。",
      people: ["秦始皇", "蒙恬"],
      background: ["统一后秦朝面临北方匈奴压力，战国秦、赵、燕旧边防需要整合成统一帝国边防。"],
      process: [
        { time: "前215", title: "蒙恬北伐", description: "秦派蒙恬率军北击匈奴，夺取河套地区，缓解北方直接威胁，并把边疆推进到更有利位置。" },
        { time: "前214前后", title: "连接长城", description: "秦朝连接和修筑秦、赵、燕旧长城，形成更连续的北方防线。长城不是凭空新建，而是在战国旧防线基础上整合。" },
        { time: "后续", title: "设置边郡", description: "秦在北方设置郡县和驻军，试图把军事胜利转为长期边疆治理，但边防和工程徭役也增加百姓负担。" }
      ],
      results: ["北方边防加强。", "河套地区被纳入秦控制。", "工程和戍边负担上升。"],
      tip: "长城要看成统一边防整合工程，不是孤立建筑。",
      claim: "秦长城和北击匈奴体现统一帝国对北方边疆的主动经营。",
      plainText: "史料主线是：秦打退匈奴并连接旧长城，把战国各国边防整成帝国防线。",
      question: "秦长城为什么和统一有关？",
      answer: "因为它把原来各国旧防线整合为统一帝国的北方边防体系。"
    }),
    event({
      id: "qin-baiyue-lingnan",
      title: "南征百越与岭南设郡",
      aliases: ["南征百越"],
      era: "边疆与工程",
      time: "前214",
      regions: ["岭南", "南海", "桂林", "象郡"],
      topics: ["百越", "岭南", "边疆"],
      summary: "秦军南征百越，开凿灵渠并在岭南设置南海、桂林、象郡，统一版图向南扩展。",
      people: ["秦始皇", "屠睢", "赵佗"],
      background: ["统一六国后，秦朝继续向南方扩张，希望控制岭南资源和交通，但地理、气候和族群差异带来巨大成本。"],
      process: [
        { time: "前220s-前214", title: "南征受阻", description: "秦军进入岭南后遭遇地形、补给和当地抵抗困难，说明中原军队直接进入南方湿热地区成本很高。" },
        { time: "前214", title: "灵渠沟通", description: "秦朝开凿灵渠，沟通湘江和漓江水系，改善军粮运输和南方交通，为控制岭南提供条件。" },
        { time: "设郡治理", title: "岭南入秦", description: "秦在岭南设置南海、桂林、象郡，并派官吏和军队治理。南方扩张扩大版图，也加重戍役和行政压力。" }
      ],
      results: ["岭南被纳入秦朝郡县体系。", "南方交通和边疆治理推进。"],
      tip: "南征百越要看军事、交通工程和地方治理三层。",
      claim: "秦南征百越把统一帝国扩展到岭南，但治理成本很高。",
      plainText: "史料主线是：秦不只向北打匈奴，也向南进入岭南，并用灵渠解决运输问题。",
      question: "灵渠为什么重要？",
      answer: "它改善秦军南征补给和岭南交通，是南方设郡的重要工程条件。"
    }),
    event({
      id: "qin-burning-books",
      title: "焚书坑儒与思想控制",
      aliases: ["焚书坑儒"],
      era: "思想控制",
      time: "前213-前212",
      regions: ["咸阳", "全国"],
      topics: ["思想控制", "法家", "文化"],
      summary: "秦朝为维护统一法令和皇权权威，采取焚书和坑术士等高压措施，激化士人和社会对秦政的反感。",
      people: ["秦始皇", "李斯"],
      background: ["统一后博士和士人围绕古今制度、分封郡县等问题议论不断，秦廷担心借古非今削弱政令。"],
      process: [
        { time: "前213", title: "焚书令", description: "李斯建议禁绝私藏部分诗书和诸子文献，以防士人借古代制度批评现实政治。政策目标是统一思想和政令。" },
        { time: "前212", title: "坑术士事件", description: "秦始皇因方士欺骗和议论不满而处死一批术士或儒生相关人物。传统称坑儒，具体对象和人数需结合史料审慎理解。" },
        { time: "后果", title: "士人恐惧", description: "高压思想政策增强短期控制，却削弱士人认同，并成为后世批评秦政暴虐的重要证据。" }
      ],
      results: ["思想和言论控制加强。", "秦政暴虐形象加深。"],
      tip: "焚书坑儒要准确说：焚书和坑术士/儒生传统叙事需区分。",
      claim: "焚书坑儒体现秦朝以高压方式维护统一政令和皇权权威。",
      plainText: "白话看法：秦廷不希望士人用旧制度批评新帝国，所以用强制手段控制书籍和言论。",
      question: "焚书坑儒反映秦朝什么问题？",
      answer: "反映秦朝重统一控制，但缺少吸纳不同政治意见的空间。"
    }),
    event({
      id: "qin-imperial-tours",
      title: "秦始皇巡游与刻石",
      era: "思想控制",
      time: "前220-前210",
      regions: ["全国", "泰山", "琅琊", "会稽"],
      topics: ["巡游", "皇权", "天下观"],
      summary: "秦始皇多次巡游各地、刻石颂功，展示皇帝对天下的直接占有和统一秩序。",
      people: ["秦始皇", "李斯"],
      background: ["新统一帝国需要让六国旧地认识皇帝权威，巡游是政治宣示、交通检查和地方震慑的综合手段。"],
      process: [
        { time: "统一后", title: "多次巡行", description: "秦始皇多次出巡东方、南方和北方地区，亲临六国旧地，展示皇帝不是只在咸阳统治。" },
        { time: "巡游中", title: "刻石颂功", description: "秦在泰山、琅琊、会稽等地刻石，宣示统一功业、法令秩序和皇帝威德，把政治宣传刻入地理空间。" },
        { time: "前210", title: "末次巡游", description: "秦始皇在巡游途中病死沙丘，说明高度个人化的皇权一旦突然中断，会迅速暴露继承风险。" }
      ],
      results: ["皇权象征覆盖全国。", "沙丘之变前提形成。"],
      tip: "巡游不是旅游，而是新帝国对六国旧地的政治宣示。",
      claim: "秦始皇巡游体现统一帝国通过空间行动塑造皇权权威。",
      plainText: "史料主线是：秦始皇到各地巡行刻石，就是告诉天下这些地方都归皇帝直接统治。",
      question: "秦始皇为什么频繁巡游？",
      answer: "为了宣示统一皇权、震慑地方并检查新帝国控制。"
    }),
    event({
      id: "qin-shaqiu-coup",
      title: "沙丘之变与秦二世即位",
      aliases: ["沙丘之变"],
      era: "沙丘之后",
      time: "前210",
      regions: ["沙丘", "咸阳"],
      topics: ["继承", "赵高", "政变"],
      summary: "秦始皇死于巡游途中，赵高、李斯矫诏拥立胡亥，扶苏和蒙恬被迫死，秦朝继承秩序遭破坏。",
      people: ["秦始皇", "胡亥", "赵高", "李斯", "扶苏", "蒙恬"],
      background: ["秦朝皇帝制度高度集中，但继承制度尚未稳定，始皇突然死在外地使近臣获得操纵遗诏的机会。"],
      process: [
        { time: "前210", title: "始皇病死", description: "秦始皇在沙丘病死，消息被赵高、李斯等暂时封锁。最高权力突然真空，继承安排成为决定秦朝命运的关键。" },
        { time: "矫诏", title: "胡亥即位", description: "赵高、李斯矫诏立胡亥为帝，并赐死扶苏、蒙恬。原本可能较有威望的继承和军政力量被清除。" },
        { time: "后果", title: "赵高专权", description: "秦二世依赖赵高，朝政迅速走向猜忌和清洗。强帝国制度在弱继承人和权臣操纵下快速失稳。" }
      ],
      results: ["秦二世即位。", "扶苏、蒙恬死亡。", "秦朝政治稳定性急剧下降。"],
      tip: "秦亡不能只看农民起义，沙丘继承危机是重要政治前因。",
      claim: "沙丘之变破坏秦朝最高权力交接，直接削弱帝国自我修复能力。",
      plainText: "史料主线是：始皇死后，赵高等操纵继承，把秦朝带入权臣和昏君组合。",
      question: "沙丘之变为什么重要？",
      answer: "它让秦朝最高权力落入胡亥和赵高手中，政治迅速恶化。"
    }),
    event({
      id: "qin-chen-sheng-wu-guang",
      title: "陈胜吴广起义",
      era: "秦末崩溃",
      time: "前209",
      regions: ["大泽乡", "陈"],
      topics: ["秦末", "起义", "徭役"],
      summary: "戍卒陈胜、吴广在大泽乡起义，点燃秦末全国反秦浪潮，六国旧地纷纷响应。",
      people: ["陈胜", "吴广", "秦二世"],
      background: ["秦二世时期严刑重役、赋役压力和政治清洗叠加，社会对秦政的不满已高度积累。"],
      process: [
        { time: "前209", title: "戍卒误期", description: "陈胜、吴广等戍卒因雨误期，按秦法可能受重罚。严刑峻法让偶发延误变成生死危机。" },
        { time: "大泽乡", title: "揭竿起义", description: "陈胜、吴广发动起义，以王侯将相宁有种乎等政治动员号召反秦，迅速吸引大量基层民众。" },
        { time: "起义扩大", title: "张楚政权", description: "陈胜称王建立张楚，六国旧贵族和地方豪强纷纷借机起兵，反秦由局部兵变变成全国性崩溃。" }
      ],
      results: ["秦末起义爆发。", "六国旧地反秦力量复起。"],
      tip: "陈胜吴广起义要看严刑重役和六国旧地不服秦的共同作用。",
      claim: "大泽乡起义把秦朝社会压力转化为全国性政治崩溃。",
      plainText: "史料主线是：秦法太严、徭役太重，一次误期就可能逼出起义，反秦火势迅速蔓延。",
      question: "陈胜吴广起义为什么扩散快？",
      answer: "因为秦政压力普遍存在，六国旧地也有恢复旧国的政治基础。"
    }),
    event({
      id: "qin-xiang-liu-rise",
      title: "项羽刘邦起兵与反秦主力形成",
      era: "秦末崩溃",
      time: "前209-前207",
      regions: ["楚地", "沛县", "关东"],
      topics: ["秦末", "项羽", "刘邦"],
      summary: "陈胜失败后，项梁、项羽和刘邦等力量兴起，反秦战争从零散起义转向有组织的军事集团竞争。",
      people: ["项羽", "刘邦", "项梁", "楚怀王"],
      background: ["陈胜吴广起义打开反秦局面，但张楚政权很快失败，六国旧贵族和地方豪强接过反秦旗帜。"],
      process: [
        { time: "前209", title: "楚地起兵", description: "项梁、项羽在吴中起兵，利用楚国旧地反秦情绪和项氏家族声望扩大力量，迅速成为楚地重要反秦集团。" },
        { time: "前209-前208", title: "刘邦起于沛县", description: "刘邦以沛县地方力量起兵，逐渐从地方豪杰转为反秦军事集团首领，并在楚系反秦阵营中取得位置。" },
        { time: "前208后", title: "尊楚怀王", description: "反秦力量拥立楚怀王后裔，借楚国名义整合关东反秦势力。反秦战争开始具有更明确政治中心。" }
      ],
      results: ["项羽、刘邦成为反秦主力。", "秦末战争进入军事集团竞争阶段。"],
      tip: "秦亡不是陈胜一支完成的，后续项羽刘邦才是决定性力量。",
      claim: "项羽刘邦兴起使反秦战争从民变扩展为争夺天下的军事政治运动。",
      plainText: "史料主线是：陈胜点火，项羽和刘邦等人把反秦战争推向真正灭秦阶段。",
      question: "为什么陈胜之后还要重点写项羽刘邦？",
      answer: "因为最终灭秦和后续楚汉战争主要由项羽、刘邦等军事集团推动。"
    }),
    event({
      id: "qin-julu-battle",
      title: "巨鹿之战",
      era: "秦末崩溃",
      time: "前207",
      regions: ["巨鹿", "赵地"],
      topics: ["秦末", "项羽", "决战"],
      summary: "项羽破釜沉舟，在巨鹿击败秦军主力，秦朝军事支柱崩溃。",
      people: ["项羽", "章邯", "王离"],
      background: ["秦军镇压反秦力量一度有效，章邯、王离等部围攻赵地，关东反秦力量面临重大压力。"],
      process: [
        { time: "前207", title: "赵地危急", description: "秦军围攻巨鹿，赵国反秦力量求援。各路诸侯观望，若赵被灭，反秦联盟会遭受重大打击。" },
        { time: "巨鹿决战", title: "破釜沉舟", description: "项羽率楚军渡河后破釜沉舟，迫使军队决死作战，并连续击败秦军，诸侯军因此归附其威势。" },
        { time: "战后", title: "秦军主力瓦解", description: "王离军失败，章邯后续投降项羽。秦朝赖以镇压关东的主力军崩溃，灭亡已难避免。" }
      ],
      results: ["秦军主力被摧毁。", "项羽成为反秦联盟军事核心。"],
      tip: "巨鹿之战是秦亡前最关键的军事转折。",
      claim: "巨鹿之战摧毁秦朝镇压关东的核心军事力量。",
      plainText: "史料主线是：项羽在巨鹿打垮秦军主力，秦朝再也难以靠军事恢复局面。",
      question: "巨鹿之战为什么决定秦亡走势？",
      answer: "因为秦军主力失败后，秦朝失去镇压各地反秦力量的能力。"
    }),
    event({
      id: "qin-zhao-gao-chaos",
      title: "赵高专权与秦廷内乱",
      aliases: ["赵高专权"],
      era: "秦末崩溃",
      time: "前208-前207",
      regions: ["咸阳"],
      topics: ["赵高", "秦二世", "内乱"],
      summary: "赵高操纵秦二世并清洗大臣，后逼死秦二世，秦廷在外部起义压力下内部彻底失序。",
      people: ["赵高", "秦二世", "李斯", "子婴"],
      background: ["沙丘之变后赵高掌握皇帝和中枢，秦二世缺乏独立判断，外部反秦战争持续恶化。"],
      process: [
        { time: "前208", title: "李斯被杀", description: "赵高陷害李斯并将其处死，秦朝统一建制的重要功臣被清除，朝廷决策更受赵高控制。" },
        { time: "指鹿为马", title: "控制群臣", description: "赵高通过政治恐吓测试和控制群臣，朝廷官僚不敢真实反馈前线危机，决策环境严重扭曲。" },
        { time: "前207", title: "逼死二世", description: "赵高在局势崩坏中逼迫秦二世自杀，另立子婴。秦廷内乱使最后的抵抗组织能力进一步瓦解。" }
      ],
      results: ["秦二世死亡。", "赵高专权导致秦廷崩溃。", "子婴继位时已无力挽回局面。"],
      tip: "秦亡既有民变战争，也有中央政治自毁。",
      claim: "赵高专权加速秦朝中枢失灵。",
      plainText: "史料主线是：外面反秦军队越来越强，里面赵高还在杀大臣、骗皇帝，秦廷无法自救。",
      question: "赵高专权为什么加速秦亡？",
      answer: "因为它破坏朝廷真实决策和官僚体系，使秦朝不能有效应对危机。"
    }),
    event({
      id: "qin-fall",
      title: "刘邦入关与秦朝灭亡",
      era: "秦末崩溃",
      time: "前207",
      regions: ["武关", "咸阳", "关中"],
      topics: ["亡国", "刘邦", "秦末"],
      summary: "刘邦率军入关，子婴出降，秦朝灭亡；随后项羽入关分封，楚汉战争前提形成。",
      people: ["刘邦", "子婴", "项羽"],
      background: ["巨鹿之后秦军主力瓦解，赵高内乱削弱咸阳中枢，关中防御已经难以抵挡反秦军。"],
      process: [
        { time: "前207", title: "刘邦西进入关", description: "刘邦避开秦军主力方向，率军从武关进入关中，沿途约束军队并争取地方接受。" },
        { time: "前207", title: "子婴投降", description: "子婴杀赵高后已无力重建秦朝，面对刘邦入关和秦廷离散局面，最终出降，秦朝作为统一王朝灭亡。" },
        { time: "秦亡后", title: "楚汉前奏", description: "项羽随后入关并重新分封天下，秦亡并未立即带来稳定统一，而是引出楚汉战争。" }
      ],
      results: ["秦朝灭亡。", "楚汉战争前提形成。", "汉承秦制的问题随之出现。"],
      tip: "秦亡不是统一制度的终结，汉朝后来会继承和调整秦制。",
      claim: "秦朝灭亡结束了第一个大一统帝国，但秦制遗产被后世继承。",
      plainText: "史料主线是：刘邦先入关接受秦降，但天下并没有马上太平，项羽分封又引发楚汉战争。",
      question: "秦亡后为什么还会有楚汉战争？",
      answer: "因为秦被推翻后，谁来重新安排天下秩序仍未解决。"
    })
  ];

  const learningCases = {
    "qin-commandery-county": { label: "统一后的第一道难题：谁来管地方", claim: "废分封、设郡县把地方官任命与中央权力直接相连，是秦将征服转化为行政控制的关键选择。", sections: [["机制", "地方官由中央任免，旧贵族的世袭政治空间被压缩。"], ["代价", "制度提高命令穿透力，也要求中央持续供给官僚、文书和强制资源。"]], evidence: { title: "材料锚点：睡虎地秦简与传世秦制记载", content: "出土法律文书能显示行政实践，不能只从后世“专制”概念倒推。" }, misconception: "郡县制一出台就完全消除了地方力量。", memory: ["任免", "文书", "中央直达"], question: "郡县制为何比灭六国更决定秦的统一形态？", answer: "它把军事征服改造成中央可任免官员的地方治理结构。" },
    "qin-standardization": { label: "标准化让帝国的命令能在不同地区被执行", claim: "文字、度量衡、车轨等统一降低了行政、赋税和交通协作成本，是国家能力的基础设施。", sections: [["机制", "共同格式让文书、计量和运输能跨旧国界运作。"], ["限度", "各地语言、习惯和经济差异不会因法令立即消失。"]], evidence: { title: "材料锚点：秦简、权量器与刻石", content: "不同材料分别说明文书、计量和政治宣示，不能把它们混为同一项政策。" }, misconception: "书同文只是文化象征。", memory: ["格式", "协作", "行政成本"], question: "统一度量衡怎样服务帝国？", answer: "它使征税、工程、贸易和官府文书能使用同一套可核对的标准。" },
    "qin-law-and-official-system": { label: "秦法的重点是可追责的行政链", claim: "秦律以登记、核验和连带责任把基层家庭、官吏和中央命令连成一套监督体系。", sections: [["机制", "户籍、文书和赏罚让任务可记录、可追究。"], ["限度", "法律材料揭示国家视角，不等于所有人都被同样有效地控制。"]], evidence: { title: "材料锚点：睡虎地、里耶秦简", content: "简牍保存具体法律与行政用语，是理解制度运行的重要第一手材料。" }, misconception: "秦法只有残酷刑罚，没有行政技术。", memory: ["登记", "核验", "责任链"], question: "秦律为何也是行政史材料？", answer: "它显示命令如何被登记、执行和追责。" },
    "qin-burning-books": { label: "控制知识并不能替代治理能力", claim: "焚书坑儒叙事反映秦试图限制政治讨论和历史解释，但其规模、对象与细节需要谨慎区分。", sections: [["目的", "统一后中央试图压制以古制批评现实政治的言论。"], ["限度", "传世叙事有强烈后世评价，不能把所有知识传统被彻底毁灭当作事实。"]], evidence: { title: "材料锚点：《史记·秦始皇本纪》与秦简", content: "焚书、坑儒在史料性质上不同，应分别讨论。" }, misconception: "秦一次行动消灭了所有先秦典籍。", memory: ["政治批评", "史料分层", "控制有限"], question: "如何理解焚书坑儒而不陷入脸谱化？", answer: "将其视为知识控制政策，同时区分传世叙事、对象与实际效果。" },
    "qin-shaqiu-coup": { label: "高度集权也可能在继承时失去纠错能力", claim: "沙丘政变显示秦的命令体系能够迅速伪造和传递诏令，却缺少公开、稳定的继承与制衡机制。", sections: [["机制", "少数近臣控制遗诏与信息，改变继承顺序。"], ["后果", "中央权力并未分散，却因信息封闭和恐惧激励而加速失序。"]], evidence: { title: "材料锚点：《史记·李斯列传》《秦始皇本纪》", content: "具体密谋过程主要来自传世叙事，重点应放在继承危机的制度含义。" }, misconception: "秦亡只因赵高个人奸诈。", memory: ["信息封闭", "继承失序", "纠错失败"], question: "沙丘之变暴露了什么制度风险？", answer: "它暴露中央权力高度集中却缺少可靠继承和纠错程序的风险。" },
    "qin-chen-sheng-wu-guang": { label: "帝国崩解从基层征发失灵开始", claim: "陈胜吴广起义把征发压力、地方官僚恐惧与旧国身份动员连接起来，证明统一并未形成稳定认同。", sections: [["触发", "严苛期限与惩罚使基层面对不可承受的服从风险。"], ["扩散", "地方精英和旧国力量借起义重组，反秦不再是单一小规模反抗。"]], evidence: { title: "材料锚点：《史记·陈涉世家》与秦末传世材料", content: "“王侯将相宁有种乎”带有文学化表达，仍可作为社会动员记忆讨论。" }, misconception: "一次暴雨直接推翻秦朝。", memory: ["征发", "恐惧", "旧国动员"], question: "陈胜吴广为何能引发连锁反应？", answer: "因为它触发了基层征发压力，并为各地政治力量提供了反秦出口。" }
  };
  const coreIds = new Set(Object.keys(learningCases));
  window.QIN_EVENTS = window.QIN_EVENTS.map((item) => ({ ...item, contentLevel: coreIds.has(item.id) ? "core" : "outline", learningCase: learningCases[item.id] || null }));

  const originalById = new Map(window.QIN_EVENTS.map((item) => [item.id, item]));
  const mergePlans = {
    "qin-first-emperor-system": ["qin-first-emperor-system", "qin-imperial-tours"],
    "qin-commandery-county": ["qin-commandery-county", "qin-law-and-official-system"],
    "qin-standardization": ["qin-standardization"],
    "qin-northern-xiongnu-wall": ["qin-northern-xiongnu-wall", "qin-baiyue-lingnan"],
    "qin-burning-books": ["qin-burning-books"],
    "qin-shaqiu-coup": ["qin-shaqiu-coup", "qin-zhao-gao-chaos"],
    "qin-chen-sheng-wu-guang": ["qin-chen-sheng-wu-guang", "qin-xiang-liu-rise", "qin-julu-battle", "qin-fall"]
  };
  const caseAdditions = {
    "qin-first-emperor-system": { label: "皇帝称号如何把征服塑造成新秩序", claim: "始皇帝称号、刻石与巡行共同宣示新的权力尺度：六国不再并列，最高权威要直接面向全国行政与地方精英。", sections: [["建构", "称号把王的传统权威提升为统一帝国的单一来源，巡行把这一抽象权威带到新并入地区。"], ["限度", "刻石和巡行是国家自我宣示，不能直接证明地方已完全接受或服从。"]], evidence: { title: "材料锚点：秦刻石、传世本纪与考古遗址", content: "刻石可见帝国政治语言；巡行路线和细节须结合传世叙事谨慎使用。" }, misconception: "皇帝制度只是改了一个称号。", memory: ["单一权威", "刻石", "巡行"], question: "秦为何要创造始皇帝称号？", answer: "它要为跨越旧诸侯国的统治创造新的、不可并列的最高权威。" },
    "qin-northern-xiongnu-wall": { label: "统一帝国如何处理两条边疆", claim: "北击匈奴、修筑防御体系与南征百越并非同一政策的简单复制：前者重在北方军事走廊，后者重在岭南郡县和资源通道。", sections: [["北方", "蒙恬经营河套与长城体系，回应的是骑兵与边塞通道压力。"], ["南方", "岭南征服和郡县设置把新地区纳入帝国网络，但治理成本、环境与地方社会条件不同。"]], evidence: { title: "材料锚点：秦简、长城遗址与岭南考古", content: "边疆工程、行政设置与战争叙事来自不同材料，疆域控制强度不应一概而论。" }, misconception: "秦朝地图的每一处边缘都表示同等强度的直接控制。", memory: ["北方防御", "岭南郡县", "控制差异"], question: "秦的南北边疆政策为何不同？", answer: "面对的地理、对手和治理目标不同，北方偏防御与通道，南方兼具征服、行政与资源整合。" },
    "qin-chen-sheng-wu-guang": { label: "反秦为何从起义扩展为政权重组", claim: "陈胜吴广打开反秦出口后，项羽、刘邦等力量借旧国网络、地方武装和巨鹿战局争夺领导权，秦的崩解演为新的天下秩序竞争。", sections: [["扩散", "基层征发危机引爆后，反秦力量并非自动团结，而是围绕旧国名义、军队与地方资源竞争。"], ["转折", "巨鹿削弱秦军主力，子婴降刘邦结束秦朝，却没有解决项刘之间谁来安排天下的问题。"]], evidence: { title: "材料锚点：《史记》秦楚汉相关本纪、列传与秦末考古", content: "英雄叙事浓厚；应区分起义触发、军事胜负与后续权力重组三个层次。" }, misconception: "陈胜起义一发生，秦朝就立刻被推翻。", memory: ["征发失灵", "巨鹿转折", "秩序重组"], question: "秦末为何会接着爆发楚汉战争？", answer: "推翻秦只解决了旧帝国，新的政治中心、资源分配和合法性仍需通过竞争决定。" }
  };
  const summaryOverrides = {
    "qin-first-emperor-system": "秦以始皇帝称号、刻石和巡行宣示六国已纳入单一最高权威；这既是新帝国的政治语言，也需靠行政制度持续落实。",
    "qin-commandery-county": "郡县制以中央任免连接地方，秦律、户籍和文书追责把命令落实为可核验的行政链。",
    "qin-northern-xiongnu-wall": "秦北击匈奴并经营长城、河套，同时南征百越和设置岭南郡县；南北边疆的控制目标与强度并不相同。",
    "qin-shaqiu-coup": "沙丘政变改变继承顺序，赵高随后操控朝政，显示高度集权体系在信息封闭和继承失序中会迅速丧失纠错能力。",
    "qin-chen-sheng-wu-guang": "陈胜吴广起义引爆反秦，项羽、刘邦等力量继而竞争；巨鹿之战与子婴降刘邦终结秦朝，却开启新的天下重组。"
  };
  const keptIds = Object.keys(mergePlans);
  const coreDebates = {
    "qin-first-emperor-system": "称号、刻石与巡行可见帝国政治语言；其对地方实际控制的效果不能仅由官方宣示推出。",
    "qin-commandery-county": "郡县制确立中央任免框架；具体郡数、地方执行强度与沿革仍应按简牍和传世材料区分。",
    "qin-standardization": "统一文字与度量衡有物证和文献支持；其覆盖速度及地方差异不应被忽略。",
    "qin-northern-xiongnu-wall": "秦北方与岭南经营均有制度和考古材料；边缘地区的控制强度并不相同。",
    "qin-burning-books": "焚书和坑儒的对象、规模与过程主要见于传世叙事，不能视为全部先秦知识被毁。",
    "qin-shaqiu-coup": "继承政变的密谋细节主要来自《史记》，其制度性后果比戏剧化情节更可作为分析重点。",
    "qin-chen-sheng-wu-guang": "起义扩散与秦末崩解可由多类记载确认；口号和人物细节含文学化传述。"
  };
  const coreAnchors = {
    "qin-first-emperor-system": { regnal: "前221年；秦王政二十六年", coordinate: "34.34N, 108.71E", admin: "咸阳，今陕西省咸阳市", terrainTransport: "渭河平原；函谷关东出与全国驰道网络" },
    "qin-commandery-county": { regnal: "前221年后；秦始皇时期", coordinate: "34.34N, 108.71E", admin: "咸阳中央与三十六郡", terrainTransport: "关中盆地为中枢；驰道、水道与文书系统连接郡县" },
    "qin-standardization": { regnal: "前221年后；秦始皇时期", coordinate: "34.34N, 108.71E", admin: "咸阳及原六国地区", terrainTransport: "驰道、车轨与统一度量衡服务跨区域运输和行政" },
    "qin-northern-xiongnu-wall": { regnal: "前215年后；秦始皇三十二年后", coordinate: "40.35N, 109.75E", admin: "河套与九原，今内蒙古自治区西部", terrainTransport: "黄河河套、阴山南麓；北方边塞与岭南水陆通道" },
    "qin-burning-books": { regnal: "前213-前212年；秦始皇三十四年至三十五年", coordinate: "34.34N, 108.71E", admin: "咸阳，今陕西省咸阳市", terrainTransport: "帝国中枢；诏令沿郡县文书网络传达" },
    "qin-shaqiu-coup": { regnal: "前210年；秦始皇三十七年", coordinate: "37.57N, 115.03E", admin: "沙丘，今河北省邢台市广宗一带", terrainTransport: "北方巡行路线；沙丘至咸阳的驿传与诏令通道" },
    "qin-chen-sheng-wu-guang": { regnal: "前209-前207年；秦二世元年至三年", coordinate: "33.10N, 116.98E", admin: "大泽乡，今安徽省宿州市一带", terrainTransport: "淮北平原；通向陈、关东旧国与武关的征发道路" }
  };
  window.QIN_EVENTS = keptIds.map((id, index) => {
    const item = originalById.get(id);
    const members = mergePlans[id].map((memberId) => originalById.get(memberId));
    const process = members.flatMap((member) => member.process.map((step) => ({ time: step.time, title: `${member.title}：${step.title}`, description: step.description })));
    const learningCase = caseAdditions[id] || item.learningCase;
    return { ...item, timeAnchor: { time: item.time, ...coreAnchors[id] }, spatialAnchor: coreAnchors[id], factLayer: process.slice(0, 5).map((step) => ({ text: `[事实层] ${step.time}：${step.description}`, sourceId: "qin-main-source" })), debates: [{ view: "[主流说]", content: learningCase.claim }, { view: "[挑战说]", content: coreDebates[id] }], causalChain: [{ kind: "cause", label: "[表层因]", title: "直接行动", description: process[0].description }, { kind: "cause", label: "[深层因]", title: "资源与制度", description: process[1]?.description || item.summary }, { kind: "cause", label: "[结构因]", title: "帝国结构", description: learningCase.claim }, { kind: "impact", label: "[传导机制]", title: "后续关联", description: summaryOverrides[id] || item.summary }], summary: summaryOverrides[id] || item.summary, process, contentLevel: "core", contentPresentation: "tiered", learningCase, previousEventIds: index ? [keptIds[index - 1]] : [], nextEventIds: index < keptIds.length - 1 ? [keptIds[index + 1]] : [], mergedEventIds: members.slice(1).map((member) => member.id) };
  });
})();
