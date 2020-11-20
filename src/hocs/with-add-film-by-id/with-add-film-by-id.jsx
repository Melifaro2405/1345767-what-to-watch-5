import React, {PureComponent} from "react";

const withAddFilmByID = (Component) => {
  class WithAddFilmByID extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };

      this._updateFilmByID = this._updateFilmByID.bind(this);
      this._updateFilmByStatus = this._updateFilmByStatus.bind(this);
    }

    _updateFilmByID(value) {
      this.setState({
        film: value});
    }

    _updateFilmByStatus(value) {
      this.setState({
        film: value});
    }

    render() {
      const {film} = this.state;
      return (
        <Component
          {...this.props}
          film = {film}
          updateFilmByID={this._updateFilmByID}
          updateFilmByStatus={this._updateFilmByStatus}
        />
      );
    }
  }

  return WithAddFilmByID;
};

export default withAddFilmByID;
