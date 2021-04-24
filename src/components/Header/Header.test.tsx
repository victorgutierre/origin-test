import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  const logo = './icons/logo.svg';
  const component = <Header logo={logo} />;

  it('Should render Header component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Header element should render', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('header')).toBeTruthy();
  });

  it('img element should render', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('header-logo')).toBeTruthy();
  });

  it('Img src should be logo.svg', () => {
    const { queryByTestId } = render(component);
    const img = queryByTestId('header-logo');
    const imgSrc = img.getAttribute('src');
    expect(img).toHaveProperty('src');
    expect(imgSrc).toBe(logo);
  });
});
