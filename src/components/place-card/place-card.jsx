import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addOfferToFavorite} from "../../store/api-actions.js";

const getCardClassByType = (type) => {
  switch (type) {
    case `cities`:
      return `cities__place-`;
    case `near`:
      return `near-places__`;
    case `favorites`:
      return `favorites__`;
    default:
      return ``;
  }
};

class PlaceCardScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favorite: this.props.offer.isFavorite
    };

    this.handleActiveCard = this.handleActiveCard.bind(this);
    this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
    this.viewFullOffer = this.viewFullOffer.bind(this);
  }

  handleActiveCard() {
    this.props.onHover(this.props.id);
  }

  viewFullOffer() {
    // ?? а тут пропсы не содержат инфы об истории
    // this.props.history.push(`offer/${this.props.id}`);
  }

  handleBookmarkClick() {
    const {onBookmarkClick} = this.props;

    this.setState({favorite: !(this.props.offer.isFavorite)});

    const statusValue = !(this.props.offer.isFavorite) ? 1 : 0;

    onBookmarkClick({
      id: this.props.offer.id,
      status: statusValue
    });
  }

  render() {
    const {offer} = this.props;

    return (
      <article
        key = {this.props.id}
        onMouseOver = {this.handleActiveCard}
        className={`${this.props.className && `${getCardClassByType(this.props.className)}card`} place-card`}
      >
        {offer.premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={`${this.props.className && `${this.props.className}__image-wrapper`} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={offer.photo} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.cost}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${this.state.favorite && `place-card__bookmark-button--active`}`}
              type="button"
              onClick={this.handleBookmarkClick}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.rating * 20 + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${this.props.id}`} onClick={this.viewFullOffer}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCardScreen.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number,
    premium: PropTypes.bool,
    photo: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(data) {
    dispatch(addOfferToFavorite(data));
  }
});

export {PlaceCardScreen};
export default connect(null, mapDispatchToProps)(PlaceCardScreen);
