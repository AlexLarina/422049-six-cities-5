import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import OfferListCities from "../offer-list-cities/offer-list-cities.jsx";
import Map from "../map/map.jsx";
import CityList from "../city-list/city-list.jsx";
import Sort from "../sort/sort.jsx";

const MainScreen = (props) => {

  const {rentItemsAmount, offerList, city} = props;
  const offerCoordinates = offerList.map((offer) => offer.coordinates);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
              <OfferListCities offerList={offerList} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map coordinates={offerCoordinates} />
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
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })).isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
