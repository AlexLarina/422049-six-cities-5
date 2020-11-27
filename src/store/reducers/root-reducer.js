import {combineReducers} from "redux";
import {appData} from "./app-data/app-data.js";
import {appProcess} from "./app-process/app-process.js";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
});
