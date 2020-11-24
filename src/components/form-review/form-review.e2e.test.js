import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormReview} from "./form-review";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should value input change text`, () => {
  const handleChangeText = jest.fn();

  const wrapper = shallow(
      <FormReview
        text={``}
        rating={``}
        filmID={1}
        isActive={false}
        isLoading={false}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        onChangeText={handleChangeText}
        onChangeRating={noop}
        onSubmit={noop}
      />
  );

  wrapper.find(`.add-review__textarea`).simulate(`change`);
  expect(handleChangeText).toHaveBeenCalledTimes(1);
});

it(`Should value input change rating`, () => {
  const handleChangeRating = jest.fn();

  const wrapper = shallow(
      <FormReview
        text={``}
        rating={``}
        filmID={1}
        isActive={false}
        isLoading={false}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        onChangeText={noop}
        onChangeRating={handleChangeRating}
        onSubmit={noop}
      />
  );

  wrapper.find(`.rating__stars`).simulate(`change`);
  expect(handleChangeRating).toHaveBeenCalledTimes(1);
});

it(`Should form submit`, () => {
  const handleChangeIsLoading = jest.fn();
  const handleChangeIsError = jest.fn();
  const handleSubmitForm = jest.fn().mockResolvedValue();

  const wrapper = shallow(
      <FormReview
        text={`test`}
        rating={`3`}
        filmID={1}
        isActive={true}
        isLoading={false}
        isError={false}
        changeIsLoading={handleChangeIsLoading}
        changeIsError={handleChangeIsError}
        onChangeText={noop}
        onChangeRating={noop}
        onSubmit={handleSubmitForm}
      />
  );

  wrapper.find(`form.add-review__form`).simulate(`submit`, {preventDefault: noop});
  expect(handleSubmitForm).toHaveBeenCalledTimes(1);
  expect(handleChangeIsLoading).toHaveBeenCalledTimes(1);
  expect(handleChangeIsError).toHaveBeenCalledTimes(0);
});

it(`Should form submit called changeIsLoading & changeIsError`, () => {
  const handleChangeIsLoading = jest.fn();
  const handleChangeIsError = jest.fn();
  const handleSubmitForm = () => {
    return {
      then: () => handleChangeIsLoading(),
      catch: () => {
        handleChangeIsError();
        handleChangeIsLoading();
      }
    };
  };

  const wrapper = shallow(
      <FormReview
        text={`test`}
        rating={`3`}
        filmID={1}
        isActive={true}
        isLoading={false}
        isError={false}
        changeIsLoading={handleChangeIsLoading}
        changeIsError={handleChangeIsError}
        onChangeText={noop}
        onChangeRating={noop}
        onSubmit={handleSubmitForm}
      />
  );

  wrapper.find(`form.add-review__form`).simulate(`submit`, {preventDefault: noop});
  expect(handleChangeIsLoading).toHaveBeenCalledTimes(2);
  expect(handleChangeIsError).toHaveBeenCalledTimes(1);
});
