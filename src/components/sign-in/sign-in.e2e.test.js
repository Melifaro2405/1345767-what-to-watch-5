import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should value input email`, () => {
  const handleInputEmail = jest.fn();

  const wrapper = shallow(
      <SignIn
        email={``}
        password={``}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={handleInputEmail}
        onChangePassword={noop}
        onSubmit={noop}
      />
  );

  const inputEmail = wrapper.find(`#user-email`);
  inputEmail.simulate(`change`);
  expect(handleInputEmail).toHaveBeenCalledTimes(1);
});

it(`Should value input password`, () => {
  const handleInputPassword = jest.fn();

  const wrapper = shallow(
      <SignIn
        email={``}
        password={``}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={noop}
        onChangePassword={handleInputPassword}
        onSubmit={noop}
      />
  );

  const inputPassword = wrapper.find(`#user-password`);
  inputPassword.simulate(`change`);
  expect(handleInputPassword).toHaveBeenCalledTimes(1);
});

it(`Should submit user data`, () => {
  const handleSubmitUserData = jest.fn().mockResolvedValue();

  const wrapper = shallow(
      <SignIn
        email={`test@test.ru`}
        password={`test`}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsInvalidEmail={noop}
        changeIsSubmitError={noop}
        onChangeEmail={noop}
        onChangePassword={noop}
        onSubmit={handleSubmitUserData}
      />
  );

  const formAuth = wrapper.find(`form.sign-in__form`);
  formAuth.simulate(`submit`, {preventDefault: noop});
  expect(handleSubmitUserData).toHaveBeenCalledTimes(1);
});

it(`Should changed isInvalidEmail with invalid email & isSubmitError with empty password on submit form`, () => {
  const changeIsInvalidEmail = jest.fn();
  const changeIsSubmitError = jest.fn();

  const wrapper = shallow(
      <SignIn
        email={`test`}
        password={``}
        isInvalidEmail={false}
        isSubmitError={false}
        changeIsInvalidEmail={changeIsInvalidEmail}
        changeIsSubmitError={changeIsSubmitError}
        onChangeEmail={noop}
        onChangePassword={noop}
        onSubmit={noop}
      />
  );

  const formAuth = wrapper.find(`form.sign-in__form`);
  formAuth.simulate(`submit`, {preventDefault: noop});
  expect(changeIsInvalidEmail).toHaveBeenCalledTimes(1);
  expect(changeIsSubmitError).toHaveBeenCalledTimes(1);
});
