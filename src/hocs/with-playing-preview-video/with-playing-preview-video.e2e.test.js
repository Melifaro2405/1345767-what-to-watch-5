import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayingPreviewVideo from "./with-playing-preview-video";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPlayingPreviewVideo(MockComponent);

it(`Should change state depending playing preview video`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().isPlayingVideo).toEqual(false);

  wrapper.instance()._handleMouseOver();
  setTimeout(() => {
    expect(wrapper.state().isPlayingVideo).toEqual(true);
  }, 1000);

  wrapper.instance()._handleMouseOut();
  expect(wrapper.state().isPlayingVideo).toEqual(false);
});
