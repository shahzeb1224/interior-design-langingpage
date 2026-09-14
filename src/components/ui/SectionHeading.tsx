import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
  aside?: ReactNode;
};

/** Shared editorial section header: eyebrow, serif title, optional intro + aside. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  className = '',
  aside,
}: Props) {
  const centered = align === 'center';
  const light = tone === 'light';

  return (
    <div
      className={`${
        centered
          ? 'mx-auto max-w-3xl text-center'
          : aside
            ? 'grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12'
            : 'max-w-3xl'
      } ${className}`}
    >
      <div className={aside && !centered ? 'lg:col-span-7' : ''}>
        <Reveal>
          <div
            className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
          >
            <span
              className={`h-px w-8 ${light ? 'bg-champagne/60' : 'bg-bronze/50'}`}
              aria-hidden="true"
            />
            <span className={`eyebrow ${light ? 'text-champagne' : 'text-bronze'}`}>
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            className={`mt-5 text-[2.1rem] leading-[1.08] sm:text-[2.7rem] lg:text-[3.4rem] ${
              light ? 'text-ivory' : 'text-charcoal'
            }`}
          >
            {title}
          </h2>
        </Reveal>

        {intro ? (
          <Reveal delay={0.12}>
            <p
              className={`mt-6 max-w-xl text-[0.98rem] leading-relaxed ${
                centered ? 'mx-auto' : ''
              } ${light ? 'text-ivory/65' : 'text-stone'}`}
            >
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>

      {aside && !centered ? (
        <Reveal delay={0.18} className="lg:col-span-5 lg:pb-2">
          {aside}
        </Reveal>
      ) : null}
    </div>
  );
}
