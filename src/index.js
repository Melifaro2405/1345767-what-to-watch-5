import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {allFilms} from "./mocks/films";
import {allReviews} from "./mocks/reviews";

const FilmSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      filmSettings={FilmSettings}
      films={allFilms}
      reviews={allReviews}
    />,
    document.querySelector(`#root`)
);
