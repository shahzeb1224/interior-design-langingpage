import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { whatsappHref } from '../config/site';

/** WhatsApp glyph — lucide has no brand icons, so this is inlined. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.06 3.2 5.02 4.37.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path
        fillRule="evenodd"
        d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.83 9.83 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.94h-.01a8.16 8.16 0 0 1-4.15-1.14l-.3-.18-3.08.81.82-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.18-8.23 8.18Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Appear once the hero is behind the viewport so it never competes with it.
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Chat with us on WhatsApp"
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-charcoal p-4 text-ivory shadow-lift transition-colors duration-500 hover:bg-bronze sm:bottom-7 sm:right-7 sm:py-3.5 sm:pl-4 sm:pr-5"
        >
          <WhatsAppGlyph className="h-5 w-5 shrink-0" />
          <span className="hidden whitespace-nowrap font-sans text-[0.68rem] font-medium uppercase tracking-wide2 sm:block">
            Chat on WhatsApp
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
