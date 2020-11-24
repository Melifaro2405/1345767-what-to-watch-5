import {ALL_GENRES, COUNT_SHOWN_GENRES} from "./consts";

export const extend = (a, b) => Object.assign({}, a, b);

export const getGenres = (films) => {
  const allGenres = [ALL_GENRES, ...films.map(({moreInfo}) => moreInfo.genre)];
  return Array.from(new Set(allGenres)).slice(0, COUNT_SHOWN_GENRES);
};

export const returnElapsedTime = (elapsedTimeFilm) => {
  const addZeroForTime = (timePeriod) => (timePeriod < 10) ? `0${timePeriod}` : timePeriod;
  const hours = addZeroForTime(Math.floor(elapsedTimeFilm / 3600));
  const minutes = addZeroForTime(Math.floor((elapsedTimeFilm - (hours * 3600)) / 60));
  const seconds = Math.floor(elapsedTimeFilm % 60);
  return `${hours}:${minutes}:${seconds}`;
};

export const getRatingDescription = (value) => {
  let text = ``;
  switch (true) {
    case value === 10:
      text = `Awesome`;
      break;
    case value > 8:
      text = `Very good`;
      break;
    case value > 5:
      text = `Good`;
      break;
    case value > 3:
      text = `Normal`;
      break;
    case value > 0:
      text = `Bad`;
      break;
  }
  return text;
};
