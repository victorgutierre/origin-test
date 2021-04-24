import React from 'react';
import CurrencyInput from 'react-currency-input';

import { TextInputWrapper, Label, TextInputBox } from './TextInput.style';
interface Props {
  amount: string;
  setAmount: (amount: string) => void;
}

export const TextInput: React.FC<Props> = ({ amount, setAmount }) => {
  const changeAmount = (
    event: object,
    maskedValue: string,
    floatValue: string
  ) => {
    setAmount(floatValue);
  };

  return (
    <TextInputWrapper>
      <Label>Total Amount</Label>

      <TextInputBox>
        <span>$</span>
        <CurrencyInput
          data-testid="text-input-currency"
          value={amount}
          onChangeEvent={changeAmount}
        />
      </TextInputBox>
    </TextInputWrapper>
  );
};
