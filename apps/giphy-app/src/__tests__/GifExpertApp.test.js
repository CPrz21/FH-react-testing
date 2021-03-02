import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifExpertApp} from "../GifExpertApp";

describe('<GifExpertApp />', () => {
  
  test('should show component correctly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should show category list', () => {
    const categories = ['developer', 'lol'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
})
