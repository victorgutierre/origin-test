import React from 'react';
import {
  RangeInputWrapper,
  Label,
  RangeInputBox,
  Text,
  Decrease,
  Increase
} from './RangeInput.style';

export const RangeInput = () => {
  return (
    <RangeInputWrapper>
      <Label>Reach goal by</Label>

      <RangeInputBox>
        <Decrease />
        <Text>
          <b>October</b> 2021
        </Text>
        <Increase />
      </RangeInputBox>
    </RangeInputWrapper>
  );
};
