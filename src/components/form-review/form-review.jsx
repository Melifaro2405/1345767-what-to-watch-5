import React from "react";
import PropTypes from "prop-types";
import {sendReview} from "../../serviсes/api-actions";
import {connect} from "react-redux";

const RATE_STARS = [1, 2, 3, 4, 5];
const RATING_MULTIPLIER = 2;

const FormReview = ({
  isActive,
  isLoading,
  isError,
  changeIsLoading,
  changeIsError,
  filmID,
  onSubmit,
  text,
  rating,
  onChangeText,
  onChangeRating
}) => {

  const handleSubmitReview = (evt) => {
    evt.preventDefault();

    changeIsLoading(true);
    onSubmit({
      id: filmID,
      rating: Number(rating) * RATING_MULTIPLIER,
      comment: text
    })
    .catch(() => {
      changeIsLoading(false);
      changeIsError(true);
    });
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
            disabled={!isActive || isLoading}
          >Post
          </button>
        </div>
      </div>
      {isError && <p style={{fontWeight: `bold`, textAlign: `center`, color: `red`}}>
        ОШИБКА ОТПРАВКИ ФОРМЫ
      </p>}
    </form>
  );
};

FormReview.propTypes = {
  filmID: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  changeIsLoading: PropTypes.func.isRequired,
  changeIsError: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(comment) {
    return dispatch(sendReview(comment));
  }
});

export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
