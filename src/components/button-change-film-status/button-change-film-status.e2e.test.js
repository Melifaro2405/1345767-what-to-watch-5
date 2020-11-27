import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonChangeFilmStatus from "./button-change-film-status";

configure({adapter: new Adapter()});

it(`Should button for change film status be pressed`, () => {
  const handleChangeFilmStatus = jest.fn();

  const wrapper = shallow(
      <ButtonChangeFilmStatus
        isAddToMyList={true}
        onChangeFilmStatus={handleChangeFilmStatus}
      />
  );

  wrapper.find(`button.btn--list`).simulate(`click`);
  expect(handleChangeFilmStatus).toHaveBeenCalledTimes(1);
});
