import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withChangeAuthValues from "./with-change-auth-values";

configure({adapter: new Adapter()});

const emailValue = `test@test.ru`;
const passwordValue = `test`;

const MockComponent = () => <div />;
const MockComponentWrapped = withChangeAuthValues(MockComponent);

it(`Should change state depending on authorization`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().email).toEqual(``);
  wrapper.instance()._handleChangeEmail({target: {value: emailValue}});
  expect(wrapper.state().email).toEqual(emailValue);

  expect(wrapper.state().password).toEqual(``);
  wrapper.instance()._handleChangePassword({target: {value: passwordValue}});
  expect(wrapper.state().password).toEqual(passwordValue);

  expect(wrapper.state().isInvalidEmail).toEqual(false);
  wrapper.instance()._changeIsInvalidEmail(true);
  expect(wrapper.state().isInvalidEmail).toEqual(true);

  expect(wrapper.state().isSubmitError).toEqual(false);
  wrapper.instance()._changeIsSubmitError(true);
  expect(wrapper.state().isSubmitError).toEqual(true);
});
