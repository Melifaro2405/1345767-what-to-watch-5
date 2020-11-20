import React from 'react';
import renderer from 'react-test-renderer';
import {FormReview} from './form-review';

const noop = () => {};

describe(`Should FormReview render correctly`, () => {
  it(`all false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={false}
        isLoading={false}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isActive true, isLoading & isError false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={true}
        isLoading={false}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isError true, isActive & isLoading false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={false}
        isLoading={false}
        isError={true}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isLoading true, isActive & isError false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={false}
        isLoading={true}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isActive & isLoading true, isError false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={true}
        isLoading={true}
        isError={false}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isActive & isError true, isLoading false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={true}
        isLoading={false}
        isError={true}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`isLoading & isError true, isActive false`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={false}
        isLoading={true}
        isError={true}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`all true`, () => {
    const tree = renderer
      .create(<FormReview
        isActive={true}
        isLoading={true}
        isError={true}
        changeIsLoading={noop}
        changeIsError={noop}
        filmID={1}
        onSubmit={noop}
        text={`test`}
        rating={`3`}
        onChangeText={noop}
        onChangeRating={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
