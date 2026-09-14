import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MoveHorizontal } from 'lucide-react';
import { transformations } from '../config/content';
import type { Transformation } from '../config/content';
import { img } from '../config/images';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

/**
 * Draggable before/after comparison.
 * Pointer events cover mouse + touch + pen; the handle is a real slider
 * input-alike with arrow-key support and correct ARIA.
 */
function CompareSlider({ item }: { item: Transformation }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const startDrag = (clientX: number) => {
    setDragging(true);
    setHasInteracted(true);
    updateFromClientX(clientX);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [dragging, updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setHasInteracted(true);
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setHasInteracted(true);
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        // Ignore secondary buttons so right-click doesn't grab the handle.
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        startDrag(e.clientX);
      }}
      className={`relative aspect-[4/5] w-full select-none overflow-hidden bg-charcoal sm:aspect-[16/10] lg:aspect-[16/9] ${
        dragging ? 'cursor-grabbing' : 'cursor-ew-resize'
      }`}
    >
      {/* AFTER — full-bleed base layer */}
      <img
        src={img(item.after, 1600)}
        alt={`${item.label} after the transformation`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* BEFORE — clipped to the handle position */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={img(item.before, 1600)}
          alt={`${item.label} before the transformation`}
          className="h-full w-full object-cover"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-charcoal/10" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 border border-ivory/30 bg-charcoal/55 px-3 py-1.5 font-sans text-[0.6rem] font-medium uppercase tracking-eyebrow text-ivory backdrop-blur-sm sm:left-6 sm:top-6">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 border border-charcoal/10 bg-ivory/85 px-3 py-1.5 font-sans text-[0.6rem] font-medium uppercase tracking-eyebrow text-charcoal backdrop-blur-sm sm:right-6 sm:top-6">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory/90"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-[3px] bg-ivory/20" />
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label={`Reveal the before and after of the ${item.label.toLowerCase()} transformation`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% before, ${
          100 - Math.round(position)
        }% after`}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          e.stopPropagation();
          startDrag(e.clientX);
        }}
        style={{ left: `${position}%` }}
        className="absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-ivory/70 bg-ivory/95 text-charcoal shadow-lift transition-transform duration-300 ease-editorial hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
      >
        <MoveHorizontal className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* First-run hint */}
      <AnimatePresence>
        {!hasInteracted ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-charcoal/55 px-4 py-2 font-sans text-[0.6rem] uppercase tracking-eyebrow text-ivory/90 backdrop-blur-sm"
          >
            Drag to compare
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function BeforeAfter() {
  const [activeId, setActiveId] = useState(transformations[0].id);
  const active =
    transformations.find((t) => t.id === activeId) ?? transformations[0];

  return (
    <section
      id="transformations"
      className="relative overflow-hidden bg-charcoal py-20 lg:py-28"
    >
      <div aria-hidden="true" className="grain absolute inset-0" />

      <div className="shell relative">
        <SectionHeading
          eyebrow="Before & After"
          tone="light"
          title={
            <>
              See the <span className="italic text-champagne">Transformation.</span>
            </>
          }
          intro="Great design isn't just about how a space looks. It's about how dramatically it can change the way you experience it."
        />

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Choose a transformation"
            className="mt-12 flex flex-wrap gap-2 border-b border-ivory/12 pb-1"
          >
            {transformations.map((t) => {
              const selected = t.id === activeId;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActiveId(t.id)}
                  className={`relative px-4 py-3 font-sans text-[0.68rem] font-medium uppercase tracking-wide2 transition-colors duration-500 ${
                    selected ? 'text-ivory' : 'text-ivory/45 hover:text-ivory/80'
                  }`}
                >
                  {t.label}
                  {selected ? (
                    <motion.span
                      layoutId="ba-tab"
                      className="absolute inset-x-2 -bottom-1 h-px bg-champagne"
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              className="lg:col-span-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <CompareSlider item={active} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-4 lg:pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-[1.7rem] leading-tight text-ivory lg:text-[1.9rem]">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-[0.94rem] leading-relaxed text-ivory/65">
                    {active.description}
                  </p>

                  <dl className="mt-8 space-y-4 border-t border-ivory/12 pt-6">
                    <div>
                      <dt className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-champagne">
                        Scope
                      </dt>
                      <dd className="mt-1.5 text-[0.9rem] text-ivory/75">
                        {active.scope}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-champagne">
                        Duration
                      </dt>
                      <dd className="mt-1.5 text-[0.9rem] text-ivory/75">
                        {active.duration}
                      </dd>
                    </div>
                  </dl>

                  <Button
                    href="#contact"
                    variant="ghost"
                    className="mt-8 w-full sm:w-auto"
                    icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
                  >
                    See More Transformations
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
