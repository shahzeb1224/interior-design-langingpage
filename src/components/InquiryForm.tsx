import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { budgetRanges, projectTypes } from '../config/content';
import { site, whatsappHref } from '../config/site';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

type Fields = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL_RE.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (values.phone.replace(/\D/g, '').length < 7)
    errors.phone = 'Please enter a reachable phone or WhatsApp number.';
  if (!values.projectType) errors.projectType = 'Please choose a project type.';
  if (values.message.trim().length < 10)
    errors.message = 'A sentence or two about the space helps us prepare.';
  return errors;
}

export function InquiryForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid control for keyboard + SR users.
      const first = Object.keys(found)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setStatus('sending');
    // Demo only: no backend is wired up. Swap for a real endpoint later.
    window.setTimeout(() => setStatus('sent'), 900);
  };

  const err = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${key}-error`} role="alert" className="mt-2 font-sans text-[0.72rem] text-terracotta">
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: keyof Fields) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });

  return (
    <section id="contact" className="bg-linen py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze/50" aria-hidden="true" />
                <span className="eyebrow text-bronze">Start a Project</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[2.1rem] leading-[1.08] text-charcoal sm:text-[2.6rem] lg:text-[3.1rem]">
                Let's Talk About <span className="italic">Your Space.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-stone">
                Tell us a little about your project and we'll get back to you to discuss
                the next step.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-10 space-y-5 border-t border-charcoal/10 pt-8">
                {[
                  {
                    icon: Phone,
                    label: 'Call the studio',
                    value: site.phoneLabel,
                    href: site.phoneHref,
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: site.email,
                    href: `mailto:${site.email}`,
                  },
                  {
                    icon: MessageCircle,
                    label: 'WhatsApp',
                    value: 'Message us directly',
                    href: whatsappHref,
                    external: true,
                  },
                  {
                    icon: MapPin,
                    label: 'Studio',
                    value: site.location.replace('\n', ', '),
                  },
                ].map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <row.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-bronze"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-taupe">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          href={row.href}
                          {...(row.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="link-underline mt-1 inline-block text-[0.92rem] text-charcoal"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[0.92rem] text-charcoal">{row.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-sans text-[0.72rem] leading-relaxed text-stone">
                {site.hours} — we reply to most enquiries within one business day.
              </p>
            </Reveal>
          </div>

          {/* Form panel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative border border-charcoal/10 bg-ivory p-7 shadow-card sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-bronze/40 text-bronze">
                      <Check className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-[1.8rem] leading-tight text-charcoal">
                      Thank you, {values.name.split(' ')[0] || 'friend'}.
                    </h3>
                    <p className="mt-4 max-w-sm text-[0.94rem] leading-relaxed text-stone">
                      Your enquiry is with the studio. We'll be in touch within one
                      business day to arrange your consultation.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href={whatsappHref} external variant="outline">
                        Chat on WhatsApp
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setValues(empty);
                          setStatus('idle');
                        }}
                        className="border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-ivory"
                      >
                        Send another
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    noValidate
                  >
                    <p className="font-sans text-[0.62rem] uppercase tracking-eyebrow text-taupe">
                      Project Enquiry
                    </p>

                    <div className="mt-8 grid gap-7 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="name" className="field-label">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          className="field"
                          placeholder="Your name"
                          value={values.name}
                          onChange={set('name')}
                          {...aria('name')}
                        />
                        {err('name')}
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="email" className="field-label">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="field"
                          placeholder="you@email.com"
                          value={values.email}
                          onChange={set('email')}
                          {...aria('email')}
                        />
                        {err('email')}
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="phone" className="field-label">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="field"
                          placeholder="+1 555 000 0000"
                          value={values.phone}
                          onChange={set('phone')}
                          {...aria('phone')}
                        />
                        {err('phone')}
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="projectType" className="field-label">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="field field-select"
                          value={values.projectType}
                          onChange={set('projectType')}
                          {...aria('projectType')}
                        >
                          <option value="">Select a service</option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {err('projectType')}
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="location" className="field-label">
                          Location
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          autoComplete="address-level2"
                          className="field"
                          placeholder="City or district"
                          value={values.location}
                          onChange={set('location')}
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="budget" className="field-label">
                          Approximate Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="field field-select"
                          value={values.budget}
                          onChange={set('budget')}
                        >
                          <option value="">Select a range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="field-label">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="field resize-none"
                          placeholder="Tell us about the space, what is not working, and what you'd like it to become."
                          value={values.message}
                          onChange={set('message')}
                          {...aria('message')}
                        />
                        {err('message')}
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center">
                      <Button
                        type="submit"
                        variant="solid"
                        size="lg"
                        disabled={status === 'sending'}
                        className="w-full sm:w-auto"
                        icon={
                          status === 'sending' ? undefined : (
                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                          )
                        }
                      >
                        {status === 'sending' ? 'Sending…' : 'Request a Consultation'}
                      </Button>
                      <Button
                        href={whatsappHref}
                        external
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto"
                        icon={<MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />}
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>

                    <p className="mt-6 font-sans text-[0.7rem] leading-relaxed text-stone">
                      Fields marked * are required. Your details stay with the studio and
                      are never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
