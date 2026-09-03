# Guo Research Group 网站维护说明

本仓库用于维护 **Guo Research Group** 团队主页：

- 网站地址：https://FanghongGuo.github.io/
- GitHub 仓库：https://github.com/FanghongGuo/FanghongGuo.github.io

网站采用纯静态 **HTML + CSS + JavaScript** 构建，并通过 **GitHub Pages** 自动部署。

---

# 一、后续维护时最常用的文件

| 维护内容 | 主要修改文件 |
|---|---|
| 首页标题、PI、Research、Projects、Contact | `index.html` |
| 团队成员 | `assets/main.js` |
| 新增/修改论文 | `assets/publications.js` |
| 论文列表页 | `publications.html`、`assets/publications-page.js` |
| 论文详情页统一布局 | `paper.html`、`assets/paper-page.js` |
| 页面样式 | `assets/style.css` |
| 团队照片 | `assets/images/team/` |
| 论文图片 | `assets/images/papers/论文ID/` |

一般情况下：

- **新增论文**：主要修改 `assets/publications.js`
- **新增团队成员**：主要修改 `assets/main.js`
- **修改首页内容**：主要修改 `index.html`
- **调整页面显示效果**：主要修改 `assets/style.css`

---

# 二、新增一篇论文的推荐流程

以后每发表一篇重要论文，建议按照以下步骤维护。

## 1. 为论文确定唯一 ID

例如：

```js
id: 'SDFPCP'
```

或：

```js
id: 'Fed-MCRW'
```

该 ID 必须唯一。

论文详情页将自动对应：

```text
paper.html?id=SDFPCP
```

或：

```text
paper.html?id=Fed-MCRW
```

建议优先使用论文算法简称，不建议使用：

```text
paper1
paper2
newpaper
test
final
```

---

## 2. 在 `assets/publications.js` 中新增论文记录

每篇论文对应一个 JavaScript 对象，例如：

```js
{
  id: 'SDFPCP',

  year: 2025,

  title: 'An Efficient Sequential Decentralized Federated Progressive Channel Pruning Strategy for Smart Grid Electricity Theft Detection',

  authors: 'Fanghong Guo, Shengwei Li, Hao Yang, Chen Dong, Yifang Chen, and Guoqi Li',

  venue: 'IEEE Transactions on Industrial Informatics',

  area: 'Federated Learning',

  tags: [
    'Electricity Theft Detection',
    'Sequential Federated Learning',
    'Model Pruning',
    'Smart Grid'
  ],

  summary: 'Brief overview of the paper.',

  motivation: 'Why the research problem matters.',

  method: [
    'Key idea 1.',
    'Key idea 2.',
    'Key idea 3.'
  ],

  results: 'Main experimental or theoretical results.',

  sourceNote: 'Optional source note.',

  paperUrl: 'https://doi.org/...',

  doi: '10.xxxx/xxxxx',

  codeAvailable: true,

  codePath: 'code/SDFPCP/',

  codeRepo: 'https://github.com/FanghongGuo/SDFPCP',

  bibtex: `@article{...}`,

  heroImage: 'assets/images/papers/SDFPCP/framework.png',

  heroCaption: 'Overall framework of the proposed method.',

  gallery: [
    {
      src: 'assets/images/papers/SDFPCP/results.png',
      caption: 'Representative experimental results.'
    }
  ]
}
```

新增论文时重点检查：

- `id` 是否唯一
- `title` 是否为正式论文题目
- `authors` 顺序是否正确
- `venue` 是否为正式期刊/会议名称
- `year` 是否正确
- DOI 是否真实
- BibTeX 是否与正式论文一致
- Code 链接是否真实存在
- 图片路径是否与仓库目录一致

---

# 三、论文图片的维护方式

每篇论文建议单独建立图片目录，例如：

```text
assets/images/papers/SDFPCP/
```

推荐统一命名：

```text
framework.png
method.png
performance.png
efficiency.png
ablation.png
deployment.png
```

其中：

```text
framework.png
```

作为论文详情页的主框架图。

在 `assets/publications.js` 中填写：

```js
heroImage: 'assets/images/papers/SDFPCP/framework.png'
```

其他实验图放在：

```js
gallery: [
  {
    src: 'assets/images/papers/SDFPCP/performance.png',
    caption: 'Performance comparison.'
  },
  {
    src: 'assets/images/papers/SDFPCP/efficiency.png',
    caption: 'Efficiency comparison.'
  }
]
```

