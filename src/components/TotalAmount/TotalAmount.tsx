import React from 'react';
import { months, money } from '../../utils/utils';
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
  defaultTotalAmount: string;
}

export const TotalAmount: React.FC<Props> = ({
  year,
  month,
  differenceYearsInMonths,
  defaultTotalAmount
}) => {
  const totalValue = money(defaultTotalAmount / differenceYearsInMonths); 

  return (
    <TotalAmountWrapper>
      <TotalAmountTopInfo>
        <TotalAmountDescription>Monthly amount</TotalAmountDescription>
        <TotalAmountValue>${totalValue}</TotalAmountValue>
      </TotalAmountTopInfo>

      <TotalAmountDetails>
        <p>
          You're planning <b>{differenceYearsInMonths} monthly deposits</b> to
          reach your <b>${money(defaultTotalAmount)}</b> goal by{' '}
          <b>
            {months[month]} {year}.
          </b>
        </p>
      </TotalAmountDetails>
    </TotalAmountWrapper>
  );
};
