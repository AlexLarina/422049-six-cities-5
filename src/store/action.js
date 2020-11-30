// @TO-DO отрефчить эту помойку
export const ActionType = {
  CHOOSE_CITY: `CHOOSE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_EXACT_OFFER: `LOAD_EXACT_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  LOAD_OFFER_COMMENTS: `LOAD_OFFER_COMMENTS`,
  LOAD_OFFER_NEIGHBOORS: `LOAD_OFFER_NEIGHBOORS`,
  UPDATE_CITY_COORDINATES: `UPDATE_CITY_COORDINATES`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`
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

export const loadUserData = (data) => ({
  type: ActionType.LOAD_USER_DATA,
  payload: data
});

// @TO-DO это вот зачем вообще надо делать ?
export const loadExactOffer = (offer) => ({
  type: ActionType.LOAD_EXACT_OFFER,
  payload: offer
});

export const loadOfferComments = (comments) => ({
  type: ActionType.LOAD_OFFER_COMMENTS,
  payload: comments
});

export const loadOfferNeighboors = (neighboors) => ({
  type: ActionType.LOAD_OFFER_NEIGHBOORS,
  payload: neighboors
});

export const updateCityCoordinates = (coordinates) => ({
  type: ActionType.UPDATE_CITY_COORDINATES,
  payload: coordinates
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers
});
