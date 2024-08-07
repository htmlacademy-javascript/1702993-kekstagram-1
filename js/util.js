// функция генерирует рандомные числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// случайный эллемент массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
// const onDocumentKeydown = (evt, element, action) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();

//     element.classList.add('hidden');
//     console.log(element);
//     action();
//   }
// };

export {getRandomInteger, getRandomArrayElement, isEscapeKey};
