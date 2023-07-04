import defaultTheme from 'tailwindcss/defaultTheme';


export const gradient_light = `oklch(100% 0.03 95 / 74%)`;
const gradient_light_center = `oklch(67% 0.21 77 / 43%)`;
export const gradient_dark = `oklch(3% 0.40 222)`;
const gradient_dark_center = `oklch(3% 0.50 313)`;

const make_gradient = (center, outer) => `radial-gradient(
  farthest-corner ellipse at 0% 0% in oklab, 
  ${outer} 0%, 
  ${center} 100%
)`;


const make_bg_pattern = (fill, opacity) =>  `url(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='${fill}' fill-opacity='${opacity}'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`


const fancy_gradient = make_gradient(gradient_light_center, gradient_light);
const fancy_gradient_dark = make_gradient(gradient_dark_center, gradient_dark);


const hexagon_bg  = make_bg_pattern(gradient_light, 0.8);
const hexagon_bg_dark  = make_bg_pattern(gradient_dark, 0.8);


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
        "hexagons": `${hexagon_bg}, ${fancy_gradient}`,
        "hexagons-dark": `${hexagon_bg_dark}, ${fancy_gradient_dark}`,
        "circuit-dark": `var(--bg-pattern)`,
      },
      colors: {
        "dark": gradient_dark,
        "light": gradient_light,
        "main": {
          "50": "#FFFBEA",
          "100": "#FFF3C4",
          "200": "#FCE588",
          "300": "#FADB5F",
          "400": "#F7C948",
          "500": "#F0B429",
          "600": "#DE911D",
          "700": "#CB6E17",
          "800": "#B44D12",
          "900": "#8D2B0B"
        }
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
