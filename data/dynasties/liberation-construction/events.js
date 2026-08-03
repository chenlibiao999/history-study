(() => {
  const dynastyId = "liberation-construction";
  const dynasty = "解放与建设时期";
  const eras = new Set(["解放战争", "共和国建立", "建设与曲折"]);

  function deriveEvents() {
    return (window.MODERN_CHINA_EVENTS || [])
      .filter((event) => eras.has(event.era))
      .map((event) => ({
        ...event,
        dynastyId,
        dynasty,
        period: dynasty,
        sourceStatus: event.sourceStatus || "由近现代中国主线按阶段拆分复用，公开入口继承原事件"
      }));
  }

  Object.defineProperty(window, "LIBERATION_CONSTRUCTION_EVENTS", {
    configurable: true,
    enumerable: true,
    get: deriveEvents
  });
})();
