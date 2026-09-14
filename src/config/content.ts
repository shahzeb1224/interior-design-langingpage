import { images } from './images';

export type Stat = {
  value: number | null;
  suffix: string;
  label: string;
  /** Shown instead of a counter when `value` is null. */
  staticValue?: string;
};

export const stats: Stat[] = [
  { value: 120, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: null, suffix: '', label: 'Residential & Commercial', staticValue: 'Both' },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: 'sofa' | 'compass' | 'hammer' | 'brush' | 'ruler' | 'building';
};

export const services: Service[] = [
  {
    id: 'interior-design',
    number: '01',
    title: 'Interior Design',
    description:
      'Complete interior concepts tailored to your lifestyle, space, and personality.',
    image: images.services.interior,
    icon: 'sofa',
  },
  {
    id: 'architecture',
    number: '02',
    title: 'Architecture',
    description:
      'Thoughtful architectural solutions balancing function, form, and timeless design.',
    image: images.services.architecture,
    icon: 'compass',
  },
  {
    id: 'renovation',
    number: '03',
    title: 'Renovation',
    description: 'Transform outdated spaces into modern, functional environments.',
    image: images.services.renovation,
    icon: 'hammer',
  },
  {
    id: 'painting',
    number: '04',
    title: 'Painting & Finishing',
    description:
      'Premium colors, textures, and finishes that complete the character of every space.',
    image: images.services.painting,
    icon: 'brush',
  },
  {
    id: 'space-planning',
    number: '05',
    title: 'Space Planning',
    description: 'Smart layouts designed to maximize comfort, flow, and usability.',
    image: images.services.planning,
    icon: 'ruler',
  },
  {
    id: 'commercial-design',
    number: '06',
    title: 'Commercial Design',
    description:
      'Professional environments designed to strengthen your brand and improve customer experience.',
    image: images.services.commercial,
    icon: 'building',
  },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  year: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 'modern-residence',
    name: 'Modern Residence',
    location: 'Hillcrest District',
    category: 'Residential Interior',
    year: '2025',
    description:
      'A family home reworked around light, with open sightlines and a warm, restrained material palette.',
    image: images.projects.residence,
  },
  {
    id: 'contemporary-villa',
    name: 'Contemporary Villa',
    location: 'Coastal Ridge',
    category: 'Architecture',
    year: '2025',
    description:
      'Clean volumes and deep terraces designed to frame the landscape rather than compete with it.',
    image: images.projects.villa,
  },
  {
    id: 'minimalist-apartment',
    name: 'Minimalist Apartment',
    location: 'Central Quarter',
    category: 'Interior Design',
    year: '2024',
    description:
      'Every square metre earns its place — joinery, storage, and light doing several jobs at once.',
    image: images.projects.apartment,
  },
  {
    id: 'luxury-living-room',
    name: 'Luxury Living Room',
    location: 'Parkside Terrace',
    category: 'Renovation',
    year: '2024',
    description:
      'A dated formal lounge opened up into a generous, tactile space for evenings and gatherings.',
    image: images.projects.living,
  },
  {
    id: 'boutique-office',
    name: 'Boutique Office',
    location: 'Design District',
    category: 'Commercial Design',
    year: '2025',
    description:
      'A studio workspace built for focus, with acoustic softness and a calm, confident brand presence.',
    image: images.projects.office,
  },
  {
    id: 'restaurant-interior',
    name: 'Restaurant Interior',
    location: 'Old Market Lane',
    category: 'Hospitality',
    year: '2024',
    description:
      'Layered lighting and honest materials give a small dining room real atmosphere after dark.',
    image: images.projects.restaurant,
  },
];

export type Transformation = {
  id: string;
  label: string;
  title: string;
  scope: string;
  duration: string;
  description: string;
  before: string;
  after: string;
};

export const transformations: Transformation[] = [
  {
    id: 'living-room',
    label: 'Living Room',
    title: 'Closed, Dark Lounge → Open Living Space',
    scope: 'Full interior redesign, joinery, lighting',
    duration: '9 weeks',
    description:
      'We removed a partition wall, rebuilt the lighting plan, and replaced heavy finishes with warm neutrals and natural oak.',
    before: images.transformations.livingBefore,
    after: images.transformations.livingAfter,
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'Tired Galley → Working Family Kitchen',
    scope: 'Layout, cabinetry, stone surfaces',
    duration: '7 weeks',
    description:
      'A reworked layout gained a full island, proper prep zones, and daylight from two directions.',
    before: images.transformations.kitchenBefore,
    after: images.transformations.kitchenAfter,
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    title: 'Cluttered Room → Calm Retreat',
    scope: 'Built-in storage, textiles, finishes',
    duration: '5 weeks',
    description:
      'Concealed storage cleared the floor, then soft plaster walls and layered textiles did the rest.',
    before: images.transformations.bedroomBefore,
    after: images.transformations.bedroomAfter,
  },
  {
    id: 'commercial',
    label: 'Commercial Space',
    title: 'Empty Shell → Branded Workspace',
    scope: 'Space planning, fit-out, brand detailing',
    duration: '12 weeks',
    description:
      'We planned the floorplate around how the team actually works, then detailed it to carry the brand quietly.',
    before: images.transformations.commercialBefore,
    after: images.transformations.commercialAfter,
  },
];

