export type RegionKey = "france" | "italy" | "zermatt" | "jungfrau";

export type TripMoment = {
  period: "上午" | "下午" | "晚上";
  title: string;
  detail: string;
};

export type TripDay = {
  day: string;
  region: RegionKey;
  phase: string;
  title: string;
  highlight: string;
  base: string;
  tip: string;
  moments: TripMoment[];
};

export type Region = {
  key: RegionKey;
  anchor: string;
  range: string;
  eyebrow: string;
  title: string;
  summary: string;
  landscape: string;
  portrait: string;
  accent: string;
  tags: string[];
};

export type LogisticsCard = {
  title: string;
  label: string;
  items: string[];
};

export type StayCard = {
  region: string;
  accent: string;
  luxury: {
    name: string;
    note: string;
  };
  value: {
    name: string;
    note: string;
  };
};

export const siteMeta = {
  title: "法意瑞阿尔卑斯 15 天巅峰之旅",
  shortTitle: "ALPS PEAK 15",
  description:
    "从霞慕尼、勃朗峰、多洛米蒂到策马特、马特洪峰和少女峰的 15 天法意瑞阿尔卑斯旅行路线，覆盖交通、每日行程、住宿与执行建议。",
  url: "https://alps-travel-site.pages.dev",
  image: "/alps_assets/mont_blanc.webp"
};

export const tripStats = [
  { value: "15", label: "天行程" },
  { value: "3", label: "国家" },
  { value: "4", label: "高山基地" },
  { value: "2", label: "自驾 + 铁路" }
] as const;

export const regions: Region[] = [
  {
    key: "france",
    anchor: "chamonix",
    range: "D1-D3",
    eyebrow: "Phase 1 · France",
    title: "霞慕尼 · 勃朗峰",
    summary:
      "落地日内瓦后直奔霞慕尼。用三天适应高海拔节奏，登上南针峰，走进冰海，完成欧洲屋脊的第一段朝圣。",
    landscape: "/alps_assets/mont_blanc.webp",
    portrait: "/alps_assets/mont_blanc_p.webp",
    accent: "#c6a15d",
    tags: ["南针峰缆车", "冰海齿轨列车", "基地 Chamonix"]
  },
  {
    key: "italy",
    anchor: "dolomites",
    range: "D4-D8",
    eyebrow: "Phase 2 · Italy",
    title: "多洛米蒂 · 红岩之巅",
    summary:
      "穿越勃朗峰隧道进入意大利，驻扎 Cortina 与 Ortisei。三尖峰、密苏丽娜湖、Seceda 与高山草甸构成此行最有张力的公路段。",
    landscape: "/alps_assets/dolomites.webp",
    portrait: "/alps_assets/dolomites_p.webp",
    accent: "#d86a4a",
    tags: ["三尖峰徒步", "Seceda 刀锋", "大公路自驾"]
  },
  {
    key: "zermatt",
    anchor: "zermatt",
    range: "D9-D11",
    eyebrow: "Phase 3 · Switzerland",
    title: "策马特 · 马特洪峰",
    summary:
      "从意大利转入瑞士铁路系统，进入禁燃油车小镇策马特。Gornergrat 与 Riffelsee 是拍下马特洪峰完整记忆的核心两天。",
    landscape: "/alps_assets/matterhorn.webp",
    portrait: "/alps_assets/matterhorn_p.webp",
    accent: "#67b9d6",
    tags: ["Gornergrat 铁路", "Riffelsee 倒影", "禁燃油车小镇"]
  },
  {
    key: "jungfrau",
    anchor: "jungfrau",
    range: "D12-D15",
    eyebrow: "Final · Switzerland",
    title: "格林德瓦 · 少女峰",
    summary:
      "最后四天留给少女峰区域。用火车、缆车和山间步道切换节奏，在艾格峰北壁下收束整段阿尔卑斯旅程。",
    landscape: "/alps_assets/jungfrau.webp",
    portrait: "/alps_assets/jungfrau_p.webp",
    accent: "#e9877d",
    tags: ["少女峰火车站", "First Cliff Walk", "基地 Grindelwald"]
  }
];

