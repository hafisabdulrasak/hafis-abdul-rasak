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
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/35 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35">
      <nav className="container-shell flex items-center justify-between py-3" aria-label="Main navigation">
        <Link href="/" className="rounded-md px-2 py-1 text-base font-semibold tracking-tight transition hover:bg-white/35 dark:hover:bg-slate-900/45">
          Hafis Abdul Rasak
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
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
