import {extend} from "../../../lib/util.js";
import {ActionType} from "../../action.js";
import {adaptToClient} from "../../../lib/adapter.js";

const initialState = {
  offerList: [],
};

const adaptOfferListToClient = (offers) => offers.map((offer) => adaptToClient(offer));

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offerList: adaptOfferListToClient(action.payload),
      });
  }

  return state;
};

export {appData};
