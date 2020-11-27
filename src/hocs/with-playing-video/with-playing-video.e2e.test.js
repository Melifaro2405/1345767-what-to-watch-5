import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PropTypes from "prop-types";
import withPlayingVideo from "./with-playing-video";
import {film} from "./with-playing-video.test";

configure({adapter: new Adapter()});

const MockComponent = ({children}) => {
  return (<div>
    {children}
  </div>);
};
const MockComponentWrapped = withPlayingVideo(MockComponent);

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

window.HTMLMediaElement.prototype.pause = () => {};
const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockResolvedValue();

it(`Should change state depending on play film`, () => {
  const wrapper = mount(
      <MockComponentWrapped film={film} />
  );

  expect(playStub).toHaveBeenCalled();
  playStub.mockRestore();

  expect(wrapper.state()).toEqual({
    isPlaying: true,
    videoProgress: null,
    videoTimeLeft: null
  });

  wrapper.instance()._handlePlayVideo();
  expect(wrapper.state().isPlaying).toEqual(true);

  wrapper.instance()._handlePauseVideo();
  expect(wrapper.state().isPlaying).toEqual(false);
});
