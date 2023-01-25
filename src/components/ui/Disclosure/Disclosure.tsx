import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Disclosure.module.css';
import clsx from 'clsx';

type Props = {
  summary: string | ReactNode;
  children: ReactNode;
};

export const Disclosure = ({ summary, children }: Props) => {
  return (
    <details className="text-gray-700 shadow bg-white border-gray-300">
      <summary className="p-4 list-none flex [&::-webkit-details-marker]:hidden">
        <span className="font-bold">{summary}</span>
        <Image
          width={20}
          height={12}
          src="arrow.svg"
          alt=""
          className={clsx('ml-auto', styles.arrow)}
        />
      </summary>
      <div className="p-4 border-t border-gray-200">{children}</div>
    </details>
  );
};
