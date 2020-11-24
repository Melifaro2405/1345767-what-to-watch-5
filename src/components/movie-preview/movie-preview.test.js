import React from 'react';
import renderer from 'react-test-renderer';
import MoviePreview from './movie-preview';

it(`Should MoviePreview render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePreview playVideoSrc={`test`} src={`test`} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
