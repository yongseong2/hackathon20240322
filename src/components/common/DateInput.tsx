import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import Icon from './Icon';

interface Props {
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DateInput({ value, onChange }: Props) {
  const [show, setShow] = useState(false);

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: '취소',
    maxDate: new Date('2030-01-01'),
    minDate: new Date('1950-01-01'),
    icons: {
      prev: () => <Icon name="AngleLeft" />,
      next: () => <Icon name="AngleRight" />
    },
    defaultDate: new Date(),
    language: 'ko',
    disabledDates: [],
    weekDays: ['월', '화', '수', '목', '금', '토', '일']
  };

  return (
    <div className="relative">
      <Datepicker
        classNames="w-fit absoulte "
        options={options}
        value={value}
        onChange={onChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
