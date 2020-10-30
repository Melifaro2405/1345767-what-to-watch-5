import {loadFilms, updateGenres, loadPromoFilm, loadComments, requireAuthorization, getFilmByID, loadFavoriteFilms} from "../store/action";
import {AuthorizationStatus} from "../consts";
import {adaptFilmToClient} from "./adapters/adapt-to-client";
import {getGenres} from "../utils";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      const adaptData = data.map((item) => adaptFilmToClient(item));
      dispatch(loadFilms(data.map(adaptFilmToClient)));
      dispatch(updateGenres(getGenres(adaptData)));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(data.map(adaptFilmToClient)));
    })
);

export const fetchFilmByID = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(getFilmByID(adaptFilmToClient(data)));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then(({data}) => {
    dispatch(loadPromoFilm(adaptFilmToClient(data)));
  })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then(({data}) => {
    dispatch(loadComments(data));
  })
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
