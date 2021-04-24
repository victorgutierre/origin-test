import React, { useState } from 'react';
import { TextInput, RangeInput, TotalAmount, Button } from './../index';
import houseImg from './../../icons/academy.svg';
import {
  SavingGoalBox,
  Header,
  Title,
  FieldsWrapper
} from './SavingGoal.style';

export const SavingGoal = () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();
  const defaultYearPlanning = 4;

  const differenceYearsInMonths = defaultYearPlanning * 12;

  const [month, setMonth] = useState(actualMonth);
  const [year, setYear] = useState(actualFullYear + defaultYearPlanning);
  const [yearsInMonths, setYearsInMonths] = useState(differenceYearsInMonths);

  const defaultTotalAmount = '25000';
  const [amount, setAmount] = useState(defaultTotalAmount);

  return (
    <SavingGoalBox>
      <Header>
        <img src={houseImg}></img>
        <Title>
          <p>Buy a house</p>
          <span>Saving goal</span>
        </Title>
      </Header>

      <FieldsWrapper>
        <TextInput amount={amount} setAmount={setAmount} />

        <RangeInput
          actualYear={actualFullYear}
          actualMonth={actualMonth}
          month={month}
          year={year}
          differenceYearsInMonths={yearsInMonths}
          setMonth={setMonth}
          setYear={setYear}
          setYearsInMonths={setYearsInMonths}
        />
      </FieldsWrapper>
      <TotalAmount
        month={month}
        year={year}
        differenceYearsInMonths={yearsInMonths}
        defaultTotalAmount={amount}
      />
      <Button label={'Confirm'} />
    </SavingGoalBox>
  );
};
