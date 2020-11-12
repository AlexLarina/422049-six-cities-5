import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const review = this.props.review;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="../img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.author}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.rating * 20 + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">
            {review.date}
          </time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default Review;
