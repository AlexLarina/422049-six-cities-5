import {extend, arrayUniqueByKey} from "../../../lib/util.js";
import {ActionType} from "../../action.js";
import {adaptToClient} from "../../../lib/adapter.js";

const initialState = {
  offerList: [],
  offerCommentsList: [],
  offerNeighboorsList: [],
  cityList: [],
  favoriteOfferList: []
};

const adaptOfferListToClient = (offers) => offers.map((offer) => adaptToClient(offer));
const getCityInfo = (offers) => offers.map((offer) => offer.city);

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offerList: adaptOfferListToClient(action.payload),
        cityList: arrayUniqueByKey(getCityInfo(action.payload), `name`)
      });
    case ActionType.LOAD_OFFER_COMMENTS:
      return extend(state, {
        offerCommentsList: action.payload,
      });
    case ActionType.LOAD_OFFER_NEIGHBOORS:
      return extend(state, {
        offerNeighboorsList: adaptOfferListToClient(action.payload)
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOfferList: action.payload
      });
  }

  return state;
};

export {appData};
