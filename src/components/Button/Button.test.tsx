import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('<Button />', () => {
  it('Should render the Button component', () => {
    const wrapper = shallow(<Button label="Confirm">Confirm</Button>);
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Label should be "Confirm" same as prop', () => {
    const wrapper = shallow(<Button label={'Confirm'} />);
    const button = wrapper.find('button');
    expect(button.text()).toBe('Confirm');
  });

  it('Label should be a string', () => {
    const wrapper = shallow(<Button label={'Confirm'} />);
    expect(typeof wrapper.props().children).toBe('string');
  });
});
