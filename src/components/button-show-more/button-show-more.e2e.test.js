import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ButtonShowMore} from "./button-show-more";

configure({adapter: new Adapter()});

it(`Should button show more be pressed`, () => {
  const handleChangeShownFilms = jest.fn();

  const wrapper = shallow(
      <ButtonShowMore
        countShownFilms={8}
        changeShownFilmsAction={handleChangeShownFilms}
      />
  );

  wrapper.find(`button.catalog__button`).simulate(`click`);
  expect(handleChangeShownFilms).toHaveBeenCalledTimes(1);
});
