import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {filmProptypes} from "../../props-validation";
import withPlayingPreviewVideo from "../../hocs/with-playing-preview-video/with-playing-preview-video";

const SmallMovieCardWrapped = withPlayingPreviewVideo(SmallMovieCard);

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => <SmallMovieCardWrapped
        key={film.id}
        film={film}
      />)}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired
};

export default MoviesList;
