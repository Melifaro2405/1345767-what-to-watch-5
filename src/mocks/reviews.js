import {random as getRandomNumber, shuffle} from "lodash";
import {FilmRating} from "../mocks/consts";
import {allFilms} from "./films";

const COUNT_ALL_REVIEWS = 50;

const AUTHORS = [
  `Nicholas Joseph`,
  `Richard Chambers`,
  `Philip Parrish`,
  `Luke Harrington`,
  `Warren Chambers`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`
];

const getRandomItem = (items) => shuffle(items)[0];

const generateDescription = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. `;

  return shuffle(text.split(`. `)).slice(0, getRandomNumber(1, 5)).join(`. `);
};

const generateCommentTime = () => getRandomNumber(Number(new Date()));

const generateReview = (filmId) => (
  {
    filmId,
    text: generateDescription(),
    rating: getRandomNumber(FilmRating.MIN, FilmRating.MAX).toFixed(1),
    author: AUTHORS[getRandomNumber(0, AUTHORS.length - 1)],
    time: generateCommentTime()
  }
);

const generateReviews = (films) => {
  const arrID = films.map(({id}) => id);
  const reviews = [];
  for (let i = 0; i < COUNT_ALL_REVIEWS; i++) {
    reviews.push(generateReview(getRandomItem(arrID)));
  }
  return reviews;
};

export const allReviews = generateReviews(allFilms);
