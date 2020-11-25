import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._sortOptionsRef = React.createRef();
  }

  _handleClick() {
    this._sortOptionsRef.current.classList.toggle(`places__options--opened`);
  }

  render() {
    const {handleSortClick} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleClick}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul ref={this._sortOptionsRef} onClick={handleSortClick} className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
        {/* <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" defaultValue>Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select> */}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSortClick(evt) {
    dispatch(ActionCreator.sortOffers(evt.target.textContent));
  }
});

Sort.propTypes = {
  handleSortClick: PropTypes.func.isRequired
};

export {Sort};
export default connect(null, mapDispatchToProps)(Sort);
