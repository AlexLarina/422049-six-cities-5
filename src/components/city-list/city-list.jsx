import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {chooseCity} from "../../store/action.js";
import {CITIES} from "../../lib/const.js";

class CityList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, handleClick} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName, i) => {
          return (
            <li className="locations__item" key={`city-${i}`}>
              <a className={`locations__item-link tabs__item
                ${city === cityName ? `tabs__item--active` : ``}`}
              href="#"
              >
                <span onClick={handleClick}>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({PROCESS}) => ({
  city: PROCESS.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick(evt) {
    dispatch(chooseCity(evt.target.textContent));
    // @TO-DO заменить селектом по городам
    //dispatch(ActionCreator.getOfferList());
  }
});

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
