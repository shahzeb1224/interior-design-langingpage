import { ArrowUpRight } from 'lucide-react';
import { processSteps } from '../config/content';
import { img, images } from '../config/images';
import { Button } from './ui/Button';
import { ImageReveal, Reveal, RevealGroup, RevealItem } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Process() {
  return (
    <section id="process" className="bg-linen py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              From Idea to <span className="italic">Finished Space.</span>
            </>
          }
          intro="Four clear stages, with a decision point at the end of each one. You always know what happens next and what it costs."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <RevealGroup as="ol" className="space-y-0 lg:col-span-7">
            {processSteps.map((step) => (
              <RevealItem
                as="li"
                key={step.number}
                className="group border-t border-charcoal/12 last:border-b"
              >
                <div className="grid grid-cols-[auto,1fr] gap-5 py-7 sm:grid-cols-[5rem,1fr] sm:gap-8 lg:py-8">
                  <span
                    aria-hidden="true"
                    className="font-display text-[2rem] font-light leading-none text-taupe transition-colors duration-500 group-hover:text-bronze sm:text-[2.4rem]"
                  >
                    {step.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-[1.5rem] leading-tight text-charcoal sm:text-[1.75rem]">
                        {step.title}
                      </h3>
                      <span className="font-sans text-[0.62rem] uppercase tracking-eyebrow text-taupe">
                        {step.meta}
                      </span>
                    </div>
                    <p className="mt-3 max-w-lg text-[0.92rem] leading-relaxed text-stone">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="lg:col-span-5">
            <ImageReveal className="img-zoom overflow-hidden bg-beige">
              <img
                src={img(images.processAside, 900)}
                alt="Calm, fully designed room at the end of a renovation"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </ImageReveal>

            <Reveal delay={0.15}>
              <div className="mt-8 border-l border-bronze/40 pl-6">
                <p className="font-display text-[1.3rem] italic leading-snug text-charcoal">
                  “Nothing goes to site until you have seen it, priced it, and approved
                  it.”
                </p>
                <p className="mt-4 font-sans text-[0.62rem] uppercase tracking-eyebrow text-stone">
                  Studio Principal
                </p>
              </div>

              <Button
                href="#contact"
                variant="solid"
                size="lg"
                className="mt-8 w-full sm:w-auto"
                icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                Start Your Project
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
