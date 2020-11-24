import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import NewCommentFormScreen from "../new-comment/new-comment-form-screen.jsx";
import ReviewList from "../review-list/review-list.jsx";
import Map from "../map/map.jsx";
import OfferListNeighbors from "../offer-list-neighbors/offer-list-neighbors.jsx";

import {creatOfferDataArray, NEIGHBORS_AMOUNT} from "../../mocks/offers.js";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer} = this.props;
    const neighbourOffers = creatOfferDataArray(NEIGHBORS_AMOUNT);

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/room.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/apartment-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/apartment-02.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/apartment-03.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/studio-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="../img/apartment-01.jpg" alt="Photo studio" />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{offer.premium === 1 ? `Premium` : ``}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: offer.rating * 20 + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxGuests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.cost}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.household.map((item, key) => (
                      <li className="property__inside-item" key={key}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="../img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList
                    reviews={offer.reviews}
                  />
                  <NewCommentFormScreen />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                coordinates={offer.neighbors}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferListNeighbors
                offerList={neighbourOffers}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  offer: PropTypes.shape({
    premium: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    household: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    neighbors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number, PropTypes.number).isRequired).isRequired
  }).isRequired
};

export default OfferScreen;