export const tripDays: TripDay[] = [
  {
    day: "D1",
    region: "france",
    phase: "Phase 1 · France",
    title: "抵达日内瓦 · 转场霞慕尼",
    highlight: "落地欧洲屋脊 · 霞慕尼小镇",
    base: "Chamonix（法国）",
    tip: "日内瓦提车后约 1 小时到霞慕尼，提前下载离线地图与停车 App。",
    moments: [
      { period: "上午", title: "抵达", detail: "抵达日内瓦机场，提车或乘大巴启程。" },
      { period: "下午", title: "转场", detail: "沿 A40 一路向东，约 1 小时直抵霞慕尼，办理入住。" },
      { period: "晚上", title: "适应", detail: "镇中心石板街漫步，采购次日徒步补给。" }
    ]
  },
  {
    day: "D2",
    region: "france",
    phase: "Phase 1 · France",
    title: "南针峰 · 直面勃朗峰",
    highlight: "南针峰缆车 · 3842m",
    base: "Chamonix（法国）",
    tip: "缆车需官网预约时段；山顶比镇上低 15-20℃，务必带羽绒服。",
    moments: [
      { period: "上午", title: "登高", detail: "搭早班缆车直上南针峰 Aiguille du Midi 3842m。" },
      { period: "下午", title: "观景", detail: "走进虚空之窗玻璃箱，俯瞰勃朗峰冰川群。" },
      { period: "晚上", title: "休整", detail: "返镇品尝萨瓦芝士火锅，缓解高海拔疲惫。" }
    ]
  },
  {
    day: "D3",
    region: "france",
    phase: "Phase 1 · France",
    title: "冰海 · 红色齿轨小火车",
    highlight: "冰海齿轨列车 · Mer de Glace",
    base: "Chamonix（法国）",
    tip: "冰川退缩明显，下冰洞需走约 400 级台阶，量力而行。",
    moments: [
      { period: "上午", title: "齿轨列车", detail: "蒙特维尔红色齿轨小火车驶向冰海 Mer de Glace。" },
      { period: "下午", title: "冰洞", detail: "下行参观蓝色冰洞，徒步 Grand Balcon Nord 观景台。" },
      { period: "晚上", title: "备行李", detail: "整理行装，为次日跨国转场意大利做准备。" }
    ]
  },
  {
    day: "D4",
    region: "italy",
    phase: "Phase 2 · Italy",
    title: "勃朗峰隧道 · 跨国进意大利",
    highlight: "勃朗峰隧道 · 跨国自驾",
    base: "Cortina（意大利）",
    tip: "意法高速分段收费，备信用卡过路；山路弯多，注意中途休息。",
    moments: [
      { period: "上午", title: "穿越", detail: "穿越 11.6km 勃朗峰隧道，抵达意大利库马约尔。" },
      { period: "下午", title: "东行", detail: "沿高速一路东行，傍晚抵达科尔蒂纳 Cortina。" },
      { period: "晚上", title: "山城", detail: "Cortina 步行街晚餐，感受多洛米蒂山城夜色。" }
    ]
  },
  {
    day: "D5",
    region: "italy",
    phase: "Phase 2 · Italy",
    title: "三尖峰环线徒步",
    highlight: "三尖峰环线 · Tre Cime",
    base: "Cortina（意大利）",
    tip: "停车场旺季 9 点前满位，建议早到；环线约需 4-5 小时。",
    moments: [
      { period: "上午", title: "开走", detail: "驱车至 Rifugio Auronzo，开启三尖峰环线。" },
      { period: "下午", title: "环线", detail: "约 10km 环线，经 Locatelli 山屋拍经典三峰立面。" },
      { period: "晚上", title: "奖励餐", detail: "返回 Cortina 休整，犒赏一餐意式山区料理。" }
    ]
  },
  {
    day: "D6",
    region: "italy",
    phase: "Phase 2 · Italy",
    title: "镜湖晨光 · 法罗利亚全景",
    highlight: "镜面湖光 · Misurina",
    base: "Cortina（意大利）",
    tip: "午后山区多雷暴，户外拍摄与徒步尽量安排在上午。",
    moments: [
      { period: "上午", title: "湖景", detail: "密苏丽娜湖 Lago di Misurina 捕捉无风晨景。" },
      { period: "下午", title: "缆车", detail: "法罗利亚缆车登顶，俯瞰 Cortina 山谷全景。" },
      { period: "晚上", title: "计划", detail: "收拾行装，规划次日多洛米蒂大公路西行。" }
    ]
  },
  {
    day: "D7",
    region: "italy",
    phase: "Phase 2 · Italy",
    title: "多洛米蒂大公路转场",
    highlight: "多洛米蒂大公路 · 山口自驾",
    base: "Ortisei（意大利）",
    tip: "山口公路坡陡弯急，预留充足拍照与休息时间。",
    moments: [
      { period: "上午", title: "西行", detail: "沿 Great Dolomites Road 西行，穿行群峰之间。" },
      { period: "下午", title: "山口", detail: "翻越 Passo Pordoi 山口，抵达奥尔蒂塞伊 Ortisei。" },
      { period: "晚上", title: "入住", detail: "入住 Val Gardena 山谷，木屋温泉小镇歇脚。" }
    ]
  },
  {
    day: "D8",
    region: "italy",
    phase: "Phase 2 · Italy",
    title: "Seceda 刀锋 · 高山草甸",
    highlight: "Seceda 缆车 · 刀锋山脊",
    base: "Ortisei（意大利）",
    tip: "Seceda 上下两段缆车，预留半天；草甸日落极美值得守候。",
    moments: [
      { period: "上午", title: "登顶", detail: "两段缆车直上 Seceda 2500m 刀锋山脊。" },
      { period: "下午", title: "草甸", detail: "漫步 Alpe di Siusi 欧洲最大高山草甸。" },
      { period: "晚上", title: "告别", detail: "告别多洛米蒂，整理行装准备进入瑞士。" }
    ]
  },
  {
    day: "D9",
    region: "zermatt",
    phase: "Phase 3 · Switzerland",
    title: "长途转场 · 进入策马特",
    highlight: "进入策马特 · 禁燃油车小镇",
    base: "Zermatt（瑞士）",
    tip: "策马特禁私家车，需在 Täsch 停车换乘接驳；瑞士旅行通票更划算。",
    moments: [
      { period: "上午", title: "还车", detail: "驱车经米兰还车，火车一路向北至 Visp。" },
      { period: "下午", title: "入山", detail: "Visp 换乘登山火车，进入无燃油车小镇策马特。" },
      { period: "晚上", title: "初见", detail: "班霍夫大街漫步，与马特洪峰初次相见。" }
    ]
  },
  {
    day: "D10",
    region: "zermatt",
    phase: "Phase 3 · Switzerland",
    title: "Gornergrat 雪山全景",
    highlight: "Gornergrat 铁路 · 雪山全景",
    base: "Zermatt（瑞士）",
    tip: "上山坐车厢右侧视野最佳；山顶有欧洲最高酒店，可留宿看日出。",
    moments: [
      { period: "上午", title: "齿轨火车", detail: "乘 Gornergrat 齿轨火车登 3089m 观景平台。" },
      { period: "下午", title: "全景", detail: "全景台远眺罗莎峰群与冰川，与马特洪峰合影。" },
      { period: "晚上", title: "火锅", detail: "镇上享一锅地道瑞士芝士火锅暖身。" }
    ]
  },
  {
    day: "D11",
    region: "zermatt",
    phase: "Phase 3 · Switzerland",
    title: "Riffelsee 倒影 · 五湖徒步",
    highlight: "马特洪峰倒影 · Riffelsee",
    base: "Zermatt（瑞士）",
    tip: "清晨风小水面最静，倒影成功率最高；徒步随身带防风外套。",
    moments: [
      { period: "上午", title: "倒影", detail: "Riffelsee 湖边静候无风时刻，拍马特洪峰倒影。" },
      { period: "下午", title: "五湖", detail: "五湖徒步 5-Seenweg，集齐多角度倒影机位。" },
      { period: "晚上", title: "转场准备", detail: "收拾行装，准备转场少女峰下的格林德瓦。" }
    ]
  },
  {
    day: "D12",
    region: "jungfrau",
    phase: "Final · Switzerland",
    title: "转战格林德瓦",
    highlight: "抵达格林德瓦 · 艾格峰下",
    base: "Grindelwald（瑞士）",
    tip: "Eiger Express 缆车转场更快；继续沿用瑞士旅行通票。",
    moments: [
      { period: "上午", title: "穿越湖区", detail: "火车经 Visp、Spiez 一路向北穿越湖区。" },
      { period: "下午", title: "抵达", detail: "抵达少女峰脚下的格林德瓦 Grindelwald。" },
      { period: "晚上", title: "夕照", detail: "入住山间木屋，欣赏艾格峰北壁夕照。" }
    ]
  },
  {
    day: "D13",
    region: "jungfrau",
    phase: "Final · Switzerland",
    title: "少女峰 · 欧洲之巅",
    highlight: "欧洲之巅 · 少女峰 3454m",
    base: "Grindelwald（瑞士）",
    tip: "山顶含氧低，慢行防高反；晴天才值得上，出发前紧盯天气预报。",
    moments: [
      { period: "上午", title: "登顶", detail: "登上欧洲之巅少女峰火车站 3454m。" },
      { period: "下午", title: "冰川", detail: "斯芬克斯观景台、阿莱奇冰川与晶莹冰宫。" },
      { period: "晚上", title: "休整", detail: "返回格林德瓦休整，回味云端一日。" }
    ]
  },
  {
    day: "D14",
    region: "jungfrau",
    phase: "Final · Switzerland",
    title: "First 悬崖步道 · 山地探险",
    highlight: "First Cliff Walk · 悬崖步道",
    base: "Grindelwald（瑞士）",
    tip: "四项山地活动可买套票；雨天悬崖步道关闭，留意临时改期。",
    moments: [
      { period: "上午", title: "悬崖步道", detail: "First 缆车上山，挑战 Cliff Walk 悬崖步道。" },
      { period: "下午", title: "山地活动", detail: "山间卡丁车 Mountain Cart、滑板车一路俯冲下山。" },
      { period: "晚上", title: "告别餐", detail: "格林德瓦告别晚宴，为旅程画下句点。" }
    ]
  },
  {
    day: "D15",
    region: "jungfrau",
    phase: "Final · Switzerland",
    title: "苏黎世返航",
    highlight: "满载而归 · 苏黎世返航",
    base: "途中 / 苏黎世 ZRH",
    tip: "预留 3 小时以上转场到机场；机场退税需排队，留足时间。",
    moments: [
      { period: "上午", title: "离开山谷", detail: "格林德瓦出发，火车前往苏黎世。" },
      { period: "下午", title: "城市收尾", detail: "苏黎世老城与班霍夫大街采购手信。" },
      { period: "晚上", title: "返航", detail: "苏黎世机场 ZRH 搭乘返程航班，结束旅程。" }
    ]
  }
];

