const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const SORT_TYPES = {
  POPULAR: `POPULAR`,
  PRICE_INC: `PRICE_INC`,
  PRICE_DEC: `PRICE_DEC`,
  TOP_RATED: `TOP_RATED`
};

const SORT_LABELS = {
  POPULAR: `Popular`,
  PRICE_INC: `Price: low to high`,
  PRICE_DEC: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const INITIAL_CITY = `Amsterdam`;
const INITIAL_CITY_COORDS = [52.37454, 4.897976];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {CITIES, SORT_TYPES, SORT_LABELS, INITIAL_CITY, INITIAL_CITY_COORDS, AuthorizationStatus};
