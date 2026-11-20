import { cn } from '@/lib/utils';

type FlowStep = { label: string; highlight?: boolean };

const offlineTracks: { name: string; steps: FlowStep[] }[] = [
  {
    name: '数据接入',
    steps: [{ label: '经营Excel' }, { label: '清洗/对账' }, { label: 'MySQL入库', highlight: true }],
  },
  {
    name: '知识准备',
    steps: [{ label: '口径文档' }, { label: '父子分块' }, { label: 'BGE-M3编码' }, { label: 'Milvus索引', highlight: true }],
  },
  {
    name: '规则确认',
    steps: [{ label: '字段+口径核对' }, { label: '确认规则R', highlight: true }],
  },
];

const onlineSteps: FlowStep[] = [
  { label: '用户提问' },
  { label: '向量检索' },
  { label: '恢复父文+重排' },
  { label: 'LLM生成SQL', highlight: true },
  { label: '门禁校验' },
  { label: 'MySQL执行' },
  { label: '结果+口径解释', highlight: true },
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

export function RagFlowchart() {
  return (
    <div className="mt-5 overflow-x-auto border border-border bg-muted/20 p-4">
      {/* 离线准备 */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            离线准备
          </span>
        </div>
        <div className="space-y-1.5 pl-4">
          {offlineTracks.map((track) => (
            <div key={track.name} className="flex flex-wrap items-center gap-y-1">
              <span className="mr-1 w-16 shrink-0 text-[11px] text-muted-foreground/70">{track.name}</span>
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
        <span className="mono text-[10px] text-muted-foreground/50">↓ 在线问答 ↓</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* 在线问答 */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            在线问答
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-y-1 pl-4">
          {onlineSteps.map((step, idx) => (
            <span key={step.label} className="flex items-center">
              <StepBox {...step} />
              {idx < onlineSteps.length - 1 && <Arrow />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
