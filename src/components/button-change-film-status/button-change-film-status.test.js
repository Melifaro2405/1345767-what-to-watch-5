import React from 'react';
import renderer from 'react-test-renderer';
import ButtonChangeFilmStatus from './button-change-film-status';

const noop = () => {};

describe(`Should ButtonChangeFilmStatus render correctly`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s isAddToMyList`, (_expected, isAddToMyList) => {
    const tree = renderer
      .create(<ButtonChangeFilmStatus
        isAddToMyList={isAddToMyList}
        onChangeFilmStatus={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
