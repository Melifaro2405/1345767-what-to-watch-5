import React, {PureComponent} from "react";

const withChangeValues = (Component) => {
  class WithChangeValues extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        textValue: ``,
        ratingValue: ``
      };

      this._handleSubmitForm = this._handleSubmitForm.bind(this);
      this._handleChangeText = this._handleChangeText.bind(this);
      this._handleChangeRating = this._handleChangeRating.bind(this);
    }

    _handleSubmitForm(evt) {
      evt.preventDefault();
    }

    _handleChangeText(evt) {
      this.setState({textValue: evt.target.value});
    }

    _handleChangeRating(evt) {
      this.setState({ratingValue: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmit={this._handleSubmitForm}
          onChangeText={this._handleChangeText}
          onChangeRating={this._handleChangeRating}
          textValue = {this.state.textValue}
          ratingValue = {this.state.ratingValue}
        />
      );
    }
  }

  return WithChangeValues;
};

export default withChangeValues;
