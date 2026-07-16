(() => {
  const dynastyId = "liberation-construction";
  const dynasty = "解放与建设时期";
  const eras = new Set(["解放战争", "共和国建立", "建设与曲折"]);
  window.LIBERATION_CONSTRUCTION_EVENTS = (window.MODERN_CHINA_EVENTS || [])
    .filter((event) => eras.has(event.era))
    .map((event) => ({ ...event, dynastyId, dynasty, period: dynasty }));
})();
