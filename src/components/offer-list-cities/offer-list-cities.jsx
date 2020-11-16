import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCardCities from "../place-card-cities/place-card-cities.jsx";
// import OfferListScreen from "../offer-list/offer-list-screen.jsx";

class OfferListCities extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeId: null
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover(id) {
    this.setState({
      activeId: id
    });
  }

  // className={`${this.props.className && `${getListClassByType(this.props.className)}list`} places__list`}

  render() {
    const {offerList} = this.props;

    return (
      <div
        className="cities__places-list places__list tabs__content"
      >
        {offerList.map((offer, i) => (
          <PlaceCardCities
            key={`${i}-${offer.id}`}
            id={`${offer.id}`}
            offer={offer}
            onHover={this.onHover}
          />
        ))}
      </div>
    );
  }
}

OfferListCities.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired
  })).isRequired
};

export default OfferListCities;


// class OfferListCities extends PureComponent {
//   constructor(props) {
//     super(props);
//   }

//   // tabs__content класс добавить

//   render() {
//     return (
//       <OfferListScreen className={`cities`} {...this.props} />
//     );
//   }
// }

// export default OfferListCities;
