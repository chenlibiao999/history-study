window.CHINA_HISTORY_PACKAGE = {
  id: "china",
  regionId: "east-asia",
  title: "中国",
  scope: "中国历史主线：从商周、秦汉、魏晋南北朝、隋唐宋元明清到民国、抗战、解放与建设、改革开放。",
  moduleIds: [
    "shang",
    "western-zhou",
    "spring-autumn-warring-states",
    "qin",
    "western-han",
    "xin",
    "eastern-han",
    "late-han-three-kingdoms",
    "northern-southern",
    "sui",
    "tang",
    "five-dynasties-ten-kingdoms",
    "northern-song",
    "southern-song",
    "liao",
    "western-xia",
    "jin",
    "mongol",
    "yuan",
    "ming",
    "qing",
    "republican-china",
    "war-of-resistance",
    "liberation-construction",
    "reform-opening"
  ],
  topicIds: ["imperial-exam", "song-mongol-yuan-war"],
  boundaries: [
    "清朝模块止于清帝退位，之后拆入民国、抗日、解放与建设、改革开放四个时期。",
    "蒙古帝国、辽、西夏、金等既属于中国历史主线，也可在后续东亚/内亚跨区域专题中复用。",
    "区域包只做索引收束，不复制事件正文；事件事实仍由各时期模块维护。"
  ],
  nextExpansionSlots: [
    { id: "japan", title: "日本", status: "active" },
    { id: "korean-peninsula", title: "朝鲜半岛", status: "planned" },
    { id: "vietnam", title: "越南", status: "planned" },
    { id: "mongolian-steppe", title: "蒙古高原/内亚", status: "planned" },
    { id: "ryukyu", title: "琉球", status: "planned" }
  ]
};
