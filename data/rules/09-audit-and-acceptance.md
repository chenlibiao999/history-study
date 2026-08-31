# 审计与验收规则

## AUD-001 必跑检查

每批数据完成后必须运行：

1. `node scripts/validate-history-rules.js`
2. `node scripts/audit-history-coverage.js`
3. `node scripts/audit-history-quality.js`
4. 相关 JS `node --check`
5. `node scripts/audit-rule-documentation.js`
6. `git diff --check`

## AUD-002 结果分级

- 结构错误、重复 ID、来源断链、地图字段错误、疆域人口字段错误：阻断交付。
- `coverageGaps`：当前范围内必须为 0。
- `qualityErrors`：必须为 0。
- `qualityWarnings`：可以按批次暂缓，但验收记录必须说明数量、范围和后续批次。

## AUD-003 经过硬指标

质量审计至少持续追踪：

```text
processDescriptionTooShort
processMissingParticipants
processMissingAction
processMissingImpact
genericProcessTemplate
processLt3
```

新增节点的结构化缺口必须为 0；旧数据缺口按批次消化，不得修改规则掩盖。

## AUD-004 验收记录

每个任务记录使用的规则版本、变更文件、命令输出、残余风险和明确结论。历史任务是快照，不是当前规则来源。

## AUD-005 时间戳契约

- 事件进入运行时数据后，`time` 必须统一为 `前YYYY`、`YYYY`、或两者组成的闭区间，例如 `约前1600-前1401`、`前31-14`、`1912-1949`。
- 不得将世纪、时期、朝代、`以后`、`长期延续`、`总论` 等描述性文字直接作为展示时间戳；这些信息保留在 `sourceTime`、标题或正文中。
- 时间标准化后必须可解析为起止年份；事件列表必须按起始年份非递减排列。校验脚本应阻断无法解析、格式不统一或排序回跳的数据。
