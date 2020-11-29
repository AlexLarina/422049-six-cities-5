import {user} from "./user.js";
import {AuthorizationStatus} from "../../../lib/const.js";
import {ActionType} from "../../action.js";

const authorizationStatus = AuthorizationStatus.NO_AUTH;
const userData = {};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {}
  });
});

it(`Reducer should update authorizationStatus by load authorizationStatus`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: authorizationStatus,
  })).toEqual({
    authorizationStatus,
  });
});


it(`Reducer should update userData by load userData`, () => {
  expect(user({
    userData: {}
  }, {
    type: ActionType.loadUserData,
    payload: userData,
  })).toEqual({
    userData,
  });
});
