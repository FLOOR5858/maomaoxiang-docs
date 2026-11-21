# 毛毛象实验室 · 产品文档站

基于 Docusaurus 3.10.1 的产品文档中心，部署在 `docs.maomaoxiang.com`。

## 本地开发

```bash
npm install
npm start
```

浏览器打开 `http://localhost:3000`。

## 构建

```bash
npm run build
npm run serve
```

## 目录结构

```
docs/                     文档源文件（Markdown）
  intro.md                首页 / 产品总览
  product/                产品规格
  hardware/               硬件与接口
  software/               SDK 与开发
  downloads.md            资料下载
  faq.md                  常见问题
  support.md              售后政策
static/                   静态资源（原样复制到站点根目录）
  CNAME                   自定义域名声明
  img/                    Logo 与 favicon
src/css/custom.css        主题样式
sidebars.js               左侧导航
docusaurus.config.js      站点配置
.github/workflows/        自动部署
发产品手册.md             日常更新操作手册
域名配置说明.md           子域名与 Pages 配置步骤
```

## 上线流程

1. 在域名 DNS 后台添加 `docs` 的 CNAME 记录（见《域名配置说明》）
2. GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**
3. `git push` 到 `main` 分支，Actions 自动构建并部署

## 与博客站的关系

| 站点 | 仓库 | 域名 | 用途 |
|---|---|---|---|
| 技术博客 | FLOOR5858.github.io | www.maomaoxiang.com | 文章、分类、RSS |
| 产品文档 | maomaoxiang-docs | docs.maomaoxiang.com | 产品参数、资料下载、FAQ |
