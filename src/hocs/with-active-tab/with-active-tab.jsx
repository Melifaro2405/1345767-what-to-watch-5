import React, {PureComponent} from "react";
import {MovieTabs} from "../../components/tabs/tabs.consts";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieTabs.OVERVIEW,
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
          onClickTab={this._handleClickTab}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
