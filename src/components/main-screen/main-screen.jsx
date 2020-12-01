import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import OfferListCities from "../offer-list-cities/offer-list-cities.jsx";
import Map from "../map/map.jsx";
import CityList from "../city-list/city-list.jsx";
import Sort from "../sort/sort.jsx";
import Header from "../header/header.jsx";

import withActiveItem from "../../hocs/withActiveItem/withActiveItem.jsx";

const OfferListCitiesWrapped = withActiveItem(OfferListCities);

const MainScreen = (props) => {
  const {
    rentItemsAmount,
    offerList,
    city,
    cityCoordinates,
    activeOfferId,
  } = props;

  const offerCoordinates = offerList.map((offer) => offer.coordinates);
  const activeOffer = offerList.find((offerItem) => offerItem.id === parseInt(activeOfferId, 10));
  const activeOfferCoordinates = (activeOffer) ? activeOffer.coordinates : [0, 0];

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentItemsAmount} places to stay in {city}</b>
              <Sort />
              <OfferListCitiesWrapped offerList={offerList} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityCoordinates={cityCoordinates}
                  coordinates={offerCoordinates}
                  activeOfferCoordinates={activeOfferCoordinates}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  rentItemsAmount: PropTypes.number.isRequired,
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
  city: PropTypes.string,
  activeOfferId: PropTypes.number,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired, PropTypes.number.isRequired)
};

const mapStateToProps = ({PROCESS, DATA}) => ({
  city: PROCESS.city,
  cityCoordinates: PROCESS.cityCoordinates,
  cityList: DATA.cityList,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
