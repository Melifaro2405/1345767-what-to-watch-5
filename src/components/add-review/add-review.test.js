import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import AddReview from './add-review';

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../form-review/form-review`, () => `FormReview`);

const film = {
  id: 1,
  preview: {
    src: `test`,
    title: `test`
  },
  moreInfo: {
    backgroundSrc: `test`,
    backgroundColor: `test`,
    posterSrc: `test`,
    genre: `test`,
    releaseDate: 2014,
    playPreviewSrc: `test`,
    playVideoSrc: `test`,
    isAddToMyList: false
  },
  overview: {
    description: `test`,
    rating: 8.9,
    ratingCount: 240,
    director: `test`,
    actorsList: [`test`]
  },
  details: {
    runtime: 99
  }
};

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddReview film={film} />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
