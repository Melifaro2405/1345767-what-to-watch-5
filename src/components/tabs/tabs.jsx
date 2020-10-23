import React from "react";
import PropTypes from "prop-types";
import {filmProptypes, reviewProptypes} from "../../props-validation";
import {MovieTabs, TabsList} from "./tabs.consts";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

const Tabs = ({activeTab, handleClickTab, film, reviews}) => {

  const getTabContent = () => {
    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        return <MovieOverview film={film} />;
      case MovieTabs.DETAILS:
        return <MovieDetails film={film} />;
      case MovieTabs.REVIEWS:
        return <MovieReviews reviews={reviews} />;
    }
    return null;
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TabsList.map(({type}, index) =>
            <li key={index}
              className={`movie-nav__item ` + (activeTab === type ? `movie-nav__item--active` : ``)}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                handleClickTab(type);
              }}>{type}</a>
            </li>
          )}
        </ul>
      </nav>
      {getTabContent()}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleClickTab: PropTypes.func.isRequired
};

export default Tabs;
