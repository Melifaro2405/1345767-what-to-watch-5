import React from "react";
import PropTypes from "prop-types";
import {sendReview} from "../../serviсes/api-actions";
import {connect} from "react-redux";

const RATE_STARS = [1, 2, 3, 4, 5];
const RATING_MULTIPLIER = 2;

const FormReview = ({
  isActive,
  isSent,
  filmID,
  onSubmit,
  text,
  rating,
  onChangeText,
  onChangeRating,
  changeIsSent
}) => {

  const handleSubmitReview = (evt) => {
    evt.preventDefault();

    changeIsSent(true);
    // onSubmit({
    //   id: Number(filmID),
    //   rating: Number(rating) * RATING_MULTIPLIER,
    //   comment: text
    // });
    changeIsSent(false);
  };

  return (
    <form onSubmit={handleSubmitReview} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={onChangeRating}>
          {RATE_STARS.map((star) =>
            <React.Fragment key={star}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                defaultChecked={Number(rating) === star}
              />
              <label
                className="rating__label"
                htmlFor={`star-${star}`}
              >
                {`Rating ${star}`}
              </label>
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          minLength="50"
          maxLength="400"
          value={text}
          onChange={onChangeText}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
        ></textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!isActive || isSent}
          >Post
          </button>
        </div>
      </div>
      {/* {isActive && <p>Please enter a valid data</p>} */}
    </form>
  );
};

FormReview.propTypes = {
  filmID: PropTypes.number.isRequired,
  changeIsSent: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isSent: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment) {
    dispatch(sendReview(comment));
  }
});

export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
