import React, {PureComponent} from "react";
import PlaceCardFavorites from "../place-card-favorites/place-card-favorites.jsx";

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {favoritesList} = this.props;

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">

            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default FavoritesList;
