import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact | Hafis Abdul Rasak',
  description: 'Contact Hafis Abdul Rasak for ERP consulting, integrations, and analytics services.',
};

export default function ContactPage() {
  return (
    <Section title="Contact" description="Reach out for consulting engagements, implementation support, or project collaborations.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>LinkedIn:</strong> <a className="underline" href={`https://linkedin.com/in/${profile.linkedin}`}>linkedin.com/in/{profile.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a className="underline" href={`https://github.com/${profile.github}`}>github.com/{profile.github}</a></p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
