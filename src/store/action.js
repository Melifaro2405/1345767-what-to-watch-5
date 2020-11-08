import {COUNT_SHOWN_FILMS} from "../consts";

export const ActionType = {
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILMS: `LOAD_FILMS`,
  UPDATE_GENRES: `UPDATE_GENRES`,
  ADD_FILM_TO_MY_LIST: `ADD_FILM_TO_MY_LIST`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_COMMENTS_BY_FILM_ID: `LOAD_COMMENTS_BY_FILM_ID`,
  SUBMIT_COMMENT: `SUBMIT_COMMENT`,
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  CHANGE_COUNT_SHOWN_FILMS: `CHANGE_COUNT_SHOWN_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_INFO: `GET_USER_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const changeActiveFilter = (genre) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genre
});

export const changeShownFilms = (count) => ({
  type: ActionType.CHANGE_COUNT_SHOWN_FILMS,
  payload: count + COUNT_SHOWN_FILMS
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadFavoriteFilms = (favoriteFilms) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms
});

export const addFilmTyMyList = (film) => ({
  type: ActionType.ADD_FILM_TO_MY_LIST,
  payload: film
});

export const updateGenres = (genres) => ({
  type: ActionType.UPDATE_GENRES,
  payload: genres
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS_BY_FILM_ID,
  payload: comments
});

export const submitComment = (comment) => ({
  type: ActionType.SUBMIT_COMMENT,
  payload: comment
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const getUserInfo = (user) => ({
  type: ActionType.GET_USER_INFO,
  payload: user,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
