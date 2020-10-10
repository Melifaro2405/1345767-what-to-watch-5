import {random} from "lodash";
import {FilmRating, FILMCOUNT} from "../mocks/consts";

const generateCommentTime = () => random(Number(new Date()));

const generateReview = () => (
  {
    text: `there will be a review`,
    rate: random(FilmRating.MIN, FilmRating.MAX).toFixed(1),
    author: `noname`,
    time: generateCommentTime()
  }
);

const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i < FILMCOUNT; i++) {
    reviews.push(generateReview());
  }
  return reviews;
};

export const allReviews = generateReviews();
