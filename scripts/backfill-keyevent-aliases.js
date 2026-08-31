// 回填帝王 keyEvents 失配标签到事件 aliases（数据侧修复）
// 用法：node scripts/backfill-keyevent-aliases.js [--dry-run]
// 幂等：已回填的标签会自动跳过；已打补丁的工厂模块会整体跳过。
const path = require("node:path");
const fs = require("node:fs");
const ROOT = path.join(__dirname, "..");
const DRY = process.argv.includes("--dry-run");

// 1. 从 index.html 提取已接线模块（单一事实源，避免硬编码列表漂移）
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const mods = [...html.matchAll(/dynasties\/([\w-]+)\/metadata\.js/g)].map((m) => m[1]);
if (!mods.length) { console.error("未能从 index.html 解析出模块列表"); process.exit(1); }

// 2. 加载全部已接线数据
global.window = {};
require(path.join(ROOT, "data/time-utils.js"));
for (const d of mods) {
  for (const f of ["metadata.js", "events.js", "emperors.js", "sources.js"]) {
    const p = path.join(ROOT, "data/dynasties", d, f);
    if (fs.existsSync(p)) { try { require(p); } catch (e) { console.error("加载失败", d, f, e.message); } }
  }
}
const all = [], emps = [];
for (const k of Object.keys(global.window)) {
  if (k.endsWith("_EVENTS")) all.push(...global.window[k]);
  if (k.endsWith("_EMPERORS")) emps.push(...global.window[k]);
}
const idSet = new Set(all.map((e) => e.id));
const existingLabels = new Set();
all.forEach((e) => { existingLabels.add(e.title); (e.aliases || []).forEach((a) => existingLabels.add(a)); });
const byDyn = {};
all.forEach((e) => (byDyn[e.dynastyId] = byDyn[e.dynastyId] || []).push(e));

// 3. 计算回填映射：keyEvents 标签 -> 同朝代唯一子串命中事件
const backfill = new Map(); // eventId -> Set(alias)
const skipped = [];
for (const emp of emps) {
  for (const ke of (emp.keyEvents || [])) {
    if (existingLabels.has(ke) || idSet.has(ke)) continue;
    const hits = (byDyn[emp.dynastyId] || []).filter((e) => e.title.includes(ke) || ke.includes(e.title));
    if (hits.length === 1) {
      const ev = hits[0];
      const conflict = all.some((e) => e !== ev && (e.title === ke || (e.aliases || []).includes(ke)));
      if (!conflict) {
        if (!backfill.has(ev.id)) backfill.set(ev.id, new Set());
        backfill.get(ev.id).add(ke);
      } else skipped.push("标签冲突|" + ke);
    } else if (hits.length > 1) {
      skipped.push("多命中|" + ke + "->" + hits.map((h) => h.id).join(","));
    }
  }
}
if (!backfill.size) { console.log("无需回填（全部标签已可解析）。"); process.exit(0); }

