import React, {PureComponent} from "react";

const withPlayingPreviewVideo = (Component) => {
  class WithPlayingPreviewVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._timeoutId = null;
      this.state = {isPlayingVideo: false};

      this._handleMouseOver = this._handleMouseOver.bind(this);
      this._handleMouseOut = this._handleMouseOut.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timeoutId);
    }

    _handleMouseOver() {
      this._timeoutId = setTimeout(() => {
        this.setState({isPlayingVideo: true});
      }, 1000);
    }

    _handleMouseOut() {
      this.setState({isPlayingVideo: false});
      clearTimeout(this._timeoutId);
      this._timeoutId = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseOver={this._handleMouseOver}
          onMouseOut={this._handleMouseOut}
          isPlayingVideo={this.state.isPlayingVideo}
        />
      );
    }
  }

  return WithPlayingPreviewVideo;
};

export default withPlayingPreviewVideo;
