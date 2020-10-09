import {random} from 'lodash';
import {shuffle} from 'lodash';

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

// const previewPosters = [
//   `img/aviator.jpg`,
//   `img/bohemian-rhapsody.jpg`,
//   `img/dardjeeling-limited.jpg`,
//   `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//   `img/johnny-english.jpg`,
//   `img/macbeth.jpg`,
//   `img/midnight-special.jpg`,
//   `img/mindhunter.jpg`,
//   `img/moonrise-kingdom.jpg`,
//   `img/no-country-for-old-men.jpg`,
//   `img/orlando.jpg`,
//   `img/pulp-fiction.jpg`,
//   `img/shutter-island.jpg`,
//   `img/snatch.jpg`,
//   `img/we-need-to-talk-about-kevin.jpg`,
//   `img/what-we-do-in-the-shadows.jpg`,
// ];

// const titles = [
//   `Aviator`,
//   `Bohemian Rhapsody`,
//   `Dardjeeling Limited`,
//   `Fantastic Beasts: The Crimes of Grindelwald`,
//   `Johnny English`,
//   `Macbeth`,
//   `Midnight Special`,
//   `Mindhunter`,
//   `Moonrise Kingdom`,
//   `No Country for Old Men`,
//   `Orlando`,
//   `Pulp Fiction`,
//   `Shutter-island`,
//   `Snatch`,
//   `We Need to Talk About Kevin`,
//   `What We Do in the Shadows`,
// ];

const titles = [
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

const directors = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `John Powell`,
  `Nicholas Joseph`
];

const actors = [
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

const genres = [
  `Drama`,
  `Criminal`,
  `Mystery`,
  `Western`,
  `Comedy`,
  `Cartoon`
];

const getImage = (title) => {
  return `img/${title}.jpg`;
};

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
  const description = shuffle(text.split(`. `)).slice(0, random(1, 5)).join(`. `);

  return description;
};

const generateActors = (count) => {
  const randomActors = shuffle(actors).slice(0, random(2, count));
  const setActors = new Set(randomActors);
  const newArrActors = Array.from(setActors).join(`, `);

  return newArrActors;
};

const generateFilm = () => {
  const title = titles[random(0, titles.length - 1)];
  const rating = random(1.1, 10).toFixed(1);

  return {
    id: generateId(),
    preview: {
      title,
      src: getImage(title),
    },
    moreInfo: {
      backGroundSrc: getImage(title),
      posterSrc: getImage(title),
      genre: genres[random(0, genres.length - 1)],
      releaseDate: Math.min(random(1970, 2020)),
      playVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isAddToMyList: Boolean(random(0, 1))
    },
    overview: {
      description: generateDescription(),
      rating,
      ratingDescription: getRatingDescription(rating),
      ratingCount: random(0, 400),
      director: directors[random(0, directors.length - 1)],
      actorsList: generateActors(4)
    },
    details: {
      director: directors[random(0, directors.length - 1)],
      allActors: generateActors(8),
      runtime: random(60, 200),
    }
  };
};

const generateFilms = () => {
  const films = [];
  for (let i = 0; i < 8; i++) {
    films.push(generateFilm());
  }
  return films;
};

export const allFilms = generateFilms();
