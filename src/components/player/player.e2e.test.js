import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player";
import {film} from "./player.test";

const noop = () => {
};

configure({
  adapter: new Adapter(),
});

it(`Should pause button be pressed`, () => {
  const handlePauseVideo = jest.fn();

  const wrapper = shallow(
      <Player
        film={film}
        isPlaying={true}
        videoProgress={10}
        videoTimeLeft={700}
        handlePauseVideo={handlePauseVideo}
        handlePlayVideo={noop}
        handleClickFullScreen={noop}
        onExitButtonClick={noop}
      />
  );

  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);
  expect(handlePauseVideo).toHaveBeenCalledTimes(1);
});

it(`Should play button be pressed`, () => {
  const handlePlayVideo = jest.fn();

  const wrapper = shallow(
      <Player
        film={film}
        isPlaying={false}
        videoProgress={10}
        videoTimeLeft={700}
        handlePauseVideo={noop}
        handlePlayVideo={handlePlayVideo}
        handleClickFullScreen={noop}
        onExitButtonClick={noop}
      />
  );

  const playButton = wrapper.find(`button.player__play`);
  playButton.simulate(`click`);
  expect(handlePlayVideo).toHaveBeenCalledTimes(1);
});

it(`Should fullscreen button be pressed`, () => {
  const handleClickFullScreen = jest.fn();

  const wrapper = shallow(
      <Player
        film={film}
        isPlaying={true}
        videoProgress={10}
        videoTimeLeft={700}
        handlePauseVideo={noop}
        handlePlayVideo={noop}
        handleClickFullScreen={handleClickFullScreen}
        onExitButtonClick={noop}
      />
  );

  const fullScreenButton = wrapper.find(`button.player__full-screen`);
  fullScreenButton.simulate(`click`);
  expect(handleClickFullScreen).toHaveBeenCalledTimes(1);
});

it(`Should button for close player be pressed`, () => {
  const handleClosePlayer = jest.fn();

  const wrapper = shallow(
      <Player
        film={film}
        isPlaying={true}
        videoProgress={10}
        videoTimeLeft={700}
        handlePauseVideo={noop}
        handlePlayVideo={noop}
        handleClickFullScreen={noop}
        onExitButtonClick={handleClosePlayer}
      />
  );

  const closePlayerButton = wrapper.find(`button.player__exit`);
  closePlayerButton.simulate(`click`);
  expect(handleClosePlayer).toHaveBeenCalledTimes(1);
});
