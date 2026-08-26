(() => {
  const dynastyId = "western-zhou";
  const dynasty = "西周";
  function emperor(item) {
    const title = item.title || (item.reign === "摄政人物" || item.id.includes("gonghe") ? "摄政" : "西周王");
    return {
      id: item.id,
      phase: item.phase || item.era || "西周王室",
      title,
      name: item.name,
      names: item.names || [item.name, title],
      dynasty,
      dynastyId,
      reign: item.reign,
      era: item.era,
      summary: item.summary,
      tags: item.tags,
      keyEvents: item.keyEvents || item.tags || item.relatedEventIds,
      focus: item.focus,
      position: item.position || `${title}${item.name}应结合西周主线事件理解其历史作用。`,
      plainText: item.plainText || item.focus || item.summary,
      source: item.source || "《史记·周本纪》及西周金文、传世文献相关资料",
      sourceUrl: item.sourceUrl || "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98/%E5%8D%B7004",
      relatedEventIds: item.relatedEventIds
    };
  }

  window.WESTERN_ZHOU_EMPERORS = [
    emperor({
      id: "wzhou-king-wu",
      name: "周武王",
      reign: "约前1046前后",
      era: "克商建周",
      summary: "率周人与盟友克商，完成商周更替，是西周建国的核心人物。",
      tags: ["牧野之战", "克商建周"],
      focus: "重点看战争胜利如何转化为新王朝统治合法性。",
      relatedEventIds: ["wzhou-muye-zhou-founded"]
    }),
    emperor({
      id: "wzhou-king-cheng",
      name: "周成王",
      reign: "前11世纪",
      era: "周公制礼",
      summary: "幼年即位，经历周公摄政和平定三监之乱，西周制度在其时期逐步稳定。",
      tags: ["周公摄政", "成周", "成康之治"],
      focus: "重点看幼主时期如何通过周公辅政渡过建国危机。",
      relatedEventIds: ["wzhou-duke-of-zhou-regency", "wzhou-luoyi-eastern-capital", "wzhou-chengkang-peace"]
    }),
    emperor({
      id: "wzhou-duke-of-zhou",
      name: "周公旦",
      reign: "摄政人物",
      era: "周公制礼",
      summary: "不是周王，但在摄政、平乱、成周营建和礼制叙事中居于核心位置。",
      tags: ["摄政", "三监之乱", "礼乐"],
      focus: "重点看周公怎样把灭商后的动荡整理成可持续秩序。",
      relatedEventIds: ["wzhou-feudal-ritual-system", "wzhou-duke-of-zhou-regency", "wzhou-luoyi-eastern-capital"]
    }),
    emperor({
      id: "wzhou-king-kang",
      name: "周康王",
      reign: "前11世纪后期",
      era: "成康秩序",
      summary: "承接成王时期秩序，代表西周前期相对稳定的治理阶段。",
      tags: ["成康之治", "礼乐秩序"],
      focus: "重点看西周制度正常运行时的高点。",
      relatedEventIds: ["wzhou-chengkang-peace"]
    }),
    emperor({
      id: "wzhou-king-zhao",
      name: "周昭王",
      reign: "约前10世纪",
      era: "昭穆转折",
      summary: "南征受挫的传统叙事显示西周王权扩张遇到边界。",
      tags: ["南征", "王权转折"],
      focus: "重点看王室对远方区域控制能力的限制。",
      relatedEventIds: ["wzhou-zhao-south-campaign"]
    }),
    emperor({
      id: "wzhou-king-mu",
      name: "周穆王",
      reign: "约前10世纪",
      era: "昭穆转折",
      summary: "以西征和巡行叙事著称，体现西周中期王权威望展示和边疆经营。",
      tags: ["西征", "巡行", "边疆"],
      focus: "重点区分历史主线与后世传说化叙事。",
      relatedEventIds: ["wzhou-mu-western-campaigns"]
    }),
    emperor({
      id: "wzhou-king-gong",
      name: "周共王",
      reign: "约前10世纪后期",
      era: "昭穆转折",
      summary: "处在西周中期王权维护阶段，灭密等记载显示王室仍能惩罚地方力量。",
      tags: ["灭密", "王权维护"],
      focus: "重点看成康之后到厉王之前，王室威望如何逐步变成需要主动维护的资源。",
      relatedEventIds: ["wzhou-gongwang-mi-state"]
    }),
    emperor({
      id: "wzhou-king-yi-middle",
      name: "周懿王",
      reign: "约前10世纪末-前9世纪初",
      era: "昭穆转折",
      summary: "西周中后期衰弱迹象加深的代表性君主之一，用来连接昭穆转折和厉王危机。",
      tags: ["王权衰弱", "中段转折"],
      focus: "重点看西周不是到厉王才突然出问题，中期已经有衰变迹象。",
      relatedEventIds: ["wzhou-yiwang-decline"]
    }),
    emperor({
      id: "wzhou-king-xiao",
      name: "周孝王",
      reign: "约前9世纪",
      era: "昭穆转折",
      summary: "以封非子于秦的传统记载连接西周边疆治理与后世秦人崛起。",
      tags: ["非子", "秦人早期"],
      focus: "重点看秦人如何从西周边疆封邑进入周制秩序。",
      relatedEventIds: ["wzhou-xiaowang-feizi-qin"]
    }),
    emperor({
      id: "wzhou-king-yi-late",
      name: "周夷王",
      reign: "约前9世纪",
      era: "厉宣幽危机",
      summary: "传统记载中的齐哀公事件显示王室与诸侯关系恶化，西周晚期秩序继续松动。",
      tags: ["齐哀公", "诸侯关系"],
      focus: "重点看王室仍有惩罚权，但政治信任已明显下降。",
      relatedEventIds: ["wzhou-yiwang-boils-qi-ai"]
    }),
    emperor({
      id: "wzhou-king-li",
      name: "周厉王",
      reign: "前9世纪中叶",
      era: "厉宣幽危机",
      summary: "专利政策和压制性统治引发严重反弹，最终出现国人暴动和出奔。",
      tags: ["专利", "国人暴动"],
      focus: "重点看财政危机如何转化为政治危机。",
      relatedEventIds: ["wzhou-liwang-reform-crisis", "wzhou-guoren-riot"]
    }),
    emperor({
      id: "wzhou-gonghe-regency-figure",
      name: "共和行政",
      reign: "前841-前828",
      era: "厉宣幽危机",
      summary: "厉王出奔后的贵族共同行政阶段，不是周王个人，但必须作为西周政治节点掌握。",
      tags: ["共和行政", "明确纪年"],
      focus: "重点看它为什么是王权失灵后的权宜安排。",
      relatedEventIds: ["wzhou-gonghe-regency"]
    }),
    emperor({
      id: "wzhou-king-xuan",
      name: "周宣王",
      reign: "前827-前782",
      era: "厉宣幽危机",
      summary: "试图恢复王室威望，形成宣王中兴，但未根本解决西周后期危机。",
      tags: ["宣王中兴", "南北用兵"],
      focus: "重点看短期恢复与结构性危机之间的差别。",
      relatedEventIds: ["wzhou-xuanwang-restoration", "wzhou-jianghan-frontier-pressure", "wzhou-xuanwang-buji-qianmu", "wzhou-xuanwang-taiyuan-census", "wzhou-xuanwang-jiangrong-defeat"]
    }),
    emperor({
      id: "wzhou-king-you",
      name: "周幽王",
      reign: "前781-前771",
      era: "厉宣幽危机",
      summary: "西周末代王，继承危机、诸侯关系破裂和犬戎压力在其时期集中爆发。",
      tags: ["幽王危机", "西周灭亡"],
      focus: "重点避免把亡国简单归因于褒姒故事。",
      relatedEventIds: ["wzhou-you-wang-crisis", "wzhou-western-zhou-fall"]
    })
  ];
})();
