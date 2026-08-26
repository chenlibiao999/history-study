# 跨朝代事件与史料核验规则

- 跨越政权名称或朝代边界的战争、制度和长期进程，必须按边界拆分为本朝事件；用 `data/topics/` 串联前后阶段。
- 朝代 `metadata` 声明 `startYear` 且 `strictEventStart: true` 时，事件起始年份不得早于该年份。
- 事件标记 `sourceRequirement: "verified"` 时，至少一条 `sources[].url` 必须为 HTTPS 地址，且全部 `citations[].status` 不得含“待核”或“待补”。
- 新增的已核事件默认应使用 `sourceRequirement: "verified"`。存量事件尚未补链时保持未核状态，并由来源覆盖审计单独追踪，不能伪装为已完成。
- 页面必须把无公开链接的史料明确标为“公开链接待补”，不得以不可点击标题暗示链接可用。
