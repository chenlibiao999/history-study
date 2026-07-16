(() => {
  const dynastyId = "modern-china";
  const dynasty = "近现代中国";
  function stage(item) {
    return {
      id: item.id,
      name: item.name,
      dynasty,
      dynastyId,
      reign: item.reign,
      era: item.era,
      summary: item.summary,
      tags: item.tags,
      focus: item.focus,
      source: "中国近现代史公开史料、档案与通史资料，待补具体链接",
      relatedEventIds: item.relatedEventIds
    };
  }

  window.MODERN_CHINA_EMPERORS = [
    stage({
      id: "modern-stage-early-republic",
      name: "民国初建",
      reign: "1912-1916",
      era: "民国初建",
      summary: "清帝退位后共和政体建立，但袁世凯集权、二次革命和洪宪帝制显示制度根基脆弱。",
      tags: ["共和", "袁世凯", "护国运动"],
      focus: "重点看帝制结束后，为什么共和制度没有马上稳定。",
      relatedEventIds: ["modern-republic-founded-1912", "modern-yuan-shikai-power-centralization", "modern-yuan-monarchy-hongxian"]
    }),
    stage({
      id: "modern-stage-warlord-revolution",
      name: "北洋与国民革命",
      reign: "1916-1931",
      era: "北洋与国民革命",
      summary: "北洋割据、五四新思潮、中共成立、国共合作和北伐共同重塑民国政治。",
      tags: ["北洋", "五四", "北伐", "南京政府"],
      focus: "重点看军阀割据如何被国民革命冲击，又如何留下地方实力问题。",
      relatedEventIds: ["modern-warlord-era-begins", "modern-new-culture-may-fourth", "modern-ccp-founded-1921", "modern-first-united-front-northern-expedition", "modern-nanjing-government-established", "modern-jinggangshan-land-revolution"]
    }),
    stage({
      id: "modern-stage-war-of-resistance",
      name: "抗日战争",
      reign: "1931-1945",
      era: "抗日战争",
      summary: "从九一八到日本投降，中国经历民族危机、全面抗战、正面和敌后战场以及战后格局重组。",
      tags: ["九一八", "西安事变", "全面抗战", "抗战胜利"],
      focus: "重点看民族危机如何改变国共关系和中国政治格局。",
      relatedEventIds: ["modern-september-18-manchuria", "modern-long-march-zunyi", "modern-xian-incident-united-front", "modern-lugouqiao-full-war", "modern-nanjing-massacre", "modern-wartime-chongqing-base", "modern-enemy-rear-battlefields", "modern-japan-surrender-1945"]
    }),
    stage({
      id: "modern-stage-civil-war-prc",
      name: "解放战争与建国",
      reign: "1945-1956",
      era: "解放战争 / 共和国建立",
      summary: "抗战胜利后和平建国失败，解放战争导致大陆政权更替，新中国完成初期政权建设和制度改造。",
      tags: ["重庆谈判", "三大战役", "1949", "三大改造"],
      focus: "重点看从战后和平窗口到新国家建设的连续转折。",
      relatedEventIds: ["modern-chongqing-negotiations", "modern-civil-war-three-campaigns", "modern-prc-founded-1949", "modern-land-reform-korean-war", "modern-first-five-year-plan-constitution", "modern-socialist-transformation"]
    }),
    stage({
      id: "modern-stage-construction-twists",
      name: "建设与曲折",
      reign: "1956-1976",
      era: "建设与曲折",
      summary: "社会主义建设取得制度和工业基础，也经历反右、大跃进、经济困难、文化大革命等严重曲折。",
      tags: ["反右", "大跃进", "经济调整", "文革"],
      focus: "重点看建设成就、制度失误和纠偏过程同时存在。",
      relatedEventIds: ["modern-hundred-flowers-anti-rightist", "modern-great-leap-forward-famine", "modern-economic-adjustment-1960s", "modern-cultural-revolution", "modern-un-seat-1971-diplomacy"]
    }),
    stage({
      id: "modern-stage-reform-opening",
      name: "改革开放",
      reign: "1978-2012",
      era: "改革开放",
      summary: "十一届三中全会后，中国转向经济建设和改革开放，经历农村改革、特区开放、市场经济、入世和发展阶段转换。",
      tags: ["1978", "农村改革", "特区", "入世", "2012"],
      focus: "重点看改革如何从农村、城市、开放和市场体制逐步展开。",
      relatedEventIds: ["modern-reform-opening-1978", "modern-household-responsibility-system", "modern-special-economic-zones", "modern-urban-reform-1980s", "modern-southern-tour-market-economy", "modern-hong-kong-macao-return", "modern-wto-entry-2001", "modern-2008-olympics-financial-crisis", "modern-2012-new-stage"]
    })
  ];
})();
