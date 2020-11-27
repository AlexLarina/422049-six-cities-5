import {extend} from "../../../lib/util.js";
import {ActionType} from "../../action.js";

//import {creatOfferDataArray, OFFERS_AMOUNT} from "../../../mocks/offers.js";

//const offerData = creatOfferDataArray(OFFERS_AMOUNT);

const initialState = {
  offerList: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offerList: action.payload,
      });
  }

  return state;
};

export {appData};
