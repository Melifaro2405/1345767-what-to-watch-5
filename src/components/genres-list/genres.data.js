import {allFilms} from "../../mocks/films";

const ALL_GENRES = `All genres`;
const COUNT_SHOW_GENRES = 10;

const getGenres = (films) => {
  let allGenres = [ALL_GENRES];
  for (let film of films) {
    allGenres.push((film.moreInfo.genre).slice(0, COUNT_SHOW_GENRES));
  }
  return Array.from(new Set(allGenres));
};

const genres = getGenres(allFilms);

const getFilmsByGenre = (films, genre) => {
  return (genre === ALL_GENRES) ? films : films.filter((film) => film.moreInfo.genre === genre);
};

export {ALL_GENRES, genres, getFilmsByGenre};
