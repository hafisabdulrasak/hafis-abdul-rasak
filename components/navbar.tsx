import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/35 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/40 dark:shadow-black/20 liquid-sheen">
      <nav className="container-shell flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between" aria-label="Main navigation">
        <Link href="/" className="w-full rounded-md px-2 py-1 text-sm font-semibold leading-tight tracking-tight transition hover:bg-white/45 sm:w-auto sm:text-base dark:hover:bg-slate-900/45">
          Hafis Abdul Rasak
        </Link>
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="glass-button rounded-md px-2 py-1 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
