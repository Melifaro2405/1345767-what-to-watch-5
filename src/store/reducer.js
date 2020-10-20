import {extend} from "../utils";
import {ActionType} from "./action";
import {ALL_GENRES, genres, getFilmsByGenre} from "../components/genres-list/genres.data";
import {allFilms} from "../mocks/films";

const initialState = {
  activeGenre: ALL_GENRES,
  genres,
  filteredFilms: allFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.GET_FILM_LIST_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilmsByGenre(allFilms, action.payload)
      });
  }

  return state;
};

export {reducer};
