import {ALL_GENRES} from "./consts";
import {getGenres, getRatingDescription, returnElapsedTime} from "./utils";

const films = [
  {
    id: 1,
    moreInfo: {
      backgroundSrc: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
      genre: `Comedy`,
      releaseDate: 2020,
      playPreviewSrc: `https://some-link`,
      playVideoSrc: `https://some-link`,
      isAddToMyList: false
    }
  },
  {
    id: 2,
    moreInfo: {
      backgroundSrc: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
      genre: `Drama`,
      releaseDate: 2001,
      playPreviewSrc: `https://some-link`,
      playVideoSrc: `https://some-link`,
      isAddToMyList: false
    }
  },
  {
    id: 3,
    moreInfo: {
      backgroundSrc: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
      genre: `Fantasy`,
      releaseDate: 2010,
      playPreviewSrc: `https://some-link`,
      playVideoSrc: `https://some-link`,
      isAddToMyList: false
    }
  },
];

it(`Should get genres by films array`, () => {
  expect(getGenres(films)).toEqual([ALL_GENRES, `Comedy`, `Drama`, `Fantasy`]);
  expect(getGenres([])).toEqual([ALL_GENRES]);
});

it(`Should convert elapsed time for film player`, () => {
  expect(returnElapsedTime(725)).toEqual(`00:12:5`);
});

it(`Should return converted film rating description from rating`, () => {
  expect(getRatingDescription(0)).toEqual(``);
  expect(getRatingDescription(4)).toEqual(`Normal`);
  expect(getRatingDescription(9)).toEqual(`Very good`);
});
