import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withChangeReviewValues from "./with-change-review-values";

configure({adapter: new Adapter()});

const textInvalidValue = `test`;
const textValidValue = `test_test_test_test_test_test_test_test_test_test_test`;
const ratingValue = `3`;

const MockComponent = () => <div />;
const MockComponentWrapped = withChangeReviewValues(MockComponent);

it(`Should change state depending on sending film's review`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().text).toEqual(``);
  expect(wrapper.state().rating).toEqual(``);
  expect(wrapper.state().isActive).toEqual(false);
  expect(wrapper.state().isLoading).toEqual(false);
  expect(wrapper.state().isError).toEqual(false);

  wrapper.instance()._changeIsLoading(true);
  expect(wrapper.state().isLoading).toEqual(true);

  wrapper.instance()._changeIsError(true);
  expect(wrapper.state().isError).toEqual(true);

  wrapper.instance()._handleChangeText({target: {value: textValidValue}});
  wrapper.instance()._handleChangeRating({target: {value: ``}});
  expect(wrapper.state().text).toEqual(textValidValue);
  expect(wrapper.state().rating).toEqual(``);
  expect(wrapper.state().isActive).toEqual(false);

  wrapper.instance()._handleChangeText({target: {value: ``}});
  wrapper.instance()._handleChangeRating({target: {value: ratingValue}});
  expect(wrapper.state().text).toEqual(``);
  expect(wrapper.state().rating).toEqual(ratingValue);
  expect(wrapper.state().isActive).toEqual(false);

  wrapper.instance()._handleChangeText({target: {value: textInvalidValue}});
  wrapper.instance()._handleChangeRating({target: {value: ratingValue}});
  expect(wrapper.state().isActive).toEqual(false);

  wrapper.instance()._handleChangeText({target: {value: textValidValue}});
  wrapper.instance()._handleChangeRating({target: {value: ratingValue}});
  expect(wrapper.state().isActive).toEqual(true);
});
