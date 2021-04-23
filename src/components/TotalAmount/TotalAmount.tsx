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
  defaultTotalAmount: number;
}

export const TotalAmount: React.FC<Props> = ({
  year,
  month,
  differenceYearsInMonths,
  defaultTotalAmount
}) => {
  const value = (defaultTotalAmount / differenceYearsInMonths).toString();
  const totalAmount = defaultTotalAmount.toString();
  const totalValue = money(value) || '0.00';

  return (
    <TotalAmountWrapper>
      <TotalAmountTopInfo>
        <TotalAmountDescription>Monthly amount</TotalAmountDescription>
        <TotalAmountValue>${totalValue}</TotalAmountValue>
      </TotalAmountTopInfo>

      <TotalAmountDetails>
        <p>
          You're planning <b>{differenceYearsInMonths} monthly deposits</b> to
          reach your <b>${money(totalAmount || '0.00')}</b> goal by{' '}
          <b>
            {months[month]} {year}.
          </b>
        </p>
      </TotalAmountDetails>
    </TotalAmountWrapper>
  );
};
