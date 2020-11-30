import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import PlaceCardNeighbour from "../place-card-neighbour/place-card-neighbour.jsx";

class OfferListNeighbors extends PureComponent {
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
    const {offerNeighboorsList} = this.props;

    return (
      <div
        className="near-places__list places__list"
      >
        {offerNeighboorsList.map((offer, i) => (
          <PlaceCardNeighbour
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

OfferListNeighbors.propTypes = {
  offerNeighboorsList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = ({DATA}) => ({
  offerNeighboorsList: DATA.offerNeighboorsList
});

export {OfferListNeighbors};
export default connect(mapStateToProps)(OfferListNeighbors);
