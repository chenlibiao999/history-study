(() => {
  const confidenceLevels = ["high", "medium-high", "medium", "medium-low", "low"];

  function area(label, note) {
    return { label, note };
  }

  function layer(type, label, color, areas, note) {
    return { type, label, color, areas, note };
  }

  function snapshot(item) {
    return {
      id: item.id,
      dynastyId: item.dynastyId,
      title: item.title,
      period: item.period,
      timeRange: item.timeRange,
      eventIds: item.eventIds || [],
      basis: item.basis,
      confidence: confidenceLevels.includes(item.confidence) ? item.confidence : "medium-low",
      note: item.note,
      referenceMap: item.referenceMap,
      layers: item.layers || []
    };
  }

  const referenceMapBasis = "只采用公开、可追溯、可授权的现成历史地图作为底图；本项目不再自绘抽象势力范围图。图层只用于解释行政控制、边区、争夺区或文化影响的阅读口径，不替代原图边界。";

  window.POLITICAL_MAP_DATA = {
    "shang": {
      dynastyId: "shang",
      title: "商朝参考历史地图",
      mapPolicy: "reference-map-only",
      note: "先放入能追溯来源的商代参考图。商代早中晚期控制范围本身存在较多考古与文献解释差异，因此只作为学习入口，不把图中边界理解成精确国界。",
      snapshots: [
        snapshot({
          id: "china-map-shang-core",
          dynastyId: "shang",
          title: "商朝空间范围与早期王朝网络",
          period: "商朝",
          timeRange: "约前1600-前1046",
          eventIds: [
            "shang-erligang-expansion",
            "shang-pangeng-moves-yin",
            "shang-wuding-prosperity",
            "shang-fangguo-relations"
          ],
          basis: referenceMapBasis,
          confidence: "medium",
          referenceMap: {
            src: "assets/maps/china/shang-dynasty.svg",
            title: "Shang dynasty.svg",
            sourceTitle: "Wikimedia Commons: Shang dynasty.svg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Shang_dynasty.svg",
            author: "Lamassu Design / Gurdjieff",
            license: "CC BY-SA 3.0",
            note: "原图说明基于《竹书纪年》口径；商代实际控制、方国关系和文化分布不能简单等同于现代边界。"
          },
          note: "商代更适合按王畿、都邑网络、方国和文化影响理解。早商二里岗扩张、盘庚迁殷、武丁时期用兵和方国关系可以共同解释王朝中心怎样维持对周边的控制。",
          layers: [
            layer("core-admin", "王畿与都邑核心", "#5ba88c", [
              area("郑州商城至殷墟核心带", "以都邑、王室祭祀、青铜礼制和甲骨材料能较集中呈现的区域为核心，不等同于全部实际领土。")
            ], "商王权较稳定组织祭祀、军事和资源调配的核心空间。"),
            layer("vassal", "方国与附属网络", "#8bbf6a", [
              area("商周边方国", "方国可能有朝贡、婚姻、军事协同或冲突关系，不能简单视为直属郡县式行政区。")
            ], "商王朝与周边政治共同体之间的强弱关系随时期变化。"),
            layer("military", "晚商征伐方向", "#c29a5c", [
              area("土方、羌方及东南用兵方向", "甲骨卜辞反映商王室对若干边缘方国持续用兵，说明边疆控制依赖军事行动而非稳定行政覆盖。")
            ], "军事影响范围高于普通文化扩散，但仍不等同于长期直接治理。")
          ]
        })
      ]
    },

    "spring-autumn-warring-states": {
      dynastyId: "spring-autumn-warring-states",
      title: "春秋战国参考历史地图",
      mapPolicy: "reference-map-only",
      note: "春秋战国是多诸侯长期竞争时期，地图按阶段快照管理：春秋末战国初看中原诸侯格局，战国后期看七雄与秦统一前夜。",
      snapshots: [
        snapshot({
          id: "china-map-chinese-plain-5c-bc",
          dynastyId: "spring-autumn-warring-states",
          title: "春秋末至战国初中原格局",
          period: "春秋末战国初",
          timeRange: "约前5世纪",
          eventIds: [
            "saws-eastward-move",
            "saws-jin-qing-dafu-rise",
            "saws-three-families-partition-jin",
            "saws-tian-family-replaces-qi"
          ],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: {
            src: "assets/maps/china/chinese-plain-5c-bc-en.svg",
            title: "Chinese plain 5c. BC-en.svg",
            sourceTitle: "Wikimedia Commons: Chinese plain 5c. BC-en.svg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Chinese_plain_5c._BC-en.svg",
            author: "Yug / Hugo Lopez",
            license: "CC BY-SA 3.0",
            note: "原图用于表现前5世纪华北平原诸侯格局，适合作为春秋末战国初转型的背景图。"
          },
          note: "这一阶段重点不是单一王朝疆域，而是周王室权威下降后，中原诸侯、卿大夫家族和地方强国怎样重新分配权力。",
          layers: [
            layer("core-admin", "主要诸侯控制区", "#5ba88c", [
              area("晋、齐、楚、秦、鲁、宋、卫等诸侯", "这些政权具有相对稳定的行政和军事组织，是理解春秋末战国初格局的主体。")
            ], "多政权并立时期的核心控制区。"),
            layer("contested", "晋国内部分化与旧秩序裂解", "#c29a5c", [
              area("晋国卿大夫势力圈", "三家分晋之前，晋国内部权力已经向韩、赵、魏等卿族转移，旧诸侯国壳体逐渐失去实权。")
            ], "解释从春秋霸权政治转向战国列国政治的关键过渡区。"),
            layer("influence", "周礼秩序残余影响", "#4a7fb5", [
              area("洛邑及周王室名义影响", "周王室仍有名分价值，但实际调动诸侯和裁决秩序的能力已大幅下降。")
            ], "文化与名义影响，不等同于有效行政控制。")
          ]
        }),
        snapshot({
          id: "china-map-warring-states-260-bce",
          dynastyId: "spring-autumn-warring-states",
          title: "战国七雄与秦统一前格局",
          period: "战国后期",
          timeRange: "约前260",
          eventIds: [
            "saws-suqin-zhangyi-diplomacy",
            "saws-king-wuling-reform",
            "saws-changping-battle",
            "saws-lu-buwei-and-qin-politics",
            "saws-qin-destroys-six-states"
          ],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: {
            src: "assets/maps/china/warring-states-260-bce-zh.jpg",
            title: "ZH-战国七雄地图.jpg",
            sourceTitle: "Wikimedia Commons: ZH-战国七雄地图.jpg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:ZH-%E6%88%98%E5%9B%BD%E4%B8%83%E9%9B%84%E5%9C%B0%E5%9B%BE.jpg",
            author: "Philg88",
            license: "CC BY 3.0 / GFDL",
            note: "原图标示约前260年战国七雄格局，可用于长平之战与秦灭六国前夜的空间理解。"
          },
          note: "战国后期应重点看秦、赵、楚、齐、燕、韩、魏之间的战略位置和通道，而不是把七雄看成静态色块。",
          layers: [
            layer("core-admin", "七雄核心控制区", "#5ba88c", [
              area("秦、赵、楚、齐、燕、韩、魏", "七雄各自拥有较成型的官僚、军制和财政组织，是统一前主要政治军事主体。")
            ], "战国后期主导性政权的实际控制区。"),
            layer("military", "秦东出与赵韩魏压力区", "#c29a5c", [
              area("上党、河内、关东通道", "秦要统一必须压缩韩赵魏并打通东出路线，长平之战正处在这个战略结构中。")
            ], "军事压力和战略通道，不等同于已经稳定治理。"),
            layer("contested", "合纵连横竞争区", "#6a91c9", [
              area("关东列国外交空间", "合纵连横围绕秦强与列国自保展开，外交选择会直接改变各国能否集中力量抵抗秦。")
            ], "外交和战略争夺范围。")
          ]
        })
      ]
    },

    "qin": {
      dynastyId: "qin",
      title: "秦朝参考历史地图",
      mapPolicy: "reference-map-only",
      note: "秦朝地图优先展示统一后郡县帝国、北方边防与岭南扩展。秦朝时间短，但制度与疆域整合是后世帝国结构的关键起点。",
      snapshots: [
        snapshot({
          id: "china-map-qin-commanderies",
          dynastyId: "qin",
          title: "秦朝郡县与统一帝国版图",
          period: "秦朝",
          timeRange: "前221-前206",
          eventIds: [
            "qin-commandery-county",
            "qin-standardization",
            "qin-northern-xiongnu-wall",
            "qin-baiyue-lingnan"
          ],
          basis: referenceMapBasis,
          confidence: "high",
          referenceMap: {
            src: "assets/maps/china/qin-dynasty-territory.svg",
            title: "Qin dynasty territory.svg",
            sourceTitle: "Wikimedia Commons: Qin dynasty territory.svg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Qin_dynasty_territory.svg",
            author: "Ian Remsen",
            license: "CC0 1.0",
            note: "原图说明使用 Natural Earth 底图并参考 Li Feng《Early China》等研究口径，适合展示秦郡县与统一后空间框架。"
          },
          note: "秦统一后的关键不只是“面积扩大”，而是把战国列国的土地重新纳入郡县、道路、文字度量衡、法律和军役体系。",
          layers: [
            layer("core-admin", "郡县直接治理区", "#5ba88c", [
              area("内史与诸郡", "秦统一后以郡县制直接任官治理，这是不同于诸侯封建的核心制度变化。")
            ], "实际行政控制优先于军事影响。"),
            layer("military", "北方边防与长城体系", "#c29a5c", [
              area("河套、阴山及北边防线", "秦北击匈奴后连接和修筑长城，形成北部军事防线，但边防线外不应视为稳定行政区。")
            ], "军事防御和边疆控制。"),
            layer("contested", "岭南整合与百越地区", "#6a91c9", [
              area("岭南诸郡与百越地区", "秦设置南海、桂林、象郡等以纳入岭南，但地方整合难度大，秦末很快出现割据。")
            ], "新纳入地区的行政整合强度弱于中原核心区。")
          ]
        })
      ]
    },

    "western-han": {
      dynastyId: "western-han",
      title: "西汉参考历史地图",
      mapPolicy: "reference-map-only",
      note: "西汉先补高帝十二年郡国并行格局，用于解释刘邦建汉后为什么还需要在郡县和封国之间折中。",
      snapshots: [
        snapshot({
          id: "china-map-han-kingdoms-195-bc",
          dynastyId: "western-han",
          title: "汉高帝十二年郡国并行格局",
          period: "西汉初",
          timeRange: "前195",
          eventIds: [
            "whan-liu-bang-founds-han",
            "whan-feudal-commandery-compromise",
            "whan-heqin-xiongnu",
            "whan-rebellion-seven-states"
          ],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: {
            src: "assets/maps/china/han-kingdoms-195-bc.png",
            title: "Han dynasty Kingdoms 195 BC.png",
            sourceTitle: "Wikimedia Commons: Han dynasty Kingdoms 195 BC.png",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Han_dynasty_Kingdoms_195_BC.png",
            author: "Esiymbro",
            license: "CC BY-SA 4.0",
            note: "原图说明边界基于周振鹤《西汉政区地理》前195年郡国格局，适合解释西汉初郡国并行。"
          },
          note: "西汉初不是秦制的简单延续：中央郡县、同姓或异姓诸侯王国和北方匈奴压力共同塑造了前期政治结构。",
          layers: [
            layer("core-admin", "中央直辖郡", "#5ba88c", [
              area("关中及中西部郡县", "这些地区由中央直接任官治理，是刘邦建汉后维持皇权和财政兵源的基本盘。")
            ], "实际行政控制区。"),
            layer("vassal", "诸侯王国", "#8bbf6a", [
              area("东方与南方诸王国", "王国名义上属于汉帝国，但地方王权拥有较强财政、军事和任官空间，后来成为七国之乱的制度背景。")
            ], "附属性控制，强度低于中央郡县。"),
            layer("military", "北方匈奴压力方向", "#c29a5c", [
              area("代、雁门、上谷及北边", "白登之围和和亲政策说明西汉初北方边防仍受匈奴强压，不能把北边视为稳定扩张区。")
            ], "外部军事压力与边防空间。")
          ]
        }),
        snapshot({
          id: "china-map-han-2ce",
          dynastyId: "western-han",
          title: "西汉末郡县王国与西域都护格局",
          period: "西汉末",
          timeRange: "2",
          eventIds: ["whan-han-xiongnu-war", "whan-hexi-western-regions", "whan-zhang-qian-western-regions", "whan-western-regions-protectorate", "whan-late-western-han-crisis"],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: { src: "assets/maps/china/han-dynasty-2ce.png", title: "Han Dynasty map 2CE.png", sourceTitle: "Wikimedia Commons: Han Dynasty map 2CE.png", sourceUrl: "https://commons.wikimedia.org/wiki/File:Han_Dynasty_map_2CE.png", author: "Historian of the arab people", license: "Public domain", note: "原图表现公元2年前后的西汉疆域、郡国和西域都护大势。西域都护属于边疆军事行政和交通控制体系，不能按内地郡县强度理解。" },
          note: "西汉末地图适合串联武帝反击匈奴、河西四郡、西域交通、都护设置和后期外戚政治危机。",
          layers: [
            layer("core-admin", "郡县与王国核心治理区", "#5ba88c", [area("关中、关东、江淮、江南、巴蜀及主要郡国", "这些地区纳入较稳定的户籍、赋役、官僚和法令体系，是西汉国家能力的主体。")], "西汉直接治理的基本盘。"),
            layer("military", "河西与西域交通控制", "#c29a5c", [area("河西四郡、西域都护相关通道", "这些地区连接中原与西域，依赖军事屯戍、交通节点和外交网络维持控制。")], "边疆控制强度低于内地郡县。"),
            layer("contested", "匈奴压力与北方边地", "#6a91c9", [area("漠南、河套、天山南北通道", "汉匈战争和西域经营都围绕这些战略空间展开，控制线随军事与外交形势变化。")], "争夺区不等于固定疆界。")
          ]
        })
      ]
    },


    "eastern-han": {
      dynastyId: "eastern-han",
      title: "东汉参考历史地图",
      mapPolicy: "reference-map-only",
      note: "东汉地图先接入东汉末参考图，用于理解黄巾、州牧、董卓进京和献帝被挟持之后，王朝名义与地方实权怎样分离。",
      snapshots: [
        snapshot({
          id: "china-map-eastern-han-200ad",
          dynastyId: "eastern-han",
          title: "东汉末州郡军阀割据大势",
          period: "东汉末",
          timeRange: "约200",
          eventIds: ["ehan-yellow-turban-rebellion", "ehan-provincial-governors", "ehan-dong-zhuo-enters-luoyang", "ehan-emperor-xian-controlled", "ehan-cao-pi-ends-han"],
          basis: referenceMapBasis,
          confidence: "medium",
          referenceMap: { src: "assets/maps/china/eastern-han-200ad.png", title: "Han Dynasty 200AD.png", sourceTitle: "Wikimedia Commons: Han Dynasty 200AD.png", sourceUrl: "https://commons.wikimedia.org/wiki/File:Han_Dynasty_200AD.png", author: "Thomas Lessman; derivative work by Hongkongresident", license: "CC BY-SA 3.0", note: "原图表现约200年前后的汉末军阀格局；用于读东汉末政治崩解，不应理解为东汉中央仍能直接控制全部标示区域。" },
          note: "东汉末的重点是中央名义、州牧刺史军事化、地方豪强与军阀控制之间的断裂。",
          layers: [
            layer("core-admin", "名义汉廷与州郡体系", "#5ba88c", [area("洛阳、长安、许都及汉廷名义秩序", "东汉制度名义仍存在，但中央对州郡的实际控制已大幅下降。")], "行政名义与实际控制需要分开理解。"),
            layer("military", "地方军阀实际控制区", "#c29a5c", [area("袁绍、曹操、孙策、刘表、刘璋等势力范围", "地方军事集团依托州郡、豪强和军队掌握实际权力，是汉末向三国转化的关键。")], "军事控制优先于名义朝廷秩序。"),
            layer("contested", "中原争夺区", "#6a91c9", [area("兖豫司冀交界与黄河中下游", "官渡前后，中原控制权决定谁能挟天子、整合北方资源并取得统一优势。")], "争夺区边界随战局快速变化。")
          ]
        })
      ]
    },

    "late-han-three-kingdoms": {
      dynastyId: "late-han-three-kingdoms",
      title: "汉末三国参考历史地图",
      mapPolicy: "reference-map-only",
      note: "汉末三国地图服务于从群雄割据到魏蜀吴制度化并立的分析，需结合官渡、赤壁、入蜀、夷陵和魏灭蜀等事件理解。",
      snapshots: [
        snapshot({
          id: "china-map-three-kingdoms-260",
          dynastyId: "late-han-three-kingdoms",
          title: "魏蜀吴三国鼎立格局",
          period: "三国后期",
          timeRange: "约260",
          eventIds: ["lh3k-caopi-replaces-han", "lh3k-yiling-battle", "lh3k-sunquan-emperor-wu-shu-alliance", "lh3k-zhuge-liang-northern-expeditions", "lh3k-wei-conquers-shu", "lh3k-jin-replaces-wei"],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: { src: "assets/maps/china/three-kingdoms-260.svg", title: "Trois royaumes de Chine carte.svg", sourceTitle: "Wikimedia Commons: Trois royaumes de Chine carte.svg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Trois_royaumes_de_Chine_carte.svg", author: "Zunkir; base map after Kanguole", license: "CC BY-SA 4.0", note: "原图用于表现三国鼎立阶段的大势；蜀汉、东吴边缘区和少数族地区的实际控制强度不可等同于现代国界。" },
          note: "三国地图要看北方人口财政优势、蜀汉战略纵深、东吴长江防线以及曹魏最终统一优势如何形成。",
          layers: [
            layer("core-admin", "魏蜀吴核心统治区", "#5ba88c", [area("曹魏华北与中原", "曹魏掌握人口、屯田和制度资源，是三国后期最强的行政军事主体。"), area("蜀汉益州核心", "蜀汉依托四川盆地维持政权，北伐方向受秦岭、汉中和补给线限制。"), area("东吴江东与长江中下游", "东吴依托江东士族、水军和长江防线维持长期割据。")], "三国核心行政区与边缘影响区需要区分。"),
            layer("military", "北伐与江淮争夺线", "#c29a5c", [area("汉中、陇右、淮南、荆州", "这些方向决定三国之间能否突破相持格局。")], "军事争夺方向不等于稳定治理范围。"),
            layer("contested", "边缘控制与羁縻地带", "#6a91c9", [area("南中、辽东、岭南部分地区", "这些区域常见间接控制、地方豪族或族群势力共存。")], "分裂时期尤其要标明控制强弱。")
          ]
        })
      ]
    },

    "northern-southern": {
      dynastyId: "northern-southern",
      title: "魏晋南北朝参考历史地图",
      mapPolicy: "reference-map-only",
      note: "魏晋南北朝地图按统一、崩解、南北对峙阶段管理。政权更替密集，地图只放阶段快照，具体事件仍以时间线和过程说明为主。",
      snapshots: [
        snapshot({
          id: "china-map-western-jin-unification",
          dynastyId: "northern-southern",
          title: "西晋统一后的短期全国格局",
          period: "西晋",
          timeRange: "280-316",
          eventIds: ["ns-jin-unifies-wu", "ns-eight-princes-war", "ns-yongjia-collapse"],
          basis: referenceMapBasis,
          confidence: "medium",
          referenceMap: { src: "assets/maps/china/western-jin.png", title: "China Western Jin.PNG", sourceTitle: "Wikimedia Commons: China Western Jin.PNG", sourceUrl: "https://commons.wikimedia.org/wiki/File:China_Western_Jin.PNG", author: "LiDaobing", license: "GFDL / CC BY-SA 3.0", note: "原图用于表现西晋统一后的疆域大势；西晋统一时间很短，地方宗王、州郡军事化和内迁族群问题很快改变实际控制强度。" },
          note: "西晋地图重点不是把280年统一看成稳定结局，而是看统一后制度承压。",
          layers: [
            layer("core-admin", "西晋州郡核心区", "#5ba88c", [area("洛阳中枢、华北、江南旧吴地", "灭吴后西晋名义上完成全国统一，但不同地区整合程度并不相同。")], "短期统一行政格局。"),
            layer("contested", "宗王与边地压力区", "#6a91c9", [area("关中、并州、河北及诸王封镇", "八王之乱中宗王军事力量和地方控制互相牵连，削弱中央对北方的治理能力。")], "西晋崩解要从内部权力结构看。")
          ]
        }),
        snapshot({
          id: "china-map-northern-southern-560",
          dynastyId: "northern-southern",
          title: "北齐北周陈并立格局",
          period: "南北朝后期",
          timeRange: "约560",
          eventIds: ["ns-northern-wei-split", "ns-northern-qi-zhou-founded", "ns-northern-zhou-prevails", "ns-chen-northern-frontier-and-sui-threat"],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: { src: "assets/maps/china/northern-southern-dynasties-560.png", title: "Northern and Southern Dynasties 560 CE.png", sourceTitle: "Wikimedia Commons: Northern and Southern Dynasties 560 CE.png", sourceUrl: "https://commons.wikimedia.org/wiki/File:Northern_and_Southern_Dynasties_560_CE.png", author: "Ian Kiu", license: "GFDL / CC BY 3.0", note: "原图用于表现约560年前后北齐、北周、陈等政权并立，适合解释隋统一前的空间结构。" },
          note: "南北朝后期要看北方东西分裂怎样重新走向北周优势，以及南朝陈的战略空间为何收窄。",
          layers: [
            layer("core-admin", "北齐、北周、陈核心区", "#5ba88c", [area("北齐山东河北核心", "北齐继承东魏势力，拥有华北东部人口和农业资源。"), area("北周关陇核心", "北周依托关中和关陇军政集团，后续成为隋唐政治军事基础之一。"), area("陈朝江南核心", "陈朝保有江南，但北方压力和内部资源限制使其战略空间收窄。")], "三个主要政权的直接统治区。"),
            layer("military", "北方再统一方向", "#c29a5c", [area("河东、洛阳、邺城方向", "北周要压倒北齐，必须夺取华北关键通道和政治中心。")], "军事推进线要和行政控制分开。")
          ]
        })
      ]
    },

    "tang": {
      dynastyId: "tang",
      title: "唐朝参考历史地图",
      mapPolicy: "reference-map-only",
      note: "唐朝地图优先展示统一后到开元天宝前后的高峰格局，并把边疆都护、羁縻、军事影响与核心州县分开理解。",
      snapshots: [
        snapshot({
          id: "china-map-tang-742",
          dynastyId: "tang",
          title: "唐玄宗开元天宝前后疆域与道制",
          period: "盛唐",
          timeRange: "742",
          eventIds: ["defeat-eastern-turkic-khaganate", "conquest-goguryeo", "kaiyuan-era", "tianbao-frontier-crisis", "tang-talas-and-western-regions"],
          basis: referenceMapBasis,
          confidence: "high",
          referenceMap: { src: "assets/maps/china/tang-742.svg", title: "China, 742.svg", sourceTitle: "Wikimedia Commons: China, 742.svg", sourceUrl: "https://commons.wikimedia.org/wiki/File:China,_742.svg", author: "Yug", license: "CC BY-SA 3.0", note: "原图说明参考 Cambridge History of China 与相关研究，用于表现742年前后的唐朝行政与边疆格局。都护、羁縻和军事影响区不能等同于内地州县。" },
          note: "盛唐地图必须同时看国家能力高峰和结构风险：内地州县较稳定，西域、东北、草原和吐蕃方向更多依赖都护、羁縻、军镇和外交军事压力。",
          layers: [
            layer("core-admin", "内地州县与稳定治理区", "#5ba88c", [area("关中、河南、河北、江淮、江南、巴蜀、岭南主要州县", "这些区域构成唐朝财政、户籍和官僚治理的基本盘。")], "实际行政控制优先。"),
            layer("vassal", "都护府、羁縻与属部", "#8bbf6a", [area("安西、北庭、安东等边疆体系", "唐朝在边疆通过都护、羁縻、册封和驻军维持影响，控制强度与内地州县不同。")], "边疆治理强度分层。"),
            layer("military", "边镇压力与战略通道", "#c29a5c", [area("河西、西域、东北、陇右、范阳等方向", "这些方向既显示唐朝扩张能力，也孕育节度使和边镇坐大的结构风险。")], "军事影响和行政控制不可混同。")
          ]
        })
      ]
    },

    "northern-song": {
      dynastyId: "northern-song",
      title: "北宋参考历史地图",
      mapPolicy: "reference-map-only",
      note: "北宋地图必须与辽、西夏和西北边疆共同阅读。当前接入1111年前后宋辽西夏格局，用于理解澶渊后和平、宋夏战争和熙河开边。",
      snapshots: [
        snapshot({
          id: "china-map-song-liao-xixia-1111",
          dynastyId: "northern-song",
          title: "北宋辽西夏三方格局",
          period: "北宋后期",
          timeRange: "1111",
          eventIds: ["nsong-southern-unification", "nsong-northern-han-annexed", "nsong-chanyuan-treaty", "nsong-western-xia-rise", "nsong-xihe-hehuang-expansion"],
          basis: referenceMapBasis,
          confidence: "medium",
          referenceMap: { src: "assets/maps/china/song-liao-xixia-1111.png", title: "Song-Liao-Xixia-1111.png", sourceTitle: "Wikimedia Commons: Song-Liao-Xixia-1111.png", sourceUrl: "https://commons.wikimedia.org/wiki/File:Song-Liao-Xixia-1111.png", author: "Douglasfrankfort", license: "GFDL / CC BY 3.0", note: "原图表现1111年前后宋、辽、西夏及周边政权大势；适合解释北宋并非大一统帝国，而是长期处于多政权并立体系中。" },
          note: "北宋疆域学习要把燕云、河西、河湟和西夏边界放在同一张图里看：北宋的制度能力很强，但北方和西北战略空间长期受辽夏制约。",
          layers: [
            layer("core-admin", "北宋州县核心区", "#5ba88c", [area("中原、江淮、江南、川峡、岭南", "北宋在这些区域建立较强文官财政国家，是其长期维持经济和行政能力的基础。")], "北宋直接行政控制区。"),
            layer("contested", "宋辽宋夏边境", "#6a91c9", [area("燕云、河北北缘、陕西沿边、河湟", "这些区域是军事、外交和财政压力集中地。")], "边境争夺和条约边界并存。"),
            layer("vassal", "并立政权体系", "#8bbf6a", [area("辽、西夏、大理、高丽等周边政权", "北宋不是单独面对空白边疆，而是在多个成熟政权并立的东亚秩序中运作。")], "并立政权不属于北宋行政控制。")
          ]
        })
      ]
    },
    "medieval-western-europe": {
      dynastyId: "medieval-western-europe",
      title: "中世纪西欧参考历史地图",
      mapPolicy: "reference-map-only",
      note: "只展示已经绑定可靠参考底图的时期。暂未找到高置信度地图的事件不强行补图，避免用抽象示意误导学习。",
      snapshots: [
        snapshot({
          id: "mwe-map-carolingian-800",
          dynastyId: "medieval-western-europe",
          title: "查理曼帝国高峰",
          period: "8世纪末-9世纪初",
          timeRange: "约800-814",
          eventIds: [
            "mwe-charlemagne-coronation-800",
            "mwe-carolingian-renaissance",
            "mwe-saxon-wars-772",
            "mwe-lombard-conquest-774",
            "mwe-spanish-march-801"
          ],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: {
            src: "assets/maps/frankish-481-814-zh.svg",
            title: "墨洛温王朝到加洛林王朝（481-814）的法兰克王国",
            sourceTitle: "Wikimedia Commons: Frankish Empire 481 to 814-zh-hans.svg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Frankish_Empire_481_to_814-zh-hans.svg",
            author: "Semhur; Chinese translation by Buernia",
            license: "CC BY-SA 3.0",
            note: "使用现成历史地图作为参考底图；本页图层只做学习解释，不替代原图边界。"
          },
          note: "查理曼帝国并非近代官僚国家，核心区、边区和新征服区的治理强度不同；阅读时应区分王权直接治理、边疆军政区和文化制度影响。",
          layers: [
            layer("core-admin", "核心行政控制区", "#5ba88c", [
              area("法兰克与加洛林核心", "高卢、莱茵以西、萨克森和意大利北部等帝国核心与新整合区。")
            ], "加洛林王权、伯爵治理和教会网络较稳定覆盖的区域。"),
            layer("vassal", "边区/稳定附属区", "#8bbf6a", [
              area("西班牙边区", "比利牛斯山以南的缓冲边区，不能视为普通核心省份。"),
              area("东部边区", "面向阿瓦尔、斯拉夫和中欧边疆的边区。")
            ], "有政治和军事控制，但行政强度弱于核心。"),
            layer("influence", "拉丁基督教影响区", "#4a7fb5", [
              area("教会与修道院网络", "加洛林改革推动教育、修道院和拉丁书写秩序扩散。")
            ], "文化制度影响层。")
          ]
        }),
        snapshot({
          id: "mwe-map-verdun-843",
          dynastyId: "medieval-western-europe",
          title: "凡尔登条约后三分格局",
          period: "9世纪中期",
          timeRange: "843以后",
          eventIds: [
            "mwe-treaty-of-verdun-843",
            "mwe-mersen-870"
          ],
          basis: referenceMapBasis,
          confidence: "medium-high",
          referenceMap: {
            src: "assets/maps/verdun-843-zh.svg",
            title: "843年凡尔登条约后法兰克王国的分裂",
            sourceTitle: "Wikimedia Commons: Vertrag von Verdun zh.svg",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Vertrag_von_Verdun_zh.svg",
            author: "Furfur; Chinese derivative by GnolizX",
            license: "CC BY-SA 4.0 / GFDL",
            note: "使用现成历史地图作为参考底图；阴影区域和边界以原图说明为准。"
          },
          note: "三分不是现代法国、德国、意大利边界的直接等同，但它开启了西法兰克、东法兰克和中部夹缝地带的长期分化。",
          layers: [
            layer("core-admin", "西法兰克", "#5ba88c", [
              area("秃头查理所得区域", "大致对应后来法兰西王权积累的政治空间。")
            ], "王国核心控制。"),
            layer("core-admin", "东法兰克", "#6a91c9", [
              area("日耳曼人路易所得区域", "大致对应后来的德意志王权与帝国核心。")
            ], "王国核心控制。"),
            layer("contested", "中法兰克/洛泰尔地带", "#c29a5c", [
              area("洛泰尔中部王国", "从低地、洛林、勃艮第到意大利方向的狭长中部地带。")
            ], "继承和再分割频繁，是后世法德之间反复争夺的空间。")
          ]
        })
      ]
    }
  };
})();
