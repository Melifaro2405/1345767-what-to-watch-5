import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in';

jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

describe(`Should SignIn render correctly`, () => {
  test.each([
    [`valid email`, `test@test.ru`, `test`, false, false],
    [`invalid email`, `test`, `test`, true, false],
    [`empty input`, `test@test.ru`, ``, false, true],
  ])(`with %s`, (_expected, email, password, isInvalidEmail, isSubmitError) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn
              email={email}
              password={password}
              isInvalidEmail={isInvalidEmail}
              isSubmitError={isSubmitError}
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
