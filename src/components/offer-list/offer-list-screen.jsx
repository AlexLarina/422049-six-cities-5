import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCardScreen from "../place-card/place-card-screen.jsx";

class OfferListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeID: null
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover(id) {
    console.log(id);
    this.setState({
      activeID: id
    });
  }

  render() {
    const {offerList} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offerList.map((offer, i) => (
          <PlaceCardScreen
            key={`${i}-${offer.id}`}
            id={`${i}-${offer.id}`}
            offer={offer}
            onHover={this.onHover}
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
