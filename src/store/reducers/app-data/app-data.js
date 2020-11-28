import {extend} from "../../../lib/util.js";
import {ActionType} from "../../action.js";
import {adaptToClient} from "../../../lib/adapter.js";

const initialState = {
  offerList: [],
  offerCommentsList: []
};

const adaptOfferListToClient = (offers) => offers.map((offer) => adaptToClient(offer));

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offerList: adaptOfferListToClient(action.payload),
      });
    case ActionType.LOAD_OFFER_COMMENTS:
      return extend(state, {
        offerCommentsList: action.payload,
      });
  }

  return state;
};

export {appData};
