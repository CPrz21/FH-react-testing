import React from 'react';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import PrimeraApp from '../PrimeraApp';

describe('<PrimeraApp />', () => {
  const greeting = "Hello Test"
  // test(`should show a message: ${greeting}`, () => {
  //   const { getByText } = render(<PrimeraApp saludo={greeting}  />);
  //   expect(getByText(greeting)).toBeInTheDocument();
  // })
  test('should show correctly PrimeraApp component', () => {
    const wrapper = shallow(<PrimeraApp saludo={greeting}  />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should show props ["saludo", "subtitulo"] correctly', () => {
    const title = "Hello React User";
    const subtitle = "React Devs";

    const wrapper = shallow( 
      <PrimeraApp
        saludo={title}
        subtitulo={subtitle}
      />
    );

    // const titleText = wrapper.find("h1").text();
    const titleText = wrapper.find("#greeting-id").text();
    const subtitleText = wrapper.find("p").text();
    
    expect(titleText).toBe(title);
    expect(subtitleText).toBe(subtitle);
  })
  
  
  
})
