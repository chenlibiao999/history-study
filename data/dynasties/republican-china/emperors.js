(() => {
  const dynastyId = "republican-china";
  const dynasty = "民国时期";
  const stageIds = new Set(["modern-stage-early-republic", "modern-stage-warlord-revolution"]);
  window.REPUBLICAN_CHINA_EMPERORS = (window.MODERN_CHINA_EMPERORS || [])
    .filter((item) => stageIds.has(item.id))
    .map((item) => ({ ...item, dynastyId, dynasty }));
})();
