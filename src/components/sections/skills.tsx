import { skillCategories } from '@/data/resume';
import type { SkillLevel } from '@/data/resume';
import { SectionHeading } from '@/components/section-heading';

const LEVEL_STYLE: Record<SkillLevel, string> = {
  '精通': 'bg-primary text-white border-primary',
  '熟练': 'border-primary/40 text-foreground bg-transparent',
  '掌握': 'border-border text-muted-foreground bg-transparent',
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <SectionHeading num="02" title="技能" label="STACK" />

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <p className="mono mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`mono inline-flex items-center gap-1 rounded-sm border px-2 py-1 text-xs ${LEVEL_STYLE[skill.level]}`}
                  >
                    {skill.name}
                    <span className="text-[10px] opacity-60">{skill.level}</span>
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
