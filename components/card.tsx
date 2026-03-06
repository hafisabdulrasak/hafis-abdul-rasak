import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <article className="glass-panel liquid-sheen rounded-2xl p-6">{children}</article>;
}
