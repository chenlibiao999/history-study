(() => {
  const dynasties = [window.SHANG_METADATA, window.WESTERN_ZHOU_METADATA, window.SAWS_METADATA, window.QIN_METADATA, window.WESTERN_HAN_METADATA, window.XIN_METADATA, window.EASTERN_HAN_METADATA, window.LH3K_METADATA, window.NS_METADATA, window.SUI_METADATA, window.TANG_METADATA, window.FDTK_METADATA, window.NORTHERN_SONG_METADATA, window.SOUTHERN_SONG_METADATA, window.LIAO_METADATA, window.WESTERN_XIA_METADATA, window.JIN_METADATA, window.MONGOL_METADATA, window.YUAN_METADATA, window.MING_METADATA, window.QING_METADATA, window.MODERN_CHINA_METADATA, window.REPUBLICAN_CHINA_METADATA, window.WAR_OF_RESISTANCE_METADATA, window.LIBERATION_CONSTRUCTION_METADATA, window.REFORM_OPENING_METADATA, window.JAPAN_METADATA, window.INDIAN_SUBCONTINENT_METADATA, window.SOUTHEAST_ASIA_METADATA, window.ANCIENT_GREECE_METADATA, window.ROMAN_REPUBLIC_METADATA, window.ROMAN_EMPIRE_METADATA, window.BYZANTIUM_METADATA, window.MEDIEVAL_WESTERN_EUROPE_METADATA, window.VIKING_NORDIC_EUROPE_METADATA, window.IBERIA_RECONQUISTA_METADATA, window.EASTERN_EUROPE_SLAVIC_METADATA, window.RUSSIA_METADATA, window.RENAISSANCE_REFORMATION_METADATA, window.EARLY_MODERN_EUROPE_METADATA, window.ANCIENT_EGYPT_METADATA, window.NUBIA_KUSH_METADATA, window.PHOENICIAN_CARTHAGE_METADATA, window.SUMER_EARLY_MESOPOTAMIA_METADATA, window.BRONZE_AGE_INTERNATIONAL_SYSTEM_METADATA, window.BRONZE_AGE_COLLAPSE_METADATA, window.ISLAMIC_MIDDLE_EAST_METADATA, window.AFRICAN_CIVILIZATIONS_METADATA, window.NORTH_AMERICA_METADATA, window.SOUTH_AMERICA_METADATA, window.HITTITE_ANATOLIA_METADATA, window.NEO_ASSYRIAN_EMPIRE_METADATA, window.ACHAEMENID_PERSIA_METADATA, window.MAYA_CIVILIZATION_METADATA, window.MEXICA_AZTEC_TRIPLE_ALLIANCE_METADATA, window.INCA_EMPIRE_METADATA].filter(Boolean);
  const territoryPopulationData = window.TERRITORY_POPULATION_DATA || {};
  const politicalMapData = window.POLITICAL_MAP_DATA || {};
  dynasties.forEach((dynasty) => {
    dynasty.territoryPopulation = territoryPopulationData[dynasty.id] || {
      applicability: "missing",
      estimateType: "missing",
      areaUnit: "万平方公里",
      populationUnit: "万人",
      reason: "尚未补充疆域/人口时间序列。",
      records: []
    };
    dynasty.politicalMaps = politicalMapData[dynasty.id] || { snapshots: [] };
  });
  const dynastyEvents = {
    shang: window.SHANG_EVENTS || [],
    "western-zhou": window.WESTERN_ZHOU_EVENTS || [],
    "spring-autumn-warring-states": window.SAWS_EVENTS || [],
    qin: window.QIN_EVENTS || [],
    "western-han": window.WESTERN_HAN_EVENTS || [],
    xin: window.XIN_EVENTS || [],
    "eastern-han": window.EASTERN_HAN_EVENTS || [],
    "late-han-three-kingdoms": window.LH3K_EVENTS || [],
    "northern-southern": window.NS_EVENTS || [],
    sui: window.SUI_EVENTS || [],
    tang: window.TANG_EVENTS || [],
    "five-dynasties-ten-kingdoms": window.FDTK_EVENTS || [],
    "northern-song": window.NORTHERN_SONG_EVENTS || [],
    "southern-song": window.SOUTHERN_SONG_EVENTS || [],
    liao: window.LIAO_EVENTS || [],
    "western-xia": window.WESTERN_XIA_EVENTS || [],
    jin: window.JIN_EVENTS || [],
    mongol: window.MONGOL_EVENTS || [],
    yuan: window.YUAN_EVENTS || [],
    ming: window.MING_EVENTS || [],
    qing: window.QING_EVENTS || [],
    "modern-china": window.MODERN_CHINA_EVENTS || [],
    "republican-china": window.REPUBLICAN_CHINA_EVENTS || [],
    "war-of-resistance": window.WAR_OF_RESISTANCE_EVENTS || [],
    "liberation-construction": window.LIBERATION_CONSTRUCTION_EVENTS || [],
    "reform-opening": window.REFORM_OPENING_EVENTS || [],
    japan: window.JAPAN_EVENTS || [],
    "indian-subcontinent": window.INDIAN_SUBCONTINENT_EVENTS || [],
    "southeast-asia": window.SOUTHEAST_ASIA_EVENTS || [],
    "ancient-greece": window.ANCIENT_GREECE_EVENTS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EVENTS || [],
    "roman-empire": window.ROMAN_EMPIRE_EVENTS || [],
    byzantium: window.BYZANTIUM_EVENTS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EVENTS || [],
    "viking-nordic-europe": window.VIKING_NORDIC_EUROPE_EVENTS || [],
    "iberia-reconquista": window.IBERIA_RECONQUISTA_EVENTS || [],
    "eastern-europe-slavic": window.EASTERN_EUROPE_SLAVIC_EVENTS || [],
    russia: window.RUSSIA_EVENTS || [],
    "renaissance-reformation": window.RENAISSANCE_REFORMATION_EVENTS || [],
    "early-modern-europe": window.EARLY_MODERN_EUROPE_EVENTS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EVENTS || [],
    "nubia-kush": window.NUBIA_KUSH_EVENTS || [],
    "phoenician-carthage": window.PHOENICIAN_CARTHAGE_EVENTS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EVENTS || [],
    "bronze-age-international-system": window.BRONZE_AGE_INTERNATIONAL_SYSTEM_EVENTS || [],
    "bronze-age-collapse": window.BRONZE_AGE_COLLAPSE_EVENTS || [],
    "islamic-middle-east": window.ISLAMIC_MIDDLE_EAST_EVENTS || [],
    "african-civilizations": window.AFRICAN_CIVILIZATIONS_EVENTS || [],
    "north-america": window.NORTH_AMERICA_EVENTS || [],
    "south-america": window.SOUTH_AMERICA_EVENTS || [],
    "hittite-anatolia": window.HITTITE_ANATOLIA_EVENTS || [],
    "neo-assyrian-empire": window.NEO_ASSYRIAN_EMPIRE_EVENTS || [],
    "achaemenid-persia": window.ACHAEMENID_PERSIA_EVENTS || [],
    "maya-civilization": window.MAYA_CIVILIZATION_EVENTS || [],
    "mexica-aztec-triple-alliance": window.MEXICA_AZTEC_TRIPLE_ALLIANCE_EVENTS || [],
    "inca-empire": window.INCA_EMPIRE_EVENTS || []
  };
  const dynastyEmperors = {
    shang: window.SHANG_EMPERORS || [],
    "western-zhou": window.WESTERN_ZHOU_EMPERORS || [],
    "spring-autumn-warring-states": window.SAWS_EMPERORS || [],
    qin: window.QIN_EMPERORS || [],
    "western-han": window.WESTERN_HAN_EMPERORS || [],
    xin: window.XIN_EMPERORS || [],
    "eastern-han": window.EASTERN_HAN_EMPERORS || [],
    "late-han-three-kingdoms": window.LH3K_EMPERORS || [],
    "northern-southern": window.NS_EMPERORS || [],
    sui: window.SUI_EMPERORS || [],
    tang: window.TANG_EMPERORS || [],
    "five-dynasties-ten-kingdoms": window.FDTK_EMPERORS || [],
    "northern-song": window.NORTHERN_SONG_EMPERORS || [],
    "southern-song": window.SOUTHERN_SONG_EMPERORS || [],
    liao: window.LIAO_EMPERORS || [],
    "western-xia": window.WESTERN_XIA_EMPERORS || [],
    jin: window.JIN_EMPERORS || [],
    mongol: window.MONGOL_EMPERORS || [],
    yuan: window.YUAN_EMPERORS || [],
    ming: window.MING_EMPERORS || [],
    qing: window.QING_EMPERORS || [],
    "modern-china": window.MODERN_CHINA_EMPERORS || [],
    "republican-china": window.REPUBLICAN_CHINA_EMPERORS || [],
    "war-of-resistance": window.WAR_OF_RESISTANCE_EMPERORS || [],
    "liberation-construction": window.LIBERATION_CONSTRUCTION_EMPERORS || [],
    "reform-opening": window.REFORM_OPENING_EMPERORS || [],
    japan: window.JAPAN_EMPERORS || [],
    "indian-subcontinent": window.INDIAN_SUBCONTINENT_EMPERORS || [],
    "southeast-asia": window.SOUTHEAST_ASIA_EMPERORS || [],
    "ancient-greece": window.ANCIENT_GREECE_EMPERORS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EMPERORS || [],
    "roman-empire": window.ROMAN_EMPIRE_EMPERORS || [],
    byzantium: window.BYZANTIUM_EMPERORS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EMPERORS || [],
    "viking-nordic-europe": window.VIKING_NORDIC_EUROPE_EMPERORS || [],
    "iberia-reconquista": window.IBERIA_RECONQUISTA_EMPERORS || [],
    "eastern-europe-slavic": window.EASTERN_EUROPE_SLAVIC_EMPERORS || [],
    russia: window.RUSSIA_EMPERORS || [],
    "renaissance-reformation": window.RENAISSANCE_REFORMATION_EMPERORS || [],
    "early-modern-europe": window.EARLY_MODERN_EUROPE_EMPERORS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EMPERORS || [],
    "nubia-kush": window.NUBIA_KUSH_EMPERORS || [],
    "phoenician-carthage": window.PHOENICIAN_CARTHAGE_EMPERORS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EMPERORS || [],
    "bronze-age-international-system": window.BRONZE_AGE_INTERNATIONAL_SYSTEM_EMPERORS || [],
    "bronze-age-collapse": window.BRONZE_AGE_COLLAPSE_EMPERORS || [],
    "islamic-middle-east": window.ISLAMIC_MIDDLE_EAST_EMPERORS || [],
    "african-civilizations": window.AFRICAN_CIVILIZATIONS_EMPERORS || [],
    "north-america": window.NORTH_AMERICA_EMPERORS || [],
    "south-america": window.SOUTH_AMERICA_EMPERORS || [],
    "hittite-anatolia": window.HITTITE_ANATOLIA_EMPERORS || [],
    "neo-assyrian-empire": window.NEO_ASSYRIAN_EMPIRE_EMPERORS || [],
    "achaemenid-persia": window.ACHAEMENID_PERSIA_EMPERORS || [],
    "maya-civilization": window.MAYA_CIVILIZATION_EMPERORS || [],
    "mexica-aztec-triple-alliance": window.MEXICA_AZTEC_TRIPLE_ALLIANCE_EMPERORS || [],
    "inca-empire": window.INCA_EMPIRE_EMPERORS || []
  };
  const topics = [
    window.IMPERIAL_EXAM_TOPIC,
    window.SONG_MONGOL_YUAN_WAR_TOPIC
  ].filter(Boolean);
  const regions = [window.EAST_ASIA_REGION, window.SOUTH_ASIA_REGION, window.SOUTHEAST_ASIA_REGION, window.EUROPE_REGION, window.AFRICA_REGION, window.WEST_ASIA_REGION, window.AFRO_EURASIA_CROSSROADS_REGION, window.NORTH_AMERICA_REGION, window.SOUTH_AMERICA_REGION].filter(Boolean);
  const civilizationPackages = [window.CHINA_HISTORY_PACKAGE, window.JAPAN_HISTORY_PACKAGE, window.INDIAN_SUBCONTINENT_PACKAGE, window.SOUTHEAST_ASIA_PACKAGE, window.EUROPE_HISTORY_PACKAGE, window.AFRICA_HISTORY_PACKAGE, window.WEST_ASIA_HISTORY_PACKAGE, window.AFRO_EURASIA_CROSSROADS_PACKAGE, window.NORTH_AMERICA_HISTORY_PACKAGE, window.SOUTH_AMERICA_HISTORY_PACKAGE].filter(Boolean);

  function parseStartYear(timeText) {
    const text = String(timeText || "").trim();
    if (!text) return Number.MAX_SAFE_INTEGER;

    const bceCentury = text.match(/(?:约)?(?:公元前|前|BC|BCE)\s*(\d{1,2})\s*(?:-|—|－|至)?\s*(?:公元前|前|BC|BCE)?\s*\d{0,2}\s*世纪/i);
    if (bceCentury) return -Number(bceCentury[1]) * 100;

    const bceYear = text.match(/(?:约)?(?:公元前|前|BC|BCE)\s*(\d{1,5})/i);
    if (bceYear) return -Number(bceYear[1]);

    const ceCentury = text.match(/(?:约)?(?:公元)?\s*(\d{1,2})\s*(?:-|—|－|至)?\s*\d{0,2}\s*世纪/);
    if (ceCentury) return (Number(ceCentury[1]) - 1) * 100;

    const ceYear = text.match(/(?:公元|约)?\s*(\d{1,4})/);
    if (ceYear) return Number(ceYear[1]);

    return Number.MAX_SAFE_INTEGER;
  }

  const geoRules = [
    ["欧洲 / 爱琴海与希腊半岛", ["爱琴", "希腊", "雅典", "斯巴达", "伯罗奔尼撒", "克里特", "马其顿"]],
    ["欧洲 / 亚平宁半岛", ["亚平宁", "意大利", "罗马", "拉丁", "伊特鲁里亚"]],
    ["欧洲 / 西地中海岛屿", ["西西里", "撒丁", "科西嘉", "马耳他"]],
    ["欧洲 / 伊比利亚半岛", ["伊比利亚", "西班牙", "葡萄牙", "安达卢斯", "加的斯", "加的尔"]],
    ["欧洲 / 不列颠群岛", ["不列颠", "英格兰", "苏格兰", "爱尔兰", "伦敦", "牛津"]],
    ["欧洲 / 高卢-法兰西盆地", ["高卢", "法兰西", "法国", "巴黎", "诺曼底", "阿维尼翁", "奥尔良"]],
    ["欧洲 / 莱茵-多瑙与中欧", ["莱茵", "多瑙", "德意志", "神圣罗马帝国", "中欧", "奥地利", "波希米亚"]],
    ["欧洲 / 巴尔干半岛", ["巴尔干", "拜占庭", "君士坦丁堡", "保加利亚", "塞尔维亚", "希腊北部"]],
    ["欧洲 / 北欧斯堪的纳维亚", ["北欧", "斯堪的纳维亚", "丹麦", "挪威", "瑞典", "维京"]],
    ["欧洲 / 波罗的海沿岸", ["波罗的海", "立陶宛", "普鲁士", "波兰"]],
    ["欧洲 / 东欧平原", ["东欧", "斯拉夫", "罗斯", "基辅", "诺夫哥罗德", "莫斯科", "俄罗斯", "伏尔加", "乌拉尔", "西伯利亚", "苏联"]],
    ["西亚 / 两河流域", ["两河流域", "美索不达米亚", "苏美尔", "阿卡德", "巴比伦", "亚述", "底格里斯", "幼发拉底"]],
    ["西亚 / 安纳托利亚高原", ["安纳托利亚", "小亚细亚", "赫梯"]],
    ["西亚 / 伊朗高原", ["伊朗高原", "波斯", "埃兰", "米底"]],
    ["西亚 / 黎凡特海岸与叙利亚", ["黎凡特", "叙利亚", "巴勒斯坦", "迦南", "腓尼基", "推罗", "西顿", "比布鲁斯"]],
    ["西亚 / 阿拉伯半岛", ["阿拉伯半岛", "阿拉伯"]],
    ["非洲 / 尼罗河下游", ["埃及", "上埃及", "下埃及", "尼罗河下游", "三角洲"]],
    ["非洲 / 尼罗河中游", ["努比亚", "库施", "克尔马", "纳帕塔", "麦罗埃", "尼罗河中游"]],
    ["非洲 / 北非地中海沿岸", ["北非", "迦太基", "利比亚", "突尼斯"]],
    ["东亚 / 黄河中下游", ["中原", "黄河", "洛阳", "开封", "山东", "河北", "河东", "邯郸", "许昌"]],
    ["东亚 / 关中-陇右与河西", ["关中", "长安", "咸阳", "陇右", "河西", "安西", "西域", "函谷关"]],
    ["东亚 / 长江中下游", ["长江", "江南", "江淮", "建康", "临安", "扬州", "蔡州"]],
    ["东亚 / 巴蜀与四川盆地", ["巴蜀", "四川盆地", "成都", "益州", "蜀"]],
    ["东亚 / 岭南与珠江流域", ["岭南", "珠江", "广州", "百越", "南越"]],
    ["东亚 / 云贵高原", ["云贵", "南诏", "大理", "云南", "贵州"]],
    ["东亚 / 青藏高原", ["青藏", "吐蕃", "西藏", "逻些"]],
    ["东亚 / 东南沿海与台湾海峡", ["东南沿海", "福建", "台湾", "澎湖", "泉州", "海禁"]],
    ["东亚 / 辽河流域与东北", ["东北", "辽东", "辽西", "辽河", "松花江", "黑龙江", "女真", "渤海"]],
    ["东亚 / 朝鲜半岛", ["朝鲜半岛", "高句丽", "百济", "新罗", "高丽", "安东都护府"]],
    ["东亚 / 日本列岛", ["日本列岛", "日本", "倭国", "近畿", "关东"]],
    ["东亚 / 蒙古高原与草原", ["蒙古高原", "草原", "漠北", "漠南", "蒙古", "回纥", "突厥"]],
    ["南亚 / 印度河-恒河平原", ["印度", "印度河", "恒河", "南亚"]],
    ["东南亚 / 中南半岛与海岛世界", ["东南亚", "中南半岛", "马六甲", "爪哇", "苏门答腊", "婆罗洲", "菲律宾", "越南", "柬埔寨", "暹罗"]],
    ["北美 / 墨西哥高原与中美洲", ["墨西哥", "中美洲", "玛雅", "阿兹特克", "特诺奇蒂特兰"]],
    ["北美 / 北美东部与大平原", ["北美", "加拿大", "美国", "密西西比", "卡霍基亚", "易洛魁", "大平原"]],
    ["南美 / 安第斯山地", ["南美", "安第斯", "秘鲁", "印加", "库斯科", "波托西", "玻利维亚"]],
    ["南美 / 亚马孙与巴西高原", ["巴西", "亚马孙"]],
    ["南美 / 南锥体", ["阿根廷", "智利", "乌拉圭", "巴拉圭", "南锥体"]]
  ];

  function deriveGeoRegions(event) {
    if (Array.isArray(event.geoRegion) && event.geoRegion.length) return event.geoRegion;
    const haystack = [
      event.title,
      event.summary,
      event.period,
      ...(event.regions || []),
      ...(event.topics || [])
    ].join(" ");
    const matches = geoRules
      .filter(([, terms]) => terms.some((term) => haystack.includes(term)))
      .map(([label]) => label);
    return [...new Set(matches.length ? matches : (event.regions || []))];
  }

  function derivePolityContext(event) {
    return [...new Set([event.period, event.dynasty, ...(event.regions || [])].filter(Boolean))];
  }

  function normalizeEvent(event, order) {
    const sortYear = Number.isFinite(event.sortYear) ? event.sortYear : parseStartYear(event.time);
    return {
      ...event,
      sortYear,
      sortOrder: Number.isFinite(event.sortOrder) ? event.sortOrder : order,
      dateLabel: event.dateLabel || event.time,
      geoRegion: deriveGeoRegions(event),
      polityContext: Array.isArray(event.polityContext) && event.polityContext.length
        ? event.polityContext
        : derivePolityContext(event)
    };
  }

  Object.keys(dynastyEvents).forEach((dynastyId) => {
    dynastyEvents[dynastyId] = (dynastyEvents[dynastyId] || []).map((event, index) => normalizeEvent(event, index));
  });

  const events = Object.values(dynastyEvents).flat().sort((a, b) => {
    const yearDiff = a.sortYear - b.sortYear;
    if (yearDiff) return yearDiff;
    const orderDiff = (a.sortOrder || 0) - (b.sortOrder || 0);
    if (orderDiff) return orderDiff;
    return dynasties.findIndex((dynasty) => dynasty.id === a.dynastyId) - dynasties.findIndex((dynasty) => dynasty.id === b.dynastyId);
  });
  const emperors = Object.values(dynastyEmperors).flat();

  window.HISTORY_DATA = {
    scope: dynasties.map((dynasty) => dynasty.scope).join(" / "),
    dynasties,
    dynastyEvents,
    dynastyEmperors,
    events,
    emperors,
    topics,
    regions,
    civilizationPackages,
    territoryPopulation: territoryPopulationData,
    politicalMaps: politicalMapData
  };

  window.HISTORY_DYNASTIES = dynasties;
  window.HISTORY_TOPICS = topics;
  window.HISTORY_REGIONS = regions;
  window.HISTORY_CIVILIZATION_PACKAGES = civilizationPackages;
})();
