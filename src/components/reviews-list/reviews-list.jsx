import React from "react";
import PropTypes from "prop-types";
import {reviewProptypes} from "../../props-validation";
import moment from "moment";

const ReviewsList = ({reviews}) => {
  return (
    reviews.map(({user, rating, comment, date}, i) => {
      const {name} = user;
      return (
        <div className="review" key={i}>
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{name}</cite>
              <time className="review__date" dateTime={moment(date).format(`YYYY-MM-DD`)}>
                {moment(date).format(`MMMM DD, YYYY`)}
              </time>
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
