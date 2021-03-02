import { shallow } from 'enzyme';
import React from 'react';
import "@testing-library/jest-dom"
import GiftGridItem from "../../components/GifGridItem";

describe('<GiftGridItem/>', () => {
  const imageUrl = "https://i1.sndcdn.com/artworks-000215280715-a5fqyn-t500x500.jpg";
  const title = "Title Test";
  const wrapper = shallow(<GiftGridItem url={imageUrl} title={title} />)

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should have the correct title', () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(title);
  })
  
  test('should have image url and alt from props', () => {
    const { src, alt } = wrapper.find('img').props();
    expect(src).toBe(imageUrl);
    expect(alt).toBe(title);
  })
  
  test('should have animate__fadeIn class', () => {
    const div = wrapper.find('div').prop("className").split(" ");
    expect(div.includes("animate__fadeIn")).toBe(true);
    
  })
  
})