后续新增图片时，不需要修改 `paper.html`，只需要：

1. 上传图片；
2. 在该论文的 `gallery` 中增加记录。

---

# 四、重要论文建议单独建立 GitHub Repo

重要论文建议采用：

> 一篇论文对应一个独立 GitHub Repository

例如：

```text
FanghongGuo/SDFPCP
FanghongGuo/Fed-MCRW
FanghongGuo/FedSTS
```

推荐仓库结构：

```text
Paper-Repo/
├── README.md
├── LICENSE
├── requirements.txt
├── code/
├── models/
├── datasets/
├── configs/
├── experiments/
├── figures/
└── results/
```

网站中通过：

```js
codeAvailable: true,
codeRepo: 'https://github.com/FanghongGuo/SDFPCP'
```

自动生成 Code 入口。

如果代码尚未公开：

```js
codeAvailable: false,
codeRepo: ''
```

不要为了页面完整而填写不存在的代码仓库。

---

# 五、论文信息的维护原则

正式主页中的论文信息应尽量以正式出版版本为准。

建议每篇论文正式发表后检查：

- Title
- Authors
- Journal / Conference
- Year
- Volume
- Number
- Pages
- DOI
- BibTeX
- Paper URL
- Code URL

避免：

- 猜测 DOI
- 猜测卷期页码
- 使用错误作者顺序
- 把 `Accepted` 长期当作期刊名称
- 使用尚不存在的 Code Repo
- 在论文结果中加入论文未报告的数据

---

# 六、首页 Selected Publications 的维护

首页的：

```text
Representative Work
```

由：

```text
assets/publications.js
```

动态生成。

对应 HTML：

```html
<div class="pub-list" id="homePublications"></div>
```

因此后续不要直接在 `index.html` 中手写论文条目。

推荐访问逻辑：

```text
顶部 Publications
        ↓
首页 Representative Work
        ↓
Browse publications & code
        ↓
完整 Publications 页面
```

完整论文页：

```text
publications.html
```

---

# 七、团队成员维护

团队成员主要在：

```text
assets/main.js
```

中维护。

新增成员时建议统一记录：

```js
{
  name: 'Name',
  role: 'Ph.D. Student',
  topics: 'Federated Learning · Smart Grid',
  initials: 'XX'
}
```

角色命名建议统一：

```text
Principal Investigator
Postdoctoral Researcher
Ph.D. Student
Master Student
Undergraduate
Alumni
```

如果后续增加成员照片，建议统一放在：

```text
assets/images/team/members/
```

并使用统一文件名：

```text
name.jpg
```

---

# 八、团队照片维护

团队合照当前建议放在：

```text
assets/images/team/Teamphoto.png
```

以后更新团队照片时，最简单的方法是：

1. 新照片仍命名为 `Teamphoto.png`
2. 上传并覆盖旧文件
3. 不修改 `index.html`

如需要保留历年团队照片，可改为：

```text
Teamphoto-2026.png
Teamphoto-2027.png
Teamphoto-2028.png
```

然后同步修改 `index.html` 中的图片路径。

---

# 九、PI 信息维护

PI 信息主要位于：

```text
index.html
```

后续需要重点维护：

- 职称
- 研究方向
- 工作经历
- 教育经历
- 邮箱
- 教师主页
- Google Scholar
- 个人照片

建议 PI 照片后续存放在本仓库：

```text
assets/images/team/FanghongGuo.png
```

避免长期使用外部教师主页的图片 URL，以免对方网站改版导致图片失效。

---

# 十、Projects 与 Honors 的维护

Projects 和 Honors 均直接写在：

```text
index.html
```

每年建议检查：

- 是否有新国家自然科学基金项目
- 是否有新省部级项目
- 是否有新企业合作项目
- 是否有新学术荣誉
- 是否有新的编委/副编辑任职
- 项目年份是否需要更新

已结束的项目可以：

- 保留并标注年份；
- 或从首页移除，只保留代表性项目。

首页不建议堆积过多项目。

---

# 十一、统计数据的维护

首页目前可能包含：

```text
SCI papers
First/Corresponding papers
Google Scholar citations
H-index
Patents
```

这类数据会随时间变化。

建议每年至少更新一次。

优先参考：

1. 浙江工业大学教师主页；
2. Google Scholar；
3. 团队内部确认数据。

