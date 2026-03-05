import Link from 'next/link';
import { Card } from '@/components/card';
import { Section } from '@/components/section';
import { Tag } from '@/components/tag';
import { profile } from '@/data/profile';

export default function HomePage() {
  const topExperience = profile.experience.slice(0, 3);
  const featuredProjects = profile.projects.slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="container-shell">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-50">{profile.location}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-xl text-slate-700 dark:text-slate-200">{profile.title}</p>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-md bg-brand-600/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/20 backdrop-blur-xl transition hover:bg-brand-700/90">Email</a>
            <a href={`https://linkedin.com/in/${profile.linkedin}`} className="glass-button rounded-md px-4 py-2 text-sm font-semibold">LinkedIn</a>
            <a href={`https://github.com/${profile.github}`} className="glass-button rounded-md px-4 py-2 text-sm font-semibold">GitHub</a>
            <a href="/Hafis-Abdul-Rasak-CV.pdf" className="rounded-md border border-brand-400/60 bg-brand-50/40 px-4 py-2 text-sm font-semibold text-brand-700 backdrop-blur-xl transition hover:bg-brand-100/50 dark:border-brand-300/30 dark:bg-brand-700/20 dark:text-brand-50 dark:hover:bg-brand-700/35" download>
              Download CV
            </a>
          </div>
        </div>
      </section>

      <Section id="about" title="About / Summary">
        <p className="max-w-4xl text-slate-700 dark:text-slate-300">{profile.about}</p>
      </Section>

      <Section id="skills" title="Core Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((category) => (
            <Card key={category.title}>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                {category.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience Highlights">
        <div className="space-y-4">
          {topExperience.map((item) => (
            <Card key={`${item.company}-${item.period}`}>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.role} · {item.company}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {item.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
          <Link href="/experience" className="inline-flex text-sm font-semibold text-brand-700 underline dark:text-brand-50">
            View all experience
          </Link>
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.certifications.map((cert) => (
            <Card key={cert.name}>
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{cert.issuer} · {cert.date}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.name}>
              <p className="text-xs text-slate-500 dark:text-slate-400">{project.period}</p>
              <h3 className="mt-1 font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={`${project.name}-${tag}`} label={tag} />
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Link href="/projects" className="mt-4 inline-flex text-sm font-semibold text-brand-700 underline dark:text-brand-50">
          Explore all projects
        </Link>
      </Section>

      <Section id="services" title="Services">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.services.map((service) => (
            <Card key={service.title}>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials" description="Placeholder entries to be replaced with real client feedback.">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="text-sm italic text-slate-700 dark:text-slate-300">“{testimonial.quote}”</p>
              <p className="mt-3 text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role} {testimonial.placeholder ? '(Placeholder)' : ''}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-md bg-brand-600/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/20 backdrop-blur-xl transition hover:bg-brand-700/90">Email</a>
          <a href={`https://linkedin.com/in/${profile.linkedin}`} className="glass-button rounded-md px-4 py-2 text-sm font-semibold">LinkedIn</a>
          <a href={`https://github.com/${profile.github}`} className="glass-button rounded-md px-4 py-2 text-sm font-semibold">GitHub</a>
        </div>
      </Section>
    </>
  );
}
