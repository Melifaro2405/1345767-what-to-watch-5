import {ALL_GENRES, COUNT_SHOWN_FILMS} from "../../../consts";
import {ActionType} from "../../action";
import {filmsApp} from "./films-app";

it(`Reducer filmsApp without additional parameters should return initial state`, () => {
  expect(filmsApp(undefined, {})).toEqual({
    activeGenre: ALL_GENRES,
    countShownFilms: COUNT_SHOWN_FILMS
  });
});

it(`Reducer should change filter film's genre`, () => {
  expect(filmsApp({
    activeGenre: ALL_GENRES,
  }, {
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: `genre`,
  })).toEqual({
    activeGenre: `genre`,
    countShownFilms: COUNT_SHOWN_FILMS
  });
});

it(`Reducer should change count shown films`, () => {
  expect(filmsApp({
    countShownFilms: 8,
  }, {
    type: ActionType.CHANGE_COUNT_SHOWN_FILMS,
    payload: 8 + COUNT_SHOWN_FILMS,
  })).toEqual({
    countShownFilms: 8 + COUNT_SHOWN_FILMS
  });
});
