# AI Tools Hub - 项目文档

## 项目概述

### 背景
这是一个AI工具测评站项目，作为副业项目开发，目标是通过内容营销获得联盟佣金收入。

### 项目定位
- **站点类型**: AI工具导航/测评博客站
- **目标受众**: 寻找AI工具的创作者、开发者、企业用户
- **语言**: 英文（面向海外市场）
- **主要变现方式**: 联盟佣金 + AdSense

## 技术选型

### 技术栈
| 技术 | 选择 | 原因 |
|------|------|------|
| 框架 | Astro 4.x | 静态站、极快、SEO友好、零成本部署 |
| 样式 | Tailwind CSS | 快速开发、响应式 |
| 内容 | MDX + Content Collections | 结构化内容管理 |
| 部署 | Vercel/Netlify | 免费、自动部署、CDN |

### 为什么选 Astro
1. **性能极佳**: 静态生成，加载速度快
2. **SEO友好**: 默认优化，结构清晰
3. **零成本**: Vercel免费托管
4. **开发快**: 熟悉的组件化开发

## 变现策略

### 收入来源
| 来源 | 占比 | 说明 |
|------|------|------|
| SaaS联盟佣金 | 60-70% | Notion AI, Jasper, Copy.ai 等 |
| Google AdSense | 20-30% | 补充收入 |
| 赞助文章 | 10% | 后期有流量后 |

### 推荐联盟计划
1. **Jasper AI** - 30% recurring commission
2. **Copy.ai** - 25% recurring
3. **Notion AI** - 50% first payment
4. **Writesonic** - 30% recurring
5. **Rytr** - 30% recurring
6. **Surfer SEO** - 25% recurring

## 内容策略

### 核心内容类型
1. **工具测评**: 深度评测单个AI工具
2. **对比文章**: "Jasper vs Copy.ai" 类SEO流量词
3. **榜单文章**: "Best AI Tools for X" 高搜索量词
4. **教程指南**: 如何使用某工具解决具体问题

### SEO关键词方向
- "Best AI writing tools 2024"
- "AI tools for [specific use case]"
- "[Tool A] vs [Tool B]"
- "[Tool name] review"

## 项目结构

```
ai-tools-hub/
├── src/
│   ├── components/        # UI组件
│   │   ├── ToolCard.astro       # 工具卡片
│   │   ├── ArticleCard.astro    # 文章卡片
│   │   ├── ToolDetail.astro     # 工具详情
│   │   ├── AffiliateButton.astro # 联盟按钮
│   │   ├── Newsletter.astro     # 订阅组件
│   │   └── ComparisonTable.astro # 对比表格
│   ├── layouts/
│   │   └── BaseLayout.astro     # 基础布局（含导航、页脚）
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── tools.astro          # 工具列表
│   │   ├── reviews.astro        # 文章列表
│   │   ├── about.astro          # 关于页面
│   │   ├── categories.astro     # 分类列表
│   │   ├── reviews/[slug].astro # 文章详情
│   │   └── categories/[slug].astro # 分类详情
│   ├── lib/
│   │   ├── tools.ts             # 工具数据和类型
│   │   └── affiliates.ts        # 联盟链接配置
│   └── content/          # MDX内容（可扩展）
├── public/               # 静态资源
│   └── favicon.svg
├── astro.config.mjs      # Astro配置
├── tailwind.config.mjs   # Tailwind配置
├── tsconfig.json         # TypeScript配置
├── package.json          # 依赖
├── PROJECT.md            # 本文档
├── DEPLOYMENT.md         # 部署指南
└── CONTENT.md            # 内容创作指南
```

## 开发进度

### ✅ 已完成
- [x] 项目立项和规划
- [x] 技术选型确定
- [x] 项目初始化（Astro + Tailwind + TypeScript）
- [x] 基础布局和导航
- [x] 首页设计（Hero、分类、精选工具）
- [x] 工具列表页
- [x] 文章列表页
- [x] 分类页面（动态路由）
- [x] 文章详情页（动态路由）
- [x] 关于页面
- [x] 联盟链接模块
- [x] 工具数据结构
- [x] 部署文档

### 🚧 待完成
- [ ] 安装依赖并测试构建
- [ ] 注册域名
- [ ] 部署到Vercel
- [ ] 添加更多工具数据
- [ ] 撰写真实文章内容
- [ ] 配置Google Analytics
- [ ] 提交Sitemap到Google

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建
npm run preview
```

## 后续维护指南

### 添加新工具
1. 在 `src/lib/tools.ts` 的 `tools` 数组添加新条目
2. 按照现有格式填写所有字段
3. 确保分类slug正确

### 添加新文章
1. 在 `src/pages/reviews/[slug].astro` 的 `getStaticPaths` 添加新文章
2. 或创建新的静态页面

### 更新联盟链接
1. 编辑 `src/lib/affiliates.ts`
2. 更新对应的链接

### 部署更新
- 推送到main分支自动部署
- Vercel/Netlify会自动检测并构建

## 相关文档

- [部署指南](./DEPLOYMENT.md) - 部署和配置说明
- [内容指南](./CONTENT.md) - 内容创作规范

## 联系和资源

- 部署平台: Vercel
- 域名: 待注册
- 分析工具: Google Analytics (待配置)

---
*文档创建时间: 2024*
*最后更新: 项目开发完成，待安装依赖和部署*
