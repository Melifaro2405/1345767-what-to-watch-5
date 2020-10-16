import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProptypes, reviewProptypes} from "../../proptypesValid";
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

    this.handleClickTab = this.handleClickTab.bind(this);
    this.getTab = this.getTab.bind(this);
  }

  handleClickTab(tab) {
    this.setState({activeTab: tab});
  }

  getTab() {
    const activeTab = this.state.activeTab;
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
    const handleClickTab = this.handleClickTab;
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TabsList.map((tab, index) =>
              <li key={index}
                className={`movie-nav__item ` + (this.state.activeTab === tab.type ? `movie-nav__item--active` : ``)}>
                <a href="#" className="movie-nav__link" onClick={function (evt) {
                  evt.preventDefault();
                  handleClickTab(tab.type);
                }}>{tab.type}</a>
              </li>
            )}
          </ul>
        </nav>
        {this.getTab()}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired,
};
