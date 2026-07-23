(function(){
  const data = window.HISTORY_DATA;
  const emperors = data.emperors || window.TANG_EMPERORS || [];
  let selectedId = data.events[0]?.id;
  let activeTab = "people";
  let timelineMode = "events";
  const activeFilters = {period: "", region: "", topic: ""};
  const regionFilterLabels = new Map();
  const topicFilterLabels = new Map();
  const notes = new Map(data.events.map(event => [event.id, [...(event.notes || [])]]));
  const bookmarked = new Set(data.events.filter(event => event.bookmarked).map(event => event.id));

  const $ = selector => document.querySelector(selector);

  function currentEvent(){
    return data.events.find(event => event.id === selectedId) || data.events[0];
  }

  function selectEvent(eventId){
    if (!data.events.some(event => event.id === eventId)) return;
    selectedId = eventId;
    renderAll();
  }

  function eventMatchesLabel(event, label){
    return event.title === label || (event.aliases || []).includes(label);
  }

  function findEventByLabel(label){
    return data.events.find(event => eventMatchesLabel(event, label));
  }

  function emperorEvents(emperor){
    const found = new Map();
    (emperor.relatedEventIds || [])
      .map(id => data.events.find(event => event.id === id))
      .filter(Boolean)
      .forEach(event => found.set(event.id, event));
    (emperor.keyEvents || [])
      .map(findEventByLabel)
      .filter(Boolean)
      .forEach(event => found.set(event.id, event));
    return [...found.values()];
  }

  function textNode(tag, className, text){
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
  }

  function clear(el){
    el.replaceChildren();
  }

  function populateFilters(){
    renderFilterPanel();
    renderActiveFilters();
  }

  function commonValues(items, minCount){
    const counts = new Map();
    items.filter(Boolean).forEach(item => {
      counts.set(item, (counts.get(item) || 0) + 1);
    });
    return [...counts.entries()]
      .filter(([, count]) => count >= minCount)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))
      .map(([item]) => item);
  }

  function regionCatalog(){
    return [
      {
        id: "east-asia",
        title: "东亚",
        terms: ["东亚", "中国", "中原", "关中", "洛阳", "长安", "黄河", "江南", "江淮", "河北", "河东", "山东", "四川", "西域", "东北", "辽东", "蒙古高原", "草原", "朝鲜半岛", "日本", "台湾", "越南"],
        children: [
          ["中原/华北", ["中原", "洛阳", "河北", "河东", "山东", "华北"]],
          ["关中/长安", ["关中", "长安"]],
          ["江南/江淮", ["江南", "江淮", "长江", "南方"]],
          ["西域/河西", ["西域", "河西", "安西", "新疆"]],
          ["东北/辽东", ["东北", "辽东", "辽西"]],
          ["蒙古高原/草原", ["蒙古高原", "草原", "漠北", "漠南"]],
          ["朝鲜半岛", ["朝鲜半岛", "高句丽", "百济", "新罗"]],
          ["日本列岛", ["日本", "倭", "日本列岛"]],
          ["越南/岭南", ["越南", "岭南", "交州"]]
        ]
      },
      {
        id: "west-asia",
        title: "西亚",
        terms: ["西亚", "两河流域", "美索不达米亚", "苏美尔", "阿卡德", "巴比伦", "亚述", "底格里斯河", "幼发拉底河", "安纳托利亚", "赫梯", "伊朗高原", "波斯", "黎凡特", "叙利亚", "巴勒斯坦", "阿拉伯半岛"],
        children: [
          ["两河流域", ["两河流域", "美索不达米亚", "苏美尔", "阿卡德", "巴比伦", "亚述", "底格里斯河", "幼发拉底河"]],
          ["安纳托利亚", ["安纳托利亚", "赫梯", "小亚细亚"]],
          ["伊朗高原/波斯", ["伊朗高原", "波斯", "埃兰"]],
          ["黎凡特/叙利亚", ["黎凡特", "叙利亚", "巴勒斯坦", "迦南", "腓尼基"]],
          ["阿拉伯半岛", ["阿拉伯半岛", "阿拉伯"]]
        ]
      },
      {
        id: "europe",
        title: "欧洲",
        terms: ["欧洲", "希腊", "爱琴", "雅典", "斯巴达", "马其顿", "罗马", "意大利", "地中海", "拜占庭", "西欧", "法兰克", "法国", "英格兰", "德意志", "教皇国", "诺曼底", "伊比利亚", "低地国家", "神圣罗马帝国", "东欧", "斯拉夫", "罗斯", "基辅", "诺夫哥罗德", "莫斯科", "俄罗斯", "圣彼得堡", "波罗的海", "伏尔加", "乌拉尔", "西伯利亚", "苏联"],
        children: [
          ["希腊/爱琴", ["希腊", "爱琴", "雅典", "斯巴达", "伯罗奔尼撒", "克里特"]],
          ["马其顿", ["马其顿", "亚历山大"]],
          ["罗马/意大利", ["罗马", "意大利"]],
          ["拜占庭/东地中海", ["拜占庭", "东地中海"]],
          ["西欧/法兰克", ["西欧", "法兰克", "高卢"]],
          ["英格兰/不列颠", ["英格兰", "不列颠", "牛津"]],
          ["法国/诺曼底", ["法国", "法兰西", "诺曼底", "阿维尼翁", "奥尔良"]],
          ["德意志/神圣罗马帝国", ["德意志", "神圣罗马帝国", "中欧"]],
          ["意大利/教皇国", ["意大利", "罗马", "教皇国", "西西里"]],
          ["伊比利亚/低地", ["伊比利亚", "低地国家", "弗兰德斯"]],
          ["东欧/斯拉夫/俄罗斯", ["东欧", "斯拉夫", "罗斯", "基辅", "诺夫哥罗德", "莫斯科", "俄罗斯", "圣彼得堡", "波罗的海", "伏尔加", "乌拉尔", "西伯利亚", "苏联"]]
        ]
      },
      {
        id: "africa",
        title: "非洲",
        terms: ["非洲", "埃及", "尼罗河", "北非", "努比亚", "库施"],
        children: [
          ["尼罗河流域", ["尼罗河", "埃及", "上埃及", "下埃及"]],
          ["北非", ["北非", "利比亚"]],
          ["努比亚/库施", ["努比亚", "库施"]]
        ]
      },
      {
        id: "crossroads",
        title: "亚非欧交界地",
        terms: ["亚非欧交界地", "东地中海", "地中海", "爱琴", "黎凡特", "埃及", "安纳托利亚", "两河流域"],
        children: [
          ["东地中海", ["东地中海", "地中海", "爱琴"]],
          ["埃及-黎凡特", ["埃及", "黎凡特", "叙利亚", "巴勒斯坦"]],
          ["安纳托利亚-两河", ["安纳托利亚", "赫梯", "两河流域", "亚述", "巴比伦"]]
        ]
      }
    ];
  }

  function registerRegionFilter(value, label){
    regionFilterLabels.set(value, label);
    return value;
  }

  function regionFilterTerms(value){
    if (!value) return [];
    const [scope, id, childIndex] = value.split(":");
    if (scope !== "region-scope") return [value];
    const group = regionCatalog().find(item => item.id === id);
    if (!group) return [value];
    if (childIndex !== undefined) return group.children[Number(childIndex)]?.[1] || [value];
    return group.terms;
  }

  function eventMatchesRegionFilter(event, value){
    if (!value) return true;
    const terms = regionFilterTerms(value);
    return event.regions.some(region => terms.some(term => region.includes(term) || term.includes(region)));
  }

  function countEventsForRegionFilter(value){
    return data.events.filter(event => eventMatchesRegionFilter(event, value)).length;
  }

  function topicCatalog(){
    return [
      {
        id: "state-formation",
        title: "政权兴亡",
        terms: ["建国", "亡国", "改朝", "统一", "统一战争", "政权更替", "迁都", "继承", "皇位"],
        children: [
          ["建国/统一", ["建国", "统一", "统一战争"]],
          ["改朝/政权更替", ["改朝", "政权更替"]],
          ["亡国/崩溃", ["亡国", "崩溃", "青铜时代崩溃"]],
          ["继承/皇位", ["继承", "皇位", "皇权"]]
        ]
      },
      {
        id: "war-military",
        title: "战争军事",
        terms: ["军事", "战争", "北伐", "内战", "正面战场", "解放战争", "军阀战争", "武装起义", "宋金", "宋蒙"],
        children: [
          ["大战/军事", ["军事", "战争"]],
          ["统一与北伐", ["统一战争", "北伐"]],
          ["内战/军阀", ["内战", "军阀战争", "解放战争"]],
          ["边境战争", ["宋金", "宋蒙", "边疆"]]
        ]
      },
      {
        id: "institutions",
        title: "制度治理",
        terms: ["制度", "治理", "改革", "法律", "礼制", "军政", "地方治理", "行省", "科举"],
        children: [
          ["制度建设", ["制度", "法律", "礼制"]],
          ["改革/变法", ["改革", "变法"]],
          ["治理结构", ["治理", "军政", "地方治理", "行省"]],
          ["选官/教育", ["科举", "选官", "教育"]]
        ]
      },
      {
        id: "power-politics",
        title: "权力结构",
        terms: ["政治", "皇权", "政变", "宦官", "外戚", "权臣", "党争", "宫廷", "藩镇"],
        children: [
          ["皇权/宫廷", ["皇权", "宫廷", "皇位"]],
          ["政变/权臣", ["政变", "权臣"]],
          ["宦官/外戚", ["宦官", "外戚"]],
          ["党争/藩镇", ["党争", "藩镇"]]
        ]
      },
      {
        id: "economy-society",
        title: "财政社会",
        terms: ["财政", "社会", "民变", "人口", "土地", "赋税", "基础设施", "现代化"],
        children: [
          ["财政/赋税", ["财政", "赋税", "税"]],
          ["社会/民变", ["社会", "民变", "武装起义"]],
          ["人口/土地", ["人口", "土地"]],
          ["建设/现代化", ["基础设施", "现代化"]]
        ]
      },
      {
        id: "frontier-diplomacy",
        title: "边疆外交",
        terms: ["边疆", "外交", "西域", "蒙古", "大国体系形成", "阿马尔那外交", "青铜时代国际体系"],
        children: [
          ["边疆经营", ["边疆", "西域", "蒙古"]],
          ["外交关系", ["外交", "阿马尔那外交"]],
          ["国际体系", ["大国体系形成", "青铜时代国际体系"]]
        ]
      },
      {
        id: "culture-religion",
        title: "文化宗教",
        terms: ["文化", "宗教", "王权", "礼制", "古埃及", "苏美尔", "两河流域", "雅典", "斯巴达"],
        children: [
          ["文化/思想", ["文化", "思想"]],
          ["宗教/礼制", ["宗教", "礼制"]],
          ["古代文明", ["古埃及", "苏美尔", "两河流域"]],
          ["希腊城邦", ["雅典", "斯巴达"]]
        ]
      }
    ];
  }

  function registerTopicFilter(value, label){
    topicFilterLabels.set(value, label);
    return value;
  }

  function topicFilterTerms(value){
    if (!value) return [];
    const [scope, id, childIndex] = value.split(":");
    if (scope !== "topic-scope") return [value];
    const group = topicCatalog().find(item => item.id === id);
    if (!group) return [value];
    if (childIndex !== undefined) return group.children[Number(childIndex)]?.[1] || [value];
    return group.terms;
  }

  function eventMatchesTopicFilter(event, value){
    if (!value) return true;
    const terms = topicFilterTerms(value);
    const haystack = [event.title, event.summary, ...(event.topics || [])].join(" ");
    return terms.some(term => haystack.includes(term));
  }

  function countEventsForTopicFilter(value){
    return data.events.filter(event => eventMatchesTopicFilter(event, value)).length;
  }

  function unique(items){
    return [...new Set(items.filter(Boolean))];
  }

  function countEventsForFilter(type, value){
    return data.events.filter(event => {
      if (type === "period") return event.period === value;
      if (type === "region") return eventMatchesRegionFilter(event, value);
      if (type === "topic") return eventMatchesTopicFilter(event, value);
      return false;
    }).length;
  }

  function filterGroups(){
    return [
      {type: "period", title: "朝代/文明", allLabel: "全部朝代/文明", values: unique(data.events.map(event => event.period))},
      {type: "region-tree", title: "地区目录", allLabel: "全部地区", values: []},
      {type: "topic-tree", title: "主线主题", allLabel: "全部主题", values: []}
    ];
  }

  function renderFilterPanel(){
    const panel = $("#filterGroups");
    clear(panel);
    filterGroups().forEach(group => {
      const section = document.createElement("section");
      section.className = "filter-group";
      section.append(textNode("h3", "filter-group-title", group.title));

      const options = document.createElement("div");
      options.className = "filter-options";
      if (group.type === "region-tree") {
        options.append(filterOptionButton("region", "", group.allLabel, data.events.length));
        section.append(options, renderRegionTree());
        panel.append(section);
        return;
      } else if (group.type === "topic-tree") {
        options.append(filterOptionButton("topic", "", group.allLabel, data.events.length));
        section.append(options, renderTopicTree());
        panel.append(section);
        return;
      } else {
        options.append(filterOptionButton(group.type, "", group.allLabel, data.events.length));
        group.values.forEach(value => {
          options.append(filterOptionButton(group.type, value, value, countEventsForFilter(group.type, value)));
        });
      }

      section.append(options);
      panel.append(section);
    });
    updateFilterPanelState();
  }

  function filterOptionButton(type, value, label, count){
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-option";
    button.dataset.filterType = type;
    button.dataset.filterValue = value;
    button.append(
      textNode("span", "filter-option-label", label),
      textNode("span", "filter-option-count", String(count))
    );
    button.addEventListener("click", () => {
      activeFilters[type] = value;
      afterFilterChange();
    });
    return button;
  }

  function renderRegionTree(){
    const tree = document.createElement("div");
    tree.className = "region-tree";
    regionCatalog().forEach(group => {
      const groupValue = registerRegionFilter("region-scope:" + group.id, group.title);
      const item = document.createElement("div");
      item.className = "region-tree-group";

      const parent = filterOptionButton("region", groupValue, group.title, countEventsForRegionFilter(groupValue));
      parent.classList.add("region-parent");
      item.append(parent);

      const children = document.createElement("div");
      children.className = "region-children";
      group.children.forEach(([label], index) => {
        const childValue = registerRegionFilter("region-scope:" + group.id + ":" + index, label);
        children.append(filterOptionButton("region", childValue, label, countEventsForRegionFilter(childValue)));
      });
      item.append(children);
      tree.append(item);
    });
    return tree;
  }

  function renderTopicTree(){
    const tree = document.createElement("div");
    tree.className = "region-tree topic-tree";
    topicCatalog().forEach(group => {
      const groupValue = registerTopicFilter("topic-scope:" + group.id, group.title);
      const item = document.createElement("div");
      item.className = "region-tree-group topic-tree-group";

      const parent = filterOptionButton("topic", groupValue, group.title, countEventsForTopicFilter(groupValue));
      parent.classList.add("region-parent", "topic-parent");
      item.append(parent);

      const children = document.createElement("div");
      children.className = "region-children topic-children";
      group.children.forEach(([label], index) => {
        const childValue = registerTopicFilter("topic-scope:" + group.id + ":" + index, label);
        children.append(filterOptionButton("topic", childValue, label, countEventsForTopicFilter(childValue)));
      });
      item.append(children);
      tree.append(item);
    });
    return tree;
  }

  function renderActiveFilters(){
    const container = $("#activeFilters");
    clear(container);
    const active = Object.entries(activeFilters).filter(([, value]) => value);
    $("#filterCount").hidden = active.length === 0;
    $("#filterCount").textContent = String(active.length);
    $("#clearFiltersBtn").hidden = active.length === 0;

    if (!active.length) {
      container.append(textNode("span", "filter-summary", "全部事件"));
      return;
    }

    const labels = {period: "时期", region: "地区", topic: "主题"};
    active.forEach(([type, value]) => {
      const displayValue = type === "region"
        ? (regionFilterLabels.get(value) || value)
        : type === "topic"
          ? (topicFilterLabels.get(value) || value)
          : value;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "active-filter-chip";
      chip.dataset.filterType = type;
      chip.append(
        textNode("span", "", labels[type] + "：" + displayValue),
        textNode("span", "active-filter-remove", "×")
      );
      chip.addEventListener("click", () => {
        activeFilters[type] = "";
        afterFilterChange();
      });
      container.append(chip);
    });
  }

  function updateFilterPanelState(){
    document.querySelectorAll(".filter-option").forEach(button => {
      const type = button.dataset.filterType;
      const value = button.dataset.filterValue;
      button.classList.toggle("active", activeFilters[type] === value);
    });
    const count = filteredEvents().length;
    $("#filterResultCount").textContent = count + " 个匹配事件";
  }

  function afterFilterChange(){
    const events = filteredEvents();
    if (events.length && !events.some(event => event.id === selectedId)) selectedId = events[0].id;
    renderActiveFilters();
    updateFilterPanelState();
    renderAll();
  }

  function filteredEvents(){
    const query = $("#searchInput").value.trim().toLowerCase();
    const {period, region, topic} = activeFilters;

    return data.events.filter(event => {
      const haystack = [
        event.title,
        event.summary,
        event.period,
        ...event.regions,
        ...event.topics,
        ...event.people.map(person => person.name)
      ].join(" ").toLowerCase();
      return (!query || haystack.includes(query))
        && (!period || event.period === period)
        && (!region || eventMatchesRegionFilter(event, region))
        && (!topic || eventMatchesTopicFilter(event, topic));
    });
  }

  function renderTimeline(){
    const list = $("#timelineList");
    clear(list);
    if (timelineMode === "emperors") {
      renderEmperorTimeline(list);
      return;
    }
    const events = filteredEvents();

    if (!events.length) {
      list.append(textNode("div", "empty-state", "没有匹配的事件。"));
      return;
    }

    let lastEra = "";
    events.forEach(event => {
      if (event.era !== lastEra) {
        list.append(textNode("div", "tl-era-label", event.era));
        lastEra = event.era;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "tl-event" + (event.id === selectedId ? " selected" : "");
      button.dataset.id = event.id;
      button.append(
        textNode("span", "tl-year", event.time),
        textNode("span", "tl-title", event.title),
        textNode("span", "tl-tag", event.topics.join(" · "))
      );
      button.addEventListener("click", () => {
        selectEvent(event.id);
      });
      list.append(button);
    });
  }

  function filteredEmperors(){
    const query = $("#searchInput").value.trim().toLowerCase();
    const {period, region, topic} = activeFilters;

    return emperors.filter(emperor => {
      const linkedEvents = emperorEvents(emperor);
      const haystack = [
        emperor.phase,
        emperor.title,
        emperor.name,
        emperor.position,
        emperor.plainText,
        ...(emperor.names || []),
        ...(emperor.keyEvents || []),
        ...linkedEvents.flatMap(event => [event.title, event.summary, event.period, ...event.regions, ...event.topics])
      ].join(" ").toLowerCase();

      return (!query || haystack.includes(query))
        && (!period || linkedEvents.some(event => event.period === period))
        && (!region || linkedEvents.some(event => eventMatchesRegionFilter(event, region)))
        && (!topic || linkedEvents.some(event => eventMatchesTopicFilter(event, topic)));
    });
  }

  function renderEmperorTimeline(list){
    const items = filteredEmperors();
    if (!items.length) {
      list.append(textNode("div", "empty-state", "没有匹配的帝王记录。"));
      return;
    }

    let lastPhase = "";
    items.forEach(emperor => {
      if (emperor.phase !== lastPhase) {
        list.append(textNode("div", "tl-era-label", emperor.phase));
        lastPhase = emperor.phase;
      }

      const linkedEvents = emperorEvents(emperor);
      const active = linkedEvents.some(event => event.id === selectedId);
      const card = document.createElement("article");
      card.className = "tl-emperor" + (active ? " selected" : "");

      const head = document.createElement("div");
      head.className = "tl-emperor-head";
      head.append(
        textNode("span", "tl-emperor-name", emperor.title + " " + emperor.name),
        textNode("span", "tl-emperor-years", emperor.reign)
      );

      const links = document.createElement("div");
      links.className = "tl-emperor-events";
      linkedEvents.forEach(event => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "tl-emperor-event" + (event.id === selectedId ? " selected" : "");
        button.textContent = event.time + " · " + event.title;
        button.addEventListener("click", () => selectEvent(event.id));
        links.append(button);
      });

      card.append(
        head,
        textNode("div", "tl-emperor-position", emperor.position),
        links
      );
      list.append(card);
    });
  }

  function renderEvent(){
    const event = currentEvent();
    const eventEmperors = emperors.filter(emperor => emperor.relatedEventIds.includes(event.id));
    $("#eventTitle").textContent = event.title;
    $("#bookmarkBtn").classList.toggle("bookmarked", bookmarked.has(event.id));
    $("#bookmarkBtn").innerHTML = bookmarked.has(event.id) ? "&#9733; 已收藏" : "&#9734; 收藏";

    const meta = $("#eventMeta");
    clear(meta);
    [
      ["时间", event.time, "amber"],
      ["朝代", event.period, "accent"],
      ["地区", event.regions.join(" / "), ""],
      ["类型", event.topics.join(" · "), ""]
    ].forEach(([label, value, tone]) => {
      const item = textNode("span", "meta-item", "");
      item.append(textNode("span", "meta-label", label), textNode("span", "meta-value " + tone, value));
      meta.append(item);
    });
    const emperorMeta = textNode("span", "meta-item", "");
    emperorMeta.append(
      textNode("span", "meta-label", "在位帝王"),
      textNode("span", "meta-value accent", eventEmperors.map(emperor => emperor.title + " " + emperor.name).join(" / ") || "待关联")
    );
    meta.append(emperorMeta);

    renderPeopleChips(event);
    renderParagraphs($("#backgroundContent"), event.background);
    renderTerritoryPopulation(event);
    renderPoliticalMaps(event);
    renderProcess(event);
    renderParagraphs($("#resultContent"), event.results);
    renderDebates(event);
    renderClaims(event);
    renderSupplementary(event);
    renderNotes(event);
  }

  function renderPeopleChips(event){
    const row = $("#peopleChips");
    clear(row);
    event.people.forEach(person => {
      const chip = document.createElement("div");
      chip.className = "person-chip";
      const dot = textNode("span", "person-dot", "");
      dot.style.background = person.color || "var(--accent-teal)";
      chip.append(dot, textNode("span", "person-name", person.name), textNode("span", "person-role", person.role));
      row.append(chip);
    });
  }

  function renderParagraphs(container, paragraphs){
    clear(container);
    paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      container.append(p);
    });
  }

  function formatEstimateValue(estimate){
    if (!estimate) return "待补";
    if (typeof estimate === "number") return String(estimate);
    if (estimate.value !== undefined) return (estimate.approx ? "约" : "") + String(estimate.value);
    if (estimate.min !== undefined && estimate.max !== undefined) return "约" + String(estimate.min) + "-" + String(estimate.max);
    if (estimate.min !== undefined) return "约" + String(estimate.min) + "以上";
    if (estimate.max !== undefined) return "约" + String(estimate.max) + "以下";
    return "待补";
  }

  function formatHistoricalYear(year){
    if (typeof year !== "number") return String(year || "待补");
    return year < 0 ? "前" + Math.abs(year) : String(year);
  }

  function formatConfidence(confidence){
    return {
      high: "高",
      "medium-high": "较高",
      medium: "中",
      "medium-low": "中低",
      low: "低"
    }[confidence] || confidence || "待核";
  }

  function formatApplicability(applicability){
    return {
      polity: "政权",
      "fragmented-period": "分裂期合计",
      "civilization-zone": "文明圈",
      notApplicable: "不适用",
      missing: "待补"
    }[applicability] || applicability || "待补";
  }

  function formatEstimateType(type){
    return {
      "historical-estimate": "历史估算",
      "aggregate-or-leading-polities": "合计/主导政权估算",
      "civilization-range": "文明范围估算",
      "not-a-single-polity": "非单一政权",
      missing: "待补"
    }[type] || type || "待补";
  }

  function renderTerritoryPopulation(event){
    const container = $("#territoryPopulationContent");
    if (!container) return;
    clear(container);

    const dynasty = (data.dynasties || []).find(item => item.id === event.dynastyId);
    const profile = dynasty?.territoryPopulation || data.territoryPopulation?.[event.dynastyId];
    if (!profile) {
      container.append(textNode("div", "empty-state", "尚未补充该模块的疆域与人口记录。"));
      return;
    }

    if (profile.applicability === "notApplicable") {
      const notice = textNode("div", "territory-note", profile.reason || "该主题不适合记录为单一国家或统一文明的面积、人口。");
      container.append(notice);
      return;
    }

    const meta = document.createElement("div");
    meta.className = "territory-profile-meta";
    meta.append(
      textNode("span", "territory-profile-chip", formatApplicability(profile.applicability)),
      textNode("span", "territory-profile-chip", formatEstimateType(profile.estimateType))
    );
    container.append(meta);

    const note = profile.note || profile.sourceBasis;
    if (note) container.append(textNode("div", "territory-note", note));

    (profile.records || []).forEach(record => {
      const card = document.createElement("article");
      card.className = "territory-card";

      const head = document.createElement("div");
      head.className = "territory-card-head";
      head.append(
        textNode("span", "territory-year", formatHistoricalYear(record.year)),
        textNode("span", "territory-label", record.label || "")
      );

      const metrics = document.createElement("div");
      metrics.className = "territory-metrics";
      [
        ["疆域", formatEstimateValue(record.areaEstimate), record.areaUnit || profile.areaUnit],
        ["人口", formatEstimateValue(record.populationEstimate), record.populationUnit || profile.populationUnit],
        ["置信度", formatConfidence(record.confidence), ""]
      ].forEach(([label, value, unit]) => {
        const metric = document.createElement("span");
        metric.className = "territory-metric";
        metric.append(
          textNode("span", "territory-metric-label", label),
          textNode("span", "territory-metric-value", unit ? value + " " + unit : value)
        );
        metrics.append(metric);
      });

      card.append(head, metrics);
      if (record.note) card.append(textNode("div", "territory-record-note", record.note));
      if (record.sourceBasis) card.append(textNode("div", "territory-source", record.sourceBasis));
      container.append(card);
    });
  }

  function formatMapLayerType(type){
    return {
      "core-admin": "核心行政控制",
      vassal: "稳定附属/边区",
      military: "军事占领/短期控制",
      contested: "争夺/过渡区",
      influence: "影响区/文化圈"
    }[type] || type || "未分类";
  }

  function politicalMapSnapshotsForEvent(event){
    const dynasty = (data.dynasties || []).find(item => item.id === event.dynastyId);
    const profile = dynasty?.politicalMaps || data.politicalMaps?.[event.dynastyId];
    return (profile?.snapshots || []).filter(snapshot => (snapshot.eventIds || []).includes(event.id));
  }

  function renderPoliticalMaps(event){
    const container = $("#politicalMapContent");
    if (!container) return;
    clear(container);

    const snapshots = politicalMapSnapshotsForEvent(event);
    if (!snapshots.length) {
      container.append(textNode("div", "empty-state", "暂无与该事件直接关联的势力范围示意。"));
      return;
    }

    snapshots.forEach(snapshot => {
      const card = document.createElement("article");
      card.className = "political-map-card";

      const head = document.createElement("div");
      head.className = "political-map-head";
      head.append(textNode("div", "political-map-title", snapshot.title));

      const meta = document.createElement("div");
      meta.className = "political-map-meta";
      meta.append(
        textNode("span", "political-map-chip", snapshot.timeRange || snapshot.period || "时期待补"),
        textNode("span", "political-map-chip", "置信度 " + formatConfidence(snapshot.confidence))
      );
      head.append(meta);
      card.append(head);

      if (snapshot.note) card.append(textNode("div", "political-map-note", snapshot.note));
      card.append(renderPoliticalMapReference(snapshot));
      card.append(renderPoliticalMapLegend(snapshot));
      card.append(renderPoliticalMapAreas(snapshot));
      if (snapshot.basis) card.append(textNode("div", "political-map-basis", snapshot.basis));
      container.append(card);
    });
  }

  function renderPoliticalMapReference(snapshot){
    const wrap = document.createElement("figure");
    wrap.className = "political-map-figure political-map-reference-figure";

    const image = document.createElement("img");
    image.className = "political-map-reference-img";
    image.src = snapshot.referenceMap.src;
    image.alt = snapshot.referenceMap.title || (snapshot.title + "参考历史地图");
    image.loading = "lazy";
    image.decoding = "async";
    wrap.append(image);

    const caption = document.createElement("figcaption");
    caption.className = "political-map-attribution";
    const source = document.createElement("a");
    source.href = snapshot.referenceMap.sourceUrl;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = snapshot.referenceMap.sourceTitle || "参考地图来源";
    caption.append(
      textNode("span", "", "参考底图："),
      source,
      textNode("span", "", "；作者：" + (snapshot.referenceMap.author || "待补")),
      textNode("span", "", "；许可：" + (snapshot.referenceMap.license || "待补"))
    );
    if (snapshot.referenceMap.note) {
      caption.append(textNode("span", "political-map-attribution-note", "；" + snapshot.referenceMap.note));
    }
    wrap.append(caption);
    return wrap;
  }

  function renderPoliticalMapLegend(snapshot){
    const legend = document.createElement("div");
    legend.className = "political-map-legend";
    (snapshot.layers || []).forEach(layer => {
      const item = document.createElement("div");
      item.className = "political-map-legend-item";
      const swatch = textNode("span", "political-map-swatch", "");
      swatch.style.background = layer.color || "var(--accent-teal)";
      item.append(swatch, textNode("span", "", layer.label || formatMapLayerType(layer.type)));
      legend.append(item);
    });
    return legend;
  }

  function renderPoliticalMapAreas(snapshot){
    const list = document.createElement("div");
    list.className = "political-map-area-list";
    (snapshot.layers || []).forEach(layer => {
      (layer.areas || []).forEach(area => {
        const row = document.createElement("div");
        row.className = "political-map-area";
        row.append(
          textNode("span", "political-map-area-type", layer.label || formatMapLayerType(layer.type)),
          textNode("span", "political-map-area-name", area.label),
          textNode("span", "political-map-area-note", area.note || layer.note || "")
        );
        list.append(row);
      });
    });
    return list;
  }

  function renderProcess(event){
    const list = $("#processList");
    clear(list);
    event.process.forEach(item => {
      const row = document.createElement("div");
      row.className = "sub-event";
      const body = document.createElement("div");
      body.append(textNode("span", "sub-title", item.title), textNode("span", "sub-desc", item.description));
      row.append(textNode("span", "sub-year", item.time), body);
      list.append(row);
    });
  }

  function renderDebates(event){
    const container = $("#debateContent");
    clear(container);
    event.debates.forEach(debate => {
      const p = document.createElement("p");
      const title = document.createElement("strong");
      title.textContent = debate.view + "：";
      p.append(title, document.createTextNode(debate.content));
      container.append(p);
    });
  }

  function renderClaims(event){
    const container = $("#claimsList");
    clear(container);
    const claims = event.claims || [];
    if (!claims.length) {
      container.append(textNode("div", "empty-state", "这个事件还没有结构化关键判断。"));
      return;
    }

    const sourceById = new Map((event.sources || []).map(source => [source.id, source]));
    claims.forEach(claim => {
      const card = document.createElement("article");
      card.className = "claim-card";

      const head = document.createElement("div");
      head.className = "claim-head";
      head.append(
        textNode("span", "claim-status " + claim.statusType, claim.status),
        textNode("div", "claim-statement", claim.statement)
      );

      const sourceRow = document.createElement("div");
      sourceRow.className = "claim-sources";
      (claim.sourceIds || []).forEach(id => {
        const source = sourceById.get(id);
        sourceRow.append(textNode("span", "claim-source", source ? source.title : id));
      });

      card.append(head, textNode("div", "claim-note", claim.note || ""), sourceRow);
      container.append(card);
    });
  }

  function renderSupplementary(event){
    renderPeopleTab(event);
    renderCausalTab(event);
    renderSourcesTab(event);
    renderCitationsTab(event);
    renderReviewTab(event);
    if (!$("#tab-" + activeTab)) activeTab = "people";
    document.querySelectorAll(".sup-section").forEach(section => section.classList.remove("active"));
    $("#tab-" + activeTab).classList.add("active");
  }

  function renderPeopleTab(event){
    const section = $("#tab-people");
    clear(section);
    event.people.forEach(person => {
      const card = document.createElement("article");
      card.className = "person-card";
      const header = document.createElement("div");
      header.className = "person-header";
      header.append(textNode("span", "person-avatar", person.name.slice(0,1)), textNode("span", "person-name-lg", person.name), textNode("span", "person-years", person.years || ""));
      const tags = document.createElement("div");
      tags.className = "tag-row";
      person.events.forEach(item => tags.append(textNode("span", "small-tag", item)));
      card.append(header, textNode("div", "person-bio", person.bio), tags);
      section.append(card);
    });

    event.relations.forEach(rel => {
      const row = document.createElement("div");
      row.className = "relationship-row";
      row.append(textNode("span", "rel-from", rel.from), textNode("span", "rel-type", rel.type), textNode("span", "rel-to", rel.to));
      section.append(row);
    });
  }

  function renderCausalTab(event){
    const section = $("#tab-causal");
    clear(section);
    event.causalChain.forEach(node => {
      const row = document.createElement("div");
      row.className = "causal-node " + node.kind;
      row.append(textNode("div", "causal-label", node.label), textNode("div", "causal-title", node.title), textNode("div", "causal-desc", node.description));
      section.append(row);
    });
  }

  function renderSourcesTab(event){
    const section = $("#tab-sources");
    clear(section);
    event.sources.forEach(source => {
      const card = document.createElement("article");
      card.className = "source-card";
      const title = source.url ? document.createElement("a") : document.createElement("div");
      title.className = "source-title";
      title.textContent = source.title;
      if (source.url) {
        title.href = source.url;
        title.target = "_blank";
        title.rel = "noreferrer";
      }
      const track = document.createElement("span");
      track.className = "cred-track";
      track.append(textNode("span", "cred-fill " + source.credibilityLevel, ""));
      const cred = document.createElement("div");
      cred.className = "credibility";
      cred.append(textNode("span", "", "可信度"), track, textNode("span", "", source.credibility));
      card.append(
        textNode("span", "source-type", source.type),
        title,
        textNode("div", "source-author", source.author),
        textNode("div", "source-author", source.authorityLevel || ""),
        textNode("div", "source-note", source.note),
        textNode("span", "source-link-status " + (source.url ? "available" : "missing"), source.url ? "已附公开链接" : "公开链接待补"),
        cred
      );
      section.append(card);
    });
  }

  function renderCitationsTab(event){
    const section = $("#tab-citations");
    clear(section);
    const citations = event.citations || [];
    if (!citations.length) {
      section.append(textNode("div", "empty-state", "这个事件还没有精确引用线索。"));
      return;
    }

    const sourceById = new Map((event.sources || []).map(source => [source.id, source]));
    citations.forEach(citation => {
      const source = sourceById.get(citation.sourceId);
      const card = document.createElement("article");
      card.className = "citation-card";
      card.append(
        textNode("div", "citation-ref", citation.reference),
        source && source.url ? sourceLink(source) : textNode("div", "citation-source", source ? source.title : citation.sourceId),
        textNode("div", "citation-plain", citation.plainText || "白话释义待补。"),
        textNode("div", "citation-note", citation.note),
        textNode("span", "citation-status", citation.status)
      );
      section.append(card);
    });
  }

  function renderEmperorsTab(event){
    const section = $("#tab-emperors");
    clear(section);
    if (!emperors.length) {
      section.append(textNode("div", "empty-state", "还没有帝王谱系数据。"));
      return;
    }

    let group = "";
    emperors.forEach(emperor => {
      if (emperor.phase !== group) {
        section.append(textNode("h3", "emperor-group-title", emperor.phase));
        group = emperor.phase;
      }

      const card = document.createElement("article");
      const related = (event.people || []).some(person => emperor.names.includes(person.name))
        || emperor.relatedEventIds.includes(event.id);
      card.className = "emperor-card" + (related ? " active" : "");

      const head = document.createElement("div");
      head.className = "emperor-head";
      head.append(
        textNode("span", "emperor-name", emperor.title + " " + emperor.name),
        textNode("span", "emperor-years", emperor.reign)
      );

      const events = document.createElement("div");
      events.className = "emperor-events";
      const structuredEvents = emperor.relatedEventIds
        .map(id => data.events.find(item => item.id === id))
        .filter(Boolean);
      const structuredEventIds = new Set(structuredEvents.map(item => item.id));
      structuredEvents.forEach(item => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "emperor-event-link" + (item.id === event.id ? " selected" : "");
        button.textContent = item.time + " · " + item.title;
        button.addEventListener("click", () => selectEvent(item.id));
        events.append(button);
      });
      emperor.keyEvents
        .forEach(item => {
          const linkedEvent = findEventByLabel(item);
          if (linkedEvent && !structuredEventIds.has(linkedEvent.id)) {
            structuredEventIds.add(linkedEvent.id);
            const button = document.createElement("button");
            button.type = "button";
            button.className = "emperor-event-link" + (linkedEvent.id === event.id ? " selected" : "");
            button.textContent = linkedEvent.time + " · " + item;
            button.addEventListener("click", () => selectEvent(linkedEvent.id));
            events.append(button);
            return;
          }
          if (!linkedEvent) events.append(textNode("span", "small-tag", item));
        });

      const source = emperor.sourceUrl ? document.createElement("a") : document.createElement("div");
      source.className = "emperor-source";
      source.textContent = emperor.source;
      if (emperor.sourceUrl) {
        source.href = emperor.sourceUrl;
        source.target = "_blank";
        source.rel = "noreferrer";
      }

      card.append(
        head,
        textNode("div", "emperor-position", emperor.position),
        textNode("div", "emperor-event-label", structuredEvents.length ? "已关联时间线事件" : "待升级为事件页的大事"),
        events,
        textNode("div", "citation-plain", emperor.plainText),
        source
      );
      section.append(card);
    });
  }

  function sourceLink(source){
    const link = document.createElement("a");
    link.className = "citation-source";
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.title;
    return link;
  }

  function renderReviewTab(event){
    const section = $("#tab-review");
    clear(section);
    event.reviewQuestions.forEach(item => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "review-card";
      card.append(textNode("span", "review-type", item.type), textNode("div", "review-q", item.question), textNode("div", "review-hint", item.answer));
      card.addEventListener("click", () => card.classList.toggle("revealed"));
      section.append(card);
    });
  }

  function renderNotes(event){
    const eventNotes = notes.get(event.id) || [];
    $("#notesTitle").textContent = "我的笔记 · " + event.title;
    $("#notesCount").textContent = eventNotes.length + " 条笔记";
    const list = $("#notesList");
    clear(list);
    eventNotes.forEach(note => {
      const item = document.createElement("div");
      item.className = "note-item";
      item.append(textNode("span", "note-time", note.time), textNode("div", "note-text", note.text));
      list.append(item);
    });
  }

  function addNote(text){
    const event = currentEvent();
    const eventNotes = notes.get(event.id) || [];
    const now = new Date();
    const time = now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0") + "-" +
      String(now.getDate()).padStart(2, "0") + " " +
      String(now.getHours()).padStart(2, "0") + ":" +
      String(now.getMinutes()).padStart(2, "0");
    eventNotes.push({time, text});
    notes.set(event.id, eventNotes);
    renderNotes(event);
  }

  function bindEvents(){
    $("#searchInput").addEventListener("input", () => {
      afterFilterChange();
    });

    $("#filterToggle").addEventListener("click", () => {
      const panel = $("#filterPanel");
      const isOpen = panel.hidden;
      panel.hidden = !isOpen;
      $("#filterToggle").setAttribute("aria-expanded", String(isOpen));
      if (isOpen) updateFilterPanelState();
    });

    $("#filterPanelClose").addEventListener("click", () => {
      $("#filterPanel").hidden = true;
      $("#filterToggle").setAttribute("aria-expanded", "false");
    });

    $("#clearFiltersBtn").addEventListener("click", () => {
      activeFilters.period = "";
      activeFilters.region = "";
      activeFilters.topic = "";
      afterFilterChange();
      $("#filterPanel").hidden = true;
      $("#filterToggle").setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !$("#filterPanel").hidden) {
        $("#filterPanel").hidden = true;
        $("#filterToggle").setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", event => {
      if ($("#filterPanel").hidden) return;
      if (event.target.closest(".header-filters")) return;
      $("#filterPanel").hidden = true;
      $("#filterToggle").setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".sup-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        activeTab = tab.dataset.tab;
        document.querySelectorAll(".sup-tab").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        renderSupplementary(currentEvent());
      });
    });

    document.querySelectorAll(".timeline-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        timelineMode = tab.dataset.mode;
        document.querySelectorAll(".timeline-tab").forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        renderTimeline();
      });
    });

    $("#notesToggle").addEventListener("click", () => {
      $("#notesToggle").classList.toggle("active");
      $("#notesOverlay").classList.toggle("open");
    });

    $("#noteInput").addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target.value.trim()) {
        addNote(event.target.value.trim());
        event.target.value = "";
      }
    });

    $("#bookmarkBtn").addEventListener("click", () => {
      const id = currentEvent().id;
      bookmarked.has(id) ? bookmarked.delete(id) : bookmarked.add(id);
      renderEvent();
    });

    $("#focusReviewBtn").addEventListener("click", () => {
      activeTab = "review";
      document.querySelectorAll(".sup-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === "review"));
      renderSupplementary(currentEvent());
    });
  }

  function renderAll(){
    renderTimeline();
    renderEvent();
  }

  populateFilters();
  bindEvents();
  renderAll();
})();
