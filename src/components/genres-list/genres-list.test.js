import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';

const noop = () => {};

describe(`Should GenresList render correctly`, () => {
  it(`with activeGenre`, () => {
    const tree = renderer
      .create(<GenresList
        genres={[`test1, test2, test3`]}
        activeGenre={`test`}
        changeActiveFilterAction={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`without activeGenre`, () => {
    const tree = renderer
      .create(<GenresList
        genres={[`test1, test2, test3`]}
        activeGenre={``}
        changeActiveFilterAction={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
