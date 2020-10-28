import {loadFilms, updateGenres, loadPromoFilm, requireAuthorization} from "../store/action";
import {AuthorizationStatus} from "../consts";
import {getGenres} from "../components/genres-list/genres.data";
import {adaptFilmsToClient} from "./adapters/adapt-to-client";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const adaptData = data.map((item) => adaptFilmsToClient(item));
      dispatch(loadFilms(adaptData));
      dispatch(updateGenres(getGenres(adaptData)));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
