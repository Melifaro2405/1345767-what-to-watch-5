import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  promoFilm: {},
  films: [],
  favoriteFilms: [],
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

    case ActionType.ADD_FILM_TO_MY_LIST:
      const changingFilm = action.payload;

      const filmID = state.films.findIndex((film) => film.id === changingFilm.id);

      const updatedFilms = [
        ...state.films.slice(0, filmID),
        changingFilm,
        ...state.films.slice(filmID + 1)
      ];

      const changingState = {
        film: changingFilm,
        films: updatedFilms,
      };

      if (changingFilm.id === state.promoFilm.id) {
        changingState[`promoFilm`] = changingFilm;
      }

      return extend(state, changingState);

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.LOAD_COMMENTS_BY_FILM_ID:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.SUBMIT_COMMENT:
      return extend(state, {
        comment: action.payload
      });

    case ActionType.UPDATE_GENRES:
      return extend(state, {
        genres: action.payload,
      });
  }
  return state;
};

