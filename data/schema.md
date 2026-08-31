# 历史数据结构说明

正式规则入口：[data/rules/00-index.md](rules/00-index.md)。数据字段、展示格式与验收流程均以该规则目录为准。

当前为了支持直接双击打开 `index.html`，数据放在按模块拆分的 JS 文件中，并由 `data/index.js` 汇总为 `window.HISTORY_DATA`。

字段结构后续可以一比一迁移到 JSON 或数据库。

## event

- `id`: 事件唯一标识，用短横线英文。
- `title`: 事件标题。
- `aliases`: 事件别名，用于把帝王页标签映射到同一事件。
- `era`: 时间线分组，例如初唐、盛唐、中唐、晚唐。
- `period`: 朝代或阶段。
- `time`: 展示用时间。
- `regions`: 地区数组，用于筛选。
- `topics`: 主题数组，用于筛选。
- `summary`: 一句话概括。
- `people`: 相关人物卡片。
- `relations`: 人物关系。
- `background`: 背景段落数组。
- `process`: 过程节点，也就是大事件内部的小事件。
- `results`: 结果与影响段落数组。
- `debates`: 不同观点或争议点。
- `claims`: 关键判断，每条判断绑定来源、确定性、争议状态。
- `citations`: 精确引用或引用线索。
- `causalChain`: 因果链节点。
- `sources`: 史料和研究来源。
- `reviewQuestions`: 复习题。
- `notes`: 用户笔记示例。

事件和帝王的关系以 `TANG_EMPERORS[].relatedEventIds` 为准。一个事件可以关联多个帝王，一个帝王也可以关联多个事件。

## process 写作规则

`process` 是大事件内部的“小事件”或“经过节点”，不能只写一句过短提示。每个节点必须讲清楚：谁参与、发生了什么、为什么这个节点会改变局势或推动下一步。

- 每个 `process[].description` 通常写 1 到 2 句，约 45 到 120 个汉字。
- 不写百科式铺陈，不展开无关支线，但必须让初学者读完能理解这个节点的历史作用。
- 描述要优先说明因果和转折，例如这一步如何导致权力转移、制度变化、战局变化、财政变化或政权兴亡。
- 如果节点本身信息量很大，可以拆成多个 `process` 节点，而不是把所有内容塞进一个长段落。
- 未核准的细节不要写成确定事实；可以在 `citations.status` 标为 `待核原文`，并在白话释义里保持谨慎。

## emperor

帝王数据放在 `data/dynasties/<dynastyId>/emperors.js` 中，并由 `data/index.js` 汇总。

- `phase`: 所在阶段，用于分组。
- `title`: 庙号、谥号或阶段称呼。
- `name`: 姓名。
- `names`: 可匹配的别名，用于和事件人物关联。
- `reign`: 在位时间。
- `position`: 主线定位。
- `keyEvents`: 与该皇帝有关的大事标签。标签必须能匹配到已汇总事件的标题或 `aliases`。
- `relatedEventIds`: 已升级为完整事件页的事件 ID。
- `plainText`: 白话阅读提示。
- `source`: 史料入口说明。
- `sourceUrl`: 公开链接，暂缺时留空。

## claim

- `statement`: 具体判断，必须能被证据支持或反驳。
- `status`: 展示用状态，例如 `较稳妥`、`有争议`、`待细化`。
- `statusType`: 样式状态，当前支持 `stable`、`disputed`、`tentative`。
- `confidence`: 内部置信度，建议用 `high`、`medium`、`low`。
- `sourceIds`: 绑定 `sources[].id`。
- `note`: 为什么这样判断，或后续还缺什么证据。

## citation

- `sourceId`: 绑定 `sources[].id`。
- `reference`: 卷、章、页码或待查位置。
- `status`: `待核原文`、`待核卷次`、`已核验` 等。
- `plainText`: 白话释义。古籍引用必须先写这项，不能只给纯原文。
- `note`: 这条引用支撑什么判断，还缺什么。

## 规则池

详细执行规则见 `data/rules/00-index.md`。后续扩充朝代内容时，先按规则池整理，再运行 `scripts/validate-history-rules.js` 自检。

## territoryPopulation

国家、王朝、统一政权、分裂时期合计、文明圈主体都必须有 `territoryPopulation`。数据集中维护在 `data/territory-population.js`，并由 `data/index.js` 挂到每个 `dynasty` 上。

- `applicability`: `polity`、`fragmented-period`、`civilization-zone` 或 `notApplicable`。
- `estimateType`: 估算口径，如 `historical-estimate`、`aggregate-or-leading-polities`、`civilization-range`、`not-a-single-polity`。
- `areaUnit`: 固定为 `万平方公里`。
- `populationUnit`: 固定为 `万人`。
- `records[]`: 时间序列节点。适用对象至少 1 条，建议 2 到 4 条关键节点。
- `records[].year`: 数字年份，公元前用负数。
- `records[].label`: 节点名称。
- `records[].areaEstimate`: `{ value, approx: true }` 或 `{ min, max }`。
- `records[].populationEstimate`: `{ value, approx: true }` 或 `{ min, max }`。
- `records[].confidence`: 只能是 `high`、`medium-high`、`medium`、`medium-low`、`low`。
- `records[].sourceBasis`: 来源口径概述。
- `records[].note`: 白话说明，必须解释估算口径和限制。

