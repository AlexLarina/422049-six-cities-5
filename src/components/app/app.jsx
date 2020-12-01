import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../services/browser-history.js";
import {connect} from "react-redux";
import {getOfferInCity} from "../../store/selectors/city-selector.js";
import {fetchOfferComments, fetchNearbyOffers, fetchFavoriteOffers} from "../../store/api-actions.js";

import PrivateRoute from "../private-route/private-route";
import MainScreen from "../main-screen/main-screen.jsx";
import MainEmpty from "../main-screen-empty/main-screen-empty.jsx";
import LoginScreen from "../login-screen/login-screen.jsx";
import FavoritesScreen from "../favorites-screen/favorites-screen.jsx";
import OfferScreen from "../offer-screen/offer-screen.jsx";

const App = (props) => {
  const {offerList, activeOfferId, userData, openOffer, openFavorites} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              (offerList.length) ?
                <MainScreen
                  rentItemsAmount={offerList.length}
                  offerList={offerList}
                  userData={userData}
                  activeOfferId={activeOfferId} /> :
                <MainEmpty/>
            );
          }}
        />

        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <PrivateRoute exact path="/favorites"
          render={() => {
            openFavorites();
            return (
              <FavoritesScreen />
            );
          }}
        />

        <Route
          exact path="/offer/:id"
          render={(routeProps) => {
            const offerId = routeProps.match.params.id;
            const offer = offerList.find((offerItem) => offerItem.id === parseInt(offerId, 10));
            openOffer(offerId);
            return (
              <OfferScreen
                offer={offer}
                userData={userData}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({PROCESS, DATA, USER}) => ({
  offerList: getOfferInCity({PROCESS, DATA}),
  activeOfferId: PROCESS.activeOfferId,
  userData: USER.userData,
});

const mapDispatchToProps = (dispatch) => ({
  openOffer(id) {
    dispatch(fetchOfferComments(id));
    dispatch(fetchNearbyOffers(id));
  },
  openFavorites() {
    dispatch(fetchFavoriteOffers());
  }
});


App.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
  activeOfferId: PropTypes.number,
  userData: PropTypes.shape({
    email: PropTypes.string
  }),
  openOffer: PropTypes.func.isRequired,
  openFavorites: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
