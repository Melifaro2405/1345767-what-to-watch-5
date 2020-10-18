import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProptypes, reviewProptypes} from "../../props-validation";
import {MovieTabs, TabsList} from "./tabs.consts";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: MovieTabs.OVERVIEW,
    };

    this._handleClickTab = this._handleClickTab.bind(this);
    this._getTabContent = this._getTabContent.bind(this);
  }

  _handleClickTab(tab) {
    this.setState({activeTab: tab});
  }

  _getTabContent() {
    const {activeTab} = this.state;
    const {film, reviews} = this.props;

    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        return <MovieOverview film={film} />;
      case MovieTabs.DETAILS:
        return <MovieDetails film={film} />;
      case MovieTabs.REVIEWS:
        return <MovieReviews reviews={reviews} />;
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TabsList.map(({type}, index) =>
              <li key={index}
                className={`movie-nav__item ` + (this.state.activeTab === type ? `movie-nav__item--active` : ``)}>
                <a href="#" className="movie-nav__link" onClick={(evt) => {
                  evt.preventDefault();
                  this._handleClickTab(type);
                }}>{type}</a>
              </li>
            )}
          </ul>
        </nav>
        {this._getTabContent()}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired,
};
