import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {filmProptypes} from "../../proptypesValid";


export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeStatus: false};
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map(({id, preview}) => <SmallMovieCard
          key={id}
          preview={preview}
          id={id}
          onMouseOverHandler={this.onMouseOverHandler}
          onMouseOutHandler={this.onMouseOutHandler}
        />)}
      </div>
    );
  }

  onMouseOverHandler() {
    this.setState({activeStatus: true});
  }

  onMouseOutHandler() {
    this.setState({activeStatus: false});
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired
};

