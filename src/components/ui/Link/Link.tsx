import NextLink, { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & LinkProps;

export const Link = (props: Props) => {
  return <NextLink {...props} className="text-blue-500 hover:text-blue-800" />;
};
