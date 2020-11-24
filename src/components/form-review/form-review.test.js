import React from 'react';
import renderer from 'react-test-renderer';
import {FormReview} from './form-review';

const noop = () => {};

describe(`Should FormReview render correctly`, () => {
  test.each([
    [`all false`, false, false, false],
    [`isActive true, isLoading & isError false`, true, false, false],
    [`isError true, isActive & isLoading false`, false, false, true],
    [`isLoading true, isActive & isError false`, false, true, false],
    [`isActive & isLoading true, isError false`, true, true, false],
    [`isActive & isError true, isLoading false`, true, false, true],
    [`isLoading & isError true, isActive false`, false, true, true],
    [`all true`, true, true, true]
  ])(`with %s`, (_expected, isActive, isLoading, isError) => {
    const tree = renderer
      .create(<FormReview
        isActive={isActive}
        isLoading={isLoading}
        isError={isError}
        filmID={1}
        text={`test`}
        rating={`3`}
        changeIsError={noop}
        changeIsLoading={noop}
        onChangeText={noop}
        onChangeRating={noop}
        onSubmit={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
