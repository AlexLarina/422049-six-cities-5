import {extend} from "../lib/util.js";
import {ActionType} from "../store/action.js";

import {creatOfferDataArray, INITIAL_CITY, OFFERS_AMOUNT} from "../mocks/offers.js";

const offerData = creatOfferDataArray(OFFERS_AMOUNT);

const initialState = {
  city: INITIAL_CITY,
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
  }

  return state;
};


export {reducer};
