import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import fscreen from "fscreen";

const withPlayingVideo = (Component) => {
  class WithPlayingVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._mounted = false;

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
      this._mounted = true;

      const video = this._videoRef.current;
      const {playVideoSrc} = this.props.film.moreInfo;

      video.src = playVideoSrc;
      video.play()
        .catch(() => this._handlePauseVideo())
      ;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      return (isPlaying)
        ? video.play()
            .catch(() => this._handlePauseVideo())
        : video.pause();
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    _handlePlayVideo() {
      if (this._mounted) {
        this.setState({isPlaying: true});
      }
    }

    _handlePauseVideo() {
      if (this._mounted) {
        this.setState({isPlaying: false});
      }
    }

    _handleClickFullScreen() {
      const video = this._videoRef.current;
      fscreen.requestFullscreen(video);
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
          onPlayVideo={this._handlePlayVideo}
          onPauseVideo={this._handlePauseVideo}
          onClickFullScreen={this._handleClickFullScreen}
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
