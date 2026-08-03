# 历史数据契约

本文件只描述当前数据结构、字段类型和模块关系。内容选取、写作、史料、地图和验收规则统一见 `data/rules/`。

## 数据入口

- `data/index.js`：汇总各模块并生成 `window.HISTORY_DATA`。
- `data/dynasties/<dynastyId>/metadata.js`：模块元数据。
- `data/dynasties/<dynastyId>/events.js`：事件数组。
- `data/dynasties/<dynastyId>/emperors.js`：统治者索引；分裂时期可使用 rulers 或 polity 索引。
- `data/dynasties/<dynastyId>/sources.js`：模块史料入口。
- `data/topics/*.js`：跨时期和跨文明专题。
- `data/territory-population.js`：疆域人口时间序列。
- `data/political-maps.js`：历史地图快照。

## event

```text
id, dynastyId, dynasty, title, aliases, era, period, time, sortYear, sortOrder, dateLabel,
regions, geoRegion, polityContext, topics, summary, people, relations, background, process,
results, debates, claims, citations, causalChain, sources,
reviewQuestions, notes, topicIds, previousEventIds, nextEventIds
```

`id` 全局唯一；`regions` 保存具体地点，`geoRegion` 保存稳定地理层级，`polityContext` 保存政权语境；`sortYear`、`sortOrder` 和 `dateLabel` 用于时间线排序与显示；`topicIds` 和前后事件字段用于跨模块连接。

## process

```js
{
  time: String,
  title: String,
  description: String,
  participants: String[],
  action: String,
  impact: String
}
```

后三个结构化字段用于新增和重写节点的审计与检索。旧数据允许按批次补齐，不得以缺字段作为新数据模板。

## ruler / emperor

模块索引至少应能表达：`id`、`name`、`names`、`title`、`reign`、`phase`、`position`、`relatedEventIds`、`keyEvents`、`plainText`、`source`、`sourceUrl`。不同文明不强行套用中国皇帝称谓。

## claim / citation / source

- `claim`：`statement`、`status`、`statusType`、`confidence`、`sourceIds`、`note`。
- `citation`：`sourceId`、`reference`、`status`、`plainText`、`note`。
- `source`：`id`、`type`、`title`、`author`、`authorityLevel`、`url`、`credibility`。

## territoryPopulation / politicalMaps

字段契约分别见 `data/territory-population.js` 和 `data/political-maps.js` 的现有对象结构；它们的口径和展示规则见 `data/rules/06-territory-population.md`、`data/rules/07-political-maps.md`。

## 模块关系

朝代模块独立维护，`data/index.js` 只负责汇总。跨朝代关系通过专题、人物、事件前后关系或显式 ID 连接，不能把一个朝代的正文写入另一个朝代文件。
