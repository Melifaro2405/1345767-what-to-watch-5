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
        onPauseVideo={handlePauseVideo}
        onPlayVideo={noop}
        onClickFullScreen={noop}
        onExitButtonClick={noop}
      />
  );

  wrapper.find(`button.player__play`).simulate(`click`);
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
        onPauseVideo={noop}
        onPlayVideo={handlePlayVideo}
        onClickFullScreen={noop}
        onExitButtonClick={noop}
      />
  );

  wrapper.find(`button.player__play`).simulate(`click`);
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
        onPauseVideo={noop}
        onPlayVideo={noop}
        onClickFullScreen={handleClickFullScreen}
        onExitButtonClick={noop}
      />
  );

  wrapper.find(`button.player__full-screen`).simulate(`click`);
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
        onPauseVideo={noop}
        onPlayVideo={noop}
        onClickFullScreen={noop}
        onExitButtonClick={handleClosePlayer}
      />
  );

  wrapper.find(`button.player__exit`).simulate(`click`);
  expect(handleClosePlayer).toHaveBeenCalledTimes(1);
});
