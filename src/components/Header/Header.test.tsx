import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  const logo = './icons/logo.svg';
  const component = <Header logo={logo} />;

  it('Should render Header component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Header component elements render', () => {
    const wrapper = shallow(component);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('Contains a tag image inside header', () => {
    const wrapper = shallow(component);
    const img = <img src={logo} />;
    expect(wrapper.containsMatchingElement(img)).toBe(true);
  });

  it('Img src should be logo.svg', () => {
    const wrapper = shallow(component);
    const img = wrapper.find('img');
    expect(img.props().src).toBe('./icons/logo.svg');
  });
});
