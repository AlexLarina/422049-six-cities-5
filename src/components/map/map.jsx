import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";

const CITY_COORDINATES = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});
const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const leafletMap = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      ZOOM,
      zoomControl: false,
      marker: true
    });

    leafletMap.setView(CITY_COORDINATES, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(leafletMap);

    this.props.coordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(leafletMap);
    });
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number, PropTypes.number).isRequired).isRequired
};

export default Map;