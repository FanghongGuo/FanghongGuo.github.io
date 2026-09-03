window.PUBLICATIONS = [
  {
    id: 'learning-optimization-smart-grid-review',
    year: 2022,
    title: '基于学习优化的智能电网能量管理研究综述',
    authors: 'F. Guo, B. Xu, W.-A. Zhang, R. Deng',
    venue: '控制与决策',
    area: 'Learning-based Optimization',
    tags: ['Learning Optimization', 'Energy Management', 'Smart Grid'],
    summary: '围绕智能电网能量管理中的学习优化研究进行梳理，适合作为理解团队“学习优化”研究路线的入口。',
    motivation: '高比例新能源带来更强的不确定性与实时调度压力。团队答辩材料将“动态优化速度慢”列为微电网分布式优化与控制中的关键科学问题之一，并将学习优化作为提升实时调度能力的重要研究思路。',
    method: [
      '从学习优化视角组织智能电网能量管理相关研究。',
      '关注学习方法与传统数值优化在实时性、计算负担和调度精度之间的关系。',
      '用于理解团队后续学习型经济调度与分布式实时优化工作的研究脉络。'
    ],
    results: '团队提供的答辩材料指出，该研究方向的代表性学习优化方法在保持与数值优化相当求解精度的同时，可显著降低大规模节点场景下的求解时间；这里不将该方向性结果等同于本综述论文自身的实验结果。',
    sourceNote: '本页解释依据论文题目与团队提供的基金答辩材料整理；未提供论文全文，因此没有补写论文中未被材料支持的具体公式、实验配置或数值。',
    paperUrl: '', doi: '', codeAvailable: false,
    codePath: 'code/learning-optimization-smart-grid-review/',
    codeRepo: '',
    bibtex: '@article{Guo2022LearningOptimizationReview,\n  title   = {基于学习优化的智能电网能量管理研究综述},\n  author  = {Guo, Fanghong and Xu, B. and Zhang, W.-A. and Deng, R.},\n  journal = {控制与决策},\n  year    = {2022}\n}'
  },
  {
    id: 'alternative-learning-economic-dispatch',
    year: 2021,
    title: 'An alternative learning-based approach for economic dispatch in smart grid',
    authors: 'F. Guo, B. Xu, L. Xing, W.-A. Zhang, C. Wen, L. Yu',
    venue: 'IEEE Internet of Things Journal',
    area: 'Learning-based Optimization',
    tags: ['Economic Dispatch', 'Learning-based Optimization', 'Smart Grid'],
    summary: '以学习方法服务智能电网经济调度，体现团队“由传统数值优化走向学习优化”的代表性研究方向。',
    motivation: '智能电网经济调度需要在供需平衡、可再生能源不确定性和实时计算之间取得平衡。团队材料指出，传统数值优化、启发式算法与集中式优化分别面临求解速度、局部最优和通信负担等问题。',
    method: [
      '以学习方法替代或辅助传统在线数值求解流程。',
      '面向智能电网经济调度任务构建学习型求解思路。',
      '研究重点放在提高实时调度能力并降低在线计算负担。'
    ],
    results: '基金答辩材料将该类学习优化工作概括为“求解精度媲美数值优化、求解时间大幅减少”。由于当前资料未包含本文全文，本页不进一步给出本文专属实验数值。',
    sourceNote: '解释依据团队基金答辩材料中的“学习优化”研究主线以及已有主页论文条目整理。',
    paperUrl: '', doi: '', codeAvailable: false,
    codePath: 'code/alternative-learning-economic-dispatch/',
    codeRepo: '',
    bibtex: '@article{Guo2021AlternativeLearningED,\n  title   = {An alternative learning-based approach for economic dispatch in smart grid},\n  author  = {Guo, Fanghong and Xu, B. and Xing, L. and Zhang, W.-A. and Wen, C. and Yu, L.},\n  journal = {IEEE Internet of Things Journal},\n  year    = {2021}\n}'
  },
  {
    id: 'dc-microgrid-power-allocation-voltage-restoration',
    year: 2018,
    title: 'Distributed secondary control for power allocation and voltage restoration in islanded DC microgrids',
    authors: 'F. Guo, Q. Xu, C. Wen, L. Wang, P. Wang',
    venue: 'IEEE Transactions on Sustainable Energy',
    area: 'Distributed Control',
    tags: ['DC Microgrid', 'Distributed Control', 'Voltage Restoration'],
    summary: '研究孤岛直流微电网中的分布式二次控制，同时面向功率分配与母线电压恢复。',
    motivation: '高比例新能源和电力电子装备接入会降低系统惯量并加剧电压稳定问题。团队材料将“电压稳定与电流/功率分配难兼顾”概括为微电网稳定控制中的核心矛盾。',
    method: [
      '采用分布式二次控制框架，避免完全依赖集中式控制器。',
      '围绕功率分配与电压恢复两个目标进行协调控制设计。',
      '属于团队“组合误差反馈—有限时间控制—事件触发通信”研究链条中的代表性工作之一。'
    ],
    results: '答辩材料将该论文列为团队分布式稳定控制方向的代表作之一，并指出该方向形成了多篇 ESI 高被引论文。当前资料未提供本文单独实验表格，因此不对其数值结果作额外推断。',
    sourceNote: '解释依据基金答辩材料中“基于组合误差的微电网分布式稳定控制”部分整理。',
    paperUrl: '', doi: '', codeAvailable: false,
    codePath: 'code/dc-microgrid-power-allocation-voltage-restoration/',
    codeRepo: '',
    bibtex: '@article{Guo2018DCMicrogridControl,\n  title   = {Distributed secondary control for power allocation and voltage restoration in islanded DC microgrids},\n  author  = {Guo, Fanghong and Xu, Q. and Wen, C. and Wang, L. and Wang, P.},\n  journal = {IEEE Transactions on Sustainable Energy},\n  year    = {2018}\n}'
  },
  {
    id: 'multi-cluster-constrained-optimization',
    year: 2017,
    title: 'A distributed hierarchical algorithm for multi-cluster constrained optimization',
    authors: 'F. Guo, C. Wen, J. Mao, G. Li, Y.-D. Song',
    venue: 'Automatica',
    area: 'Distributed Optimization',
    tags: ['Distributed Optimization', 'Hierarchical Algorithm', 'Multi-cluster'],
    summary: '面向多集群约束优化的分层分布式算法研究，体现团队在大规模网络优化与分布式架构上的理论基础。',
    motivation: '大规模电力与网络化系统通常受到通信拓扑、局部信息和耦合约束限制，因此需要能够利用局部交互完成全局优化的分布式方法。',
    method: [
      '构建面向多集群约束问题的分层分布式算法框架。',
      '强调在局部通信和多层结构下实现协同优化。',
      '为后续面向大规模电力系统的分层去中心化经济调度研究提供理论基础。'
    ],
    results: '团队材料将“信息拓扑约束多”和“动态优化速度慢”视为重要科学问题。当前提供材料未包含本文完整理论与实验细节，因此本页只做研究定位层面的解释。',
    sourceNote: '解释根据论文题目、现有主页条目及团队答辩材料中的分布式优化研究脉络整理。',
    paperUrl: '', doi: '', codeAvailable: false,
    codePath: 'code/multi-cluster-constrained-optimization/',
    codeRepo: '',
    bibtex: '@article{Guo2017MulticlusterOptimization,\n  title   = {A distributed hierarchical algorithm for multi-cluster constrained optimization},\n  author  = {Guo, Fanghong and Wen, C. and Mao, J. and Li, G. and Song, Y.-D.},\n  journal = {Automatica},\n  year    = {2017}\n}'
  },
  {
    id: 'distributed-secondary-voltage-frequency-restoration',
    year: 2015,
    title: 'Distributed secondary voltage and frequency restoration control of droop-controlled inverter-based microgrids',
    authors: 'F. Guo, C. Wen, J. Mao, Y.-D. Song',
    venue: 'IEEE Transactions on Industrial Electronics',
    area: 'Distributed Control',
    tags: ['Microgrid', 'Voltage Restoration', 'Frequency Restoration'],
    summary: '面向下垂控制逆变器微电网的分布式二次电压与频率恢复，是团队微电网分布式稳定控制方向的代表性成果。',
    motivation: '传统下垂控制能够实现基本功率分配，但存在稳态电压/频率偏差。团队材料指出，在高比例新能源和电力电子装备条件下，如何兼顾稳定恢复与分布式协同是关键问题。',
    method: [
      '采用分布式二次控制思路进行电压与频率恢复。',
      '依赖网络化节点之间的信息交互，而非单一集中控制器。',
      '作为团队后续有限时间、事件触发和低通信成本控制研究的重要基础。'
    ],
    results: '基金答辩材料将该论文列为分布式稳定控制方向的代表作，并报告其具有较高学术引用影响。引用数据随时间变化，因此网页不写死实时 Google Scholar 数值。',
    sourceNote: '解释依据团队基金答辩材料中的代表作表格及稳定控制研究主线整理。',
    paperUrl: '', doi: '', codeAvailable: false,
    codePath: 'code/distributed-secondary-voltage-frequency-restoration/',
    codeRepo: '',
    bibtex: '@article{Guo2015SecondaryRestoration,\n  title   = {Distributed secondary voltage and frequency restoration control of droop-controlled inverter-based microgrids},\n  author  = {Guo, Fanghong and Wen, C. and Mao, J. and Song, Y.-D.},\n  journal = {IEEE Transactions on Industrial Electronics},\n  year    = {2015}\n}'
  }
];
