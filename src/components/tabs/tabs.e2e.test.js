import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {film} from "./tabs.test";

configure({adapter: new Adapter()});

it(`Should button be pressed for change tab on movie page`, () => {
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
  buttonTabOverview.simulate(`click`, {preventDefault: () => {}});

  const buttonTabDetails = wrapper.find(`a.movie-nav__link`).at(`1`);
  buttonTabDetails.simulate(`click`, {preventDefault: () => {}});

  const buttonTabReviews = wrapper.find(`a.movie-nav__link`).at(`2`);
  buttonTabReviews.simulate(`click`, {preventDefault: () => {}});

  expect(handleClickTab).toHaveBeenCalledTimes(3);
});
