import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in';

jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

it(`Should SignIn render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignIn
            onSubmit={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
