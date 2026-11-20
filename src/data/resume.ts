/**
 * 个人简历数据 — 李韦卓
 * 所有页面内容均从此文件读取，修改此处即可更新整个网站。
 */

export const profile = {
  name: '李韦卓',
  nameEn: 'Li Weizhuo',
  title: '数据分析 · AI应用 · 在读硕士',
  school: '天津医科大学',
  statusText: '在读硕士 · 寻求数据分析 / AI应用开发岗位',
  tagline: '从数据清洗到商业洞察的全链路实践者，擅长将分析结果转化为可落地的策略',
  bio: '天津医科大学生物信息与计算生物学专业在读硕士。擅长 SQL 数据分析、Python 建模与数据可视化，熟悉电商运营指标体系与经营分析方法。曾在百度智能云与朗姿股份实习，独立完成 RAG 智能问答系统与电商用户分层项目，具备从数据采集、清洗分析到策略落地的完整实战经验。',
  location: '天津',
  email: 'bulala0831@163.com',
  phone: '18081017670',
  available: true,
  photo: '',
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/liweizhuo', icon: 'github' },
  { label: 'Email', href: 'mailto:bulala0831@163.com', icon: 'mail' },
];

export type SkillLevel = '精通' | '熟练' | '掌握';

export interface SkillCategory {
  category: string;
  skills: { name: string; level: SkillLevel }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: '数据分析与可视化',
    skills: [
      { name: 'SQL', level: '精通' },
      { name: 'Python (Pandas/NumPy)', level: '精通' },
      { name: 'Excel', level: '精通' },
      { name: 'Power BI', level: '精通' },
      { name: 'Tableau', level: '熟练' },
      { name: 'Matplotlib / Seaborn', level: '熟练' },
      { name: 'R', level: '掌握' },
    ],
  },
  {
    category: 'AI 与大模型应用',
    skills: [
      { name: 'Prompt Engineering', level: '精通' },
      { name: 'Text-to-SQL', level: '精通' },
      { name: 'Few-shot / CoT', level: '精通' },
      { name: 'LangChain', level: '熟练' },
      { name: 'LangGraph', level: '掌握' },
      { name: 'MCP / ReAct', level: '掌握' },
    ],
  },
  {
    category: '机器学习',
    skills: [
      { name: '线性/逻辑回归', level: '熟练' },
      { name: '决策树 / 随机森林', level: '熟练' },
      { name: 'XGBoost', level: '熟练' },
      { name: 'K-Means', level: '熟练' },
      { name: 'PyTorch', level: '掌握' },
      { name: 'CNN / RNN / Transformer', level: '掌握' },
    ],
  },
  {
    category: '工程化与工具',
    skills: [
      { name: 'MySQL', level: '精通' },
      { name: 'FastAPI', level: '熟练' },
      { name: 'Milvus', level: '熟练' },
      { name: 'Redis', level: '掌握' },
      { name: 'Docker', level: '掌握' },
      { name: 'Linux / Git', level: '熟练' },
    ],
  },
];

export interface HighlightItem {
  summary: string;
  detail: string;
}

export interface InternshipItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: HighlightItem[];
}

export const internships: InternshipItem[] = [
  {
    company: '百度在线网络技术有限公司',
    role: '数据BP实习生 · 智能云事业群 业务运营部',
    period: '2026.04 — 2026.08',
    description: '负责智能云事业群经营数据分析与报表自动化，支持 8+ 条业务线的经营跟踪与决策支持。',
    highlights: [
      {
        summary: '指标体系搭建',
        detail: '维护新签、计收、回款等 6+ 张业务主题表，搭建及迭代 5+ 个 Sugar BI 看板，支持指标分层监控与明细下钻，覆盖 8+ 条业务线的经营跟踪',
      },
      {
        summary: '经营分析',
        detail: '围绕销售目标达成与回款进展开展周度经营分析，识别业绩落后团队及异常波动项目，形成重点项目跟进建议，为管理层决策提供数据支撑',
      },
      {
        summary: '数据口径治理',
        detail: '作为业务运营部数据对接人，组织指标口径拉齐与看板使用培训，确保各团队对统计定义理解一致，减少跨部门沟通成本',
      },
      {
        summary: '流程自动化',
        detail: '基于百度 Agent Dumate 编排报表更新与周报生成工作流，将单次周报交付时间由 4 小时缩短至 20 分钟，释放约 80% 重复劳动',
      },
    ],
  },
  {
    company: '朗姿股份有限公司',
    role: '数据运营实习生 · 电商运营部',
    period: '2025.06 — 2025.12',
    description: '负责天猫女装店铺运营数据分析，构建用户分层模型并驱动增长策略落地。',
    highlights: [
      {
        summary: '数据清洗与报表建设',
        detail: '使用 SQL 与 Python 清洗流量、交易及商品数据，建立日 / 周 / 月度运营报表，跟踪转化率、客单价及库存周转等核心指标，为运营决策提供日常数据支撑',
      },
      {
        summary: '用户分层与精准投放',
        detail: '基于 RFM 与 K-means（K=4）划分用户群体，构建用户-商品隐式反馈矩阵，筛选约 10% 高价值用户支撑定向投放，提升营销资源利用效率',
      },
      {
        summary: 'AI 驱动策略推荐',
        detail: '将分析结果输入 DeepSeek-V3 生成预算分配与用户召回建议，结合业务规则校验后落地执行，3 个月内 GMV 提升约 8%',
      },
    ],
  },
];

