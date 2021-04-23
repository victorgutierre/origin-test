import React from 'react';
import { months } from './../../utils/months';
import {
  TotalAmountWrapper,
  TotalAmountTopInfo,
  TotalAmountDetails,
  TotalAmountDescription,
  TotalAmountValue
} from './TotalAmount.style';

interface Props {
  year: number;
  month: number;
  differenceYearsInMonths: number;
}

export const TotalAmount: React.FC<Props> = ({
  year,
  month,
  differenceYearsInMonths
}) => {

  return (
    <TotalAmountWrapper>
      <TotalAmountTopInfo>
        <TotalAmountDescription>Monthly amount</TotalAmountDescription>
        <TotalAmountValue>$521</TotalAmountValue>
      </TotalAmountTopInfo>

      <TotalAmountDetails>
        <p>
          You're planning <b>{differenceYearsInMonths} monthly deposits</b> to
          reach your
          <b>$ 25,000</b> goal by{' '}
          <b>
            {months[month]} {year}.
          </b>
        </p>
      </TotalAmountDetails>
    </TotalAmountWrapper>
  );
};
