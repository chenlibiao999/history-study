(() => {
  const dynastyId = "shang";
  const ruler = (phase, title, name, reign, eventIds, keyEvents) => ({
    phase,
    title,
    name,
    names: [name, title],
    reign,
    position: `${title}${name}应结合商朝主线事件理解其历史作用。`,
    keyEvents: keyEvents || eventIds,
    relatedEventIds: eventIds,
    plainText: `学习${name}时，重点看其如何影响商朝建国、迁都、王权或商周更替。`,
    source: "《史记·殷本纪》、甲骨文与考古资料，待补公开链接与白话释义",
    sourceUrl: "https://zh.wikisource.org/zh-hans/%E5%8F%B2%E8%A8%98/%E5%8D%B7003",
    dynastyId
  });

  window.SHANG_EMPERORS = [
    ruler("早商建国", "商王", "商汤", "约前1600", ["shang-tang-overthrows-xia"], ["商汤灭夏"]),
    ruler("早商建国", "辅臣", "伊尹", "商汤至太甲时期", ["shang-tang-overthrows-xia"], ["辅商建国"]),
    ruler("早商建国", "商王", "太甲", "约前16世纪", ["shang-yiyin-taijia-regency"], ["伊尹辅政", "太甲复位"]),
    ruler("中商迁徙", "商王", "仲丁", "约前15世纪", ["shang-zhongding-moves-ao"], ["仲丁迁隞"]),
    ruler("中商迁徙", "商王", "河亶甲", "约前15世纪", ["shang-hedanjia-zuyi-relocations"], ["河亶甲居相"]),
    ruler("中商迁徙", "商王", "祖乙", "约前15-前14世纪", ["shang-hedanjia-zuyi-relocations"], ["祖乙迁邢"]),
    ruler("中商迁徙", "商王", "盘庚", "约前14世纪", ["shang-pangeng-moves-yin"], ["盘庚迁殷"]),
    ruler("晚商殷墟", "商王", "武丁", "约前13世纪", ["shang-wuding-prosperity", "shang-oracle-bones", "shang-bronze-ritual-system"], ["武丁中兴", "甲骨文", "青铜礼制"]),
    ruler("晚商殷墟", "王后", "妇好", "武丁时期", ["shang-wuding-prosperity"], ["妇好征伐"]),
    ruler("晚商殷墟", "商王", "祖甲", "约前13世纪后期", ["shang-zujia-reform-debate", "shang-yinxu-city-royal-tombs"], ["祖甲整顿", "殷墟王权"]),
    ruler("商末危机", "商王", "帝辛", "约前11世纪", ["shang-di-xin-crisis", "shang-muye-fall"], ["商末危机", "牧野之战"])
  ];
})();
