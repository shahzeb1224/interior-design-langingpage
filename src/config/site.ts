/**
 * Single source of truth for brand + contact details.
 * Swap these values to re-skin the demo for a real client.
 */

export const WHATSAPP_NUMBER = '15551234567'; // digits only, incl. country code
export const WHATSAPP_MESSAGE =
  "Hi, I'd like to discuss an interior design project. Could you please share more details?";

export const site = {
  brand: 'Aurelia Studio',
  brandMark: 'Aurelia',
  brandMarkAccent: 'Studio',
  tagline: 'Interior design, architecture, and transformations crafted with intention.',
  disciplines: 'Interior Design • Architecture • Renovation',
  phoneLabel: '+1 (555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'studio@aureliadesign.com',
  location: '218 Marlowe Avenue, Suite 4\nDesign District',
  hours: 'Mon – Fri, 9:00 – 18:00',
  founded: 2018,
} as const;

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Before & After', href: '#transformations' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
] as const;
