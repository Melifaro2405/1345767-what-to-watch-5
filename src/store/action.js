import {COUNT_SHOWN_FILMS} from "../consts";

export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_FILM_LIST_BY_GENRE: `GET_FILM_LIST_BY_GENRE`,
  CHANGE_COUNT_SHOWN_FILMS: `CHANGE_COUNT_SHOWN_FILMS`
};

export const ActionCreator = {
  changeActiveFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genre
  }),

  changeFilmList: (genre) => ({
    type: ActionType.GET_FILM_LIST_BY_GENRE,
    payload: genre
  }),

  changeShownFilms: (count) => ({
    type: ActionType.CHANGE_COUNT_SHOWN_FILMS,
    payload: count + COUNT_SHOWN_FILMS
  }),
};
