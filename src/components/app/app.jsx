import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main/main-screen.jsx";
import LoginScreen from "../login/login-screen.jsx";
import FavoritesScreen from "../favorites/favorites-screen.jsx";
import OfferScreen from "../offer/offer-screen.jsx";

const App = (props) => {

  const {rentItemsAmount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen rentItemsAmount={rentItemsAmount} />
        </Route>

        <Route exact path="/login">
          <LoginScreen />
        </Route>

        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>

        <Route exact path="/offer">
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentItemsAmount: PropTypes.number.isRequired,
};

export default App;
