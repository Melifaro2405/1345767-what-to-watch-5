import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should change email value with input email`, () => {
  const handleInputEmail = jest.fn();

  const wrapper = shallow(
      <SignIn
        email={``}
        password={``}
        isAuthError={false}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsAuthError={noop}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={handleInputEmail}
        onChangePassword={noop}
        onSubmit={noop}
      />
  );

  wrapper.find(`#user-email`).simulate(`change`);
  expect(handleInputEmail).toHaveBeenCalledTimes(1);
});

it(`Should change password value with input password`, () => {
  const handleInputPassword = jest.fn();

  const wrapper = shallow(
      <SignIn
        email={``}
        password={``}
        isAuthError={false}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsAuthError={noop}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={noop}
        onChangePassword={handleInputPassword}
        onSubmit={noop}
      />
  );

  wrapper.find(`#user-password`).simulate(`change`);
  expect(handleInputPassword).toHaveBeenCalledTimes(1);
});

it(`Should submit user data with authorization`, () => {
  const handleSubmitUserData = jest.fn().mockResolvedValue();

  const wrapper = shallow(
      <SignIn
        email={`test@test.ru`}
        password={`test`}
        isAuthError={false}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsAuthError={noop}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={noop}
        onChangePassword={noop}
        onSubmit={handleSubmitUserData}
      />
  );

  wrapper.find(`form.sign-in__form`).simulate(`submit`, {preventDefault: noop});
  expect(handleSubmitUserData).toHaveBeenCalledTimes(1);
});

it(`Should changed isInvalidEmail with invalid email & isSubmitError with empty password on submit form`, () => {
  const changeIsAuthError = jest.fn();
  const changeIsInvalidEmail = jest.fn();
  const changeIsSubmitError = jest.fn();

  const handleSubmitAuth = () => {
    return {
      catch: () => {
        changeIsAuthError();
      }
    };
  };

  const wrapper = shallow(
      <SignIn
        email={`test`}
        password={``}
        isAuthError={false}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsAuthError={changeIsAuthError}
        changeIsInvalidEmail={changeIsInvalidEmail}
        changeIsSubmitError={changeIsSubmitError}
        onChangeEmail={noop}
        onChangePassword={noop}
        onSubmit={handleSubmitAuth}
      />
  );

  wrapper.find(`form.sign-in__form`).simulate(`submit`, {preventDefault: noop});
  expect(changeIsAuthError).toHaveBeenCalledTimes(1);
  expect(changeIsInvalidEmail).toHaveBeenCalledTimes(1);
  expect(changeIsSubmitError).toHaveBeenCalledTimes(1);
});
