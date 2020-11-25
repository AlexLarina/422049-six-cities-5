import {extend} from "../lib/util.js";
import {ActionType} from "../store/action.js";
import {sortOffersByType} from "../lib/sort.js";
import {SORT_LABELS} from "../lib/const.js";

import {creatOfferDataArray, INITIAL_CITY, OFFERS_AMOUNT} from "../mocks/offers.js";

const offerData = creatOfferDataArray(OFFERS_AMOUNT);

const initialState = {
  city: INITIAL_CITY,
  activeOfferId: null,
  offerList: offerData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERLIST:
      return extend(state, {
        offerList: action.payload,
      });

    case ActionType.SORT_OFFERS:
      const sortType = Object.keys(SORT_LABELS).find((key) => SORT_LABELS[key] === action.payload);
      return extend(state, {
        offerList: sortOffersByType(sortType, state.offerList),
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload,
      });
  }

  return state;
};


export {reducer};