更新时同步检查说明文字，例如：

```text
Citation metrics may change over time.
```

---

# 十二、正式网页不要出现开发提示

正式网站中不要保留类似：

```text
The current version includes the publicly verified PI profile.
Student and alumni profiles can be added in assets/main.js.
```

也不要出现：

```text
Authors to be updated
Information to be added
Test
Demo
Temporary
```

此类维护提示应写在 README 中，而不是面向访客的网页中。

---

# 十三、网站内容语言规范

当前正式网站建议保持：

> 所有访客可见内容统一使用英文。

README 可以使用中文。

建议统一：

- 标题大小写
- IEEE 期刊名称
- 作者姓名写法
- Research Area 名称
- Tags 用词
- 项目名称格式

例如 Research Area 建议固定使用：

```text
Federated Learning
Distributed Optimization
Distributed Control
Cyber-Physical Security
Smart Grid Intelligence
```

不要同一类论文同时使用：

```text
FL
Federated AI
Federated Learning
Federated Intelligence
```

否则 Publications 页面会生成多个重复筛选分类。

---

# 十四、页面样式维护

全部样式集中在：

```text
assets/style.css
```

后续如果只是调整：

- 字体
- 图片大小
- 卡片宽度
- 页面间距
- 背景颜色
- 按钮颜色

优先修改该文件。

常用样式：

```text
.portrait-frame
```

PI 照片。

```text
.group-photo
```

团队合照。

```text
.paper-hero-figure
```

论文框架图。

```text
.paper-gallery
```

论文实验图。

```text
.paper-card
```

完整 Publications 页面论文卡片。

```text
.pub-item
```

首页 Representative Work。

---

# 十五、如果只是暂时不显示某个模块

建议使用 HTML 注释，不要直接删除。

例如：

```html
<!--
<section id="research">
  ...
</section>
-->
```

这样以后需要恢复时，只需删除注释符号。

适合暂时隐藏：

- Research
- Books
- 某个 Project
- Join Us
- 某个统计模块

---

# 十六、GitHub Pages 修改后的标准流程

每次修改网站后：

```text
1. 修改 GitHub 中对应文件
2. 点击 Commit changes
3. 等待 GitHub Pages 自动部署
4. 打开 Actions
5. 检查最新 pages build and deployment
6. 确认最新任务为绿色 ✓
7. 打开网站
8. 强制刷新浏览器
```

---

# 十七、Actions 中出现 Cancelled 怎么办

短时间连续 Commit 时，可能出现：

```text
Cancelled
```

这是因为新的部署任务替代了旧任务。

只要最新一条：

```text
pages build and deployment
```

显示：

```text
✓
```

即可。

无需处理之前被取消的任务。

---

# 十八、修改成功但网页没有变化

首先检查：

```text
Actions
```

确认最新部署已经成功。

然后强制刷新。

Windows：

```text
Ctrl + F5
```

或：

```text
Ctrl + Shift + R
```

Mac：

```text
Command + Shift + R
```

还可以访问：

```text
https://FanghongGuo.github.io/?v=2
```

通过添加临时参数绕过浏览器缓存。

---

# 十九、不要连续快速提交大量修改

建议：

1. 一次完成同一类修改；
2. Commit；
3. 等部署完成；
4. 检查页面；
5. 再进行下一轮修改。

否则可能出现大量：

```text
Cancelled
```

任务，不方便排查。

---

# 二十、每篇新论文的标准维护清单

每发表一篇新论文，建议依次完成：

- [ ] 确认正式 Title
- [ ] 确认 Authors
- [ ] 确认 Year
- [ ] 确认 Journal / Conference
- [ ] 确认 DOI
- [ ] 确认 BibTeX
- [ ] 在 `assets/publications.js` 新增记录
- [ ] 建立唯一 Paper ID
- [ ] 建立 `assets/images/papers/PaperID/`
- [ ] 上传 framework 图
- [ ] 上传必要实验图
- [ ] 创建独立 GitHub Code Repo（如公开）
- [ ] 填写 `codeRepo`
- [ ] 检查首页 Representative Work
- [ ] 检查 Publications 页面
- [ ] 检查 Paper Detail 页面
- [ ] 检查 Code 按钮
- [ ] 检查 DOI 按钮
- [ ] 检查 BibTeX
- [ ] 检查桌面端显示
- [ ] 检查手机端显示

