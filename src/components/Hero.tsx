import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { img, images } from '../config/images';
import { site } from '../config/site';
import { Button } from './ui/Button';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  // Gentle parallax on the backdrop; disabled when the user prefers less motion.
  const imageY = useTransform(scrollY, [0, 900], reduced ? [0, 0] : [0, 110]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal"
    >
      {/* Backdrop */}
      <motion.div style={{ y: imageY }} className="absolute -inset-x-0 -top-0 bottom-[-8%]">
        <motion.img
          src={img(images.heroPrimary, 2000)}
          alt="Contemporary home at dusk, glazed living spaces glowing against the garden"
          className="h-full w-full object-cover"
          initial={reduced ? { opacity: 0 } : { scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          decoding="async"
        />
      </motion.div>

      {/* Scrims: vertical for the copy block, horizontal rail from lg up. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/72 to-charcoal/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-charcoal/75 via-charcoal/20 to-transparent lg:block"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      {/* Content */}
      <div className="shell relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span className="hidden h-px w-10 bg-champagne/70 sm:block" aria-hidden="true" />
              <p className="eyebrow whitespace-nowrap text-[0.55rem] tracking-[0.18em] text-champagne sm:text-[0.7rem] sm:tracking-eyebrow">
                {site.disciplines}
              </p>
            </motion.div>

            <h1 className="mt-7 text-ivory">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.42, ease: EASE }}
                  className="block text-[2.85rem] leading-[0.98] sm:text-[4.2rem] lg:text-[5.4rem] xl:text-[6rem]"
                >
                  Spaces Designed
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.54, ease: EASE }}
                  className="block text-[2.85rem] leading-[1.02] sm:text-[4.2rem] lg:text-[5.4rem] xl:text-[6rem]"
                >
                  to Be <span className="italic text-champagne">Lived In.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
              className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-ivory/75 sm:text-[1.05rem]"
            >
              Thoughtful interiors, refined architecture, and beautifully executed
              transformations designed around the way you live and work.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.95 } },
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {[
                <Button
                  key="primary"
                  href="#contact"
                  variant="light"
                  size="lg"
                  icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
                  className="w-full sm:w-auto"
                >
                  Book a Consultation
                </Button>,
                <Button
                  key="secondary"
                  href="#work"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Work
                </Button>,
              ].map((node, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="w-full sm:w-auto"
                >
                  {node}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.25 }}
              className="mt-7 font-sans text-[0.66rem] uppercase tracking-eyebrow text-ivory/45"
            >
              Residential • Commercial • Renovation
            </motion.p>
          </div>

          {/* Inset detail image — desktop only, adds editorial layering. */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: EASE }}
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="ml-auto max-w-[19rem]">
              <div className="img-zoom overflow-hidden">
                <img
                  src={img(images.heroDetail, 700)}
                  alt="Detail of warm minimal interior with textured plaster wall"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 border-l border-champagne/40 pl-4 font-display text-[1.05rem] italic leading-snug text-ivory/70">
                “We transform spaces into places worth living in.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-14 hidden items-center gap-3 font-sans text-[0.6rem] uppercase tracking-eyebrow text-ivory/50 transition-colors hover:text-ivory sm:inline-flex"
        >
          <motion.span
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25"
          >
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
