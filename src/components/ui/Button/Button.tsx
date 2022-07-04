import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

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
