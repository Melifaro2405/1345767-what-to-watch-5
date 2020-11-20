import {AuthorizationStatus, COUNT_SHOWN_FILMS} from "../consts";
import {
  ActionType,
  addFilmTyMyList,
  changeActiveFilter,
  changeShownFilms,
  getUserInfo,
  loadComments,
  loadFavoriteFilms,
  loadFilms,
  loadPromoFilm,
  redirectToRoute,
  requireAuthorization,
  submitComment,
  updateGenres,
} from "./action";

const film = {id: 1, test: `film`};
const comment = {id: 1, test: `comment`};
const user = {id: 1, test: `user`};

const films = [film];
const comments = [comment];
const genre = `Comedy`;
const genres = [genre];
const status = AuthorizationStatus.AUTH;
const url = `https://test.ru`;

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing filter by film's genre`, () => {
    expect(changeActiveFilter(genre)).toEqual({
      type: ActionType.CHANGE_FILTER_BY_GENRE,
      payload: genre,
    });
  });

  it(`Action creator for changing count of shown films`, () => {
    expect(changeShownFilms(8))
      .toEqual({
        type: ActionType.CHANGE_COUNT_SHOWN_FILMS,
        payload: 8 + COUNT_SHOWN_FILMS
      });
  });

  it(`Action creator for loading films`, () => {
    expect(loadFilms(films))
      .toEqual({
        type: ActionType.LOAD_FILMS,
        payload: films
      });
  });

  it(`Action creator for loading favorite films`, () => {
    expect(loadFavoriteFilms(films))
      .toEqual({
        type: ActionType.LOAD_FAVORITE_FILMS,
        payload: films
      });
  });

  it(`Action creator for adding film to mylist`, () => {
    expect(addFilmTyMyList(film))
      .toEqual({
        type: ActionType.ADD_FILM_TO_MY_LIST,
        payload: film
      });
  });

  it(`Action creator for updating genres`, () => {
    expect(updateGenres(genres))
      .toEqual({
        type: ActionType.UPDATE_GENRES,
        payload: genres
      });
  });

  it(`Action creator for loading promofilm`, () => {
    expect(loadPromoFilm(film))
      .toEqual({
        type: ActionType.LOAD_PROMO_FILM,
        payload: film
      });
  });

  it(`Action creator for loading comments of current film`, () => {
    expect(loadComments(comments))
      .toEqual({
        type: ActionType.LOAD_COMMENTS_BY_FILM_ID,
        payload: comments
      });
  });

  it(`Action creator for post comment`, () => {
    expect(submitComment(comment))
      .toEqual({
        type: ActionType.SUBMIT_COMMENT,
        payload: comment
      });
  });

  it(`Action creator for require authorization`, () => {
    expect(requireAuthorization(status))
      .toEqual({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: status
      });
  });

  it(`Action creator for getting user info`, () => {
    expect(getUserInfo(user))
      .toEqual({
        type: ActionType.GET_USER_INFO,
        payload: user
      });
  });

  it(`Action creator for redirect to route`, () => {
    expect(redirectToRoute(url))
      .toEqual({
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: url
      });
  });
});
