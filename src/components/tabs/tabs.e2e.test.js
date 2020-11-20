import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {film} from "./tabs.test";

configure({adapter: new Adapter()});

it(`Should button for change film status be pressed`, () => {
  const handleClickTab = jest.fn();

  const wrapper = shallow(
      <Tabs
        id={1}
        film={film}
        activeTab={`test`}
        handleClickTab={handleClickTab}
      />
  );

  const buttonTabOverview = wrapper.find(`a.movie-nav__link`).at(`0`);
  const buttonTabDetails = wrapper.find(`a.movie-nav__link`).at(`1`);
  const buttonTabReviews = wrapper.find(`a.movie-nav__link`).at(`2`);
  buttonTabOverview.simulate(`click`, {preventDefault: () => {}});
  buttonTabDetails.simulate(`click`, {preventDefault: () => {}});
  buttonTabReviews.simulate(`click`, {preventDefault: () => {}});
  expect(handleClickTab).toHaveBeenCalledTimes(3);
});
