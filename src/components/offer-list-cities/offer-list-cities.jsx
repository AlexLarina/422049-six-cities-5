import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setActiveOffer} from "../../store/action.js";

import PlaceCardCities from "../place-card-cities/place-card-cities.jsx";

class OfferListCities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offerList, handleActiveOffer} = this.props;

    return (
      <div
        className="cities__places-list places__list tabs__content"
      >
        {offerList.map((offer, i) => (
          <PlaceCardCities
            key={`${i}-${offer.id}`}
            id={`${offer.id}`}
            offer={offer}
            onHover={handleActiveOffer}
          />
        ))}
      </div>
    );
  }
}

OfferListCities.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
  handleActiveOffer: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleActiveOffer(id) {
    dispatch(setActiveOffer(id));
  }
});

export {OfferListCities};
export default connect(null, mapDispatchToProps)(OfferListCities);

