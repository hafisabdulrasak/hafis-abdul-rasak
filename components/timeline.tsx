import { ExperienceItem } from '@/data/profile';
import { Tag } from './tag';

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative border-slate-200 space-y-8 border-l pl-6 dark:border-slate-700">
      {items.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-brand-600" aria-hidden="true" />
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{item.period}</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold">{item.role} · {item.company}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
