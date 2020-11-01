import {createSelector} from 'reselect';
import {ALL_GENRES} from '../../consts';

const filmsSelector = ({DATA}) => DATA.films;
const activeGenreSelector = ({APP_STATE}) => APP_STATE.activeGenre;

export const getFilmsByGenre = createSelector(
    filmsSelector,
    activeGenreSelector,
    (films, genre) =>
      (genre === ALL_GENRES) ? films : films.filter(({moreInfo}) => moreInfo.genre === genre));
