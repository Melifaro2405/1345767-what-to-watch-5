const ALL_GENRES = `All genres`;
const COUNT_SHOWN_GENRES = 10;
const COUNT_SHOWN_FILMS = 8;
const COUNT_LIKE_GENRE_FILMS = 4;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM_BY_ID: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

const APIRoute = {
  FILMS: `/films`,
  FAVORITE_FILMS: `/favorite`,
  PROMO_FILM: `/films/promo`,
  LOGIN: `/login`
};

export {
  ALL_GENRES,
  COUNT_SHOWN_GENRES,
  COUNT_SHOWN_FILMS,
  COUNT_LIKE_GENRE_FILMS,
  AuthorizationStatus,
  AppRoute,
  APIRoute
};
