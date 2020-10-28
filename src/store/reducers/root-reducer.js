import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {filmsApp} from "./films-app/films-app";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.APP_STATE]: filmsApp,
  [NameSpace.USER]: user,
});
