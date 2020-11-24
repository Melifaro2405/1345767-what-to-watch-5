import {adaptFilmToClient} from "./adapt-to-client";

const filmFromServer = {
  "id": 1,
  "name": `test`,
  "poster_image": `test`,
  "preview_image": `test`,
  "background_image": `test`,
  "background_color": `test`,
  "video_link": `test`,
  "preview_video_link": `test`,
  "description": `test`,
  "rating": 1,
  "scores_count": 1,
  "director": `test`,
  "starring": [`test`],
  "run_time": 1,
  "genre": `test`,
  "released": 1,
  "is_favorite": false,
};

const adaptedFilm = {
  id: 1,
  preview: {
    src: `test`,
    title: `test`
  },
  moreInfo: {
    backgroundSrc: `test`,
    backgroundColor: `test`,
    posterSrc: `test`,
    genre: `test`,
    releaseDate: 1,
    playPreviewSrc: `test`,
    playVideoSrc: `test`,
    isAddToMyList: false
  },
  overview: {
    description: `test`,
    rating: 1,
    ratingCount: 1,
    director: `test`,
    actorsList: [`test`]
  },
  details: {
    runtime: 1
  }
};

it(`Should to adapt film from server to client`, () => {
  expect(adaptFilmToClient(filmFromServer)).toEqual(adaptedFilm);
});
