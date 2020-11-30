import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {chooseCity, updateCityCoordinates} from "../../store/action.js";
import {CITIES} from "../../lib/const.js";
import {getLocationCoordinates} from "../../lib/adapter.js";

class CityList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, cityList, changeCity} = this.props;
    // const cityCoordinates = getLocationCoordinates(
    //     cityList.find((cityItem) => cityItem.name === city).location
    // );
    // console.log('city from citylist');
    // console.log(city);
    // console.log('cityList from city list');
    // console.log(cityList);
    // console.log(cityList.find((cityItem) => cityItem.name === city));

    return (
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName, i) => {
          return (
            <li className="locations__item" key={`city-${i}`}>
              <a className={`locations__item-link tabs__item
                ${city === cityName ? `tabs__item--active` : ``}`}
              href="#"
              >
                <span onClick={(evt) => {
                  const selectedCity = evt.target.textContent;
                  const cityCoordinates = getLocationCoordinates(
                      cityList.find((cityItem) => cityItem.name === selectedCity).location
                  );

                  changeCity(selectedCity, cityCoordinates);
                }}>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({PROCESS, DATA}) => ({
  city: PROCESS.city,
  cityList: DATA.cityList
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city, coords) {
    dispatch(chooseCity(city));
    dispatch(updateCityCoordinates(coords));
  }
});

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  cityList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      })
    })
  })).isRequired,
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
