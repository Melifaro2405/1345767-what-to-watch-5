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
  // const noopPromise = () => {
  //   return {
  //     then: (data) => {
  //       console.log(`wwwww`, data);
  //       data();
  //       expect(handleUpdateFilmByID).toHaveBeenCalledTimes(1);
  //     }
  //   };
  // };

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


  // const formReview = wrapper.find(`form.add-review__form`);
  // formReview.simulate(`submit`, {preventDefault: noop});
  expect(handleGetFilm).toHaveBeenCalledTimes(1);
});
