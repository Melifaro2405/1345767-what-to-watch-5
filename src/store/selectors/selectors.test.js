import {getFilmsByGenre} from "./selectors";

const films = [
  {id: 1, moreInfo: {genre: `Comedy`}},
  {id: 2, moreInfo: {genre: `Drama`}},
  {id: 3, moreInfo: {genre: `Comedy`}},
  {id: 4, moreInfo: {genre: `Fantasy`}},
];

const filteredComedyFilms = [
  {id: 1, moreInfo: {genre: `Comedy`}},
  {id: 3, moreInfo: {genre: `Comedy`}},
];

const filteredDramaFilms = [
  {id: 2, moreInfo: {genre: `Drama`}},
];

it(`Should get films by genre Comedy`, () => {
  const mockStore = {DATA: {films}, APP_STATE: {activeGenre: `Comedy`}};
  expect(getFilmsByGenre(mockStore)).toEqual(filteredComedyFilms);
});

it(`Should get films by genre Drama`, () => {
  const mockStore = {DATA: {films}, APP_STATE: {activeGenre: `Drama`}};
  expect(getFilmsByGenre(mockStore)).toEqual(filteredDramaFilms);
});
