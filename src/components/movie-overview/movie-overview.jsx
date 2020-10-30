import React from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import {getRatingDescription} from "../../utils";

const MovieOverview = ({film}) => {
  const {overview} = film;
  const {rating, ratingCount, description, director, actorsList} = overview;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingDescription(rating)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>
            Starring: {actorsList.join(`, `)}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired
};

export default MovieOverview;
