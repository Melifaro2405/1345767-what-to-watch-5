import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {filmProptypes} from "../../props-validation";
import withPlayingPreviewVideo from "../../hocs/with-playing-preview-video/with-playing-preview-video";

const SmallMovieCardWrapped = withPlayingPreviewVideo(SmallMovieCard);

const MoviesListFavorite = ({favoriteFilms}) => {
  return (
    <div className="catalog__movies-list">
      {favoriteFilms.map((film) => <SmallMovieCardWrapped
        key={film.id}
        film={film}
      />)}
    </div>
  );
};

MoviesListFavorite.propTypes = {
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired
};

export default MoviesListFavorite;
