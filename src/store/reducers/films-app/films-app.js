import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {ALL_GENRES} from "../../../components/genres-list/genres.data";
import {COUNT_SHOWN_FILMS} from "../../../consts";

const initialState = {
  activeGenre: ALL_GENRES,
  countShownFilms: COUNT_SHOWN_FILMS
};

export const filmsApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });

    case ActionType.CHANGE_COUNT_SHOWN_FILMS:
      return extend(state, {
        countShownFilms: action.payload
      });
  }
  return state;
};

