import React, { useEffect } from 'react';
import { months } from '../../utils/utils';
import {
  RangeInputWrapper,
  Label,
  RangeInputBox,
  Text,
  Decrease,
  Increase
} from './RangeInput.style';
interface Props {
  actualMonth: number;
  actualYear: number;
  month: number;
  year: number;
  differenceYearsInMonths: number;
  setMonth: (arg: number) => void;
  setYear: (arg: number) => void;
  setYearsInMonths: (arg: number) => void;
}

export const RangeInput: React.FC<Props> = ({
  actualMonth,
  actualYear,
  month,
  year,
  differenceYearsInMonths,
  setMonth,
  setYear,
  setYearsInMonths
}) => {
  const increase = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }

    setYearsInMonths(differenceYearsInMonths + 1);
  };

  const decrease = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }

    if (differenceYearsInMonths > 1) {
      setYearsInMonths(differenceYearsInMonths - 1);
    }
  };

  const disableDecrease = () => month === actualMonth && year === actualYear;

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 37 && !disableDecrease()) {
      decrease();
    } else if (e.keyCode === 39) {
      increase();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <RangeInputWrapper>
      <Label>Reach goal by</Label>

      <RangeInputBox>
        <Decrease
          data-testid="range-input-decrease"
          onClick={() => decrease()}
          value={month}
          disabled={disableDecrease()}
        />
        <Text>
          <b data-testid="range-input-month">{months[month]}</b>{' '}
          <span data-testid="range-input-year">{year}</span>
        </Text>
        <Increase
          data-testid="range-input-increase"
          value={month}
          onClick={() => increase()}
        />
      </RangeInputBox>
    </RangeInputWrapper>
  );
};
