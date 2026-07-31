# 冯雪扬 AI 产品作品集网站

这是一个适合求职投递的个人 AI 产品作品集网站，定位为：

**AI 产品原型与 Workflow Agent 设计作品集**

重点展示 AI Workflow Design、Agent / Bot Prototyping、Prompt Engineering、API / Automation Integration、Responsible AI、产品运营和项目管理能力。

## 技术栈

当前版本使用纯静态网页：

- HTML
- CSS
- JavaScript

这样做的好处是：不需要安装 npm，不需要运行复杂命令，适合直接部署到 GitHub Pages，HR 可以通过公开链接打开。

## 文件说明

- `index.html`：网页内容
- `styles.css`：网页样式
- `script.js`：平滑滚动等轻量交互
- `assets/xueyang-feng-resume.pdf`：简历下载文件
- `.nojekyll`：让 GitHub Pages 更稳定地托管静态文件

## 本地打开

最简单方式：

直接双击 `index.html`。

如果浏览器因为中文路径打开异常，可以把整个文件夹复制到英文路径，例如桌面上的 `portfolio` 文件夹，再双击 `index.html`。

## 如何修改个人信息

打开 `index.html`，搜索你要改的内容，例如：

- `冯雪扬`
- `xueyangfeng1108@outlook.com`
- `+86 156 2506 9496`
- `广东省广州市`

改完保存即可。

## 如何新增项目

在 `index.html` 中搜索 `Featured Projects`，复制一个项目卡片。

然后在 `Project Detail` 区域复制一个 `case-study` 模块，修改标题、问题、流程、AI 设计、结果和反思。

## 发布到 GitHub Pages

1. 登录 GitHub。
2. 新建 repository，例如 `ai-product-portfolio`。
3. 上传这些文件：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/`
   - `README.md`
4. 进入仓库的 `Settings`。
5. 点击左侧 `Pages`。
6. Source 选择 `Deploy from a branch`。
7. Branch 选择 `main`，Folder 选择 `/root`。
8. 点击 `Save`。

最终链接通常是：

```text
https://你的GitHub用户名.github.io/ai-product-portfolio/
```

## 发布到 Vercel

1. 登录 Vercel。
2. 选择 `Add New Project`。
3. 导入 GitHub 上的作品集仓库。
4. Framework Preset 选择 `Other` 或保持默认。
5. Build Command 留空。
6. Output Directory 留空或填写 `.`。
7. 点击 Deploy。

## 公开前检查

- 网页能无登录打开。
- 简历下载按钮可用。
- 邮箱和电话正确。
- 没有 API Key、Telegram token、n8n credentials 或任何真实密钥。
- 手机和电脑打开都能正常阅读。
