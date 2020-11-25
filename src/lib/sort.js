import {SORT_TYPES} from "./const.js";

const sortByRate = (a, b) => {
  return b.rating - a.rating;
};

const sortByPriceInc = (a, b) => {
  return a.cost - b.cost;
};

const sortByPriceDec = (a, b) => {
  return b.cost - a.cost;
};

// @TO-DO до этого работало без slice, что происходит
export const sortOffersByType = (type, offers) => {
  switch (type) {
    case SORT_TYPES.POPULAR:
      return offers;
    case SORT_TYPES.PRICE_INC:
      return offers.slice().sort(sortByPriceInc);
    case SORT_TYPES.PRICE_DEC:
      return offers.slice().sort(sortByPriceDec);
    case SORT_TYPES.TOP_RATED:
      return offers.slice().sort(sortByRate);
    default:
      return offers;
  }
};
