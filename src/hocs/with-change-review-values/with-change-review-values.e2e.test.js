import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withChangeReviewValues from "./with-change-review-values";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withChangeReviewValues(MockComponent);

it(`Should change state depending on sending film's review`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().isSubmitError).toEqual(false);
  wrapper.instance()._changeIsSubmitError(true);
  expect(wrapper.state().isSubmitError).toEqual(true);
});
