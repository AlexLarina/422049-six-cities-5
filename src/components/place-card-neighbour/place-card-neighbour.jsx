import React from "react";
import PlaceCardScreen from "../place-card/place-card.jsx";

const PlaceCardNeighbour = (props) => {
  return (
    <PlaceCardScreen className="cities" {...props} />
  );
};

export default PlaceCardNeighbour;
