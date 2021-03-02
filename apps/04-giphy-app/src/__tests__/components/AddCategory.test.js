import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('<AddCategory/>', () => {
  const setCategories = jest.fn();
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
    input.simulate("change", { target: { value }  });
    expect( wrapper.find('p').text().trim() ).toBe(value);
  })

  test('should not post the information with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
  })
  
  test('should call setCategories and clean input', () => {
    const input = wrapper.find('input');
    const value = "React Testing 2";
    input.simulate('change', {target: { value }});
    expect( wrapper.find('p').text().trim() ).toBe(value);

    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toBe('');
  })
  
  
})
