import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const src = props.preview.src;
  const title = props.preview.title;
  const id = props.id;
  const onMouseOverHandler = props.onMouseOverHandler;
  const onMouseOutHandler = props.onMouseOutHandler;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onMouseOverHandler()} onMouseOut={() => onMouseOutHandler()}>
      <div className="small-movie-card__image">
        <img
          src={src}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onMouseOverHandler: PropTypes.func.isRequired,
  onMouseOutHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default SmallMovieCard;
