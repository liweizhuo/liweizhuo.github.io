import { profile, socialLinks } from '@/data/resume';

const iconMap: Record<string, string> = {
  github: 'M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z',
  mail: 'M2 5h20v14H2V5zm0 0l10 7 10-7',
  juejin: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
  linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.5 10.5v6M8.5 7v1M12 16.5v-3a1.5 1.5 0 0 1 3 0v3M12 10.5v6',
};

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto max-w-4xl px-5 pt-24 pb-10">
        {/* Two-column: content left, photo right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* === Left: content === */}
          <div className="flex-1 min-w-0">
            {/* Top metadata bar */}
            <div className="mono mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
              <span>{profile.location}</span>
              <span className="text-border">|</span>
              <span>{profile.school}</span>
              <span className="text-border">|</span>
              {profile.available ? (
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="inline-block h-1.5 w-1.5 bg-primary" />
                  {profile.statusText}
                </span>
              ) : (
                <span>{profile.statusText}</span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-5xl font-black leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="mono mt-3 text-sm uppercase tracking-widest text-muted-foreground">
              {profile.nameEn}
            </p>

            {/* Title + tagline */}
            <div className="mt-6 max-w-2xl">
              <p className="text-lg font-bold text-foreground sm:text-xl">
                {profile.title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {profile.tagline}
              </p>
            </div>

            {/* Bio */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/80">
              {profile.bio}
            </p>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={iconMap[link.icon] || iconMap.mail} />
                  </svg>
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="mono ml-auto text-xs uppercase tracking-wider text-primary hover:underline"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* === Right: photo frame (paper album style) === */}
          <div className="hidden flex-shrink-0 md:block">
            <div className="relative rotate-[2.5deg] pt-4 pr-4">
              {/* Tape — washi tape on top-left corner */}
              <div className="absolute -top-1 left-6 z-10 h-7 w-20 -rotate-[4deg] bg-primary/15 backdrop-blur-[1px]" />

              {/* Photo mount — white border, polaroid style */}
              <div className="bg-white p-3 pb-5 shadow-[6px_8px_20px_-4px_rgba(0,0,0,0.15)]">
                {/* Photo */}
                <div className="aspect-[3/4] w-48 overflow-hidden bg-muted">
                  {profile.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-full w-full object-cover grayscale-[0.1]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="1" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span className="mono text-[10px] uppercase tracking-wider">Photo</span>
                    </div>
                  )}
                </div>
                {/* Caption */}
                <p className="mono mt-2 text-center text-[11px] tracking-wide text-neutral-500">
                  {profile.name} · {profile.title.split('·')[0].trim()}
                </p>
              </div>

              {/* Tape — small piece on bottom-right corner */}
              <div className="absolute -bottom-1 right-2 h-5 w-12 rotate-[6deg] bg-primary/15 backdrop-blur-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
