import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
