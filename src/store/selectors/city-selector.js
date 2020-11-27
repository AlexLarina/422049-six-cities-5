import {createSelector} from "reselect";

const getCurrentCity = ({PROCESS}) => PROCESS.city;
const getOffersList = ({DATA}) => DATA.offerList;

export const getOfferInCity = createSelector(
    [getCurrentCity, getOffersList],
    (city, offers) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
