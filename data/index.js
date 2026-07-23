(() => {
  const dynasties = [window.SHANG_METADATA, window.WESTERN_ZHOU_METADATA, window.SAWS_METADATA, window.QIN_METADATA, window.WESTERN_HAN_METADATA, window.XIN_METADATA, window.EASTERN_HAN_METADATA, window.LH3K_METADATA, window.NS_METADATA, window.SUI_METADATA, window.TANG_METADATA, window.FDTK_METADATA, window.NORTHERN_SONG_METADATA, window.SOUTHERN_SONG_METADATA, window.LIAO_METADATA, window.WESTERN_XIA_METADATA, window.JIN_METADATA, window.MONGOL_METADATA, window.YUAN_METADATA, window.MING_METADATA, window.QING_METADATA, window.MODERN_CHINA_METADATA, window.REPUBLICAN_CHINA_METADATA, window.WAR_OF_RESISTANCE_METADATA, window.LIBERATION_CONSTRUCTION_METADATA, window.REFORM_OPENING_METADATA, window.ANCIENT_GREECE_METADATA, window.ROMAN_REPUBLIC_METADATA, window.ROMAN_EMPIRE_METADATA, window.BYZANTIUM_METADATA, window.MEDIEVAL_WESTERN_EUROPE_METADATA, window.VIKING_NORDIC_EUROPE_METADATA, window.IBERIA_RECONQUISTA_METADATA, window.EASTERN_EUROPE_SLAVIC_METADATA, window.RENAISSANCE_REFORMATION_METADATA, window.EARLY_MODERN_EUROPE_METADATA, window.ANCIENT_EGYPT_METADATA, window.SUMER_EARLY_MESOPOTAMIA_METADATA, window.BRONZE_AGE_INTERNATIONAL_SYSTEM_METADATA, window.BRONZE_AGE_COLLAPSE_METADATA].filter(Boolean);
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
    "ancient-greece": window.ANCIENT_GREECE_EVENTS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EVENTS || [],
    "roman-empire": window.ROMAN_EMPIRE_EVENTS || [],
    byzantium: window.BYZANTIUM_EVENTS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EVENTS || [],
    "viking-nordic-europe": window.VIKING_NORDIC_EUROPE_EVENTS || [],
    "iberia-reconquista": window.IBERIA_RECONQUISTA_EVENTS || [],
    "eastern-europe-slavic": window.EASTERN_EUROPE_SLAVIC_EVENTS || [],
    "renaissance-reformation": window.RENAISSANCE_REFORMATION_EVENTS || [],
    "early-modern-europe": window.EARLY_MODERN_EUROPE_EVENTS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EVENTS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EVENTS || [],
    "bronze-age-international-system": window.BRONZE_AGE_INTERNATIONAL_SYSTEM_EVENTS || [],
    "bronze-age-collapse": window.BRONZE_AGE_COLLAPSE_EVENTS || []
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
    "ancient-greece": window.ANCIENT_GREECE_EMPERORS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EMPERORS || [],
    "roman-empire": window.ROMAN_EMPIRE_EMPERORS || [],
    byzantium: window.BYZANTIUM_EMPERORS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EMPERORS || [],
    "viking-nordic-europe": window.VIKING_NORDIC_EUROPE_EMPERORS || [],
    "iberia-reconquista": window.IBERIA_RECONQUISTA_EMPERORS || [],
    "eastern-europe-slavic": window.EASTERN_EUROPE_SLAVIC_EMPERORS || [],
    "renaissance-reformation": window.RENAISSANCE_REFORMATION_EMPERORS || [],
    "early-modern-europe": window.EARLY_MODERN_EUROPE_EMPERORS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EMPERORS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EMPERORS || [],
    "bronze-age-international-system": window.BRONZE_AGE_INTERNATIONAL_SYSTEM_EMPERORS || [],
    "bronze-age-collapse": window.BRONZE_AGE_COLLAPSE_EMPERORS || []
  };
  const topics = [
    window.IMPERIAL_EXAM_TOPIC,
    window.SONG_MONGOL_YUAN_WAR_TOPIC
  ].filter(Boolean);
  const regions = [window.EAST_ASIA_REGION, window.EUROPE_REGION, window.AFRICA_REGION, window.WEST_ASIA_REGION, window.AFRO_EURASIA_CROSSROADS_REGION].filter(Boolean);
  const civilizationPackages = [window.CHINA_HISTORY_PACKAGE, window.EUROPE_HISTORY_PACKAGE, window.AFRICA_HISTORY_PACKAGE, window.WEST_ASIA_HISTORY_PACKAGE, window.AFRO_EURASIA_CROSSROADS_PACKAGE].filter(Boolean);

  function parseStartYear(timeText) {
    const text = String(timeText || "");
    const exact = text.match(/前(\d{3,4})/);
    if (exact) return -Number(exact[1]);
    const century = text.match(/前(\d{1,2})世纪/);
    if (century) return -Number(century[1]) * 100;
    const centuryRange = text.match(/前(\d{1,2})-/);
    if (centuryRange) return -Number(centuryRange[1]) * 100;
    const ce = text.match(/(\d{3,4})/);
    if (ce) return Number(ce[1]);
    return Number.MAX_SAFE_INTEGER;
  }

  function parseStartYearV2(timeText) {
    const text = String(timeText || "");
    const bce = text.match(/(?:约)?(?:前|公元前|BC|BCE)\s*(\d{1,4})/i);
    if (bce) return -Number(bce[1]);
    const bceCentury = text.match(/(?:约)?(?:前|公元前)\s*(\d{1,2})世纪/);
    if (bceCentury) return -Number(bceCentury[1]) * 100;
    const ce = text.match(/(\d{3,4})/);
    if (ce) return Number(ce[1]);
    return Number.MAX_SAFE_INTEGER;
  }

  const events = Object.values(dynastyEvents).flat().sort((a, b) => {
    const yearDiff = parseStartYearV2(a.time) - parseStartYearV2(b.time);
    if (yearDiff) return yearDiff;
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
