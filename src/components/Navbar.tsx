import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, site } from '../config/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-editorial ${
          solid
            ? 'border-b border-charcoal/10 bg-ivory/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex items-center justify-between py-4 lg:py-5"
        >
          <a
            href="#home"
            className="group flex items-baseline gap-1.5"
            aria-label={`${site.brand} — home`}
          >
            <span
              className={`font-display text-xl tracking-wide transition-colors duration-500 sm:text-2xl ${
                solid ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              {site.brandMark}
            </span>
            <span
              className={`font-sans text-[0.62rem] font-medium uppercase tracking-eyebrow transition-colors duration-500 ${
                solid ? 'text-bronze' : 'text-champagne'
              }`}
            >
              {site.brandMarkAccent}
            </span>
          </a>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`link-underline font-sans text-[0.72rem] font-medium uppercase tracking-wide2 transition-colors duration-500 ${
                    solid
                      ? 'text-charcoal/70 hover:text-charcoal'
                      : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden items-center gap-2 border px-5 py-2.5 font-sans text-[0.66rem] font-medium uppercase tracking-wide2 transition-all duration-500 ease-editorial lg:inline-flex ${
                solid
                  ? 'border-charcoal bg-charcoal text-ivory hover:bg-bronze'
                  : 'border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              Start Your Project
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className={`flex h-10 w-10 items-center justify-center border transition-colors duration-500 xl:hidden ${
                solid
                  ? 'border-charcoal/20 text-charcoal'
                  : 'border-ivory/35 text-ivory'
              }`}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory xl:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24 sm:px-8">
              <ul className="flex-1 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-charcoal/10"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="font-display text-2xl text-charcoal">
                        {link.label}
                      </span>
                      <span className="font-sans text-[0.6rem] tracking-wide2 text-stone">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8 space-y-3"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-charcoal px-6 py-4 font-sans text-[0.7rem] font-medium uppercase tracking-wide2 text-ivory"
                >
                  Start Your Project
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
                <a
                  href={site.phoneHref}
                  className="block text-center font-sans text-[0.8rem] text-stone"
                >
                  {site.phoneLabel}
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
