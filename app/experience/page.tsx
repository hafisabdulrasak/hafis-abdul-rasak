import { Metadata } from 'next';
import { Section } from '@/components/section';
import { Timeline } from '@/components/timeline';
import { Card } from '@/components/card';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Experience | Hafis Abdul Rasak',
  description: 'Full professional experience timeline for Hafis Abdul Rasak.',
};

export default function ExperiencePage() {
  return (
    <>
      <Section title="Experience Timeline" description="Complete role history and impact highlights.">
        <Timeline items={profile.experience} />
      </Section>
      <Section title="Education">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.education.map((item) => (
            <Card key={item.institution}>
              <h3 className="font-semibold">{item.institution}</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.degree}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
