import React, {PureComponent} from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {MAP_ZOOM} from "../../lib/const.js";

import "leaflet/dist/leaflet.css";

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
    this._pins = [];
  }

  componentDidMount() {
    this._leafletMap = leaflet.map(`map`, {
      center: this.props.cityCoordinates,
      MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    this._leafletMap.setView(this.props.cityCoordinates, MAP_ZOOM);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `
              &copy;
              <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
              contributors
              &copy;
              <a href="https://carto.com/attributions">CARTO</a>`
          })
      .addTo(this._leafletMap);

    this._renderPinsOnMap();

    if (this.props.activeOfferCoordinates) {
      this._renderActivePin();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityCoordinates !== prevProps.cityCoordinates) {

      this._renderPinsOnMap();

      this._leafletMap.flyTo(
          this.props.cityCoordinates,
          MAP_ZOOM,
          {duration: 0.5}
      );
    } else if (this.props.activeOfferCoordinates !== prevProps.activeOfferCoordinates) {
      this._renderPinsOnMap();
      this._renderActivePin();
    }
  }

  omponentWillUnmount() {
    this._leafletMap.remove();
    this._pins = null;
    this._leafletMap = null;
    this._mapRef.current.remove();
  }

  _renderPinsOnMap() {
    if (this._leafletMap) {
      const {coordinates} = this.props;

      this._pins.forEach((pin) => {
        this._leafletMap.removeLayer(pin);
      });

      coordinates.map((coordPair) => {
        this._pins.push(
            leaflet
              .marker(coordPair, {icon: pinIcon})
              .addTo(this._leafletMap)
        );
      });

    }
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
  cityCoordinates: PropTypes.arrayOf(PropTypes.number, PropTypes.number).isRequired,
  activeOfferCoordinates: PropTypes.arrayOf(PropTypes.number, PropTypes.number)
};

const mapStateToProps = ({PROCESS}) => ({
  cityCoordinates: PROCESS.cityCoordinates,
});

export {Map};
export default connect(mapStateToProps)(Map);
