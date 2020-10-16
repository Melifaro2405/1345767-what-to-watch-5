import React from "react";
import PropTypes from "prop-types";
import {reviewProptypes} from "../../proptypesValid";


const ReviewsList = ({reviews}) => {
  return (
    reviews.map((review, i) => {
      const {text, rating, author, time} = review;
      return (
        <div className="review" key={i}>
          <blockquote className="review__quote">
            <p className="review__text">{text}</p>

            <footer className="review__details">
              <cite className="review__author">{author}</cite>
              <time className="review__date" dateTime="2016-12-20">{time}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      );
    })
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired
};

export default ReviewsList;
