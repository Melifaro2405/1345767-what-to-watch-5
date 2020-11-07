import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchFilmByID, updateFilmStatus} from "../../serviсes/api-actions";

const withAddFilmByID = (Component) => {
  class WithAddFilmByID extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };

      this._handleChangeFilmStatus = this._handleChangeFilmStatus.bind(this);
    }

    _getFilmByID() {
      const {getFilm, id} = this.props;
      getFilm(id)
      .then((film) => {
        this.setState({film});
      });
    }

    componentDidMount() {
      this._getFilmByID();
    }

    componentDidUpdate(prevProps) {
      if (this.props.id !== prevProps.id) {
        this._getFilmByID();
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
      return (
        <Component
          {...this.props}
          film = {film}
          handleChangeFilmStatus={this._handleChangeFilmStatus}
        />
      );
    }
  }

  WithAddFilmByID.propTypes = {
    id: PropTypes.number.isRequired,
    getFilm: PropTypes.func.isRequired,
    changeFilmStatus: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    getFilm(id) {
      return dispatch(fetchFilmByID(id));
    },
    changeFilmStatus(id, status) {
      return dispatch(updateFilmStatus(id, status));
    }
  });

  return connect(null, mapDispatchToProps)(WithAddFilmByID);
};

export default withAddFilmByID;
