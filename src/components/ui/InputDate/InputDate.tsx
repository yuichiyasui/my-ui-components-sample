import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, useRef } from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

import styles from './InputDate.module.css';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export const InputDate = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <span
        className={clsx(
          'border',
          'border-gray-300',
          'relative',
          'py-1',
          'px-2',
          'flex',
          'gap-x-1',
          'items-center',
          'bg-white',
          'rounded',
          className,
        )}
      >
        <CalendarIcon width={20} height={20} />
        <input
          {...props}
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          type="date"
          onBlur={() => {
            if (inputRef.current) {
              // Safariでpickerを閉じるため
              inputRef.current.type = 'text';
              inputRef.current.type = 'date';
            }
          }}
          className={clsx(styles.input)}
        />
      </span>
    );
  },
);

InputDate.displayName = 'InputDate';
