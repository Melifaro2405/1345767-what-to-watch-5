import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePreview from "../movie-preview/movie-preview";
import {filmProptypes} from "../../props-validation";
import {AppRoute} from "../../consts";

const SmallMovieCard = ({film}) => {
  const {id, moreInfo, preview} = film;
  const {playPreviewSrc} = moreInfo;
  const {src, title} = preview;

  let timeoutId = null;

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const onMouseOver = () => {
    timeoutId = setTimeout(() => setIsPlayingVideo(true), 1000);
  };

  const onMouseOut = () => {
    setIsPlayingVideo(false);
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  });

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
  film: PropTypes.shape(filmProptypes).isRequired
};

export default SmallMovieCard;
