import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";

const withPlayingVideo = (Component) => {
  class WithPlayingVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        videoProgress: null,
        videoTimeLeft: null
      };

      this._handlePlayVideo = this._handlePlayVideo.bind(this);
      this._handlePauseVideo = this._handlePauseVideo.bind(this);
      this._handleClickFullScreen = this._handleClickFullScreen.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      const {playVideoSrc} = this.props.film.moreInfo;

      video.src = playVideoSrc;
      video.play();
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      return (isPlaying) ? video.play() : video.pause();
    }

    _handlePlayVideo() {
      this.setState({isPlaying: true});
    }

    _handlePauseVideo() {
      this.setState({isPlaying: false});
    }

    _handleClickFullScreen() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _handleTimeUpdate() {
      const {currentTime, duration} = this._videoRef.current;

      if (duration) {
        this.setState({
          videoProgress: currentTime * 100 / duration,
          videoTimeLeft: duration - currentTime,
        });
      }
    }

    render() {
      const {isPlaying, videoProgress, videoTimeLeft} = this.state;
      const {onExitButtonClick, film} = this.props;
      const {playVideoSrc} = film.moreInfo;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          handlePlayVideo={this._handlePlayVideo}
          handlePauseVideo={this._handlePauseVideo}
          handleClickFullScreen={this._handleClickFullScreen}
          onExitButtonClick={onExitButtonClick}
          videoProgress={videoProgress}
          videoTimeLeft={videoTimeLeft}
        >
          <video
            ref={this._videoRef}
            onTimeUpdate={this._handleTimeUpdate}
            className="player__video"
            poster="img/player-poster.jpg"
            src={playVideoSrc}
          />
        </Component>
      );
    }
  }

  WithPlayingVideo.propTypes = {
    film: PropTypes.shape(filmProptypes).isRequired,
    onExitButtonClick: PropTypes.func
  };

  return WithPlayingVideo;
};

export default withPlayingVideo;
