window.AFRO_EURASIA_CROSSROADS_PACKAGE = {
  id: "afro-eurasia-crossroads",
  regionId: "afro-eurasia-crossroads",
  title: "亚非欧交界地",
  scope: "跨区域专题包：青铜时代国际体系、青铜时代崩溃、波斯帝国与希腊世界、希腊化世界、罗马地中海一体化、罗马-波斯对抗、伊斯兰扩张、十字军与东地中海。",
  moduleIds: ["bronze-age-international-system", "bronze-age-collapse"],
  topicIds: [],
  boundaries: [
    "交界地包不直接拥有古埃及、两河、希腊、罗马、波斯等文明正文，只负责跨区域索引和因果链串联。",
    "若事件核心发生在一个文明内部，归入该文明模块；若事件本质是多个文明系统的互动，再进入交界专题。",
    "同一事件可以被交界专题引用，但不得复制成多个版本，避免后续修订时互相污染。"
  ],
  nextExpansionSlots: [
    { id: "bronze-age-international-system", title: "青铜时代国际体系", status: "active", suggestedMinEvents: 46 },
    { id: "bronze-age-collapse", title: "青铜时代崩溃", status: "active", suggestedMinEvents: 50 },
    { id: "persian-greek-world", title: "波斯帝国与希腊世界", status: "planned", suggestedMinEvents: 30 },
    { id: "hellenistic-world", title: "希腊化世界", status: "planned", suggestedMinEvents: 35 },
    { id: "roman-mediterranean-system", title: "罗马地中海体系", status: "planned", suggestedMinEvents: 40 },
    { id: "roman-persian-frontier", title: "罗马-波斯长期对抗", status: "planned", suggestedMinEvents: 35 },
    { id: "islamic-expansion-crossroads", title: "伊斯兰扩张与旧世界重组", status: "planned", suggestedMinEvents: 35 },
    { id: "crusades-eastern-mediterranean", title: "十字军与东地中海", status: "planned", suggestedMinEvents: 35 }
  ],
  referenceModuleIds: [
    "ancient-egypt",
    "sumer-early-mesopotamia",
    "ancient-greece"
  ]
};
