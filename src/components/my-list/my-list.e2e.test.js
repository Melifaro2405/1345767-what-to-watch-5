import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyList} from "./my-list";
import {films} from "./my-list.test";

configure({adapter: new Adapter()});

it(`Should called handler with load favorite films`, () => {
  const loadFavoriteFilms = jest.fn().mockResolvedValue();

  shallow(
      <MyList
        favoriteFilms={films}
        login={{avatar: `test`}}
        loadFavoriteFilms={loadFavoriteFilms}
      />
  );

  expect(loadFavoriteFilms).toHaveBeenCalledTimes(1);
});
