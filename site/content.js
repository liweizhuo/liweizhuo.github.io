document.querySelector('.intro').innerHTML = `
<p>你好，我是李韦卓，关注经营分析与 AI 应用。</p>
<p>目前在天津医科大学攻读生物信息与计算生物学硕士。曾在 <a class="inline" href="#experience">百度智能云</a> 做数据 BP，也在 <a class="inline" href="#experience">朗姿股份</a> 参与电商数据运营。</p>
<p>我的实践从业务问题开始：收入和回款为什么偏离目标？哪些商品值得继续投放？一张报表背后的统计口径，能不能更快查清楚？我用 SQL、Python 和 BI 工具整理数据，也尝试让大模型参与检索、查询与报告生成。</p>
<p>在百度，我把经营口径与数据查询串联成 <a class="inline" href="#projects">RAG + Text-to-SQL 问答系统</a>，并通过流程自动化，将单次周报交付从 4 小时缩短到 20 分钟。在朗姿，我参与 <a class="inline" href="#projects">商品分层与投流优化</a>，把分析结果带到预算调整和运营复盘中。</p>
<p>我在意的不只是得到一个数字，还包括它的口径是否清楚、结论能否追溯，以及下一步能做什么。</p>
<p>正在寻找数据分析 / AI 应用开发相关机会。欢迎 <a class="inline" href="mailto:bulala0831@163.com">写信聊聊</a>。</p>`;
document.querySelector('#experience').innerHTML = `
<h1 id="experience-title">经历</h1><p>从经营跟踪到电商运营，在真实业务中理解数据，也把重复工作逐步变成工具。</p>
<article class="story"><p class="eyebrow">2026.04 — 2026.08</p><h2>百度智能云</h2><p class="role">数据 BP 实习生 · 智能云事业群 / 业务运营部</p>
<p>围绕新签、计收和回款等经营指标，参与数据核对、看板建设与周度分析，支持 8 条以上业务线的经营跟踪。</p>
<h3>先让数据对得上，再让问题看得清</h3><p>核对 CRM、合同和财务等多源数据，维护 6 张以上业务主题表，处理异常并更新经营报表。针对看板取数 SQL，用 CTE 分层组织多表关联，以窗口函数完成分组排名和周期对比；搭建、迭代销售全景与业绩追踪等 5 个以上 Sugar BI 看板，支持指标分层与明细下钻。</p>
<p>在周度复盘中，从客户贡献、业务结构和合同执行进展拆解目标缺口，识别业绩落后团队、回款风险与异常波动项目，形成重点项目跟进建议。</p>
<h3>让重复交付更轻一些</h3><p>构建业务口径与报表规则知识库，并基于百度 Agent Dumate 开发 5 个以上可复用 Skills，串联数据处理、SQL 调用和结果校验，自动更新报表、生成周报。单次周报交付时间由 <strong>4 小时缩短至 20 分钟</strong>。</p><a class="inline" href="#projects">了解经营问答系统</a></article>
<article class="story"><p class="eyebrow">2025.07 — 2025.12</p><h2>朗姿股份</h2><p class="role">数据运营实习生 · 电商运营部</p>
<p>围绕天猫女装店铺的流量、转化、客单价、退货与库存周转，使用 SQL、Python 和 Excel 整理经营数据，建立日、周、月度运营报表。</p>
<h3>从商品表现，找到预算调整的方向</h3><p>结合销售贡献与增长，对 <strong>1,000 多个 SKU</strong> 进行商品分层，再从投产、退货和库存表现中筛选低效款与潜力款。沿点击、加购、支付等环节排查投放问题，与运营共同验证主图、人群及优惠展示调整，逐步减少持续低效商品的投放，将预算转向投产达标、库存充足的款式。</p>
<h3>把分析带到人群与投放策略里</h3><p>基于 RFM 与兴趣特征进行特征工程，以 K-means（K=4）划分用户群体，结合消费价值和商品偏好完善画像，支持人群定向、存量维护与召回。</p><p>将渠道、漏斗与分层结果交给 Qwen-Plus，明确分析目标、业务约束和输出格式，迭代预算分配及用户运营建议，经业务复核后落地执行。</p></article>
<article class="story"><p class="eyebrow">2024.09 — 2027.06</p><h2>天津医科大学（211）</h2><p class="role">生物信息与计算生物学 · 硕士</p><p>学业一等奖学金</p><p>研究方向：多组学数据分析、统计建模与癌症风险关联分析、机器学习。</p></article>
<article class="story"><p class="eyebrow">2020.09 — 2024.06</p><h2>广西大学（211）</h2><p class="role">食品科学与工程 · 本科</p><p>CET6</p><h3>班长 · 班级组织与沟通协调</h3><p>担任班长，参与班级日常管理与集体事务组织；整理、传达学校及学院通知，汇总同学反馈和相关信息，协调任务安排与进度跟进，做好师生之间的沟通衔接。</p></article>`;
document.querySelector('#projects').innerHTML = `
<h1 id="projects-title">项目</h1><p>两段实践：让经营数据更容易被查询，让商品分析更接近运营决策。</p>
<article class="story"><p class="eyebrow">2026.05 — 2026.08 · 项目负责人</p><h2>经营分析与指标问答系统</h2><p class="role">RAG + Text-to-SQL</p>
<p>经营数据分散在多张表和看板里，查数之外，还需要反复确认“这个指标怎么算”。我设计了一套问答系统，把业务定义、数据库查询和结果来源放进同一个流程：用自然语言查询新签、营收、回款及周期变化，同时解释口径与依据。</p>
<div class="result-line"><strong>100+</strong> 条评测问题 <span>·</span> <strong>97%</strong> 明确口径查数题数值准确率</div>
<h3>先确认怎么算，再决定怎么查</h3><p>梳理指标定义、计入与排除条件、时间归属和金额单位，建立口径文档与数据库字段的对应关系。检索时恢复完整定义与例外条件，再把适用证据、Schema 和表关联关系交给模型生成 SQL。</p>
<details><summary>知识检索与查询链路</summary><div class="detail"><p>以父子分块保存口径上下文，使用 BGE-M3 编码，在 Milvus 中建立稠密、稀疏索引，并记录来源、版本与生效范围。通过混合召回、父块恢复和 CrossEncoder 重排筛选证据。</p><p>动态组织 Prompt 与 Few-shot 示例，调用 ERNIE 4.5 Turbo 生成 SQL；结合 SQLGlot 语法树检查、参数绑定与只读权限约束执行。</p></div></details>
<details><summary>服务编排与回答溯源</summary><div class="detail"><p>基于 FastAPI 串联口径检索、SQL 生成、MySQL 查询和指标计算，固定请求的数据版本。将计算值、口径证据与必要会话历史组织为回答，并引用来源；遇到口径冲突、信息缺失或无数据时，明确澄清或提示。</p></div></details>
<details><summary>如何评估结果</summary><div class="detail"><p>构建 100 条以上经营问答评测集，结合混合召回、重排及提示词优化，RAGAS 上下文召回率达到 0.94，回答忠实度达到 0.96。通过人工 SQL 对账，在口径明确的查数题中验证数值准确率达到 97%，并覆盖缺失数据、零基期等异常场景。</p><p class="stack">这些指标来自项目评测集，不代表所有开放式经营问题的表现。</p></div></details><p class="stack" style="margin-top:18px">BGE-M3 · Milvus · ERNIE 4.5 Turbo · SQLGlot · FastAPI · MySQL</p></article>
<article class="story"><p class="eyebrow">2025.08 — 2025.10 · 项目主要成员</p><h2>产品波士顿矩阵与投流效率优化</h2><p>同一个店铺里，不同商品的投放效率差异很大。我参与对 1,000 多个 SKU 进行分层，把销售贡献、增长、投产和退货表现结合起来，帮助运营判断哪些款该减投，哪些款值得继续验证。</p>
<div class="result-line"><strong>2.2 → 2.6</strong> 部分商品 ROI<br><strong>−8 个百分点</strong> 低效商品投流消耗占比 <span>·</span> <strong>+6%</strong> 净销售额</div>
<p class="stack">以上为项目调整后的观察结果，由团队协作推动。</p>
<h3>分层只是起点，调整需要验证</h3><p>对同品类、相近上市阶段的商品，用近 28 天净销售额占比和近 14 天对前 14 天的销售增长率划分四象限，以组内中位数区分高低。结合投产与库存筛选增投对象，避免只凭增长率做决定。</p>
<details><summary>如何排查低效商品</summary><div class="detail"><p>重点检查低贡献、低增长且投产排名末端 10% 的在投款，排除断码与促销扰动。将曝光不少于 3,000 次且点击率低于同组 20%、点击不少于 100 次且支付转化率低于同组 20%、退货率高于同组 5 个百分点作为排查信号，沿漏斗定位素材、转化和退货问题。</p></div></details>
<details><summary>如何调整并复盘</summary><div class="detail"><p>与运营共同开展主图测试、人群及优惠展示调整，观察 7—14 天。持续低效款降投 20%，向投产达标且库存充足的明星款、潜力款增配 10%—20% 预算，按周结合净销售额与投产决定继续增投或回调。</p><p>使用 Python 汇总 SQL 结果与 Excel 复盘表，校验指标、标记异常，再调用 Qwen-Plus API 生成分层、诊断、建议与效果复盘报告，经人工核对后用于周度复盘。</p></div></details><p class="stack" style="margin-top:18px">SQL · Python · Excel · BCG 矩阵 · Qwen-Plus</p></article>`;
const contentStyle=document.createElement('style');contentStyle.textContent='.story{padding:30px 0;border-bottom:1px solid var(--line)}.story:last-child{border:0}.story h2{font-size:23px;line-height:1.5;margin:8px 0}.story h3{font-size:16px;color:var(--strong);font-weight:550;margin:25px 0 10px}.story p{margin-bottom:16px}.eyebrow,.role{font-size:13px;color:var(--muted)}.eyebrow{letter-spacing:.03em}.result-line{border-left:2px solid var(--line);padding:8px 0 8px 18px;margin:24px 0;font-size:14px;line-height:2.1}.result-line strong{color:var(--strong);font-size:18px;font-weight:550}.result-line span{margin:0 8px;color:var(--muted)}strong{font-weight:550;color:var(--strong)}';document.head.append(contentStyle);

