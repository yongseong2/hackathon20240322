import { ReactNode, useState } from 'react';
import Icon from './Icon';

interface Props {
  children: ReactNode;
  title: string;
  isFirst?: boolean;
}

export function Accordion({ title, isFirst, children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={`${isFirst ? 'rounded-t-xl' : ''} ${show ? 'bg-gray-100' : ''} flex w-full items-center justify-between gap-3 border border-gray-300 p-5 font-medium text-gray-500 hover:bg-gray-100 rtl:text-right`}
        >
          <span>{title}</span>

          {show ? (
            <Icon name="AngleDown" color={'rgb(107 114 128)'} />
          ) : (
            <Icon name="AngleUp" color={'rgb(107 114 128)'} />
          )}
        </button>
      </h2>
      <div className="">
        <div className={`${!show && 'hidden'} border border-gray-200 p-5`}>
          {children}
        </div>
      </div>
    </div>
  );
}
