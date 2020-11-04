import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import {fetchFilmByID, updateFilmStatus} from "../../serviсes/api-actions";
import {connect} from "react-redux";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
    };

    this._handleChangeFilmStatus = this._handleChangeFilmStatus.bind(this);
  }

  componentDidMount() {
    const {getFilmByID, id} = this.props;
    getFilmByID(id)
    .then((film) => {
      this.setState({film});
    });
  }

  componentDidUpdate(prevProps) {
    const {getFilmByID, id} = this.props;
    if (id !== prevProps.id) {
      getFilmByID(id)
      .then((film) => {
        this.setState({film});
      });
    }
  }

  _handleChangeFilmStatus() {
    const {changeFilmStatus, id} = this.props;
    const {film} = this.state;

    const status = Number(!film.moreInfo.isAddToMyList);

    changeFilmStatus(id, status)
    .then((receivedFilm) => {
      this.setState({
        film: receivedFilm
      });
    });
  }

  render() {
    const {film} = this.state;

    if (!film) {
      return null;
    }

    return (
      <button
        onClick={this._handleChangeFilmStatus}
        className="btn btn--list movie-card__button"
        type="button"
      >
        {(!film.moreInfo.isAddToMyList) && <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>}

        {(film.moreInfo.isAddToMyList) && <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg>}

        <span>My list</span>
      </button>
    );
  }
}

MoviePage.propTypes = {
  film: PropTypes.shape(filmProptypes),
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  id: PropTypes.number.isRequired,
  getFilmByID: PropTypes.func.isRequired,
  changeFilmStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getFilmByID(id) {
    return dispatch(fetchFilmByID(id));
  },
  changeFilmStatus(id, status) {
    return dispatch(updateFilmStatus(id, status));
  }
});

export {MoviePage};
export default connect(null, mapDispatchToProps)(MoviePage);
