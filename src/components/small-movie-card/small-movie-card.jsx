import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MoviePreview from "../movie-preview/movie-preview";
import {filmProptypes} from "../../proptypesValid";


export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.film = props.film;
    this._timeoutId = null;

    this.state = {isPlayingVideo: false};
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  render() {
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}>
          {this.getImageOrVideo()}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${this.film.id}`}>
            {this.film.preview.title}
          </Link>
        </h3>
      </article>
    );
  }

  getImageOrVideo() {
    return (
      this.state.isPlayingVideo
        ? <MoviePreview playVideoSrc={this.film.moreInfo.playVideoSrc} src={this.film.preview.src} />
        : <img src={this.film.preview.src} alt={this.film.preview.title} width="280" height="175" />
    );
  }

  handleMouseOver() {
    this._timeoutId = setTimeout(() => {
      this.setState({isPlayingVideo: true});
    }, 1000);
  }

  handleMouseOut() {
    this.setState({isPlayingVideo: false});
    clearTimeout(this._timeoutId);
    this._timeoutId = null;
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired
};
