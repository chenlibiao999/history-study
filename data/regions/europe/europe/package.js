window.EUROPE_HISTORY_PACKAGE = {
  id: "europe",
  regionId: "europe",
  title: "欧洲",
  scope: "欧洲历史主线：古希腊、罗马共和国与帝国、基督教化、拜占庭、法兰克与中世纪西欧、十字军、文艺复兴、宗教改革、民族国家、启蒙与革命、工业化、两次世界大战、冷战与欧洲一体化。",
  moduleIds: ["ancient-greece", "roman-republic", "roman-empire", "byzantium", "medieval-western-europe", "renaissance-reformation"],
  topicIds: [],
  boundaries: [
    "欧洲包先作为区域容器存在，不把未整理的欧洲事件混入当前中国时间线。",
    "后续欧洲史应优先按阶段模块扩展，再按国家专题细化，避免一开始按现代国家碎片化。",
    "古典地中海与西亚、北非有大量交叉，后续需要通过跨区域专题连接，不宜只按现代欧洲边界理解。",
    "俄罗斯、奥斯曼、拜占庭、蒙古西征等内容要注意欧亚交界属性，后续可同时被欧洲、内亚或西亚包引用。"
  ],
  nextExpansionSlots: [
    { id: "ancient-greece", title: "古希腊", status: "active", suggestedMinEvents: 60 },
    { id: "roman-republic", title: "罗马共和国", status: "active", suggestedMinEvents: 30 },
    { id: "roman-empire", title: "罗马帝国", status: "active", suggestedMinEvents: 35 },
    { id: "byzantium", title: "拜占庭帝国", status: "active", suggestedMinEvents: 25 },
    { id: "medieval-western-europe", title: "中世纪西欧", status: "active", suggestedMinEvents: 35 },
    { id: "renaissance-reformation", title: "文艺复兴与宗教改革", status: "active", suggestedMinEvents: 25 },
    { id: "early-modern-europe", title: "近代早期欧洲", status: "planned", suggestedMinEvents: 35 },
    { id: "revolutionary-industrial-europe", title: "革命与工业化欧洲", status: "planned", suggestedMinEvents: 40 },
    { id: "world-wars-europe", title: "两次世界大战中的欧洲", status: "planned", suggestedMinEvents: 40 },
    { id: "cold-war-europe", title: "冷战欧洲与欧洲一体化", status: "planned", suggestedMinEvents: 30 }
  ],
  laterCountrySlots: [
    { id: "britain", title: "英国", status: "planned" },
    { id: "france", title: "法国", status: "planned" },
    { id: "germany", title: "德国/德意志", status: "planned" },
    { id: "italy", title: "意大利", status: "planned" },
    { id: "spain-portugal", title: "伊比利亚/西葡", status: "planned" },
    { id: "russia", title: "俄罗斯", status: "planned" },
    { id: "nordic", title: "北欧", status: "planned" },
    { id: "balkans", title: "巴尔干", status: "planned" }
  ]
};
