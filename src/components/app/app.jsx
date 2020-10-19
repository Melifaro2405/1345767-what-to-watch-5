import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {filmProptypes, reviewProptypes} from "../../props-validation";

const App = ({filmSettings, films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (
          <Main
            filmSettings={filmSettings}
          />
        )}/>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/mylist" render={() => {
          const favoriteFilms = films.filter((film) => film.moreInfo.isAddToMyList);
          return <MyList favoriteFilms={favoriteFilms} />;
        }}
        />
        <Route exact path="/films/:id" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          const currentFilmReviews = reviews.filter(({filmId}) => filmId === Number(match.params.id));
          return <MoviePage films={films} film={film} reviews={currentFilmReviews} />;
        }}
        />
        <Route exact path="/films/:id/review" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <AddReview film={film}/>;
        }}
        />
        <Route exact path="/player/:id" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <Player film={film}/>;
        }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  filmSettings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProptypes)).isRequired
};
