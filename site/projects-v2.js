document.querySelectorAll('#experience .story h2').forEach(heading=>{
  const companyLogos={'百度智能云':'assets/baidu-logo.png','朗姿股份':'assets/lancy-logo.png'};
  const source=companyLogos[heading.textContent];
  if(source){
    const logo=document.createElement('img');
    logo.className='company-logo';logo.src=source;logo.alt='';
    heading.classList.add('company-heading');heading.append(logo);
  }
  if(!heading.textContent.includes('（211）'))return;
  heading.textContent=heading.textContent.replace('（211）','');
  const badge=document.createElement('span');
  badge.className='school-badge';
  badge.textContent='211';
  heading.append(badge);
});
const photoMount=document.createElement('figure');
photoMount.className='album-photo';
photoMount.setAttribute('aria-label','个人照片预留位置');
photoMount.innerHTML='<span class="album-tape" aria-hidden="true"></span><div class="album-image"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="9" cy="9" r="2"/><path d="m3 17 5-5 4 4 4-6 5 7"/></svg><span>照片留在这里</span></div><figcaption>Li Weizhuo <span>·</span> 一帧日常</figcaption>';
document.querySelector('.home-only').prepend(photoMount);
const photoStyle=document.createElement('style');
photoStyle.textContent=`
.home-only{position:relative}
.album-photo{position:absolute;left:calc(100% + 65px);top:24px;width:190px;margin:0;padding:11px 11px 18px;background:#eee9de;transform:rotate(4deg);box-shadow:2px 3px 5px #0002,9px 14px 26px #0003;color:#777065}
.album-photo:after{content:'';position:absolute;inset:0;pointer-events:none;opacity:.2;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%237c7261' filter='url(%23n)' opacity='.3' d='M0 0h160v160H0z'/%3E%3C/svg%3E")}
.album-image{aspect-ratio:3/4;background:#d4d0c5;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;box-shadow:inset 0 0 12px #68604f12;color:#8c877b}
.album-image span{font-size:11px;letter-spacing:.12em}
.album-photo figcaption{font-family:Georgia,'Microsoft YaHei',serif;font-size:12px;text-align:center;margin-top:13px;line-height:1.7;letter-spacing:.04em}
.album-photo figcaption span{margin:0 4px;color:#aaa293}
.album-tape{position:absolute;z-index:2;left:55px;top:-13px;width:77px;height:28px;transform:rotate(-9deg);background:#cfbfa380;border-left:1px dashed #fff5;border-right:1px dashed #fff5;box-shadow:0 1px 2px #0001}
@media(max-width:1190px){.album-photo{position:relative;left:auto;top:auto;float:right;margin:4px 4px 22px 32px;width:160px}.home-only:after{content:'';display:block;clear:both}}
@media(max-width:640px){.album-photo{width:126px;margin:4px 0 20px 20px;padding:8px 8px 13px;transform:rotate(3deg)}.album-tape{left:30px;width:62px;height:23px;top:-10px}.album-photo figcaption{font-size:10px;margin-top:10px}.album-image span{font-size:10px;letter-spacing:0}.album-image svg{width:24px;height:24px}}
`;
document.head.append(photoStyle);
const schoolStyle=document.createElement('style');
schoolStyle.textContent='.company-heading{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.company-logo{display:block;width:86px;height:30px;object-fit:contain;background:#fff;padding:5px 7px;border-radius:4px}.school-badge{display:inline-block;vertical-align:middle;margin-left:10px;padding:1px 7px;border:1px solid var(--line);border-radius:4px;color:var(--muted);font-size:11px;font-weight:400;line-height:1.6;letter-spacing:.04em}';
document.head.append(schoolStyle);
// Keep email addresses visible without opening a mail client.
document.querySelectorAll('a[href^="mailto:"]').forEach(link=>{
  const text=document.createElement('span');
  text.className=link.className;
  text.replaceChildren(...link.childNodes);
  link.replaceWith(text);
});
document.querySelector('.intro').innerHTML=`
<p>你好，我是李韦卓，关注经营分析与 AI 应用。</p>
<p>目前在天津医科大学攻读生物信息与计算生物学硕士。曾在 <a class="inline" href="#experience">百度智能云</a> 担任数据 BP 实习生，也在 <a class="inline" href="#experience">朗姿股份</a> 参与电商数据运营。</p>
<p>我喜欢沿着业务问题理解数据：指标为什么变化，预算该投向哪里，分析结果又能支持什么行动。在实践中，我用 SQL、Python 和 BI 工具做经营跟踪，也探索用大模型简化查数与报告交付。</p>
<p>这里记录了我的 <a class="inline" href="#projects">项目实践</a> 与 <a class="inline" href="#experience">学习、工作经历</a>。比起单独展示一个数字，我更希望讲清它的依据、分析过程，以及带来的实际改变。</p>
<p>目前正在寻找数据分析 / AI 应用开发相关机会，欢迎交流。</p>`;
const homeIntro=document.querySelector('.intro');
const introLayout=document.createElement('div');
introLayout.className='intro-layout';
homeIntro.replaceWith(introLayout);
introLayout.append(homeIntro,photoMount);
const homeLayoutStyle=document.createElement('style');
homeLayoutStyle.textContent=`
.intro-layout{display:grid;grid-template-columns:minmax(0,1fr) 154px;gap:30px;align-items:start}
.intro-layout .intro{font-size:15px;line-height:1.95}
.intro-layout .intro p{margin:0 0 17px}
.intro-layout .intro p:first-child{font-size:18px;line-height:1.7;color:var(--strong);margin-bottom:18px;font-weight:500}
.intro-layout .intro p:last-child{margin-bottom:0;color:var(--muted);font-size:14px}
.intro-layout .album-photo{position:relative;left:auto;top:auto;float:none;width:154px;margin:8px 0 0;padding:9px 9px 15px;transform:rotate(3deg)}
.intro-layout .album-photo figcaption{font-size:11px;margin-top:11px}
.intro-layout .album-tape{left:39px;width:68px;height:25px;top:-11px}
.home-only>h1{margin-bottom:26px}
.home-only>hr{margin:28px 0}
@media(max-width:640px){.intro-layout{display:block}.intro-layout .intro{font-size:15px}.intro-layout .album-photo{float:right;width:118px;margin:4px 0 18px 22px;padding:7px 7px 12px}.intro-layout .album-photo figcaption{font-size:10px}.intro-layout .album-tape{left:25px;width:58px}.intro-layout .intro p:first-child{font-size:17px}.intro-layout:after{content:'';display:block;clear:both}}
`;
document.head.append(homeLayoutStyle);
introLayout.append(photoMount);
photoMount.querySelector('figcaption')?.remove();
const belowPhotoStyle=document.createElement('style');
belowPhotoStyle.textContent=`
.intro-layout{display:block}
.intro-layout .album-photo{position:relative;float:none;width:180px;margin:30px 0 8px 4px;padding:7px;transform:rotate(-2deg)}
.intro-layout .album-image{aspect-ratio:3/4}
.intro-layout .album-tape{left:54px;top:-11px;width:68px;height:24px}
@media(max-width:640px){.intro-layout .album-photo{float:none;width:160px;margin:28px 0 8px 4px;padding:6px}.intro-layout .album-tape{left:44px}}
`;
document.head.append(belowPhotoStyle);
photoMount.querySelector('.album-tape')?.remove();
const cleanPhotoStyle=document.createElement('style');
cleanPhotoStyle.textContent=`
.intro-layout .album-photo{width:300px;max-width:100%;margin:26px 0 8px;padding:0;transform:none;background:transparent;box-shadow:none;border-radius:8px;overflow:hidden}
.intro-layout .album-photo:after{display:none}
.intro-layout .album-image{aspect-ratio:4/3;background:var(--hover);color:var(--muted);box-shadow:none;border-radius:8px;gap:10px}
.intro-layout .album-image img{display:block;width:100%;height:100%;object-fit:cover}
.intro-layout .album-image span{font-size:12px;letter-spacing:.04em}
@media(max-width:640px){.intro-layout .album-photo{width:280px;max-width:100%;margin:24px 0 8px;padding:0;float:none}}
`;
document.head.append(cleanPhotoStyle);
photoMount.remove();
document.querySelector('#projects').innerHTML=`
<h1 id="projects-title">项目</h1><p>经营数据问答与商品投放分析，两项从业务问题出发的实践。</p>
<details class="case"><summary><span class="case-icon" aria-hidden="true">⌘</span><span><span class="case-title">经营分析与指标问答 RAG 系统</span><span class="case-description">让业务人员用自然语言查经营数据，并核对指标口径与来源。</span><span class="case-preview">项目负责人 · RAG + Text-to-SQL</span></span></summary>
<div class="case-body"><p class="case-meta">2026.05 — 2026.08 · 项目负责人</p>
<section><h2>把“查口径”和“查数据”放进同一次问答</h2><p>经营人员查询新签、营收、回款时，需要在多个看板、数据表和口径文档之间切换。我设计了一个融合 RAG 与 Text-to-SQL 的问答系统：用户提出问题，系统检索适用口径、生成并执行只读 SQL，再返回数值、周期变化和来源依据。</p></section>
<section><h2>关键设计：先明确口径，再查询数据</h2><ol class="case-steps"><li><strong>让口径与字段对应。</strong>整理指标定义、时间归属、金额单位及计入、排除条件，与数据库字段建立映射，并记录来源、版本和生效范围。检索不能只找到相似文字，还要确认它适用于当前问题。</li><li><strong>用证据约束 SQL。</strong>将检索到的口径、Schema 和表关联关系组织为模型输入；生成查询后，执行语法树检查与参数绑定，并以只读权限约束数据库访问。</li><li><strong>让结果有依据，异常有交代。</strong>在同一请求中固定数据版本，组织查询结果、计算值和口径证据。回答引用来源；口径冲突、信息不足或无数据时，明确澄清或提示。</li></ol></section>
<section><h2>验证：分别检查检索、回答与数值</h2><p>构建 100 条以上经营问答评测集，覆盖常规查数、缺失数据、零基期等场景。用 RAGAS 评估检索与回答质量，再通过人工 SQL 对账核验数值。</p><div class="case-metrics"><div><strong>0.94</strong><span>上下文召回率</span></div><div><strong>0.96</strong><span>回答忠实度</span></div><div><strong>97%</strong><span>明确口径查数题数值准确率</span></div></div><p class="case-note">上述结果来自项目评测集；97% 不代表所有开放式经营问题的准确率。</p></section>
<details class="case-technical"><summary>实现链路</summary><div><p><strong>知识准备：</strong>父子分块保留指标定义与例外条件，BGE-M3 编码，Milvus 建立稠密与稀疏索引。</p><p><strong>口径检索：</strong>混合召回 → 父块恢复 → CrossEncoder 重排 → 适用性核对。</p><p><strong>查询与回答：</strong>证据与 Schema 动态注入 Prompt，结合 Few-shot 示例调用 ERNIE 4.5 Turbo；SQLGlot 检查后执行查询。FastAPI 串联检索、MySQL 查数、指标计算和来源引用。</p></div></details>
</div></details>
<details class="case"><summary><span class="case-icon" aria-hidden="true">▥</span><span><span class="case-title">商品分层与投流效率优化</span><span class="case-description">识别低效商品，把预算逐步转向投产达标、库存充足的款式。</span><span class="case-preview">项目主要成员 · 1,000+ SKU 分层与诊断</span></span></summary>
<div class="case-body"><p class="case-meta">2025.08 — 2025.10 · 项目主要成员</p>
<section><h2>让投放预算跟着商品表现调整</h2><p>部分商品销售贡献与增长偏低，却仍持续消耗推广预算。我参与对 1,000 多个 SKU 进行分层，结合转化漏斗诊断原因，与运营共同验证调整方案，形成“筛选—诊断—调整—复盘”的分析流程。</p></section>
<section><h2>分析如何转化成投放动作</h2><ol class="case-steps"><li><strong>先筛出值得检查的商品。</strong>在同品类、相近上市阶段内，按净销售额贡献与销售增长划分 BCG 四象限。优先检查低贡献、低增长且投产靠后的在投款，不直接把分层结果当成淘汰结论。</li><li><strong>再判断钱花在了哪里。</strong>沿曝光、点击、支付和退货定位问题，排除断码与促销干扰，区分素材吸引力、购买转化及退货问题，形成可执行的排查建议。</li><li><strong>小步调整，用后续表现复核。</strong>联合运营测试主图、人群和优惠展示，观察 7—14 天。持续低效款降投 20%，向投产达标且库存充足的明星款、潜力款增配 10%—20%，每周结合净销售额与投产决定继续或回调。</li></ol></section>
<section><h2>调整后的表现</h2><div class="case-metrics"><div><strong>2.2 → 2.6</strong><span>部分商品 ROI</span></div><div><strong>−8 个百分点</strong><span>低效商品投流消耗占比</span></div><div><strong>+6%</strong><span>净销售额</span></div></div><p class="case-note">以上为团队协作调整后的项目观察结果。</p></section>
<section><h2>把这套分析留在每周复盘中</h2><p>使用 Python 汇总 SQL 结果和 Excel 复盘表，校验指标并标记异常，再调用 Qwen-Plus 生成商品分层、问题诊断、投放建议和效果复盘报告，经人工核对后用于周度运营复盘。</p></section>
<details class="case-technical"><summary>分层口径与诊断阈值</summary><div><p><strong>四象限：</strong>近 28 天净销售额占比 × 近 14 天较前 14 天的销售增长率，以组内中位数区分高低。</p><p><strong>低效候选：</strong>低贡献、低增长，且投产排名末端 10% 的在投款。</p><p><strong>排查信号：</strong>曝光 ≥3,000 次且点击率低于同组 20%；点击 ≥100 次且支付转化率低于同组 20%；退货率高于同组 5 个百分点。这些信号用于定位问题，需结合库存和促销背景判断。</p></div></details>
</div></details>`;
document.querySelector('#projects').insertAdjacentHTML('beforeend',`
<details class="case"><summary><span class="case-icon" aria-hidden="true">⚙</span><span><span class="case-title">经营数据自动化 Skill</span><span class="case-description">基于百度 Dodo，将跨页面取数、周度对比与驾驶舱生成串成可复用的生产流程。</span><span class="case-preview">项目负责人 · 已投入生产使用 · 单次整理约 4 小时 → 10 分钟</span></span></summary>
<div class="case-body"><p class="case-meta">2026.05 — 2026.06 · 项目负责人</p>
<section><h2>把每周重复的数据整理，变成可执行的流程</h2><p>经营汇报需要跨多个页面查找数据，再手动复制、计算和排版。页面之间的组织层级容易混淆，统计口径也难以保持一致。我基于百度 Dodo 构建经营数据自动化 Skill，将权限检查、看板取数、周度对比、异常检查和 HTML 驾驶舱生成串联起来，并投入生产使用。</p></section>
<section><h2>关键设计：先约定规则，再执行取数</h2><ol class="case-steps"><li><strong>把取数范围说清楚。</strong>将页面来源、组织层级、指标字段、时间范围及权限边界沉淀为可复用的执行约束，只在授权范围内提取多页面数据。</li><li><strong>让比较发生在同一口径下。</strong>完善字段与组织层级映射，统一周度对比规则，计算同口径差值，并按层级组织明细，减少范围偏差和层级识别错误。</li><li><strong>让输出可检查、可用于汇报。</strong>统一展示配色与输出规则，对异常数据做标记；通过关键数据抽查和发布前人工复核，检查驾驶舱后再用于经营汇报。</li></ol></section>
<section><h2>生产使用与效率变化</h2><div class="case-metrics"><div><strong>4 小时 → 10 分钟</strong><span>单次经营数据整理耗时，约值</span></div><div><strong>约 96%</strong><span>耗时降低</span></div></div><p>流程替代了重复查找、复制、计算和排版操作，形成可持续复用的周度经营数据工作流。人工检查仍保留在关键数据抽查和发布前复核环节。</p><p class="case-note">效率结果对应本项目的经营数据整理流程；生产使用不等于取消人工复核。</p></section>
<details class="case-technical"><summary>执行流程</summary><div><p><strong>范围确认：</strong>检查权限，明确页面来源、组织层级、指标字段与时间范围。</p><p><strong>取数与计算：</strong>提取多页面数据，按字段和组织映射对齐，计算同口径周度差值。</p><p><strong>检查与交付：</strong>标记异常，生成分层展示的 HTML 驾驶舱，经关键数据抽查与发布前人工复核后用于经营汇报。</p></div></details>
</div></details>`);
document.querySelector('#projects').insertAdjacentHTML('beforeend',`
<details class="case"><summary><span class="case-icon" aria-hidden="true">◎</span><span><span class="case-title">用户价值分层与兴趣标签</span><span class="case-description">结合消费价值、活跃行为和商品偏好，支持差异化人群运营。</span><span class="case-preview">RFM 特征扩展 · K-means · KNN 兴趣预测</span></span></summary>
<div class="case-body">
<section><h2>从统一推广，走向更有针对性的人群运营</h2><p>公司全网账号粉丝超过 200 万，天猫店铺粉丝超过 60 万。面对消费习惯、活跃程度和商品偏好不同的用户，需要更清楚地识别哪些人值得重点维护、哪些人可能流失，以及不同人群对什么商品感兴趣。</p><p>我围绕用户价值与商品兴趣两个维度构建分层模型，将分散的交易和行为信息整理为可用于定向推广、用户维护与召回的人群标签。</p></section>
<section><h2>建模思路：先识别价值，再补充兴趣</h2><ol class="case-steps"><li><strong>扩展用户价值特征。</strong>以 RFM 的最近消费时间、消费频次和消费金额为基础，补充直播观看频次、加购率等行为特征及地域信息，并进行权重设计，让用户评估更贴近实际运营场景。</li><li><strong>将群体差异转为运营分层。</strong>结合消费行为与活跃度，使用 K-means 聚类；根据各群体的特征解释并命名为高价值活跃用户、忠实用户、价格敏感型用户及潜在流失风险用户，为差异化运营提供依据。</li><li><strong>用商品偏好完善画像。</strong>使用 Pandas 整理订单和点击、浏览、加购等行为日志，构建用户—商品偏好矩阵，通过 KNN 预测潜在兴趣，补充各类用户的商品偏好标签。</li></ol></section>
<section><h2>运营应用与观察结果</h2><div class="case-metrics"><div><strong>10%</strong><span>筛选出的高价值用户占比</span></div><div><strong>+4 个百分点</strong><span>精准运营推广后的用户转化率变化</span></div></div><p>将高价值用户识别结果用于精准运营推广，以人群价值和商品偏好支持更有针对性的触达。项目观察到，推广后用户转化率提升 4 个百分点。</p><p class="case-note">粉丝规模为业务背景，不代表模型样本量；转化率变化为运营应用结果，不单独归因于聚类模型。</p></section>
<details class="case-technical"><summary>数据与方法</summary><div><p><strong>输入：</strong>订单数据与点击、浏览、加购等行为日志，结合直播观看频次、地域等特征。</p><p><strong>价值分层：</strong>扩展 RFM 特征与权重设计 → K-means 聚类 → 群体特征解读与运营标签命名。</p><p><strong>兴趣补充：</strong>Pandas 数据处理 → 用户—商品偏好矩阵 → KNN 潜在兴趣预测 → 用户标签完善。</p><p><strong>运营使用：</strong>以分层和兴趣标签支持定向推广、维护与召回，结合后续转化表现复盘。</p></div></details>
</div></details>`);
const experienceStories=Array.from(document.querySelectorAll('#experience .story'));
function addExperienceProject(company,match,title,id){
  const story=experienceStories.find(item=>item.querySelector('h2')?.textContent===company);
  if(!story)return;
  const paragraph=Array.from(story.querySelectorAll('p')).find(item=>item.textContent.includes(match));
  if(!paragraph)return;
  const row=document.createElement('p');row.className='experience-project-link';
  const link=document.createElement('a');link.className='inline';link.href='?project='+id+'#projects';link.textContent=title;
  row.append(link);paragraph.after(row);
}
experienceStories.forEach(story=>story.querySelectorAll('a[href="#projects"],a[href*="project=product"]').forEach(link=>link.remove()));
addExperienceProject('百度智能云','形成重点项目跟进建议','项目：经营分析与指标问答 RAG 系统','rag');
addExperienceProject('百度智能云','单次周报交付时间','项目：经营数据自动化 Skill','dodo-skill');
addExperienceProject('朗姿股份','将预算转向投产达标','项目：商品分层与投流效率优化','product');
addExperienceProject('朗姿股份','以 K-means','项目：用户价值分层与兴趣标签','user-segmentation');
const experienceLinkStyle=document.createElement('style');experienceLinkStyle.textContent='#experience .experience-project-link{font-size:13px;margin:8px 0 22px;line-height:1.8}';document.head.append(experienceLinkStyle);
const caseStyle=document.createElement('style');caseStyle.textContent=`
.case{padding:0;border-bottom:1px solid var(--line)}.case>summary{align-items:flex-start;gap:16px;padding:27px 0}.case>summary:after{font-size:20px;flex-shrink:0}.case-icon{display:flex;align-items:center;justify-content:center;background:var(--hover);border-radius:8px;width:38px;height:38px;flex-shrink:0;font-size:24px;color:var(--text)}.case-title{display:block;font-size:19px;font-weight:550;line-height:1.6}.case-description{display:block;font-size:14px;line-height:1.9;color:var(--text);margin-top:6px}.case-preview{display:block;font-size:12px;color:var(--muted);margin-top:8px}.case-body{padding:0 0 30px 54px}.case-meta,.case-note{font-size:12px;color:var(--muted)}.case-body section{margin:26px 0}.case-body h2{font-size:15px;margin-bottom:12px}.case-body p,.case-steps{font-size:15px;line-height:1.95}.case-steps{padding-left:20px;margin:0}.case-steps li{padding-left:4px;margin-bottom:14px}.case-metrics{display:flex;flex-wrap:wrap;gap:20px 28px;padding:18px 0}.case-metrics strong{display:block;font-size:22px;font-weight:550;color:var(--strong)}.case-metrics span{display:block;font-size:12px;color:var(--muted)}.case-technical{border:0;border-top:1px solid var(--line)}.case-technical summary{font-size:14px}.case-technical>div{padding-top:16px}@media(max-width:640px){.case-body{padding-left:0}.case-title{font-size:17px}.case>summary{gap:12px}.case-icon{width:30px;height:30px;font-size:20px}}
`;document.head.append(caseStyle);

