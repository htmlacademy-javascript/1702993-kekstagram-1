import {getRandomInteger, getRandomArrayElement} from './util.js';
export const PICTURES_COUNT = 25;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Создание чего-то великого',
  'Котик упал со стола',
  'Готовлю обед',
  'Испытание нового самолета',
  'Поход в кино',
  'В музее'
];

const NAMES = [
  'Артём',
  'Иван',
  'Мария'
];

const getUniqueRange = (min, max) => {
  const previousValues = [];

  return function () {
    let value = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(value)) {
      value = getRandomInteger(min, max);
    }
    previousValues.push(value);
    return value;
  };
};

const getUniqueId = getUniqueRange(1, 25);
const getUniqueIdComment = getUniqueRange(1, 1000);
const createComment = () => ({
  id: getUniqueIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createComments = function (n) {
  const comments = [];
  for (let i = 1; i <= n; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPicture = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  likes: getRandomInteger(15, 200),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: createComments(getRandomInteger(0, 30))

});

const getPicture = function (pictureCount) {
  const arrayPictures = [];
  for (let i = 1; i <= pictureCount; i++) {
    arrayPictures.push(createPicture(getUniqueId()));
  }
  return arrayPictures;
};
export const arrayPic = getPicture(PICTURES_COUNT);
