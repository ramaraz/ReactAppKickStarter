import React from 'react';
import Counter from './Counter';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const counter = renderer
    .create(<Counter clickCount='122' />)
    .toJSON();
  expect(counter).toMatchSnapshot();
});