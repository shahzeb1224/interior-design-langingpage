import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { img, images } from '../config/images';
import { site } from '../config/site';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-6%', '6%']);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-charcoal"
    >
      <motion.img
        style={{ y }}
        src={img(images.finalCta, 1900)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-[112%] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/85"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      <div className="shell relative py-24 text-center lg:py-32">
        <Reveal>
          <p className="eyebrow text-champagne">Aurelia Studio</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-7 max-w-4xl text-[2.4rem] leading-[1.04] text-ivory sm:text-[3.4rem] lg:text-[4.6rem]">
            Your Space.
            <br />
            Your Story.
            <br />
            <span className="italic text-champagne">Beautifully Designed.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#contact"
              variant="light"
              size="lg"
              icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>
            <Button
              href={site.phoneHref}
              variant="ghost"
              size="lg"
              icon={<Phone className="h-3.5 w-3.5" strokeWidth={1.5} />}
              className="w-full sm:w-auto"
            >
              Call Us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-8 font-sans text-[0.64rem] uppercase tracking-eyebrow text-ivory/45">
            {site.disciplines}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
