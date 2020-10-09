import React, {PureComponent} from "react";

export default class FormReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ``,
      rateValue: `3`
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  handleRateChange(evt) {
    this.setState({rateValue: evt.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars" onChange={this.handleRateChange}>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value="1"
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>

            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value="2"
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>

            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value="3"
              defaultChecked
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>

            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value="4"
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>

            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value="5"
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
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
  }
}
