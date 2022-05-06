import type { StorybookViteConfig } from '@storybook/builder-vite';
import path from 'path';

const config: StorybookViteConfig = {
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  async viteFinal(config) {
    config.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    };

    return config;
  },
};

export default config;
