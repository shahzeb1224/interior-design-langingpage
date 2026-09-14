import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { principles } from '../config/content';
import { img, images } from '../config/images';
import { ImageReveal, Reveal } from './ui/Reveal';

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-4%', '4%']);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory py-20 lg:py-28"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagery column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <ImageReveal className="overflow-hidden bg-linen">
                <motion.img
                  style={{ y: imgY }}
                  src={img(images.philosophy, 1000)}
                  alt="Sculptural neutral interior with natural light across a plaster wall"
                  className="aspect-[4/5] w-full scale-105 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </ImageReveal>

              <Reveal
                delay={0.25}
                className="absolute -bottom-8 -right-4 hidden w-40 overflow-hidden border-4 border-ivory sm:block lg:-right-10 lg:w-48"
              >
                <img
                  src={img(images.philosophyDetail, 500)}
                  alt="Close-up of stone and timber material samples"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze/50" aria-hidden="true" />
                <span className="eyebrow text-bronze">Our Philosophy</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[2.1rem] leading-[1.08] text-charcoal sm:text-[2.7rem] lg:text-[3.4rem]">
                Design With <span className="italic">Intention.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-stone">
                We are not interested in trends that expire. Every project is built on
                three principles that keep a space feeling right long after the styling
                photos are taken.
              </p>
            </Reveal>

            <ul className="mt-12 space-y-10 lg:mt-14 lg:space-y-12">
              {principles.map((principle, i) => (
                <Reveal as="li" key={principle.number} delay={0.1 + i * 0.1}>
                  <div className="grid grid-cols-[auto,1fr] gap-6 border-t border-charcoal/10 pt-7 sm:gap-8">
                    <span
                      aria-hidden="true"
                      className="font-display text-[2.6rem] font-light leading-none text-beige sm:text-[3.4rem]"
                    >
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-[1.4rem] leading-tight text-charcoal sm:text-[1.6rem]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 font-display text-[1.1rem] italic text-bronze">
                        {principle.description}
                      </p>
                      <p className="mt-3 max-w-lg text-[0.9rem] leading-relaxed text-stone">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
