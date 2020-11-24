import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";

configure({adapter: new Adapter()});

it(`Should button for change film filter be pressed`, () => {
  const handleChangeActiveFilter = jest.fn();

  const wrapper = shallow(
      <GenresList
        genres={[`test1, test2, test3`]}
        activeGenre={`test`}
        changeActiveFilterAction={handleChangeActiveFilter}
      />
  );

  wrapper.find(`li.catalog__genres-item`).simulate(`click`, {preventDefault: () => {}});
  expect(handleChangeActiveFilter).toHaveBeenCalledTimes(1);
});
