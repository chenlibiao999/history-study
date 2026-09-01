window.IRANIAN_WORLD_EMPERORS = [
  { dynastyId: "iranian-world", title: "埃兰与早期高原", name: "苏萨、埃兰和扎格罗斯诸力量", years: "约前3200-前550", summary: "伊朗高原西南与两河长期互动，为后来的米底和波斯帝国提供区域底层。", keyEvents: ["埃兰与苏萨早期国家", "米底兴起与亚述崩溃"], relatedEventIds: ["iranian-world-elam-susa", "iranian-world-medes-assyria"] },
  { dynastyId: "iranian-world", title: "阿契美尼德波斯", name: "居鲁士至大流士", years: "前550-前330", summary: "波斯建立横跨西亚、埃及、中亚和小亚细亚的大帝国。", keyEvents: ["居鲁士建立波斯帝国", "大流士一世与帝国行政", "波希战争"], relatedEventIds: ["iranian-world-cyrus-empire", "iranian-world-darius-administration", "iranian-world-greco-persian-wars"] },
  { dynastyId: "iranian-world", title: "帕提亚", name: "阿尔萨息王朝", years: "前247-224", summary: "帕提亚在伊朗和两河之间形成骑兵贵族帝国，与罗马长期对抗。", keyEvents: ["帕提亚兴起", "卡莱战役与罗马-帕提亚对抗"], relatedEventIds: ["iranian-world-parthian-rise", "iranian-world-carrhae"] },
  { dynastyId: "iranian-world", title: "萨珊波斯", name: "阿尔达希尔至霍斯劳", years: "224-651", summary: "萨珊重建强王权、祆教国家传统，并与罗马/拜占庭长期争夺西亚。", keyEvents: ["萨珊王朝建立", "沙普尔一世与罗马战争", "霍斯劳改革与萨珊高峰", "阿拉伯征服萨珊"], relatedEventIds: ["iranian-world-sasanian-founding", "iranian-world-shapur-rome", "iranian-world-khosrow-reforms", "iranian-world-arab-conquest"] },
  { dynastyId: "iranian-world", title: "伊斯兰化与波斯复兴", name: "塔希尔、萨法尔、萨曼与布益", years: "9-11世纪", summary: "伊朗高原在伊斯兰政治框架中重建波斯语文化和地方王权。", keyEvents: ["塔希尔、萨法尔与地方王朝", "萨曼王朝与新波斯语文化", "布益王朝进入巴格达"], relatedEventIds: ["iranian-world-local-dynasties", "iranian-world-samanid-persian", "iranian-world-buyids-baghdad"] },
  { dynastyId: "iranian-world", title: "早期近代与近代", name: "萨非、阿夫沙尔、恺加", years: "1501-1925", summary: "萨非王朝塑造什叶派伊朗国家框架，近代伊朗面对俄英压力和宪政革命。", keyEvents: ["萨非王朝建立", "阿巴斯一世改革", "纳迪尔沙扩张", "恺加王朝与英俄压力", "立宪革命与巴列维前夜"], relatedEventIds: ["iranian-world-safavid-founding", "iranian-world-abbas-reforms", "iranian-world-nader-shah", "iranian-world-qajar-great-game", "iranian-world-constitutional-revolution"] }
];

(() => {
  const parentById = {
    "iranian-world-indo-iranian-plateau": "iranian-world-elam-susa", "iranian-world-medes-assyria": "iranian-world-elam-susa",
    "iranian-world-cambyses-egypt": "iranian-world-cyrus-empire", "iranian-world-greco-persian-wars": "iranian-world-darius-administration", "iranian-world-persepolis-court": "iranian-world-darius-administration",
    "iranian-world-alexander-fall": "iranian-world-parthian-rise", "iranian-world-seleucid-iran": "iranian-world-parthian-rise", "iranian-world-carrhae": "iranian-world-parthian-rise",
    "iranian-world-shapur-rome": "iranian-world-sasanian-founding", "iranian-world-khosrow-reforms": "iranian-world-sasanian-founding", "iranian-world-late-sasanian-war": "iranian-world-arab-conquest",
    "iranian-world-local-dynasties": "iranian-world-samanid-persian", "iranian-world-buyids-baghdad": "iranian-world-samanid-persian", "iranian-world-seljuk-iran": "iranian-world-samanid-persian",
    "iranian-world-timurid-iran": "iranian-world-mongol-ilkhanate", "iranian-world-abbas-reforms": "iranian-world-safavid-founding", "iranian-world-qajar-great-game": "iranian-world-constitutional-revolution"
  };
  window.IRANIAN_WORLD_EMPERORS = window.IRANIAN_WORLD_EMPERORS.map((item) => ({ ...item, relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentById[id] || id))] }));
})();
