(() => {
  const areaUnit = "万平方公里";
  const populationUnit = "万人";

  function estimate(year, label, area, population, confidence, sourceBasis, note) {
    return {
      year,
      label,
      areaEstimate: area,
      areaUnit,
      populationEstimate: population,
      populationUnit,
      confidence,
      sourceBasis,
      note
    };
  }

  function polity(records, note, sourceBasis) {
    return {
      applicability: "polity",
      estimateType: "historical-estimate",
      areaUnit,
      populationUnit,
      sourceBasis,
      note,
      records
    };
  }

  function fragmented(records, note, sourceBasis) {
    return {
      applicability: "fragmented-period",
      estimateType: "aggregate-or-leading-polities",
      areaUnit,
      populationUnit,
      sourceBasis,
      note,
      records
    };
  }

  function civilization(records, note, sourceBasis) {
    return {
      applicability: "civilization-zone",
      estimateType: "civilization-range",
      areaUnit,
      populationUnit,
      sourceBasis,
      note,
      records
    };
  }

  function notApplicable(reason) {
    return {
      applicability: "notApplicable",
      estimateType: "not-a-single-polity",
      areaUnit,
      populationUnit,
      reason,
      records: []
    };
  }

  const chineseDynastyBasis = "中国历史地图集、历代户籍/人口研究、葛剑雄《中国人口史》、Maddison Project 等综合估算；古代疆域按有效控制或传统极盛疆域近似。";
  const modernChinaBasis = "中华民国/中华人民共和国现代统计、人口普查与通用国土面积口径；战争时期按名义疆域和有效控制区分说明。";
  const ancientWorldBasis = "历史地图集、考古综合研究、Maddison 古代人口估算、博物馆/大学公开资料；古代文明区面积和人口均为近似区间。";

  window.TERRITORY_POPULATION_DATA = {
    shang: polity([
      estimate(-1600, "商早期势力形成", { value: 80, approx: true }, { min: 300, max: 600 }, "low", chineseDynastyBasis, "早商疆域和人口高度不确定，只能按黄河中下游核心影响区估算。"),
      estimate(-1300, "盘庚迁殷后", { value: 120, approx: true }, { min: 500, max: 900 }, "low", chineseDynastyBasis, "按殷商核心控制区、方国体系和考古聚落规模近似。"),
      estimate(-1046, "商末", { value: 150, approx: true }, { min: 700, max: 1200 }, "low", chineseDynastyBasis, "商末方国网络广，但有效行政控制不能按后世郡县制理解。")
    ], "商不是后世中央郡县国家，面积更接近核心控制区加方国影响范围。", chineseDynastyBasis),

    "western-zhou": polity([
      estimate(-1046, "西周建国与分封", { value: 180, approx: true }, { min: 900, max: 1400 }, "low", chineseDynastyBasis, "按宗周、成周和主要封国网络估算。"),
      estimate(-900, "成康以后封国体系扩展", { value: 250, approx: true }, { min: 1100, max: 1800 }, "low", chineseDynastyBasis, "分封影响范围扩大，但王室直接控制有限。"),
      estimate(-771, "西周末", { value: 220, approx: true }, { min: 1000, max: 1600 }, "low", chineseDynastyBasis, "王畿权威下降，面积不宜理解为统一行政疆域。")
    ], "西周以王畿加封国体系为主，记录为政治文化共同体范围估算。", chineseDynastyBasis),

    "spring-autumn-warring-states": fragmented([
      estimate(-770, "春秋初期诸侯并立", { value: 250, approx: true }, { min: 1500, max: 2200 }, "low", chineseDynastyBasis, "按华夏诸侯和周边互动区合计估算。"),
      estimate(-350, "战国中期七雄格局", { value: 320, approx: true }, { min: 2500, max: 3500 }, "medium-low", chineseDynastyBasis, "按主要战国政权合计，不代表单一国家。"),
      estimate(-221, "秦统一前夕", { value: 350, approx: true }, { min: 3000, max: 4000 }, "medium-low", chineseDynastyBasis, "接近秦统一前六国和秦国合计人口空间。")
    ], "春秋战国不是统一国家，记录为主要诸侯/战国政权合计估算。", chineseDynastyBasis),

    qin: polity([
      estimate(-221, "秦统一六国", { value: 340, approx: true }, { min: 2500, max: 3000 }, "medium-low", chineseDynastyBasis, "按秦完成统一后的传统疆域估算。"),
      estimate(-214, "北击匈奴、南征百越后", { value: 360, approx: true }, { min: 2500, max: 3200 }, "medium-low", chineseDynastyBasis, "南北边疆扩张明显，但部分地区控制强度有限。")
    ], "秦面积和人口均为短期统一帝国估算，户籍与实际人口有差异。", chineseDynastyBasis),

    "western-han": polity([
      estimate(-202, "西汉初年", { value: 300, approx: true }, { min: 1500, max: 2000 }, "medium-low", chineseDynastyBasis, "战后人口恢复期，户籍不完整。"),
      estimate(-60, "汉宣帝前后极盛", { value: 609, approx: true }, { min: 4500, max: 5500 }, "medium", chineseDynastyBasis, "西域都护设立后疆域达到高峰。"),
      estimate(2, "平帝元始二年户籍", { value: 550, approx: true }, { value: 5959, approx: true }, "medium-high", chineseDynastyBasis, "人口接近《汉书》户籍统计口径，实际人口仍可能有漏口。")
    ], "西汉有较清楚户籍节点，但边疆面积按有效控制和羁縻差异有争议。", chineseDynastyBasis),

    xin: polity([
      estimate(9, "王莽代汉初", { value: 550, approx: true }, { min: 5500, max: 6000 }, "medium", chineseDynastyBasis, "基本承接西汉末疆域人口。"),
      estimate(23, "新末崩溃", { value: 300, approx: true }, { min: 2500, max: 4000 }, "low", chineseDynastyBasis, "战乱导致户籍和实际控制剧烈收缩。")
    ], "新朝时间短，后期数字只能作崩溃趋势估算。", chineseDynastyBasis),

    "eastern-han": polity([
      estimate(57, "光武中兴后", { value: 420, approx: true }, { min: 3500, max: 4500 }, "medium-low", chineseDynastyBasis, "统一恢复后仍有边疆收缩。"),
      estimate(105, "和帝前后", { value: 470, approx: true }, { min: 5000, max: 5500 }, "medium", chineseDynastyBasis, "户籍恢复明显。"),
      estimate(157, "桓帝永寿年间", { value: 480, approx: true }, { value: 5648, approx: true }, "medium-high", chineseDynastyBasis, "接近东汉户籍高点。"),
      estimate(220, "东汉末", { value: 250, approx: true }, { min: 2000, max: 3500 }, "low", chineseDynastyBasis, "军阀割据和人口流亡导致户籍大幅失真。")
    ], "东汉中后期户籍相对清楚，汉末只能估趋势。", chineseDynastyBasis),

    "late-han-three-kingdoms": fragmented([
      estimate(220, "三国鼎立初期", { value: 350, approx: true }, { min: 2500, max: 3500 }, "low", chineseDynastyBasis, "魏蜀吴合计，户籍远低于实际人口。"),
      estimate(263, "蜀亡前后", { value: 330, approx: true }, { min: 2300, max: 3200 }, "low", chineseDynastyBasis, "三国长期战争下人口统计不稳定。"),
      estimate(280, "西晋统一前夕", { value: 350, approx: true }, { min: 3000, max: 4000 }, "medium-low", chineseDynastyBasis, "接近重新统一前的合计估算。")
    ], "汉末三国是分裂时期，记录为魏蜀吴合计估算，不代表单一国家。", chineseDynastyBasis),

    "northern-southern": fragmented([
      estimate(317, "东晋十六国并立", { value: 420, approx: true }, { min: 2500, max: 3500 }, "low", chineseDynastyBasis, "多政权并立，北方户籍破碎。"),
      estimate(439, "北魏统一北方", { value: 480, approx: true }, { min: 3500, max: 5000 }, "medium-low", chineseDynastyBasis, "北魏与南朝合计估算。"),
      estimate(589, "隋统一前夕", { value: 430, approx: true }, { min: 4500, max: 5500 }, "medium-low", chineseDynastyBasis, "南北朝末向统一过渡。")
    ], "魏晋南北朝不是单一国家，面积人口按主要政权合计。", chineseDynastyBasis),

    sui: polity([
      estimate(589, "隋灭陈统一", { value: 420, approx: true }, { min: 4000, max: 5000 }, "medium", chineseDynastyBasis, "统一初期人口逐步清查。"),
      estimate(609, "大业五年前后极盛", { value: 467, approx: true }, { value: 4600, approx: true }, "medium-high", chineseDynastyBasis, "户籍接近隋代高点，面积按传统极盛估算。"),
      estimate(618, "隋末战乱", { value: 200, approx: true }, { min: 2500, max: 3500 }, "low", chineseDynastyBasis, "实际控制和人口登记迅速崩解。")
    ], "隋短暂统一，609年前后最适合作为高点。", chineseDynastyBasis),

    tang: polity([
      estimate(630, "贞观初统一恢复", { value: 500, approx: true }, { min: 2500, max: 3500 }, "medium-low", chineseDynastyBasis, "唐初人口仍在恢复。"),
      estimate(669, "高宗时期极盛疆域", { value: 1076, approx: true }, { min: 3800, max: 5000 }, "medium", chineseDynastyBasis, "含西域、安西、北方羁縻等，控制强度差异很大。"),
      estimate(755, "天宝前后人口高点", { value: 890, approx: true }, { min: 7000, max: 8000 }, "medium", chineseDynastyBasis, "户籍约五千余万，实际人口常估更高。"),
      estimate(907, "唐末", { value: 300, approx: true }, { min: 3000, max: 5000 }, "low", chineseDynastyBasis, "藩镇割据下不再是有效统一疆域。")
    ], "唐的极盛面积包含羁縻和军事控制区，人口高点与面积高点不完全同年。", chineseDynastyBasis),

    "five-dynasties-ten-kingdoms": fragmented([
      estimate(923, "后唐相对扩张", { value: 220, approx: true }, { min: 2500, max: 3500 }, "low", chineseDynastyBasis, "五代与十国合计，非单一国家。"),
      estimate(951, "后周与南方诸国并立", { value: 300, approx: true }, { min: 3000, max: 4500 }, "low", chineseDynastyBasis, "北方五代与南方十国合计估算。"),
      estimate(979, "北宋统一前夕", { value: 300, approx: true }, { min: 3500, max: 5000 }, "medium-low", chineseDynastyBasis, "进入宋初重新整合。")
    ], "五代十国是分裂时期，只记录合计估算和主导政权范围。", chineseDynastyBasis),

    "northern-song": polity([
      estimate(976, "宋初统一中原南方", { value: 260, approx: true }, { min: 4500, max: 6000 }, "medium-low", chineseDynastyBasis, "未控制燕云、河西和辽夏地区。"),
      estimate(1100, "北宋人口经济高点", { value: 280, approx: true }, { min: 10000, max: 12000 }, "medium", chineseDynastyBasis, "户口与实际人口估算差异较大，但总体超过唐。"),
      estimate(1127, "靖康前后", { value: 220, approx: true }, { min: 9000, max: 11000 }, "medium-low", chineseDynastyBasis, "北方失陷前夕估算。")
    ], "北宋面积小于汉唐，但人口和经济高度集中。", chineseDynastyBasis),

    "southern-song": polity([
      estimate(1141, "绍兴和议后", { value: 200, approx: true }, { min: 6000, max: 7500 }, "medium-low", chineseDynastyBasis, "淮河-大散关以南为主。"),
      estimate(1200, "南宋经济人口高点", { value: 200, approx: true }, { min: 7500, max: 8500 }, "medium", chineseDynastyBasis, "江南人口密度高。"),
      estimate(1279, "南宋灭亡", { value: 80, approx: true }, { min: 5000, max: 7000 }, "low", chineseDynastyBasis, "后期有效控制急剧压缩。")
    ], "南宋是偏安政权，面积小但人口密集。", chineseDynastyBasis),

    liao: polity([
      estimate(947, "辽取得燕云后", { value: 350, approx: true }, { min: 500, max: 800 }, "low", chineseDynastyBasis, "包括草原、东北和燕云农耕区，人口估算难度大。"),
      estimate(1000, "辽圣宗前后", { value: 489, approx: true }, { min: 700, max: 1000 }, "low", chineseDynastyBasis, "面积常按极盛传统估算。"),
      estimate(1125, "辽亡前", { value: 150, approx: true }, { min: 300, max: 600 }, "low", chineseDynastyBasis, "金朝兴起后急剧收缩。")
    ], "辽兼具游牧和农耕区域，人口估算低置信度。", chineseDynastyBasis),

    "western-xia": polity([
      estimate(1038, "西夏建国", { value: 70, approx: true }, { min: 150, max: 250 }, "low", chineseDynastyBasis, "河西、宁夏、陕北部分区域。"),
      estimate(1100, "西夏稳定期", { value: 80, approx: true }, { min: 250, max: 350 }, "low", chineseDynastyBasis, "人口包含党项、汉、吐蕃、回鹘等。"),
      estimate(1227, "西夏灭亡", { value: 40, approx: true }, { min: 100, max: 250 }, "low", chineseDynastyBasis, "蒙古战争下估算很不稳定。")
    ], "西夏人口资料有限，均为粗略区间。", chineseDynastyBasis),

    jin: polity([
      estimate(1127, "金灭北宋后", { value: 300, approx: true }, { min: 3500, max: 4500 }, "medium-low", chineseDynastyBasis, "控制华北、东北与部分草原。"),
      estimate(1200, "金章宗前后", { value: 361, approx: true }, { min: 4500, max: 5500 }, "medium", chineseDynastyBasis, "华北户籍较完整。"),
      estimate(1234, "金亡前", { value: 80, approx: true }, { min: 1500, max: 2500 }, "low", chineseDynastyBasis, "蒙古和南宋夹击下有效控制收缩。")
    ], "金面积和人口需与南宋、西夏、蒙古并列理解。", chineseDynastyBasis),

    mongol: polity([
      estimate(1206, "蒙古帝国建立", { value: 400, approx: true }, { min: 100, max: 200 }, "low", chineseDynastyBasis, "草原本部人口少，面积按草原联盟影响范围估。"),
      estimate(1259, "蒙哥时期极盛前后", { value: 2400, approx: true }, { min: 7000, max: 11000 }, "medium-low", chineseDynastyBasis, "世界帝国面积巨大，人口含多区域征服地。"),
      estimate(1271, "元建立前后", { value: 1800, approx: true }, { min: 8000, max: 12000 }, "medium-low", chineseDynastyBasis, "帝国分裂趋势下，忽必烈控制区需与四大汗国区分。")
    ], "蒙古帝国面积通常按世界帝国极盛估算，和元朝本部不同。", chineseDynastyBasis),

    yuan: polity([
      estimate(1279, "元灭南宋统一", { value: 1372, approx: true }, { min: 7500, max: 9000 }, "medium-low", chineseDynastyBasis, "含青藏、蒙古高原、云南等辽阔区域。"),
      estimate(1290, "元世祖后期", { value: 1372, approx: true }, { min: 8500, max: 9500 }, "medium-low", chineseDynastyBasis, "人口统计有户等制度差异。"),
      estimate(1368, "元末", { value: 600, approx: true }, { min: 5000, max: 7000 }, "low", chineseDynastyBasis, "红巾军和明军压力下有效控制收缩。")
    ], "元朝面积大，人口估算受统计制度和战争影响。", chineseDynastyBasis),

    ming: polity([
      estimate(1382, "洪武统一后", { value: 350, approx: true }, { min: 5500, max: 7000 }, "medium", chineseDynastyBasis, "明初户籍和里甲重建。"),
      estimate(1420, "永乐前后", { value: 650, approx: true }, { min: 6500, max: 8000 }, "medium-low", chineseDynastyBasis, "含东北、西南羁縻和军事影响区，实际控制强度不一。"),
      estimate(1600, "晚明人口高点", { value: 350, approx: true }, { min: 15000, max: 18000 }, "medium-low", chineseDynastyBasis, "人口估算争议较大，常高于官方户籍。"),
      estimate(1644, "明亡前", { value: 250, approx: true }, { min: 10000, max: 15000 }, "low", chineseDynastyBasis, "战乱、灾荒和割据导致统计失真。")
    ], "明人口实际数通常显著高于官方黄册户口。", chineseDynastyBasis),

    qing: polity([
      estimate(1644, "清入关", { value: 350, approx: true }, { min: 12000, max: 15000 }, "medium-low", chineseDynastyBasis, "入关初有效控制仍在扩展。"),
      estimate(1759, "乾隆平定准噶尔后极盛", { value: 1316, approx: true }, { min: 20000, max: 25000 }, "medium", chineseDynastyBasis, "新疆、西藏、蒙古、东北等纳入帝国版图。"),
      estimate(1820, "嘉庆道光前后人口高点", { value: 1316, approx: true }, { min: 38000, max: 41000 }, "medium-high", chineseDynastyBasis, "人口接近四亿级。"),
      estimate(1911, "清末", { value: 1135, approx: true }, { min: 40000, max: 43000 }, "medium", chineseDynastyBasis, "外蒙古、西藏等边疆实际控制复杂。")
    ], "清代后期人口数据相对明确，边疆有效控制和现代国界不可简单等同。", chineseDynastyBasis),

    "republican-china": polity([
      estimate(1912, "中华民国成立", { value: 1140, approx: true }, { min: 40000, max: 43000 }, "medium", modernChinaBasis, "名义继承清末版图，实际控制受军阀和边疆政治影响。"),
      estimate(1936, "南京国民政府十年建设前后", { value: 960, approx: true }, { min: 46000, max: 50000 }, "medium", modernChinaBasis, "有效控制和名义疆域需区分。"),
      estimate(1949, "内战结束前后", { value: 960, approx: true }, { min: 50000, max: 55000 }, "medium", modernChinaBasis, "人口接近五亿级，政权控制迅速变化。")
    ], "民国需区分名义疆域、实际控制和国际承认。", modernChinaBasis),

    "war-of-resistance": fragmented([
      estimate(1937, "全面抗战爆发", { value: 960, approx: true }, { min: 47000, max: 50000 }, "medium", modernChinaBasis, "按中国名义疆域和战前人口估算。"),
      estimate(1940, "相持阶段", { min: 300, max: 500 }, { min: 45000, max: 50000 }, "low", modernChinaBasis, "日占区、国统区、敌后根据地交错，单一有效面积意义有限。"),
      estimate(1945, "抗战胜利", { value: 960, approx: true }, { min: 50000, max: 52000 }, "medium", modernChinaBasis, "恢复名义主权范围，东北等地接收过程复杂。")
    ], "抗战时期是战争控制格局，记录名义疆域和大致人口，不代表单一稳定行政控制。", modernChinaBasis),

    "liberation-construction": polity([
      estimate(1949, "中华人民共和国成立", { value: 960, approx: true }, { min: 54000, max: 55000 }, "medium-high", modernChinaBasis, "现代国土面积按约960万平方公里口径。"),
      estimate(1953, "第一次人口普查", { value: 960, approx: true }, { value: 59435, approx: true }, "high", modernChinaBasis, "人口普查数据口径。"),
      estimate(1978, "改革开放前夕", { value: 960, approx: true }, { value: 96259, approx: true }, "high", modernChinaBasis, "现代统计口径。")
    ], "1949-1978 为中华人民共和国建设时期，面积按现代国土口径。", modernChinaBasis),

    "reform-opening": polity([
      estimate(1982, "第三次人口普查", { value: 960, approx: true }, { value: 100818, approx: true }, "high", modernChinaBasis, "人口普查数据口径。"),
      estimate(2000, "第五次人口普查", { value: 960, approx: true }, { value: 126743, approx: true }, "high", modernChinaBasis, "人口普查数据口径。"),
      estimate(2020, "第七次人口普查", { value: 960, approx: true }, { value: 141178, approx: true }, "high", modernChinaBasis, "人口普查数据口径。")
    ], "改革开放时期面积稳定，人口采用现代普查。", modernChinaBasis),

    "modern-china": polity([
      estimate(1840, "近代开端", { value: 1300, approx: true }, { min: 40000, max: 43000 }, "medium", modernChinaBasis, "清代疆域和人口口径。"),
      estimate(1912, "民国成立", { value: 1140, approx: true }, { min: 40000, max: 43000 }, "medium", modernChinaBasis, "名义继承清末。"),
      estimate(1949, "中华人民共和国成立", { value: 960, approx: true }, { min: 54000, max: 55000 }, "medium-high", modernChinaBasis, "现代国土口径。")
    ], "近现代总包若参与聚合，可用此跨时期口径。", modernChinaBasis),

    "ancient-egypt": civilization([
      estimate(-3100, "上下埃及统一", { value: 8, approx: true }, { min: 100, max: 200 }, "low", ancientWorldBasis, "以尼罗河谷和三角洲可耕居住带为核心。"),
      estimate(-2500, "古王国金字塔时代", { value: 10, approx: true }, { min: 150, max: 250 }, "low", ancientWorldBasis, "人口和控制区按尼罗河核心区估算。"),
      estimate(-1450, "新王国帝国扩张", { min: 30, max: 50 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "含努比亚和黎凡特影响区，直接控制与贡赋区需区分。"),
      estimate(-1250, "拉美西斯二世前后", { min: 30, max: 45 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "埃及本土加外部附庸影响区。"),
      estimate(-300, "托勒密埃及", { value: 10, approx: true }, { min: 400, max: 700 }, "medium-low", ancientWorldBasis, "主要按埃及本土和尼罗河财政区估算。")
    ], "古埃及人口估算差异较大；面积更适合按尼罗河本土和帝国影响区分开看。", ancientWorldBasis),

    "african-world": civilization([
      estimate(-700, "库施与古典北非并行", { min: 80, max: 180 }, { min: 300, max: 900 }, "low", ancientWorldBasis, "按库施、迦太基及北非主要政治文化区合计估算，不代表一个统一政权。"),
      estimate(400, "罗马非洲、阿克苏姆和撒哈拉边缘", { min: 150, max: 300 }, { min: 800, max: 1800 }, "low", ancientWorldBasis, "按北非行省、阿克苏姆和撒哈拉边缘主要网络估算，许多区域没有连续行政统计。"),
      estimate(1325, "马里、斯瓦希里和埃塞俄比亚并立", { min: 250, max: 500 }, { min: 1500, max: 3000 }, "low", ancientWorldBasis, "按西非帝国、东非海岸和东北非高原主要政权合计估算，贸易影响区不等于直接控制区。"),
      estimate(1500, "桑海、大津巴布韦余波与刚果王国", { min: 300, max: 600 }, { min: 2500, max: 5000 }, "low", ancientWorldBasis, "按西非、东南非和中非主要国家及贸易区估算，非洲大陆仍高度多中心。"),
      estimate(1900, "殖民瓜分后的非洲", { min: 2800, max: 3000 }, { min: 12000, max: 16000 }, "medium-low", ancientWorldBasis, "接近非洲大陆殖民地和少数独立国家合计口径，但边界是殖民行政结果。"),
      estimate(1963, "独立浪潮与非洲统一组织", { min: 2800, max: 3000 }, { min: 28000, max: 32000 }, "medium-low", ancientWorldBasis, "按非洲大陆国家和殖民地过渡期合计估算，人口统计质量随国家差异很大。")
    ], "非洲主体模块是多区域文明与国家形成的合计口径，面积人口用于展示大陆主要政治文化网络变迁，不代表单一连续国家。", ancientWorldBasis),

    "americas-world": civilization([
      estimate(-1500, "农业村落和区域中心并行", { min: 300, max: 800 }, { min: 500, max: 1500 }, "low", ancientWorldBasis, "按美洲主要农业和聚落区域合计估算，狩猎采集与农业社会并存。"),
      estimate(800, "玛雅、特奥蒂瓦坎和安第斯区域国家", { min: 400, max: 900 }, { min: 1500, max: 3000 }, "low", ancientWorldBasis, "按中美洲与安第斯主要文明区估算，非全美洲统一政治体。"),
      estimate(1500, "阿兹特克、印加和北美诸社会", { min: 600, max: 1200 }, { min: 4000, max: 6000 }, "low", ancientWorldBasis, "按前哥伦布时期主要文明和人口中心估算，区域差异极大。"),
      estimate(1700, "殖民美洲", { min: 3000, max: 4200 }, { min: 1200, max: 2500 }, "medium-low", ancientWorldBasis, "按欧洲殖民地和原住民社会合计估算，疾病导致人口结构剧变。"),
      estimate(1850, "独立后美洲国家", { min: 4000, max: 4200 }, { min: 6000, max: 8000 }, "medium-low", ancientWorldBasis, "按美洲大陆和主要岛屿国家合计估算，边疆控制和原住民主权问题仍复杂。")
    ], "美洲模块记录为大陆文明区、殖民区或独立国家合计口径，必须区分原住民政治体、殖民边界和现代国家。", ancientWorldBasis),

    "oceania-world": civilization([
      estimate(-3000, "澳大利亚原住民与早期岛屿社会", { min: 800, max: 900 }, { min: 50, max: 150 }, "low", ancientWorldBasis, "按澳大利亚大陆和部分岛屿人群分布估算，不代表统一政权。"),
      estimate(1000, "拉皮塔后太平洋航海网络", { min: 850, max: 900 }, { min: 100, max: 300 }, "low", ancientWorldBasis, "面积为大陆和岛屿宽口径，人口分散在澳大利亚、新几内亚和太平洋群岛。"),
      estimate(1800, "欧洲接触前后大洋洲", { min: 850, max: 900 }, { min: 250, max: 500 }, "low", ancientWorldBasis, "按澳大利亚、新西兰、太平洋岛屿和新几内亚主要人口区估算。"),
      estimate(1900, "殖民大洋洲", { min: 850, max: 900 }, { min: 600, max: 900 }, "medium-low", ancientWorldBasis, "按殖民行政区和本地社会合计估算，原住民人口和边界统计存在严重殖民偏差。"),
      estimate(1975, "现代大洋洲国家与自治领地", { min: 850, max: 900 }, { min: 2200, max: 2800 }, "medium", modernChinaBasis, "按澳大利亚、新西兰、巴布亚新几内亚和太平洋国家/领地合计估算。")
    ], "大洋洲模块是大陆和岛屿世界合计口径，面积人口不能视为单一国家，也不能忽略原住民主权和殖民统计偏差。", ancientWorldBasis),

    "ancient-near-east": civilization([
      estimate(-8000, "新石器新月沃地", { min: 20, max: 60 }, { min: 50, max: 150 }, "low", ancientWorldBasis, "按古代西亚核心帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-2250, "阿卡德帝国影响区", { min: 30, max: 80 }, { min: 150, max: 300 }, "low", ancientWorldBasis, "按古代西亚核心帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-1750, "古巴比伦核心区", { min: 10, max: 25 }, { min: 100, max: 250 }, "low", ancientWorldBasis, "按古代西亚核心帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-1300, "赫梯与近东强权并立", { min: 80, max: 150 }, { min: 300, max: 700 }, "low", ancientWorldBasis, "按古代西亚核心帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-700, "新亚述帝国高峰", { min: 120, max: 180 }, { min: 500, max: 1000 }, "medium-low", ancientWorldBasis, "按古代西亚核心帝国阶段性核心范围估算，不能等同现代国界。")
    ], "古代西亚核心帝国为学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "roman-republic": civilization([
      estimate(-500, "早期罗马", { min: 0.1, max: 1 }, { min: 10, max: 50 }, "low", ancientWorldBasis, "按罗马共和国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-264, "意大利联盟", { min: 20, max: 30 }, { min: 300, max: 500 }, "medium-low", ancientWorldBasis, "按罗马共和国阶段性核心范围估算，不能等同现代国界。"),
      estimate(-31, "共和国地中海行省", { min: 180, max: 250 }, { min: 2500, max: 4000 }, "medium-low", ancientWorldBasis, "按罗马共和国阶段性核心范围估算，不能等同现代国界。")
    ], "罗马共和国为学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "roman-empire": civilization([
      estimate(117, "图拉真最大疆域", { value: 500, approx: true }, { min: 5000, max: 7000 }, "medium", ancientWorldBasis, "按罗马帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(395, "东西分治", { min: 350, max: 450 }, { min: 4000, max: 6000 }, "medium-low", ancientWorldBasis, "按罗马帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(476, "西部终结前", { min: 120, max: 220 }, { min: 2500, max: 4000 }, "low", ancientWorldBasis, "按罗马帝国阶段性核心范围估算，不能等同现代国界。")
    ], "罗马帝国为学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "byzantium": civilization([
      estimate(565, "查士丁尼高峰", { min: 250, max: 350 }, { min: 2500, max: 3500 }, "medium-low", ancientWorldBasis, "按拜占庭帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(1025, "马其顿王朝核心", { min: 80, max: 120 }, { min: 1000, max: 1800 }, "medium-low", ancientWorldBasis, "按拜占庭帝国阶段性核心范围估算，不能等同现代国界。"),
      estimate(1400, "晚期残存领地", { min: 1, max: 5 }, { min: 50, max: 120 }, "low", ancientWorldBasis, "按拜占庭帝国阶段性核心范围估算，不能等同现代国界。")
    ], "拜占庭帝国为学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "sumer-early-mesopotamia": civilization([
      estimate(-3500, "乌鲁克城市化", { min: 3, max: 8 }, { min: 50, max: 150 }, "low", ancientWorldBasis, "南两河城市化核心区。"),
      estimate(-2500, "早王朝城邦", { min: 5, max: 12 }, { min: 80, max: 200 }, "low", ancientWorldBasis, "苏美尔诸城邦合计估算。"),
      estimate(-2250, "阿卡德帝国", { min: 30, max: 80 }, { min: 150, max: 300 }, "low", ancientWorldBasis, "阿卡德影响区扩展到叙利亚、埃兰方向，控制强度差异大。"),
      estimate(-2050, "乌尔第三王朝", { min: 20, max: 40 }, { min: 120, max: 250 }, "low", ancientWorldBasis, "两河核心官僚国家估算。")
    ], "苏美尔不是单一持续国家，记录文明区和阶段性霸权范围。", ancientWorldBasis),

    japan: polity([
      estimate(250, "邪马台国与大和王权前夜", { value: 5, approx: true }, { min: 30, max: 80 }, "low", ancientWorldBasis, "仅按列岛主要农业聚落和区域首长国的有效控制范围近似，不能等同现代日本国土。"),
      estimate(600, "古坟时代大和王权扩张", { value: 12, approx: true }, { min: 100, max: 200 }, "low", ancientWorldBasis, "按近畿、濑户内海和主要农业区的政治整合范围估算，地方豪族仍保有较强自主性。"),
      estimate(710, "平城京与律令国家", { value: 25, approx: true }, { min: 300, max: 500 }, "medium-low", ancientWorldBasis, "以本州、四国、九州的主要行政控制区近似，东北和北海道不按后世全国疆域计算。"),
      estimate(1200, "镰仓幕府的主要控制区", { value: 30, approx: true }, { min: 500, max: 800 }, "medium-low", ancientWorldBasis, "按朝廷与幕府共同秩序下的主要农耕区估算，虾夷和边缘地区控制强度较低。"),
      estimate(1600, "战国统一完成前后", { value: 34, approx: true }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "按日本主要岛屿的实际政治整合范围估算，琉球、虾夷和海外据点不并入本条。"),
      estimate(1720, "德川幕府人口高峰期", { value: 38, approx: true }, { min: 2500, max: 3300 }, "medium", ancientWorldBasis, "人口按江户时代宗门人别改帐等统计与现代历史人口研究的区间估算，面积为列岛本土近似。")
    ], "日本列岛可作为单一历史政治主体记录，但古代和中世必须区分名义范围、实际控制区与边缘区域；琉球、虾夷和海外关系另行说明。", ancientWorldBasis),

    "korean-peninsula": fragmented([
      estimate(300, "三国早期主要政权合计", { value: 18, approx: true }, { min: 150, max: 300 }, "low", ancientWorldBasis, "高句丽、百济、新罗和伽倻主要农业区合计，不能视为单一国家疆域。"),
      estimate(600, "三国竞争后期", { value: 28, approx: true }, { min: 250, max: 450 }, "low", ancientWorldBasis, "按三国主要有效控制区合计，辽东、海岛和边缘附属区不按同一口径并入。"),
      estimate(750, "统一新罗与渤海并立", { value: 42, approx: true }, { min: 350, max: 600 }, "medium-low", ancientWorldBasis, "南北两个政权分别估算后合计，渤海北部范围和人口存在较大研究差异。"),
      estimate(1000, "高丽统一半岛中南部", { value: 22, approx: true }, { min: 250, max: 450 }, "medium-low", ancientWorldBasis, "按高丽核心控制区估算，北部边界和女真活动区不按稳定行政控制计算。"),
      estimate(1200, "高丽中期", { value: 25, approx: true }, { min: 350, max: 600 }, "medium-low", ancientWorldBasis, "人口受战争、户籍漏报和农耕区范围影响，使用区间而非单点。"),
      estimate(1450, "朝鲜王朝前期", { value: 23, approx: true }, { min: 500, max: 800 }, "medium-low", ancientWorldBasis, "按朝鲜八道主要行政区和当时人口研究估算，东北边地控制强度另行说明。"),
      estimate(1700, "朝鲜王朝后期", { value: 24, approx: true }, { min: 1000, max: 1500 }, "medium-low", ancientWorldBasis, "按朝鲜王朝本土人口研究区间估算，不把清朝、明朝或日本的影响区算入。")
    ], "朝鲜半岛模块包含古代分裂时期和后来的统一政权，因此疆域人口采用主要政权合计与核心控制区口径，并在每条记录中说明边界。", ancientWorldBasis),

    "south-asia": civilization([
      estimate(-2500, "印度河城市文明成熟期", { min: 80, max: 120 }, { min: 100, max: 500 }, "low", ancientWorldBasis, "按哈拉帕、摩亨佐-达罗及相关城市网络的核心分布区估算，不等同整个南亚次大陆。"),
      estimate(-500, "十六大国与恒河城市化", { min: 60, max: 120 }, { min: 1500, max: 2500 }, "low", ancientWorldBasis, "按恒河流域与北印度主要列国合计估算，南亚其他区域不按统一政权计算。"),
      estimate(-250, "孔雀帝国高峰", { min: 350, max: 500 }, { min: 3000, max: 5000 }, "medium-low", ancientWorldBasis, "按孔雀帝国核心与大范围影响区估算，南端和边疆控制强度需区别理解。"),
      estimate(400, "笈多时代北印度核心", { min: 120, max: 250 }, { min: 2500, max: 4000 }, "low", ancientWorldBasis, "笈多不是全南亚统一帝国，本条按北印度核心统治和影响范围近似。"),
      estimate(1600, "莫卧儿帝国扩张期", { min: 300, max: 400 }, { min: 10000, max: 15000 }, "medium-low", ancientWorldBasis, "按莫卧儿核心控制区和部分附属区域估算，德干、边疆和地方势力控制强度差异明显。"),
      estimate(1900, "英属印度帝国", { value: 470, approx: true }, { min: 28000, max: 30000 }, "medium", ancientWorldBasis, "按英属印度与王公国体系的大致范围和人口估算，不等同1947年以后各现代国家。")
    ], "南亚多数时期不是单一持续国家，记录为次大陆文明区、阶段性帝国或主要政权合计口径；印度河、恒河、德干和沿海区域需分层理解。", ancientWorldBasis),

    "southeast-asia": civilization([
      estimate(-500, "早期稻作与青铜文化区", { min: 40, max: 90 }, { min: 200, max: 600 }, "low", ancientWorldBasis, "按中南半岛和部分群岛早期农业、青铜文化与聚落网络估算，不代表单一政权。"),
      estimate(500, "扶南、占婆和早期港口网络", { min: 80, max: 160 }, { min: 500, max: 1200 }, "low", ancientWorldBasis, "按湄公河下游、沿海港口和主要贸易网络合计估算，控制强度差异很大。"),
      estimate(1200, "吴哥、蒲甘和室利佛逝并立", { min: 180, max: 300 }, { min: 1200, max: 2500 }, "low", ancientWorldBasis, "大陆王国与群岛海洋国家并立，本条为主要政权与文明区合计口径。"),
      estimate(1500, "大城、满者伯夷余波与马六甲时代", { min: 200, max: 350 }, { min: 1800, max: 3500 }, "medium-low", ancientWorldBasis, "按大陆平原王国、爪哇和马六甲海峡贸易区合计估算，不把贡赋影响区等同直接统治。"),
      estimate(1900, "殖民东南亚格局", { min: 430, max: 460 }, { min: 7000, max: 9000 }, "medium-low", ancientWorldBasis, "按英、法、荷、西/美殖民地和暹罗等主要政治单元合计估算，边界接近现代但行政口径不同。")
    ], "东南亚长期由大陆河谷王国、群岛港口国家和殖民行政区并行构成，面积人口只能作为主要政权与文明区合计估算。", ancientWorldBasis),

    "central-asia": civilization([
      estimate(-500, "草原与绿洲早期网络", { min: 200, max: 500 }, { min: 100, max: 400 }, "low", ancientWorldBasis, "按斯基泰、塞种和早期绿洲网络的活动范围估算，游牧势力范围不能等同稳定行政疆域。"),
      estimate(700, "粟特、突厥与丝路绿洲", { min: 300, max: 700 }, { min: 300, max: 800 }, "low", ancientWorldBasis, "按河中、七河、天山南北和相邻草原主要政治文化网络估算，控制强度差异很大。"),
      estimate(1000, "萨曼与喀喇汗时代", { min: 250, max: 550 }, { min: 500, max: 1000 }, "medium-low", ancientWorldBasis, "按河中、呼罗珊东北和突厥伊斯兰政权相关区域估算，不代表单一国家。"),
      estimate(1400, "帖木儿帝国高峰", { min: 350, max: 500 }, { min: 800, max: 1500 }, "medium-low", ancientWorldBasis, "帖木儿帝国范围跨中亚、伊朗和周边地区，本条按中亚核心加主要征服区近似。"),
      estimate(1900, "俄国控制中亚", { min: 350, max: 420 }, { min: 1000, max: 1500 }, "medium-low", ancientWorldBasis, "按俄属突厥斯坦、草原总督区和保护国体系大致估算，行政口径与现代五国不同。")
    ], "中亚长期由草原、绿洲和帝国边疆共同构成，面积人口记录为文明区或阶段性主要政权合计，不当作单一持续国家。", ancientWorldBasis),

    "iranian-world": civilization([
      estimate(-1200, "埃兰与伊朗高原早期", { min: 20, max: 60 }, { min: 100, max: 300 }, "low", ancientWorldBasis, "按苏萨、埃兰和扎格罗斯相关政治文化区估算，不能等同后世伊朗疆域。"),
      estimate(-500, "阿契美尼德帝国高峰", { min: 500, max: 800 }, { min: 1700, max: 3500 }, "medium-low", ancientWorldBasis, "按波斯帝国从伊朗、两河、小亚细亚到埃及和中亚部分地区的大范围统治估算，行省控制强度不同。"),
      estimate(100, "帕提亚帝国", { min: 250, max: 400 }, { min: 800, max: 1800 }, "low", ancientWorldBasis, "按伊朗高原、两河和周边附属影响区估算，贵族分权使有效控制存在差异。"),
      estimate(570, "萨珊帝国高峰", { min: 300, max: 500 }, { min: 1200, max: 2500 }, "medium-low", ancientWorldBasis, "按伊朗高原、两河、高加索和部分中亚边缘估算，不把短期占领区全部计入。"),
      estimate(1600, "萨非王朝高峰", { min: 220, max: 300 }, { min: 600, max: 1200 }, "medium-low", ancientWorldBasis, "按萨非核心控制区和边疆争夺区估算，奥斯曼、乌兹别克和莫卧儿边界经常变化。"),
      estimate(1900, "恺加伊朗", { min: 160, max: 170 }, { min: 900, max: 1200 }, "medium-low", ancientWorldBasis, "接近近代伊朗核心疆域口径，但高加索、呼罗珊和波斯湾权益受英俄压力影响。")
    ], "伊朗高原与波斯世界跨越单一现代国家边界，记录为文明区、帝国高峰或阶段性政权范围；必须区分核心行政区、行省、附属和短期征服。", ancientWorldBasis),

    "islamic-world": civilization([
      estimate(632, "阿拉伯半岛统一后的早期共同体", { min: 250, max: 320 }, { min: 400, max: 800 }, "low", ancientWorldBasis, "按阿拉伯半岛主要部落和城市网络估算，早期共同体边界不同于后世行政疆域。"),
      estimate(750, "倭马亚帝国最大范围", { min: 1000, max: 1300 }, { min: 3000, max: 6000 }, "medium-low", ancientWorldBasis, "按伊比利亚、北非、西亚、中亚和印度河边缘的广域统治估算，边疆控制强度差异很大。"),
      estimate(900, "阿拔斯与区域王朝并立", { min: 600, max: 900 }, { min: 3500, max: 7000 }, "low", ancientWorldBasis, "政治上已分散，本条记录伊斯兰世界主要政权和文明区合计，不代表单一哈里发直接控制。"),
      estimate(1200, "塞尔柱、阿尤布和区域苏丹国", { min: 500, max: 800 }, { min: 4000, max: 8000 }, "low", ancientWorldBasis, "按西亚、埃及、北非、安达卢斯和中亚南缘主要伊斯兰政权合计估算。"),
      estimate(1600, "奥斯曼、萨法维、莫卧儿并立", { min: 900, max: 1200 }, { min: 12000, max: 18000 }, "medium-low", ancientWorldBasis, "三大帝国并非一个国家，本条按主要伊斯兰帝国合计估算，含南亚人口大国影响。"),
      estimate(1900, "近代伊斯兰世界与殖民压力", { min: 800, max: 1100 }, { min: 18000, max: 26000 }, "low", ancientWorldBasis, "按奥斯曼、伊朗、阿富汗、南亚穆斯林社会、北非和东南亚穆斯林地区的宽口径估算，不代表统一政治体。")
    ], "伊斯兰世界是跨区域宗教、政治和商业文明圈，人口疆域只能按阶段性主要政权或文明区估算，不能当作单一连续国家。", ancientWorldBasis),

    "ancient-greece": civilization([
      estimate(-1400, "迈锡尼宫殿世界", { min: 8, max: 15 }, { min: 80, max: 150 }, "low", ancientWorldBasis, "按爱琴宫殿中心和影响区估算。"),
      estimate(-500, "古风末城邦世界", { min: 20, max: 40 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "希腊本土、爱琴、殖民城市合计，非单一国家。"),
      estimate(-431, "伯罗奔尼撒战争前", { min: 20, max: 40 }, { min: 350, max: 600 }, "low", ancientWorldBasis, "城邦世界合计估算。"),
      estimate(-323, "亚历山大帝国", { value: 520, approx: true }, { min: 2000, max: 3000 }, "medium-low", ancientWorldBasis, "这是马其顿-亚历山大帝国范围，不代表普通城邦希腊。"),
      estimate(-146, "罗马征服希腊本土", { min: 10, max: 20 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "按希腊本土和主要城邦区估算。")
    ], "古希腊多数时期是城邦文明，不是统一国家；亚历山大阶段单列为帝国口径。", ancientWorldBasis),

    "roman-world": civilization([
      estimate(-500, "早期罗马城邦与拉丁区域", { min: 0.1, max: 1 }, { min: 10, max: 50 }, "low", ancientWorldBasis, "按罗马城邦和拉丁周边影响区估算，传统纪年和考古口径差异较大。"),
      estimate(-264, "布匿战争前的意大利罗马联盟", { min: 20, max: 30 }, { min: 300, max: 500 }, "medium-low", ancientWorldBasis, "按罗马直接控制区和意大利同盟体系估算，盟友不等于完全行政省份。"),
      estimate(117, "罗马帝国最大疆域", { value: 500, approx: true }, { min: 5000, max: 7000 }, "medium", ancientWorldBasis, "图拉真时期最大扩张约略口径，边境军区、属国和短期占领区不能简单等同稳定行政控制。"),
      estimate(395, "帝国东西分治", { min: 350, max: 450 }, { min: 4000, max: 6000 }, "medium-low", ancientWorldBasis, "按东西罗马合计估算，此时西部和东部财政、军队和人口承压程度不同。"),
      estimate(565, "查士丁尼时期东罗马高峰", { min: 250, max: 350 }, { min: 2500, max: 3500 }, "medium-low", ancientWorldBasis, "按东罗马核心与再征服地区估算，意大利和北非控制成本高且并不稳固。"),
      estimate(1025, "马其顿王朝时期拜占庭核心", { min: 80, max: 120 }, { min: 1000, max: 1800 }, "medium-low", ancientWorldBasis, "按安纳托利亚、巴尔干和东地中海核心控制区估算，已不是古典罗马帝国口径。")
    ], "罗马世界跨共和国、帝国东西部和拜占庭延续，面积人口必须分阶段看直接控制、同盟、属国和短期占领差异。", ancientWorldBasis),

    "medieval-western-europe": fragmented([
      estimate(500, "后罗马日耳曼王国并立", { min: 250, max: 350 }, { min: 1800, max: 2500 }, "low", ancientWorldBasis, "按意大利、高卢、伊比利亚、不列颠和莱茵周边主要后罗马政权及影响区合计估算。"),
      estimate(800, "查理曼帝国高峰", { min: 300, max: 420 }, { min: 2500, max: 3500 }, "low", ancientWorldBasis, "西欧整体仍非单一稳定国家；查理曼帝国本体约110-120万平方公里，记录采用西欧主要政权合计口径。"),
      estimate(1000, "封建化与地方王权并立", { min: 320, max: 450 }, { min: 3500, max: 4500 }, "low", ancientWorldBasis, "维京、马扎尔压力下降后，法兰西、德意志、英格兰、意大利等区域逐步稳定，但行政统计不足。"),
      estimate(1300, "高峰中世纪人口高点", { min: 350, max: 500 }, { min: 7000, max: 8500 }, "medium-low", ancientWorldBasis, "黑死病前西欧人口达到中世纪高点，数字为西欧文明区近似合计，不代表单一国家户籍。"),
      estimate(1450, "黑死病与百年战争后", { min: 350, max: 500 }, { min: 5000, max: 6500 }, "medium-low", ancientWorldBasis, "14世纪疫病和战争后人口尚未完全恢复，政治上英法王权和帝国诸侯结构进一步分化。")
    ], "中世纪西欧不是单一政权，记录为西欧主要王国、公国、教会领地和城市网络的文明区/主要政权合计估算。", ancientWorldBasis),

    "russian-eastern-europe": civilization([
      estimate(1000, "基辅罗斯核心区", { min: 60, max: 120 }, { min: 300, max: 600 }, "low", ancientWorldBasis, "按第聂伯河、诺夫哥罗德和罗斯主要城市网络估算，控制强度和边界不稳定。"),
      estimate(1500, "莫斯科国家兴起", { min: 250, max: 300 }, { min: 500, max: 800 }, "medium-low", ancientWorldBasis, "按莫斯科大公国主要控制区估算，不含后续西伯利亚扩张。"),
      estimate(1700, "沙皇俄国与西伯利亚扩张", { min: 1200, max: 1600 }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "面积含广阔西伯利亚控制区，人口主要集中在欧洲俄罗斯。"),
      estimate(1900, "俄罗斯帝国高峰", { min: 2100, max: 2300 }, { min: 12000, max: 14000 }, "medium", ancientWorldBasis, "接近俄罗斯帝国行政疆域口径，含欧亚多民族边疆。"),
      estimate(1950, "苏联战后范围", { min: 2200, max: 2250 }, { min: 17500, max: 18500 }, "medium", modernChinaBasis, "按苏联战后加盟共和国范围估算，统计口径比古代可靠。")
    ], "俄罗斯与东欧模块跨东欧国家、俄罗斯帝国和苏联，面积人口需区分东欧文明区、帝国行政疆域和苏联国家口径。", ancientWorldBasis),

    "ottoman-world": civilization([
      estimate(1350, "早期奥斯曼与巴尔干扩张", { min: 20, max: 60 }, { min: 300, max: 800 }, "low", ancientWorldBasis, "按安纳托利亚西北与早期巴尔干控制区估算，边疆附属关系复杂。"),
      estimate(1520, "征服埃及叙利亚后的帝国", { min: 250, max: 350 }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "按安纳托利亚、巴尔干、叙利亚、埃及和阿拉伯核心区估算。"),
      estimate(1683, "奥斯曼最大影响期", { min: 450, max: 550 }, { min: 2500, max: 3500 }, "medium-low", ancientWorldBasis, "含直接行省、藩属和边疆争夺区，不能全部视作同等行政控制。"),
      estimate(1850, "改革时代帝国", { min: 250, max: 350 }, { min: 2500, max: 3500 }, "medium-low", ancientWorldBasis, "欧洲、安纳托利亚、阿拉伯和北非部分地区控制强度差异很大。"),
      estimate(1914, "一战前奥斯曼", { min: 170, max: 200 }, { min: 1800, max: 2300 }, "medium", modernChinaBasis, "按一战前帝国行政范围估算，已失去多数欧洲和北非领地。")
    ], "奥斯曼世界跨欧洲、西亚和北非，应区分核心行省、自治省、藩属和短期军事占领。", ancientWorldBasis),

    "modern-europe": fragmented([
      estimate(1500, "近代早期欧洲诸国", { min: 850, max: 1000 }, { min: 8000, max: 10000 }, "medium-low", ancientWorldBasis, "按欧洲大陆和不列颠主要政治单元合计估算，非单一国家。"),
      estimate(1800, "革命与拿破仑时代欧洲", { min: 900, max: 1100 }, { min: 18000, max: 22000 }, "medium-low", ancientWorldBasis, "按欧洲主要国家合计估算，帝国海外殖民地不纳入欧洲本土面积。"),
      estimate(1900, "工业化与帝国主义欧洲", { min: 950, max: 1100 }, { min: 38000, max: 43000 }, "medium", ancientWorldBasis, "按欧洲本土主要国家合计估算，不把海外殖民地算作欧洲本土。"),
      estimate(1945, "二战后的欧洲", { min: 950, max: 1100 }, { min: 52000, max: 56000 }, "medium", modernChinaBasis, "按欧洲本土人口和战后国家边界估算，战损和迁徙影响巨大。"),
      estimate(1993, "欧洲一体化时代", { min: 950, max: 1100 }, { min: 70000, max: 73000 }, "medium", modernChinaBasis, "按地理欧洲宽口径估算，不等同欧盟成员国面积人口。")
    ], "近现代欧洲记录为地理欧洲和主要国家合计口径，不把海外殖民帝国面积人口并入欧洲本土。", ancientWorldBasis),

    "indus-civilization": civilization([
      estimate(-2600, "成熟哈拉帕核心城市区", { min: 50, max: 100 }, { min: 100, max: 500 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(-1900, "后哈拉帕地方化阶段", { min: 30, max: 80 }, { min: 100, max: 400 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "maurya-gupta": civilization([
      estimate(-250, "孔雀帝国高峰", { min: 400, max: 500 }, { min: 3000, max: 5000 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(400, "笈多核心区", { min: 120, max: 180 }, { min: 2500, max: 4000 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "delhi-sultanate-mughal": civilization([
      estimate(1300, "德里苏丹国核心", { min: 100, max: 180 }, { min: 4000, max: 7000 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1700, "莫卧儿最大扩张", { min: 350, max: 400 }, { min: 12000, max: 17000 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1858, "英属印度王冠统治初期", { min: 420, max: 450 }, { min: 18000, max: 22000 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "mainland-southeast-asia": civilization([
      estimate(500, "扶南与湄公河网络", { min: 20, max: 60 }, { min: 100, max: 400 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1200, "吴哥和蒲甘并立", { min: 100, max: 180 }, { min: 700, max: 1500 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1700, "缅暹越近世格局", { min: 120, max: 220 }, { min: 1200, max: 2500 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "island-southeast-asia": civilization([
      estimate(800, "室利佛逝影响网络", { min: 30, max: 100 }, { min: 200, max: 800 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1400, "满者伯夷贡赋圈", { min: 60, max: 160 }, { min: 500, max: 1500 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1500, "马六甲海峡贸易区", { min: 10, max: 30 }, { min: 100, max: 400 }, "low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "colonial-southeast-asia": civilization([
      estimate(1900, "殖民东南亚分区", { min: 430, max: 460 }, { min: 7000, max: 9000 }, "medium-low", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1950, "战后独立过渡区", { min: 430, max: 460 }, { min: 16000, max: 18000 }, "medium", ancientWorldBasis, "按该二级模块阶段性核心范围估算，不能等同现代国界。")
    ], "二级拆分模块采用必要学习估算口径，需区分核心行政区、文明影响区、贡赋圈和殖民名义范围。", ancientWorldBasis),

    "south-asia-imperial-core": civilization([
      estimate(-2500, "印度河城市区", { min: 50, max: 100 }, { min: 100, max: 500 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(-250, "孔雀帝国高峰", { min: 400, max: 500 }, { min: 3000, max: 5000 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1600, "莫卧儿核心", { min: 300, max: 400 }, { min: 10000, max: 15000 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1947, "分治前英属印度", { min: 420, max: 450 }, { min: 38000, max: 42000 }, "medium", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "southeast-asia-core-kingdoms": civilization([
      estimate(500, "早期港口网络", { min: 80, max: 160 }, { min: 500, max: 1200 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1200, "吴哥蒲甘室利佛逝并立", { min: 180, max: 300 }, { min: 1200, max: 2500 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1900, "殖民东南亚", { min: 430, max: 460 }, { min: 7000, max: 9000 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "steppe-silk-road-core": civilization([
      estimate(700, "粟特突厥丝路", { min: 300, max: 700 }, { min: 300, max: 800 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1400, "帖木儿高峰", { min: 350, max: 500 }, { min: 800, max: 1500 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1900, "俄属中亚", { min: 350, max: 420 }, { min: 1000, max: 1500 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "africa-essential-empires": civilization([
      estimate(-700, "库施王国", { min: 80, max: 120 }, { min: 100, max: 300 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1325, "马里帝国高峰", { min: 100, max: 130 }, { min: 800, max: 1500 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1500, "桑海帝国", { min: 100, max: 150 }, { min: 1000, max: 2000 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1960, "非洲独立浪潮区域", { min: 2500, max: 3000 }, { min: 25000, max: 30000 }, "medium", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "mesoamerica-andes-core": civilization([
      estimate(600, "古典中美洲安第斯核心", { min: 120, max: 220 }, { min: 800, max: 1800 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1500, "阿兹特克与印加并立", { min: 230, max: 300 }, { min: 1800, max: 3500 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "polynesian-oceania-core": civilization([
      estimate(-1000, "拉皮塔与早期岛屿扩散", { min: 20, max: 60 }, { min: 10, max: 80 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1200, "波利尼西亚航海世界", { min: 50, max: 100 }, { min: 50, max: 150 }, "low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。"),
      estimate(1900, "殖民接触后的大洋洲", { min: 850, max: 900 }, { min: 600, max: 800 }, "medium-low", ancientWorldBasis, "按该模块阶段性核心范围估算，不能等同现代国界。")
    ], "该细分模块采用必要学习骨架估算口径，需区分核心区、影响区和短期控制区。", ancientWorldBasis),

    "bronze-age-international-system": notApplicable("这是跨区域国际体系专题，不是单一国家或统一文明；面积人口应由埃及、赫梯、巴比伦、米坦尼、亚述、爱琴等主体分别记录。"),
    "bronze-age-collapse": notApplicable("这是跨区域崩溃过程专题，不是单一国家；不能为整个崩溃过程写一个疆域面积或人口数。")
  };
})();
