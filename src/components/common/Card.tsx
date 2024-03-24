import { HTMLProps, ReactNode } from 'react';
interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, className, children, ...rest }: CardProps) {
  return (
    <div
      className={`${className} cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow hover:opacity-70`}
      {...rest}
    >
      <p className="py-2 text-xl font-bold text-gray-900">{title}</p>
      {children}
    </div>
  );
}
