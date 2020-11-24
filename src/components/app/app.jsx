import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import MainScreen from "../main/main-screen.jsx";
import LoginScreen from "../login/login-screen.jsx";
import FavoritesScreen from "../favorites/favorites-screen.jsx";
import OfferScreen from "../offer/offer-screen.jsx";

const App = (props) => {
  const {offerList} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            rentItemsAmount={offerList.length}
            offerList={offerList}
          />
        </Route>

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
            const offer = offerList.find((offerItem) => offerItem.id === offerId);

            return (
              <OfferScreen offer={offer} />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offerList: state.offerList,
});

const mapDispatchToProps = () => ({
  // ?? method needed ?
});


App.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })).isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
