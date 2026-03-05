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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="container-shell flex items-center justify-between py-3" aria-label="Main navigation">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Hafis Abdul Rasak
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded px-2 py-1 text-sm font-medium hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 dark:hover:bg-slate-800">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
