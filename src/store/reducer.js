import {extend} from "../utils";
import {ActionType} from "./action";
import {genres, getFilmsByGenre} from "../components/genres-list/genres.data";
import {allFilms} from "../mocks/films";
import {COUNT_SHOWN_FILMS} from "../consts";

const initialState = {
  activeGenre: genres[0],
  genres,
  films: allFilms,
  countShownFilms: COUNT_SHOWN_FILMS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.GET_FILM_LIST_BY_GENRE:
      return extend(state, {
        films: getFilmsByGenre(allFilms, action.payload),
        countShownFilms: COUNT_SHOWN_FILMS
      });

    case ActionType.CHANGE_COUNT_SHOWN_FILMS:
      return extend(state, {
        countShownFilms: action.payload
      });
  }

  return state;
};

export {reducer};
