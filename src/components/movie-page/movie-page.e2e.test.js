import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page";
import {film, films} from "./movie-page.test";
import {AuthorizationStatus} from "../../consts";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
const noop = () => {};

configure({adapter: new Adapter()});

it(`Should called handler with get film by id`, () => {
  const handleGetFilm = jest.fn().mockResolvedValue();

  shallow(
      <MoviePage
        id={1}
        film={film}
        films={films}
        getFilm={handleGetFilm}
        updateFilmByID={noop}
        changeFilmStatus={noop}
        updateFilmByStatus={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  expect(handleGetFilm).toHaveBeenCalledTimes(1);
});

it(`Should called handler with update film by id in state`, () => {

  const updateFilmByID = jest.fn();
  const getFilmWithPromise = () => {
    return {
      then: () => updateFilmByID()
    };
  };

  shallow(
      <MoviePage
        id={1}
        film={film}
        films={films}
        getFilm={getFilmWithPromise}
        updateFilmByID={updateFilmByID}
        changeFilmStatus={noop}
        updateFilmByStatus={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  expect(updateFilmByID).toHaveBeenCalledTimes(1);
});

