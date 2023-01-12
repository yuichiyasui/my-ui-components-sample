import { ComponentProps } from 'react';

type Props = {
  size?: 'small' | 'large';
  primary?: boolean;
} & ComponentProps<'button'>;

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${className ? className : ''} py-2 px-4 rounded shadow`}
    >
      {children}
    </button>
  );
};
