import { ReactNode } from 'react';

interface Props {
  type: 'green' | 'gray' | 'red';
  children: ReactNode;
}

export function CardLabel({ type, children }: Props) {
  return (
    <div
      className={`${LABEL_VARIANTS[type]} m-1 inline-block size-fit rounded-lg p-2 text-xs font-semibold`}
    >
      <div>{children}</div>
    </div>
  );
}

const LABEL_VARIANTS = {
  green: 'bg-green-100 text-green-800',
  gray: 'bg-gray-100 text-gray-800',
  red: 'bg-red-100 text-red-800'
};
