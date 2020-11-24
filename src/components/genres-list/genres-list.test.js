import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';

const noop = () => {};

describe(`Should GenresList render correctly`, () => {
  test.each([
    [`with`, `test`],
    [`without`, ``],
  ])(`%s activeGenre`, (_expected, activeGenre) => {
    const tree = renderer
      .create(<GenresList
        genres={[`test1, test2, test3`]}
        activeGenre={activeGenre}
        changeActiveFilterAction={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
