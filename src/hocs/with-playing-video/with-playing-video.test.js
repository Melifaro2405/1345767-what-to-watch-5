import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayingVideo from "./with-playing-video";

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

const MockComponent = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPlayingVideo(MockComponent);

it(`withPlayingVideo is rendered correctly`, () => {
  const noop = () => {};
  const noopPromise = () => {
    return {
      catch: noop
    };
  };

  const tree = renderer.create(
      <MockComponentWrapped
        film={film}
        onExitButtonClick={noop}
      >
        <React.Fragment />
      </MockComponentWrapped>, {
        createNodeMock: () => {
          return {
            play: noopPromise,
            pause: noop,
            src: `test`,
          };
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
