import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const LoggedIn: ComponentStoryObj<typeof Header> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: ComponentStoryObj<typeof Header> = {};
