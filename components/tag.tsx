export function Tag({ label }: { label: string }) {
  return <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-700/20 dark:text-brand-50">{label}</span>;
}
