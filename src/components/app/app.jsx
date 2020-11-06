import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PrivateRoute from "../private-route/private-route";
import {filmProptypes} from "../../props-validation";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../consts";
import withPlayingVideo from "../../hocs/with-playing-video/with-playing-video";
import withAddFilmByID from "../../hocs/with-add-film-by-id/with-add-film-by-id";
import withChangeAuthValues from "../../hocs/with-change-auth-values/with-change-auth-values";

const PlayerWrapped = withPlayingVideo(Player);
const MoviePageWrapped = withAddFilmByID(MoviePage);
const SignInWrapped = withChangeAuthValues(SignIn);

const App = ({films}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main} />
        <Route exact path={AppRoute.LOGIN} component={SignInWrapped} />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (
          <MyList />
        )}/>
        <Route exact path={AppRoute.FILM_BY_ID} render={({match}) => {
          return <MoviePageWrapped id={Number(match.params.id)} films={films}/>;
        }}
        />
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <AddReview film={film}/>;
        }}
        />
        <Route exact path={AppRoute.PLAYER_BY_ID} render={({match, history}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <PlayerWrapped film={film} onExitButtonClick={() => history.goBack()} />;
        }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films
});

export {App};
export default connect(mapStateToProps)(App);
