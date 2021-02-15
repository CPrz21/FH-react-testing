import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';


describe('<CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);
  
  // This execute something in every each test
  beforeEach(()=>{
    wrapper = shallow(<CounterApp />);
  });

  test('should show CounterApp component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should show prop value passed', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const getValue = wrapper.find("h2").text();
    expect(+getValue).toBe(value)
    
  })
  
  test('should show default value correctly', () => {
    const defaultValue = 10;
    const getDefaultValue = wrapper.find("h2").text();
    expect(+getDefaultValue).toBe(defaultValue);
  })

  test('should increase with +1 button', () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(+counterText).toBe(11);
  })
  
  test('should decrease with -1 button', () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(+counterText).toBe(9);
  })
  
  test('should reset value', () => {
    const value = 21;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text();
    expect(+counterText).toBe(value);
  })
  
  
  
})
