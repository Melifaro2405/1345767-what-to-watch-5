import {COUNT_SHOWN_FILMS} from "../consts";

export const ActionType = {
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILMS: `LOAD_FILMS`,
  UPDATE_GENRES: `UPDATE_GENRES`,
  GET_FILM_BY_ID: `GET_FILM_BY_ID`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_COMMENTS_BY_FILM_ID: `LOAD_COMMENTS_BY_FILM_ID`,
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_FILM_LIST_BY_GENRE: `GET_FILM_LIST_BY_GENRE`,
  CHANGE_COUNT_SHOWN_FILMS: `CHANGE_COUNT_SHOWN_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const changeActiveFilter = (genre) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genre
});

export const changeFilmList = (films) => ({
  type: ActionType.GET_FILM_LIST_BY_GENRE,
  payload: films
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

export const getFilmByID = (film) => ({
  type: ActionType.GET_FILM_BY_ID,
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
