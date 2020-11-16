import React, {PureComponent} from "react";
import PlaceCardScreen from "../place-card/place-card-screen.jsx";

class PlaceCardNeighbour extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlaceCardScreen className="cities" {...this.props} />
    );
  }
}

export default PlaceCardNeighbour;
