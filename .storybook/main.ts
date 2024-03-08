import path from 'node:path';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      define: {
        global: 'window',
        'process.env': {},
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
    });
  },
  docs: {
    autodocs: true,
  },
} satisfies StorybookConfig;

export default config;
