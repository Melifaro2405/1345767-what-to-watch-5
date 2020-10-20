import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

export const GenresList = ({genres, activeGenre, changeActiveFilter, changeFilmList}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <li key={`genre-${index}`} onClick={(evt)=>{
          evt.preventDefault();
          changeActiveFilter(genre);
          changeFilmList(genre);
        }} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
    </ul>
  );
};

const mapStateToProps = ({genres, activeGenre}) => ({genres, activeGenre});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genre) {
    dispatch(ActionCreator.changeActiveFilter(genre));
  },
  changeFilmList(genre) {
    dispatch(ActionCreator.changeFilmList(genre));
  },
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  changeFilmList: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