const ragScreenshot=document.createElement('figure');
ragScreenshot.className='rag-screenshot';
ragScreenshot.innerHTML='<a href="assets/rag-interface.png" target="_blank" rel="noopener" aria-label="查看经营问答界面大图"><img src="assets/rag-interface.png" alt="经营智析智能问答界面，包含智能问答、生成周报、查业务规则导航与经营问题输入区" width="1116" height="694" loading="lazy"></a><figcaption>智能问答界面 · 支持经营规则与指标问题输入，展示来源依据。</figcaption>';
document.querySelector('#projects > .case .case-body > section').after(ragScreenshot);
const screenshotStyle=document.createElement('style');screenshotStyle.textContent='.rag-screenshot{margin:28px 0 34px}.rag-screenshot a{display:block;border:1px solid var(--line);border-radius:8px;overflow:hidden}.rag-screenshot img{display:block;width:100%;height:auto}.rag-screenshot figcaption{font-size:12px;color:var(--muted);line-height:1.8;margin-top:10px}';document.head.append(screenshotStyle);
const skillScreenshot=document.createElement('figure');
skillScreenshot.className='rag-screenshot';
skillScreenshot.innerHTML='<a href="assets/skill-weekly-report.png" target="_blank" rel="noopener" aria-label="查看 Skill 周报成果大图"><img src="assets/skill-weekly-report.png" alt="经营数据自动化 Skill 生成的周报驾驶舱，展示核心指标卡片及各团队经营达成明细，主体名称与业务数据均已脱敏和模拟化处理" width="1330" height="778" loading="lazy"></a><figcaption>Skill 周报成果 · 经营管理驾驶舱。主体名称与业务数据均已脱敏、模拟化处理，仅用于展示页面效果；模拟数据的比例与汇总不作为业务计算依据。</figcaption>';
document.querySelectorAll('#projects > .case')[2].querySelector('.case-body > section').after(skillScreenshot);
document.querySelectorAll('.rag-screenshot > a').forEach(link=>{
  const frame=document.createElement('div');
  frame.className='screenshot-frame';
  frame.append(...link.childNodes);
  link.replaceWith(frame);
});
const screenshotFrameStyle=document.createElement('style');
screenshotFrameStyle.textContent='.screenshot-frame{display:block;border:1px solid var(--line);border-radius:8px;overflow:hidden}';
document.head.append(screenshotFrameStyle);
const mapRoots=['口径驱动的经营问答','商品投放优化','规则驱动的经营自动化','用户价值与兴趣画像'];
document.querySelectorAll('#projects > .case').forEach((project,index)=>{
  const steps=project.querySelector('.case-steps');
  if(!steps)return;
  const map=document.createElement('div');
  map.className='project-map';
  map.setAttribute('role','group');
  map.setAttribute('aria-label',mapRoots[index]+'思维导图');
  const root=document.createElement('div');
  root.className='map-root';
  root.textContent=mapRoots[index];
  const branches=document.createElement('div');
  branches.className='map-branches';
  Array.from(steps.children).forEach(item=>{
    const branch=document.createElement('div');
    branch.className='map-branch';
    const node=document.createElement('div');
    node.className='map-node';
    const title=item.querySelector('strong');
    const heading=document.createElement('h3');
    heading.textContent=title.textContent.replace(/。$/,'');
    title.remove();
    const explanation=document.createElement('p');
    explanation.textContent=item.textContent;
    node.append(heading,explanation);
    branch.append(node);
    branches.append(branch);
  });
  map.append(root,branches);
  steps.replaceWith(map);
});
const implementation=document.querySelector('#projects > .case .case-technical > div');
if(implementation){
  const map=document.createElement('div');
  map.className='project-map implementation-map';
  map.setAttribute('role','group');
  map.setAttribute('aria-label','实现链路思维导图');
  const root=document.createElement('div');
  root.className='map-root';root.textContent='实现链路';
  const branches=document.createElement('div');branches.className='map-branches';
  Array.from(implementation.children).forEach(paragraph=>{
    const branch=document.createElement('div');branch.className='map-branch';
    const node=document.createElement('div');node.className='map-node';
    const label=paragraph.querySelector('strong');
    const heading=document.createElement('h3');heading.textContent=label.textContent.replace(/：$/,'');
    label.remove();
    node.append(heading,paragraph);branch.append(node);branches.append(branch);
  });
  map.append(branches);implementation.replaceChildren(map);
}
const mapStyle=document.createElement('style');mapStyle.textContent=`
.project-map{display:grid;grid-template-columns:124px minmax(0,1fr);align-items:center;margin:24px 0 30px;gap:30px}
.map-root{position:relative;padding:17px 12px;border:1px solid #78a99a66;background:#78a99a12;color:var(--strong);border-radius:8px;font-size:15px;font-weight:550;text-align:center;line-height:1.8}
.map-root:after{content:'';position:absolute;left:100%;top:50%;width:16px;height:1px;background:var(--line)}
.map-branches{position:relative;display:flex;flex-direction:column;gap:18px}
.map-branch{position:relative;padding-left:16px}
.map-branch:before{content:'';position:absolute;left:-14px;top:0;bottom:-18px;width:1px;background:var(--line)}
.map-branch:first-child:before{top:50%}.map-branch:last-child:before{bottom:50%}
.map-branch:after{content:'';position:absolute;left:-14px;top:50%;width:30px;height:1px;background:var(--line)}
.map-node{padding:16px 18px;border:1px solid var(--line);border-radius:8px;background:var(--hover)}
.implementation-map{display:block;padding-left:14px}
.implementation-map .map-branch:first-child:before{top:0}
.case-body .map-node h3{font-size:14px;line-height:1.7;color:var(--strong);font-weight:550;margin:0 0 8px}
.case-body .map-node p{font-size:13px;line-height:1.9;margin:0;color:var(--text)}
@media(max-width:640px){.project-map{display:block}.map-root{text-align:left;width:max-content;max-width:100%;margin-bottom:24px}.map-root:after{left:15px;top:100%;width:1px;height:24px}.map-branches{gap:14px}.map-branch{padding-left:30px}.map-branch:before{left:15px;bottom:-14px}.map-branch:first-child:before{top:0}.map-branch:after{left:15px;width:15px}.map-node{padding:14px 15px}}
`;document.head.append(mapStyle);
const caseEntries=Array.from(document.querySelectorAll('#projects > .case'));
// Display 1, 3, 2, 4 while preserving each project's stable URL and identity.
if(caseEntries.length===4){
  caseEntries[1].before(caseEntries[2]);
}
const projectIds=['rag','product','dodo-skill','user-segmentation'];
const requestedProject=new URLSearchParams(location.search).get('project');
caseEntries.forEach((entry,index)=>{
  const summary=entry.querySelector(':scope > summary');
  const link=document.createElement('a');
  link.className='case-page-link';
  link.href='?project='+projectIds[index]+'#projects';
  link.append(...summary.childNodes);
  const thumbnailSources={rag:'assets/rag-interface.png','dodo-skill':'assets/skill-weekly-report.png'};
  const thumbnailSource=thumbnailSources[projectIds[index]];
  if(thumbnailSource){
    const icon=link.querySelector('.case-icon');
    const thumbnail=document.createElement('img');
    thumbnail.className='project-thumbnail';
    thumbnail.src=thumbnailSource;
    thumbnail.alt=projectIds[index]==='rag'?'经营问答界面预览':'脱敏周报驾驶舱预览';
    thumbnail.width=128;thumbnail.height=80;thumbnail.loading='lazy';
    icon.replaceWith(thumbnail);
  }
  const overview=document.createElement('article');
  overview.className='case-list-item';
  overview.append(link);
  entry.before(overview);
  if(requestedProject===projectIds[index]){
    const title=link.querySelector('.case-title').textContent;
    document.title=title+' · 李韦卓';
    entry.open=true;
    entry.classList.add('case-detail-page');
    summary.hidden=true;
    const heading=document.querySelector('#projects-title');
    heading.textContent=title;
    const subtitle=heading.nextElementSibling;
    subtitle.textContent=link.querySelector('.case-description').textContent;
    entry.querySelectorAll('.case-technical').forEach(technical=>{
      const section=document.createElement('section');
      const h2=document.createElement('h2');
      h2.textContent=technical.querySelector('summary').textContent;
      section.append(h2,...technical.querySelector(':scope > div').childNodes);
      technical.replaceWith(section);
    });
  }else entry.hidden=true;
});
const projectListItems=Array.from(document.querySelectorAll('#projects > .case-list-item'));
[['AI 应用与自动化',0],['数据分析与运营优化',2]].forEach(([name,index])=>{
  const heading=document.createElement('h2');
  heading.className='project-group-title';heading.textContent=name;
  projectListItems[index]?.before(heading);
});
const groupStyle=document.createElement('style');
groupStyle.textContent='.project-group-title{font-size:15px;font-weight:550;color:var(--muted);margin:38px 0 4px;letter-spacing:.03em}.view-project-detail .project-group-title{display:none}';
document.head.append(groupStyle);
if(projectIds.includes(requestedProject)){
  document.body.classList.add('view-project-detail');
  if(location.hash!=='#projects')location.hash='projects';
  const returnLink=document.createElement('a');
  returnLink.className='inline project-return';
  returnLink.href='./#projects';
  returnLink.textContent='返回项目列表';
  document.querySelector('#projects').prepend(returnLink);
  document.querySelectorAll('header a[href^="#"]').forEach(link=>link.href='./'+link.getAttribute('href'));
  const backLink=document.querySelector('.back');backLink.href='./#projects';backLink.textContent='返回项目列表';
}
const pageStyle=document.createElement('style');pageStyle.textContent=`
.project-thumbnail{display:block;flex-shrink:0;width:128px;height:auto;aspect-ratio:1.65;object-fit:cover;object-position:top left;border:1px solid var(--line);border-radius:6px;margin-top:3px}
@media(max-width:640px){.project-thumbnail{width:88px;aspect-ratio:1.4}}
.case-list-item{border-bottom:1px solid var(--line)}.case-page-link{display:flex;align-items:flex-start;gap:16px;padding:27px 0;color:var(--strong);text-decoration:none}.case-page-link:hover .case-title{text-decoration:underline;text-underline-offset:5px}.case[hidden]{display:none!important}.view-project-detail .case-list-item{display:none}.case-detail-page{border:0;padding:0}.case-detail-page>summary{display:none!important}.case-detail-page .case-body{padding:0}.project-return{display:inline-block;font-size:13px;margin-bottom:24px}.view-project-detail #projects-title{font-size:29px;line-height:1.5}.view-project-detail .back{display:none!important}@media(max-width:640px){.case-page-link{gap:12px}.view-project-detail #projects-title{font-size:24px}}
`;document.head.append(pageStyle);