// Reorganize the existing experience nodes without changing their text.
const experiencePage=document.querySelector('#experience');
const timelineStories=Array.from(experiencePage.querySelectorAll(':scope > .story'));
const timelines=['实习经历','教育经历'].map(label=>{
  const heading=document.createElement('h2');
  heading.className='timeline-group-heading';
  heading.textContent=label;
  const timeline=document.createElement('div');
  timeline.className='timeline';
  experiencePage.append(heading,timeline);
  return timeline;
});
timelineStories.forEach((story,index)=>{
  const entry=document.createElement('div');
  entry.className='timeline-entry';
  const marker=document.createElement('div');
  marker.className='timeline-marker';
  marker.setAttribute('aria-hidden','true');
  const date=story.querySelector(':scope > .eyebrow');
  if(date){date.classList.add('timeline-date');entry.append(date);}
  else{entry.classList.add('timeline-education');}
  entry.append(marker,story);
  timelines[index<2?0:1].append(entry);
});
const timelineStyle=document.createElement('style');
timelineStyle.textContent=`
#experience{--axis:#78a99a}
#experience .timeline-group-heading{font-size:19px;font-weight:550;color:var(--strong);margin:38px 0 24px}
#experience .timeline{position:relative;margin:32px 0 40px 8px;padding:0 0 0 34px;border:0}
#experience .timeline:before{content:'';position:absolute;left:0;top:12px;bottom:20px;width:2px;background:linear-gradient(to bottom,var(--axis),var(--line))}
#experience .timeline-entry{display:block;position:relative;padding:0 0 42px}
#experience .timeline-marker{position:absolute;left:-40px;top:7px;width:14px;height:14px;border:2px solid var(--axis);border-radius:50%;background:var(--bg);box-shadow:0 0 0 5px var(--bg);z-index:1}
#experience .timeline-entry:first-child .timeline-marker{background:var(--axis)}
#experience .timeline-date{font-size:13px;letter-spacing:.05em;color:var(--muted);margin:0 0 16px;padding:0;line-height:24px}
#experience .timeline-entry>.story{padding:23px 26px 19px;border:1px solid var(--line);border-radius:10px;background:var(--bg);min-width:0}
#experience .timeline-entry>.story h2{font-size:21px;margin:0 0 8px;line-height:1.6}
#experience .timeline-entry>.story p{font-size:15px;line-height:1.9;margin-bottom:16px}
#experience .timeline-entry>.story .role{color:var(--muted);font-size:13px}
#experience .timeline-entry:last-child{padding-bottom:0}
#experience .timeline-education>.story h2{font-size:20px}
@media(max-width:640px){
#experience .timeline{margin-left:4px;padding-left:24px}
#experience .timeline-marker{left:-30px}
#experience .timeline-entry>.story{padding:18px 17px 14px}
#experience .timeline-entry>.story h2{font-size:18px}
#experience .timeline-entry>.story p{font-size:14px}
#experience .timeline-date{font-size:12px}
}
`;
document.head.append(timelineStyle);

