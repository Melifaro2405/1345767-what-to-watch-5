export const extend = (a, b) => Object.assign({}, a, b);

export const returnElapsedTime = (elapsedTimeFilm) => {
  const addZeroForTime = (h) => {
    return (h < 10) ? `0` + h : h;
  };
  let hours = addZeroForTime(Math.floor(elapsedTimeFilm / 3600));
  let minutes = addZeroForTime(Math.floor((elapsedTimeFilm - (hours * 3600)) / 60));
  let seconds = addZeroForTime(Math.round(elapsedTimeFilm - (hours * 3600) - (minutes * 60)));
  return `${hours}:${minutes}:${seconds}`;
};
