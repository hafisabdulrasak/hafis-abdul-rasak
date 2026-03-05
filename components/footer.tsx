import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/40 bg-white/20 py-8 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/25">
      <div className="container-shell flex flex-col items-start justify-between gap-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location} · {profile.email}</p>
      </div>
    </footer>
  );
}
