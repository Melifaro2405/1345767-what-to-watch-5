import MockAdapter from "axios-mock-adapter";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../../consts";
import {createAPI} from "../../../serviсes/api";
import {ActionType} from "../../action";
import {adaptUserInfoToClient} from "../../../serviсes/adapters/adapt-to-client";
import {user} from "./user";
import {checkAuth, login} from "../../../serviсes/api-actions";

const api = createAPI(() => {});

const loginFromServer = {
  "id": 1,
  "email": `test@test.ru`,
  "name": `test`,
  "avatar_url": `https://test.jpg`,
};
const adaptedLogin = adaptUserInfoToClient(loginFromServer);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(undefined, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    login: null
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Reducer should update user data after authorization`, () => {
  expect(user({
    login: null
  }, {
    type: ActionType.GET_USER_INFO,
    payload: adaptedLogin,
  })).toEqual({
    login: adaptedLogin,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const statusUserLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, loginFromServer);

    return statusUserLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_USER_INFO,
          payload: adaptedLogin,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginDataSendler = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, loginFromServer);

    return loginDataSendler(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_USER_INFO,
          payload: adaptedLogin,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });
});
