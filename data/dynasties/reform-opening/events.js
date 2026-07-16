(() => {
  const dynastyId = "reform-opening";
  const dynasty = "改革开放时期";
  const eras = new Set(["改革开放"]);
  window.REFORM_OPENING_EVENTS = (window.MODERN_CHINA_EVENTS || [])
    .filter((event) => eras.has(event.era))
    .map((event) => ({ ...event, dynastyId, dynasty, period: dynasty }));
})();
