import { BeforeAfter } from './components/BeforeAfter';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InquiryForm } from './components/InquiryForm';
import { Navbar } from './components/Navbar';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { TrustStats } from './components/TrustStats';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-5 focus:py-3 focus:font-sans focus:text-[0.7rem] focus:uppercase focus:tracking-wide2 focus:text-ivory"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustStats />
        <Services />
        <Projects />
        <BeforeAfter />
        <Philosophy />
        <Process />
        <CTA />
        <Testimonials />
        <InquiryForm />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