export const principles = [
  {
    number: '01',
    title: 'Function',
    description: 'Beautiful spaces should work beautifully.',
    detail:
      'We start with how a room is used at 7am and at 9pm — circulation, storage, light, and sound — before a single finish is chosen.',
  },
  {
    number: '02',
    title: 'Character',
    description: 'Every space should reflect the people who inhabit it.',
    detail:
      'Your habits, collections, and the way you host shape the palette. The result should look like you, not like a showroom.',
  },
  {
    number: '03',
    title: 'Detail',
    description: 'The smallest details often create the strongest impression.',
    detail:
      'Shadow gaps, door hardware, the edge of a stone counter. These are the things you touch every day, so we draw them properly.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Tell us about your space, lifestyle, goals, and vision.',
    meta: 'Consultation & site visit',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We develop concepts, layouts, materials, colors, and visual direction.',
    meta: 'Concept & material direction',
  },
  {
    number: '03',
    title: 'Refine',
    description: 'We collaborate with you to perfect every important detail.',
    meta: 'Drawings, samples & costing',
  },
  {
    number: '04',
    title: 'Transform',
    description: 'Our team brings the approved vision into reality.',
    meta: 'Execution & handover',
  },
] as const;

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  project: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The team completely transformed our home. They understood what we wanted before we even knew how to explain it.',
    name: 'Sarah M.',
    project: 'Residential Interior Project',
    location: 'Hillcrest District',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'What impressed me most was the discipline. Every drawing, every sample, every site visit was on time and considered.',
    name: 'Daniel R.',
    project: 'Full Home Renovation',
    location: 'Parkside Terrace',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Our clients notice the space before they notice anything else now. It changed how the business feels to walk into.',
    name: 'Amara O.',
    project: 'Commercial Fit-Out',
    location: 'Design District',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'They worked with the apartment we already had instead of gutting it, and it still feels like an entirely new place.',
    name: 'Elena V.',
    project: 'Apartment Redesign',
    location: 'Central Quarter',
    rating: 5,
  },
  {
    id: 't5',
    quote:
      'The finish quality is what stands out a year later. Nothing has moved, nothing has chipped, nothing feels temporary.',
    name: 'Marcus T.',
    project: 'Kitchen & Living Renovation',
    location: 'Coastal Ridge',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'How does the consultation process work?',
    a: 'We start with a short call to understand what you have in mind, then visit the space or review your plans and photographs. After that you receive a written summary covering scope, a realistic timeline, and an investment range — before any design work begins.',
  },
  {
    q: 'Do you work on both residential and commercial projects?',
    a: 'Yes. Roughly two thirds of our work is residential — homes, apartments, and villas — and the rest is commercial: offices, studios, retail, and hospitality interiors.',
  },
  {
    q: 'Can you work with an existing space?',
    a: 'Most of our projects are existing spaces. We survey what is already there, keep what is worth keeping, and focus the budget where it changes the experience most.',
  },
  {
    q: 'Do you provide renovation and execution services?',
    a: 'We do. You can engage us for design only and use your own contractor, or have us manage execution end to end with our trusted trades and site supervision.',
  },
  {
    q: 'How long does an interior design project take?',
    a: 'A single-room redesign typically runs 5 to 8 weeks. A full home is usually 3 to 6 months including construction. Commercial fit-outs depend on approvals, and we map the schedule out before we start.',
  },
  {
    q: 'What budget should I expect?',
    a: 'Refreshes of a single room generally begin around $5,000. Full renovations with joinery and finishes typically sit between $15,000 and $30,000 per key space. We tell you honestly at the consultation stage what your goals will cost.',
  },
  {
    q: 'Can you work remotely or outside your local area?',
    a: 'Yes. Remote projects run on measured drawings, video walkthroughs, and a documented specification package, with local trades handling installation. We travel for larger projects.',
  },
] as const;

export const projectTypes = [
  'Interior Design',
  'Architecture',
  'Renovation',
  'Painting & Finishing',
  'Commercial Design',
  'Other',
] as const;

export const budgetRanges = [
  'Under $5,000',
  '$5,000–$15,000',
  '$15,000–$30,000',
  '$30,000+',
  'Not Sure Yet',
] as const;

export const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const footerServices = [
  { label: 'Interior Design', href: '#services' },
  { label: 'Architecture', href: '#services' },
  { label: 'Renovation', href: '#services' },
  { label: 'Painting', href: '#services' },
  { label: 'Commercial Design', href: '#services' },
] as const;
