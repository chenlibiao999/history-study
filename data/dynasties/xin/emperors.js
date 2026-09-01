window.XIN_EMPERORS = [
  {
    "phase": "主线统治者",
    "title": "新始祖",
    "name": "王莽",
    "names": [
      "王莽",
      "新朝新始祖"
    ],
    "reign": "9-23",
    "position": "新朝关键统治者，需结合相关主线事件理解其历史位置。",
    "keyEvents": [
      "xin-wang-mang-usurpation",
      "xin-reforms-land-slavery",
      "xin-currency-chaos",
      "xin-fall-changan"
    ],
    "relatedEventIds": [
      "xin-wang-mang-usurpation",
      "xin-reforms-land-slavery",
      "xin-currency-chaos",
      "xin-fall-changan"
    ],
    "plainText": "读王莽，重点看其如何影响新朝的建国、制度、边疆或亡国主线。",
    "source": "《汉书·王莽传》《资治通鉴》新莽相关纪事，待补公开链接",
    "sourceUrl": "",
    "dynastyId": "xin"
  }
];

(() => {
  const parentByChild = { "xin-currency-chaos": "xin-reforms-land-slavery", "xin-official-title-reforms": "xin-reforms-land-slavery", "xin-frontier-breakdown": "xin-reforms-land-slavery", "xin-greenwood-red-eyebrows": "xin-natural-disasters-famine", "xin-kunyang-battle": "xin-natural-disasters-famine", "xin-fall-changan": "xin-natural-disasters-famine" };
  window.XIN_EMPERORS = window.XIN_EMPERORS.map((item) => ({ ...item, relatedEventIds: [...new Set(item.relatedEventIds.map((id) => parentByChild[id] || id))], keyEvents: [...new Set(item.keyEvents.map((id) => parentByChild[id] || id))] }));
})();
