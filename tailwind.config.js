const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('nth3n', '&:nth-child(3n)');
      addVariant('nth3n+1', '&:nth-child(3n+1)');
      addVariant('nth3n+2', '&:nth-child(3n+2)');
    }),
  ],
};
