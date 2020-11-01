import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeActiveFilter} from "../../store/action";

const GenresList = ({genres, activeGenre, changeActiveFilterAction}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <li key={`genre-${index}`} onClick={(evt)=>{
          evt.preventDefault();
          changeActiveFilterAction(genre);
        }} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveFilterAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, APP_STATE}) => ({
  genres: DATA.genres,
  activeGenre: APP_STATE.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilterAction(genre) {
    dispatch(changeActiveFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
