(() => {
  function parseTimelineStartYear(timeText) {
    const text = String(timeText || "").replace(/[\s,，]/g, "");
    if (!text) return null;

    // Centuries must be handled before individual years: “前16世纪” is -1600, not -16.
    const bceCenturyRange = text.match(/(?:约)?(?:公元前|前|BC|BCE)(\d{1,2})世纪-(?:公元前|前|BC|BCE)(\d{1,2})世纪/i);
    if (bceCenturyRange) return -Number(bceCenturyRange[1]) * 100;

    const mixedCenturyRange = text.match(/(?:约)?(?:公元前|前|BC|BCE)(\d{1,2})-(?:(?:公元前|前|BC|BCE))?(\d{1,2})世纪/i);
    if (mixedCenturyRange) return -Number(mixedCenturyRange[1]) * 100;

    const ceCenturyRange = text.match(/(?:约)?(\d{1,2})-(\d{1,2})世纪/);
    if (ceCenturyRange) return (Number(ceCenturyRange[1]) - 1) * 100 + 1;

    const numericRange = text.match(/^(?:约)?(?:公元前|前|BC|BCE)?(\d{1,5})(?:年|s)?[-、至]/i);
    if (numericRange) {
      const isBce = /^(?:约)?(?:公元前|前|BC|BCE)/i.test(text);
      return Number(numericRange[1]) * (isBce ? -1 : 1);
    }

    const bceCentury = text.match(/(?:约)?(?:公元前|前|BC|BCE)(\d{1,2})世纪/i);
    if (bceCentury) return -Number(bceCentury[1]) * 100;

    const bceYear = text.match(/(?:约)?(?:公元前|前|BC|BCE)(\d{1,5})/i);
    if (bceYear) return -Number(bceYear[1]);

    const ceYear = text.match(/(?:公元|AD|CE)?(\d{3,5})/i);
    if (ceYear) return Number(ceYear[1]);

    const ceCentury = text.match(/(?:约)?(\d{1,2})世纪/);
    if (ceCentury) return (Number(ceCentury[1]) - 1) * 100 + 1;

    const shortCeYear = text.match(/(?:公元|AD|CE)?(\d{1,2})/i);
    if (shortCeYear) return Number(shortCeYear[1]);

    return null;
  }

  function parseTimelineRange(timeText) {
    const text = String(timeText || "").replace(/[\s,，]/g, "");
    const start = parseTimelineStartYear(text);
    if (start === null) return null;

    const bceCenturyRange = text.match(/(?:公元前|前)(\d{1,2})世纪-(?:公元前|前)(\d{1,2})世纪/i);
    if (bceCenturyRange) {
      return { start, end: -(Number(bceCenturyRange[2]) - 1) * 100 - 1 };
    }

    const bceToCeCenturyRange = text.match(/(?:公元前|前)(\d{1,2})世纪-(\d{1,2})世纪/i);
    if (bceToCeCenturyRange) {
      return { start, end: Number(bceToCeCenturyRange[2]) * 100 };
    }

    const bceCenturyAbbrevRange = text.match(/(?:公元前|前)(\d{1,2})-(?:公元前|前)(\d{1,2})世纪/i);
    if (bceCenturyAbbrevRange) {
      return { start, end: -(Number(bceCenturyAbbrevRange[2]) - 1) * 100 - 1 };
    }

    const bceToCeCenturyAbbrevRange = text.match(/(?:公元前|前)(\d{1,2})-(\d{1,2})世纪/i);
    if (bceToCeCenturyAbbrevRange) {
      return { start, end: Number(bceToCeCenturyAbbrevRange[2]) * 100 };
    }

    const ceCenturyRange = text.match(/(?:约)?(\d{1,2})-(\d{1,2})世纪/);
    if (ceCenturyRange) return { start: (Number(ceCenturyRange[1]) - 1) * 100 + 1, end: Number(ceCenturyRange[2]) * 100 };

    const numericRange = text.match(/(?:公元前|前)?(\d{1,5})(?:年|s)?[-、至](?:公元前|前)?(\d{1,5})(?:年|s)?/i);
    if (numericRange) {
      const secondHasBce = /[-、至](?:公元前|前|BC|BCE)/i.test(text);
      const end = Number(numericRange[2]) * (secondHasBce ? -1 : 1);
      return { start, end };
    }

    const bceCentury = text.match(/(?:约)?(?:公元前|前|BC|BCE)(\d{1,2})世纪/i);
    if (bceCentury) return { start, end: -(Number(bceCentury[1]) - 1) * 100 - 1 };

    const ceCentury = text.match(/(?:约)?(\d{1,2})世纪/);
    if (ceCentury) return { start, end: Number(ceCentury[1]) * 100 };

    return { start, end: start };
  }

  function formatTimelineYear(year) {
    return year < 0 ? `前${Math.abs(year)}` : String(year);
  }

  function formatTimelineTimestamp(timeText) {
    const range = parseTimelineRange(timeText);
    if (!range) return null;
    const prefix = String(timeText || "").trim().startsWith("约") ? "约" : "";
    return prefix + formatTimelineYear(range.start) + (range.end !== range.start ? `-${formatTimelineYear(range.end)}` : "");
  }

  window.HISTORY_TIME = { parseTimelineStartYear, parseTimelineRange, formatTimelineTimestamp };
  if (typeof module === "object" && module.exports) module.exports = window.HISTORY_TIME;
})();
