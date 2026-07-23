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

    japan: polity([
      estimate(-300, "弥生化扩散前后", { min: 20, max: 30 }, { min: 50, max: 100 }, "low", ancientWorldBasis, "按列岛主要稻作扩散区和人口估算，非统一国家口径。"),
      estimate(500, "大和王权与古坟网络", { min: 10, max: 25 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "以畿内大和王权影响区及主要岛屿人口估算，控制强度差异大。"),
      estimate(710, "奈良律令国家", { min: 25, max: 35 }, { min: 450, max: 600 }, "medium-low", ancientWorldBasis, "律令国家对本州、九州、四国核心区控制较强，东北和南岛控制有限。"),
      estimate(1192, "镰仓幕府初期", { min: 28, max: 36 }, { min: 600, max: 800 }, "medium-low", ancientWorldBasis, "按日本列岛主要农业区和幕府/朝廷共同秩序估算。"),
      estimate(1600, "战国统一与江户开端", { value: 30, approx: true }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "按丰臣-德川掌控的主要日本列岛区估算，虾夷地和琉球另有复杂关系。"),
      estimate(1721, "江户中期人口调查", { value: 30, approx: true }, { min: 3000, max: 3200 }, "medium", ancientWorldBasis, "江户幕府人口调查较稳定，但不完全等同现代普查。"),
      estimate(1872, "明治初年", { value: 38, approx: true }, { min: 3300, max: 3500 }, "medium-high", modernChinaBasis, "明治政府户籍统计开始接近现代国家口径。"),
      estimate(1940, "帝国日本本土与殖民地", { min: 65, max: 75 }, { min: 10000, max: 11000 }, "medium", modernChinaBasis, "含日本本土、朝鲜、台湾、南桦太等直接殖民统治区；不含满洲国等傀儡/影响区。"),
      estimate(1950, "战后日本", { value: 37.8, approx: true }, { min: 8300, max: 8500 }, "high", modernChinaBasis, "战后主权范围和人口统计口径。"),
      estimate(2020, "令和时期", { value: 37.8, approx: true }, { min: 12500, max: 12650 }, "high", modernChinaBasis, "按现代日本国土和人口普查近似口径。")
    ], "日本早期不是统一国家；古代和中世按主要控制区估算，近现代需区分本土、殖民地和战后主权范围。", ancientWorldBasis),

    "ancient-egypt": civilization([
      estimate(-3100, "上下埃及统一", { value: 8, approx: true }, { min: 100, max: 200 }, "low", ancientWorldBasis, "以尼罗河谷和三角洲可耕居住带为核心。"),
      estimate(-2500, "古王国金字塔时代", { value: 10, approx: true }, { min: 150, max: 250 }, "low", ancientWorldBasis, "人口和控制区按尼罗河核心区估算。"),
      estimate(-1450, "新王国帝国扩张", { min: 30, max: 50 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "含努比亚和黎凡特影响区，直接控制与贡赋区需区分。"),
      estimate(-1250, "拉美西斯二世前后", { min: 30, max: 45 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "埃及本土加外部附庸影响区。"),
      estimate(-300, "托勒密埃及", { value: 10, approx: true }, { min: 400, max: 700 }, "medium-low", ancientWorldBasis, "主要按埃及本土和尼罗河财政区估算。")
    ], "古埃及人口估算差异较大；面积更适合按尼罗河本土和帝国影响区分开看。", ancientWorldBasis),

    "sumer-early-mesopotamia": civilization([
      estimate(-3500, "乌鲁克城市化", { min: 3, max: 8 }, { min: 50, max: 150 }, "low", ancientWorldBasis, "南两河城市化核心区。"),
      estimate(-2500, "早王朝城邦", { min: 5, max: 12 }, { min: 80, max: 200 }, "low", ancientWorldBasis, "苏美尔诸城邦合计估算。"),
      estimate(-2250, "阿卡德帝国", { min: 30, max: 80 }, { min: 150, max: 300 }, "low", ancientWorldBasis, "阿卡德影响区扩展到叙利亚、埃兰方向，控制强度差异大。"),
      estimate(-2050, "乌尔第三王朝", { min: 20, max: 40 }, { min: 120, max: 250 }, "low", ancientWorldBasis, "两河核心官僚国家估算。")
    ], "苏美尔不是单一持续国家，记录文明区和阶段性霸权范围。", ancientWorldBasis),

    "ancient-greece": civilization([
      estimate(-1400, "迈锡尼宫殿世界", { min: 8, max: 15 }, { min: 80, max: 150 }, "low", ancientWorldBasis, "按爱琴宫殿中心和影响区估算。"),
      estimate(-500, "古风末城邦世界", { min: 20, max: 40 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "希腊本土、爱琴、殖民城市合计，非单一国家。"),
      estimate(-431, "伯罗奔尼撒战争前", { min: 20, max: 40 }, { min: 350, max: 600 }, "low", ancientWorldBasis, "城邦世界合计估算。"),
      estimate(-323, "亚历山大帝国", { value: 520, approx: true }, { min: 2000, max: 3000 }, "medium-low", ancientWorldBasis, "这是马其顿-亚历山大帝国范围，不代表普通城邦希腊。"),
      estimate(-146, "罗马征服希腊本土", { min: 10, max: 20 }, { min: 300, max: 500 }, "low", ancientWorldBasis, "按希腊本土和主要城邦区估算。")
    ], "古希腊多数时期是城邦文明，不是统一国家；亚历山大阶段单列为帝国口径。", ancientWorldBasis),


    "roman-republic": polity([
      estimate(-509, "共和国建立初期城邦", { value: 0.1, approx: true }, { min: 5, max: 10 }, "low", ancientWorldBasis, "早期罗马只是台伯河畔城邦，面积和人口只能按核心城市及近郊估算。"),
      estimate(-272, "统一意大利后", { value: 25, approx: true }, { min: 350, max: 500 }, "medium-low", ancientWorldBasis, "按意大利同盟体系估算，包含直接控制和盟邦义务，不等于后世行省式行政区。"),
      estimate(-146, "地中海霸权形成", { value: 180, approx: true }, { min: 600, max: 900 }, "medium-low", ancientWorldBasis, "含意大利、西西里、西班牙部分、北非和希腊方向行省及附属影响，控制强度差异很大。"),
      estimate(-27, "共和国终局", { value: 300, approx: true }, { min: 4500, max: 6000 }, "medium", ancientWorldBasis, "按奥古斯都接收前后的罗马统治世界估算，人口含行省居民而非只有公民。")
    ], "罗马共和国从城邦扩展为地中海霸权，早期数字高度估算，晚期接近帝国统计口径。", ancientWorldBasis),

    "roman-empire": polity([
      estimate(14, "奥古斯都去世前后", { value: 340, approx: true }, { min: 4500, max: 6000 }, "medium", ancientWorldBasis, "按地中海主要行省和附属区域估算，人口常见估算差异较大。"),
      estimate(117, "图拉真疆域高峰", { value: 500, approx: true }, { min: 5500, max: 7500 }, "medium", ancientWorldBasis, "传统极盛疆域含达契亚、亚美尼亚和美索不达米亚短期扩张，部分地区控制时间很短。"),
      estimate(395, "东西分治固定化", { value: 430, approx: true }, { min: 5000, max: 6500 }, "medium-low", ancientWorldBasis, "按东西帝国名义合计估算，西部实际控制已开始松动。"),
      estimate(476, "西部皇帝终结", { value: 220, approx: true }, { min: 3000, max: 4500 }, "low", ancientWorldBasis, "此处按东部延续加西部残余罗马化区域估算，西部不再是统一行政帝国。")
    ], "罗马帝国面积人口按统一帝国、短期极盛和晚期分裂分别估算，不能把每个节点都理解为同等有效控制。", ancientWorldBasis),

    byzantium: polity([
      estimate(565, "查士丁尼复兴高峰", { value: 280, approx: true }, { min: 2500, max: 3500 }, "medium-low", ancientWorldBasis, "含北非、意大利和东地中海收复区，西部收复地成本高且稳定性有限。"),
      estimate(750, "七世纪危机后收缩", { value: 80, approx: true }, { min: 700, max: 1200 }, "low", ancientWorldBasis, "失去叙利亚、埃及后，以安纳托利亚和巴尔干部分地区为核心。"),
      estimate(1025, "巴西尔二世高峰", { value: 120, approx: true }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "马其顿王朝扩张后重新控制巴尔干和安纳托利亚核心区。"),
      estimate(1453, "君士坦丁堡陷落前", { value: 1, approx: true }, { min: 5, max: 10 }, "low", ancientWorldBasis, "末期拜占庭几乎只剩君士坦丁堡及少量周边据点，数字仅作终局收缩口径。")
    ], "拜占庭是罗马东部延续，面积人口随七世纪危机、复兴和晚期衰退剧烈变化。", ancientWorldBasis),


    "viking-nordic-europe": fragmented([
      estimate(800, "维京时代初期北欧诸地", { value: 110, approx: true }, { min: 100, max: 200 }, "low", ancientWorldBasis, "按斯堪的纳维亚主要居住区和北海活动核心估算，不代表统一国家。"),
      estimate(1030, "北海帝国前后", { value: 160, approx: true }, { min: 250, max: 450 }, "low", ancientWorldBasis, "含英格兰、丹麦、挪威部分地区的短期王权合计，控制强度差异大。"),
      estimate(1397, "卡尔马联盟", { value: 130, approx: true }, { min: 250, max: 400 }, "medium-low", ancientWorldBasis, "按丹麦、挪威、瑞典王国合计估算，冰岛和北大西洋属地口径不稳定。")
    ], "北欧与维京世界不是单一政权，记录为北欧主要王国和海上活动核心的合计估算。", ancientWorldBasis),

    "iberia-reconquista": fragmented([
      estimate(711, "西哥特崩解与穆斯林征服", { value: 58, approx: true }, { min: 400, max: 700 }, "low", ancientWorldBasis, "按伊比利亚半岛主要政治空间估算，战乱后人口统计不清。"),
      estimate(929, "科尔多瓦哈里发高峰", { value: 45, approx: true }, { min: 500, max: 800 }, "low", ancientWorldBasis, "安达卢斯为主，北部基督教小王国另计，控制强度和人口估算有争议。"),
      estimate(1492, "格拉纳达陷落", { value: 58, approx: true }, { min: 700, max: 1000 }, "medium-low", ancientWorldBasis, "按伊比利亚主要王国合计估算，接近西班牙和葡萄牙近代国家形成前夜。")
    ], "伊比利亚再征服时期长期多政权并立，面积人口按半岛主要政权合计，不是单一国家。", ancientWorldBasis),

    "eastern-europe-slavic": fragmented([
      estimate(900, "斯拉夫、罗斯与草原并立", { value: 250, approx: true }, { min: 300, max: 600 }, "low", ancientWorldBasis, "东欧范围广且政权松散，按主要居住区和贸易通道影响估算。"),
      estimate(1050, "基辅罗斯与中欧王国形成", { value: 320, approx: true }, { min: 600, max: 1000 }, "low", ancientWorldBasis, "含基辅罗斯、波兰、匈牙利和巴尔干部分主线政权合计。"),
      estimate(1569, "波兰立陶宛与莫斯科并立", { value: 420, approx: true }, { min: 1200, max: 1800 }, "medium-low", ancientWorldBasis, "按波兰立陶宛、莫斯科和周边东欧主体合计，非单一国家口径。")
    ], "东欧斯拉夫与罗斯世界跨越森林、草原和巴尔干，记录为主要政权合计。", ancientWorldBasis),

    "early-modern-europe": fragmented([
      estimate(1500, "新君主制与王朝欧洲", { value: 500, approx: true }, { min: 7000, max: 9000 }, "medium-low", ancientWorldBasis, "按欧洲主要政权合计，含奥斯曼欧洲部分与俄国口径会影响估算。"),
      estimate(1648, "威斯特伐利亚后", { value: 520, approx: true }, { min: 9000, max: 11000 }, "medium-low", ancientWorldBasis, "按欧洲国家体系合计，统计仍非现代普查。"),
      estimate(1789, "法国大革命前夜", { value: 540, approx: true }, { min: 14000, max: 18000 }, "medium", ancientWorldBasis, "18世纪人口估算较清晰，但不同欧洲边界口径差异明显。")
    ], "近代早期欧洲是多国家体系，记录为欧洲主要政权合计估算。", ancientWorldBasis),

    "renaissance-reformation": fragmented([
      estimate(1450, "意大利城邦与西欧王权并立", { value: 350, approx: true }, { min: 5000, max: 7000 }, "low", ancientWorldBasis, "这是欧洲主要政权合计估算，不是单一国家疆域。"),
      estimate(1555, "奥格斯堡和约前后", { value: 380, approx: true }, { min: 6500, max: 8500 }, "low", ancientWorldBasis, "按西欧、中欧和意大利主要政权合计，宗教分裂和王权国家并行。"),
      estimate(1648, "威斯特伐利亚秩序形成", { value: 400, approx: true }, { min: 8000, max: 10000 }, "medium-low", ancientWorldBasis, "按欧洲主要国家体系估算，人口恢复和国家财政统计较中世纪更清晰但仍非精确普查。")
    ], "文艺复兴与宗教改革不是单一政权，记录为欧洲主要政权和文明圈合计口径。", ancientWorldBasis),

    "medieval-western-europe": fragmented([
      estimate(500, "后罗马日耳曼王国并立", { min: 250, max: 350 }, { min: 1800, max: 2500 }, "low", ancientWorldBasis, "按意大利、高卢、伊比利亚、不列颠和莱茵周边主要后罗马政权及影响区合计估算。"),
      estimate(800, "查理曼帝国高峰", { min: 300, max: 420 }, { min: 2500, max: 3500 }, "low", ancientWorldBasis, "西欧整体仍非单一稳定国家；查理曼帝国本体约110-120万平方公里，记录采用西欧主要政权合计口径。"),
      estimate(1000, "封建化与地方王权并立", { min: 320, max: 450 }, { min: 3500, max: 4500 }, "low", ancientWorldBasis, "维京、马扎尔压力下降后，法兰西、德意志、英格兰、意大利等区域逐步稳定，但行政统计不足。"),
      estimate(1300, "高峰中世纪人口高点", { min: 350, max: 500 }, { min: 7000, max: 8500 }, "medium-low", ancientWorldBasis, "黑死病前西欧人口达到中世纪高点，数字为西欧文明区近似合计，不代表单一国家户籍。"),
      estimate(1450, "黑死病与百年战争后", { min: 350, max: 500 }, { min: 5000, max: 6500 }, "medium-low", ancientWorldBasis, "14世纪疫病和战争后人口尚未完全恢复，政治上英法王权和帝国诸侯结构进一步分化。")
    ], "中世纪西欧不是单一政权，记录为西欧主要王国、公国、教会领地和城市网络的文明区/主要政权合计估算。", ancientWorldBasis),

    "bronze-age-international-system": notApplicable("这是跨区域国际体系专题，不是单一国家或统一文明；面积人口应由埃及、赫梯、巴比伦、米坦尼、亚述、爱琴等主体分别记录。"),
    "bronze-age-collapse": notApplicable("这是跨区域崩溃过程专题，不是单一国家；不能为整个崩溃过程写一个疆域面积或人口数。")
  };
})();
