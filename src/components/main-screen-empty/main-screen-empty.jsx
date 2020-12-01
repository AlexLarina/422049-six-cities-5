import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import CityList from "../city-list/city-list.jsx";
import Header from "../header/header.jsx";

const MainEmpty = (props) => {
  const {city} = props;
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainEmpty.propTypes = {
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  city: PROCESS.city,
});

export {MainEmpty};
export default connect(mapStateToProps)(MainEmpty);
