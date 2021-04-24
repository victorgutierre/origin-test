import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  const amount = '25000';
  const setAmount = jest.fn();

  const component = <TextInput amount={amount} setAmount={setAmount} />;

  it('Should render the TextInput component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Text input currency must render', () => {
    const { queryByTestId } = render(component);
    const date = queryByTestId('text-input-currency');
    expect(date).toBeTruthy();
  });

  it('Change input value setAmount should be called', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('text-input-currency');
    fireEvent.change(element, { target: { value: '3000000' } });
    expect(setAmount).toHaveBeenCalled();
  });

  it('When Change input value should be called', () => {
    const { queryByTestId } = render(component);
    const element = queryByTestId('text-input-currency');
    fireEvent.change(element, { target: { value: '3000000' } });

    expect(element.getAttribute('value')).toBe('30,000.00');
  });
});
