import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import FavoritesScreenEmpty from "../favorites-screen-empty/favorites-screen-empty.jsx";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import Header from "../header/header.jsx";

const FavoritesScreen = (props) => {
  const {favoriteOfferList} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOfferList.length ?
            <FavoritesList favoriteOfferList={favoriteOfferList} /> :
            <FavoritesScreenEmpty />
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteOfferList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteOfferList: DATA.favoriteOfferList
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
