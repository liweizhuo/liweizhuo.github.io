interface SectionHeadingProps {
  num: string;
  title: string;
  label?: string;
}

export function SectionHeading({ num, title, label }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3 border-b border-border pb-3">
        <span className="mono text-sm text-primary">{num}</span>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {label && (
          <span className="mono ml-auto text-xs uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
