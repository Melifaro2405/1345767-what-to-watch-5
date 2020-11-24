import React from 'react';
import renderer from 'react-test-renderer';
import {MovieReviews} from './movie-reviews';

const noop = () => {};

export const reviews = [
  {
    comment: `A movie that will take you to another world full of emotions.`,
    date: `2020-11-03T13:38:44.769Z`,
    id: 1,
    rating: 8.6,
    user: {
      id: 11,
      name: `Jack`
    }
  }
];

it(`Should MovieReviews render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews
          id={1}
          reviews={reviews}
          loadReviews={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
