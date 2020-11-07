import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePreview from "../movie-preview/movie-preview";
import {filmProptypes} from "../../props-validation";
import {AppRoute} from "../../consts";

const SmallMovieCard = ({film, onMouseOver, onMouseOut, isPlayingVideo}) => {
  const {id, moreInfo, preview} = film;
  const {playPreviewSrc} = moreInfo;
  const {src, title} = preview;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`${AppRoute.FILMS}/${id}`}>
        <div className="small-movie-card__image"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}>
          {isPlayingVideo
            ? <MoviePreview playVideoSrc={playPreviewSrc} src={src} />
            : <img src={src} alt={title} width="280" height="175" />
          }
        </div>
        <h3 className="small-movie-card__title">
          {title}
        </h3>
      </Link>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  isPlayingVideo: PropTypes.bool.isRequired
};

export default SmallMovieCard;
