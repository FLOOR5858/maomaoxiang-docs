# 毛毛象实验室 · 产品文档站维护指南

> 一句话看懂：**网站的所有内容都在 GitHub 仓库里**。你改仓库里的 `.md` 文件，GitHub 会自动帮你发布到 `docs.maomaoxiang.com`。你不需要碰服务器、不需要懂后端，只需要会改文件、会点"提交"。

| 项目 | 信息 |
|---|---|
| 网站地址 | https://docs.maomaoxiang.com |
| GitHub 仓库 | https://github.com/FLOOR5858/maomaoxiang-docs |
| 默认分支 | `main` |
| 建站工具 | Docusaurus 3.10.1（静态网站，改文件 → 自动构建 → 自动上线） |
| 本地项目路径 | `C:\Users\Administrator\WorkBuddy\2026-11-21-18-17-41\maomaoxiang-docs` |

---

## 30 秒速查表（想知道"改什么"先看这里）

| 你想做的事 | 去哪里改 | 具体文件/位置 |
|---|---|---|
| 改首页文字 | 文档源文件 | `docs/intro.md` |
| 改某个产品的参数/说明 | 文档源文件 | `docs/product/` 下对应的 `.md` |
| 改 FAQ / 售后 / 下载页 | 文档源文件 | `docs/faq.md`、`docs/support.md`、`docs/downloads.md` |
| **新增一个产品** | 新建文件 + 改 3 处配置 | 见「第 4 章」 |
| 放一张图片 | 图片文件 + 正文写一行语法 | `static/img/` + `![说明](/img/xxx.png)` |
| 放一段视频 | 视频平台 或 `static/video/` | 见「第 7 章」 |
| 改**左侧目录**顺序/名称 | 配置文件 | `sidebars.js` |
| 改**顶部导航**（含下拉菜单） | 配置文件 | `docusaurus.config.js` → `navbar` |
| 改**页脚**链接 | 配置文件 | `docusaurus.config.js` → `footer` |
| 改文章里的某个链接 | 文档源文件 | 对应 `.md` 里的 `[文字](链接)` |
| 改下载链接 | 文档源文件 | `docs/downloads.md` 的表格 |
| 改站点标题 / Logo / 颜色 | 配置文件 + 样式 | `docusaurus.config.js` + `src/css/custom.css` |
| 改"编辑此页"按钮指向 | 配置文件 | `docusaurus.config.js` → `editUrl` |

---

## 目录

