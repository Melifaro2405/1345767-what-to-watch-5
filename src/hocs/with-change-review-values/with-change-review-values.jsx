import React, {PureComponent} from "react";
import {CommentLength} from "../../consts";

const withChangeReviewValues = (Component) => {
  class WithChangeReviewValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        rating: ``,
        isActive: false,
        isLoading: false,
        isError: false
      };

      this._changeIsLoading = this._changeIsLoading.bind(this);
      this._changeIsError = this._changeIsError.bind(this);
      this._handleChangeText = this._handleChangeText.bind(this);
      this._handleChangeRating = this._handleChangeRating.bind(this);
    }

    _changeIsLoading(value) {
      this.setState({
        isLoading: value
      });
    }

    _changeIsError(value) {
      this.setState({
        isError: value
      });
    }

    _successData() {
      const {rating, text} = this.state;

      return (text.length > CommentLength.MIN && text.length < CommentLength.MAX && rating)
        ? this.setState({isActive: true})
        : this.setState({isActive: false});
    }

    _handleChangeText(evt) {
      this.setState({text: evt.target.value}, this._successData);
    }

    _handleChangeRating(evt) {
      this.setState({rating: evt.target.value}, this._successData);
    }

    render() {
      return (
        <Component
          {...this.props}
          isLoading={this.state.isLoading}
          isError={this.state.isError}
          changeIsLoading={this._changeIsLoading}
          changeIsError={this._changeIsError}
          isActive={this.state.isActive}
          onChangeText={this._handleChangeText}
          onChangeRating={this._handleChangeRating}
          text = {this.state.text}
          rating = {this.state.rating}
        />
      );
    }
  }

  return WithChangeReviewValues;
};

export default withChangeReviewValues;
