import { profile, socialLinks } from '@/data/resume';
import { SectionHeading } from '@/components/section-heading';

const iconMap: Record<string, string> = {
  github: 'M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z',
  mail: 'M2 5h20v14H2V5zm0 0l10 7 10-7',
  juejin: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
  linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.5 10.5v6M8.5 7v1M12 16.5v-3a1.5 1.5 0 0 1 3 0v3M12 10.5v6',
};

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <SectionHeading num="05" title="联系方式" label="CONTACT" />

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          {/* Email */}
          <div>
            <p className="mono mb-1 text-xs uppercase tracking-wider text-muted-foreground">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-base font-bold text-foreground transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="mono mb-1 text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
            <p className="text-base font-bold text-foreground">{profile.phone}</p>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-4 flex flex-wrap gap-5 border-t border-border pt-5">
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
        </div>
      </div>
    </section>
  );
}
