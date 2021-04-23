import React from 'react';
import { months } from './../../utils/months';
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

    setYearsInMonths(differenceYearsInMonths - 1);
  };

  const disableButton = () => month === actualMonth && year === actualYear;

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
