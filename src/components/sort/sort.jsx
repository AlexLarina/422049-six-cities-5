import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._sortOptionsListRef = React.createRef();
    this._currentSortOptionRef = React.createRef();

    this._currentSortOption = `Popular`;
  }

  _handleClick(evt) {
    this._sortOptionsListRef.current.classList.toggle(`places__options--opened`);
    // @TO-DO как бы мне накидывать на выбранный option класс active, чтобы миллион ссылок не городить

    if (evt.target.textContent !== this._currentSortOption) {
      this.props.handleSortClick(evt);
      this._currentSortOption = evt.target.textContent;
      // @TO-DO как бы тут всобачить innerHtml, чтобы svg иконка не пропадала
      this._currentSortOptionRef.current.textContent = this._currentSortOption;
    }
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span ref={this._currentSortOptionRef} className="places__sorting-type" tabIndex="0" onClick={this._handleClick}>
          {this._currentSortOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul ref={this._sortOptionsListRef} onClick={this._handleClick} className="places__options places__options--custom">
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
