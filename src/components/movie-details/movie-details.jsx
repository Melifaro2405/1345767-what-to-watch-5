import React from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import moment from "moment";
import {ActorsList} from "../actors-list/actors-list";

const MovieDetails = ({film}) => {
  const {moreInfo, overview, details} = film;
  const {genre, releaseDate} = moreInfo;
  const {director, actorsList} = overview;
  const {runtime} = details;
  const formatRuntime = moment.utc(moment.duration(runtime, `minutes`)
  .as(`milliseconds`)).format(`H[h] m[m]`);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <div className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <div className="movie-card__details-value">
            <ActorsList actors={actorsList}/>
          </div>
        </div>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatRuntime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired
};

export default MovieDetails;
