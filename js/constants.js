// const PICTURES_COUNT = 25;
// комментарии
const COMMENTS_STEP = 5;
// валидация
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_LENGTH = 5;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];
const ALERT_SHOW_TIME = 5000;
const ALERT_SHOW_TIME_DATA_ERROR = 50000;
const VALID_ERROR_COLLOR = 'blue';
const DATA_ERROR_COLOR = 'red';
export {
  // PICTURES_COUNT,
  COMMENTS_STEP,
  VALID_SYMBOLS, MAX_HASHTAGS_LENGTH,
  EFFECTS,
  ALERT_SHOW_TIME, ALERT_SHOW_TIME_DATA_ERROR,
  VALID_ERROR_COLLOR, DATA_ERROR_COLOR
};
