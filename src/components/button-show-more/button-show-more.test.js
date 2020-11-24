import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonShowMore} from './button-show-more';

const noop = () => {};

it(`Should ButtonShowMore render correctly`, () => {
  const tree = renderer
    .create(<ButtonShowMore
      countShownFilms={8}
      changeShownFilmsAction={noop}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
