import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmProptypes} from "../../props-validation";
import Tabs from "../tabs/tabs";
import MoviesList from "../movies-list/movies-list";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus, COUNT_LIKE_GENRE_FILMS} from "../../consts";
import {Footer} from "../footer/footer";
import UserBlock from "../user-block/user-block";
import ButtonChangeFilmStatus from "../button-change-film-status/button-change-film-status";

const TabsWrapped = withActiveTab(Tabs);

const MoviePage = ({id, films, film, handleChangeFilmStatus, authorizationStatus}) => {

  if (!film) {
    return null;
  }
  const {moreInfo, preview} = film;
  const {backgroundSrc, genre, releaseDate, posterSrc} = moreInfo;
  const isAddToMyList = moreInfo.isAddToMyList;
  const {title} = preview;
  const likeGenreFilms = films
  .filter((likeFilm) => genre === likeFilm.moreInfo.genre && likeFilm.id !== id)
  .slice(0, COUNT_LIKE_GENRE_FILMS);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={backgroundSrc}
              alt={title}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>

                <ButtonChangeFilmStatus isAddToMyList={isAddToMyList} handleChangeFilmStatus={handleChangeFilmStatus}/>

                {(authorizationStatus === AuthorizationStatus.AUTH) ?
                  <Link to={`${AppRoute.FILMS}/${id}/review`} className="btn movie-card__button">
                    Add review
                  </Link> : ``}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={posterSrc}
                alt={title}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <TabsWrapped film={film} id={id} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={likeGenreFilms} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: PropTypes.shape(filmProptypes),
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  id: PropTypes.number.isRequired,
  handleChangeFilmStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});


export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
