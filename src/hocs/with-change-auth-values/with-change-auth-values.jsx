import React, {PureComponent} from "react";

const withChangeAuthValues = (Component) => {
  class WithChangeAuthValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isError: false
      };

      this._changeIsError = this._changeIsError.bind(this);
      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    _changeIsError(value) {
      this.setState({
        isError: value
      });
    }

    _handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    _handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      const {email, password, isError} = this.state;

      return (
        <Component
          {...this.props}
          email = {email}
          password = {password}
          isError={isError}
          changeIsError={this._changeIsError}
          onChangeEmail={this._handleChangeEmail}
          onChangePassword={this._handleChangePassword}
        />
      );
    }
  }

  return WithChangeAuthValues;
};

export default withChangeAuthValues;
