import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { stats } from '../config/content';
import { Reveal } from './ui/Reveal';

/** Counts up to `value` once the element scrolls into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-bronze">{suffix}</span>
    </span>
  );
}

export function TrustStats() {
  return (
    <section id="trust" className="border-b border-charcoal/10 bg-ivory py-16 lg:py-20">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="h-px w-8 bg-bronze/50" aria-hidden="true" />
            <p className="eyebrow">Designing Spaces With Purpose</p>
          </div>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className={[
                'px-3 text-center sm:px-4 border-charcoal/10',
                // 2-up on mobile: rule between the two columns.
                i % 2 === 1 ? 'border-l' : '',
                // 4-up from lg: rule before every item except the first.
                i > 0 ? 'lg:border-l' : 'lg:border-l-0',
              ].join(' ')}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[2.6rem] font-light leading-none text-charcoal sm:text-[3.1rem]">
                  {stat.value === null ? (
                    <span className="tracking-tight">{stat.staticValue}</span>
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </span>
                <span className="mt-4 block font-sans text-[0.66rem] uppercase tracking-eyebrow text-stone">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
