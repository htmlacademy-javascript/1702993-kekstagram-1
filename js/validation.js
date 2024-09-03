import { VALID_SYMBOLS, MAX_HASHTAGS_LENGTH } from './constants.js';
//исправил поиск
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const errorMassege = 'поле хештегов заполнено неверно';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'hashtag-error'
});

const isCountHashtags = (hashtags) => hashtags.length <= MAX_HASHTAGS_LENGTH;

const isUniqTags = (hashtags) => {
  const lowerCaseHashtag = hashtags.map((tag) => tag.toLowerCase());
  return lowerCaseHashtag.length === new Set(lowerCaseHashtag).size;
};

const isValidTag = (hashtags) => VALID_SYMBOLS.test(hashtags);

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isCountHashtags(tags) && isUniqTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  errorMassege
);

const isValid = () => pristine.validate();

const reset = () => pristine.reset();

export { isValid, reset };
