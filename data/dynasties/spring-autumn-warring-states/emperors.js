(() => {
  const dynastyId = "spring-autumn-warring-states";
  const ruler = (phase, title, name, reign, eventIds, keyEvents) => ({
    phase,
    title,
    name,
    names: [name, title],
    reign,
    position: `${title}${name}应结合春秋战国主线事件理解其历史作用。`,
    keyEvents: keyEvents || eventIds,
    relatedEventIds: eventIds,
    plainText: `学习${name}时，重点看其如何影响东周分裂、霸政、变法或统一趋势。`,
    source: "《左传》《史记》《战国策》相关纪事，待补公开链接与白话释义",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98",
    dynastyId
  });

  window.SAWS_EMPERORS = [
    ruler("东周王室", "周平王", "姬宜臼", "前770-前720", ["saws-eastward-move"], ["平王东迁"]),
    ruler("春秋前期", "郑庄公", "姬寤生", "前743-前701", ["saws-zheng-zhuang-rise"], ["郑庄公小霸"]),
    ruler("春秋霸主", "齐桓公", "姜小白", "前685-前643", ["saws-qi-huan-hegemony"], ["春秋首霸"]),
    ruler("春秋霸主", "宋襄公", "子兹甫", "前650-前637", ["saws-song-xiang-failure"], ["泓水之战"]),
    ruler("春秋霸主", "晋文公", "姬重耳", "前636-前628", ["saws-jin-wen-chengpu"], ["城濮之战"]),
    ruler("春秋霸主", "秦穆公", "嬴任好", "前659-前621", ["saws-qin-mu-western-hegemony"], ["秦国西向扩张"]),
    ruler("春秋霸主", "楚庄王", "芈旅", "前613-前591", ["saws-chu-zhuang-hegemony"], ["问鼎中原", "邲之战"]),
    ruler("春秋晚期", "吴王阖闾", "姬光", "前514-前496", ["saws-wu-yue-rise"], ["吴破楚"]),
    ruler("春秋晚期", "吴王夫差", "姬夫差", "前495-前473", ["saws-wu-yue-rise"], ["吴越争霸"]),
    ruler("春秋晚期", "越王勾践", "姒勾践", "前496-前465", ["saws-wu-yue-rise"], ["越灭吴"]),
    ruler("战国初期", "魏文侯", "魏斯", "前445-前396", ["saws-li-kui-wei-reform"], ["李悝变法"]),
    ruler("战国改革", "楚悼王", "芈疑", "前401-前381", ["saws-wuqi-chu-reform"], ["吴起变法"]),
    ruler("战国改革", "秦孝公", "嬴渠梁", "前361-前338", ["saws-shang-yang-reforms"], ["商鞅变法"]),
    ruler("战国强国", "齐威王", "田因齐", "前356-前320", ["saws-guiling-maling"], ["桂陵马陵"]),
    ruler("战国强国", "赵武灵王", "赵雍", "前325-前299", ["saws-king-wuling-reform"], ["胡服骑射"]),
    ruler("战国后期", "燕昭王", "姬职", "前311-前279", ["saws-yue-yi-attacks-qi"], ["乐毅伐齐"]),
    ruler("战国后期", "秦昭襄王", "嬴稷", "前306-前251", ["saws-changping-battle"], ["长平之战"]),
    ruler("秦统一前夜", "秦王政", "嬴政", "前246-前221", ["saws-lu-buwei-and-qin-politics", "saws-qin-destroys-six-states"], ["秦王政亲政", "秦灭六国"])
  ];
})();

(() => {
  const parentByChild = {
    "saws-zheng-zhuang-rise": "saws-eastward-move",
    "saws-song-xiang-failure": "saws-qi-huan-hegemony",
    "saws-qin-mu-western-hegemony": "saws-jin-wen-chengpu",
    "saws-chu-zhuang-hegemony": "saws-jin-wen-chengpu",
    "saws-jin-qing-dafu-rise": "saws-three-families-partition-jin",
    "saws-tian-family-replaces-qi": "saws-three-families-partition-jin",
    "saws-wuqi-chu-reform": "saws-li-kui-wei-reform",
    "saws-guiling-maling": "saws-li-kui-wei-reform",
    "saws-confucius-and-hundred-schools-prelude": "saws-hundred-schools",
    "saws-lu-buwei-and-qin-politics": "saws-qin-destroys-six-states"
  };
  window.SAWS_EMPERORS = window.SAWS_EMPERORS.map((item) => ({
    ...item,
    relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentByChild[id] || id))]
  }));
})();
