import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const FilmSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      title={FilmSettings.title}
      genre={FilmSettings.genre}
      year={FilmSettings.year}
    />,
    document.querySelector(`#root`)
);
