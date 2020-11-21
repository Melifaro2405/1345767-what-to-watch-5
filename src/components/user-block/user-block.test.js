import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {UserBlock} from './user-block';
import {AuthorizationStatus} from '../../consts';

describe(`Should UserBlock render correctly`, () => {
  it(`without authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={{avatar: `test`}}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.AUTH}
              login={{avatar: `test`}}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
