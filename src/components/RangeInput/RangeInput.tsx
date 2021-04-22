import React, { useState } from 'react';
import {
  RangeInputWrapper,
  Label,
  RangeInputBox,
  Text,
  Decrease,
  Increase
} from './RangeInput.style';

export const RangeInput = () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();
  const defaultYearPlanning = 4;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const [month, setMonth] = useState(actualMonth);
  const [year, setYear] = useState(actualFullYear + defaultYearPlanning);

  const increase = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const decrease = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const disableButton = () => month === actualMonth && year === actualFullYear;

  return (
    <RangeInputWrapper>
      <Label>Reach goal by</Label>

      <RangeInputBox>
        <Decrease onClick={() => decrease()} disabled={disableButton()} />
        <Text>
          <b>{months[month]}</b> {year}
        </Text>
        <Increase onClick={() => increase()} />
      </RangeInputBox>
    </RangeInputWrapper>
  );
};
