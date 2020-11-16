import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const getCardClassByType = (type) => {
  switch (type) {
    case `cities`:
      return `cities__place-`;
    case `near`:
      return `near-places__`;
    default:
      return ``;
  }
};

class PlaceCardScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleActiveCard = this.handleActiveCard.bind(this);
    this.viewFullOffer = this.viewFullOffer.bind(this);
  }

  handleActiveCard() {
    this.props.onHover(this.props.id);
  }

  viewFullOffer() {
    // ?? а тут пропсы не содержат инфы об истории
    // this.props.history.push(`offer/${this.props.id}`);
  }

  render() {
    const {offer} = this.props;

    return (
      <article
        key = {this.props.id}
        onMouseOver = {this.handleActiveCard}
        className={`${this.props.className && `${getCardClassByType(this.props.className)}card`} place-card`}
      >
        <div className="place-card__mark">
          <span>{offer.premium === 1 ? `Premium` : ``}</span>
        </div>
        <div className={`${this.props.className && `${this.props.className}__image-wrapper`} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={`/img/${offer.photo}`} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.cost}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default PlaceCardScreen;
