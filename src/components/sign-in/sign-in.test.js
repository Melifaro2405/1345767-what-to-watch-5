import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in';

jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

describe(`Should SignIn render correctly`, () => {
  test.each([
    [`valid email`, `test@test.ru`, `test`, false, false, false],
    [`invalid email`, `test`, `test`, false, true, false],
    [`empty input`, `test@test.ru`, ``, false, false, true],
    [`auth error`, `test@test.r`, `test`, true, false, false],
  ])(`with %s`, (_expected, email, password, isAuthError, isInvalidEmail, isSubmitError) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              email={email}
              password={password}
              isAuthError={isAuthError}
              isInvalidEmail={isInvalidEmail}
              isSubmitError={isSubmitError}
              changeIsAuthError={noop}
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
