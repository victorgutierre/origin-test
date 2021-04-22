import React from 'react';
import {
  TotalAmountWrapper,
  TotalAmountTopInfo,
  TotalAmountDetails,
  TotalAmountDescription,
  TotalAmountValue
} from './TotalAmount.style';

export const TotalAmount = () => {
  return (
    <TotalAmountWrapper>
      <TotalAmountTopInfo>
        <TotalAmountDescription>Monthly amount</TotalAmountDescription>
        <TotalAmountValue>$521</TotalAmountValue>
      </TotalAmountTopInfo>

      <TotalAmountDetails>
        <p>
          You're planning <b>48 monthly deposits</b> to reach your
          <b>$ 25,000</b> goal by <b>October 2020.</b>
        </p>
      </TotalAmountDetails>
    </TotalAmountWrapper>
  );
};
