import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {MovieTabs} from "../../components/tabs/tabs.consts";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should change state depending on handleClickTab`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().activeTab).toEqual(MovieTabs.OVERVIEW);

  wrapper.instance()._handleClickTab(MovieTabs.DETAILS);
  expect(wrapper.state().activeTab).toEqual(MovieTabs.DETAILS);

  wrapper.instance()._handleClickTab(MovieTabs.REVIEWS);
  expect(wrapper.state().activeTab).toEqual(MovieTabs.REVIEWS);
});
