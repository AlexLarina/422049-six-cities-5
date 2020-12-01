import React from "react";
import PropTypes from "prop-types";
import PlaceCardFavorites from "../place-card-favorites/place-card-favorites.jsx";

const FavoritesList = (props) => {
  const {favoriteOfferList} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOfferList.map((offer, i) => {
              return (
                <PlaceCardFavorites
                  key={`${i}-${offer.id}`}
                  id={`${offer.id}`}
                  offer={offer}
                  onHover={() => {}}
                />);
            })}
          </div>
        </li>
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteOfferList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
};

export default FavoritesList;
