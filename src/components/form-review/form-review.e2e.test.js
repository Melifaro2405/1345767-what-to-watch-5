import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormReview} from "./form-review";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should form submit`, () => {
  const handleSubmitForm = jest.fn().mockResolvedValue();

  const wrapper = shallow(
      <FormReview
        filmID={1}
        onSubmit={handleSubmitForm}
      />
  );

  wrapper.find(`form.add-review__form`).simulate(`submit`, {preventDefault: noop});
  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
});
