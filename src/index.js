import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {allFilms} from "./mocks/films";
import {allReviews} from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const FilmSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmSettings={FilmSettings}
        films={allFilms}
        reviews={allReviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
