import { Meta, StoryObj } from '@storybook/react';
import { Disclosure } from './Disclosure';

export default {
  component: Disclosure,
} as Meta<typeof Disclosure>;

export const Default: StoryObj<typeof Disclosure> = {
  args: {
    summary: (
      <>
        <span className="text-blue-900 font-bold inline-block mr-2">Q.</span>
        What&rsquo;s your name?
      </>
    ),
    children: (
      <p>
        <span className="text-red-500 font-bold inline-block mr-2">A.</span> My
        name is yuichiyasui.
      </p>
    ),
  },
};
