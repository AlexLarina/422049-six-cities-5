import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";

class LeafletMap extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;


    const leafletMap = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    leafletMap.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(leafletMap);

    this.props.offerList.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(leafletMap);
    });
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" style={{height: `800px`}}></div>
    );
  }
}

LeafletMap.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number, PropTypes.number).isRequired
  })).isRequired
};

export default LeafletMap;
