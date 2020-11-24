import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {UserBlock} from './user-block';
import {AuthorizationStatus} from '../../consts';

describe(`Should UserBlock render correctly`, () => {
  test.each([
    [`without`, AuthorizationStatus.NO_AUTH],
    [`with`, AuthorizationStatus.AUTH],
  ])(`%s authorization`, (_expected, authorizationStatus) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={authorizationStatus}
              login={{avatar: `test`}}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
