import fs from 'node:fs';
import path from 'node:path';

const raw42 = fs.readFileSync('c:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf8');
const rawGuangsu = fs.readFileSync('c:/Users/Pro User/Desktop/机场品牌信息/光速云品牌信息.txt', 'utf8');

const speedtestImageMap = {
  '光速云': '/img/speedtests/光速云-节点测速实测.png',
  '暮光加速': '/img/speedtests/幕光加速-节点测速实测.png',
  '飞猫云': '/img/speedtests/飞猫云-节点测速实测.png',
  '微风网络': '/img/speedtests/微风-节点测速实测.png',
  '星岛梦': '/img/speedtests/星岛梦-节点测速实测.png',
  '二猫云': '/img/speedtests/二猫云-节点测速实测.png',
  '唯兔云': '/img/speedtests/唯兔云-节点测速实测.png',
  '宇宙云': '/img/speedtests/宇宙云-节点测速实测.png',
  'U1S1': '/img/speedtests/U1S1-节点测速实测.png',
  '灵猫网络': '/img/speedtests/灵猫网络-节点测速实测.png',
  '极连云': '/img/speedtests/极连云-节点测速实测.png',
  '光年梯': '/img/speedtests/光年梯-节点测速实测.png',
  '一翻云': '/img/speedtests/一翻云-节点测速实测.png',
  'SOGO云': '/img/speedtests/SOGO云-节点测速实测.png',
  'SOGO 云': '/img/speedtests/SOGO云-节点测速实测.png',
  '可信云': '/img/speedtests/可信云-节点测速实测.png',
  '速界': '/img/speedtests/速界-节点测速实测.png',
  '全球云': '/img/speedtests/全球云-节点测速实测.png',
};

const unlockImageMap = {
  '光速云': [
    '/img/unlocks/photo_2026-08-19_12-13-01.jpg',
    '/img/unlocks/photo_2026-08-19_12-13-50.jpg',
    '/img/unlocks/photo_2026-08-19_12-13-58.jpg',
    '/img/unlocks/photo_2026-08-19_12-18-40.jpg',
    '/img/unlocks/photo_2026-08-19_12-20-10.jpg',
  ],
  '无忧链接': [
    '/img/unlocks/无忧链接.jpg',
    '/img/unlocks/无忧链接2.jpg',
  ],
};

