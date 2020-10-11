import React from "react";
import PropTypes from "prop-types";
import FormReview from "../form-review/form-review";
import {Link} from "react-router-dom";
import {filmProptypes} from "../../proptypesValid";

const AddReview = ({film}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={film.moreInfo.backGroundSrc}
            alt={film.preview.title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.preview.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={film.moreInfo.posterSrc}
            alt={film.preview.title}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <FormReview />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmProptypes),
};

export default AddReview;
