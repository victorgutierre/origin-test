import React from 'react';
import { TextInput, RangeInput, TotalAmount, Button } from './../index';
import houseImg from './../../icons/academy.svg';
import { SavingGoalBox } from './SavingGoal.style';

export const SavingGoal = () => {
  return (
    <SavingGoalBox>
      <div>
        <img src={houseImg}></img>
        <p>Buy a house</p>
        <p>Saving goal</p>
      </div>

      <TextInput />
      <RangeInput />
      <TotalAmount />
      <Button />
    </SavingGoalBox>
  );
};
