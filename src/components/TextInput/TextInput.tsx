import React from 'react';
import { TextInputWrapper, Label, TextInputBox, Input } from './TextInput.style';

export const TextInput = () => {
  return (
    <TextInputWrapper>
      <Label>Total Amount</Label>

      <TextInputBox>
        <span>$</span>
        <Input type="text" />
      </TextInputBox>
    </TextInputWrapper>
  );
};
