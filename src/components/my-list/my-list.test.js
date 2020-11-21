import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {MyList} from './my-list';

jest.mock(`../movies-list/movies-list`, () => `MoviesList`);
jest.mock(`../footer/footer`, () => `Footer`);

const noop = () => {};

export const films = [
  {
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  }
];

it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MyList
            favoriteFilms={films}
            loadFavoriteFilms={noop}
            login={{avatar: `test`}}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
