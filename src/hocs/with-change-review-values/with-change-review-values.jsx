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
        isSent: false
      };

      this._handleChangeIsSent = this._handleChangeIsSent.bind(this);
      this._handleChangeText = this._handleChangeText.bind(this);
      this._handleChangeRating = this._handleChangeRating.bind(this);
    }

    _changeIsSent(value) {
      this.setState({isSent: value});
    }

    _handleChangeIsSent() {
      this._changeIsSent(true);
      setTimeout(this._changeIsSent(false), 3000);
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
          isActive={this.state.isActive}
          isSent={this.state.isSent}
          changeIsSent={this._handleChangeIsSent}
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
