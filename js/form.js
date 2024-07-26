import { isValid } from './validation.js';
import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';

const imgForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const tagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const closeImageForm = () => {
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
};
const closeKeyDownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageForm();
  }
};
const openImageForm = () => {
  imgForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeKeyDownEsc);
};

uploadInputElement.addEventListener('change', () => {
  openImageForm();
});

imgButtonClose.addEventListener('click', () => {
  closeImageForm();
});

tagField.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeKeyDownEsc);
});
tagField.addEventListener('blur', () => {
  document.addEventListener('keydown', closeKeyDownEsc);
});
commentField.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeKeyDownEsc);
});
commentField.addEventListener('blur', () => {
  document.addEventListener('keydown', closeKeyDownEsc);
});

form.addEventListener('submit', (evt) => {
  if (isValid()) {
    console.log('Валидна');
    return true;
  } else {
    evt.preventDefault();
    console.log('Не валидна');
  }
});
