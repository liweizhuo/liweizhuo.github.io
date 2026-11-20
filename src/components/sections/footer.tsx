import { profile } from '@/data/resume';

export function Footer() {
  return (
    <footer className="border-b-0">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-5 py-8 sm:flex-row sm:items-center">
        <p className="text-sm font-bold text-foreground">
          {profile.name}
          <span className="ml-2 font-normal text-muted-foreground">/ {profile.title}</span>
        </p>
        <p className="mono text-xs uppercase tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
