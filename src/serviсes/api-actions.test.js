import MockAdapter from "axios-mock-adapter";
import {APIRoute} from "../consts";
import {adaptFilmToClient} from "./adapters/adapt-to-client";
import {createAPI} from "./api";
import {getGenres} from "../utils";
import {ActionType} from "../store/action";
import {
  fetchFilmList,
  fetchPromoFilm,
  fetchFavoriteFilmList,
  updateFilmStatus,
  fetchReviews,
  sendReview
} from "./api-actions";

const HttpCode = {
  OK: 200
};

const api = createAPI(() => {});

export const filmFromServer = {
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
const filmsFromServer = [filmFromServer];
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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(HttpCode.OK, filmsFromServer);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: adaptedFilms,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_GENRES,
          payload: genres,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(HttpCode.OK, filmFromServer);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: promoFilm,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilmList();

    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(HttpCode.OK, filmsFromServer);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: favoriteFilms,
        });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFilmStatusSender = updateFilmStatus(1, 1);
    apiMock
      .onPost(`${APIRoute.FAVORITE_FILMS}/1/1`)
      .reply(HttpCode.OK, filmFromServer);

    return changeFilmStatusSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_FILM_TO_MY_LIST,
          payload: adaptedFilm
        });
      });
  });

  it(`Should make a correct API call to /comments/:film_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchReviews(1);
    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(HttpCode.OK, comments);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_BY_FILM_ID,
          payload: comments,
        });
      });
  });

  it(`Should make a correct API call to /comments/:film_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsSender = sendReview({id: 1, rating: 6, comment: `test`});
    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(HttpCode.OK);

    return commentsSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SUBMIT_COMMENT
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.FILMS}/1`
        });
      });
  });
});
