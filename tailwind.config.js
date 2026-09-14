/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EF',
        linen: '#EFE9E1',
        beige: '#E3DACE',
        taupe: '#B8A894',
        stone: '#8C8578',
        charcoal: '#1C1A17',
        graphite: '#2E2B26',
        bronze: '#9A6E3F',
        champagne: '#C9A87C',
        terracotta: '#A9613F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
        wide2: '0.16em',
      },
      maxWidth: {
        shell: '1440px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        lift: '0 24px 60px -32px rgba(28, 26, 23, 0.32)',
        card: '0 2px 24px -12px rgba(28, 26, 23, 0.18)',
      },
    },
  },
  plugins: [],
};
