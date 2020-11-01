import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
// import PrivateRoute from "../private-route/private-route";
import {filmProptypes} from "../../props-validation";
import withPlayingVideo from "../../hocs/with-playing-video/with-playing-video";

const PlayerWrapped = withPlayingVideo(Player);

const App = ({promoFilm, films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (
          <Main promoFilm={promoFilm} />
        )}/>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/mylist" component={MyList} />
        <Route exact path="/films/:id" render={({match}) => {
          const id = Number(match.params.id);
          return <MoviePage id={id} films={films}/>;
        }}
        />
        <Route exact path="/films/:id/review" render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <AddReview film={film}/>;
        }}
        />
        <Route exact path="/player/:id" render={({match, history}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <PlayerWrapped film={film} onExitButtonClick={() => history.goBack()} />;
        }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape(filmProptypes).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm
});

export {App};
export default connect(mapStateToProps)(App);
