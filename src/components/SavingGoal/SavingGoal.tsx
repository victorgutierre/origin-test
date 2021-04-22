import React from 'react';
import { TextInput, RangeInput, TotalAmount, Button } from './../index';
import houseImg from './../../icons/academy.svg';
import {
  SavingGoalBox,
  Header,
  Title,
  FieldsWrapper
} from './SavingGoal.style';

export const SavingGoal = () => {
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
        <TextInput />
        <RangeInput />
      </FieldsWrapper>
      <TotalAmount />
      <Button />
    </SavingGoalBox>
  );
};
