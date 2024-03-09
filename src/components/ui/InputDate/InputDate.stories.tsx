import { Meta, StoryObj } from '@storybook/react';
import { InputDate } from './InputDate';

type ComponentType = typeof InputDate;

const meta = {
  component: InputDate,
} satisfies Meta<ComponentType>;

export default meta;

type Story = StoryObj<ComponentType>;

export const Default = {} satisfies Story;
