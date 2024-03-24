import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function CheckBox({ label, id, ...rest }: Props) {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={id}
        type="checkbox"
        className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        {...rest}
      />
      <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
}
