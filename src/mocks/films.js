import {random} from "lodash";
import {shuffle} from "lodash";
import {FilmRating, FILMCOUNT, ReleaseDateFilm} from "../mocks/consts";

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const TITLES = [
  `Harry Potter and the Prisoner of Azkaban`,
  `Underwater`,
  `Star Wars The Rise of Skywalker`,
  `Dragonheart Vengeance`,
  `Hard Kill`,
  `The Grinch`,
  `The Innocence`,
  `Forbidden Empire`,
  `Hotel Transylvania 3`,
  `Venom`,
  `Deadpool 2`,
  `Aladdin`,
  `Spider-Man`,
  `Greyhound`,
  `Ready Player One`,
  `The Lion King`
];

const DIRECTORS = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `John Powell`,
  `Nicholas Joseph`
];

const ACTORS = [
  `Nicholas Joseph`,
  `Richard Chambers`,
  `Philip Parrish`,
  `Luke Harrington`,
  `Warren Chambers`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`
];

const GENRES = [
  `Drama`,
  `Criminal`,
  `Mystery`,
  `Western`,
  `Comedy`,
  `Cartoon`
];

const getImage = (title) => `img/${title}.jpg`;

const getRatingDescription = (value) => {
  let text = ``;
  switch (true) {
    case value === 10:
      text = `Awesome`;
      break;
    case value > 8:
      text = `Very good`;
      break;
    case value > 5:
      text = `Good`;
      break;
    case value > 3:
      text = `Normal`;
      break;
    case value > 0:
      text = `Bad`;
      break;
  }
  return text;
};

const generateDescription = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. `;

  return shuffle(text.split(`. `)).slice(0, random(1, 5)).join(`. `);
};

const generateAllActors = (count) => {
  const randomActors = shuffle(ACTORS).slice(0, count);

  return Array.from(new Set(randomActors)).join(`, `);
};

const generateFilm = () => {
  const title = TITLES[random(0, TITLES.length - 1)];
  const rating = random(FilmRating.MIN, FilmRating.MAX).toFixed(1);
  const director = DIRECTORS[random(0, DIRECTORS.length - 1)];

  return {
    id: generateId(),
    preview: {
      title,
      src: getImage(title),
    },
    moreInfo: {
      backGroundSrc: getImage(title),
      posterSrc: getImage(title),
      genre: GENRES[random(0, GENRES.length - 1)],
      releaseDate: Math.min(random(ReleaseDateFilm.MIN, ReleaseDateFilm.MAX)),
      playVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isAddToMyList: Boolean(random(0, 1))
    },
    overview: {
      description: generateDescription(),
      rating,
      ratingDescription: getRatingDescription(rating),
      ratingCount: random(0, 400),
      director,
      actorsList: generateAllActors(3)
    },
    details: {
      allActors: generateAllActors(8),
      runtime: random(60, 200),
    }
  };
};

const generateFilms = () => {
  const films = [];
  for (let i = 0; i < FILMCOUNT; i++) {
    films.push(generateFilm());
  }
  return Array.from(new Set(films));
};

export const allFilms = generateFilms();
