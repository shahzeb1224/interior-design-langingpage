import { ArrowUpRight, FileText } from 'lucide-react';
import { img, images } from '../config/images';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

/** Mid-page conversion band — dark, quiet, and unmissable. */
export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={img(images.ctaBand, 1800)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/60"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />

      <div className="shell relative py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-champagne">Let's Begin</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[2.2rem] leading-[1.06] text-ivory sm:text-[2.9rem] lg:text-[3.5rem]">
                Have a Space <span className="italic text-champagne">in Mind?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ivory/70">
                Let's turn your ideas into a space you'll be proud to come home to.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                href="#contact"
                variant="light"
                size="lg"
                className="w-full sm:flex-1"
                icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                Book a Consultation
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                className="w-full sm:flex-1"
                icon={<FileText className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                Request a Quote
              </Button>
            </div>
            <p className="mt-5 font-sans text-[0.62rem] uppercase tracking-eyebrow text-ivory/45">
              Free initial consultation • No obligation
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
