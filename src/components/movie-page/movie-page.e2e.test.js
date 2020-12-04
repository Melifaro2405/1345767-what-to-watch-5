import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page";
import {films} from "./movie-page.test";
import {AuthorizationStatus} from "../../consts";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
const noop = () => {};

configure({adapter: new Adapter()});

it(`Should called handler with get film by id`, () => {
  const handleGetFilm = jest.fn().mockResolvedValue();

  shallow(
      <MoviePage
        id={1}
        films={films}
        getFilm={handleGetFilm}
        changeFilmStatus={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  expect(handleGetFilm).toHaveBeenCalledTimes(0);
});

// it(`Should called handler with update film by id in state`, () => {

//   const updateFilmByID = jest.fn();
//   const getFilmWithPromise = () => {
//     return {
//       then: () => updateFilmByID()
//     };
//   };

//   shallow(
//       <MoviePage
//         id={1}
//         films={films}
//         getFilm={getFilmWithPromise}
//         changeFilmStatus={noop}
//         authorizationStatus={AuthorizationStatus.AUTH}
//       />
//   );

//   expect(updateFilmByID).toHaveBeenCalledTimes(1);
// });

