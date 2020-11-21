import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page";
import {film, films} from "./movie-page.test";
import {AuthorizationStatus} from "../../consts";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should form submit`, () => {
  const handleGetFilm = jest.fn().mockResolvedValue();
  const handleUpdateFilmByID = jest.fn();

  shallow(
      <MoviePage
        id={1}
        film={film}
        films={films}
        getFilm={handleGetFilm}
        updateFilmByID={handleUpdateFilmByID}
        changeFilmStatus={noop}
        updateFilmByStatus={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  expect(handleGetFilm).toHaveBeenCalledTimes(1);
});
