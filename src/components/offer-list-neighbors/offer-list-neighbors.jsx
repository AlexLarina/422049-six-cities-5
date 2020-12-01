import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setActiveOffer} from "../../store/action.js";

import PlaceCardNeighbour from "../place-card-neighbour/place-card-neighbour.jsx";

const OfferListNeighbors = (props) => {
  const {offerNeighboorsList, handleActiveOffer} = props;
  return (
    <div
      className="near-places__list places__list"
    >
      {offerNeighboorsList.map((offer, i) => (
        <PlaceCardNeighbour
          key={`${i}-${offer.id}`}
          id={`${offer.id}`}
          offer={offer}
          onHover={() => {
            handleActiveOffer(offer.id);
          }}
        />
      ))}
    </div>
  );
};

OfferListNeighbors.propTypes = {
  offerNeighboorsList: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired
  })).isRequired,
  handleActiveOffer: PropTypes.func.isRequired,
  onHover: PropTypes.func
};

const mapStateToProps = ({DATA}) => ({
  offerNeighboorsList: DATA.offerNeighboorsList
});

const mapDispatchToProps = (dispatch) => ({
  handleActiveOffer(id) {
    dispatch(setActiveOffer(id));
  }
});

export {OfferListNeighbors};
export default connect(mapStateToProps, mapDispatchToProps)(OfferListNeighbors);
