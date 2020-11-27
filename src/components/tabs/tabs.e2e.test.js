import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {film} from "./tabs.test";

configure({adapter: new Adapter()});

it(`Should button be pressed for change tab on movie page`, () => {
  const handleClickTab = jest.fn();
  const clickLinkPrevention = jest.fn();

  const wrapper = shallow(
      <Tabs
        id={1}
        film={film}
        activeTab={`test`}
        onClickTab={handleClickTab}
      />
  );

  wrapper.find(`a.movie-nav__link`).at(`0`).simulate(`click`, {
    preventDefault: clickLinkPrevention
  });

  wrapper.find(`a.movie-nav__link`).at(`1`).simulate(`click`, {
    preventDefault: clickLinkPrevention
  });

  wrapper.find(`a.movie-nav__link`).at(`2`).simulate(`click`, {
    preventDefault: clickLinkPrevention
  });

  expect(handleClickTab).toHaveBeenCalledTimes(3);
  expect(clickLinkPrevention).toHaveBeenCalledTimes(3);
});
