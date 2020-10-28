import PropTypes from "prop-types";

export const filmProptypes = {
  id: PropTypes.number.isRequired,
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  moreInfo: PropTypes.shape({
    backgroundSrc: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired, // задействовать
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
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
};

// export const filmProptypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   posterImage: PropTypes.string.isRequired,
//   previewImage: PropTypes.string.isRequired,
//   backgroundImage: PropTypes.string.isRequired,
//   backgroundColor: PropTypes.string.isRequired, // задействовать
//   videoLink: PropTypes.string.isRequired,
//   previewVideoLink: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   scoresCount: PropTypes.number.isRequired,
//   director: PropTypes.string.isRequired,
//   starring: PropTypes.arrayOf(PropTypes.string).isRequired,
//   runTime: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
//   released: PropTypes.number.isRequired,
//   isFavorite: PropTypes.bool.isRequired,
// };
