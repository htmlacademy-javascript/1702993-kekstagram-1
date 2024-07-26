const PICTURES_COUNT = 25;
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
// данные для сборки карточкек
const ID_MIN_RANGE = 1;
const ID_MAX_RANGE = 25;
const MIN_COMMENTS_ID = 1;
const MAX_COMMENTS_ID = 1000;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
// комментарии
const COMMENTS_STEP = 5;
// валидация
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_LENGTH = 5;

export {
  PICTURES_COUNT, COMMENTS,
  DESCRIPTIONS, NAMES,
  ID_MIN_RANGE, ID_MAX_RANGE,
  MIN_COMMENTS_ID, MAX_COMMENTS_ID,
  MIN_LIKES, MAX_LIKES,
  MIN_COMMENTS, MAX_COMMENTS,
  MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER,
  COMMENTS_STEP,
  VALID_SYMBOLS, MAX_HASHTAGS_LENGTH
};
