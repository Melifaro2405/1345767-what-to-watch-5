import React from 'react';
import renderer from 'react-test-renderer';
import Player from './player';

const noop = () => {};

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

describe(`Should Player render correctly`, () => {
  test.each([
    [`player on play`, true],
    [`player on pause`, false],
  ])(`with %s`, (_expected, isPlaying) => {
    const tree = renderer
      .create(<Player
        film={film}
        isPlaying={isPlaying}
        videoProgress={10}
        videoTimeLeft={700}
        onPlayVideo={noop}
        onPauseVideo={noop}
        onClickFullScreen={noop}
        onExitButtonClick={noop}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
