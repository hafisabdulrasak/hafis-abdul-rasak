'use client';

import { FormEvent, useState } from 'react';
import { profile } from '@/data/profile';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email address.';
    if (!message || message.length < 10) nextErrors.message = 'Message must be at least 10 characters.';

    setErrors(nextErrors);
    setIsSuccess(Object.keys(nextErrors).length === 0);

    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-4">
      {isSuccess ? (
        <p className="rounded-md border border-emerald-200/70 bg-emerald-100/50 px-4 py-3 text-sm text-emerald-800 backdrop-blur-xl dark:border-emerald-400/25 dark:bg-emerald-700/15 dark:text-emerald-300">
          Thank you. Your message is ready to send. If needed, use the fallback link below.
        </p>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" className="mt-1 w-full rounded-md border border-white/60 bg-white/35 px-3 py-2 backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/30" />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-white/60 bg-white/35 px-3 py-2 backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/30" />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-md border border-white/60 bg-white/35 px-3 py-2 backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/30" />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
        </div>
        <button type="submit" className="rounded-md bg-brand-600/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/20 backdrop-blur-xl transition hover:bg-brand-700/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
          Send message
        </button>
      </form>
      <a
        className="inline-flex text-sm font-medium text-brand-700 underline hover:text-brand-600 dark:text-brand-50"
        href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
      >
        Mailto fallback
      </a>
    </div>
  );
}
