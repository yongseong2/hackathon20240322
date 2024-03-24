import { forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return <input ref={ref} className="w-full border-2" {...rest} />;
});

Input.displayName = 'Input';

export default Input;
