import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getOfferInCity} from "../../store/selectors/city-selector.js";

import MainScreen from "../main/main-screen.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import LoginScreen from "../login/login-screen.jsx";
import FavoritesScreen from "../favorites/favorites-screen.jsx";
import OfferScreen from "../offer/offer-screen.jsx";

const App = (props) => {
  const {offerList, activeOfferId} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              (offerList.length) ?
                <MainScreen
                  rentItemsAmount={offerList.length}
                  offerList={offerList}
                  activeOfferId={activeOfferId} /> :
                <MainEmpty/>
            );
          }}
        />

        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>

        <Route
          exact path="/offer/:id"
          render={(routeProps) => {
            const offerId = routeProps.match.params.id;
            const offer = offerList.find((offerItem) => offerItem.id === parseInt(offerId, 10));
            return (
              <OfferScreen offer={offer} />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({PROCESS, DATA}) => ({
  offerList: getOfferInCity({PROCESS, DATA}),
  activeOfferId: PROCESS.activeOfferId
});

const mapDispatchToProps = () => ({
  // ?? method needed ?
});


App.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
  activeOfferId: PropTypes.string
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
