window.SOUTH_ASIA_EMPERORS = [
  { dynastyId: "south-asia", title: "印度河文明", name: "哈拉帕城市网络", years: "约前2600-前1900", summary: "以哈拉帕、摩亨佐-达罗等城市为代表的早期城市文明。", keyEvents: ["印度河城市文明成熟", "印度河城市体系衰落"], relatedEventIds: ["south-asia-indus-urban", "south-asia-indus-decline"] },
  { dynastyId: "south-asia", title: "列国时代", name: "十六大国与思想转型", years: "约前6-前4世纪", summary: "恒河流域国家竞争、城市经济和沙门思想共同发展。", keyEvents: ["十六大国与第二次城市化", "佛教、耆那教与沙门运动"], relatedEventIds: ["south-asia-mahajanapadas", "south-asia-sramana-buddhism-jainism"] },
  { dynastyId: "south-asia", title: "孔雀帝国", name: "旃陀罗笈多至阿育王", years: "约前322-前185", summary: "南亚第一个大范围帝国，阿育王时期形成强烈的王权、佛法和铭文治理形象。", keyEvents: ["孔雀帝国建立", "阿育王与羯陵伽战争"], relatedEventIds: ["south-asia-maurya-rise", "south-asia-ashoka-kalinga"] },
  { dynastyId: "south-asia", title: "笈多时代", name: "笈多王朝", years: "约320-550", summary: "恒河中下游王权、婆罗门秩序和古典文化高度发展。", keyEvents: ["笈多王朝与古典秩序", "嚈哒冲击与笈多衰落"], relatedEventIds: ["south-asia-gupta-classical", "south-asia-huna-gupta-decline"] },
  { dynastyId: "south-asia", title: "德里苏丹国", name: "德里诸苏丹王朝", years: "1206-1526", summary: "突厥、阿富汗军事精英在北印度建立长期伊斯兰政权。", keyEvents: ["德里苏丹国建立", "德里苏丹国扩张与区域阻力"], relatedEventIds: ["south-asia-delhi-sultanate", "south-asia-delhi-expansion"] },
  { dynastyId: "south-asia", title: "莫卧儿帝国", name: "巴布尔、阿克巴至奥朗则布", years: "1526-1707", summary: "早期近代南亚大帝国，在军事、财政、宗教政策和地方精英整合中达到高峰后转入压力期。", keyEvents: ["莫卧儿帝国建立", "阿克巴整合帝国", "奥朗则布扩张与帝国压力"], relatedEventIds: ["south-asia-mughal-founding", "south-asia-akbar-integration", "south-asia-aurangzeb-pressure"] },
  { dynastyId: "south-asia", title: "殖民与独立", name: "公司统治、英属印度与独立分治", years: "1757-1947", summary: "东印度公司、英属印度、民族运动和分治共同塑造现代南亚政治格局。", keyEvents: ["普拉西战役与公司统治", "1857年起义与英属印度", "印度国民大会与民族运动", "独立与印巴分治"], relatedEventIds: ["south-asia-plassey-company-rule", "south-asia-1857-rebellion-raj", "south-asia-national-movement", "south-asia-partition-independence"] }
];

(() => {
  const parentById = {
    "south-asia-vedic-society": "south-asia-mahajanapadas",
    "south-asia-magadha-rise": "south-asia-maurya-rise",
    "south-asia-alexander-northwest": "south-asia-maurya-rise",
    "south-asia-maurya-decline-regional": "south-asia-kushan-gandhara",
    "south-asia-harsha-regional": "south-asia-huna-gupta-decline",
    "south-asia-south-indian-ocean": "south-asia-chola-maritime",
    "south-asia-delhi-expansion": "south-asia-delhi-sultanate",
    "south-asia-mughal-founding": "south-asia-akbar-integration"
  };
  window.SOUTH_ASIA_EMPERORS = window.SOUTH_ASIA_EMPERORS.map((item) => ({
    ...item,
    relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentById[id] || id))]
  }));
})();
