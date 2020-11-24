import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';

const reviews = [
  {
    comment: `A movie that will take you to another world full of emotions.`,
    date: `2020-11-03T13:38:44.769Z`,
    id: 1,
    rating: 8.6,
    user: {
      id: 11,
      name: `Jack`
    }
  },
  {
    comment: `A movie that will take you to another world null of emotions.`,
    date: `2020-11-03T13:38:44.769Z`,
    id: 2,
    rating: 1.6,
    user: {
      id: 12,
      name: `John`
    }
  }
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
