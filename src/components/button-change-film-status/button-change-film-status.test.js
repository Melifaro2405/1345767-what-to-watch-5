import React from 'react';
import renderer from 'react-test-renderer';
import ButtonChangeFilmStatus from './button-change-film-status';

const noop = () => {};

describe(`Should ButtonChangeFilmStatus render correctly`, () => {
  it(`with isAddToMyList true`, () => {
    const tree = renderer
      .create(<ButtonChangeFilmStatus
        isAddToMyList={true}
        handleChangeFilmStatus={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with isAddToMyList false`, () => {
    const tree = renderer
      .create(<ButtonChangeFilmStatus
        isAddToMyList={false}
        handleChangeFilmStatus={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
