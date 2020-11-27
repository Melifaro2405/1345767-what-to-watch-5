import React from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import {MovieTabs, TabsList} from "./tabs.consts";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

const Tabs = ({activeTab, onClickTab, film, id}) => {

  const getTabContent = () => {
    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        return <MovieOverview film={film} />;
      case MovieTabs.DETAILS:
        return <MovieDetails film={film} />;
      case MovieTabs.REVIEWS:
        return <MovieReviews id={id} />;
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
                onClickTab(type);
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
  id: PropTypes.number.isRequired,
  activeTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired
};

export default Tabs;