// 按模块分组，附带事件当前 aliases（用于合并重建）
const byModule = {};
for (const [id, aliases] of backfill) {
  const ev = all.find((e) => e.id === id);
  (byModule[ev.dynastyId] = byModule[ev.dynastyId] || []).push({ id, aliases: [...aliases], current: ev.aliases || [] });
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const idPattern = /^\s*("id"|id):\s*"[^"]+"\s*,?\s*$/;
const aliasesPattern = /^(\s*)("?)aliases\2:\s*\[/;
const titlePattern = /^(\s*)("?)title\2:\s*"/;
const aliasArrayLiteral = /aliases:\s*\[\s*\]/;

function arrayLiteral(items, quoted) {
  const body = items.map((a) => JSON.stringify(a)).join(", ");
  return (quoted ? '"aliases": ' : "aliases: ") + "[" + body + "]";
}

// 单事件定位 + 编辑（适用于 item 对象式与直接对象式）
function patchEvent(lines, id, newAliases, currentAliases) {
  const idRe = new RegExp('^\\s*("id"|id):\\s*"' + escapeRe(id) + '"\\s*,?\\s*$');
  let anchor = -1;
  for (let i = 0; i < lines.length; i++) {
    if (idRe.test(lines[i])) { anchor = i; break; }
  }
  if (anchor < 0) return { error: "未找到 id 行: " + id };
  let firstAliases = -1, firstTitle = -1;
  for (let i = anchor + 1; i < Math.min(lines.length, anchor + 200); i++) {
    if (idPattern.test(lines[i])) break; // 撞到下一个事件的 id（或嵌套 id），窗口终止
    if (firstAliases < 0 && aliasesPattern.test(lines[i])) firstAliases = i;
    if (firstTitle < 0 && titlePattern.test(lines[i])) firstTitle = i;
    if (firstAliases >= 0 && firstTitle >= 0) break;
  }
  if (firstAliases >= 0) {
    // 合并/重建现有 aliases 数组（支持单行与多行）
    const m = lines[firstAliases].match(aliasesPattern);
    const indent = m[1], quoted = !!m[2];
    let end = firstAliases;
    if (!/\][^\]]*\]?\s*,?\s*$/.test(lines[firstAliases].replace(/^.*\[/, "[")) || !lines[firstAliases].includes("]")) {
      while (end < lines.length && !lines[end].includes("]")) end++;
      if (end >= lines.length) return { error: "aliases 数组未闭合: " + id };
    }
    const merged = [...new Set([...currentAliases, ...newAliases])];
    lines.splice(firstAliases, end - firstAliases + 1, indent + arrayLiteral(merged, quoted) + ",");
    return { ok: true };
  }
  if (firstTitle >= 0) {
    const m = lines[firstTitle].match(titlePattern);
    const indent = m[1], quoted = !!m[2];
    lines.splice(firstTitle + 1, 0, indent + arrayLiteral(newAliases, quoted) + ",");
    return { ok: true };
  }
  return { error: "锚点定位失败（未找到 title/aliases 行）: " + id };
}

