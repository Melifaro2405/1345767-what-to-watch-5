import React, {PureComponent} from "react";

const withAddFilmByID = (Component) => {
  class WithAddFilmByID extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };

      this._handleClickTab = this._handleClickTab.bind(this);
    }

    _handleClickTab(tab) {
      this.setState({activeTab: tab});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab = {this.state.activeTab}
          handleClickTab={this._handleClickTab}
        />
      );
    }
  }

  return WithAddFilmByID;
};

export default withAddFilmByID;