// Collapse each complete project, keeping a concise overview visible.
const projectOverviews=[
  {description:'用自然语言查询经营指标，同时解释统计口径与数据来源。',path:'M4 5h16v11H9l-5 4V5Zm4 4h8m-8 3h5'},
  {description:'结合商品分层与投放诊断，支持预算调整和周度运营复盘。',path:'M4 3v17h17M8 16v-4m5 4V8m5 8V5'}
];
document.querySelectorAll('#projects > .story').forEach((article,index)=>{
  const overview=projectOverviews[index];
  if(!overview)return;
  const title=article.querySelector('h2');
  const disclosure=document.createElement('details');
  disclosure.className='project-disclosure';
  const summary=document.createElement('summary');
  summary.className='project-overview';
  const artwork=document.createElement('span');
  artwork.className='project-icon';
  artwork.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+overview.path+'"/></svg>';
  const text=document.createElement('span');
  text.className='project-overview-text';
  const name=document.createElement('span');
  name.className='project-name';
  name.textContent=title.textContent;
  const description=document.createElement('span');
  description.className='project-description';
  description.textContent=overview.description;
  text.append(name,description);
  summary.append(artwork,text);
  disclosure.append(summary);
  article.replaceWith(disclosure);
  disclosure.append(article);
  title.remove();
});
const projectStyle=document.createElement('style');
projectStyle.textContent=`
#projects>.project-disclosure{padding:0;border-bottom:1px solid var(--line)}
#projects .project-overview{display:flex;align-items:flex-start;gap:17px;padding:25px 0;list-style:none;cursor:pointer}
#projects .project-overview:after{content:'+';font-size:20px;line-height:30px;flex-shrink:0;margin-left:auto;color:var(--muted)}
#projects .project-disclosure[open]>.project-overview:after{content:'−'}
.project-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:42px;height:42px;background:var(--hover);color:var(--text);border-radius:9px;margin-top:2px}
.project-icon svg{width:24px;height:24px}
.project-overview-text{display:block;min-width:0}
.project-name{display:block;font-size:19px;font-weight:550;line-height:1.6;color:var(--strong)}
.project-description{display:block;font-size:14px;line-height:1.9;color:var(--muted);margin-top:6px}
#projects .project-disclosure>.story{padding:0 0 25px 59px;border:0}
#projects .project-overview:hover .project-name{color:var(--text)}
@media(max-width:640px){#projects .project-overview{gap:12px}.project-name{font-size:17px}.project-icon{width:34px;height:34px}.project-icon svg{width:21px;height:21px}#projects .project-disclosure>.story{padding-left:0}}
`;
document.head.append(projectStyle);
