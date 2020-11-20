import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in';

jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

describe(`Should SignIn render correctly`, () => {
  it(`with valid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              email={`test@test.ru`}
              password={`test`}
              isInvalidEmail={false}
              isSubmitError={false}
              changeIsInvalidEmail={noop}
              changeIsSubmitError={noop}
              onSubmit={noop}
              onChangeEmail={noop}
              onChangePassword={noop}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with invalid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              email={`test`}
              password={`test`}
              isInvalidEmail={true}
              isSubmitError={false}
              changeIsInvalidEmail={noop}
              changeIsSubmitError={noop}
              onSubmit={noop}
              onChangeEmail={noop}
              onChangePassword={noop}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with empty input`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              email={`test@test.ru`}
              password={``}
              isInvalidEmail={false}
              isSubmitError={true}
              changeIsInvalidEmail={noop}
              changeIsSubmitError={noop}
              onSubmit={noop}
              onChangeEmail={noop}
              onChangePassword={noop}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
