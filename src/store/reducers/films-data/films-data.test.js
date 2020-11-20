import MockAdapter from "axios-mock-adapter";
import {APIRoute} from "../../../consts";
import {adaptFilmToClient} from "../../../serviсes/adapters/adapt-to-client";
import {createAPI} from "../../../serviсes/api";
import {getGenres} from "../../../utils";
import {ActionType} from "../../action";
import {filmsData} from "./films-data";
import {
  fetchFavoriteFilmList,
  fetchFilmList,
  fetchPromoFilm,
  fetchReviews,
  sendReview,
  updateFilmStatus,
} from "../../../serviсes/api-actions";

const api = createAPI(() => {});

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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsData(void 0, {})).toEqual({
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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, filmsFromServer);

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
      .reply(200, filmFromServer);

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
      .reply(200, filmsFromServer);

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
      .reply(200, filmFromServer);

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
      .reply(200, comments);

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
      .reply(200);

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
