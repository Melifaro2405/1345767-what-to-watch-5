import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {filmProptypes} from "../../props-validation";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ButtonShowMore from "../button-show-more/button-show-more";

const MoviesCatalog = ({films, countShownFilms}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <MoviesList films={films.slice(0, countShownFilms)} />
      {(films.length > countShownFilms) ? <ButtonShowMore /> : null}

    </section>
  );
};

MoviesCatalog.propTypes = {
  countShownFilms: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired
};

const mapStateToProps = ({DATA, APP_STATE}) => ({
  films: DATA.films,
  countShownFilms: APP_STATE.countShownFilms,
});

export {MoviesCatalog};
export default connect(mapStateToProps)(MoviesCatalog);
