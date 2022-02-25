const path = require('path');

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.css'],
    };

    return config;
  },
};
