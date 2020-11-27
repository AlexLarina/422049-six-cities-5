import {creatOfferDataArray, OFFERS_AMOUNT} from "../mocks/offers.js";

export const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

// @TO-DO вынести все экспорты в конец файла

export const chooseCity = (city) => ({
  type: ActionType.CHOOSE_CITY,
  payload: city,
});

export const sortOffers = (sortType) => ({
  type: ActionType.SORT_OFFERS,
  payload: sortType
});

export const setActiveOffer = (activeId) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: activeId
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});
