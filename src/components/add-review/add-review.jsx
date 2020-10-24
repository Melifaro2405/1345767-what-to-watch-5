import React from "react";
import PropTypes from "prop-types";
import FormReview from "../form-review/form-review";
import {Link} from "react-router-dom";
import {filmProptypes} from "../../props-validation";
import withChangeValues from "../../hocs/with-change-values/with-change-values";

const FormReviewWrapped = withChangeValues(FormReview);

const AddReview = ({film}) => {
  const {id, moreInfo: {backGroundSrc, posterSrc}, preview: {title}} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={backGroundSrc}
            alt={title}
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
                <Link to={`/films/${id}`} className="breadcrumbs__link">
                  {title}
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
            src={posterSrc}
            alt={title}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <FormReviewWrapped />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired
};

export default AddReview;
