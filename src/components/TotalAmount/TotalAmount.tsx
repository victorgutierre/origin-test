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
        <TotalAmountValue data-testid="total-amount-monthly-amount">
          ${totalValue}
        </TotalAmountValue>
      </TotalAmountTopInfo>

      <TotalAmountDetails>
        <p>
          You're planning{' '}
          <b data-testid="total-amount-yearsInMonths">
            {differenceYearsInMonths} monthly deposits
          </b>{' '}
          to reach your{' '}
          <b data-testid="total-amount-value">
            ${money(totalAmount || '0.00')}
          </b>{' '}
          goal by{' '}
          <b data-testid="total-amount-date">
            {months[month]} {year}.
          </b>
        </p>
      </TotalAmountDetails>
    </TotalAmountWrapper>
  );
};
