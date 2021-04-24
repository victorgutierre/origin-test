import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('Should render the Button component', () => {
    const wrapper = shallow(<Button label="Confirm">Confirm</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Label should be "Confirm" same as prop', () => {
    const { queryByTestId } = render(<Button label={'Confirm'} />);
    expect(queryByTestId('button').textContent).toBe('Confirm');
  });

  it('Label should be a string', () => {
    const { queryByTestId } = render(<Button label={'Confirm'} />);
    expect(typeof queryByTestId('button').textContent).toBe('string');
  });
});
