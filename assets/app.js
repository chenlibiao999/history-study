(function(){
  const data = window.HISTORY_DATA;
  const events = data.events || [];
  const emperors = data.emperors || window.TANG_EMPERORS || [];
  let selectedId = events[0]?.id;
  let activeTab = "people";
  let timelineMode = "events";
  const TIMELINE_BATCH_SIZE = 180;
  const activeFilters = {period: "", region: "", topic: ""};
  const periodFilterLabels = new Map();
  const regionFilterLabels = new Map();
  const topicFilterLabels = new Map();
  const eventById = new Map(events.map(event => [event.id, event]));
  const eventByLabel = new Map();
  events.forEach(event => {
    eventByLabel.set(event.title, event);
    (event.aliases || []).forEach(alias => eventByLabel.set(alias, event));
  });
  const eventSearchText = new Map(events.map(event => [event.id, [
    event.title,
    event.summary,
    event.period,
    ...(event.regions || []),
    ...(event.topics || []),
    ...((event.people || []).map(person => person.name))
  ].join(" ").toLowerCase()]));
  const regionMatchCache = new Map();
  const periodMatchCache = new Map();
  const topicMatchCache = new Map();
  const filterCountCache = new Map();
  const emperorEventsCache = new Map();
  const emperorSearchTextCache = new Map();
  let cachedRegionCatalog;
  let cachedPeriodCatalog;
  let cachedTopicCatalog;
  let cachedFilterKey = "";
  let cachedFilteredEvents = events;
  const notes = new Map(events.map(event => [event.id, [...(event.notes || [])]]));
  const bookmarked = new Set(events.filter(event => event.bookmarked).map(event => event.id));

  const $ = selector => document.querySelector(selector);

  function displayText(value, fallback = ""){
    if (value === undefined || value === null) return fallback;
    return String(value);
  }

  function currentEvent(){
    return eventById.get(selectedId) || events[0];
  }

  function selectEvent(eventId){
    if (!eventById.has(eventId)) return;
    selectedId = eventId;
    renderAll();
  }

  function eventMatchesLabel(event, label){
    return event.title === label || (event.aliases || []).includes(label);
  }

  function emperorDisplayName(emperor){
    return [emperor.title, emperor.name].filter(Boolean).join(" ") || "未命名人物";
  }

  function emperorPhase(emperor){
    return emperor.phase || emperor.era || emperor.dynasty || "未分期";
  }

  function emperorReign(emperor){
    return emperor.reign || emperor.years || "年代待核";
  }

  function emperorNames(emperor){
    return emperor.names || [emperor.name, emperor.title].filter(Boolean);
  }

  function emperorKeyEvents(emperor){
    return emperor.keyEvents || emperor.tags || [];
  }

  function emperorRelatedEventIds(emperor){
    return emperor.relatedEventIds || [];
  }

  function emperorPosition(emperor){
    return emperor.position || emperor.summary || (emperorDisplayName(emperor) + "应结合相关主线事件理解。");
  }

  function emperorPlainText(emperor){
    return emperor.plainText || emperor.summary || "暂无白话说明。";
  }

  function emperorSource(emperor){
    return emperor.source || "来源待补";
  }

  function emperorSourceUrl(emperor){
    return emperor.sourceUrl || "";
  }

  function findEventByLabel(label){
    // keyEvents may be a title, a true alias, an event ID, or a curated link label.
    // Curated labels stay outside event.aliases so they do not pollute user search.
    return eventByLabel.get(label) || eventById.get(label) || eventById.get(window.LABEL_ALIASES?.[label]);
  }

  function emperorEvents(emperor){
    const cacheKey = [emperor.dynastyId, emperor.title, emperor.name, emperorReign(emperor)].join("::");
    if (emperorEventsCache.has(cacheKey)) return emperorEventsCache.get(cacheKey);
    const found = new Map();
    emperorRelatedEventIds(emperor)
      .map(id => eventById.get(id))
      .filter(Boolean)
      .forEach(event => found.set(event.id, event));
    emperorKeyEvents(emperor)
      .map(findEventByLabel)
      // relatedEventIds is the cross-dynasty contract. Labels may be reused by
      // parallel regional packages, so only use them as a same-dynasty fallback.
      .filter(event => event && event.dynastyId === emperor.dynastyId)
      .forEach(event => found.set(event.id, event));
    const result = [...found.values()];
    emperorEventsCache.set(cacheKey, result);
    return result;
  }

  function textNode(tag, className, text){
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = displayText(text);
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
    return window.HISTORY_FILTER_CATALOG?.regions || [];
  }

  function periodCatalog(){
    return window.HISTORY_FILTER_CATALOG?.periods || [];
  }

  function getPeriodCatalog(){
    if (!cachedPeriodCatalog) cachedPeriodCatalog = periodCatalog();
    return cachedPeriodCatalog;
  }

  function registerPeriodFilter(value, label){
    periodFilterLabels.set(value, label);
    return value;
  }

  function periodFilterTerms(value){
    if (!value) return [];
    const [scope, id, childIndex] = value.split(":");
    if (scope !== "period-scope") return [value];
    const group = getPeriodCatalog().find(item => item.id === id);
    if (!group) return [value];
    if (childIndex !== undefined) return group.children[Number(childIndex)]?.[1] || [value];
    return group.terms;
  }

  function eventMatchesPeriodFilter(event, value){
    if (!value) return true;
    const cacheKey = [event.id, event.period, value].join("::");
    if (periodMatchCache.has(cacheKey)) return periodMatchCache.get(cacheKey);
    const terms = periodFilterTerms(value);
    const result = terms.includes(event.period);
    periodMatchCache.set(cacheKey, result);
    return result;
  }

  function countEventsForPeriodFilter(value){
    return cachedFilterCount("period", value, () => events.filter(event => eventMatchesPeriodFilter(event, value)).length);
  }

  function getRegionCatalog(){
    if (!cachedRegionCatalog) cachedRegionCatalog = regionCatalog();
    return cachedRegionCatalog;
  }

  function registerRegionFilter(value, label){
    regionFilterLabels.set(value, label);
    return value;
  }

  function regionFilterTerms(value){
    if (!value) return [];
    const [scope, id, childIndex] = value.split(":");
    if (scope !== "region-scope") return [value];
    const group = getRegionCatalog().find(item => item.id === id);
    if (!group) return [value];
    if (childIndex !== undefined) return group.children[Number(childIndex)]?.[1] || [value];
    return group.terms;
  }

  function eventMatchesRegionFilter(event, value){
    if (!value) return true;
    const cacheKey = event.id + "::" + value;
    if (regionMatchCache.has(cacheKey)) return regionMatchCache.get(cacheKey);
    const terms = regionFilterTerms(value);
    const result = (event.regions || []).some(region => terms.some(term => region.includes(term) || term.includes(region)));
    regionMatchCache.set(cacheKey, result);
    return result;
  }

  function countEventsForRegionFilter(value){
    return cachedFilterCount("region", value, () => events.filter(event => eventMatchesRegionFilter(event, value)).length);
  }

  function topicCatalog(){
    return window.HISTORY_FILTER_CATALOG?.topics || [];
  }

  function getTopicCatalog(){
    if (!cachedTopicCatalog) cachedTopicCatalog = topicCatalog();
    return cachedTopicCatalog;
  }

  function registerTopicFilter(value, label){
    topicFilterLabels.set(value, label);
    return value;
  }

  function topicFilterTerms(value){
    if (!value) return [];
    const [scope, id, childIndex] = value.split(":");
    if (scope !== "topic-scope") return [value];
    const group = getTopicCatalog().find(item => item.id === id);
    if (!group) return [value];
    if (childIndex !== undefined) return group.children[Number(childIndex)]?.[1] || [value];
    return group.terms;
  }

  function eventMatchesTopicFilter(event, value){
    if (!value) return true;
    const cacheKey = event.id + "::" + value;
    if (topicMatchCache.has(cacheKey)) return topicMatchCache.get(cacheKey);
    const terms = topicFilterTerms(value);
    const haystack = [event.title, event.summary, ...(event.topics || [])].join(" ");
    const result = terms.some(term => haystack.includes(term));
    topicMatchCache.set(cacheKey, result);
    return result;
  }

  function countEventsForTopicFilter(value){
    return cachedFilterCount("topic", value, () => events.filter(event => eventMatchesTopicFilter(event, value)).length);
  }

  function unique(items){
    return [...new Set(items.filter(Boolean))];
  }

  function countEventsForFilter(type, value){
    return cachedFilterCount(type, value, () => events.filter(event => {
      if (type === "period") return eventMatchesPeriodFilter(event, value);
      if (type === "region") return eventMatchesRegionFilter(event, value);
      if (type === "topic") return eventMatchesTopicFilter(event, value);
      return false;
    }).length);
  }

  function cachedFilterCount(type, value, calculator){
    const cacheKey = type + "::" + value;
    if (!filterCountCache.has(cacheKey)) filterCountCache.set(cacheKey, calculator());
    return filterCountCache.get(cacheKey);
  }

  function filterGroups(){
    return [
      {type: "period-tree", title: "历史单元", allLabel: "全部历史单元", values: []},
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
      if (group.type === "period-tree") {
        options.append(filterOptionButton("period", "", group.allLabel, events.length));
        section.append(options, renderPeriodTree());
        panel.append(section);
        return;
      } else if (group.type === "region-tree") {
        options.append(filterOptionButton("region", "", group.allLabel, events.length));
        section.append(options, renderRegionTree());
        panel.append(section);
        return;
      } else if (group.type === "topic-tree") {
        options.append(filterOptionButton("topic", "", group.allLabel, events.length));
        section.append(options, renderTopicTree());
        panel.append(section);
        return;
      } else {
        options.append(filterOptionButton(group.type, "", group.allLabel, events.length));
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
      if (activeFilters[type] === value) return;
      activeFilters[type] = value;
      afterFilterChange();
    });
    return button;
  }

  function renderPeriodTree(){
    const tree = document.createElement("div");
    tree.className = "region-tree period-tree";
    getPeriodCatalog().forEach(group => {
      const groupValue = registerPeriodFilter("period-scope:" + group.id, group.title);
      const item = document.createElement("div");
      item.className = "region-tree-group period-tree-group";

      const parent = filterOptionButton("period", groupValue, group.title, countEventsForPeriodFilter(groupValue));
      parent.classList.add("region-parent", "period-parent");
      item.append(parent);

      const children = document.createElement("div");
      children.className = "region-children period-children";
      group.children.forEach(([label], index) => {
        const childValue = registerPeriodFilter("period-scope:" + group.id + ":" + index, label);
        children.append(filterOptionButton("period", childValue, label, countEventsForPeriodFilter(childValue)));
      });
      item.append(children);
      tree.append(item);
    });
    return tree;
  }

  function renderRegionTree(){
    const tree = document.createElement("div");
    tree.className = "region-tree";
    getRegionCatalog().forEach(group => {
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
    getTopicCatalog().forEach(group => {
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
      const displayValue = type === "period"
        ? (periodFilterLabels.get(value) || value)
        : type === "region"
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

  function updateFilterPanelState(filtered = filteredEvents()){
    document.querySelectorAll(".filter-option").forEach(button => {
      const type = button.dataset.filterType;
      const value = button.dataset.filterValue;
      button.classList.toggle("active", activeFilters[type] === value);
    });
    $("#filterResultCount").textContent = filtered.length + " 个匹配事件";
  }

  function afterFilterChange(){
    const filtered = filteredEvents();
    if (filtered.length && !filtered.some(event => event.id === selectedId)) selectedId = filtered[0].id;
    renderActiveFilters();
    updateFilterPanelState(filtered);
    renderAll({events: filtered});
  }

  function filteredEvents(){
    const query = $("#searchInput").value.trim().toLowerCase();
    const {period, region, topic} = activeFilters;
    const filterKey = [query, period, region, topic].join("\u0001");
    if (filterKey === cachedFilterKey) return cachedFilteredEvents;

    cachedFilterKey = filterKey;
    cachedFilteredEvents = events.filter(event => {
      const haystack = eventSearchText.get(event.id) || "";
      return (!query || haystack.includes(query))
        && (!period || eventMatchesPeriodFilter(event, period))
        && (!region || eventMatchesRegionFilter(event, region))
        && (!topic || eventMatchesTopicFilter(event, topic));
    });
    return cachedFilteredEvents;
  }

  function renderTimeline(precomputedEvents){
    const list = $("#timelineList");
    clear(list);
    list.onscroll = null;
    if (timelineMode === "emperors") {
      renderEmperorTimeline(list);
      return;
    }
    const timelineEvents = precomputedEvents || filteredEvents();

    if (!timelineEvents.length) {
      list.append(textNode("div", "empty-state", "没有匹配的事件。"));
      return;
    }

    const selectedIndex = timelineEvents.findIndex(event => event.id === selectedId);
    const initialBatchSize = selectedIndex >= TIMELINE_BATCH_SIZE ? selectedIndex + 1 : TIMELINE_BATCH_SIZE;
    const state = {index: 0, lastEra: ""};
    const appendNextBatch = (batchSize = TIMELINE_BATCH_SIZE) => {
      appendTimelineBatch(list, timelineEvents, state, batchSize);
      if (state.index >= timelineEvents.length) list.onscroll = null;
    };
    appendNextBatch(initialBatchSize);
    list.onscroll = () => {
      if (list.scrollTop + list.clientHeight >= list.scrollHeight - 180) appendNextBatch();
    };
  }

  function appendTimelineBatch(list, timelineEvents, state, batchSize = TIMELINE_BATCH_SIZE){
    const nextIndex = Math.min(state.index + batchSize, timelineEvents.length);
    for (; state.index < nextIndex; state.index += 1) {
      const event = timelineEvents[state.index];
      if (event.era !== state.lastEra) {
        list.append(textNode("div", "tl-era-label", event.era));
        state.lastEra = event.era;
      }
      list.append(renderTimelineEventButton(event));
    }
  }

  function renderTimelineEventButton(event){
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
    return button;
  }

  function filteredEmperors(){
    const query = $("#searchInput").value.trim().toLowerCase();
    const {period, region, topic} = activeFilters;

    return emperors.filter(emperor => {
      const linkedEvents = emperorEvents(emperor);
      const cacheKey = [emperor.dynastyId, emperor.title, emperor.name, emperorReign(emperor)].join("::");
      if (!emperorSearchTextCache.has(cacheKey)) {
        emperorSearchTextCache.set(cacheKey, [
          emperorPhase(emperor),
          emperor.title,
          emperor.name,
          emperorPosition(emperor),
          emperorPlainText(emperor),
          ...emperorNames(emperor),
          ...emperorKeyEvents(emperor),
          ...linkedEvents.flatMap(event => [event.title, event.summary, event.period, ...(event.regions || []), ...(event.topics || [])])
        ].join(" ").toLowerCase());
      }
      const haystack = emperorSearchTextCache.get(cacheKey);

      return (!query || haystack.includes(query))
        && (!period || linkedEvents.some(event => eventMatchesPeriodFilter(event, period)))
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
      const phase = emperorPhase(emperor);
      if (phase !== lastPhase) {
        list.append(textNode("div", "tl-era-label", phase));
        lastPhase = phase;
      }

      const linkedEvents = emperorEvents(emperor);
      const active = linkedEvents.some(event => event.id === selectedId);
      const card = document.createElement("article");
      card.className = "tl-emperor" + (active ? " selected" : "");

      const head = document.createElement("div");
      head.className = "tl-emperor-head";
      head.append(
        textNode("span", "tl-emperor-name", emperorDisplayName(emperor)),
        textNode("span", "tl-emperor-years", emperorReign(emperor))
      );

      const links = document.createElement("div");
      links.className = "tl-emperor-events";
      linkedEvents.forEach(event => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "tl-emperor-event" + (event.id === selectedId ? " selected" : "");
        button.textContent = displayText(event.time, "时间待核") + " · " + displayText(event.title, "未命名事件");
        button.addEventListener("click", () => selectEvent(event.id));
        links.append(button);
      });

      card.append(
        head,
        textNode("div", "tl-emperor-position", emperorPosition(emperor)),
        links
      );
      list.append(card);
    });
  }

  function renderEvent(){
    const event = currentEvent();
    const isTiered = event.contentPresentation === "tiered";
    const isOutline = isTiered && event.contentLevel === "outline";
    const isCondensed = isTiered && event.contentLevel !== "core";
    const eventEmperors = emperors.filter(emperor => emperorRelatedEventIds(emperor).includes(event.id));
    $("#eventTitle").textContent = displayText(event.title, "未命名事件");
    $("#bookmarkBtn").classList.toggle("bookmarked", bookmarked.has(event.id));
    $("#bookmarkBtn").innerHTML = bookmarked.has(event.id) ? "&#9733; 已收藏" : "&#9734; 收藏";

    const meta = $("#eventMeta");
    clear(meta);
    [
      ["时间", event.time, "amber"],
      ["纪年", event.timeAnchor?.regnal, "amber"],
      ["空间锚", event.spatialAnchor ? `${event.spatialAnchor.coordinate}｜${event.spatialAnchor.admin}` : "", ""],
      ["地形/交通", event.spatialAnchor?.terrainTransport, ""],
      ["朝代", event.period, "accent"],
      ["地区", event.regions.join(" / "), ""],
      ["类型", event.topics.join(" · "), ""],
      ["层级", isOutline ? "索引线索" : event.contentLevel === "core" ? "核心案例" : "主线节点", !isTiered ? "完整内容保留" : ""]
    ].filter(([, value]) => value).forEach(([label, value, tone]) => {
      const item = textNode("span", "meta-item", "");
      item.append(textNode("span", "meta-label", label), textNode("span", "meta-value " + tone, value));
      meta.append(item);
    });
    const emperorMeta = textNode("span", "meta-item", "");
    emperorMeta.append(
      textNode("span", "meta-label", "在位帝王"),
      textNode("span", "meta-value accent", eventEmperors.map(emperorDisplayName).join(" / ") || "待关联")
    );
    meta.append(emperorMeta);

    ["#territoryPopulationContent", "#politicalMapContent", "#processList", "#resultContent", "#debateContent", "#claimsList"]
      .forEach(selector => $(selector).closest(".detail-section").hidden = isCondensed);
    $("#peopleChips").closest(".detail-section").hidden = isOutline;
    $("#backgroundContent").closest(".detail-section").querySelector("h2").textContent = isOutline ? "定位" : isCondensed ? "主线定位" : "背景";
    document.querySelector(".supplementary-panel").hidden = isCondensed;

    renderPeopleChips(event);
    renderBackground(event);
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

  function renderBackground(event){
    const container = $("#backgroundContent");
    clear(container);
    if (event.contentPresentation === "tiered" && event.contentLevel !== "core") {
      container.append(textNode("p", "", event.summary));
      if (event.contentLevel === "mainline") {
        const previous = (event.previousEventIds || []).map(id => events.find(item => item.id === id)?.title).filter(Boolean);
        const next = (event.nextEventIds || []).map(id => events.find(item => item.id === id)?.title).filter(Boolean);
        if (previous.length) container.append(textNode("p", "mainline-link", `承接：${previous.join("；")}`));
        if (next.length) container.append(textNode("p", "mainline-link", `导向：${next.join("；")}`));
      }
      return;
    }
    renderLearningCase(container, event.learningCase);
    renderFactLayer(container, event.factLayer || []);
    (event.background || []).forEach(paragraph => container.append(textNode("p", "", paragraph)));
  }

  function renderFactLayer(container, facts){
    if (!facts.length) return;
    const section = document.createElement("section");
    section.className = "learning-case";
    section.append(textNode("div", "learning-case-label", "[事实层]"));
    const list = document.createElement("div");
    list.className = "learning-case-sections";
    facts.forEach(({ text, sourceId }) => {
      const item = document.createElement("div");
      item.className = "learning-case-section";
      item.append(textNode("p", "", text), textNode("small", "source-ref", `来源：${sourceId}`));
      list.append(item);
    });
    section.append(list);
    container.append(section);
  }

  function renderLearningCase(container, learningCase){
    if (!learningCase) return;
    const section = document.createElement("section");
    section.className = "learning-case";
    section.append(textNode("div", "learning-case-label", learningCase.label || "核心判断"));
    section.append(textNode("p", "learning-case-claim", learningCase.claim));

    const sections = document.createElement("div");
    sections.className = "learning-case-sections";
    (learningCase.sections || []).forEach(([title, content]) => {
      const item = document.createElement("div");
      item.className = "learning-case-section";
      item.append(textNode("strong", "", title), textNode("p", "", content));
      sections.append(item);
    });
    section.append(sections);

    if (learningCase.evidence) {
      const evidence = document.createElement("div");
      evidence.className = "learning-evidence";
      evidence.append(textNode("strong", "", learningCase.evidence.title), textNode("p", "", learningCase.evidence.content));
      section.append(evidence);
    }
    if (learningCase.misconception) section.append(textNode("p", "learning-misconception", `[证据边界] ${learningCase.misconception}`));
    container.append(section);
  }

  function renderParagraphs(container, paragraphs){
    clear(container);
    paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = displayText(paragraph);
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

  function eventStartYear(time){
    const text = String(time || "");
    const bce = text.match(/(?:约)?(?:前|公元前|BC|BCE)\s*(\d{1,4})/i);
    if (bce) return -Number(bce[1]);
    const bceCentury = text.match(/(?:约)?(?:前|公元前)\s*(\d{1,2})世纪/);
    if (bceCentury) return -Number(bceCentury[1]) * 100;
    const ce = text.match(/(\d{3,4})/);
    return ce ? Number(ce[1]) : null;
  }

  function territoryRecordsForEvent(event, profile){
    const year = eventStartYear(event.time);
    if (year === null) return [];
    return (profile.records || [])
      .map(record => ({ record, distance: Math.abs(record.year - year) }))
      .filter(item => item.distance <= 150)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 1)
      .map(item => item.record);
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

    const records = territoryRecordsForEvent(event, profile);
    if (!records.length) {
      container.append(textNode("div", "empty-state", "暂无与当前事件时间和主体直接匹配的疆域与人口记录。"));
      return;
    }

    records.forEach(record => {
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
      const card = document.createElement("details");
      card.className = "political-map-card";
      card.addEventListener("toggle", () => {
        if (card.open && !card.dataset.loaded) {
          renderPoliticalMapExpanded(card, snapshot);
          card.dataset.loaded = "true";
        }
      });

      const head = document.createElement("summary");
      head.className = "political-map-head";
      const titleBlock = document.createElement("div");
      titleBlock.className = "political-map-summary-text";
      titleBlock.append(textNode("div", "political-map-title", snapshot.title));

      const meta = document.createElement("div");
      meta.className = "political-map-meta";
      meta.append(
        textNode("span", "political-map-chip", snapshot.timeRange || snapshot.period || "时期待补"),
        textNode("span", "political-map-chip", "置信度 " + formatConfidence(snapshot.confidence))
      );
      titleBlock.append(meta);
      head.append(titleBlock, renderPoliticalMapPreview(snapshot));
      card.append(head);
      container.append(card);
    });
  }

  function renderPoliticalMapExpanded(card, snapshot){
    const body = document.createElement("div");
    body.className = "political-map-expanded";
    if (snapshot.note) body.append(textNode("div", "political-map-note", snapshot.note));
    body.append(renderPoliticalMapReference(snapshot));
    body.append(renderPoliticalMapLegend(snapshot));
    body.append(renderPoliticalMapAreas(snapshot));
    if (snapshot.basis) body.append(textNode("div", "political-map-basis", snapshot.basis));
    card.append(body);
  }

  function renderPoliticalMapPreview(snapshot){
    const preview = document.createElement("div");
    preview.className = "political-map-preview";
    if (!snapshot.referenceMap?.src) {
      preview.append(textNode("span", "political-map-preview-empty", "地图待补"));
      return preview;
    }
    const image = document.createElement("img");
    image.src = snapshot.referenceMap.src;
    image.alt = snapshot.referenceMap.title || (snapshot.title + "地图预览");
    image.loading = "lazy";
    image.decoding = "async";
    preview.append(image);
    return preview;
  }

  function renderPoliticalMapReference(snapshot){
    const wrap = document.createElement("figure");
    wrap.className = "political-map-figure political-map-reference-figure";

    const image = document.createElement("img");
    image.className = "political-map-reference-img";
    image.src = snapshot.referenceMap?.src || "";
    image.alt = snapshot.referenceMap?.title || (snapshot.title + "参考历史地图");
    image.loading = "lazy";
    image.decoding = "async";
    wrap.append(image);

    const caption = document.createElement("figcaption");
    caption.className = "political-map-attribution";
    const source = document.createElement("a");
    source.href = snapshot.referenceMap?.sourceUrl || "#";
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = displayText(snapshot.referenceMap?.sourceTitle, "参考地图来源");
    caption.append(
      textNode("span", "", "参考底图："),
      source,
      textNode("span", "", "；作者：" + (snapshot.referenceMap?.author || "待补")),
      textNode("span", "", "；许可：" + (snapshot.referenceMap?.license || "待补"))
    );
    if (snapshot.referenceMap?.note) {
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
    const process = event.process || [];
    const isTemplateProcess = process.length === 3 && process.every((item, index) => item.title === ["背景积累", "事件展开", "影响延伸"][index]);
    if (!process.length || isTemplateProcess) {
      list.append(textNode("div", "empty-state", "该条作为主线导航节点，暂不展示未经展开的过程叙事。"));
      return;
    }
    process.forEach(item => {
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
      title.textContent = displayText(debate.view, "观点") + "：";
      p.append(title, document.createTextNode(displayText(debate.content, "内容待补。")));
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
      title.textContent = displayText(source.title, "史料来源");
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
      const phase = emperorPhase(emperor);
      if (phase !== group) {
        section.append(textNode("h3", "emperor-group-title", phase));
        group = phase;
      }

      const card = document.createElement("article");
      const related = (event.people || []).some(person => emperorNames(emperor).includes(person.name))
        || emperorRelatedEventIds(emperor).includes(event.id);
      card.className = "emperor-card" + (related ? " active" : "");

      const head = document.createElement("div");
      head.className = "emperor-head";
      head.append(
        textNode("span", "emperor-name", emperorDisplayName(emperor)),
        textNode("span", "emperor-years", emperorReign(emperor))
      );

      const events = document.createElement("div");
      events.className = "emperor-events";
      const structuredEvents = emperorRelatedEventIds(emperor)
        .map(id => eventById.get(id))
        .filter(Boolean);
      const structuredEventIds = new Set(structuredEvents.map(item => item.id));
      structuredEvents.forEach(item => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "emperor-event-link" + (item.id === event.id ? " selected" : "");
        button.textContent = displayText(item.time, "时间待核") + " · " + displayText(item.title, "未命名事件");
        button.addEventListener("click", () => selectEvent(item.id));
        events.append(button);
      });
      emperorKeyEvents(emperor)
        .forEach(item => {
          const linkedEvent = findEventByLabel(item);
          if (linkedEvent && !structuredEventIds.has(linkedEvent.id)) {
            structuredEventIds.add(linkedEvent.id);
            const button = document.createElement("button");
            button.type = "button";
            button.className = "emperor-event-link" + (linkedEvent.id === event.id ? " selected" : "");
            button.textContent = displayText(linkedEvent.time, "时间待核") + " · " + displayText(item, "未命名事件");
            button.addEventListener("click", () => selectEvent(linkedEvent.id));
            events.append(button);
            return;
          }
          if (!linkedEvent) events.append(textNode("span", "small-tag", item));
        });

      const sourceUrl = emperorSourceUrl(emperor);
      const source = sourceUrl ? document.createElement("a") : document.createElement("div");
      source.className = "emperor-source";
      source.textContent = emperorSource(emperor);
      if (sourceUrl) {
        source.href = sourceUrl;
        source.target = "_blank";
        source.rel = "noreferrer";
      }

      card.append(
        head,
        textNode("div", "emperor-position", emperorPosition(emperor)),
        textNode("div", "emperor-event-label", structuredEvents.length ? "已关联时间线事件" : "待升级为事件页的大事"),
        events,
        textNode("div", "citation-plain", emperorPlainText(emperor)),
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
    link.textContent = displayText(source.title, "史料来源");
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
    $("#notesTitle").textContent = "我的笔记 · " + displayText(event.title, "未命名事件");
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

  function renderAll(options = {}){
    renderTimeline(options.events);
    renderEvent();
  }

  populateFilters();
  bindEvents();
  renderAll();
})();
