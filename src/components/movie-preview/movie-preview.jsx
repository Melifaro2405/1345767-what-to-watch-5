import React from "react";
import PropTypes from "prop-types";

const MoviePreview = ({playVideoSrc, src}) => {
  return (
    <video
      src={playVideoSrc}
      className="player__video"
      poster={src}
      autoPlay
      muted
    />
  );
};

MoviePreview.propTypes = {
  playVideoSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default MoviePreview;
