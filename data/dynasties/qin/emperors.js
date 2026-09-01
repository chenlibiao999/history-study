(() => {
  const dynastyId = "qin";
  const ruler = (title, name, reign, eventIds, keyEvents) => ({
    phase: "秦朝统治者",
    title,
    name,
    names: [name, title],
    reign,
    position: `${title}${name}的统治应结合秦朝制度、继承和崩溃主线理解。`,
    keyEvents: keyEvents || eventIds,
    relatedEventIds: eventIds,
    plainText: `学习${name}时，重点看其如何影响秦朝统一制度或秦末崩溃。`,
    source: "《史记》秦相关本纪，待补公开链接与白话释义",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98/%E5%8D%B7006",
    dynastyId
  });

  window.QIN_EMPERORS = [
    ruler("秦始皇", "嬴政", "前221-前210", ["qin-first-emperor-system", "qin-commandery-county", "qin-standardization", "qin-law-and-official-system", "qin-northern-xiongnu-wall", "qin-baiyue-lingnan", "qin-burning-books", "qin-imperial-tours"], ["皇帝制度", "郡县制", "书同文车同轨", "北击匈奴", "南征百越", "焚书坑儒"]),
    ruler("秦二世", "胡亥", "前210-前207", ["qin-shaqiu-coup", "qin-chen-sheng-wu-guang", "qin-zhao-gao-chaos"], ["沙丘之变", "陈胜吴广起义", "赵高专权"]),
    ruler("秦王", "子婴", "前207", ["qin-zhao-gao-chaos", "qin-fall"], ["杀赵高", "出降刘邦"])
  ];
})();

(() => {
  const parentByChild = { "qin-imperial-tours": "qin-first-emperor-system", "qin-law-and-official-system": "qin-commandery-county", "qin-baiyue-lingnan": "qin-northern-xiongnu-wall", "qin-zhao-gao-chaos": "qin-shaqiu-coup", "qin-xiang-liu-rise": "qin-chen-sheng-wu-guang", "qin-julu-battle": "qin-chen-sheng-wu-guang", "qin-fall": "qin-chen-sheng-wu-guang" };
  window.QIN_EMPERORS = window.QIN_EMPERORS.map((item) => ({ ...item, relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentByChild[id] || id))] }));
})();
