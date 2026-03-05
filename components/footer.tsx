import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container-shell flex flex-col items-start justify-between gap-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location} · {profile.email}</p>
      </div>
    </footer>
  );
}
