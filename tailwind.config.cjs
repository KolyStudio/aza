/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'xz': '100px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-green': 'linear-gradient(0deg, #22d738, #a8f148)',
      },
      boxShadow: {
        'green': '0 11px 26px #a5ebf1',
      },
      textShadow: {
        'green': '0 2px 5px #3ccd1e',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '256': '256ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    
        backgroundImage: {
          'banner': "url('/banner.webp')",
        },
    },
  },
  plugins: [],
}
