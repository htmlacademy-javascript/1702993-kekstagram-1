let arrayPictures = [];

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

// функция генерирует рандомные числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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
  }
};

const getUniqueId = getUniqueRange(1, 25);
const getUniqueIdComment = getUniqueRange(1, 1000);
const getUniqueComment = function (min, max) {
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr += getRandomArrayElement(COMMENTS);
  };
  return arr;
};
// случайный эллемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const createComment = () => ({
  id: getUniqueIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getUniqueComment(1, getRandomInteger(0, 2)),
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
  comments: createComments(getRandomInteger(0, 10))

});

const getPicture = function (pictureCount) {
  for (let i = 1; i <= pictureCount; i++) {
    arrayPictures.push(createPicture(getUniqueId()));
  }
};
getPicture(25);
console.log(arrayPictures);
