import React from 'react';
import renderer from 'react-test-renderer';
import {FormReview} from './form-review';

const noop = () => {};

it(`Should FormReview render correctly`, () => {
  const tree = renderer
  .create(<FormReview
    filmID={1}
    onSubmit={noop}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

