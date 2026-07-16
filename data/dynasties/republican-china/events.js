(() => {
  const dynastyId = "republican-china";
  const dynasty = "民国时期";
  const eras = new Set(["民国初建", "北洋与国民革命"]);
  window.REPUBLICAN_CHINA_EVENTS = (window.MODERN_CHINA_EVENTS || [])
    .filter((event) => eras.has(event.era))
    .map((event) => ({ ...event, dynastyId, dynasty, period: dynasty }));
})();
