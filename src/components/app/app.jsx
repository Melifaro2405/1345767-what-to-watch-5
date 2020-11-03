import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
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

const PlayerWrapped = withPlayingVideo(Player);

const App = ({promoFilm, films}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={() => (
          <Main promoFilm={promoFilm} />
        )}/>
        <Route exact path={AppRoute.LOGIN} component={SignIn} />
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (
          <MyList />
        )}/>
        <Route exact path={AppRoute.FILM_BY_ID} render={({match}) => {
          return <MoviePage id={Number(match.params.id)} films={films}/>;
        }}
        />
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={({match}) => {
          const film = films.find(({id}) => id === Number(match.params.id));
          return <AddReview film={film}/>;
        }}
        />
        <Route exact path={AppRoute.PLAYER} render={({match, history}) => {
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