- [第 0 章 先搞懂：网站是怎么跑起来的](#第-0-章-先搞懂网站是怎么跑起来的)
- [第 1 章 两种改法：网页直接改 vs 本地改](#第-1-章-两种改法网页直接改-vs-本地改)
- [第 2 章 文件夹地图：每个文件是干什么的](#第-2-章-文件夹地图每个文件是干什么的)
- [第 3 章 改文字：90% 的日常操作](#第-3-章-改文字90-的日常操作)
- [第 4 章 新增一个产品（完整流程）](#第-4-章-新增一个产品完整流程)
- [第 5 章 插入图片](#第-5-章-插入图片)
- [第 6 章 修改链接跳转](#第-6-章-修改链接跳转)
- [第 7 章 插入视频](#第-7-章-插入视频)
- [第 8 章 排版语法速查（表格/代码块/提示框等）](#第-8-章-排版语法速查表格代码块提示框等)
- [第 9 章 改品牌：标题、Logo、颜色、favicon](#第-9-章-改品牌标题logo颜色favicon)
- [第 10 章 资料下载与大文件](#第-10-章-资料下载与大文件)
- [第 11 章 发布前检查清单 + 故障排查](#第-11-章-发布前检查清单--故障排查)
- [第 12 章 名词解释（小白术语表）](#第-12-章-名词解释小白术语表)
- [第 13 章 产品状态、三层版本号与 SKU 管理](#第-13-章-产品状态三层版本号与-sku-管理)

---

## 第 0 章 先搞懂：网站是怎么跑起来的

你不用成为 Docusaurus 专家，但理解下面这条链路，出问题就知道去哪查：

```
你修改仓库里的 .md / .js / 图片文件
        │
        │  git push（提交到 GitHub 的 main 分支）
        ▼
GitHub Actions 被自动触发（云端的一台电脑）
        │
        │  执行 npm install → npm run build（把 Markdown 变成网页）
        ▼
生成的 build 文件夹被发布到 GitHub Pages
        │
        │  域名 docs.maomaoxiang.com 指向这里（靠 DNS 的 CNAME + Pages 后台绑定）
        ▼
访客看到更新后的网页（通常 1–3 分钟）
```

记住三条铁律：

1. **内容 = 文件**。网页上的每一个字，都对应仓库里的某个文件。想改网页，就去改文件。
2. **提交 = 发布**。改完文件必须 `commit` + `push`，改动才会进 GitHub；光在本地改，网站不会变。
3. **开工先 pull，收工必 push**。如果网页上改过东西，本地不 pull 直接 push 会冲突。最省事的做法是**全程在网页上改**，就不用管 pull。

---

## 第 1 章 两种改法：网页直接改 vs 本地改

### 方法 A：在 GitHub 网页上直接改（推荐新手，零安装）

适合：改几句话、改个参数、加个链接、上传图片。不需要装任何软件，也不用记命令。

1. 浏览器打开仓库：https://github.com/FLOOR5858/maomaoxiang-docs
2. 进入要改的目录，比如 `docs` → `product`，点开 `solar-mercury-soc.md`。
3. 点文件右上角的 **铅笔图标（Edit this file）**。
4. 在编辑框里直接改文字（就是 Markdown 文本，见第 3、8 章）。
5. 拉到页面最底部，找到 **Commit changes**：
   - 第一行写一句改动说明，例如 `docs: 更新供电参数`
   - 选择 **Commit directly to the `main` branch**
   - 点绿色按钮 **Commit changes**
6. 等 1–3 分钟，打开 https://docs.maomaoxiang.com 刷新查看。
   - 想确认是否构建完成：仓库顶部点 **Actions** 标签，看最新的 workflow 是不是绿色 ✅。红色 ❌ 说明构建失败（见第 11 章）。

> 上传图片也可以用这个方法：在仓库里进入 `static/img` 目录，点 **Add file → Upload files**，把图片拖进去，然后 Commit。

### 方法 B：在本地用命令行改（适合一次改很多、或用编辑器批量改）

适合：一次改十几个文件、新增产品、用 VS Code 等编辑器。

#### ⚠️ 在当前 WorkBuddy 环境里，必须用 PowerShell + npm.cmd（不要用 Git Bash）

这是本机特有的坑，记住一条：**在 WorkBuddy 自带的终端里，`npm` 命令是坏的，要用 `npm.cmd` + PowerShell。**

- 症状：在 Bash / Git Bash 里敲 `npm install` 会报 `dirname: command not found`、`cd: null directory`、`/usr/bin/env: 'bash': No such file or directory` 之类的错，装到一半还会在 `node_modules` 里留下缺文件的烂摊子（比如 `cacheable-request/dist/types.js` 丢失，导致 `npm run build` 报 `ERR_MODULE_NOT_FOUND`）。
- 原因：Bash 环境里 `npm` 解析到了一个坏掉的 shim 包装脚本。
- 解决：**开 PowerShell**（不是 Bash），用下面这两条命令自动找到真正能用的 `npm.cmd`（自动适配 Node 版本升级，不用改路径）：

```powershell
# 在 PowerShell 里执行：自动找到可用的 npm.cmd
$npmCmd = (Get-ChildItem "$env:USERPROFILE\.workbuddy\binaries\node\versions\*\npm.cmd" | Select-Object -First 1).FullName
Set-Location "C:\Users\Administrator\WorkBuddy\2026-11-21-18-17-41\maomaoxiang-docs"
& $npmCmd install     # 安装依赖（只需一次；第一次会较慢，国内走 npmmirror 镜像）
```

> 万一 `node_modules` 之前被 Bash 装坏了（build 报 `ERR_MODULE_NOT_FOUND`），先删掉重装：在 PowerShell 里执行 `Remove-Item -Recurse -Force node_modules`，再跑上面的 `& $npmCmd install`。

日常循环（每次都按这个顺序；同样是 **PowerShell**）：

```powershell
$npmCmd = (Get-ChildItem "$env:USERPROFILE\.workbuddy\binaries\node\versions\*\npm.cmd" | Select-Object -First 1).FullName
Set-Location "C:\Users\Administrator\WorkBuddy\2026-11-21-18-17-41\maomaoxiang-docs"

git pull                    # ① 开工：先拉取网页上的最新改动，避免冲突

# ② 用编辑器修改 docs/ 下的文件（或新增文件、放图片）

& $npmCmd start             # ③ 本地预览：浏览器打开 http://localhost:3000 看效果
                            #    按 Ctrl+C 停止预览

git add .                   # ④ 把所有改动加入暂存区（也可以 git add 具体文件名）
git commit -m "docs: 更新了什么"   # ⑤ 提交，引号里写清楚改了什么
git push                    # ⑥ 推送到 GitHub → 自动上线（1–3 分钟）
```

#### 如果是你自己的电脑（普通环境，没装 WorkBuddy）

那就用标准写法，开 Git Bash 或 PowerShell 都行：

```bash
# 首次准备：装 Git（https://git-scm.com/download/win）+ Node.js 20 或更高（https://nodejs.org，LTS 版）
git clone https://github.com/FLOOR5858/maomaoxiang-docs.git
cd maomaoxiang-docs
npm install          # 安装依赖，只需一次

# 日常循环
git pull                    # ① 开工：拉取最新改动
# ② 改文件...
npm start                   # ③ 本地预览 http://localhost:3000，Ctrl+C 停止
git add .                   # ④ 暂存
git commit -m "docs: 更新了什么"   # ⑤ 提交
git push                    # ⑥ 推送上线
```

常用 Git 命令速查：

| 命令 | 作用 |
|---|---|
| `git status` | 看哪些文件改了、哪些还没提交 |
| `git pull` | 拉取线上最新内容（开工必做） |
| `git add .` | 把所有改动加入暂存 |
| `git commit -m "说明"` | 提交（说明要写清楚） |
| `git push` | 推送上线 |
| `git log --oneline -5` | 看最近 5 次提交记录 |
| `git diff` | 看这次改了哪些内容 |

---

## 第 2 章 文件夹地图：每个文件是干什么的

```
maomaoxiang-docs/
├── docs/                          ← 【内容区】所有网页文字都在这里，改这里最多
│   ├── intro.md                   ← 首页 / 产品总览（网址 /）
│   ├── product/                   ← 产品页
│   │   ├── solar-mercury-soc.md   ← MERCURY-1106G3 主控（网址 /product/solar-mercury-soc）
│   │   ├── luna-camera.md         ← LUNA-SC233 摄像头
│   │   └── combo-kit.md           ← 组合套件
│   ├── hardware/
│   │   └── interfaces.md          ← 硬件与接口
│   ├── software/
│   │   └── sdk.md                 ← SDK 与开发
│   ├── downloads.md               ← 资料下载（网址 /downloads）
│   ├── faq.md                     ← 常见问题（网址 /faq）
│   └── support.md                 ← 售后与支持
│
├── static/                        ← 【静态资源区】原样复制到网站根目录的文件
│   ├── CNAME                      ← ⚠️ 域名声明，内容是 docs.maomaoxiang.com，千万别删
│   ├── .nojekyll                  ← 让 GitHub Pages 不跳过下划线开头的文件
│   └── img/                       ← 图片放这里，网址是 /img/文件名
│       ├── logo.svg               ← 导航栏浅色 Logo
│       ├── logo-dark.svg          ← 导航栏深色模式 Logo
│       └── favicon.svg            ← 浏览器标签页小图标
│
├── src/css/
│   └── custom.css                 ← 主题颜色、字体（改品牌色在这里）
│
├── docusaurus.config.js           ← 【核心配置】站点标题、导航栏、页脚、域名、编辑链接
├── sidebars.js                    ← 【左侧目录】决定侧边栏显示哪些页、什么顺序
├── package.json                   ← 依赖清单（一般不用动）
│
├── .github/workflows/deploy.yml   ← 自动构建部署脚本（一般不用动）
│
├── 发产品手册.md                  ← （仓库根目录）命名规范、大文件托管方案、常见坑
├── 域名配置说明.md                ← （仓库根目录）DNS 和 Pages 配置记录
└── README.md                      ← 就是你正在看的这份
```

**记住这个分工：**

| 你想改的东西 | 去哪个区 |
|---|---|
| 网页上的文字、参数、表格、链接 | `docs/` 里的 `.md` |
| 图片、视频封面、下载图标 | `static/` 里，正文再写一行引用 |
| 左边目录、顶部菜单、页脚、站点名 | 根目录的 `sidebars.js` 和 `docusaurus.config.js` |

> 根目录的 `发产品手册.md` 是内部备忘（命名规范、大文件方案、踩坑记录），不参与网页生成，可以放心留着。

---

## 第 3 章 改文字：90% 的日常操作

### 3.1 找到要改的文件

规则很简单：**网址和文件路径一一对应**。

| 网址 | 对应文件 |
|---|---|
| `/` | `docs/intro.md` |
| `/product/solar-mercury-soc` | `docs/product/solar-mercury-soc.md` |
| `/downloads` | `docs/downloads.md` |
| `/faq` | `docs/faq.md` |

所以看到网页上哪句话想改，直接在编辑器里全局搜索那句话，就能定位到文件。

### 3.2 每篇文档开头的"身份信息"（frontmatter）

每个 `.md` 文件最顶部都有这样一段，用 `---` 包起来：

```yaml
---
id: solar-mercury-soc
title: MERCURY-1106G3 视觉 SoC 主控
sidebar_position: 1
---
```

| 字段 | 作用 | 注意事项 |
|---|---|---|
| `id` | 这篇文档的唯一编号 | **只能写纯文件名，不能带斜杠**。写成 `product/solar-mercury-soc` 会构建失败 |
| `title` | 浏览器标签页标题 | 改这里 |
| `slug` | 自定义网址 | 现在首页已改成产品门面（`src/pages/index.jsx`），`intro.md` 用 `slug: /overview` 放在 `/overview`，其他页一般不用 |
| `sidebar_position` | 排序权重 | 当前侧边栏是手写的，顺序主要由 `sidebars.js` 决定 |

> ⚠️ 这段 `---` 不能删，也不能乱改 `id`，否则页面可能打不开。

### 3.3 正文就是 Markdown，几个常用写法

```md
# 一级标题（每篇只用一个，通常和 title 一样）

## 二级标题
### 三级标题

普通文字，用 **加粗**、*斜体*、`行内代码`。

- 无序列表项
- 另一项

1. 有序列表
2. 另一项

> 引用块：写给读者的提示、注意事项。

| 参数 | 值 |
|---|---|
| 主控 | RV1106G3 |
```

改完后建议先本地 `npm start` 预览（或用网页改完后直接等上线），确认没问题再提交。

---

## 第 4 章 新增一个产品（完整流程）

假设你要新增一款中端主控 **VENUS-RK3568**（这只是示例，请换成你的真实型号）。按顺序做完 6 步：

### 第 1 步：命名（先看这里，别急着建文件）

产品名格式：`天体代号 - 芯片型号`

- **主控（行星）**：`MERCURY`（水星/入门）→ `VENUS`（金星/中端）→ `MARS`（火星/高端）→ `JUPITER`（木星/旗舰）；`SATURN`/`URANUS`/`NEPTUNE` 预留。不用 Earth。
- **摄像头（卫星/恒星）**：`LUNA`、`IO`、`EUROPA`、`GANYMEDE`、`CALLISTO`、`PHOBOS`、`DEIMOS`、`TITAN`、`VEGA`、`SIRIUS`、`POLARIS`。
- 文件名用**英文小写 + 连字符**，例如 `solar-venus-soc.md`、`io-camera.md`。**禁止中文文件名**（文件名会变成网址）。

### 第 2 步：建产品文档

在 `docs/product/` 下复制一个现有产品页当模板：

- 主控类：复制 `solar-mercury-soc.md`
- 摄像头类：复制 `luna-camera.md`

把副本改名为 `solar-venus-soc.md`，然后改开头的 frontmatter：

```yaml
---
id: solar-venus-soc
title: VENUS-RK3568 视觉 SoC 主控
sidebar_position: 2
---
```

正文里把旧型号全部替换成你的新型号，参数用表格写。还没确定的参数写 `待确认`，不要瞎编。

### 第 3 步：加入左侧目录

打开 `sidebars.js`，在"产品"分类的 `items` 数组里加上新 id：

```js
items: ['product/solar-mercury-soc', 'product/luna-camera', 'product/combo-kit', 'product/solar-venus-soc'],
```

注意：这里的 id 要带 `product/` 前缀，而文件 frontmatter 里的 `id` 不带——**这是最容易踩的坑**。

### 第 4 步：加入顶部"产品"下拉菜单

打开 `docusaurus.config.js`，在 `navbar.items` 里找到 `label: '产品'` 的下拉项，加一行：

```js
{
  type: 'dropdown',
  label: '产品',
  position: 'left',
  items: [
    { type: 'doc', docId: 'product/solar-mercury-soc', label: 'MERCURY-1106G3 主控' },
    { type: 'doc', docId: 'product/luna-camera', label: 'LUNA-SC233 摄像头' },
    { type: 'doc', docId: 'product/combo-kit', label: '组合套件' },
    { type: 'doc', docId: 'product/solar-venus-soc', label: 'VENUS-RK3568 主控' },  // 新增
  ],
},
```

### 第 5 步：更新首页和关联页面

- `docs/intro.md`：在产品线表格里加一行，并在"快速导航"里加链接。
- `docs/downloads.md`：加这个产品的资料下载表格行。
- `docs/faq.md`：至少补 5 条常见问题（烧录、供电、接口、兼容性、售后）。
- 如果是摄像头，还要在对应主控页的"配套"里加链接。

### 第 6 步：提交上线

```bash
git add .
git commit -m "docs: 新增产品 VENUS-RK3568"
git push
```

或者用网页方法 A 逐个文件 Commit。等 1–3 分钟，检查 Actions 是否绿灯、页面是否出现。

---

## 第 5 章 插入图片

### 5.1 标准做法（推荐）

**第 1 步：把图片文件放进 `static/img/`**

- 网页操作：仓库里进入 `static/img` → **Add file → Upload files** → 拖入图片 → Commit。
- 本地操作：把图片复制到 `static/img/` 目录，然后 `git add . && git commit && git push`。

**第 2 步：在正文里写一行引用**

```md
![模组正面照片](/img/luna-front.png)
```

就这样。`/img/luna-front.png` 里的 `/img/` 对应 `static/img/` 目录，Docusaurus 会把 `static/` 里的东西原样放到网站根目录。

### 5.2 各种位置的写法

| 场景 | 写法 |
|---|---|
| 正文插一张图 | `![说明](/img/xxx.png)` |
| 表格单元格里放图 | `\| ![正面](/img/front.png) \| 说明 \|` |
| 图旁边加链接（点图放大/跳转） | `[![说明](/img/xxx.png)](https://目标网址)` |
| 固定宽度（用 HTML） | `<img src="/img/xxx.png" width="600" alt="说明" />` |
| 图片文件和文档放一起 | 放 `docs/product/xxx.png`，正文写 `![说明](./xxx.png)`（不推荐，统一放 static 更好管理） |

### 5.3 命名与格式建议

- 文件名用**英文小写 + 连字符**：`luna-front.png`、`mercury-pinout.jpg`。不要中文、不要空格（空格会导致 URL 编码问题）。
- 格式用 **PNG（截图/线条图）、JPG（照片）、SVG（Logo/图标）、WebP（压缩）**。
- 单张图片控制在 **1–2 MB 以内**，太大先压缩（可用 tinypng.com 等在线工具）。
- `![里面的文字]` 是图片的替代文字，图片加载失败时会显示，也利于搜索，建议写清楚，比如 `![LUNA-SC233 模组正面]`。

### 5.4 图片不显示？按这个顺序查

1. 路径是不是以 `/img/` 开头（不是 `img/`，也不是 `static/img/`）。
2. 文件名大小写是否完全一致（Linux 服务器区分大小写：`abc.PNG` ≠ `abc.png`）。
3. 图片是否真的 `push` 上去了（在 GitHub 网页上能看见这个文件吗）。
4. 改完是否等了 1–3 分钟并强刷浏览器（Ctrl+F5）。
5. 图片是不是超过了大小限制或用了浏览器不支持的格式。

---

## 第 6 章 修改链接跳转

链接分四种，改的地方不一样：

### 6.1 正文里的链接（最常见）

在对应的 `.md` 文件里，找到 `[文字](链接)` 直接改括号里的内容。

```md
详见 [LUNA-SC233 摄像头模组](./product/luna-camera.md)。
```

**站内链接怎么写：**

| 当前文件位置 | 要链接到 | 写法 |
|---|---|---|
| `docs/intro.md` | 产品页 | `./product/solar-mercury-soc.md` |
| `docs/product/luna-camera.md` | 同目录的主控页 | `./solar-mercury-soc.md` |
| `docs/product/luna-camera.md` | 上一级目录的下载页 | `../downloads.md` |
| 任何地方 | 首页 | `/` |
| 任何地方 | 下载页（绝对路径） | `/downloads` |

规则：
- 指向**另一篇文档**时写相对路径并带 `.md` 后缀（Docusaurus 会自动转成正确网址）。
- 指向 **static 里的文件**时用 `/` 开头的绝对路径，例如 `/img/xxx.png`、`/files/xxx.pdf`。
- 指向**外部网站**时写完整 `https://...`。

### 6.2 顶部导航 / 下拉菜单

改 `docusaurus.config.js` → `navbar.items`：

```js
// 站内文档
{ type: 'doc', docId: 'intro', position: 'left', label: '产品总览' },
// 站内普通页面（用 to）
{ to: '/downloads', label: '资料下载', position: 'left' },
// 外部链接（用 href）
{ href: 'https://www.maomaoxiang.com', label: '技术博客', position: 'right' },
```

### 6.3 左侧目录

改 `sidebars.js`（决定顺序和分组）：

```js
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '产品',            ← 这里改分组名称
      collapsed: false,
      items: ['product/solar-mercury-soc', ...],   ← 这里改顺序/成员
    },
    'downloads',
    'faq',
  ],
};
```

### 6.4 页脚链接

改 `docusaurus.config.js` → `footer.links`：

```js
{
  title: '产品',                       ← 分组标题
  items: [
    { label: '产品总览', to: '/' },          ← 站内
    { label: '技术博客', href: 'https://www.maomaoxiang.com' },  ← 站外
  ],
},
```

### 6.5 让链接在新标签页打开

普通 Markdown 语法做不到，需要用 HTML 的 `<a>` 标签（Docusaurus 支持在 Markdown 里写 HTML）：

```html
<a href="https://www.maomaoxiang.com" target="_blank" rel="noopener noreferrer">技术博客</a>
```

### 6.6 页面内锚点（跳到本文某一节）

```md
[跳到规格参数](#规格参数)
```

标题里如果有空格或特殊字符，最稳妥的办法是：在网页上把鼠标移到标题上，点标题右边出现的 🔗 图标，浏览器地址栏会给出准确的锚点链接，复制过来用。

---

## 第 7 章 插入视频

有三种方案，按推荐顺序排列。

### 方案 1：视频平台嵌入（最推荐，不占仓库空间）

把视频传到 **B站 / 腾讯视频 / YouTube**，拿到"嵌入代码"（iframe），粘到 `.md` 里。

**YouTube**（把 `VIDEO_ID` 换成真实视频 ID）：

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="演示视频" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
```

**B站**（在视频页点"分享 → 嵌入代码"，把 `BVxxx` 换成真实 BV 号）：

```html
<iframe src="//player.bilibili.com/player.html?bvid=BVxxx&page=1" width="720" height="480" frameBorder="0" scrolling="no" allowFullScreen></iframe>
```

> 从平台复制的代码里如果是小写 `frameborder` / `allowfullscreen`，建议改成 `frameBorder` / `allowFullScreen`，更不容易出错。
> 如果 `&` 导致构建报错，把它写成 `&amp;`。

### 方案 2：视频文件放自己仓库（适合小视频 / 演示动图）

> ⚠️ 注意：GitHub Pages 站点建议小于 1 GB，视频文件很大，**几 MB 的短演示可以，几十 MB 的长视频不要放这里**，请改用方案 1 或网盘。

**第 1 步**：在 `static/` 下新建 `video` 目录，把 `demo.mp4` 放进去（路径变成 `static/video/demo.mp4`，网址是 `/video/demo.mp4`）。

**第 2 步**：在正文里写：

```html
<video controls width="720">
  <source src="/video/demo.mp4" type="video/mp4" />
  你的浏览器不支持视频播放，请<a href="/video/demo.mp4">下载视频</a>观看。
</video>
```

`controls` 表示显示播放控制条；`width="720"` 是宽度（像素），也可以用 `width="100%"` 自适应。

### 方案 3：网盘 / 对象存储直链

把视频传到阿里云盘、腾讯云 COS、Cloudflare R2 等，拿到直链，然后用方案 2 的 `<video>` 标签，把 `src` 换成那个直链即可。适合大文件且不想依赖第三方视频平台。

### 插入视频的注意事项

1. **前后各留一个空行**：`<iframe>`、`<video>` 这种 HTML 块要和上下文字段之间空一行，否则可能被当成普通文字。
2. **标签必须完整闭合**：`<iframe ...></iframe>`、`<video ...>...</video>` 少了结尾，构建会失败。
3. **不要用尖括号占位符**：正文里写 `<芯片>`、`<你的视频ID>` 这类会被当成 JSX 标签导致构建失败。占位符请用 `xxxx` 或普通文字（在代码块 ``` 里写尖括号是安全的）。
4. **别直接贴视频平台的 `<script>` 代码**：只保留 `<iframe>...</iframe>` 那一段。

---

## 第 8 章 排版语法速查（表格/代码块/提示框等）

### 8.1 表格

参数一律用表格，别写成长段落：

```md
| 项目 | 参数 | 来源 |
|---|---|---|
| 主控 | RV1106G3 | 官方手册 §1.2 |
| 内存 | 256 MB | 官方手册 §1.2.2 |
```

### 8.2 代码块

用三个反引号包起来，后面写语言名会有语法高亮（本站已支持 `bash`、`c`、`cpp`、`python`、`ini`、`json` 等）：

````md
```bash
git push
```
````

### 8.3 提示框（比 `>` 引用更美观）

Docusaurus 支持带颜色的提示框：

```md
:::tip 小提示
这里写提示内容。
:::

:::warning 注意
这里写警告内容。
:::

:::caution
谨慎操作。
:::

:::danger
危险操作。
:::
```

### 8.4 折叠内容（长答案收起来）

```html
<details>
<summary>点击展开详细步骤</summary>

这里是展开后显示的内容，可以写 Markdown。

</details>
```

### 8.5 分隔线

```md
---
```

（单独一行三个短横线；注意不要和 frontmatter 的 `---` 混淆，frontmatter 只在文件最开头。）

### 8.6 写作规范（和现有文档保持一致）

| 规则 | 说明 |
|---|---|
| 参数用表格 | 一眼能扫，不要写段落 |
| 事实分级 | 官方数据写来源和章节；自己的数据写实测条件；没确认的写 `待确认` |
| 术语 | 第一次出现写全称，如「NPU（神经网络处理单元）」 |
| 文件名 | 英文小写 + 连字符，不用中文/空格 |
| 尖括号 | 正文里不要出现 `<xxx>` 占位符（会被当 JSX 报错），用 `xxxx` |

---

## 第 9 章 改品牌：标题、Logo、颜色、favicon

### 9.1 站点标题 / 口号 / 域名 / 编辑链接

改 `docusaurus.config.js` 顶部：

```js
title: '毛毛象实验室 · 产品文档',        ← 浏览器标签和导航栏显示的站点名
tagline: 'SOLAR 行星系列视觉主控 + 卫星系列摄像头模组',
url: 'https://docs.maomaoxiang.com',     ← ⚠️ 换域名时这里要同步改
baseUrl: '/',
organizationName: 'FLOOR5858',           ← GitHub 用户名/组织名
projectName: 'maomaoxiang-docs',         ← 仓库名
editUrl: 'https://github.com/FLOOR5858/maomaoxiang-docs/edit/main/',  ← "编辑此页"按钮
```

### 9.2 导航栏文字与 Logo

同一个文件里的 `themeConfig.navbar`：

```js
navbar: {
  title: '毛毛象实验室',
  logo: {
    alt: '毛毛象实验室',
    src: 'img/logo.svg',        ← 浅色模式 Logo
    srcDark: 'img/logo-dark.svg', ← 深色模式 Logo
  },
  items: [ ... ],               ← 菜单项
},
```

换 Logo：把新图放进 `static/img/`，改上面的文件名即可。建议 SVG 格式，清晰且体积小。

### 9.3 主题颜色

改 `src/css/custom.css` 里的颜色变量（当前主色是深绿 `#0A4A33` + 米白）：

```css
:root {
  --ifm-color-primary: #0a4a33;      /* 主色 */
  --ifm-color-primary-dark: ...;      /* 深浅变体，通常一起改 */
  ...
}
```

> 改颜色要谨慎：主色和它的深浅变体是一组，建议用 Docusaurus 官方的颜色生成器（搜索 "Docusaurus color generator"）生成一整套再替换。

### 9.4 favicon（浏览器标签小图标）

替换 `static/img/favicon.svg` 文件即可（保持文件名不变就不用改配置）。

### 9.5 ⚠️ 两个不能动的文件

- `static/CNAME`：内容是 `docs.maomaoxiang.com`。删了或改错，自定义域名会失效。
- `static/.nojekyll`：空文件，让 GitHub Pages 正确处理静态文件。不要删。

---

## 第 10 章 资料下载与大文件

### 10.1 下载页怎么改

所有下载链接集中在 `docs/downloads.md` 的表格里：

```md
| 资料 | 说明 | 链接 |
|---|---|---|
| 产品原理图 | Rev1.0 | [PDF](https://raw.githubusercontent.com/.../xxx.pdf) |
| 系统镜像 | 2026-11 版 | [网盘](https://www.alipan.com/s/xxxx) |
```

新增资料就加一行；链接失效就改那一行的括号内容。每条最好标注**文件大小 + 更新日期 + SHA256 校验值**，工程师会觉得很专业。

### 10.2 什么能放本站仓库，什么不能

| 文件类型 | 放哪里 |
|---|---|
| 文档 `.md`、小图标 Logo、几张照片 | ✅ 本站仓库（`static/img/`） |
| 规格书 PDF、原理图、尺寸图（几十 MB 内） | GitHub 资料仓库（主仓）+ Gitee 镜像，拿 raw 直链 |
| SDK 完整包、系统镜像（几百 MB–几 GB） | ❌ **不要放本站仓库**，放网盘或 Cloudflare R2 / 腾讯云 COS 等对象存储 |
| 长期稳定直链的安装包 | 对象存储 + CDN |

GitHub 硬限制：单文件建议 < 50 MB（硬上限 100 MB），仓库建议 < 1 GB。文档站仓库本身只有几 MB，真正的风险是把 SDK/镜像直接传进来——从一开始就别这么做。本站永远只放"链接"。

详细的四种托管方案（网盘 / 对象存储 / GitHub Releases / Gitee）见仓库根目录的 `发产品手册.md` 第五章。

---

## 第 11 章 发布前检查清单 + 故障排查

### 11.1 每次 push 前的检查清单

- [ ] 如果是新页面：frontmatter 的 `id` 是纯文件名（不带斜杠）
- [ ] 如果是新页面：`sidebars.js` 已加入，且 id 带 `product/` 这类目录前缀
- [ ] 如果是新页面：顶部下拉菜单 `docusaurus.config.js` 已加入
- [ ] 正文里没有 `<xxx>` 这种尖括号占位符（用 `xxxx` 代替）
- [ ] 图片路径以 `/img/` 开头，文件名大小写正确
- [ ] 中文文件名？改成英文 slug
- [ ] `static/CNAME` 还在
- [ ] `git status` 看一眼，确认没有漏加的文件

本地能跑的话，先构建一次确认**零报错**再 push（WorkBuddy 环境用 PowerShell + 上面自动检测到的 `$npmCmd`）：

```powershell
& $npmCmd run build
```

### 11.2 常见问题排查

| 现象 | 原因 | 解决 |
|---|---|---|
| 改了没生效 | 还在构建，或 push 失败 | 等 1–3 分钟；看仓库 Actions 是否绿灯 |
| Actions 红色 ❌ 构建失败 | 多半是 MDX 语法错误 | 点进失败的 run 看日志；常见是尖括号占位符、HTML 标签没闭合 |
| 新页面左边目录不显示 | `sidebars.js` 没加，或 id 不一致 | 检查 frontmatter 的 `id` 和 sidebar 里的路径是否对得上 |
| 链接 404 | 路径写错 | 站内文档链接用相对路径 + `.md`；static 文件用 `/` 开头 |
| 图片裂开 | 路径/大小写/没上传 | 见 5.4 节 |
| 网址 HTTPS 提示不安全 | 多为本地缓存/HISTS 问题 | 强刷 Ctrl+F5、清浏览器 HSTS、换浏览器/网络验证；服务端证书本身有效 |
| 自定义域名打不开 | CNAME 或 Pages 绑定丢了 | 确认 `static/CNAME` 内容正确，且仓库 Settings → Pages → Custom domain 填了 `docs.maomaoxiang.com` |
| 本地 `git push` 冲突 | 没先 pull | `git pull` 后再 push |
| 本地 `npm install` 报 `dirname: command not found` / build 报 `ERR_MODULE_NOT_FOUND` | WorkBuddy 环境的 Bash npm shim 是坏的 / node_modules 被装坏了 | 开 PowerShell，用第 1 章的 `npm.cmd` 写法；先 `Remove-Item -Recurse -Force node_modules` 再重装 |

> 查看构建状态：仓库页面顶部 **Actions** → 点最新的 "Deploy to GitHub Pages" → 看 jobs 是否有绿色对勾。部署成功的网址形如 `https://docs.maomaoxiang.com`。

---

## 第 12 章 名词解释（小白术语表）

| 名词 | 大白话解释 |
|---|---|
| Markdown / `.md` | 一种纯文本写作格式，网站内容就是用它写的。用 `#` 表示标题、`**` 表示加粗等 |
| MDX | Markdown 的加强版，可以在文字里写 HTML/组件。本站的 `.md` 实际按 MDX 编译，所以尖括号要小心 |
| frontmatter | 文件开头 `---` 包起来的那段"身份信息"，告诉 Docusaurus 这篇文档叫什么、排第几 |
| Docusaurus | Meta 开源的建站工具，把 Markdown 变成漂亮的文档网站 |
| GitHub Actions | GitHub 提供的"云端自动打工仔"，你一 push 它就自动构建+发布 |
| GitHub Pages | GitHub 免费的网站托管服务，把构建好的网页放到网上 |
| commit / push / pull | commit=在本地存一版；push=上传到 GitHub（触发上线）；pull=下载线上最新改动 |
| CNAME | DNS 记录的一种，把 `docs.maomaoxiang.com` 指向 GitHub Pages |
| static 目录 | 放"原样使用"的文件（图片等），它们会原封不动出现在网站根目录 |
| slug | 网址的最后一段。比如 `/faq` 的 slug 是 `faq`；文件名就是默认 slug |

---

## 第 13 章 产品状态、三层版本号与 SKU 管理

> 这一章解释改版原型里那套"产品状态机 / 三层版本号 / SKU 表格"到底是什么、以后怎么维护。这些概念在原型 HTML 里用 JS 数据驱动，落地到真实 Docusaurus 站点时会换成文档 frontmatter + 页面组件，但**思路完全一样**。

### 13.1 产品状态机：规划 → 样品 → 量产 → 停产

每个产品都有生命周期，用 4 个状态表示：

| 状态 | 英文 key | 含义 | 网页上的表现 |
|---|---|---|---|
| 规划中 | `plan` | 还在纸上，没打样 | 灰色徽章；规格显示"待确认" |
| 样品 | `sampling` | 样机出来了，可给客户测试 | 橙色徽章 |
| 量产 | `mass` | 正式出货 | 绿色徽章 |
| 停产 | `eol` | 停止供货（End of Life） | 灰色徽章 |

在原型 HTML 里，状态写在产品数据的 `status` 字段：

```js
{ key:'m1106', name:'MERCURY-1106', status:'sampling', ... }
```

要改状态，就改这个值：`plan` / `sampling` / `mass` / `eol`。页面的状态徽章和生命周期条（规划 → 样品 → 量产 → 停产）会自动跟着变。

> 注意：**产品状态**和**发布开关**是两回事。状态是"这个产品做到哪一步了"（给访客看），发布开关 `PUBLISH.xxx` 是"这个产品要不要在网站显示"（给你自己控制）。一个尚未发布的产品，通常状态是 `plan` 且 `PUBLISH=false`。

### 13.2 三层版本号：硬件 / SDK / 文档各管各的

每个产品有 3 个独立版本号，各走各的迭代线：

| 层 | 字段 | 例子 | 什么时候改 |
|---|---|---|---|
| 硬件版本 | `hw` | `V1.0` | PCB 改版、换料、改封装时递增（V1.0 → V1.1） |
| SDK 版本 | `sdk` | `V1.0.0` | 固件/驱动/算法更新时递增（V1.0.0 → V1.1.0） |
| 文档日期 | `doc` | `2026-11-23` | 每次改这个产品的文档就更新成当天日期 |

原型 HTML 里长这样：

```js
versions:{ hw:'V1.0', sdk:'V1.0.0', doc:'2026-11-23' }
```

**为什么分三层？** 因为硬件、软件、文档是三条独立的迭代线。硬件 V1.0 可以配 SDK V1.2.3，而文档日期是今天——分开记才不会乱。访客一眼就能判断"我手上这块板子，该配哪个版本 SDK、看哪天更新的文档"。

### 13.3 SKU 表格：一个产品页管所有型号

**SKU**（Stock Keeping Unit）= 一个产品下面具体可买的型号。比如 MERCURY-1106 下有 BTB 核心板、邮票孔核心板、开发板，芯片又有 G3/G2 之分——这些都是 SKU。

**核心原则：不为每个 SKU 建子目录，全部放在一个产品页的表格里。** 这样访客在一个页面就能横向对比所有型号，你也不用维护一堆重复的子页面。

命名格式（产品代号 + 形态 + 芯片）：

```text
MERCURY-1106-BTB-G3       BTB 核心板 + RV1106G3
MERCURY-1106-STAMP-G3     邮票孔核心板 + RV1106G3
MERCURY-1106-DEV-G3       开发板 + RV1106G3
MERCURY-1106-BTB-G2       BTB 核心板 + RV1106G2
```

原型 HTML 里，SKU 写在产品的 `skus` 数组：

```js
skus:[
  {id:'MERCURY-1106-BTB-G3', chip:'RV1106G3', form:'BTB 核心板', formEn:'BTB core board', status:'sampling', price:'待定价 / TBD'},
  {id:'MERCURY-1106-STAMP-G3', chip:'RV1106G3', form:'邮票孔核心板', formEn:'Stamp-hole core board', status:'sampling', price:'待定价 / TBD'},
  ...
]
```

新增 SKU 就往数组里加一行；停产就改那一行的 `status` 或删掉。每个 SKU 有自己的状态徽章，和父产品的状态互不影响。

---

## 相关文档

- `发产品手册.md` —— 命名规范、大文件托管方案、踩坑记录（内部参考）
- `域名配置说明.md` —— DNS CNAME 与 GitHub Pages 域名绑定记录
- 技术博客站：https://www.maomaoxiang.com （另一个仓库 `FLOOR5858.github.io`，发文章去那里）
