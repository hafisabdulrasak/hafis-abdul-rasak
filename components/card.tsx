import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">{children}</article>;
}
