import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { fireEvent, queryByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RangeInput } from './RangeInput';
import { months } from '../../utils/utils';

describe('<RangeInput />', () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();
  const defaultYearPlanning = 4;

  const differenceYearsInMonths = defaultYearPlanning * 12;
  const month = actualMonth;
  const year = actualFullYear + defaultYearPlanning;
  const yearsInMonths = differenceYearsInMonths;

  const setMonth = jest.fn();
  const setYear = jest.fn();
  const setYearsInMonths = jest.fn();

  const component = (
    <RangeInput
      actualYear={actualFullYear}
      actualMonth={actualMonth}
      month={month}
      year={year}
      differenceYearsInMonths={yearsInMonths}
      setMonth={setMonth}
      setYear={setYear}
      setYearsInMonths={setYearsInMonths}
    />
  );

  it('Should render the RangeInput component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Month element must render', () => {
    const { queryByTestId } = render(component);
    const month = queryByTestId('range-input-month');
    expect(month).toBeTruthy();
  });

  it('Month text must be same as converted', () => {
    const { queryByTestId } = render(component);
    const monthText = queryByTestId('range-input-month').textContent;
    expect(monthText).toBe(months[month]);
  });

  it('Year element must render', () => {
    const { queryByTestId } = render(component);
    const year = queryByTestId('range-input-year');
    expect(year).toBeTruthy();
  });

  it('Year text must be 2025', () => {
    const { queryByTestId } = render(component);
    const yearText = queryByTestId('range-input-year').textContent;
    expect(yearText).toBe('2025');
  });

  it('Click 1 time increase should call month and setYearsInMonths func', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-increase');
    fireEvent.click(element);

    expect(setMonth).toHaveBeenCalled();
    expect(setYear).not.toHaveBeenCalled();
    expect(setYearsInMonths).toHaveBeenCalled();
  });

  it('Click 1 time decrease should call month and setYearsInMonths func', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-decrease');
    fireEvent.click(element);

    expect(setMonth).toHaveBeenCalled();
    expect(setYear).not.toHaveBeenCalled();
    expect(setYearsInMonths).toHaveBeenCalled();
  });

  it('Click 1 time increase button value should be 4', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-increase');
    fireEvent.click(element, { target: { value: month + 1 } });

    expect(element.getAttribute('value')).toBe('4');
  });

  it('Click 1 time decrease button value should be 2', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-decrease');
    fireEvent.click(element, { target: { value: month - 1 } });

    expect(element.getAttribute('value')).toBe('2');
  });
});

describe('<RangeInput /> when month is current month', () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();

  const yearsInMonths = 4 * 12;

  const setMonth = jest.fn();
  const setYear = jest.fn();
  const setYearsInMonths = jest.fn();

  const component = (
    <RangeInput
      actualYear={actualFullYear}
      actualMonth={actualMonth}
      month={actualMonth}
      year={actualFullYear}
      differenceYearsInMonths={yearsInMonths}
      setMonth={setMonth}
      setYear={setYear}
      setYearsInMonths={setYearsInMonths}
    />
  );

  it('Decrease element should be disabled', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-decrease');
    expect(element.getAttribute('disabled')).toBe('');
  });
});

describe('<RangeInput /> when month is december (11)', () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();

  const yearsInMonths = 4 * 12;

  const setMonth = jest.fn();
  const setYear = jest.fn();
  const setYearsInMonths = jest.fn();

  const component = (
    <RangeInput
      actualYear={actualFullYear}
      actualMonth={actualMonth}
      month={11}
      year={actualFullYear}
      differenceYearsInMonths={yearsInMonths}
      setMonth={setMonth}
      setYear={setYear}
      setYearsInMonths={setYearsInMonths}
    />
  );

  it('Click 1 time increase button when month is december value should be 0', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-increase');
    fireEvent.click(element, { target: { value: 0 } });

    expect(element.getAttribute('value')).toBe('0');
  });
});

describe('<RangeInput /> when month is january (0)', () => {
  const actualDate = new Date();
  const actualFullYear = actualDate.getFullYear();
  const actualMonth = actualDate.getMonth();

  const yearsInMonths = 4 * 12;

  const setMonth = jest.fn();
  const setYear = jest.fn();
  const setYearsInMonths = jest.fn();

  const component = (
    <RangeInput
      actualYear={actualFullYear}
      actualMonth={actualMonth}
      month={0}
      year={actualFullYear}
      differenceYearsInMonths={yearsInMonths}
      setMonth={setMonth}
      setYear={setYear}
      setYearsInMonths={setYearsInMonths}
    />
  );

  it('Click 1 time decrease button when month is december value should be 11', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('range-input-decrease');
    fireEvent.click(element, { target: { value: 11 } });

    expect(element.getAttribute('value')).toBe('11');
  });
});
