(() => {
  const dynastyId = "war-of-resistance";
  const dynasty = "抗日时期";
  const stageIds = new Set(["modern-stage-war-of-resistance"]);
  window.WAR_OF_RESISTANCE_EMPERORS = (window.MODERN_CHINA_EMPERORS || [])
    .filter((item) => stageIds.has(item.id))
    .map((item) => ({ ...item, dynastyId, dynasty }));
})();
