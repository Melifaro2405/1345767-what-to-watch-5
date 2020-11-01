import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFavoriteFilmList} from "../../serviсes/api-actions";
import MoviesListFavorite from "../movies-list-favorite/movies-list-favorite";
import {filmProptypes} from "../../props-validation";
import {Link} from "react-router-dom";

class MyList extends PureComponent {

  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {favoriteFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            <MoviesListFavorite favoriteFilms={favoriteFilms} />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={`/`} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmProptypes)).isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(fetchFavoriteFilmList());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);


