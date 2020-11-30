import {INITIAL_CITY, INITIAL_CITY_COORDS} from "../../../lib/const.js";
import {appProcess} from "./app-process.js";
import {ActionType} from "../../action.js";

const city = `Paris`;
const activeOfferId = 5;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual({
    city: INITIAL_CITY,
    activeOfferId: null,
    cityCoordinates: INITIAL_CITY_COORDS
  });
});

it(`Reducer should update city by load city`, () => {
  expect(appProcess({
    city: INITIAL_CITY,
  }, {
    type: ActionType.CHOOSE_CITY,
    payload: city,
  })).toEqual({
    city,
  });
});

it(`Reducer should update activeOfferId by load activeOfferId`, () => {
  expect(appProcess({
    activeOfferId: null,
  }, {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOfferId,
  })).toEqual({
    activeOfferId,
  });
});

