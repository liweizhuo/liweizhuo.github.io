'use client';

import { useEffect, useState } from 'react';
import { navSections, profile } from '@/data/resume';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-56px 0px -60% 0px' },
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled
            ? 'border-b border-border bg-background/90 backdrop-blur-sm'
            : 'border-b border-transparent bg-background',
        )}
      >
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-extrabold tracking-tight text-foreground"
          >
            {profile.name}
            <span className="ml-1.5 mono text-xs font-medium text-primary">/</span>
          </button>

          <ul className="hidden items-center gap-5 md:flex">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={cn(
                    'nav-link mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground',
                    activeSection === id && 'is-active text-foreground',
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="flex h-8 w-8 items-center justify-center text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="切换菜单"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {menuOpen ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <ul className="flex flex-col gap-0 border-t border-border bg-background px-5 py-2 md:hidden">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="w-full py-2.5 text-left mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
