import React, {PureComponent} from "react";

const withChangeAuthValues = (Component) => {
  class WithChangeAuthValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isInvalidEmail: false,
        isSubmitError: false
      };

      this._changeIsInvalidEmail = this._changeIsInvalidEmail.bind(this);
      this._changeIsSubmitError = this._changeIsSubmitError.bind(this);
      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    _changeIsInvalidEmail(value) {
      this.setState({
        isInvalidEmail: value
      });
    }

    _changeIsSubmitError(value) {
      this.setState({
        isSubmitError: value
      });
    }

    _handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    _handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      const {email, password, isInvalidEmail, isSubmitError} = this.state;

      return (
        <Component
          {...this.props}
          email = {email}
          password = {password}
          isInvalidEmail={isInvalidEmail}
          isSubmitError={isSubmitError}
          changeIsInvalidEmail={this._changeIsInvalidEmail}
          changeIsSubmitError={this._changeIsSubmitError}
          onChangeEmail={this._handleChangeEmail}
          onChangePassword={this._handleChangePassword}
        />
      );
    }
  }

  return WithChangeAuthValues;
};

export default withChangeAuthValues;
