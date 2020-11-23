import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCardCities from "../place-card-cities/place-card-cities.jsx";

class OfferListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeId: null
    };

    this._onHover = this._onHover.bind(this);
  }

  _onHover(id) {
    this.setState({
      activeId: id
    });
  }

  render() {
    const {offerList} = this.props;

    return (
      <div
        className={`places__list`}
      >
        {offerList.map((offer, i) => (
          <PlaceCardCities
            key={`${i}-${offer.id}`}
            id={`${offer.id}`}
            offer={offer}
            onHover={this._onHover}
          />
        ))}
      </div>
    );
  }
}

OfferListScreen.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })).isRequired
};

export default OfferListScreen;
