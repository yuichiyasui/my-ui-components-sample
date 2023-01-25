import { Meta, StoryObj } from '@storybook/react';
import { DisclosureWithAnimation } from './DisclosureWithAnimation';

export default {
  component: DisclosureWithAnimation,
} as Meta<typeof DisclosureWithAnimation>;

export const Default: StoryObj<typeof DisclosureWithAnimation> = {
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
