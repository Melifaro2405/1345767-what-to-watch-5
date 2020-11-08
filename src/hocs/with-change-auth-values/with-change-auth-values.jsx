import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../serviсes/api-actions";

const withChangeAuthValues = (Component) => {
  class WithChangeAuthValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    _handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    _handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        email: this.state.email,
        password: this.state.password,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeEmail={this._handleChangeEmail}
          onChangePassword={this._handleChangePassword}
          onSubmitAuth={this._handleSubmit}
          email = {this.state.email}
          password = {this.state.password}
        />
      );
    }
  }

  WithChangeAuthValues.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    }
  });

  return connect(null, mapDispatchToProps)(WithChangeAuthValues);
};

export default withChangeAuthValues;
