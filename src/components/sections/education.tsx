'use client';

import { educations } from '@/data/resume';
import { SectionHeading } from '@/components/section-heading';
import { useEffect, useRef, useState } from 'react';

export function Education() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <SectionHeading num="01" title="教育背景" label="EDU" />

        {/* Timeline */}
        <div className="relative mt-2">
          {/* Animated vertical line — grows top to bottom */}
          <div
            className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20 transition-all duration-700 ease-out"
            style={{
              transform: visible ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
            }}
          />

          {educations.map((edu, i) => (
            <div
              key={i}
              className={`group relative pl-8 transition-all duration-500 ease-out ${
                visible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              } ${i < educations.length - 1 ? 'pb-9' : 'pb-0'}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              {/* Node — filled circle with pulsing ring */}
              <div
                className="absolute left-0 top-1.5 transition-all duration-400 ease-out"
                style={{
                  transform: visible ? 'scale(1)' : 'scale(0)',
                  transitionDelay: `${i * 200 + 400}ms`,
                }}
              >
                <div className="relative h-2.5 w-2.5">
                  <div className="h-full w-full rounded-full bg-primary" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20 [animation-duration:3s]" />
                </div>
              </div>

              {/* Content */}
              <div className="mono mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                {edu.period}
              </div>

              <h3 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                {edu.school}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{edu.degree}</p>

              {/* Highlights */}
              {edu.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {edu.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Core courses */}
              {edu.courses.length > 0 && (
                <div className="mt-3">
                  <p className="mono mb-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                    核心课程
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c, j) => (
                      <span
                        key={j}
                        className="mono border border-border px-2 py-0.5 text-xs text-foreground/70 transition-colors group-hover:border-primary/30"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
