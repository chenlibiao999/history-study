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
