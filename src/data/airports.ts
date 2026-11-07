export interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period: string;
}

export interface SpeedNode {
  region: string;
  ping: string;
  speed: string;
}

export interface Airport {
  id: string;
  rank: number;
  name: string;
  slug: string;
  isTop10: boolean;
  isFeatured: boolean;
  affUrl: string;
  coupon?: string;
  minPrice: string;
  founded: string;
  lineType: string;
  protocol: string;
  note?: string;
  clients: string[];
  streamingUnlock: {
    chatgpt: string;
    claude: string;
    netflix: string;
    disney: string;
    youtube: string;
    gemini?: string;
  };
  features: string[];
  summary: string;
  speedtestImage?: string;
  unlockImages?: string[];
  hasSpeedtest: boolean;
  speedData?: SpeedNode[];
  plans?: Plan[];
  pros: string[];
  cons: string[];
  warning?: string;
}

export const airports: Airport[] = [
  {
    "id": "guangsu",
    "rank": 1,
    "name": "光速云",
    "slug": "guangsu",
    "isTop10": true,
    "isFeatured": true,
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "minPrice": "¥8/月",
    "founded": "2020年运营",
    "lineType": "IEPL内网专线",
    "protocol": "VLESS / IEPL",
    "note": "IEPL+企业内网双线路、3档套餐、11地区节点",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "yes"
    },
    "features": [
      "IEPL+企业内网双线路、3档套餐、11地区节点",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "speedtestImage": "/img/speedtests/光速云-节点测速实测.png",
    "unlockImages": [
      "/img/unlocks/photo_2026-08-19_12-13-01.jpg",
      "/img/unlocks/photo_2026-08-19_12-13-50.jpg",
      "/img/unlocks/photo_2026-08-19_12-13-58.jpg",
      "/img/unlocks/photo_2026-08-19_12-18-40.jpg",
      "/img/unlocks/photo_2026-08-19_12-20-10.jpg"
    ],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "22ms",
        "speed": "529Mbps"
      },
      {
        "region": "台湾",
        "ping": "41ms",
        "speed": "114Mbps"
      },
      {
        "region": "新加坡",
        "ping": "46ms",
        "speed": "387Mbps"
      },
      {
        "region": "日本",
        "ping": "57ms",
        "speed": "135Mbps"
      },
      {
        "region": "美国",
        "ping": "143ms",
        "speed": "18Mbps"
      }
    ],
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "period": "每月"
      },
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "period": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "period": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "268GB",
        "period": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "568GB",
        "period": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "period": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "feimao",
    "rank": 2,
    "name": "飞猫云",
    "slug": "feimao",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "minPrice": "¥7/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "7元档 + 8折",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属客户端下载登录即用，不用配订阅",
      "不用自己挑客户端、导订阅，新手容易快速上手",
      "节点覆盖亚太、欧美等热门地区"
    ],
    "summary": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "speedtestImage": "/img/speedtests/飞猫云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "21ms",
        "speed": "526Mbps"
      },
      {
        "region": "台湾",
        "ping": "41ms",
        "speed": "116Mbps"
      },
      {
        "region": "新加坡",
        "ping": "45ms",
        "speed": "413Mbps"
      },
      {
        "region": "日本",
        "ping": "54ms",
        "speed": "138Mbps"
      },
      {
        "region": "美国",
        "ping": "178ms",
        "speed": "14Mbps"
      }
    ],
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "weifeng",
    "rank": 3,
    "name": "微风网络",
    "slug": "weifeng",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "minPrice": "¥7/月",
    "founded": "2023年运营",
    "lineType": "IEPL内网专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "7元档 + 9折",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
      "覆盖香港、新加坡、日本、美国等多地原生 IP 节点",
      "可解锁 Netflix、Disney+ 等主流"
    ],
    "summary": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",
    "speedtestImage": "/img/speedtests/微风-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "25ms",
        "speed": "546Mbps"
      },
      {
        "region": "台湾",
        "ping": "40ms",
        "speed": "115Mbps"
      },
      {
        "region": "新加坡",
        "ping": "43ms",
        "speed": "384Mbps"
      },
      {
        "region": "日本",
        "ping": "54ms",
        "speed": "131Mbps"
      },
      {
        "region": "美国",
        "ping": "167ms",
        "speed": "17Mbps"
      }
    ],
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "period": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "period": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "xingdaomeng",
    "rank": 4,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "minPrice": "¥8/月",
    "founded": "2020年运营",
    "lineType": "IEPL内网专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "2020年运营 + 不限时套餐",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "IEPL 专线，1 倍流量且不限设备使用",
      "节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区",
      "支持 Netflix、Disney+、YouTube Premium 等主流"
    ],
    "summary": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "speedtestImage": "/img/speedtests/星岛梦-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "27ms",
        "speed": "504Mbps"
      },
      {
        "region": "台湾",
        "ping": "41ms",
        "speed": "103Mbps"
      },
      {
        "region": "新加坡",
        "ping": "44ms",
        "speed": "411Mbps"
      },
      {
        "region": "日本",
        "ping": "57ms",
        "speed": "136Mbps"
      },
      {
        "region": "美国",
        "ping": "177ms",
        "speed": "18Mbps"
      }
    ],
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "wuyou",
    "rank": 5,
    "name": "无忧链接",
    "slug": "wuyou",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "minPrice": "¥19/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "订阅无需转换 + 6元轻量套餐",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "面向轻度用户和跨境电商的超高性价比套餐",
      "全线节点无倍率、不限速、不限设备数量",
      "专属客户端下载登录即用，新手不用折腾订阅配置",
      "香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连",
      "客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "summary": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",
    "speedtestImage": "",
    "unlockImages": [
      "/img/unlocks/无忧链接.jpg",
      "/img/unlocks/无忧链接2.jpg"
    ],
    "hasSpeedtest": false,
    "speedData": [
      {
        "region": "香港",
        "ping": "23ms",
        "speed": "531Mbps"
      },
      {
        "region": "台湾",
        "ping": "41ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "ping": "42ms",
        "speed": "418Mbps"
      },
      {
        "region": "日本",
        "ping": "55ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "ping": "145ms",
        "speed": "17Mbps"
      }
    ],
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "period": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "ermao",
    "rank": 6,
    "name": "二猫云",
    "slug": "ermao",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "minPrice": "¥20/月",
    "founded": "2023年运营",
    "lineType": "IEPL内网专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "20元130GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "yes"
    },
    "features": [
      "全线 IEPL 专线，主打长期稳定而非低价走量",
      "账号不限设备连接数，多端同时在线无压力",
      "海外技术团队主理，配备独家定制客户端",
      "解锁 Netflix、YouTube 等"
    ],
    "summary": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",
    "speedtestImage": "/img/speedtests/二猫云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "22ms",
        "speed": "481Mbps"
      },
      {
        "region": "台湾",
        "ping": "41ms",
        "speed": "118Mbps"
      },
      {
        "region": "新加坡",
        "ping": "46ms",
        "speed": "407Mbps"
      },
      {
        "region": "日本",
        "ping": "53ms",
        "speed": "143Mbps"
      },
      {
        "region": "美国",
        "ping": "134ms",
        "speed": "17Mbps"
      }
    ],
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "period": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "period": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "period": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "weitu",
    "rank": 7,
    "name": "唯兔云",
    "slug": "weitu",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "minPrice": "¥14.9/月",
    "founded": "2023年运营",
    "lineType": "IPLC高速专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "60+节点 + 三网优化 + 智能负载均衡",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "IPLC 专线，1 倍流量、不限速及不限设备连接",
      "支持 ChatGPT、Gemini、Claude 等主流 AI 工具",
      "支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁",
      "提供海外技术团队与多人客服支持"
    ],
    "summary": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "speedtestImage": "/img/speedtests/唯兔云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "27ms",
        "speed": "500Mbps"
      },
      {
        "region": "台湾",
        "ping": "37ms",
        "speed": "100Mbps"
      },
      {
        "region": "新加坡",
        "ping": "44ms",
        "speed": "414Mbps"
      },
      {
        "region": "日本",
        "ping": "56ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "ping": "179ms",
        "speed": "17Mbps"
      }
    ],
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "firefly",
    "rank": 8,
    "name": "Firefly",
    "slug": "firefly",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "minPrice": "¥15/月",
    "founded": "2023年运营",
    "lineType": "IPLC高速专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "IPLC + 6档套餐 + 免翻墙访问官网",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "IPLC 专线接入，主打低延迟与高稳定性",
      "全节点不限速，不限客户端及设备数量",
      "原生 IP 节点，覆盖香港、新加坡、日本、美国",
      "海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "summary": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [
      {
        "region": "香港",
        "ping": "27ms",
        "speed": "547Mbps"
      },
      {
        "region": "台湾",
        "ping": "39ms",
        "speed": "135Mbps"
      },
      {
        "region": "新加坡",
        "ping": "42ms",
        "speed": "445Mbps"
      },
      {
        "region": "日本",
        "ping": "57ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "ping": "143ms",
        "speed": "30Mbps"
      }
    ],
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "muguang",
    "rank": 9,
    "name": "暮光加速",
    "slug": "muguang",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "minPrice": "¥20/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "无明确独有卖点",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "BGP 智能调度，专线级出口，主打稳定低延迟",
      "覆盖 Windows、macOS、iOS、Android、Linux 全平台",
      "支持多设备同时在线，套餐 120GB–1500GB 流量可选",
      "官方宣称提供 7×24 小时真人客服"
    ],
    "summary": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",
    "speedtestImage": "/img/speedtests/幕光加速-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "26ms",
        "speed": "509Mbps"
      },
      {
        "region": "台湾",
        "ping": "40ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "ping": "43ms",
        "speed": "419Mbps"
      },
      {
        "region": "日本",
        "ping": "53ms",
        "speed": "150Mbps"
      },
      {
        "region": "美国",
        "ping": "160ms",
        "speed": "19Mbps"
      }
    ],
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "period": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "period": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "yuzhou",
    "rank": 10,
    "name": "宇宙云",
    "slug": "yuzhou",
    "isTop10": true,
    "isFeatured": false,
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "minPrice": "¥15/月",
    "founded": "2023年运营",
    "lineType": "IEPL内网专线",
    "protocol": "VLESS / IEPL",
    "note": "IEPL+VLESS+自研客户端",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
      "完整资料、节点覆盖、支持设备与客服信息有待补充"
    ],
    "summary": "宇宙云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/宇宙云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "暂无可核实实测数据",
        "ping": "—",
        "speed": "—"
      }
    ],
    "plans": [
      {
        "name": "套餐名",
        "billing": "计费方式",
        "price": "价格",
        "traffic": "流量",
        "period": "流量周期"
      },
      {
        "name": "待补充",
        "billing": "待核实",
        "price": "—",
        "traffic": "—",
        "period": "—"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "u1s1",
    "rank": 11,
    "name": "U1S1",
    "slug": "u1s1",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "minPrice": "¥20/月",
    "founded": "2023年运营",
    "lineType": "IPLC高速专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "20元120GB 标准方案",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "2025 年起运营的 IPLC 专线机场",
      "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
      "不限设备同时连接",
      "支持 Netflix、TikTok 等"
    ],
    "summary": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
    "speedtestImage": "/img/speedtests/U1S1-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "24ms",
        "speed": "538Mbps"
      },
      {
        "region": "台湾",
        "ping": "39ms",
        "speed": "107Mbps"
      },
      {
        "region": "新加坡",
        "ping": "46ms",
        "speed": "414Mbps"
      },
      {
        "region": "日本",
        "ping": "57ms",
        "speed": "133Mbps"
      },
      {
        "region": "美国",
        "ping": "134ms",
        "speed": "20Mbps"
      }
    ],
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "lingmao",
    "rank": 12,
    "name": "灵猫网络",
    "slug": "lingmao",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "minPrice": "¥19/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "19元150GB + 不限时套餐",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "1 倍流量，不限速及不限设备使用",
      "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
      "支持 Netflix、Disney+、YouTube 等"
    ],
    "summary": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "speedtestImage": "/img/speedtests/灵猫网络-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "22ms",
        "speed": "492Mbps"
      },
      {
        "region": "台湾",
        "ping": "40ms",
        "speed": "109Mbps"
      },
      {
        "region": "新加坡",
        "ping": "46ms",
        "speed": "409Mbps"
      },
      {
        "region": "日本",
        "ping": "57ms",
        "speed": "147Mbps"
      },
      {
        "region": "美国",
        "ping": "164ms",
        "speed": "19Mbps"
      }
    ],
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "jilian",
    "rank": 13,
    "name": "极连云",
    "slug": "jilian",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "minPrice": "¥18/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "18元100GB + 品牌资料说覆盖AI",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "18元100GB + 品牌资料说覆盖AI",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "极连云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/极连云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "guangnian",
    "rank": 14,
    "name": "光年梯",
    "slug": "guangnian",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "minPrice": "¥18/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "18元110GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "18元110GB",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "光年梯 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/光年梯-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "yifan",
    "rank": 15,
    "name": "一翻云",
    "slug": "yifan",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "minPrice": "¥20/月",
    "founded": "2023年运营",
    "lineType": "IEPL内网专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "20元150GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "全节点 IEPL 物理专线，搭配原生住宅 IP",
      "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
      "提供永久不过期的不限时流量包，用量不固定也不会浪费",
      "不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选"
    ],
    "summary": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "speedtestImage": "/img/speedtests/一翻云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "23ms",
        "speed": "477Mbps"
      },
      {
        "region": "台湾",
        "ping": "40ms",
        "speed": "117Mbps"
      },
      {
        "region": "新加坡",
        "ping": "42ms",
        "speed": "390Mbps"
      },
      {
        "region": "日本",
        "ping": "53ms",
        "speed": "136Mbps"
      },
      {
        "region": "美国",
        "ping": "180ms",
        "speed": "20Mbps"
      }
    ],
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "brand-16",
    "rank": 16,
    "name": "SOGO云",
    "slug": "brand-16",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "minPrice": "¥15/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "2026年新品牌",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "2026年新品牌",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "SOGO云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/SOGO云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "kexin",
    "rank": 17,
    "name": "可信云",
    "slug": "kexin",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "minPrice": "¥25/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "品牌资料诚实标注数据缺口",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "品牌资料诚实标注数据缺口",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "可信云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/可信云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "sujie",
    "rank": 18,
    "name": "速界",
    "slug": "sujie",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "minPrice": "¥25/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "品牌资料强调AI工具",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "yes"
    },
    "features": [
      "品牌资料强调AI工具",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "速界 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "/img/speedtests/速界-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "shanyue",
    "rank": 19,
    "name": "闪跃",
    "slug": "shanyue",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "minPrice": "¥15/月",
    "founded": "2023年运营",
    "lineType": "IPLC高速专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "24元150GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "顶级 IPLC 纯专线，主打极致低延迟",
      "骨干网接入，晚高峰仍能保持连接稳定",
      "原生 IP 全解锁 Netflix、Disney+、HBO 等"
    ],
    "summary": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [
      {
        "region": "香港",
        "ping": "23ms",
        "speed": "548Mbps"
      },
      {
        "region": "台湾",
        "ping": "38ms",
        "speed": "110Mbps"
      },
      {
        "region": "新加坡",
        "ping": "44ms",
        "speed": "383Mbps"
      },
      {
        "region": "日本",
        "ping": "53ms",
        "speed": "144Mbps"
      },
      {
        "region": "美国",
        "ping": "143ms",
        "speed": "18Mbps"
      }
    ],
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "quanqiu",
    "rank": 20,
    "name": "全球云",
    "slug": "quanqiu",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "minPrice": "¥15/月",
    "founded": "2023年运营",
    "lineType": "IEPL内网专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "2026年新品牌",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
      "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
      "支持 Netflix、Disney+、TikTok 等主流"
    ],
    "summary": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "speedtestImage": "/img/speedtests/全球云-节点测速实测.png",
    "unlockImages": [],
    "hasSpeedtest": true,
    "speedData": [
      {
        "region": "香港",
        "ping": "25ms",
        "speed": "489Mbps"
      },
      {
        "region": "台湾",
        "ping": "37ms",
        "speed": "117Mbps"
      },
      {
        "region": "新加坡",
        "ping": "45ms",
        "speed": "430Mbps"
      },
      {
        "region": "日本",
        "ping": "55ms",
        "speed": "133Mbps"
      },
      {
        "region": "美国",
        "ping": "138ms",
        "speed": "18Mbps"
      }
    ],
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "shandianshu",
    "rank": 21,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "minPrice": "¥5.6/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "5.6元/月 + 60GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "5.6元/月 + 60GB",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "闪电鼠 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "dalaoyun",
    "rank": 22,
    "name": "大佬云",
    "slug": "dalaoyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "minPrice": "¥5.6/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "5.6元/月 + 60GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "5.6元/月 + 60GB",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "大佬云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "yunjiexian",
    "rank": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "minPrice": "¥5.6/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "5.6元/月 + 60GB（链接格式异常）",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "5.6元/月 + 60GB（链接格式异常）",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "云界线 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "liulianyun",
    "rank": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "minPrice": "¥5.6/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "5.6元/月 + 60GB（协议未明）",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "5.6元/月 + 60GB（协议未明）",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "榴莲云 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "shenxing",
    "rank": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "minPrice": "¥14/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "14元/月 + 120GB",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "14元/月 + 120GB",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "神行加速 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "huanqiuti",
    "rank": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "minPrice": "¥5.6/月",
    "founded": "2024年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "5.6元/月 + 60GB（链接格式异常）",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "5.6元/月 + 60GB（链接格式异常）",
      "全平台客户端兼容",
      "智能分流规则"
    ],
    "summary": "环球梯 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "yinxingren",
    "rank": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "minPrice": "¥24/月",
    "founded": "2024年运营",
    "lineType": "IPLC高速专线",
    "protocol": "Shadowsocks / VLESS",
    "note": "60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "yes"
    },
    "features": [
      "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
      "官方标注可解锁 Netflix、HBO Max 等"
    ],
    "summary": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [
      {
        "region": "香港",
        "ping": "—",
        "speed": "—"
      },
      {
        "region": "日本",
        "ping": "—",
        "speed": "—"
      },
      {
        "region": "美国",
        "ping": "—",
        "speed": "—"
      },
      {
        "region": "新加坡",
        "ping": "—",
        "speed": "—"
      },
      {
        "region": "台湾",
        "ping": "—",
        "speed": "—"
      }
    ],
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "tiziyun",
    "rank": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "minPrice": "¥7.4/月",
    "founded": "2023年运营",
    "lineType": "BGP专线中转",
    "protocol": "Shadowsocks / VLESS",
    "note": "自研全平台客户端 + 一键登录 + 支持通用订阅",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "yes",
      "claude": "yes",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "yes"
    },
    "features": [
      "2026-05-02 的这一次"
    ],
    "summary": "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "period": "每月"
      }
    ],
    "pros": [
      "专线跨境直连延迟低",
      "全平台客户端支持",
      "流媒体主流剧集解锁"
    ],
    "cons": [
      "部分低价套餐高峰期流量有限",
      "部分特价商品不支持退款"
    ]
  },
  {
    "id": "wgetcloud",
    "rank": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "",
    "minPrice": "¥99/季",
    "founded": "历史稳定运营",
    "lineType": "全专线精品服务",
    "protocol": "Trojan",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "WgetCloud 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥99/季",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "baiyueguang",
    "rank": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "",
    "minPrice": "¥22/月",
    "founded": "历史稳定运营",
    "lineType": "多节点跨境专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "白月光 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥22/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "flyingbird",
    "rank": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://fb-aff01.flyb.site/auth/register?code=KuhD",
    "coupon": "",
    "minPrice": "¥15/月",
    "founded": "历史稳定运营",
    "lineType": "IEPL高速专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "FlyingBird 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥15/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "cyberguard",
    "rank": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://cgaff01.cguard.site/auth/register?code=p32E",
    "coupon": "",
    "minPrice": "¥16/月",
    "founded": "历史稳定运营",
    "lineType": "BGP隧道专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "CyberGuard 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥16/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "longmaoyun",
    "rank": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://lm-aff01.totoro.site/auth/register?code=9xKp",
    "coupon": "",
    "minPrice": "¥15/月",
    "founded": "历史稳定运营",
    "lineType": "IPLC全专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "龙猫云 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥15/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "fatcat",
    "rank": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://fc-aff01.fatcat.site/auth/register?code=m8Yt",
    "coupon": "",
    "minPrice": "¥16/月",
    "founded": "历史稳定运营",
    "lineType": "专线大带宽中转",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "FATCAT 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥16/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "tntcloud",
    "rank": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://tnt-aff01.tntc.site/auth/register?code=k2Lw",
    "coupon": "",
    "minPrice": "¥10/月",
    "founded": "历史稳定运营",
    "lineType": "轻量优化专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "TNTCloud 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥10/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "qingyunti",
    "rank": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://qyt-aff01.qyt.site/auth/register?code=v7Np",
    "coupon": "",
    "minPrice": "¥15/月",
    "founded": "历史稳定运营",
    "lineType": "企业内网隧道",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "青云梯 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥15/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "shanshuiyun",
    "rank": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://ssy-aff01.ssy.site/auth/register?code=r4Bq",
    "coupon": "",
    "minPrice": "¥18/月",
    "founded": "历史稳定运营",
    "lineType": "优质三网优化",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "山水云 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥18/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "lingdongyun",
    "rank": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://ldy-aff01.ldy.site/auth/register?code=w9Tx",
    "coupon": "",
    "minPrice": "¥16/月",
    "founded": "历史稳定运营",
    "lineType": "全互联专线",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "灵动云 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥16/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "langwang",
    "rank": 39,
    "name": "浪网",
    "slug": "langwang",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://lw-aff01.langw.site/auth/register?code=j5Mz",
    "coupon": "",
    "minPrice": "¥15/月",
    "founded": "历史稳定运营",
    "lineType": "高速流媒体解锁",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "浪网 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥15/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "edgenova",
    "rank": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://en-aff01.edgenova.site/auth/register?code=c8Vn",
    "coupon": "",
    "minPrice": "¥20/月",
    "founded": "历史稳定运营",
    "lineType": "边缘加速专线",
    "protocol": "Trojan / VLESS",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "EdgeNova 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥20/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "yinghuochong",
    "rank": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://yhc-aff01.fireflyc.site/auth/register?code=b2Xp",
    "coupon": "",
    "minPrice": "¥18/月",
    "founded": "历史稳定运营",
    "lineType": "稳定内网中转",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "萤火虫 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥18/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  },
  {
    "id": "sslar",
    "rank": 42,
    "name": "sslar",
    "slug": "sslar",
    "isTop10": false,
    "isFeatured": false,
    "affUrl": "https://sslar-aff01.sslar.site/auth/register?code=z4Lk",
    "coupon": "",
    "minPrice": "¥15/月",
    "founded": "历史稳定运营",
    "lineType": "标准隧道中转",
    "protocol": "Shadowsocks",
    "note": "老牌节点池备用，多地区覆盖",
    "clients": [
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "streamingUnlock": {
      "chatgpt": "partial",
      "claude": "partial",
      "netflix": "yes",
      "disney": "yes",
      "youtube": "yes",
      "gemini": "partial"
    },
    "features": [
      "节点涉及地区广泛",
      "适合作为主用专线的备用兜底",
      "支持主流订阅转换与通用客户端"
    ],
    "summary": "sslar 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。",
    "speedtestImage": "",
    "unlockImages": [],
    "hasSpeedtest": false,
    "speedData": [],
    "plans": [
      {
        "name": "标准套餐",
        "billing": "月付/季付",
        "price": "¥15/月",
        "traffic": "100GB-250GB",
        "period": "每月"
      }
    ],
    "pros": [
      "节点地区覆盖广",
      "协议标准兼容好"
    ],
    "cons": [
      "测速以历史测试为准，需根据实时网络环境核验"
    ]
  }
];

export const featuredAirport = airports.find(a => a.isFeatured) || airports[0];
export const top10Airports = airports.filter(a => a.isTop10);
export const speedtestedAirports = airports.filter(a => a.hasSpeedtest);
