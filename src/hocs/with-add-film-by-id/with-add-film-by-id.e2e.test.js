import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAddFilmByID from "./with-add-film-by-id";

configure({adapter: new Adapter()});

const film = {isAddToMyList: false};
const updatedFilm = {isAddToMyList: true};

const MockComponent = () => <div />;
const MockComponentWrapped = withAddFilmByID(MockComponent);

it(`Should change state by update film ID & film status`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.state().film).toEqual(null);

  wrapper.instance()._updateFilmByID(film);
  expect(wrapper.state().film).toEqual(film);

  wrapper.instance()._updateFilmByStatus(updatedFilm);
  expect(wrapper.state().film).toEqual(updatedFilm);
});
