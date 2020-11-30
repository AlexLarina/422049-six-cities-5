import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";

//const CITY_COORDINATES = [52.38333, 4.9];
const ZOOM = 12;

const pinIcon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

const activePinIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});
class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();

    this._leafletMap = null;
  }

  componentDidMount() {
    this._leafletMap = leaflet.map(`map`, {
      center: this.props.cityCoordinates,
      ZOOM,
      zoomControl: false,
      marker: true
    });

    this._leafletMap.setView(this.props.cityCoordinates, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._leafletMap);

    this._renderPinsOnMap();

    if (this.props.activeOfferCoordinates) {
      this._renderActivePin();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeOfferCoordinates !== prevProps.activeOfferCoordinates) {
      this._renderPinsOnMap();
      this._renderActivePin();
    }
  }

  _renderPinsOnMap() {
    this.props.coordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon: pinIcon})
        .addTo(this._leafletMap);
    });
  }

  _renderActivePin() {
    leaflet
      .marker(this.props.activeOfferCoordinates, {icon: activePinIcon})
      .addTo(this._leafletMap);
  }

  render() {
    return (
      <div ref={this._mapRef} id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number, PropTypes.number).isRequired).isRequired,
  activeOfferCoordinates: PropTypes.arrayOf(PropTypes.number, PropTypes.number)
};

export default Map;
