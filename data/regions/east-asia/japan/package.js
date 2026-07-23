window.JAPAN_HISTORY_PACKAGE = {
  id: "japan",
  regionId: "east-asia",
  title: "日本",
  scope: "日本历史主线：绳文、弥生、古坟、大和、飞鸟奈良、平安、镰仓、室町战国、江户、幕末明治、帝国日本、战后日本。",
  moduleIds: ["japan"],
  topicIds: [],
  boundaries: [
    "日本包只管理日本列岛及其国家/文明主线，不把日本事件复制到中国包。",
    "涉及遣隋使、遣唐使、白村江、元日战争、明日贸易、侵朝战争、甲午战争、全面侵华战争等跨东亚事件，后续通过专题和关系链串联。",
    "本包为首版总线模块，后续可拆为古代日本、中世日本、近世日本、近现代日本等更细模块。"
  ],
  nextExpansionSlots: [
    { id: "ancient-japan", title: "古代日本", status: "planned", suggestedMinEvents: 35 },
    { id: "medieval-japan", title: "中世日本", status: "planned", suggestedMinEvents: 40 },
    { id: "edo-japan", title: "江户日本", status: "planned", suggestedMinEvents: 30 },
    { id: "modern-japan", title: "近现代日本", status: "planned", suggestedMinEvents: 45 }
  ]
};
