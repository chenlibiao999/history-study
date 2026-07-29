window.AFRICA_HISTORY_PACKAGE = {
  id: "africa",
  regionId: "africa",
  title: "非洲",
  scope: "非洲历史主线：古埃及、努比亚/库施、迦太基、北非罗马化、基督教东北非、伊斯兰北非、阿克苏姆、撒哈拉贸易、西非帝国、东非海岸与近现代非洲。",
  moduleIds: ["ancient-egypt", "nubia-kush", "phoenician-carthage", "african-civilizations"],
  topicIds: [],
  boundaries: [
    "古埃及归入非洲，因为其核心地理、农业、王权和社会基础在尼罗河流域；它同时会被亚非欧交界地专题引用。",
    "迦太基和北非罗马化后续可归入非洲模块，但布匿战争、罗马地中海霸权等事件由罗马或交界专题串联。",
    "区域包只做索引和边界说明，不复制事件正文；具体事件仍由对应文明模块维护。"
  ],
  nextExpansionSlots: [
    { id: "nubia-kush", title: "努比亚/库施", status: "active", suggestedMinEvents: 25 },
    { id: "phoenician-carthage", title: "腓尼基城邦与迦太基", status: "active", suggestedMinEvents: 35 },
    { id: "aksum-ethiopia", title: "阿克苏姆与埃塞俄比亚", status: "planned", suggestedMinEvents: 25 },
    { id: "islamic-north-africa", title: "伊斯兰北非", status: "planned", suggestedMinEvents: 30 },
    { id: "west-african-empires", title: "西非帝国", status: "planned", suggestedMinEvents: 35 },
    { id: "east-african-coast", title: "东非海岸与印度洋贸易", status: "active", suggestedMinEvents: 25 },
    { id: "african-civilizations", title: "非洲文明主线", status: "active", suggestedMinEvents: 35 }
  ]
};
