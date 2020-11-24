import {SORT_TYPES} from "./const.js";

const sortByRate = (a, b) => {
  return b.rating - a.rating;
};

const sortByPriceInc = (a, b) => {
  return a.cost - b.cost;
};

const sortByPriceDes = (a, b) => {
  return b.cost - a.cost;
};

export const sortOffersByType = (type, offers) => {
  switch (type) {
    case SORT_TYPES.POPULAR:
      return offers;
    case SORT_TYPES.PRICE_INC:
      return offers.sort(sortByPriceInc);
    case SORT_TYPES.PRICE_DEC:
      return offers.sort(sortByPriceDes);
    case SORT_TYPES.TOP_RATED:
      return offers.sort(sortByRate);
    default:
      return offers;
  }
};
