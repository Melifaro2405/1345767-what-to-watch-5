import {allFilms} from "../../mocks/films";
import {ALL_GENRES, COUNT_SHOWN_GENRES} from "../../consts";

const getGenres = (films) => {
  const allGenres = [ALL_GENRES, ...films.map(({moreInfo}) => moreInfo.genre)];
  return Array.from(new Set(allGenres)).slice(0, COUNT_SHOWN_GENRES);
};

const genres = getGenres(allFilms);

const getFilmsByGenre = (films, genre) => {
  return (genre === ALL_GENRES) ? films : films.filter(({moreInfo}) => moreInfo.genre === genre);
};

export {ALL_GENRES, genres, getFilmsByGenre};
