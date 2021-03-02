import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import {HookApp} from '../HookApp';

describe('<HookApp/>', () => {
  test('Should render successfully ', () => {
    const wrapper = shallow(<HookApp/>);
    expect(wrapper).toMatchSnapshot();
  })
})