跨区域专题、跨文明过程、纯专题线索不能伪造总面积或总人口，应使用 `notApplicable` 并写明原因。

## 覆盖原则

当前阶段只做大主线和大事件，在精不在多，在准不在错。

- 帝王索引层覆盖唐朝皇帝和武周阶段。
- 每位皇帝至少要有一个大事索引。
- 核心大事件不设数量上限，有多少就逐步收多少。
- 事件详情页负责重点解释，不强行把每个皇帝膨胀成百科。
- 没有公开权威链接时，先标记“待补公开链接”，不伪装成已核验。

来源优先级：

1. 公开古籍文本，如《资治通鉴》、两唐书等可公开访问版本。
2. 正史和权威整理文本，优先补公开链接、卷次、章节。
3. 权威研究，必须补作者、书名/论文名、出版社或期刊、页码；未补齐前只作“待补”，不支撑强判断。
4. 官方通识课程或视频，只做入门框架，不支撑争议性结论。
5. 野史、营销号、无出处二手文章，当前阶段不录入。


## 朝代拆分结构

后续不同朝代必须拆到独立目录，避免互相污染：

- `data/dynasties/<dynastyId>/metadata.js`: 朝代范围、阶段和说明。
- `data/dynasties/<dynastyId>/events.js`: 本朝大事件。
- `data/dynasties/<dynastyId>/emperors.js`: 本朝帝王索引。
- `data/dynasties/<dynastyId>/sources.js`: 本朝常用史料入口和来源规则。
- `data/topics/*.js`: 跨朝代专题，例如科举制、府兵制、赋税制度。
- `data/index.js`: 汇总入口，只负责合并数据，不承载具体史实。

事件必须带 `dynastyId`。跨朝代关系通过 `topicIds`、`previousEventIds`、`nextEventIds` 或专题文件串联，不能把隋朝事件写入唐朝文件。

## politicalMaps

参考历史地图集中维护在 `data/political-maps.js`，并由 `data/index.js` 挂到每个 `dynasty.politicalMaps` 与 `window.HISTORY_DATA.politicalMaps` 上。地图只允许使用公开、可追溯、可授权的现成历史地图；本项目不再自绘抽象势力范围图。

- `profile.dynastyId`: 对应朝代、王国、文明或时期模块的 `dynastyId`。
- `profile.title`: 地图组标题。
- `profile.mapPolicy`: 地图策略，当前固定为 `reference-map-only`。
- `profile.note`: 本地图组的总说明，必须说明只展示已绑定可靠参考底图的时期。
- `profile.snapshots[]`: 时期快照数组。
- `snapshot.id`: 快照唯一 ID。
- `snapshot.dynastyId`: 必须与 profile key 一致。
- `snapshot.title`: 快照标题。
- `snapshot.period`: 时期口径，例如 `9世纪中期`。
- `snapshot.timeRange`: 展示用时间范围，例如 `843以后`、`约800-814`。
- `snapshot.eventIds`: 与此快照直接相关的事件 ID。事件页只展示包含当前事件 ID 的快照。
- `snapshot.basis`: 来源口径说明，写清使用主流历史地图集、通史教材、考古/历史学界通行观点等，不写成精确测绘。
- `snapshot.confidence`: 只能是 `high`、`medium-high`、`medium`、`medium-low`、`low`。
- `snapshot.note`: 白话说明，解释原图阅读口径、哪些地方不能过度理解。
- `snapshot.referenceMap`: 必填。用于绑定现成历史地图或学术制图作为参考底图，必须包含 `src`、`title`、`sourceTitle`、`sourceUrl`、`author`、`license`、`note`。
- `snapshot.layers[]`: 势力范围图层。推荐顺序为 `core-admin`、`vassal`、`military`、`contested`、`influence`。
- `layer.type`: 只能是 `core-admin`、`vassal`、`military`、`contested`、`influence`。
- `layer.label`: 图例显示名。
- `layer.color`: `#RRGGBB` 格式颜色。
- `layer.note`: 本图层口径说明。
- `layer.areas[]`: 图层下的具体区域。
- `area.label`: 区域名。
- `area.note`: 区域白话说明，必须解释控制性质或限制。

图层语义：

- `core-admin`: 核心行政控制区，优先级最高，表示相对稳定的实际政治和行政控制。
- `vassal`: 稳定附属、边区或藩属性控制，强度低于核心行政区。
- `military`: 军事占领、驻军、短期控制或据点控制，不等同完整行政统治。
- `contested`: 争夺区、过渡区或归属变化较快的区域。
- `influence`: 文化、宗教、制度、贸易或政治影响区，不等同领土。
