import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {login} from "../../serviсes/api-actions";
import Footer from "../footer/footer";
import {AppRoute} from "../../consts";

const SignIn = ({onSubmit}) => {

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const onChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const onChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const onSubmitAuth = (evt) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    evt.preventDefault();

    setIsInvalidEmail(!reg.test(email));
    setIsSubmitError(!email.length || !password.length);

    if (!isInvalidEmail && !isSubmitError) {
      onSubmit({email, password})
      .catch(() => {
        setIsAuthError(true);
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitAuth}>

          {isAuthError &&
          <div className="sign-in__message">
            <p>Authorization error. Access is restricted</p>
          </div>}

          {isInvalidEmail &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}

          {isSubmitError &&
          <div className="sign-in__message">
            <p>We can’t recognize this email and password combination. Please try again.</p>
          </div>}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${isInvalidEmail && `sign-in__field--error`}`}>
              <input
                value={email}
                onChange={onChangeEmail}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                value={password}
                onChange={onChangePassword}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    return dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