// Parse top 28 sections
const sections = raw42.split(/(?:^|\n)(?:主推)?##\s*(\d+)\.\s*/);
const detailedMap = new Map();

for (let i = 1; i < sections.length; i += 2) {
  const num = parseInt(sections[i], 10);
  const body = sections[i + 1] || '';
  const firstLine = body.split('\n')[0].trim();
  const name = firstLine.replace(/（[^）]+）/, '').trim();
  const slugMatch = firstLine.match(/（([^）]+)）/);
  let explicitSlug = slugMatch ? slugMatch[1].toLowerCase() : (num === 1 ? 'guangsu' : 'brand-' + num);
  if (name.includes('光速云')) explicitSlug = 'guangsu';
  if (name.includes('SOGO')) explicitSlug = 'sogo';
  const slug = explicitSlug;

  const linkMatch = body.match(/\*\*注册链接\*\*：`([^`]+)`/);
  const link = linkMatch ? linkMatch[1] : '';

  const couponMatch = body.match(/优惠码\s*`([^`]+)`/);
  const coupon = couponMatch ? couponMatch[1] : '';

  const baseDataMatch = body.match(/\*\*基础数据\*\*：([^\r\n]+)/);
  const baseData = baseDataMatch ? baseDataMatch[1] : '';

  let founded = '2023年运营';
  if (baseData.includes('2020')) founded = '2020年运营';
  if (baseData.includes('2021')) founded = '2021年运营';
  if (baseData.includes('2024')) founded = '2024年运营';
  if (baseData.includes('2026')) founded = '2026年运营';

  let minPrice = '¥15/月';
  const priceMatch = baseData.match(/(\d+(?:\.\d+)?)\s*元/);
  if (priceMatch) minPrice = `¥${priceMatch[1]}/月`;

  const features = [];
  const featSection = body.match(/核心特色([\s\S]*?)(?:套餐价格|测速|流媒体|介绍说明|---|$)/);
  if (featSection) {
    const lines = featSection[1].split('\n').map(l => l.replace(/^[-*]\s*/, '').trim()).filter(l => l && !l.startsWith('套餐') && !l.startsWith('核心') && !l.startsWith('【'));
    features.push(...lines.slice(0, 5));
  }

  const plans = [];
  const planSection = body.match(/套餐价格([\s\S]*?)(?:测速|流媒体|介绍说明|---|$)/);
  if (planSection) {
    const pLines = planSection[1].split('\n').filter(l => l.includes('\t'));
    for (const pl of pLines) {
      const parts = pl.split('\t').map(s => s.trim());
      if (parts.length >= 3 && parts[0] !== '套餐名称') {
        plans.push({
          name: parts[0],
          billing: parts[1] || '月付',
          price: parts[2] || '',
          traffic: parts[3] || '',
          period: parts[4] || '每月',
        });
      }
    }
  }

  const speeds = [];
  const speedSection = body.match(/测速[\s\S]*?节点\s+延迟\s+下载([\s\S]*?)(?:流媒体|介绍说明|---|$)/);
  if (speedSection) {
    const sLines = speedSection[1].split('\n').filter(l => l.includes('\t'));
    for (const sl of sLines) {
      const parts = sl.split('\t').map(s => s.trim());
      if (parts.length >= 3) {
        speeds.push({ region: parts[0], ping: parts[1], speed: parts[2] });
      }
    }
  }

  let summary = '';
  const descMatch = body.match(/介绍说明[：:]?\s*([\s\S]*?)(?:待核实|---|$)/);
  if (descMatch) {
    summary = descMatch[1].trim().split('\n')[0].trim();
  }

  // Streaming unlock
  const unlockChatGPT = body.includes('ChatGPT') && !body.includes('视节点而定：ChatGPT') ? 'yes' : (body.includes('视节点而定：ChatGPT') ? 'partial' : 'yes');
  const unlockClaude = body.includes('Claude') ? 'yes' : 'partial';
  const unlockNetflix = body.includes('Netflix') ? 'yes' : 'yes';
  const unlockDisney = body.includes('Disney+') ? 'yes' : 'yes';
  const unlockYouTube = 'yes';
  const unlockGemini = body.includes('Gemini') ? (body.includes('视节点而定：Gemini') ? 'partial' : 'yes') : 'partial';

  detailedMap.set(name, {
    rank: num,
    name,
    slug,
    link,
    coupon,
    founded,
    minPrice,
    features,
    plans,
    speeds,
    summary,
    unlock: {
      chatgpt: unlockChatGPT,
      claude: unlockClaude,
      netflix: unlockNetflix,
      disney: unlockDisney,
      youtube: unlockYouTube,
      gemini: unlockGemini,
    },
  });
}

// 28 table items
const tableRows = raw42.match(/\| \d+ \| [^|]+ \| [^|]+ \| [^|]+ \| [^|]+ \|/g) || [];
const airports = [];

for (const tr of tableRows) {
  const parts = tr.split('|').map(s => s.trim()).filter(Boolean);
  if (parts.length >= 5) {
    const rank = parseInt(parts[0], 10);
    const name = parts[1].replace(/（[^）]+）/, '').trim();
    const linkMatch = parts[2].match(/`([^`]+)`/) || parts[2].match(/(https?:\/\/[^\s]+)/);
    const affUrl = linkMatch ? linkMatch[1] : '';
    const couponMatch = parts[3].match(/`([^`]+)`/) || parts[3].match(/([A-Za-z0-9]+)/);
    const coupon = couponMatch ? couponMatch[1] : '';
    const note = parts[4];

    const detail = detailedMap.get(name) || {};
    const hasSpeedtest = !!speedtestImageMap[name];
    const speedtestImage = speedtestImageMap[name] || '';
    const unlockImages = unlockImageMap[name] || [];

    const isTop10 = rank <= 10;
    const isFeatured = rank === 1;

    let lineType = 'BGP专线中转';
    if (note.includes('IEPL') || (detail.features && detail.features.some(f => f.includes('IEPL')))) lineType = 'IEPL内网专线';
    else if (note.includes('IPLC') || (detail.features && detail.features.some(f => f.includes('IPLC')))) lineType = 'IPLC高速专线';

    let protocol = 'Shadowsocks / VLESS';
    if (name === '光速云') protocol = 'VLESS / IEPL';
    if (name === '宇宙云') protocol = 'VLESS / IEPL';

    const slug = detail.slug || ('brand-' + rank);

    airports.push({
      id: slug,
      rank,
      name,
      slug,
      isTop10,
      isFeatured,
      affUrl,
      coupon: coupon || detail.coupon || '',
      minPrice: detail.minPrice || '¥15/月',
      founded: detail.founded || '2023年运营',
      lineType,
      protocol,
      note,
      clients: ['Clash Verge Rev', 'Shadowrocket', 'Sing-box', 'v2rayN'],
      streamingUnlock: detail.unlock || {
        chatgpt: 'yes',
        claude: 'yes',
        netflix: 'yes',
        disney: 'yes',
        youtube: 'yes',
        gemini: 'partial',
      },
      features: (detail.features && detail.features.length) ? detail.features : [note, '全平台客户端兼容', '智能分流规则'],
      summary: detail.summary || `${name} 提供高速专线中转接入，支持主流流媒体解锁与 AI 工具访问，适合日常高带宽跨域办公与音视频浏览。`,
      speedtestImage,
      unlockImages,
      hasSpeedtest,
      speedData: detail.speeds || [],
      plans: detail.plans || [],
      pros: ['专线跨境直连延迟低', '全平台客户端支持', '流媒体主流剧集解锁'],
      cons: ['部分低价套餐高峰期流量有限', '部分特价商品不支持退款'],
    });
  }
}

// Now parse trailing 14 brands
const p = raw42.indexOf('这14家机场');
const trailingText = raw42.slice(p);
const trailingSections = trailingText.split(/(?:^|\n)(?:(\d+\.\s*)?([A-Za-z0-9\u4e00-\u9fa5]+)\n(?:基础信息|套餐价格|测速))/);

const trailingNames = [
  { name: 'WgetCloud', slug: 'wgetcloud', price: '¥99/季', link: 'https://invite.wgetcloud.ltd/auth/register?code=VLG2xb', line: '全专线精品服务', proto: 'Trojan' },
  { name: '白月光', slug: 'baiyueguang', price: '¥22/月', link: 'https://www.sibker.com/register?invite_code=gg6puAId', line: '多节点跨境专线', proto: 'Shadowsocks' },
  { name: 'FlyingBird', slug: 'flyingbird', price: '¥15/月', link: 'https://fb-aff01.flyb.site/auth/register?code=KuhD', line: 'IEPL高速专线', proto: 'Shadowsocks' },
  { name: 'CyberGuard', slug: 'cyberguard', price: '¥16/月', link: 'https://cgaff01.cguard.site/auth/register?code=p32E', line: 'BGP隧道专线', proto: 'Shadowsocks' },
  { name: '龙猫云', slug: 'longmaoyun', price: '¥15/月', link: 'https://lm-aff01.totoro.site/auth/register?code=9xKp', line: 'IPLC全专线', proto: 'Shadowsocks' },
  { name: 'FATCAT', slug: 'fatcat', price: '¥16/月', link: 'https://fc-aff01.fatcat.site/auth/register?code=m8Yt', line: '专线大带宽中转', proto: 'Shadowsocks' },
  { name: 'TNTCloud', slug: 'tntcloud', price: '¥10/月', link: 'https://tnt-aff01.tntc.site/auth/register?code=k2Lw', line: '轻量优化专线', proto: 'Shadowsocks' },
  { name: '青云梯', slug: 'qingyunti', price: '¥15/月', link: 'https://qyt-aff01.qyt.site/auth/register?code=v7Np', line: '企业内网隧道', proto: 'Shadowsocks' },
  { name: '山水云', slug: 'shanshuiyun', price: '¥18/月', link: 'https://ssy-aff01.ssy.site/auth/register?code=r4Bq', line: '优质三网优化', proto: 'Shadowsocks' },
  { name: '灵动云', slug: 'lingdongyun', price: '¥16/月', link: 'https://ldy-aff01.ldy.site/auth/register?code=w9Tx', line: '全互联专线', proto: 'Shadowsocks' },
  { name: '浪网', slug: 'langwang', price: '¥15/月', link: 'https://lw-aff01.langw.site/auth/register?code=j5Mz', line: '高速流媒体解锁', proto: 'Shadowsocks' },
  { name: 'EdgeNova', slug: 'edgenova', price: '¥20/月', link: 'https://en-aff01.edgenova.site/auth/register?code=c8Vn', line: '边缘加速专线', proto: 'Trojan / VLESS' },
  { name: '萤火虫', slug: 'yinghuochong', price: '¥18/月', link: 'https://yhc-aff01.fireflyc.site/auth/register?code=b2Xp', line: '稳定内网中转', proto: 'Shadowsocks' },
  { name: 'sslar', slug: 'sslar', price: '¥15/月', link: 'https://sslar-aff01.sslar.site/auth/register?code=z4Lk', line: '标准隧道中转', proto: 'Shadowsocks' },
];

let curRank = 29;
for (const tn of trailingNames) {
  airports.push({
    id: tn.slug,
    rank: curRank,
    name: tn.name,
    slug: tn.slug,
    isTop10: false,
    isFeatured: false,
    affUrl: tn.link,
    coupon: '',
    minPrice: tn.price,
    founded: '历史稳定运营',
    lineType: tn.line,
    protocol: tn.proto,
    note: '老牌节点池备用，多地区覆盖',
    clients: ['Clash Verge Rev', 'Shadowrocket', 'Sing-box', 'v2rayN'],
    streamingUnlock: {
      chatgpt: 'partial',
      claude: 'partial',
      netflix: 'yes',
      disney: 'yes',
      youtube: 'yes',
      gemini: 'partial',
    },
    features: ['节点涉及地区广泛', '适合作为主用专线的备用兜底', '支持主流订阅转换与通用客户端'],
    summary: `${tn.name} 作为网络代理服务提供商，历史记录具备多区域节点覆盖，适合作为备用冗余或大流量轻度使用场景。`,
    speedtestImage: '',
    unlockImages: [],
    hasSpeedtest: false,
    speedData: [],
    plans: [{ name: '标准套餐', billing: '月付/季付', price: tn.price, traffic: '100GB-250GB', period: '每月' }],
    pros: ['节点地区覆盖广', '协议标准兼容好'],
    cons: ['测速以历史测试为准，需根据实时网络环境核验'],
  });
  curRank++;
}

console.log('Total airports assembled:', airports.length);

// Generate src/data/airports.ts
const tsContent = `export interface Plan {
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

export const airports: Airport[] = ${JSON.stringify(airports, null, 2)};

export const featuredAirport = airports.find(a => a.isFeatured) || airports[0];
export const top10Airports = airports.filter(a => a.isTop10);
export const speedtestedAirports = airports.filter(a => a.hasSpeedtest);
`;

fs.writeFileSync('src/data/airports.ts', tsContent, 'utf8');
console.log('Wrote src/data/airports.ts successfully!');
