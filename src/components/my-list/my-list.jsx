import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFavoriteFilmList} from "../../serviсes/api-actions";
import {filmProptypes} from "../../props-validation";
import {Link} from "react-router-dom";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {AppRoute} from "../../consts";

class MyList extends PureComponent {

  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {favoriteFilms, login} = this.props;
    const {avatar} = login;
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={avatar} alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList films={favoriteFilms} />
        </section>

        <Footer />
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
  login: PropTypes.shape({
    avatar: PropTypes.string
  })
};

const mapStateToProps = ({DATA, USER}) => ({
  favoriteFilms: DATA.favoriteFilms,
  login: USER.login
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(fetchFavoriteFilmList());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
