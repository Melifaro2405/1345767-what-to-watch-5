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

describe(`Should change state depending by sending film's review`, () => {
  it(`Should check initial state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    expect(wrapper.state()).toEqual({
      text: ``,
      rating: ``,
      isActive: false,
      isLoading: false,
      isError: false
    });
  });

  it(`Should change isLoading in state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._changeIsLoading(true);
    expect(wrapper.state()).toEqual({
      text: ``,
      rating: ``,
      isActive: false,
      isLoading: true,
      isError: false
    });
  });

  it(`Should change isError in state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._changeIsError(true);
    expect(wrapper.state()).toEqual({
      text: ``,
      rating: ``,
      isActive: false,
      isLoading: false,
      isError: true
    });
  });

  it(`Should check isActive false in state with empty rating`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._handleChangeText({target: {value: textValidValue}});
    wrapper.instance()._handleChangeRating({target: {value: ``}});

    expect(wrapper.state()).toEqual({
      text: textValidValue,
      rating: ``,
      isActive: false,
      isLoading: false,
      isError: false
    });
  });

  it(`Should check isActive false in state with empty text`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._handleChangeText({target: {value: ``}});
    wrapper.instance()._handleChangeRating({target: {value: ratingValue}});

    expect(wrapper.state()).toEqual({
      text: ``,
      rating: ratingValue,
      isActive: false,
      isLoading: false,
      isError: false
    });
  });

  it(`Should check isActive false in state with invalid text value`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._handleChangeText({target: {value: textInvalidValue}});
    wrapper.instance()._handleChangeRating({target: {value: ratingValue}});

    expect(wrapper.state()).toEqual({
      text: textInvalidValue,
      rating: ratingValue,
      isActive: false,
      isLoading: false,
      isError: false
    });
  });

  it(`Should check isActive true in state with all valid data`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    wrapper.instance()._handleChangeText({target: {value: textValidValue}});
    wrapper.instance()._handleChangeRating({target: {value: ratingValue}});

    expect(wrapper.state()).toEqual({
      text: textValidValue,
      rating: ratingValue,
      isActive: true,
      isLoading: false,
      isError: false
    });
  });
});
