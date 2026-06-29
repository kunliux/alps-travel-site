# 法意瑞阿尔卑斯 15 天巅峰之旅

Astro + TypeScript 静态站点，用于展示「法意瑞阿尔卑斯 15 天巅峰之旅」路线、每日行程、交通规划和住宿建议。目标部署平台是 Cloudflare Pages，最终地址：

```text
https://alps.pages.dev
```

## 本地启动

```bash
npm install
npm run dev
```

默认本地地址是 `http://localhost:4321`。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。Cloudflare Pages 也使用这个目录。

最近一次本地校验：

- `npm run build`：通过，Astro check 0 errors / 0 warnings
- Lighthouse：发布到 Cloudflare Pages 后复测

## 目录结构

```text
src/
  pages/           Astro 路由页面
  templates/       首页 HTML 模板
  components/      后续组件化扩展预留
  layouts/         后续页面布局预留
  data/            后续结构化内容扩展预留
public/
  alps_assets/     旅行图片、路线图素材
  _headers         Cloudflare Pages 缓存与安全响应头
```

## 如何更新网站内容

当前首页以确认过的视觉稿为基准，源码来自 `alps_travel_site_latest.zip`。

- 修改首页内容：编辑 `src/templates/alps-preview.html`
- 更新素材：替换 `public/alps_assets/` 下的同名文件
- 更新为新压缩包：将压缩包里的 `index.html` 覆盖到 `src/templates/alps-preview.html`，将 `alps_assets/` 覆盖到 `public/alps_assets/`
- 覆盖模板后需要保留本项目已加入的 SEO、图片 lazy loading、本地 Tailwind CSS、按需背景加载和 Material Symbols 子集加载优化

图片放在 `public/alps_assets/`，在模板、数据或组件中使用 `/alps_assets/文件名.webp` 引用。

## 后续新增页面

在 `src/pages/` 下新增 `.astro` 文件即可生成静态路由。例如：

```text
src/pages/packing-list.astro
```

对应访问路径为 `/packing-list`。

新增页面建议复用 `BaseLayout.astro`，以继承 SEO、Open Graph、favicon 和主题色配置。

## Cloudflare Pages 配置

Cloudflare Pages 项目建议配置：

| 配置项 | 值 |
| --- | --- |
| Project name | `alps` |
| Production branch | `master` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js version | 22 或更高 |

仓库内也包含 `wrangler.toml`：

```toml
name = "alps"
pages_build_output_dir = "dist"
compatibility_date = "2026-06-29"
```

## 自动部署

推荐方式是 Cloudflare Pages 连接 GitHub 仓库：

1. 在 Cloudflare Dashboard 创建 Pages 项目。
2. 选择 `Connect to Git`。
3. 授权并选择 GitHub 仓库 `alps-travel-site`。
4. 使用上方构建配置。
5. 保存后，每次 push 到 `master` 都会自动构建并发布到 `https://alps.pages.dev`。

Cloudflare 官方 Git integration 文档说明：连接 GitHub/GitLab 后，每次 push 到分支都会自动构建和部署。不要优先创建 Direct Upload 项目；Cloudflare 文档明确提示 Direct Upload 项目之后不能切换到 Git integration。
