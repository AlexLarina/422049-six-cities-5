export const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
