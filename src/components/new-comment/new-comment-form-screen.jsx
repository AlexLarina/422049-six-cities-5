import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {submitNewComment} from "../../store/api-actions.js";

class NewCommentFormScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ``,
      selectedOption: 0,
      blockForm: false
    };

    this._handleChangeNewComment = this._handleChangeNewComment.bind(this);
    this._handleChangeRating = this._handleChangeRating.bind(this);
    this._handleSubmitButtonClick = this._handleSubmitButtonClick.bind(this);
  }

  _handleChangeNewComment(evt) {
    this.setState({value: evt.target.value});
  }

  _handleChangeRating(evt) {
    this.setState({selectedOption: evt.target.value});
  }

  _resetForm() {
    this.setState({value: ``});
    this.setState({selectedOption: 0});
  }

  _handleSubmitButtonClick(evt) {
    const {offerId, onCommentSubmit} = this.props;
    evt.preventDefault();

    this.setState({blockForm: true});

    onCommentSubmit({
      id: offerId,
      comment: this.state.value,
      rating: this.state.selectedOption
    });

    // @TO-DO сброс всех радиокнопок организовать
    this._resetForm();
    this.setState({blockForm: false});
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            onChange={this._handleChangeRating}
            id="5-stars"
            type="radio"
            disabled={this.state.blockForm}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            onChange={this._handleChangeRating}
            id="4-stars"
            type="radio"
            disabled={this.state.blockForm}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="3"
            onChange={this._handleChangeRating}
            id="3-stars"
            type="radio"
            disabled={this.state.blockForm}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            onChange={this._handleChangeRating}
            id="2-stars"
            type="radio"
            disabled={this.state.blockForm}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="1"
            onChange={this._handleChangeRating}
            id="1-star"
            type="radio"
            disabled={this.state.blockForm}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          value={this.state.value}
          maxLength={300}
          minLength={50}
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._handleChangeNewComment}
          readOnly={this.state.blockForm}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!(this.state.value && this.state.selectedOption)}
            onClick={this._handleSubmitButtonClick}
          >Submit</button>
        </div>
      </form>
    );
  }
}

NewCommentFormScreen.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(commentData) {
    dispatch(submitNewComment(commentData));
  }
});

export {NewCommentFormScreen};
export default connect(null, mapDispatchToProps)(NewCommentFormScreen);
