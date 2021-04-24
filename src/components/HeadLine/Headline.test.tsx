import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { HeadLine } from './HeadLine';

describe('<Headline />', () => {
  const component = (
    <HeadLine firstSentence="Let's plan your" boldSentence="saving goal." />
  );

  it('Should render Headline component', () => {
    const wrapper = shallow(component);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Must contain h2 and strong element', () => {
    const { queryByTestId } = render(component);
    const h2 = queryByTestId('headline');
    const strong = queryByTestId('headline').querySelector('strong');
    expect(h2).toBeTruthy();
    expect(strong).toBeTruthy();
  });

  it('Must contain a full sentence', () => {
    const { queryByTestId } = render(component);
    const headline = queryByTestId('headline');
    expect(headline.textContent).toBe("Let's plan your saving goal.");
  });
});
