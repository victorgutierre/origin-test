import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('<Button />', () => {
  it('Label should be "Confirm" same as prop', () => {
    const wrapper = shallow(<Button label={'Confirm'} />);
    expect(wrapper.props().children).toBe('Confirm');
  });
});
