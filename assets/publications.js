window.PUBLICATIONS = [
  {
    id: 'fed-mcrw',
    year: 2026,
    title: 'Federated Markov Chain Random Walk (Fed-MCRW)',
    authors: 'Authors to be updated',
    venue: 'Under Review',
    area: 'Federated Learning',
    tags: [
      'Sequential Federated Learning',
      'Markov Chain',
      'Topology Adaptation',
      'Decentralized Learning'
    ],

    summary: '提出一种面向动态边缘网络的去中心化拓扑自适应顺序联邦学习方法，通过 Markov 链随机游走实现客户端的分布式激活与模型串行传播。',

    motivation: '现有顺序联邦学习方法通常依赖理想化的客户端调度或网络拓扑假设。在动态边缘网络中，实际通信拓扑可能与预设调度策略不匹配，从而导致模型传播受阻以及优化过程不稳定。',

    method: [
      '利用仅依赖局部邻居拓扑信息的 Metropolis-Hastings 转移机制构建客户端随机游走过程。',
      '通过 Markov 链实现去中心化、拓扑自适应的客户端激活，无需服务器进行全局调度。',
      '建立拓扑感知的理论分析框架，并利用 Markov 链返回时间的二阶矩刻画网络拓扑与优化收敛性能之间的关系。',
      '在动态拓扑及恶意链路干扰场景下评估算法的拓扑适应能力和鲁棒性。'
    ],

    results: '在 CIFAR-10 数据集和 VGG-9 模型上的实验用于验证 Fed-MCRW 的收敛性能、拓扑适应能力以及面对恶意链路干扰时的鲁棒性。具体数值结果可在论文正式发表后进一步补充。',

    sourceNote: '本页内容依据 Fed-MCRW 当前论文摘要与研究方案整理。论文尚未正式发表，因此作者、期刊信息、DOI 和最终 BibTeX 可在录用后更新。',

    paperUrl: '',
    doi: '',

    codeAvailable: true,
    codePath: 'code/fed-mcrw/',
    codeRepo: 'https://github.com/FanghongGuo/Fed-MCRW',

    bibtex: `@article{FedMCRW2026,
  title   = {Federated Markov Chain Random Walk (Fed-MCRW)},
  year    = {2026},
  note    = {Under Review}
}`
  }
];
