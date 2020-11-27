import React from "react";
import PropTypes from "prop-types";
import {filmProptypes} from "../../props-validation";
import {returnElapsedTime} from "../../utils";


const Player = ({
  film,
  children,
  isPlaying,
  videoProgress,
  videoTimeLeft,
  onPlayVideo,
  onPauseVideo,
  onClickFullScreen,
  onExitButtonClick
}) => {
  const {preview: {title}} = film;

  return (
    <div className="player">

      {children}

      <button onClick={onExitButtonClick} type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${videoProgress}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {returnElapsedTime(videoTimeLeft)}
          </div>
        </div>

        <div className="player__controls-row">
          <button onClick={isPlaying ? onPauseVideo : onPlayVideo} type="button"
            className="player__play">
            {!isPlaying && (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>)}
            {isPlaying && (
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>)}
          </button>
          <div className="player__name">{title}</div>

          <button onClick={onClickFullScreen} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: PropTypes.shape(filmProptypes).isRequired,
  children: PropTypes.node,
  isPlaying: PropTypes.bool.isRequired,
  onPlayVideo: PropTypes.func.isRequired,
  onPauseVideo: PropTypes.func.isRequired,
  onClickFullScreen: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  videoProgress: PropTypes.number,
  videoTimeLeft: PropTypes.number
};

export default Player;
