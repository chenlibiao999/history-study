(() => {
  const ruler = (title, name, reign, eventId) => ({
    phase: "元朝统治者", title, name, names: [name, `元${title}`], reign,
    position: `${title}${name}的统治应结合关联事件理解其制度选择、继承条件或政治后果。`,
    keyEvents: [eventId], relatedEventIds: [eventId],
    plainText: `学习${name}时，重点看其在元朝主线中的实际作用。`,
    source: "《元史》相关本纪，待补公开链接与白话释义", sourceUrl: "", dynastyId: "yuan"
  });
  window.YUAN_EMPERORS = [
    ruler("世祖", "忽必烈", "1260-1294", "yuan-foundation"),
    ruler("成宗", "铁穆耳", "1294-1307", "yuan-chengzong-succession"),
    ruler("武宗", "海山", "1307-1311", "yuan-wuzong-finance"),
    ruler("仁宗", "爱育黎拔力八达", "1311-1320", "yuan-restores-examinations"),
    ruler("英宗", "硕德八剌", "1320-1323", "yuan-yingzong-assassination"),
    ruler("泰定帝", "也孙铁木儿", "1323-1328", "yuan-war-of-two-capitals"),
    ruler("天顺帝", "阿剌吉八", "1328", "yuan-war-of-two-capitals"),
    ruler("文宗", "图帖睦尔", "1328-1332", "yuan-war-of-two-capitals"),
    ruler("明宗", "和世㻋", "1329", "yuan-war-of-two-capitals"),
    ruler("宁宗", "懿璘质班", "1332", "yuan-regency"),
    ruler("顺帝", "妥懽帖睦尔", "1333-1368", "yuan-northern-expedition")
  ];
})();
