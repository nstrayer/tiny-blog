import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'fancy-fallback': 'linear-gradient(169deg, #fffff1 0%, #ffd16b 104% 104%)',
        'fancy': 'linear-gradient(152deg in oklab, oklch(100% 0 82) -7% -7%, oklch(100% 0.15 68) 100%)',
        'dark': 'linear-gradient(152deg in oklab, oklch(4% 0.00 82) -7% -7%, oklch(33% 0.05 244) 122% 122%)'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'circle': '50%',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}
