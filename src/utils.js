export const extend = (a, b) => Object.assign({}, a, b);

const addZeroForTime = (timePeriod) => (timePeriod < 10) ? `0${timePeriod}` : timePeriod;

export const returnElapsedTime = (elapsedTimeFilm) => {
  const hours = addZeroForTime(Math.floor(elapsedTimeFilm / 3600));
  const minutes = addZeroForTime(Math.floor((elapsedTimeFilm - (hours * 3600)) / 60));
  const seconds = Math.floor(elapsedTimeFilm % 60);
  return `${hours}:${minutes}:${seconds}`;
};
