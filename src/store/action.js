import {creatOfferDataArray, OFFERS_AMOUNT} from "../mocks/offers.js";

export const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  GET_OFFERLIST: `GET_OFFERLIST`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`
};

export const ActionCreator = {
  chooseCity: (city) => ({
    type: ActionType.CHOOSE_CITY,
    payload: city,
  }),
  getOfferList: () => ({
    type: ActionType.GET_OFFERLIST,
    payload: creatOfferDataArray(OFFERS_AMOUNT)
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType
  }),
  setActiveOffer: (activeId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeId
  })
};
