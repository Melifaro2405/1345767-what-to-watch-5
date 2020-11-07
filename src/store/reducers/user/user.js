import {AuthorizationStatus} from "../../../consts";
import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_USER_INFO:
      return extend(state, {
        login: action.payload
      });
  }
  return state;
};

export {user};
