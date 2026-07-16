(() => {
  const dynastyId = "war-of-resistance";
  const dynasty = "抗日时期";
  const eras = new Set(["抗日战争"]);
  window.WAR_OF_RESISTANCE_EVENTS = (window.MODERN_CHINA_EVENTS || [])
    .filter((event) => eras.has(event.era))
    .map((event) => ({ ...event, dynastyId, dynasty, period: dynasty }));
})();
