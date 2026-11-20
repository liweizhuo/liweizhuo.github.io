import { projects } from '@/data/resume';
import { SectionHeading } from '@/components/section-heading';
import { RagFlowchart } from '@/components/rag-flowchart';
import { LangziFlowchart } from '@/components/langzi-flowchart';

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <SectionHeading num="04" title="项目作品" label="WORK" />

        <div className="space-y-0">
          {featured.map((project, i) => (
            <div
              key={project.name}
              className={`py-6 ${i > 0 ? 'border-t border-border' : ''}`}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="mono text-xs text-primary">{project.tagline}</span>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {project.period && (
                    <span className="mono text-xs text-muted-foreground">{project.period}</span>
                  )}
                  {project.role && (
                    <span className="mono border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      {project.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                      <p className="text-sm leading-relaxed text-foreground/80">
                        <span className="font-bold text-foreground">{item.summary}</span>
                        {' — '}
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Flowcharts */}
              {project.tagline.includes('RAG') && <RagFlowchart />}
              {project.tagline.includes('BCG') && <LangziFlowchart />}

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
