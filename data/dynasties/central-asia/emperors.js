window.CENTRAL_ASIA_EMPERORS = [
  { dynastyId: "central-asia", title: "草原早期", name: "斯基泰与塞种", years: "约前9-前3世纪", summary: "欧亚草原游牧文化、骑射军事和金属工艺影响黑海、伊朗高原与中亚绿洲。", keyEvents: ["斯基泰、塞种与草原骑射网络"], relatedEventIds: ["central-asia-scythian-saka"] },
  { dynastyId: "central-asia", title: "绿洲丝路", name: "粟特城邦与商旅网络", years: "4-8世纪", summary: "撒马尔罕、布哈拉等绿洲城市依托商贸、文字和多宗教网络连接东西。", keyEvents: ["粟特商人与丝路绿洲网络"], relatedEventIds: ["central-asia-sogdian-silk-road"] },
  { dynastyId: "central-asia", title: "突厥时代", name: "突厥汗国与西突厥", years: "552-8世纪", summary: "突厥草原政权重组内亚政治，并与中国、萨珊、拜占庭和粟特商人互动。", keyEvents: ["突厥汗国兴起", "西突厥与唐朝中亚秩序"], relatedEventIds: ["central-asia-turkic-khaganate", "central-asia-western-turks-tang"] },
  { dynastyId: "central-asia", title: "伊斯兰化", name: "河中与喀喇汗", years: "8-12世纪", summary: "阿拉伯东进、萨曼和喀喇汗等政权推动中亚伊斯兰化与突厥化。", keyEvents: ["怛罗斯战役与唐阿拉伯边界", "萨曼王朝与波斯语复兴", "喀喇汗王朝与突厥伊斯兰化"], relatedEventIds: ["central-asia-talas", "central-asia-samanids", "central-asia-karakhanids"] },
  { dynastyId: "central-asia", title: "蒙古与帖木儿", name: "察合台、帖木儿与河中", years: "13-15世纪", summary: "蒙古征服重组中亚，帖木儿以撒马尔罕为中心建立跨区域帝国。", keyEvents: ["蒙古征服中亚", "帖木儿帝国与撒马尔罕"], relatedEventIds: ["central-asia-mongol-conquest", "central-asia-timur"] },
  { dynastyId: "central-asia", title: "近现代转型", name: "汗国、俄国、苏联与独立", years: "16-20世纪", summary: "布哈拉、希瓦、浩罕等汗国面对俄国扩张，苏联时期形成现代边界，1991年后中亚国家独立。", keyEvents: ["布哈拉、希瓦、浩罕汗国", "俄国征服中亚", "苏联民族划界", "中亚国家独立"], relatedEventIds: ["central-asia-khanates", "central-asia-russian-conquest", "central-asia-soviet-delimitation", "central-asia-independence"] }
];

(() => {
  const parentById = {
    "central-asia-yuezhi-bactria-kushan": "central-asia-scythian-saka",
    "central-asia-xiongnu-western-regions": "central-asia-scythian-saka",
    "central-asia-hephthalites": "central-asia-turkic-khaganate",
    "central-asia-western-turks-tang": "central-asia-turkic-khaganate",
    "central-asia-karakhanids": "central-asia-samanids",
    "central-asia-qara-khitai": "central-asia-mongol-conquest",
    "central-asia-khwarazm": "central-asia-mongol-conquest",
    "central-asia-chagatai-khanate": "central-asia-mongol-conquest",
    "central-asia-timurid-renaissance": "central-asia-timur",
    "central-asia-uzbek-shaybanids": "central-asia-khanates",
    "central-asia-kazakh-hordes": "central-asia-khanates",
    "central-asia-collectivization": "central-asia-basmachi"
  };
  window.CENTRAL_ASIA_EMPERORS = window.CENTRAL_ASIA_EMPERORS.map((item) => ({
    ...item,
    relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentById[id] || id))]
  }));
})();
