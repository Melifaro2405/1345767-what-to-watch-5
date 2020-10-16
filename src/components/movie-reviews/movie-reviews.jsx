import React from "react";
import PropTypes from "prop-types";
import {reviewProptypes} from "../../proptypesValid";
import ReviewsList from "../reviews-list/reviews-list";

const MovieReviews = ({reviews}) => {
  const evenReviews = reviews.filter((_, index) => index % 2 !== 0);

  const oddReviews = reviews.filter((_, index) => index % 2 === 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <ReviewsList reviews={oddReviews}/>
      </div>
      <div className="movie-card__reviews-col">
        <ReviewsList reviews={evenReviews}/>
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired,
};

export default MovieReviews;
