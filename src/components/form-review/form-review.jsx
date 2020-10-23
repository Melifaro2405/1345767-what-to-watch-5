import React from "react";
import PropTypes from "prop-types";

const RATE_STARS = [1, 2, 3, 4, 5];

const FormReview = ({onSubmit, onChangeText, onChangeRating, textValue, ratingValue}) => {

  return (
    <form onSubmit={onSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={onChangeRating}>
          {RATE_STARS.map((star) =>
            <React.Fragment key={`${star}`}>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={`${star}`}
                defaultChecked={Number(ratingValue) === star}
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
          value={textValue}
          onChange={onChangeText}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
        ></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

FormReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
  ratingValue: PropTypes.string.isRequired,
};

export default FormReview;
