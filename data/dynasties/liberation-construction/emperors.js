(() => {
  const dynastyId = "liberation-construction";
  const dynasty = "解放与建设时期";
  const stageIds = new Set(["modern-stage-civil-war-prc", "modern-stage-construction-twists"]);
  window.LIBERATION_CONSTRUCTION_EMPERORS = (window.MODERN_CHINA_EMPERORS || [])
    .filter((item) => stageIds.has(item.id))
    .map((item) => ({ ...item, dynastyId, dynasty }));
})();
