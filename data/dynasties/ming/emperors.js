(() => {
  const dynastyId = "ming";
  const ruler = (title, name, reign, eventIds, keyEvents) => ({
    phase: "明朝皇帝",
    title,
    name,
    names: [name, title.startsWith("明") ? title : `明${title}`],
    reign,
    position: `${title}${name}的统治应结合关联事件理解其制度选择、继承条件或政治后果。`,
    keyEvents: keyEvents || eventIds,
    relatedEventIds: eventIds,
    plainText: `学习${name}时，重点看其在明朝主线中的实际作用，而不是只记年号和庙号。`,
    source: "《明史》相关本纪，待补公开链接与白话释义",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E6%98%8E%E5%8F%B2",
    dynastyId
  });

  window.MING_EMPERORS = [
    ruler("太祖", "朱元璋", "1368-1398", ["ming-founded-and-northern-expedition", "ming-hongwu-unification", "ming-hongwu-institutions", "ming-abolish-chancellery", "ming-hongwu-purges"], ["建明北伐", "洪武制度", "废丞相", "功臣清洗"]),
    ruler("惠帝", "朱允炆", "1398-1402", ["ming-jianwen-reduction-vassals", "ming-jingnan-campaign"], ["建文削藩", "靖难之役"]),
    ruler("成祖", "朱棣", "1402-1424", ["ming-jingnan-campaign", "ming-yongle-move-capital", "ming-yongle-northern-campaigns", "ming-zhenghe-voyages", "ming-vietnam-conquest-and-withdrawal"], ["靖难夺位", "迁都北京", "五征漠北", "郑和下西洋"]),
    ruler("仁宗", "朱高炽", "1424-1425", ["ming-renxuan-governance"], ["仁宣之治"]),
    ruler("宣宗", "朱瞻基", "1425-1435", ["ming-renxuan-governance", "ming-zhenghe-voyages", "ming-vietnam-conquest-and-withdrawal"], ["仁宣之治", "停止交趾高成本设治"]),
    ruler("英宗", "朱祁镇", "1435-1449、1457-1464", ["ming-tumu-crisis", "ming-duomen-restoration"], ["土木堡之变", "夺门复辟"]),
    ruler("代宗", "朱祁钰", "1449-1457", ["ming-tumu-crisis", "ming-duomen-restoration"], ["北京保卫战", "夺门之变"]),
    ruler("宪宗", "朱见深", "1464-1487", ["ming-chenghua-hongzhi-politics"], ["成化政治", "西厂"]),
    ruler("孝宗", "朱祐樘", "1487-1505", ["ming-chenghua-hongzhi-politics"], ["弘治整饬"]),
    ruler("武宗", "朱厚照", "1505-1521", ["ming-zhengde-tumult"], ["刘瑾专权", "宁王之乱"]),
    ruler("世宗", "朱厚熜", "1521-1567", ["ming-great-rites", "ming-jiajing-wokou-and-altan"], ["大礼议", "嘉靖倭患", "庚戌之变"]),
    ruler("穆宗", "朱载坖", "1567-1572", ["ming-longqing-opening"], ["隆庆开关", "俺答封贡"]),
    ruler("神宗", "朱翊钧", "1572-1620", ["ming-zhang-juzheng-reforms", "ming-wanli-three-campaigns", "ming-guoben-and-donglin", "ming-liaodong-nurhaci-rise"], ["张居正改革", "万历三大征", "国本之争", "萨尔浒"]),
    ruler("光宗", "朱常洛", "1620", ["ming-guoben-and-donglin"], ["国本之争余波", "泰昌短祚"]),
    ruler("熹宗", "朱由校", "1620-1627", ["ming-tianqi-weizhongxian", "ming-liaodong-nurhaci-rise"], ["魏忠贤专权", "辽东危机"]),
    ruler("思宗", "朱由检", "1627-1644", ["ming-chongzhen-fiscal-crisis", "ming-liaodong-yuan-chonghuan", "ming-qing-founded-and-songjin", "ming-li-zicheng-dashun", "ming-fall-of-beijing"], ["崇祯财政危机", "袁崇焕之死", "松锦大战", "李自成入京"])
  ];
})();
