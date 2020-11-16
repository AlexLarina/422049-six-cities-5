import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Review from "../review/review.jsx";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const reviewList = this.props.reviews;
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot;
          <span className="reviews__amount">
            {reviewList.length}
          </span>
        </h2>
        <ul className="reviews__list">
          {reviewList.map((review, i) => (
            <Review
              key={`${i}-${review.id}`}
              review={review}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default ReviewList;
