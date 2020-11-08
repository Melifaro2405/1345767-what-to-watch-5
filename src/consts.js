const ALL_GENRES = `All genres`;
const COUNT_SHOWN_GENRES = 10;
const COUNT_SHOWN_FILMS = 8;
const COUNT_LIKE_GENRE_FILMS = 4;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const CommentLength = {
  MIN: 50,
  MAX: 400
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  FILM_BY_ID: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player`,
  PLAYER_BY_ID: `/player/:id`,
};

const APIRoute = {
  FILMS: `/films`,
  FAVORITE_FILMS: `/favorite`,
  PROMO_FILM: `/films/promo`,
  COMMENTS: `/comments`,
  LOGIN: `/login`
};

export {
  ALL_GENRES,
  COUNT_SHOWN_GENRES,
  COUNT_SHOWN_FILMS,
  COUNT_LIKE_GENRE_FILMS,
  AuthorizationStatus,
  CommentLength,
  AppRoute,
  APIRoute
};
