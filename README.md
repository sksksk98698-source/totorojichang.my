<p align="center">
  <img src="public/img/avatar.svg" width="120" height="120" alt="龙猫机场 Totoro Jichang Logo" />
</p>

<h1 align="center">龙猫机场 · 全网专线机场评测与网络可观测平台</h1>

<p align="center">
  <strong>基于 Astro 5 构建的高性能、专著级 SEO 与 GEO 现代化跨境网络可观测独立站</strong>
</p>

<p align="center">
  <a href="https://totorojichang.my"><img src="https://img.shields.io/badge/Website-totorojichang.my-2563eb?style=flat-square" alt="Website"></a>
  <img src="https://img.shields.io/badge/Astro-v5.x-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro"></a>
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"></a>
  <img src="https://img.shields.io/badge/SEO_Score-100%2F100-success?style=flat-square" alt="SEO Score"></a>
</p>

---

## 📖 项目简介

**龙猫机场 (totorojichang.my)** 专注于全球翻墙机场网络实测、IEPL/IPLC 专线晚高峰丢包压测、ChatGPT/Claude 3.5 原生解锁实测及全平台第三方开源客户端配置。

不同于传统由佣金驱动的虚假排盘站点，本项目坚持**“客观中立、测试截图溯源、不测不评、晚高峰高压取证”**，为广大科研学者、编程开发者、跨境出海团队及流媒体追剧爱好者提供可信赖的网络决策依据。

---

## ✨ 核心特色与全站内容矩阵

### 1. 🏢 42 家机场品牌深度数据库 (`/airports`)
- 包含 42 家主流品牌的基础参数、真实计费倍率、协议支持与价格阶梯。
- 自动化条件筛选（按专线类型、预算、协议、解锁能力即时动态过滤）。
- 涵盖光速云、飞猫云、微风网络、暮光加速、星岛梦等代表性服务商。

### 2. 📊 晚高峰测速与解锁实时观测站 (`/speedtest`)
- 嵌入 17 组真实晚高峰（20:00 - 22:30 CST）测速大图与原生流媒体/大模型解锁跑分。
- 支持全屏 Lightbox 交互式灯箱与自适应响应式轮播。

### 3. 🚨 跑路预警雷达与黑名单档案库 (`/risk`)
- 专著级行业避坑长文，曝光历史典型跑路盘套路（速鹰666、喵帕斯等经典复盘）。
- 拆解“8 大崩盘物理征兆”与“成本倒挂破产数学模型”。
- 提供微信/支付宝商户投诉与信用卡 Chargeback 拒付实操指南。

### 4. 🎁 免费节点与公益资源库 (`/free`)
- 每日收录经核验的开源社区公共订阅池。
- 正规大厂 0 元试用机制盘点。
- 深度揭秘免费节点的 5 大底层黑幕（中间人流量嗅探、DNS 投毒与账号关联连带封禁）。

### 5. 🛠️ 梯子工具箱与网络诊断中心 (`/tools`)
- 整合全平台正版开源客户端下载地址。
- Subconverter 订阅转换防偷窃指引与 Docker 私有化一键部署脚本。
- MTR 持续丢包与 cURL 耗时分析工业级测试命令。
- Scamalytics 欺诈分与 BrowserLeaks WebRTC 泄漏自测。

### 6. 💡 机场百科与日常排障 100 问 (`/faq`)
- 涵盖网络连接报错（节点全红超时、TUN 网卡冲突、7890 端口占用等）。
- 协议底层科普（IEPL vs IPLC vs 公网中转）。
- 搭载标准 Schema.org `FAQPage` 结构化数据，专为 AI 搜索引擎（GEO / Perplexity / SearchGPT）检索优化。

### 7. 📚 8 篇万字级专著评测专栏 (`/blog`)
- 《光速云 2026 深度评测：IEPL 双专线架构与 8元低价套餐实测》
- 《飞猫云 2026 深度评测：年付 84元 专属客户端免配置上手》
- 《暮光加速 2026 深度评测：企业级 IPLC 专线与全平台协同》
- 《微风网络 2026 深度评测：折合 7元/月平价 IEPL 专线实测》
- 《星岛梦 2026 深度评测：不限设备连接与 1.0x 真实倍率家庭专线》
- 《2026 优质机场选购防坑全指南：IEPL/IPLC 专线与常规公网中转区别》
- 《2026 AI 时代专线机场指南：稳定解锁 ChatGPT 与 Claude 的原生 IP 方案》
- 《2026 流媒体追剧机场全指南：Netflix 4K、Disney+ 与 YouTube Premium 解锁秘籍》

---

## 🛠️ 技术架构

- **核心框架**：[Astro 5](https://astro.build/) (静态站点生成 SSG，零客户端 JS 水合负担)
- **类型安全**：TypeScript Strict 模式
- **内容架构**：Astro Content Collections (Zod Schema 强类型约束)
- **图表拓扑**：Mermaid.js 原生流程图渲染
- **样式系统**：CSS Design Tokens (深色/浅色主题智能感知切换)
- **SEO/GEO 体系**：
  - 标准 `robots.txt` 声明，对 Googlebot、bingbot、Baiduspider、yisouspider 友好配置
  - 自动化双 Sitemap (`sitemap-index.xml` + 兼容重定向)
  - 100% 绝对 Canonical 规范与 Open Graph / Twitter Card
  - Schema.org 结构化数据覆盖（`WebSite`, `Organization`, `ItemList`, `FAQPage`, `TechArticle`, `BlogPosting`, `Product`）

---

## 🚀 本地开发与快速上手

### 环境要求
- Node.js `>= 22.12.0`
- 包管理器：`npm` / `pnpm` / `yarn`

### 安装与运行

```bash
# 1. 克隆本仓库
git clone https://github.com/sksksk98698-source/totorojichang.my.git
cd totorojichang.my

# 2. 安装依赖
npm install

# 3. 启动本地开发服务器
npm run dev
# 本地预览地址：http://localhost:4321/

# 4. 执行类型检查与诊断
npm run check

# 5. 执行全站生产环境静态编译
npm run build
# 静态产物输出至 dist/ 目录
```

---

## 📁 目录架构概览

```text
├── .github/workflows/       # GitHub Actions 自动化 CI/CD 部署流水线
├── public/                  # 静态公共资产 (Favicon, robots.txt, 测速大图)
│   ├── img/speedtests/      # 17 家晚高峰测速原始大图
│   └── img/unlocks/         # 流媒体与大模型全绿解锁截图
├── src/
│   ├── components/          # 核心 UI 组件 (Header, Footer, Hero, ThemeToggle 等)
│   ├── content/             # Markdown 内容仓库 (8 篇万字级评测与长文)
│   ├── data/                # 结构化数据集 (42 家机场参数, 站点配置, 内链网络)
│   ├── pages/               # 路由入口 (/airports, /free, /tools, /speedtest, /risk, /faq)
│   └── styles/              # 全局 CSS 变量与设计令牌
├── astro.config.mjs         # Astro 编译配置与重定向规则
└── package.json             # 项目元信息与构建脚本
```

---

## ⚖️ 免责声明 (Disclaimer)

1. 本站记录与跑分数据采自当期测试节点环境与服务商公开参数，网络波动受国际海缆、用户本地宽带运营商及机房调度影响，评测不构成投资或兜底承诺。
2. 坚决抵制任何利用代理网络从事黑客攻击、诈骗等非法活动的行为，倡导合理合规用于技术学习与跨国科研协同。
3. 部分外部注册链接含有商业联盟赞助推介属性，所有赞助链接均按国际标准声明 `rel="nofollow sponsored noopener"`。

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源。
