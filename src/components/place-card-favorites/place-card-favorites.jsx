import React, {PureComponent} from "react";
import PlaceCardScreen from "../place-card/place-card.jsx";

class PlaceCardFavorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlaceCardScreen className="favorites" {...this.props} />
    );
  }
}

export default PlaceCardFavorites;
