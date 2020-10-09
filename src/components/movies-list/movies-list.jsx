import React, {PureComponent} from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {allFilmsProptypes} from "../../utils";


export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeStatus: false};
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  render() {
    const films = this.props.films;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => <SmallMovieCard
          key={film.id}
          preview={film.preview}
          id={film.id}
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

MoviesList.propTypes = allFilmsProptypes;

