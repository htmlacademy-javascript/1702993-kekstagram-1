const buttonModalShow = document.querySelector('.img-upload__label');
const imgForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_LENGTH = 5;
const hashtagField = document.querySelector('.text__hashtags');
const errorMassege = 'НЕПРАВИЛЬНО ЗАПОЛНЕНА ФОРМА';

buttonModalShow.addEventListener('click', function () {
  imgForm.classList.remove('hidden');
  body.classList.add('modal-open');
});

imgButtonClose.addEventListener('click', function () {
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
});

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'hashtag-error'
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Валидна')
  } else {
    console.log('Не валидна')
  }
});

const isCountHashtags = function (hashtags) {
  hashtags <= MAX_HASHTAGS_LENGTH;
};

const isUniqTags = function (hashtags) {
  const lowerCaseHashtag = hashtags.map((tag) => tag.toLowerCase());
  return lowerCaseHashtag.length = new Set(lowerCaseHashtag).size;
};

const isValidTag = function (hashtags) {
  VALID_SYMBOLS.test(hashtags);
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return validCountHashtags(tags) && isUniqTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  errorMassege
);
