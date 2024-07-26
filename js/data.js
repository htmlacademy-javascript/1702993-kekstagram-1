import {
  PICTURES_COUNT, COMMENTS,
  DESCRIPTIONS, NAMES,
  ID_MIN_RANGE, ID_MAX_RANGE,
  MIN_COMMENTS_ID, MAX_COMMENTS_ID,
  MIN_LIKES, MAX_LIKES,
  MIN_COMMENTS, MAX_COMMENTS,
  MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER
} from './constants.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';

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

const getUniqueId = getUniqueRange(ID_MIN_RANGE, ID_MAX_RANGE);
const getUniqueIdComment = getUniqueRange(MIN_COMMENTS_ID, MAX_COMMENTS_ID);
const createComment = () => ({
  id: getUniqueIdComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createComments = (n) => {
  const comments = [];
  for (let i = 1; i <= n; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPicture = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: createComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))

});

const getPicture = (pictureCount) => {
  const arrayPictures = [];
  for (let i = 1; i <= pictureCount; i++) {
    arrayPictures.push(createPicture(getUniqueId()));
  }
  return arrayPictures;
};
export const arrayPic = getPicture(PICTURES_COUNT);
