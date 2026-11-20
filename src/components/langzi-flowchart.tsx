import { cn } from '@/lib/utils';

type FlowStep = { label: string; highlight?: boolean };

const dataSteps: FlowStep[] = [
  { label: 'SQL整合' },
  { label: '交易/投放/退款/库存' },
  { label: 'Excel核对汇总', highlight: true },
  { label: '贡献-增长矩阵' },
  { label: '四象限分层', highlight: true },
];

const diagnosisTracks: { name: string; steps: FlowStep[] }[] = [
  {
    name: '低效款',
    steps: [
      { label: '投产/趋势复核' },
      { label: '漏斗诊断', highlight: true },
      { label: '点击-加购-支付-退货' },
      { label: '小范围优化' },
      { label: '改善?', highlight: true },
    ],
  },
  {
    name: '优化决策',
    steps: [{ label: '保留观察' }, { label: '降投/停投', highlight: true }, { label: '释放预算' }],
  },
  {
    name: '优质款',
    steps: [{ label: '投产+库存检查' }, { label: '小步增投', highlight: true }, { label: '观察边际产出' }],
  },
];

const reviewSteps: FlowStep[] = [
  { label: '周度效果复盘' },
  { label: 'Python+大模型API', highlight: true },
  { label: '人工复核' },
  { label: '更新下周清单', highlight: true },
];

function StepBox({ label, highlight }: FlowStep) {
  return (
    <span
      className={cn(
        'mono inline-flex items-center whitespace-nowrap border px-2 py-1 text-[11px] leading-tight transition-colors',
        highlight
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border bg-background text-muted-foreground',
      )}
    >
      {label}
    </span>
  );
}

function Arrow() {
  return <span className="mx-0.5 select-none text-muted-foreground/40">→</span>;
}

export function LangziFlowchart() {
  return (
    <div className="mt-5 overflow-x-auto border border-border bg-muted/20 p-4">
      {/* 数据准备与分层 */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            数据准备与分层
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-y-1 pl-4">
          {dataSteps.map((step, idx) => (
            <span key={step.label} className="flex items-center">
              <StepBox {...step} />
              {idx < dataSteps.length - 1 && <Arrow />}
            </span>
          ))}
        </div>
      </div>

      {/* 阶段衔接 */}
      <div className="my-2 flex items-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <span className="mono text-[10px] text-muted-foreground/50">↓ 诊断与优化 ↓</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* 诊断与优化 */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            诊断与优化
          </span>
        </div>
        <div className="space-y-1.5 pl-4">
          {diagnosisTracks.map((track) => (
            <div key={track.name} className="flex flex-wrap items-center gap-y-1">
              <span className="mr-1 w-14 shrink-0 text-[11px] text-muted-foreground/70">{track.name}</span>
              <div className="flex flex-wrap items-center">
                {track.steps.map((step, idx) => (
                  <span key={step.label} className="flex items-center">
                    <StepBox {...step} />
                    {idx < track.steps.length - 1 && <Arrow />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 阶段衔接 */}
      <div className="my-2 flex items-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <span className="mono text-[10px] text-muted-foreground/50">↓ 复盘闭环 ↓</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* 复盘闭环 */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            复盘闭环
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-y-1 pl-4">
          {reviewSteps.map((step, idx) => (
            <span key={step.label} className="flex items-center">
              <StepBox {...step} />
              {idx < reviewSteps.length - 1 && <Arrow />}
            </span>
          ))}
          <span className="mono ml-1 text-[11px] text-muted-foreground/40">↺ 循环</span>
        </div>
      </div>
    </div>
  );
}
