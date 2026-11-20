import { internships } from '@/data/resume';
import { SectionHeading } from '@/components/section-heading';

export function Internship() {
  return (
    <section id="internship" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <SectionHeading num="03" title="实习经历" label="EXP" />

        <div className="space-y-0">
          {internships.map((intern, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 gap-4 py-6 md:grid-cols-[180px_1fr] ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              {/* Left: period */}
              <div>
                <p className="mono text-xs uppercase tracking-wider text-muted-foreground">
                  {intern.period}
                </p>
              </div>

              {/* Right: content */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {intern.company}
                  </h3>
                  <span className="text-primary">·</span>
                  <p className="text-sm font-medium text-muted-foreground">
                    {intern.role}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-foreground/70">
                  {intern.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {intern.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                      <p className="text-sm leading-relaxed text-foreground/80">
                        <span className="font-bold text-foreground">{h.summary}</span>
                        {' — '}
                        {h.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
