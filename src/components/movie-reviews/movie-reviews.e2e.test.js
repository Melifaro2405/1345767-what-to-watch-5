import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieReviews} from "./movie-reviews";
import {reviews} from "./movie-reviews.test";

configure({adapter: new Adapter()});

it(`Should called handler with get reviews for film by id`, () => {
  const handleGetReviews = jest.fn();

  shallow(
      <MovieReviews
        id={1}
        reviews={reviews}
        loadReviews={handleGetReviews}
      />
  );

  expect(handleGetReviews).toHaveBeenCalledTimes(1);
});
