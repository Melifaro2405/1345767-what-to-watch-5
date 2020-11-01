import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {COUNT_SHOWN_FILMS} from "../../../consts";

const initialState = {
  promoFilm: null,
  films: [],
  favoriteFilms: [],
  film: null,
  genres: [],
  comments: []
};

export const filmsData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });

    case ActionType.GET_FILM_BY_ID:
      return extend(state, {
        film: action.payload,
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.LOAD_COMMENTS_BY_FILM_ID:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.UPDATE_GENRES:
      return extend(state, {
        genres: action.payload,
      });

    case ActionType.GET_FILM_LIST_BY_GENRE:
      return extend(state, {
        films: action.payload,
        countShownFilms: COUNT_SHOWN_FILMS
      });
  }
  return state;
};

