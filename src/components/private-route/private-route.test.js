import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route";
import {AppRoute, AuthorizationStatus} from "../../consts";

const MockComponent = () => <div />;

describe(`Should PrivateRoute render correctly`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s authorization`, (_expected, authorizationStatus) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={AppRoute.ROOT}
              authorizationStatus={authorizationStatus}
              render={MockComponent}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
