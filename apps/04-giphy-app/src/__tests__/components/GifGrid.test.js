import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifGrid} from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid />', () => {
  
  test('should show component correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category="joke" />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should show items when images are loaded from useFetchGifs', () => {
    const gifs = [{
        id:'ABC',
        url: 'https://localhost/any/thing.jpg',
        title: 'Invisible Image'
      },
      {
        id:'CBA',
        url: 'https://localhost/any/thing.jpg',
        title: 'Invisible Image'
      }
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow( < GifGrid category="Jest" /> );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })
  
  
})
