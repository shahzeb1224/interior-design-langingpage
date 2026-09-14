import { Star } from 'lucide-react';
import { testimonials } from '../config/content';
import { RevealGroup, RevealItem } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < value ? 'fill-bronze text-bronze' : 'text-beige'}`}
          strokeWidth={1.25}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section id="testimonials" className="bg-ivory py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Client Words"
          title={
            <>
              Trusted by Clients Who Care{' '}
              <span className="italic">About the Details.</span>
            </>
          }
          intro="Five of the people we have worked with recently, in their own words."
        />

        {/* 1px gaps read as architectural rules between panels. */}
        <RevealGroup className="mt-14 grid gap-px border border-charcoal/10 bg-charcoal/10 lg:grid-cols-3">
          {/* Lead quote — larger, spans two columns on desktop. */}
          <RevealItem
            as="article"
            className="flex flex-col justify-between bg-linen p-8 sm:p-10 lg:col-span-2 lg:p-12"
          >
            <div>
              <Rating value={lead.rating} />
              <blockquote className="mt-7">
                <p className="font-display text-[1.5rem] font-light leading-[1.32] text-charcoal sm:text-[1.9rem] lg:text-[2.1rem]">
                  “{lead.quote}”
                </p>
              </blockquote>
            </div>
            <footer className="mt-10 flex items-center gap-4 border-t border-charcoal/10 pt-6">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal font-sans text-[0.75rem] font-medium text-ivory"
              >
                {lead.name.charAt(0)}
              </span>
              <div>
                <p className="font-sans text-[0.85rem] font-medium text-charcoal">
                  {lead.name}
                </p>
                <p className="mt-0.5 font-sans text-[0.66rem] uppercase tracking-wide2 text-stone">
                  {lead.project} — {lead.location}
                </p>
              </div>
            </footer>
          </RevealItem>

          {rest.map((t) => (
            <RevealItem
              as="article"
              key={t.id}
              className="flex flex-col justify-between gap-8 bg-ivory p-8"
            >
              <div>
                <Rating value={t.rating} />
                <blockquote className="mt-5">
                  <p className="text-[0.95rem] leading-relaxed text-charcoal/85">
                    “{t.quote}”
                  </p>
                </blockquote>
              </div>
              <footer className="border-t border-charcoal/10 pt-5">
                <p className="font-sans text-[0.82rem] font-medium text-charcoal">
                  {t.name}
                </p>
                <p className="mt-1 font-sans text-[0.62rem] uppercase tracking-wide2 text-stone">
                  {t.project}
                </p>
                <p className="mt-0.5 font-sans text-[0.62rem] uppercase tracking-wide2 text-taupe">
                  {t.location}
                </p>
              </footer>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
