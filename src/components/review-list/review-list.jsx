import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Review from "../review/review.jsx";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviewList} = this.props;

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
  reviewList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          [`avatar_url`]: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          [`is_pro`]: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

const mapStateToProps = ({DATA}) => ({
  reviewList: DATA.offerCommentsList
});

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);
