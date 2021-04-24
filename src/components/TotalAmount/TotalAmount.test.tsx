import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { TotalAmount } from './TotalAmount';

describe('<TotalAmount />', () => {
  const actualDate = new Date();
  const year = actualDate.getFullYear();
  const month = actualDate.getMonth();
  const defaultYearPlanning = 4;

  const differenceYearsInMonths = defaultYearPlanning * 12;

  const component = (
    <TotalAmount
      month={month}
      year={year + defaultYearPlanning}
      differenceYearsInMonths={differenceYearsInMonths}
      defaultTotalAmount={25000}
    />
  );

  it('Should render the TotalAmount component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Date element must render', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-date');
    expect(date).toBeTruthy();
  });

  it('Date element text should be April 2025.', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-date');
    expect(date.textContent).toBe('April 2025.');
  });

  it('Total amount monthly amount element must render', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-monthly-amount');
    expect(date).toBeTruthy();
  });

  it('Total amount value element text should be April 2025', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-value');
    expect(date).toBeTruthy();
  });

  it('Total amount value element text should be $25,000.00', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-value');
    expect(date.textContent).toBe('$25,000.00');
  });

  it('Total amount years in months element must render', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('total-amount-yearsInMonths');
    expect(date).toBeTruthy();
  });
});
