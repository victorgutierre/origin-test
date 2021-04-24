import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(component);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('strong')).toHaveLength(1);
  });

  it('Must contain a full sentence', () => {
    const wrapper = shallow(component);
    expect(wrapper.text()).toBe("Let's plan your saving goal.");
  });
});
