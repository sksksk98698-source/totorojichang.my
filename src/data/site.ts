/** A link shown in the hero and footer.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?:
    | 'github'
    | 'linkedin'
    | 'instagram'
    | 'email'
    | 'rss'
    | 'download'
    | 'arrow-right'
    | 'arrow-left'
    | 'sun'
    | 'moon';
}

/**
 * ─────────────────────────────────────────────────────────────
 *  Site identity — 龙猫机场 (totorojichang.my)
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  title: '龙猫机场 · 全网 42 家机场评测与专线测速实验室',
  shortTitle: '龙猫机场',
  description:
    '专注 2026 全球机场网络测速、IEPL/IPLC 专线稳定性实测、ChatGPT/流媒体全区解锁矩阵与第三方代理客户端配置指南。真实晚高峰数据，拒绝虚假营销。',
  url: 'https://totorojichang.my',
  author: {
    name: '龙猫机场',
    email: 'contact@totorojichang.my',
    location: 'Tokyo / Global Edge',
    resume: '/airports',
  },
  socials: {
    airports: { url: '/airports', label: '机场品牌库', icon: 'arrow-right' },
    speedtest: { url: '/speedtest', label: '实测大图', icon: 'arrow-right' },
    rss: { url: '/rss.xml', label: 'RSS 订阅', icon: 'rss' },
  } satisfies Record<string, SocialLink>,
  /** 搜索引擎站长平台所有权验证 Meta 预留插槽 */
  verification: {
    google: '', // Google Search Console 验证代码
    bing: '', // Bing Webmaster Tools msvalidate.01
    baidu: '', // 百度搜索资源平台 baidu-site-verification
    shenma: '', // 神马站长平台 shenma-site-verification
  },
};

export type SocialKey = keyof typeof site.socials;

/**
 * Prefix a root-relative path with the configured base path.
 */
export const withBase = (path: string): string => {
  if (!path) return '';
  if (!path.startsWith('/')) return path;
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const base = rawBase === '/' ? '' : rawBase.replace(/\/+$/, '');
  if (!base) return path;
  if (path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};

/**
 * Resolve a relative or root-relative path to a full canonical absolute URL.
 */
export const toAbsoluteUrl = (path: string): string => {
  if (!path) return site.url;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const resolvedPath = withBase(path);
  return `${site.url.replace(/\/+$/, '')}/${resolvedPath.replace(/^\/+/, '')}`;
};
