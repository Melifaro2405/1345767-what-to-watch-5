import {random} from 'lodash';

const generateCommentTime = () => {
  const time = parseInt(new Date().getTime(), 10);
  return random(time);
};

const generateReview = () => {
  return {
    text: `there will be a review`,
    rate: random(1.1, 10).toFixed(1),
    author: `noname`,
    time: generateCommentTime()
  };
};

const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i < 8; i++) {
    reviews.push(generateReview());
  }
  return reviews;
};

export const allReviews = generateReviews();
