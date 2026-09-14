import { ArrowUpRight } from 'lucide-react';
import { projects } from '../config/content';
import type { Project } from '../config/content';
import { img } from '../config/images';
import { Button } from './ui/Button';
import { ImageReveal, Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

/** Per-slot layout so the grid reads editorial rather than like repeated cards. */
const layout = [
  { span: 'lg:col-span-7', ratio: 'aspect-[4/3]' },
  { span: 'lg:col-span-5', ratio: 'aspect-[4/5]' },
  { span: 'lg:col-span-5', ratio: 'aspect-[4/5]' },
  { span: 'lg:col-span-7', ratio: 'aspect-[4/3]' },
  { span: 'lg:col-span-6', ratio: 'aspect-[3/2]' },
  { span: 'lg:col-span-6', ratio: 'aspect-[3/2]' },
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const slot = layout[index % layout.length];

  return (
    <article className={`group ${slot.span}`}>
      <a href="#contact" className="block" aria-label={`${project.name} — view project`}>
        <ImageReveal className="img-zoom relative overflow-hidden bg-linen">
          <img
            src={img(project.image, 1200)}
            alt={`${project.name}, ${project.category} in ${project.location}`}
            className={`${slot.ratio} w-full object-cover`}
            loading="lazy"
            decoding="async"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 ease-editorial group-hover:bg-charcoal/15"
          />
          <span className="absolute left-5 top-5 bg-ivory/90 px-3 py-1.5 font-sans text-[0.6rem] font-medium uppercase tracking-wide2 text-charcoal backdrop-blur-sm">
            {project.category}
          </span>
          <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center bg-ivory text-charcoal opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </ImageReveal>

        <div className="mt-5 flex items-start justify-between gap-6 border-t border-charcoal/10 pt-5">
          <div>
            <h3 className="text-[1.5rem] leading-tight text-charcoal transition-colors duration-500 group-hover:text-bronze">
              {project.name}
            </h3>
            <p className="mt-2 font-sans text-[0.68rem] uppercase tracking-wide2 text-taupe">
              {project.location} — {project.year}
            </p>
            <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-stone">
              {project.description}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative bg-linen py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Spaces That Speak <span className="italic">for Themselves.</span>
            </>
          }
          intro="A cross-section of recent residential, commercial, and hospitality work. Each one started as a conversation about how a space should feel."
          aside={
            <div className="flex lg:justify-end">
              <Button
                href="#contact"
                variant="outline"
                icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                View All Projects
              </Button>
            </div>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12 lg:gap-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center lg:hidden">
          <Button
            href="#contact"
            variant="solid"
            icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
          >
            View All Projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
