import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { footerNav, footerServices } from '../config/content';
import { site, socialLinks, whatsappHref } from '../config/site';
import { Reveal } from './ui/Reveal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-graphite text-ivory">
      <div aria-hidden="true" className="grain absolute inset-0" />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <Reveal className="lg:col-span-4">
            <a href="#home" className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl text-ivory">{site.brandMark}</span>
              <span className="font-sans text-[0.62rem] font-medium uppercase tracking-eyebrow text-champagne">
                {site.brandMarkAccent}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-ivory/55">
              {site.tagline}
            </p>
            <p className="mt-7 font-sans text-[0.6rem] uppercase tracking-eyebrow text-ivory/35">
              Est. {site.founded}
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.06} className="lg:col-span-2">
            <h2 className="font-sans text-[0.6rem] font-medium uppercase tracking-eyebrow text-champagne">
              Navigation
            </h2>
            <ul className="mt-6 space-y-3">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-[0.88rem] text-ivory/60 transition-colors duration-500 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <h2 className="font-sans text-[0.6rem] font-medium uppercase tracking-eyebrow text-champagne">
              Services
            </h2>
            <ul className="mt-6 space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-[0.88rem] text-ivory/60 transition-colors duration-500 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact + social */}
          <Reveal delay={0.14} className="lg:col-span-3">
            <h2 className="font-sans text-[0.6rem] font-medium uppercase tracking-eyebrow text-champagne">
              Contact
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-3.5 w-3.5 shrink-0 text-ivory/40" strokeWidth={1.4} aria-hidden="true" />
                <a
                  href={site.phoneHref}
                  className="link-underline text-[0.88rem] text-ivory/60 hover:text-ivory"
                >
                  {site.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-3.5 w-3.5 shrink-0 text-ivory/40" strokeWidth={1.4} aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all text-[0.88rem] text-ivory/60 hover:text-ivory"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-1 h-3.5 w-3.5 shrink-0 text-ivory/40" strokeWidth={1.4} aria-hidden="true" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.88rem] text-ivory/60 hover:text-ivory"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-ivory/40" strokeWidth={1.4} aria-hidden="true" />
                <span className="whitespace-pre-line text-[0.88rem] leading-relaxed text-ivory/60">
                  {site.location}
                </span>
              </li>
            </ul>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-[0.66rem] uppercase tracking-wide2 text-ivory/45 hover:text-champagne"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.72rem] text-ivory/40">
            © {year} {site.brand}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#faq"
              className="link-underline font-sans text-[0.72rem] text-ivory/40 hover:text-ivory/70"
            >
              Privacy Policy
            </a>
            <a
              href="#faq"
              className="link-underline font-sans text-[0.72rem] text-ivory/40 hover:text-ivory/70"
            >
              Terms
            </a>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 font-sans text-[0.66rem] uppercase tracking-wide2 text-ivory/45 transition-colors hover:text-ivory"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center border border-ivory/20 transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:border-ivory/50">
                <ArrowUp className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
