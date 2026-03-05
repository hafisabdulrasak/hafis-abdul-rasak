import { Metadata } from 'next';
import { Section } from '@/components/section';
import { ProjectFilter } from '@/components/project-filter';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Projects | Hafis Abdul Rasak',
  description: 'Detailed project portfolio covering ERP, Odoo, integration, and analytics engagements.',
};

export default function ProjectsPage() {
  return (
    <Section title="Projects" description="Detailed list of personal and professional projects with filter tags.">
      <ProjectFilter projects={profile.projects} />
    </Section>
  );
}
