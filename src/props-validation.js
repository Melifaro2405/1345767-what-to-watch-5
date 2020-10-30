import PropTypes from "prop-types";

export const filmProptypes = {
  id: PropTypes.number.isRequired,
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  moreInfo: PropTypes.shape({
    backgroundSrc: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    playPreviewSrc: PropTypes.string.isRequired,
    playVideoSrc: PropTypes.string.isRequired,
    isAddToMyList: PropTypes.bool.isRequired
  }),
  overview: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorsList: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  details: PropTypes.shape({
    runtime: PropTypes.number.isRequired
  }),
};

export const reviewProptypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
