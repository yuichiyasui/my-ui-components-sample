import { ComponentProps } from 'react';

type Props = {
  size: 'small' | 'large';
  label: string;
  primary: boolean;
} & ComponentProps<'button'>;

export const Button = ({ label, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${className ? className : ''} py-2 px-4 rounded shadow`}
    >
      {label}
    </button>
  );
};
