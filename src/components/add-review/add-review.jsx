import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../consts";
import FormReview from "../form-review/form-review";
import {filmProptypes} from "../../props-validation";
import withChangeReviewValues from "../../hocs/with-change-review-values/with-change-review-values";

const FormReviewWrapped = withChangeReviewValues(FormReview);

const AddReview = ({film, login}) => {
  const {id, moreInfo: {backgroundSrc, posterSrc}, preview: {title}} = film;
  const {avatar} = login;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={backgroundSrc}
            alt={title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}/${id}`} className="breadcrumbs__link">
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
              <img src={avatar} alt="User avatar" width="63" height="63"/>
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
        <FormReviewWrapped filmID={id} />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  login: PropTypes.shape({
    avatar: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({USER}) => ({
  login: USER.login
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
