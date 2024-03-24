import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  link?: string;
}

export function Button({
  children,
  className = '',
  link,
  ...rest
}: ButtonProps) {
  if (link) {
    return (
      <Link to={link} className={className ?? 'w-fit'}>
        <button
          className={`mb-2 me-2  rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
          {...rest}
          type="button"
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`mb-2 me-2 w-fit  rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
      {...rest}
      type="button"
    >
      {children}
    </button>
  );
}
