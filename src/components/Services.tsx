import {
  Armchair,
  Building2,
  Compass,
  Hammer,
  PaintRoller,
  Ruler,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '../config/content';
import type { Service } from '../config/content';
import { img } from '../config/images';
import { Button } from './ui/Button';
import { RevealGroup, RevealItem } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const icons: Record<Service['icon'], LucideIcon> = {
  sofa: Armchair,
  compass: Compass,
  hammer: Hammer,
  brush: PaintRoller,
  ruler: Ruler,
  building: Building2,
};

export function Services() {
  return (
    <section id="services" className="bg-ivory py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              From First Sketch to <span className="italic">Final Detail.</span>
            </>
          }
          intro="Six disciplines, one team. We can take a single room or an entire building, from the first conversation through to the day you move back in."
          aside={
            <div className="flex lg:justify-end">
              <Button
                href="#contact"
                variant="outline"
                icon={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                Explore Services
              </Button>
            </div>
          }
        />

        <RevealGroup className="mt-16 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <RevealItem
                key={service.id}
                as="article"
                className="group relative flex flex-col bg-ivory transition-colors duration-700 ease-editorial hover:bg-linen"
              >
                <a
                  href="#contact"
                  className="flex h-full flex-col p-7 lg:p-8"
                  aria-label={`${service.title} — start a project`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-sans text-[0.66rem] tracking-wide2 text-taupe">
                      {service.number}
                    </span>
                    <Icon
                      className="h-5 w-5 text-bronze/70 transition-colors duration-500 group-hover:text-bronze"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="img-zoom mt-7 overflow-hidden">
                    <img
                      src={img(service.image, 760)}
                      alt={`${service.title} project example`}
                      className="aspect-[16/11] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="mt-7 text-[1.55rem] leading-tight text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-stone">
                    {service.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 font-sans text-[0.66rem] font-medium uppercase tracking-wide2 text-charcoal">
                    Explore Service
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