export interface ProjectItem {
  name: string;
  tagline: string;
  period: string;
  role: string;
  description: string;
  highlights: HighlightItem[];
  tags: string[];
  link: string;
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    name: '经营分析与指标问答系统',
    tagline: 'RAG + Text-to-SQL',
    period: '2026.05 — 2026.08',
    role: '项目负责人',
    description:
      '面向经营人员的自然语言查数系统：用 RAG 检索指标口径依据，大模型结合 schema 生成 SQL，程序校验后执行只读查询，返回数值与口径来源。RAGAS 上下文召回率 0.94，查数准确率 97%。',
    highlights: [
      {
        summary: '双阶段架构',
        detail: '设计离线准备 + 在线问答双阶段架构：离线完成 Excel 清洗入库、口径文档父子分块与 BGE-M3 向量化；在线执行混合检索 → SQL 生成 → 门禁校验 → 只读执行 → 结果解释',
      },
      {
        summary: '混合检索方案',
        detail: '采用 BGE-M3 双编码（dense + sparse），Milvus 混合检索 + WeightedRanker 融合 + CrossEncoder 重排，父子分块策略保证召回精度与上下文完整性',
      },
      {
        summary: 'SQL 安全门禁',
        detail: '实现 SQL 门禁机制：大模型生成 SQL 后经结构校验、口径核对、权限检查与参数绑定，仅放行只读查询，防止注入与误操作',
      },
    ],
    tags: ['RAG', 'Text-to-SQL', 'BGE-M3', 'Milvus', 'FastAPI', 'LangChain'],
    link: '',
    featured: true,
  },
  {
    name: '朗姿天猫旗舰店：商品分层与投放优化',
    tagline: 'BCG 矩阵 + 投产诊断',
    period: '2025.08 — 2025.10',
    role: '项目核心人员',
    description:
      '围绕朗姿主品牌天猫旗舰店（200 万+粉丝），解决低效商品持续消耗推广预算的问题。通过 SQL 整合交易、投放、退款与库存数据，借鉴 BCG 构建"销售贡献—增长"四象限分层，诊断低效款并优化预算分配，最终通过 Python 调用大模型 API 生成周度复盘报告。',
    highlights: [
      {
        summary: '数据整合与口径设计',
        detail: 'SQL 按款式与日期汇总交易、退款、投放及库存数据，统一粒度为"日期 × 款式 × 渠道 × 资源位"，明确净销售额、销售贡献率、退款后投产等核心指标口径，避免多对多连接导致金额重复',
      },
      {
        summary: 'BCG 四象限商品分层',
        detail: '按品类与上市阶段分组，以组内中位数区分贡献与增长高低，将商品分为明星款 / 稳定款 / 潜力款 / 低效候选款，作为预算分配的初筛依据而非直接淘汰标准',
      },
      {
        summary: '低效诊断与预算优化',
        detail: '对低贡献低增长在投款，从点击率、转化率、退货率、库存等维度定位问题；优化后仍低效则分阶段降投 20%，释放预算向投产达标的明星款小步增投 10%-20%，观察边际投产',
      },
      {
        summary: '自动化报告生成',
        detail: 'Python 读取 SQL 导出与 Excel 台账，校验字段后构建结构化输入，调用大模型 API 生成周度复盘报告（含四象限概览、问题款诊断、调整效果、下周行动），人工复核后投入运营',
      },
    ],
    tags: ['SQL', 'Excel', 'Python', 'BCG 矩阵', 'LLM API'],
    link: '',
    featured: true,
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
  courses: string[];
}

export const educations: EducationItem[] = [
  {
    school: '天津医科大学（211）',
    degree: '生物信息与计算生物学 · 硕士',
    period: '2024.09 — 2027.06',
    highlights: ['学业一等奖学金', '研究方向：多组学数据分析、统计建模与癌症风险关联分析'],
    courses: ['多组学数据分析', '统计建模', '癌症风险关联分析'],
  },
  {
    school: '广西大学（211）',
    degree: '食品科学与工程 · 本科',
    period: '2020.09 — 2024.06',
    highlights: ['CET6 通过'],
    courses: ['高等数学', '概率论与数理统计', '线性代数', '微积分'],
  },
];

export interface AwardItem {
  title: string;
  period: string;
  description: string;
}

// 暂无竞赛荣誉数据，可自行添加
export const awards: AwardItem[] = [];

export const navSections = [
  { id: 'education', label: '教育' },
  { id: 'skills', label: '技能' },
  { id: 'internship', label: '实习' },
  { id: 'projects', label: '作品' },
  { id: 'contact', label: '联系' },
];
