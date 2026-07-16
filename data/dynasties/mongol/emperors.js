window.MONGOL_EMPERORS = [
  {
    "phase": "主线统治者",
    "title": "成吉思汗",
    "name": "铁木真",
    "names": [
      "铁木真",
      "蒙古成吉思汗"
    ],
    "reign": "1206-1227",
    "position": "蒙古关键统治者，需结合相关主线事件理解其历史位置。",
    "keyEvents": [
      "mongol-temujin-unifies-steppe",
      "mongol-kurultai-1206",
      "mongol-first-xia-campaigns",
      "mongol-war-against-jin",
      "mongol-western-campaign-khwarazm",
      "mongol-destroys-western-xia"
    ],
    "relatedEventIds": [
      "mongol-temujin-unifies-steppe",
      "mongol-kurultai-1206",
      "mongol-first-xia-campaigns",
      "mongol-war-against-jin",
      "mongol-western-campaign-khwarazm",
      "mongol-destroys-western-xia"
    ],
    "plainText": "读铁木真，重点看其如何影响蒙古的建国、扩张、制度或亡国主线。",
    "source": "《元史》《蒙古秘史》《宋史》《金史》相关纪事，待补公开链接",
    "sourceUrl": "",
    "dynastyId": "mongol"
  },
  {
    "phase": "主线统治者",
    "title": "太宗",
    "name": "窝阔台",
    "names": [
      "窝阔台",
      "蒙古太宗"
    ],
    "reign": "1229-1241",
    "position": "蒙古关键统治者，需结合相关主线事件理解其历史位置。",
    "keyEvents": [
      "mongol-ogedei-destroys-jin",
      "mongol-batu-western-campaign"
    ],
    "relatedEventIds": [
      "mongol-ogedei-destroys-jin",
      "mongol-batu-western-campaign"
    ],
    "plainText": "读窝阔台，重点看其如何影响蒙古的建国、扩张、制度或亡国主线。",
    "source": "《元史》《蒙古秘史》《宋史》《金史》相关纪事，待补公开链接",
    "sourceUrl": "",
    "dynastyId": "mongol"
  },
  {
    "phase": "主线统治者",
    "title": "宪宗",
    "name": "蒙哥",
    "names": [
      "蒙哥",
      "蒙古宪宗"
    ],
    "reign": "1251-1259",
    "position": "蒙古关键统治者，需结合相关主线事件理解其历史位置。",
    "keyEvents": [
      "mongol-mongke-southern-campaign"
    ],
    "relatedEventIds": [
      "mongol-mongke-southern-campaign"
    ],
    "plainText": "读蒙哥，重点看其如何影响蒙古的建国、扩张、制度或亡国主线。",
    "source": "《元史》《蒙古秘史》《宋史》《金史》相关纪事，待补公开链接",
    "sourceUrl": "",
    "dynastyId": "mongol"
  },
  {
    "phase": "主线统治者",
    "title": "世祖",
    "name": "忽必烈",
    "names": [
      "忽必烈",
      "蒙古世祖"
    ],
    "reign": "1260-1294",
    "position": "蒙古关键统治者，需结合相关主线事件理解其历史位置。",
    "keyEvents": [
      "mongol-kublai-ariq-boke",
      "mongol-yuan-founded",
      "mongol-xiangyang-siege",
      "mongol-linan-yashan"
    ],
    "relatedEventIds": [
      "mongol-kublai-ariq-boke",
      "mongol-yuan-founded",
      "mongol-xiangyang-siege",
      "mongol-linan-yashan"
    ],
    "plainText": "读忽必烈，重点看其如何影响蒙古的建国、扩张、制度或亡国主线。",
    "source": "《元史》《蒙古秘史》《宋史》《金史》相关纪事，待补公开链接",
    "sourceUrl": "",
    "dynastyId": "mongol"
  }
];

window.MONGOL_EMPERORS = window.MONGOL_EMPERORS.map((ruler) => {
  if (ruler.name !== "忽必烈") return ruler;
  return {
    ...ruler,
    keyEvents: ["mongol-kublai-ariq-boke"],
    relatedEventIds: ["mongol-kublai-ariq-boke"]
  };
});
