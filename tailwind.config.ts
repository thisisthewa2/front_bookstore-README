import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}`]: `${i / 16}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(500);

const config: Config = {
  zIndex: {
    base: '1',
    nav: '2',
    popup: '999',
    floating: '1000',
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: { min: '360px', max: '767px' },
      tablet: { min: '768px', max: '1199px' },
      pc: '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    fontSize: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
    },
    fontWeight: {
      light: '400',
      normal: '500',
      bold: '700',
    },
    spacing: PX_ENTRIES,
    colors: {
      transparent: 'transparent',
      red: 'rgb(var(--red) / <alpha-value>)',
      green: {
        DEFAULT: 'rgb(var(--green) / <alpha-value>)',
        light: 'rgb(var(--green-light) / <alpha-value>)',
      },
      black: 'rgb(var(--black) / <alpha-value>)',
      white: 'rgb(var(--white) / <alpha-value>)',
      gray: {
        1: 'rgb(var(--gray-1) / <alpha-value>)',
        2: 'rgb(var(--gray-2) / <alpha-value>)',
        3: 'rgb(var(--gray-3) / <alpha-value>)',
        4: 'rgb(var(--gray-4) / <alpha-value>)',
        5: 'rgb(var(--gray-5) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
