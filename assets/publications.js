window.PUBLICATIONS = [
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

    summary: '面向智能电网窃电检测任务，提出一种高效的顺序去中心化联邦渐进通道剪枝策略，在兼顾检测性能的同时降低通信与计算开销。',

    motivation: '智能电网窃电检测通常面临数据隐私约束、边缘设备资源受限以及客户端数据异质性等问题。传统集中式方法难以满足隐私保护要求，而标准联邦学习又可能带来较高的通信和模型开销，因此有必要探索面向边缘场景的轻量化顺序去中心化联邦学习方案。',

    method: [
      '构建顺序去中心化联邦学习框架，使模型在客户端之间串行传播与协同更新。',
      '将渐进式通道剪枝嵌入联邦训练过程，在保持关键特征表达能力的同时逐步降低模型复杂度。',
      '通过轻量化模型设计减少边缘侧训练和通信负担，从而提升资源受限场景下的部署可行性。',
      '面向智能电网窃电检测任务验证方法在检测性能与效率之间的平衡能力。'
    ],

    results: '该方法在智能电网窃电检测场景下兼顾模型检测性能与资源效率，通过顺序去中心化联邦学习与渐进式通道剪枝降低模型计算与通信负担。',

    sourceNote: '本页内容依据论文正式发表信息及相关研究内容整理。',

    paperUrl: '',

    doi: '',

    codeAvailable: true,

    codePath: 'code/SDFPCP/',

    codeRepo: 'https://github.com/FanghongGuo/SDFPCP',

    bibtex: `@article{guo2024efficient,
  title={An efficient sequential decentralized federated progressive channel pruning strategy for smart grid electricity theft detection},
  author={Guo, Fanghong and Li, Shengwei and Yang, Hao and Dong, Chen and Chen, Yifang and Li, Guoqi},
  journal={IEEE Transactions on Industrial Informatics},
  volume={21},
  number={3},
  pages={2393--2402},
  year={2025},
  publisher={IEEE}
}`,

    heroImage: 'assets/images/papers/SDFPCP/framework.png',

    heroCaption: 'Overall framework of the proposed sequential decentralized federated progressive channel pruning strategy.',

    gallery: [
      {
        src: 'assets/images/papers/SDFPCP/SDFPCP.png',
        caption: 'Comparison of electricity theft detection performance.'
      }
    ]
  }
];
