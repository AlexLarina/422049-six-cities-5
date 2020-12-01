import React from "react";
import PlaceCardScreen from "../place-card/place-card.jsx";

const PlaceCardFavorites = (props) => {
  return (
    <PlaceCardScreen className="favorites" {...props} />
  );
};

export default PlaceCardFavorites;
