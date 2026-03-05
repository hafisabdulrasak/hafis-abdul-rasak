export function Tag({ label }: { label: string }) {
  return <span className="inline-flex rounded-full border border-brand-200/70 bg-brand-100/40 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur-md dark:border-brand-300/25 dark:bg-brand-700/25 dark:text-brand-50">{label}</span>;
}
