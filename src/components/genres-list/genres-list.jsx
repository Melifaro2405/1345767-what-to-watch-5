import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeActiveFilter, changeFilmList} from "../../store/action";
import {getFilmsByGenre} from "./genres.data";
import {filmProptypes} from "../../props-validation";

const GenresList = ({films, genres, activeGenre, changeActiveFilterAction, changeFilmListAction}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <li key={`genre-${index}`} onClick={(evt)=>{
          evt.preventDefault();
          changeActiveFilterAction(genre);
          changeFilmListAction(films, genre);
        }} className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveFilterAction: PropTypes.func.isRequired,
  changeFilmListAction: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA, APP_STATE}) => ({
  films: DATA.films,
  genres: DATA.genres,
  activeGenre: APP_STATE.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilterAction(genre) {
    dispatch(changeActiveFilter(genre));
  },
  changeFilmListAction(films, genre) {
    const filteredFilms = getFilmsByGenre(films, genre);
    console.log(filteredFilms, changeFilmList(filteredFilms))
    dispatch(changeFilmList(filteredFilms));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
