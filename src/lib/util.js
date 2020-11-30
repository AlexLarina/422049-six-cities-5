export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const createArrayUniqueByKey = (array, key) => [...new Map(array.map((item) => [item[key], item])).values()];
export const getUniqueFields = (array, key) => [...new Set(array.map((item) => item[key]))];

export const getCityInfo = (offers) => offers.map((offer) => offer.city);
