(() => {
  const dynastyId = "reform-opening";
  const dynasty = "改革开放时期";
  const stageIds = new Set(["modern-stage-reform-opening"]);
  window.REFORM_OPENING_EMPERORS = (window.MODERN_CHINA_EMPERORS || [])
    .filter((item) => stageIds.has(item.id))
    .map((item) => ({ ...item, dynastyId, dynasty }));
})();
