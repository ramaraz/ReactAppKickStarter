import React from 'react';
import Items from './Items';
import renderer from 'react-test-renderer';

const props ={
    items: ['item1','item2','item3','item4']
}
//TODO : change this to BDD
describe('<Items />',() =>{
  it('renders items present in th props',() =>{
    const items = renderer
    .create(<Items {...props} />)
    .toJSON();
    expect(items).toMatchSnapshot()
  })
})

