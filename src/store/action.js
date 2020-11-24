import {creatOfferDataArray, OFFERS_AMOUNT} from "../mocks/offers.js";

export const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  GET_OFFERLIST: `GET_OFFERLIST`
};

export const ActionCreator = {
  chooseCity: (city) => ({
    type: ActionType.CHOOSE_CITY,
    payload: city,
  }),
  getOfferList: () => ({
    type: ActionType.GET_OFFERLIST,
    payload: creatOfferDataArray(OFFERS_AMOUNT)
  })
};
