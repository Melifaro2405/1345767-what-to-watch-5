import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {filmProptypes} from "../../props-validation";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ButtonShowMore from "../button-show-more/button-show-more";
import {getFilmsByGenre} from "../../store/selectors/selectors";

const MoviesCatalog = ({filteredFilms, countShownFilms}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <MoviesList films={filteredFilms.slice(0, countShownFilms)} />
      {(filteredFilms.length >= countShownFilms) ? <ButtonShowMore /> : null}
    </section>
  );
};

MoviesCatalog.propTypes = {
  countShownFilms: PropTypes.number.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired
};

const mapStateToProps = ({DATA, APP_STATE}) => ({
  countShownFilms: APP_STATE.countShownFilms,
  filteredFilms: getFilmsByGenre({DATA, APP_STATE})
});

export {MoviesCatalog};
export default connect(mapStateToProps)(MoviesCatalog);
