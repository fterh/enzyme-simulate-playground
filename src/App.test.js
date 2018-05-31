import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {mount} from 'enzyme';

it('fires onKeyPress', () => {
  let wrapper = mount(<App />);

  console.log('/* Pre-simulation */');
  console.log(wrapper.state());
  console.log(wrapper.find('#foo').props());

  wrapper.find('#foo').simulate('keypress', {key: 'l'});

  console.log('/* Post-simulation */');
  console.log(wrapper.state());
  console.log(wrapper.find('#foo').props());

  expect(wrapper.state().value).toBe('pub');
  expect(wrapper.find('#foo').props().value).toBe('pub');
});

it('fires onChange', () => {
  let wrapper = mount(<App />);
  console.log('/* Pre-simulation */');
  console.log(wrapper.state());
  console.log(wrapper.find('#foo').props());

  wrapper.find('#foo').simulate('change', {target: {value: 'l'}});

  console.log('/* Post-simulation */');
  console.log(wrapper.state());
  console.log(wrapper.find('#foo').props());

  expect(wrapper.state().value).toBe('bar');
  expect(wrapper.find('#foo').props().value).toBe('bar');
});