export const logistics: LogisticsCard[] = [
  {
    title: "机票方案",
    label: "Flight",
    items: [
      "去程：深圳 SZX 直飞米兰 MXP；或广州 CAN / 香港 HKG 经法兰克福、迪拜或多哈中转抵达日内瓦 GVA。",
      "回程：从苏黎世 ZRH 或日内瓦 GVA 出发返程，优先选择少转机时长。"
    ]
  },
  {
    title: "城际衔接",
    label: "Transfer",
    items: [
      "法到意：穿越 11.6km 勃朗峰隧道，自驾最高效。",
      "意到瑞：奥尔蒂塞伊经米兰、Visp 转火车进入策马特。"
    ]
  },
  {
    title: "区域通行",
    label: "Pass",
    items: [
      "瑞士旅行通票覆盖策马特至格林德瓦全线火车。",
      "多洛米蒂山路复杂，建议租紧凑型 SUV 并预留停车时间。"
    ]
  }
];

export const stays: StayCard[] = [
  {
    region: "CHAMONIX · 霞慕尼",
    accent: "#c6a15d",
    luxury: {
      name: "Hameau Albert 1er",
      note: "米其林餐厅加持，窗外即勃朗峰。"
    },
    value: {
      name: "Hotel Pointe Isabelle",
      note: "镇中心绝佳位置，现代简约。"
    }
  },
  {
    region: "DOLOMITES · 多洛米蒂",
    accent: "#d86a4a",
    luxury: {
      name: "Adler Spa Resort Dolomiti",
      note: "Ortisei，极致 SPA 与山间泳池。"
    },
    value: {
      name: "Hotel Montana",
      note: "Cortina 步行街旁，温馨家庭旅馆。"
    }
  },
  {
    region: "ZERMATT · 策马特",
    accent: "#67b9d6",
    luxury: {
      name: "The Omnia · Zermatt",
      note: "悬崖之上，极简美学正对马特洪峰。"
    },
    value: {
      name: "Bahnhof Hotel",
      note: "火车站正对面，干净实用实惠。"
    }
  },
  {
    region: "GRINDELWALD · 格林德瓦",
    accent: "#e9877d",
    luxury: {
      name: "Hotel Belvedere",
      note: "百年经典，露台正对艾格峰北壁。"
    },
    value: {
      name: "Hotel Bernerhof",
      note: "近火车站，质朴瑞士木屋风。"
    }
  }
];
