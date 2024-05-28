let arrayPictures = [];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// функция генерирует рандомные числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// случайный эллемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// Вопрос по стрелойной функци
const createComment = ()=> ({
  id: 135,
  avatar: 'img/avatar-6.svg',
  // message: ,
  name: 'Артём',
})
const createPicture = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  // description:'',
  likes: getRandomInteger(15,200)
  // comments: ''

});
const getPicture = function (pictureCount) {
  for (let i = 1; i <= pictureCount; i++) {
    arrayPictures.push(createPicture(i));
  }
}
getPicture(25);
console.log(arrayPictures);
