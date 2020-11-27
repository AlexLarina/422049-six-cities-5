import {createSelector} from "reselect";

const getCurrentCity = (state) => state.city;
const getOffersList = (state) => state.offerList;

const getOfferInCity = createSelector(
    [getCurrentCity, getOffersList],
    (city, offers) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
