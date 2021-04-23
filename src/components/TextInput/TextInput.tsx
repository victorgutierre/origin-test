import React from 'react';
import { money } from '../../utils/utils';
import {
  TextInputWrapper,
  Label,
  TextInputBox,
  Input
} from './TextInput.style';

interface Props {
  amount: string;
  setAmount: () => void;
}

export const TextInput: React.FC<Props> = ({ amount, setAmount }) => {
  const changeAmount = (event) => {
    const { value } = event.target;
    console.log(value, money(value));
    event.target.value = money(value);
  };

  return (
    <TextInputWrapper>
      <Label>Total Amount</Label>

      <TextInputBox>
        <span>$</span>
        <Input
          type="text"
          onChange={event => changeAmount(event)}
          defaultValue={money(amount)}
        />
      </TextInputBox>
    </TextInputWrapper>
  );
};
