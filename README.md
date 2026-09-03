# Guo Research Group — GitHub Pages

科研团队静态网站，适合直接部署到 GitHub Pages。当前版本已经加入 **Publication → Paper Explainer → Code/Reproduction** 工作流。

## 主要页面

- `index.html` — 团队首页
- `publications.html` — 全部论文列表，支持搜索与研究方向筛选
- `paper.html?id=<paper-id>` — 数据驱动的论文详情页
- `assets/publications.js` — 唯一论文数据库；新增/修改论文主要编辑这里
- `code/<paper-id>/` — 每篇论文对应的代码与复现材料目录

## 本地预览

推荐在项目根目录运行：

```bash
python -m http.server 8000
```

浏览器访问：

```text
http://localhost:8000/
```

也可以直接双击 `index.html`，但使用本地服务器更接近 GitHub Pages 的真实效果。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，例如 `guo-research-group`。
2. 把本文件夹中的内容上传到仓库根目录。
3. 进入 **Settings → Pages**。
4. Source 选择 **Deploy from a branch**。
5. Branch 选择 `main`，Folder 选择 `/ (root)`。
6. 保存后即可通过 `https://<username>.github.io/guo-research-group/` 访问。

## 新增一篇论文

打开 `assets/publications.js`，复制一个论文对象并修改：

```js
{
  id: 'your-paper-id',
  year: 2026,
  title: 'Paper title',
  authors: 'A. Author, B. Author',
  venue: 'IEEE Transactions on ...',
  area: 'Federated Learning',
  tags: ['Federated Learning', 'Smart Grid'],
  summary: '一句话介绍论文解决什么问题。',
  motivation: '为什么要研究这个问题。',
  method: [
    '核心思路 1',
    '核心思路 2',
    '核心思路 3'
  ],
  results: '主要结果和影响。',
  sourceNote: '解释内容的资料来源说明。',
  paperUrl: 'https://...',
  doi: '10.xxxx/xxxxx',
  codeAvailable: false,
  codePath: 'code/your-paper-id/',
  codeRepo: '',
  bibtex: '@article{...}'
}
```

完成后，`publications.html` 会自动出现该论文；点击后会自动使用 `paper.html` 渲染详情，无需再新建 HTML 页面。

## 为论文上传代码

GitHub Pages 是静态网站，**不建议在公开网页里做真正的“上传代码”表单**，因为这需要服务器、身份认证和写入权限。最简单、最可靠的方式就是使用 GitHub 本身管理代码。

### 方式 A：代码放在网站仓库中

假设论文 ID 是：

```text
distributed-secondary-voltage-frequency-restoration
```

把代码放入：

```text
code/distributed-secondary-voltage-frequency-restoration/
├── README.md
├── requirements.txt
├── src/
├── configs/
└── results/
```

然后在 `assets/publications.js` 中修改：

```js
codeAvailable: true,
codePath: 'code/distributed-secondary-voltage-frequency-restoration/',
codeRepo: '',
```

论文详情页就会显示 Code 入口。

### 方式 B：每篇论文一个独立 GitHub Repo（更推荐）

例如：

```text
https://github.com/GuoResearchGroup/FedMCRW
```

在论文数据中写：

```js
codeAvailable: true,
codeRepo: 'https://github.com/GuoResearchGroup/FedMCRW',
```

网页会优先跳转到独立代码仓库。

## 推荐的论文代码仓库结构

```text
paper-repo/
├── README.md
├── LICENSE
├── requirements.txt
├── configs/
├── data/
│   └── README.md
├── src/
├── scripts/
└── results/
```

README 建议至少写清楚：

- Environment / dependencies
- Dataset preparation
- Training or simulation command
- Evaluation command
- Expected results
- Citation

## 当前示例论文

当前从已有主页/答辩材料中整理了 5 篇代表论文，用于演示论文详情页结构。由于未提供这些论文的全文和代码，页面不会虚构公式、实验参数、DOI 或代码仓库；缺失信息均保持为空或标注为待补充。

## 团队成员

编辑 `assets/main.js` 中的 `people` 数组即可新增成员。

## 内容依据

网站初始内容来自：

- 浙江工业大学教师个人主页：`https://homepage.zjut.edu.cn/fhguo/`
- Google Scholar：`https://scholar.google.com/citations?user=M-dHZGIAAAAJ&hl=zh-CN`
- 用户提供的《郭方洪基金答辩.pptx》

建议论文 DOI、卷期页码、PDF 与代码链接在正式上线前逐篇核对。
