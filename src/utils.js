import PropTypes from "prop-types";

export const allFilmsProptypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    moreInfo: PropTypes.shape({
      backGroundSrc: PropTypes.string.isRequired,
      posterSrc: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseDate: PropTypes.number.isRequired,
      playVideoSrc: PropTypes.string.isRequired,
      isAddToMyList: PropTypes.bool.isRequired
    }),
    overview: PropTypes.shape({
      description: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      ratingDescription: PropTypes.string.isRequired,
      ratingCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      actorsList: PropTypes.string.isRequired,
    }),
    details: PropTypes.shape({
      director: PropTypes.string.isRequired,
      allActors: PropTypes.string.isRequired,
      runtime: PropTypes.number.isRequired
    }),
  })).isRequired
};

export const allReviewsProptypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
  })).isRequired
};
