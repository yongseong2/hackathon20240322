import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Button } from './Button';

interface ButtonGroupProps {
  contents: (string | number)[];
}

const ButtonGroup = ({ contents, ...rest }: ButtonGroupProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  if (contents.length === 1) {
    return <Button>{contents[0]}</Button>;
  }

  const leftBorder = 'rounded-s-lg border-l';
  const rightBorder = 'rounded-e-lg';

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {contents.map((content, index) => (
        <button
          key={uuid()}
          type="button"
          className={`${index === 0 ? leftBorder : index === contents.length - 1 ? rightBorder : ''} border-y border-r border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 ${activeIndex === index ? 'bg-gray-300' : 'bg-white'} transition duration-300`}
          {...rest}
          onClick={() => handleClick(index)}
        >
          {content}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
