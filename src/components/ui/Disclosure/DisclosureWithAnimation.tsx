import Image from 'next/image';
import { ReactNode, useId, useRef, useState } from 'react';
import clsx from 'clsx';

type Props = {
  summary: string | ReactNode;
  children: ReactNode;
};

export const DisclosureWithAnimation = ({ summary, children }: Props) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!(buttonRef.current && panelRef.current && ref.current)) return;
    const titleHeight = buttonRef.current.offsetHeight;
    const panelHeight = panelRef.current.offsetHeight;
    const options: KeyframeAnimationOptions = {
      duration: 500,
      easing: 'ease-out',
      fill: 'forwards',
    };
    ref.current.style.height = `${ref.current.offsetHeight}px`;

    if (open) {
      const animation = ref.current.animate(
        { height: `${titleHeight}px` },
        options,
      );
      setOpen(false);
      animation.onfinish = () => setVisible(false);
      return;
    }

    ref.current.animate({ height: `${titleHeight + panelHeight}px` }, options);
    setVisible(true);
    setOpen(true);
  };

  return (
    <div
      ref={ref}
      className="text-gray-700 shadow bg-white border-gray-300 overflow-hidden"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={toggle}
        ref={buttonRef}
        className="flex p-4 w-full items-center"
      >
        <span className="font-bold">{summary}</span>
        <Image
          width={20}
          height={12}
          src="arrow.svg"
          alt=""
          className={clsx([
            'ml-auto',
            'transition-transform',
            'duration-500',
            open && 'rotate-180',
          ])}
        />
      </button>
      <div
        ref={panelRef}
        id={id}
        aria-hidden={!open}
        className={clsx([
          'p-4',
          'border-t',
          'border-gray-200',
          'transition-opacity',
          'duration-500',
          !open && 'opacity-0',
          !visible && ['invisible', 'absolute'],
        ])}
      >
        {children}
      </div>
    </div>
  );
};
