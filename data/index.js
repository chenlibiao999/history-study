(() => {
  const dynasties = [window.SHANG_METADATA, window.WESTERN_ZHOU_METADATA, window.SAWS_METADATA, window.QIN_METADATA, window.WESTERN_HAN_METADATA, window.XIN_METADATA, window.EASTERN_HAN_METADATA, window.LH3K_METADATA, window.NS_METADATA, window.SUI_METADATA, window.TANG_METADATA, window.FDTK_METADATA, window.NORTHERN_SONG_METADATA, window.SOUTHERN_SONG_METADATA, window.LIAO_METADATA, window.WESTERN_XIA_METADATA, window.JIN_METADATA, window.MONGOL_METADATA, window.YUAN_METADATA, window.MING_METADATA, window.QING_METADATA, window.MODERN_CHINA_METADATA, window.REPUBLICAN_CHINA_METADATA, window.WAR_OF_RESISTANCE_METADATA, window.LIBERATION_CONSTRUCTION_METADATA, window.REFORM_OPENING_METADATA, window.JAPAN_METADATA, window.KOREAN_PENINSULA_METADATA, window.SOUTH_ASIA_METADATA, window.SOUTHEAST_ASIA_METADATA, window.CENTRAL_ASIA_METADATA, window.IRANIAN_WORLD_METADATA, window.ISLAMIC_WORLD_METADATA, window.ANCIENT_GREECE_METADATA, window.ROMAN_WORLD_METADATA, window.ROMAN_REPUBLIC_METADATA, window.ROMAN_EMPIRE_METADATA, window.BYZANTIUM_METADATA, window.MEDIEVAL_WESTERN_EUROPE_METADATA, window.RUSSIAN_EASTERN_EUROPE_METADATA, window.OTTOMAN_WORLD_METADATA, window.MODERN_EUROPE_METADATA, window.ANCIENT_EGYPT_METADATA, window.AFRICAN_WORLD_METADATA, window.AMERICAS_WORLD_METADATA, window.OCEANIA_WORLD_METADATA, window.ANCIENT_NEAR_EAST_METADATA, window.SUMER_EARLY_MESOPOTAMIA_METADATA, window.INDUS_CIVILIZATION_METADATA, window.MAURYA_GUPTA_METADATA, window.DELHI_SULTANATE_MUGHAL_METADATA, window.MAINLAND_SOUTHEAST_ASIA_METADATA, window.ISLAND_SOUTHEAST_ASIA_METADATA, window.COLONIAL_SOUTHEAST_ASIA_METADATA, window.SOUTH_ASIA_IMPERIAL_CORE_METADATA, window.SOUTHEAST_ASIA_CORE_KINGDOMS_METADATA, window.STEPPE_SILK_ROAD_CORE_METADATA, window.AFRICA_ESSENTIAL_EMPIRES_METADATA, window.MESOAMERICA_ANDES_CORE_METADATA, window.POLYNESIAN_OCEANIA_CORE_METADATA, window.BRONZE_AGE_INTERNATIONAL_SYSTEM_METADATA, window.BRONZE_AGE_COLLAPSE_METADATA].filter(Boolean);
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
    "korean-peninsula": window.KOREAN_PENINSULA_EVENTS || [],
    "south-asia": window.SOUTH_ASIA_EVENTS || [],
    "southeast-asia": window.SOUTHEAST_ASIA_EVENTS || [],
    "central-asia": window.CENTRAL_ASIA_EVENTS || [],
    "iranian-world": window.IRANIAN_WORLD_EVENTS || [],
    "islamic-world": window.ISLAMIC_WORLD_EVENTS || [],
    "ancient-greece": window.ANCIENT_GREECE_EVENTS || [],
    "roman-world": window.ROMAN_WORLD_EVENTS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EVENTS || [],
    "roman-empire": window.ROMAN_EMPIRE_EVENTS || [],
    byzantium: window.BYZANTIUM_EVENTS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EVENTS || [],
    "russian-eastern-europe": window.RUSSIAN_EASTERN_EUROPE_EVENTS || [],
    "ottoman-world": window.OTTOMAN_WORLD_EVENTS || [],
    "modern-europe": window.MODERN_EUROPE_EVENTS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EVENTS || [],
    "african-world": window.AFRICAN_WORLD_EVENTS || [],
    "americas-world": window.AMERICAS_WORLD_EVENTS || [],
    "oceania-world": window.OCEANIA_WORLD_EVENTS || [],
    "ancient-near-east": window.ANCIENT_NEAR_EAST_EVENTS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EVENTS || [],
    "indus-civilization": window.INDUS_CIVILIZATION_EVENTS || [],
    "maurya-gupta": window.MAURYA_GUPTA_EVENTS || [],
    "delhi-sultanate-mughal": window.DELHI_SULTANATE_MUGHAL_EVENTS || [],
    "mainland-southeast-asia": window.MAINLAND_SOUTHEAST_ASIA_EVENTS || [],
    "island-southeast-asia": window.ISLAND_SOUTHEAST_ASIA_EVENTS || [],
    "colonial-southeast-asia": window.COLONIAL_SOUTHEAST_ASIA_EVENTS || [],
    "south-asia-imperial-core": window.SOUTH_ASIA_IMPERIAL_CORE_EVENTS || [],
    "southeast-asia-core-kingdoms": window.SOUTHEAST_ASIA_CORE_KINGDOMS_EVENTS || [],
    "steppe-silk-road-core": window.STEPPE_SILK_ROAD_CORE_EVENTS || [],
    "africa-essential-empires": window.AFRICA_ESSENTIAL_EMPIRES_EVENTS || [],
    "mesoamerica-andes-core": window.MESOAMERICA_ANDES_CORE_EVENTS || [],
    "polynesian-oceania-core": window.POLYNESIAN_OCEANIA_CORE_EVENTS || [],
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
    japan: window.JAPAN_EMPERORS || [],
    "korean-peninsula": window.KOREAN_PENINSULA_EMPERORS || [],
    "south-asia": window.SOUTH_ASIA_EMPERORS || [],
    "southeast-asia": window.SOUTHEAST_ASIA_EMPERORS || [],
    "central-asia": window.CENTRAL_ASIA_EMPERORS || [],
    "iranian-world": window.IRANIAN_WORLD_EMPERORS || [],
    "islamic-world": window.ISLAMIC_WORLD_EMPERORS || [],
    "ancient-greece": window.ANCIENT_GREECE_EMPERORS || [],
    "roman-world": window.ROMAN_WORLD_EMPERORS || [],
    "roman-republic": window.ROMAN_REPUBLIC_EMPERORS || [],
    "roman-empire": window.ROMAN_EMPIRE_EMPERORS || [],
    byzantium: window.BYZANTIUM_EMPERORS || [],
    "medieval-western-europe": window.MEDIEVAL_WESTERN_EUROPE_EMPERORS || [],
    "russian-eastern-europe": window.RUSSIAN_EASTERN_EUROPE_EMPERORS || [],
    "ottoman-world": window.OTTOMAN_WORLD_EMPERORS || [],
    "modern-europe": window.MODERN_EUROPE_EMPERORS || [],
    "ancient-egypt": window.ANCIENT_EGYPT_EMPERORS || [],
    "african-world": window.AFRICAN_WORLD_EMPERORS || [],
    "americas-world": window.AMERICAS_WORLD_EMPERORS || [],
    "oceania-world": window.OCEANIA_WORLD_EMPERORS || [],
    "ancient-near-east": window.ANCIENT_NEAR_EAST_EMPERORS || [],
    "sumer-early-mesopotamia": window.SUMER_EARLY_MESOPOTAMIA_EMPERORS || [],
    "indus-civilization": window.INDUS_CIVILIZATION_EMPERORS || [],
    "maurya-gupta": window.MAURYA_GUPTA_EMPERORS || [],
    "delhi-sultanate-mughal": window.DELHI_SULTANATE_MUGHAL_EMPERORS || [],
    "mainland-southeast-asia": window.MAINLAND_SOUTHEAST_ASIA_EMPERORS || [],
    "island-southeast-asia": window.ISLAND_SOUTHEAST_ASIA_EMPERORS || [],
    "colonial-southeast-asia": window.COLONIAL_SOUTHEAST_ASIA_EMPERORS || [],
    "south-asia-imperial-core": window.SOUTH_ASIA_IMPERIAL_CORE_EMPERORS || [],
    "southeast-asia-core-kingdoms": window.SOUTHEAST_ASIA_CORE_KINGDOMS_EMPERORS || [],
    "steppe-silk-road-core": window.STEPPE_SILK_ROAD_CORE_EMPERORS || [],
    "africa-essential-empires": window.AFRICA_ESSENTIAL_EMPIRES_EMPERORS || [],
    "mesoamerica-andes-core": window.MESOAMERICA_ANDES_CORE_EMPERORS || [],
    "polynesian-oceania-core": window.POLYNESIAN_OCEANIA_CORE_EMPERORS || [],
    "bronze-age-international-system": window.BRONZE_AGE_INTERNATIONAL_SYSTEM_EMPERORS || [],
    "bronze-age-collapse": window.BRONZE_AGE_COLLAPSE_EMPERORS || []
  };
  const topics = [
    window.IMPERIAL_EXAM_TOPIC,
    window.SONG_MONGOL_YUAN_WAR_TOPIC
  ].filter(Boolean);
  const regions = [window.EAST_ASIA_REGION, window.SOUTH_ASIA_REGION, window.SOUTHEAST_ASIA_REGION, window.CENTRAL_ASIA_REGION, window.EUROPE_REGION, window.AFRICA_REGION, window.WEST_ASIA_REGION, window.AMERICAS_REGION, window.OCEANIA_REGION, window.AFRO_EURASIA_CROSSROADS_REGION].filter(Boolean);
  const civilizationPackages = [window.CHINA_HISTORY_PACKAGE, window.JAPAN_HISTORY_PACKAGE, window.KOREAN_PENINSULA_HISTORY_PACKAGE, window.SOUTH_ASIA_HISTORY_PACKAGE, window.SOUTHEAST_ASIA_HISTORY_PACKAGE, window.CENTRAL_ASIA_HISTORY_PACKAGE, window.EUROPE_HISTORY_PACKAGE, window.AFRICA_HISTORY_PACKAGE, window.WEST_ASIA_HISTORY_PACKAGE, window.AMERICAS_HISTORY_PACKAGE, window.OCEANIA_HISTORY_PACKAGE, window.AFRO_EURASIA_CROSSROADS_PACKAGE].filter(Boolean);

  const parseTimelineRange = window.HISTORY_TIME?.parseTimelineRange || (() => null);
  const formatTimelineTimestamp = window.HISTORY_TIME?.formatTimelineTimestamp || (() => null);

  function asArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function fallbackText(value, fallback) {
    return value === undefined || value === null || value === "" ? fallback : value;
  }

  function normalizeEvent(event) {
    const title = fallbackText(event.title, "未命名事件");
    const sourceTime = fallbackText(event.time, "时间待核");
    const timelineRange = parseTimelineRange(sourceTime);
    const contentLevel = ["core", "mainline", "outline"].includes(event.contentLevel)
      ? event.contentLevel
      : event.learningCase?.claim ? "core" : "outline";
    return {
      ...event,
      title,
      contentLevel,
      time: formatTimelineTimestamp(sourceTime) || "时间待核",
      sourceTime,
      timelineStartYear: timelineRange?.start ?? null,
      timelineEndYear: timelineRange?.end ?? null,
      era: fallbackText(event.era, "未分期"),
      period: fallbackText(event.period, "未归类"),
      summary: fallbackText(event.summary, "摘要待补。"),
      regions: asArray(event.regions),
      topics: asArray(event.topics),
      people: asArray(event.people),
      background: asArray(event.background),
      process: asArray(event.process),
      results: asArray(event.results),
      debates: asArray(event.debates),
      sources: asArray(event.sources),
      citations: asArray(event.citations),
      claims: asArray(event.claims),
      notes: asArray(event.notes),
      aliases: asArray(event.aliases)
    };
  }

  function normalizeEmperor(emperor) {
    const name = fallbackText(emperor.name, "未命名人物");
    const title = fallbackText(emperor.title, "");
    const displayTitle = title || fallbackText(emperor.dynasty, "相关人物");
    return {
      ...emperor,
      title: displayTitle,
      name,
      names: asArray(emperor.names).length ? emperor.names : [name, displayTitle].filter(Boolean),
      phase: fallbackText(emperor.phase || emperor.era, emperor.dynasty || "未分期"),
      reign: fallbackText(emperor.reign || emperor.years, "年代待核"),
      position: fallbackText(emperor.position || emperor.summary, `${displayTitle}${name}应结合相关主线事件理解。`),
      plainText: fallbackText(emperor.plainText || emperor.summary, "暂无白话说明。"),
      keyEvents: asArray(emperor.keyEvents).length ? emperor.keyEvents : asArray(emperor.tags),
      relatedEventIds: asArray(emperor.relatedEventIds),
      source: fallbackText(emperor.source, "来源待补"),
      sourceUrl: fallbackText(emperor.sourceUrl, "")
    };
  }

  const events = Object.values(dynastyEvents).flat().map(normalizeEvent).sort((a, b) => {
    const yearDiff = (a.timelineStartYear ?? Number.MAX_SAFE_INTEGER) - (b.timelineStartYear ?? Number.MAX_SAFE_INTEGER);
    if (yearDiff) return yearDiff;
    return dynasties.findIndex((dynasty) => dynasty.id === a.dynastyId) - dynasties.findIndex((dynasty) => dynasty.id === b.dynastyId);
  });
  const emperors = Object.values(dynastyEmperors).flat().map(normalizeEmperor);

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
