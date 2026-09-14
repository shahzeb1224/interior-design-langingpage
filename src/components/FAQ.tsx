import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../config/content';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Good to <span className="italic">Know.</span>
                </>
              }
              intro="The things clients usually ask before we start. Anything else, just ask."
            />
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-charcoal/12">
              {faqs.map((faq, i) => {
                const expanded = open === i;
                return (
                  <Reveal as="li" key={faq.q} delay={Math.min(i, 4) * 0.05}>
                    <div className="border-b border-charcoal/12">
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(expanded ? null : i)}
                          aria-expanded={expanded}
                          aria-controls={`faq-panel-${i}`}
                          id={`faq-trigger-${i}`}
                          className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                        >
                          <span
                            className={`font-display text-[1.2rem] leading-snug transition-colors duration-500 sm:text-[1.4rem] ${
                              expanded
                                ? 'text-charcoal'
                                : 'text-charcoal/80 group-hover:text-charcoal'
                            }`}
                          >
                            {faq.q}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-500 ease-editorial ${
                              expanded
                                ? 'rotate-45 border-bronze bg-bronze text-ivory'
                                : 'border-charcoal/20 text-charcoal group-hover:border-charcoal'
                            }`}
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {expanded ? (
                          <motion.div
                            id={`faq-panel-${i}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 pr-8 text-[0.94rem] leading-relaxed text-stone">
                              {faq.a}
                            </p>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
