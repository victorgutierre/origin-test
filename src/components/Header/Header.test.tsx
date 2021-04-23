import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  const logo = './icons/logo.svg';

  it('Header component elements render', () => {
    const wrapper = mount(<Header logo={logo} />);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('Contains a tag image inside header', () => {
    const wrapper = shallow(<Header logo={logo} />);
    const img = <img src={logo} />;
    expect(wrapper.containsMatchingElement(img)).toBe(true);
  });

  it('Img src should be logo.svg', () => {
    const wrapper = shallow(<Header logo={logo} />);
    const img = wrapper.find('img');
    expect(img.props().src).toBe('./icons/logo.svg');
  });
});
