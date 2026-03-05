'use client';

import { useMemo, useState } from 'react';
import { ProjectItem } from '@/data/profile';
import { Card } from './card';
import { Tag } from './tag';

export function ProjectFilter({ projects }: { projects: ProjectItem[] }) {
  const allTags = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))], [projects]);
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All' ? projects : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filter">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
              activeTag === tag
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.name}>
            <p className="text-xs text-slate-500 dark:text-slate-400">{project.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={`${project.name}-${tag}`} label={tag} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
