/* eslint-disable @typescript-eslint/no-require-imports */
import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: '#6b4021',
      },
    },
  },
  plugins: [require('tailwindcss-multi'), require('tailwindcss-animated')],
};
export default config;
