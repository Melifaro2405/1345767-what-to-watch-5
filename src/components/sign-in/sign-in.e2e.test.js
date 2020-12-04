import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should submit user data with authorization`, () => {
  const handleSubmitUserData = jest.fn().mockResolvedValue();

  const wrapper = shallow(
      <SignIn
        onSubmit={handleSubmitUserData}
      />
  );

  wrapper.find(`form.sign-in__form`).simulate(`submit`, {preventDefault: noop});
  expect(handleSubmitUserData).toHaveBeenCalledTimes(1);
});
