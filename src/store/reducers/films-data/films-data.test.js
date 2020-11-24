import {adaptFilmToClient} from "../../../serviсes/adapters/adapt-to-client";
import {getGenres} from "../../../utils";
import {ActionType} from "../../action";
import {filmsData} from "./films-data";

const filmFromServer = {
  "id": 1,
  "name": `test`,
  "poster_image": `test`,
  "preview_image": `test`,
  "background_image": `test`,
  "background_color": `test`,
  "video_link": `test`,
  "preview_video_link": `test`,
  "description": `test`,
  "rating": 1,
  "scores_count": 1,
  "director": `test`,
  "starring": [`test`],
  "run_time": 1,
  "genre": `test`,
  "released": 1,
  "is_favorite": false,
};
const adaptedFilm = adaptFilmToClient(filmFromServer);
const adaptedFilms = [adaptedFilm];
const genres = getGenres(adaptedFilms);
const promoFilm = adaptedFilm;
const favoriteFilms = adaptedFilms;
const comments = [{
  id: 1,
  comment: `test`,
  date: `2020-11-11 11:11:11`,
  rating: 3,
  user: {
    id: 1,
    name: `test`,
  }
}];

describe(`Check update data in redux store`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {})).toEqual({
      promoFilm: {},
      films: [],
      favoriteFilms: [],
      genres: [],
      comments: []
    });
  });

  it(`Reducer should update promofilm by load promofilm`, () => {
    expect(filmsData({
      promoFilm: {},
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm,
    })).toEqual({
      promoFilm,
    });
  });

  it(`Reducer should update films by load films`, () => {
    expect(filmsData({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: adaptedFilms,
    })).toEqual({
      films: adaptedFilms,
    });
  });

  it(`Reducer should update favorite films by load favorite films`, () => {
    expect(filmsData({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: favoriteFilms,
    })).toEqual({
      favoriteFilms,
    });
  });

  it(`Reducer should update genres by load films with different genres`, () => {
    expect(filmsData({
      genres: [],
    }, {
      type: ActionType.UPDATE_GENRES,
      payload: genres,
    })).toEqual({
      genres,
    });
  });

  it(`Reducer should update comments by load comments`, () => {
    expect(filmsData({
      comments: [],
    }, {
      type: ActionType.LOAD_COMMENTS_BY_FILM_ID,
      payload: comments,
    })).toEqual({
      comments,
    });
  });
});
