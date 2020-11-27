import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {filmProptypes} from "../../props-validation";
import MoviesCatalog from "../movies-catalog/movies-catalog";
import ButtonChangeFilmStatus from "../button-change-film-status/button-change-film-status";
import UserBlock from "../user-block/user-block";
import Footer from "../footer/footer";
import {updateFilmStatus} from "../../serviсes/api-actions";
import {AppRoute} from "../../consts";

const Main = ({promoFilm, changeFilmStatus}) => {
  const {preview, moreInfo, id} = promoFilm;
  const isAddToMyList = moreInfo.isAddToMyList;
  const status = Number(!isAddToMyList);

  const getNewFilmStatus = () => changeFilmStatus(id, status);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={moreInfo.backgroundSrc}
            alt={preview.title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={moreInfo.posterSrc}
                alt={preview.title}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{preview.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{moreInfo.genre}</span>
                <span className="movie-card__year">{moreInfo.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>

                <ButtonChangeFilmStatus isAddToMyList={isAddToMyList} onChangeFilmStatus={getNewFilmStatus}/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoviesCatalog />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.shape(filmProptypes),
  changeFilmStatus: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  promoFilm: DATA.promoFilm
});

const mapDispatchToProps = (dispatch) => ({
  changeFilmStatus(id, status) {
    dispatch(updateFilmStatus(id, status));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