let totalEdits = 0;
const moduleReports = [];
for (const [mod, events] of Object.entries(byModule)) {
  const file = path.join(ROOT, "data/dynasties", mod, "events.js");
  const src = fs.readFileSync(file, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  const trailing = /\n$/.test(src);
  let lines = src.split(/\r\n|\n/);
  if (trailing) lines.pop(); // 末尾空元素

  const isFactoryStyle = /const event = \(id,/.test(src) && aliasArrayLiteral.test(src) && !/event\(\{/.test(src);
  const isShorthandFactory = /rows\.map\(\(\[id, title/.test(src);
  let report = { mod, count: events.length, ok: 0, fail: [] };

  if ((isFactoryStyle || isShorthandFactory) && src.includes("const eventAliases")) {
    report.skip = "工厂模块已打过补丁，跳过";
    moduleReports.push(report);
    continue;
  }

  if (isFactoryStyle) {
    // 策略C：位置参数工厂，注入 eventAliases 映射表并把 aliases: [] 改为查表
    const occurrences = (src.match(new RegExp(aliasArrayLiteral, "g")) || []).length;
    if (occurrences !== 1) {
      report.fail.push("aliases: [] 出现 " + occurrences + " 次（预期 1），跳过模块");
      moduleReports.push(report);
      continue;
    }
    const entries = events.map((e) => "    " + JSON.stringify(e.id) + ": " + JSON.stringify([...new Set([...e.current, ...e.aliases])])).join(",\n");
    const block = ["  // keyEvents 别名回填：由 scripts/backfill-keyevent-aliases.js 生成，勿手工改动格式", "  const eventAliases = {", entries, "  };"];
    const insertAt = lines.findIndex((l) => l === "(() => {");
    if (insertAt < 0) { report.fail.push("未找到 IIFE 起始行"); moduleReports.push(report); continue; }
    lines.splice(insertAt + 1, 0, ...block);
    const idx = lines.findIndex((l) => aliasArrayLiteral.test(l));
    lines[idx] = lines[idx].replace(aliasArrayLiteral, "aliases: eventAliases[id] || []");
    report.ok = events.length;
  } else if (isShorthandFactory) {
    // 策略D：rows.map + 解构简写 item（如 bronze-age-collapse），无字面量 id 可锚定，
    // 改为在 window.<VAR>_EVENTS 赋值语句后追加 forEach 回填。
    const entries = events.map((e) => "    " + JSON.stringify(e.id) + ": " + JSON.stringify([...new Set([...e.current, ...e.aliases])])).join(",\n");
    const block = ["  // keyEvents 别名回填：由 scripts/backfill-keyevent-aliases.js 生成，勿手工改动格式", "  const eventAliases = {", entries, "  };"];
    const insertAt = lines.findIndex((l) => l === "(() => {");
    if (insertAt < 0) { report.fail.push("未找到 IIFE 起始行"); moduleReports.push(report); continue; }
    const assignIdx = lines.findIndex((l) => /_EVENTS = rows\.map\(/.test(l));
    if (assignIdx < 0) { report.fail.push("未找到 rows.map 赋值行"); moduleReports.push(report); continue; }
    let stmtEnd = assignIdx;
    while (stmtEnd < lines.length && !lines[stmtEnd].includes("}));")) stmtEnd++;
    if (stmtEnd >= lines.length) { report.fail.push("rows.map 语句未闭合"); moduleReports.push(report); continue; }
    const globalVar = (lines[assignIdx].match(/window\.(\w+_EVENTS)/) || [])[1];
    if (!globalVar) { report.fail.push("未解析到全局变量名"); moduleReports.push(report); continue; }
    lines.splice(insertAt + 1, 0, ...block);
    // block 插入在 stmtEnd 之前，语句结束行索引需平移 block.length
    lines.splice(stmtEnd + block.length + 1, 0, "  window." + globalVar + ".forEach((item) => { if (eventAliases[item.id]) item.aliases = eventAliases[item.id]; });");
    report.ok = events.length;
  } else {
    // 策略A/B：逐事件插入或合并
    for (const e of events) {
      const r = patchEvent(lines, e.id, e.aliases, e.current);
      if (r.ok) report.ok++; else report.fail.push(r.error);
    }
  }

  if (report.fail.length === 0 && report.ok > 0) {
    const out = lines.join(eol) + (trailing ? eol : "");
    if (!DRY) fs.writeFileSync(file, out, "utf8");
    totalEdits += report.ok;
  } else if (report.ok > 0) {
    report.note = "存在失败项，整个模块未写入";
  }
  moduleReports.push(report);
}

// 4. 写后验证：清缓存重载，确认每个标签确实可解析
if (!DRY) {
  for (const [mod] of Object.entries(byModule)) {
    const file = path.join(ROOT, "data/dynasties", mod, "events.js");
    delete require.cache[require.resolve(file)];
    require(file);
  }
  let resolved = 0, unresolved = [];
  for (const [id, aliases] of backfill) {
    const evs = [];
    for (const k of Object.keys(global.window)) if (k.endsWith("_EVENTS")) evs.push(...global.window[k]);
    const ev = evs.find((e) => e.id === id);
    if (ev && aliases.size && [...aliases].every((a) => (ev.aliases || []).includes(a))) resolved++;
    else unresolved.push(id);
  }
  console.log("验证：回填生效事件 " + resolved + "/" + backfill.size);
  if (unresolved.length) { console.log("未生效:", unresolved.join(", ")); process.exit(1); }
}

console.log("回填完成：共 " + totalEdits + " 个事件" + (DRY ? "（dry-run，未写入）" : ""));
for (const r of moduleReports) {
  console.log("  " + r.mod.padEnd(30) + " ok:" + r.ok + "/" + r.count + (r.skip ? " [" + r.skip + "]" : "") + (r.note ? " [" + r.note + "]" : ""));
  r.fail.forEach((f) => console.log("    ✗ " + f));
}
if (skipped.length) { console.log("跳过标签 " + skipped.length + " 个:"); skipped.forEach((s) => console.log("  " + s)); }