---

# 二十一、每学期建议维护内容

每学期建议检查一次：

- 团队成员
- 在读博士生
- 在读硕士生
- 毕业生
- 团队合照
- 新发表论文
- 新公开代码
- 新项目
- 新荣誉
- 联系方式

---

# 二十二、每年建议维护内容

每年至少检查一次：

- SCI 论文总数
- 第一/通讯作者论文数量
- Google Scholar 引用次数
- H-index
- 专利数量
- 新增科研项目
- 新增学术荣誉
- PI 职称
- PI 学术兼职
- 团队成员状态
- 网站失效链接

---

# 二十三、推荐命名规范

## 论文 ID

推荐：

```text
SDFPCP
Fed-MCRW
FedSTS
```

## 论文图片目录

推荐：

```text
assets/images/papers/SDFPCP/
assets/images/papers/Fed-MCRW/
assets/images/papers/FedSTS/
```

## GitHub Code Repo

推荐：

```text
FanghongGuo/SDFPCP
FanghongGuo/Fed-MCRW
FanghongGuo/FedSTS
```

## 图片名称

推荐：

```text
framework.png
method.png
performance.png
efficiency.png
ablation.png
deployment.png
```

---

# 二十四、维护原则

后续维护建议遵循以下原则：

1. **一个数据源**

   论文统一维护在：

   ```text
   assets/publications.js
   ```

   不要在多个页面重复手写同一篇论文。

2. **一篇重要论文一个 Repo**

   便于代码、README、实验结果和 Issue 长期维护。

3. **一篇论文一个图片目录**

   避免图片混乱。

4. **正式页面只显示正式内容**

   开发说明统一放 README。

5. **所有公开数据均需可核实**

   不填写无法确认的 DOI、期刊、实验数值和代码链接。

6. **首页保持简洁**

   首页用于展示代表性内容，完整信息放 Publications 页面和独立论文详情页。

7. **优先保持英文一致性**

   正式网站面向国际访问时，建议所有访客可见内容统一使用英文。

8. **修改后必须检查 Pages 部署**

   不要仅根据 Commit 成功判断网站已经更新。

---

# 二十五、快速故障排查

## Publications 显示 `0 publications`

优先检查：

```text
assets/publications.js
```

是否存在 JavaScript 语法错误。

---

## Code 按钮打不开

检查：

```js
codeRepo
```

必须写纯 URL：

```js
codeRepo: 'https://github.com/FanghongGuo/SDFPCP'
```

不要写 Markdown 链接：

```text
[https://...](https://...)
```

---

## 论文图片不显示

检查：

1. 图片是否已经上传；
2. 大小写是否完全一致；
3. 文件夹名称是否一致；
4. `heroImage` / `gallery.src` 路径是否正确。

GitHub Pages 对大小写敏感。

---

## 修改后页面仍是旧版

依次检查：

```text
Commit
↓
Actions
↓
Pages deployment ✓
↓
Ctrl + F5
```

---

## 首页某个导航无法跳转

检查：

```html
href="#xxx"
```

是否存在对应：

```html
id="xxx"
```

---

# 二十六、主要维护入口总结

日常维护只需要记住以下几个文件：

```text
首页内容
→ index.html

论文
→ assets/publications.js

团队成员
→ assets/main.js

页面样式
→ assets/style.css

论文详情页统一结构
→ assets/paper-page.js

完整论文列表功能
→ assets/publications-page.js
```

---

# 二十七、网站与学术主页

团队主页：

```text
https://FanghongGuo.github.io/
```

GitHub：

```text
https://github.com/FanghongGuo/FanghongGuo.github.io
```

教师主页：

```text
https://homepage.zjut.edu.cn/fhguo/
```

Google Scholar：

```text
https://scholar.google.com/citations?user=M-dHZGIAAAAJ&hl=zh-CN
```

---

# 二十八、建议的长期维护方式

建议指定一名团队成员负责网站日常维护。

维护优先级：

```text
新论文
>
代码 Repo
>
团队成员
>
项目与荣誉
>
统计数据
>
页面样式
```

原则上：

- 论文发表后及时更新；
- 代码公开后及时绑定；
- 团队成员每学期更新；
- 统计数据每年更新；
- 页面视觉样式不建议频繁大改。

这样可以在较低维护成本下保持团队主页长期准确、稳定和专业。
