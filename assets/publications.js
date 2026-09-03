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
    summary: 'This paper develops an efficient sequential decentralized federated learning strategy for smart grid electricity theft detection. By integrating progressive channel pruning into decentralized collaborative training, the framework aims to preserve detection performance while reducing model complexity, computation, and communication overhead.',
    motivation: 'Smart grid electricity theft detection involves privacy-sensitive consumer data and is increasingly deployed on resource-constrained edge devices. Centralized learning requires data aggregation, while conventional federated learning can still introduce substantial communication and model-computation costs. This motivates a decentralized and lightweight learning framework that can support privacy-preserving collaborative detection without relying on a central aggregation server.',
    method: [
      'A sequential decentralized federated learning framework is constructed so that the model is propagated and updated across clients without centralized parameter aggregation.',
      'Progressive channel pruning is embedded into the federated training process to gradually remove redundant channels while retaining important feature representations.',
      'The lightweight model design reduces local computation and model transmission overhead, improving the practicality of deployment on resource-constrained smart grid edge devices.',
      'The complete framework is evaluated on smart grid electricity theft detection to study the trade-off between detection performance and resource efficiency.'
    ],
    results: 'The reported experiments demonstrate that the proposed strategy can substantially reduce model complexity and improve edge-side inference efficiency while maintaining competitive electricity theft detection performance. The figures below can be used to present the framework, pruning process, and representative experimental comparisons from the paper.',
    sourceNote: 'This explanation is prepared from the publication information and research content supplied for this website. Detailed numerical claims should match the final published paper and the uploaded figures.',
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
    heroImage: 'assets/images/papers/SDFPCP/SDFPCP.png',
    heroCaption: 'Overall framework of the proposed sequential decentralized federated progressive channel pruning strategy.',
    gallery: [
      {
        src: 'assets/images/papers/SDFPCP/SDFPCP.png',
        caption: 'Representative results and analysis for the proposed SDFPCP strategy.'
      }
    ]
  }
];
