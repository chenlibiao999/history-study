(() => {
  const dynastyId = "qing";
  const ruler = (title, name, reign, eventIds, keyEvents) => ({
    phase: "清朝皇帝",
    title,
    name,
    names: [name, title.startsWith("清") ? title : `清${title}`],
    reign,
    position: `${title}${name}的统治应结合关联事件理解其制度选择、继承条件或政治后果。`,
    keyEvents: keyEvents || eventIds,
    relatedEventIds: eventIds,
    plainText: `学习${name}时，重点看其在清朝主线中的实际作用，而不是只记年号和庙号。`,
    source: "《清史稿》相关本纪，待补公开链接与白话释义",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E6%B8%85%E5%8F%B2%E7%A8%BF",
    dynastyId
  });

  window.QING_EMPERORS = [
    ruler("太祖", "努尔哈赤", "1616-1626", ["qing-later-jin-founded"], ["后金建政"]),
    ruler("太宗", "皇太极", "1626-1643", ["qing-founded-1636"], ["改国号大清"]),
    ruler("世祖", "福临", "1643-1661", ["qing-entry-1644", "qing-conquest-southern-ming", "qing-queue-order-and-jiangnan"], ["清军入关", "南明征服", "剃发令"]),
    ruler("圣祖", "玄烨", "1661-1722", ["qing-kangxi-oboi", "qing-three-feudatories", "qing-taiwan-zheng-conquest", "qing-nerchinsk", "qing-galdan-campaigns"], ["擒鳌拜", "平三藩", "台湾归清", "尼布楚条约", "亲征噶尔丹"]),
    ruler("世宗", "胤禛", "1722-1735", ["qing-yongzheng-fiscal-reforms", "qing-grand-council"], ["摊丁入亩", "军机处"]),
    ruler("高宗", "弘历", "1735-1796", ["qing-dzungar-conquest", "qing-xinjiang-governance", "qing-tibet-governance", "qing-literary-inquisition-siku"], ["平准噶尔", "新疆设治", "西藏治理", "四库全书与文字狱"]),
    ruler("仁宗", "颙琰", "1796-1820", ["qing-heshen-jiaqing", "qing-white-lotus"], ["查办和珅", "白莲教起义"]),
    ruler("宣宗", "旻宁", "1820-1850", ["qing-opium-lin-zexu", "qing-first-opium-war"], ["林则徐禁烟", "第一次鸦片战争"]),
    ruler("文宗", "奕詝", "1850-1861", ["qing-taiping-rebellion", "qing-second-opium-war"], ["太平天国", "第二次鸦片战争"]),
    ruler("穆宗", "载淳", "1861-1875", ["qing-self-strengthening", "qing-nian-muslim-rebellions"], ["洋务运动", "内乱平定"]),
    ruler("德宗", "载湉", "1875-1908", ["qing-sino-french-war", "qing-sino-japanese-war", "qing-hundred-days-reform", "qing-boxer-protocol", "qing-new-policies"], ["中法战争", "甲午战争", "戊戌变法", "义和团", "清末新政"]),
    ruler("宣统帝", "溥仪", "1908-1912", ["qing-xinhai-revolution", "qing-abdication-1912"], ["辛亥革命", "清帝退位"])
  ];
})();
