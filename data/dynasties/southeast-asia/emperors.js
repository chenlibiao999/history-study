window.SOUTHEAST_ASIA_EMPERORS = [
  { dynastyId: "southeast-asia", title: "早期国家", name: "扶南与真腊", years: "1-8世纪", summary: "湄公河下游和大陆内陆王权在印度洋与南海贸易中形成。", keyEvents: ["扶南与湄公河贸易国家", "真腊兴起与扶南转型"], relatedEventIds: ["southeast-asia-funan", "southeast-asia-chenla"] },
  { dynastyId: "southeast-asia", title: "吴哥王权", name: "高棉帝国", years: "802-1431", summary: "以神王观念、水利、寺庙和军事扩张构建大陆强权。", keyEvents: ["吴哥王权建立", "吴哥寺与高棉帝国高峰", "吴哥衰落与大城压力"], relatedEventIds: ["southeast-asia-angkor-founding", "southeast-asia-angkor-wat", "southeast-asia-angkor-decline"] },
  { dynastyId: "southeast-asia", title: "缅甸王权", name: "蒲甘王国", years: "849-1287", summary: "伊洛瓦底江流域整合和上座部佛教寺院经济相互支撑。", keyEvents: ["蒲甘王国与上座部佛教", "蒙古压力与蒲甘瓦解"], relatedEventIds: ["southeast-asia-pagan", "southeast-asia-pagan-decline"] },
  { dynastyId: "southeast-asia", title: "暹罗王权", name: "素可泰与大城", years: "13-18世纪", summary: "泰语族政权在大陆贸易和上座部佛教网络中成长。", keyEvents: ["素可泰与泰语族王权", "大城王国兴起"], relatedEventIds: ["southeast-asia-sukhothai", "southeast-asia-ayutthaya"] },
  { dynastyId: "southeast-asia", title: "群岛海洋国家", name: "室利佛逝、满者伯夷与马六甲", years: "7-16世纪", summary: "海峡、港口、香料和伊斯兰商贸共同塑造岛屿东南亚。", keyEvents: ["室利佛逝与马六甲海峡", "满者伯夷与爪哇海洋网络", "马六甲苏丹国与伊斯兰贸易"], relatedEventIds: ["southeast-asia-srivijaya", "southeast-asia-majapahit", "southeast-asia-malacca"] },
  { dynastyId: "southeast-asia", title: "殖民与民族国家", name: "欧洲殖民、反殖民与独立", years: "16-20世纪", summary: "欧洲海上势力、殖民行政、战争和民族运动改变现代东南亚边界。", keyEvents: ["马六甲苏丹国与伊斯兰贸易（含1511年葡萄牙占领）", "荷兰东印度公司与群岛贸易", "英法殖民扩张", "日本占领与民族国家形成"], relatedEventIds: ["southeast-asia-portuguese-malacca", "southeast-asia-dutch-voc", "southeast-asia-british-french-colonial", "southeast-asia-japanese-occupation-independence"] }
];

(() => {
  const parentById = {
    "southeast-asia-rice-bronze": "southeast-asia-funan",
    "southeast-asia-maritime-routes": "southeast-asia-funan",
    "southeast-asia-champa": "southeast-asia-funan",
    "southeast-asia-chenla": "southeast-asia-funan",
    "southeast-asia-angkor-founding": "southeast-asia-angkor-wat",
    "southeast-asia-jayavarman-vii": "southeast-asia-angkor-wat",
    "southeast-asia-angkor-decline": "southeast-asia-angkor-wat",
    "southeast-asia-pagan-decline": "southeast-asia-pagan",
    "southeast-asia-sukhothai": "southeast-asia-ayutthaya",
    "southeast-asia-burmese-siamese-wars": "southeast-asia-ayutthaya",
    "southeast-asia-portuguese-malacca": "southeast-asia-malacca"
  };
  window.SOUTHEAST_ASIA_EMPERORS = window.SOUTHEAST_ASIA_EMPERORS.map((item) => ({
    ...item,
    relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentById[id] || id))]
  }));
})();
