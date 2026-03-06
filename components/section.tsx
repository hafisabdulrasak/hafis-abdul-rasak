import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container-shell">
        <div className="glass-panel liquid-sheen mb-8 max-w-3xl rounded-2xl p-5">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description ? <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
