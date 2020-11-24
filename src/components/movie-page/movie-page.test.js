import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../consts';
import {MoviePage} from './movie-page';

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../button-change-film-status/button-change-film-status`, () => `ButtonChangeFilmStatus`);
jest.mock(`../tabs/tabs`, () => `Tabs`);
jest.mock(`../movies-list/movies-list`, () => `MoviesList`);
jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};
const noopPromise = () => {
  return {
    then: noop
  };
};

export const film = {
  id: 1,
  preview: {
    src: `img/the-grand-budapest-hotel-poster.jpg`,
    title: `The Grand Budapest Hotel`
  },
  moreInfo: {
    backgroundSrc: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Comedy`,
    releaseDate: 2014,
    playPreviewSrc: `https://some-link`,
    playVideoSrc: `https://some-link`,
    isAddToMyList: false
  },
  overview: {
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
      presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy,
      becomes Gustave's friend and protege.`,
    rating: 8.9,
    ratingCount: 240,
    director: `Wes Andreson`,
    actorsList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`]
  },
  details: {
    runtime: 99
  }
};

export const films = [film];

describe(`Should MoviePage render correctly`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s authorization`, (_expected, authorizationStatus) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage
              id={1}
              film={film}
              films={films}
              getFilm={noopPromise}
              updateFilmByID={noop}
              changeFilmStatus={noop}
              updateFilmByStatus={noop}
              authorizationStatus={authorizationStatus}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
