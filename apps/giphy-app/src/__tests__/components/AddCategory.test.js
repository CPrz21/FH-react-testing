import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('<AddCategory/>', () => {
  const setCategories = ()=>{};
  let wrapper = shallow(<AddCategory setCategories={setCategories}  />);

  beforeEach(()=>{
    wrapper = shallow(<AddCategory setCategories={setCategories}  />);
  });

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should change text', () => {
    const input = wrapper.find("input");
    const value = "React Testing";
    const newInput = input.simulate("change", { target: { value }  });
  })
  
  
})
