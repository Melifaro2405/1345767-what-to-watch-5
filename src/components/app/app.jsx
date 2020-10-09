import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {allFilmsProptypes, allReviewsProptypes} from "../../utils";

const App = ({filmSettings, films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (
          <Main
            filmSettings={filmSettings}
            films={films}
            reviews={reviews}
          />
        )}/>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/mylist" render={() => {
          const favoriteFilms = films.filter((film) => film.moreInfo.isAddToMyList);
          return <MyList favoriteFilms={favoriteFilms} />;
        }}
        />
        <Route exact path="/films/:id" render={({match}) => {
          const id = match.params.id;
          const film = films.find((item) => item.id === parseInt(id, 10));
          return <MoviePage film={film} />;
        }}
        />
        <Route exact path="/films/:id/review" render={({match}) => {
          const id = match.params.id;
          const film = films.find((item) => item.id === parseInt(id, 10));
          return <AddReview id={id} title={film.preview.title}/>;
        }}
        />
        <Route exact path="/player/:id" component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

App.propTypes = allFilmsProptypes;
App.propTypes = allReviewsProptypes;
