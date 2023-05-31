/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-purple': '#0C1445',
        'medium-purple': '#471E54',
        'label-bg': '#08081B',
        'primary-blue': '#6366EE',
      },
      boxShadow: {
        blue: '0 0 4px 2px #6366EE',
      },
    },
  },
  plugins: [],
};
