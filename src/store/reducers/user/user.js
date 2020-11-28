import {AuthorizationStatus} from "../../../lib/const.js";
import {ActionType} from "../../action.js";
import {extend} from "../../../lib/util.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
