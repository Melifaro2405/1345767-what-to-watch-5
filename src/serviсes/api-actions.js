import {
  loadFilms,
  updateGenres,
  loadPromoFilm,
  loadComments,
  requireAuthorization,
  loadFavoriteFilms,
  redirectToRoute,
  getUserInfo,
  addFilmTyMyList,
  submitComment
} from "../store/action";

import {APIRoute, AppRoute, AuthorizationStatus} from "../consts";
import {adaptFilmToClient, adaptUserInfoToClient} from "./adapters/adapt-to-client";
import {getGenres} from "../utils";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data.map(adaptFilmToClient)));
      dispatch(updateGenres(getGenres(data.map(adaptFilmToClient))));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(data.map(adaptFilmToClient)));
    })
);

export const updateFilmStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE_FILMS}/${id}/${status}`)
    .then(({data}) => {
      const film = adaptFilmToClient(data);
      dispatch(addFilmTyMyList(film));
      return film;
    })
);

export const fetchFilmByID = (id) => (_dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmToClient(data))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => {
      dispatch(loadPromoFilm(adaptFilmToClient(data)));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadComments(data));
    })
);

export const sendReview = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(submitComment(data));
      dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(getUserInfo(adaptUserInfoToClient(data)));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(getUserInfo(adaptUserInfoToClient(data)));
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);
