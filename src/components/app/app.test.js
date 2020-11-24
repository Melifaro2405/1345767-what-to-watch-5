import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {App} from "./app";

jest.mock(`../main/main`, () => `Main`);
jest.mock(`../sign-in/sign-in`, () => `SignIn`);
jest.mock(`../my-list/my-list`, () => `MyList`);
jest.mock(`../movie-page/movie-page`, () => `MoviePage`);
jest.mock(`../add-review/add-review`, () => `AddReview`);
jest.mock(`../player/player`, () => `Player`);

const films = [
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
  }
];

it(`Should App render correctly`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <App films={films} />
      </BrowserRouter>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
