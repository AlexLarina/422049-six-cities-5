import {combineReducers} from "redux";
import {appData} from "./app-data/app-data.js";
import {appProcess} from "./app-process/app-process.js";
import {user} from "../reducers/user/user.js";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.USER]: user,
});
