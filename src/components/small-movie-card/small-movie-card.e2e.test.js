import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {film} from "./small-movie-card.test";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Should mouse over on small film card`, () => {
  const handleMouseOver = jest.fn();

  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        isPlayingVideo={false}
        onMouseOver={handleMouseOver}
        onMouseOut={noop}
      />
  );

  const smallMovieCard = wrapper.find(`.small-movie-card__image`);
  smallMovieCard.simulate(`mouseover`);
  expect(handleMouseOver).toHaveBeenCalledTimes(1);
});

it(`Should mouse out with small film card`, () => {
  const handleMouseOut = jest.fn();

  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        isPlayingVideo={false}
        onMouseOver={noop}
        onMouseOut={handleMouseOut}
      />
  );

  const smallMovieCard = wrapper.find(`.small-movie-card__image`);
  smallMovieCard.simulate(`mouseout`);
  expect(handleMouseOut).toHaveBeenCalledTimes(1);
});
