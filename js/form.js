import { isValid } from './validation.js';
import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const imgForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const tagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const closeImageForm = () => {
  resetScale();
  resetEffects();
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
  document.removeEventListener('keydown', closeKeyDownEsc);
};

const closeKeyDownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement !== tagField && document.activeElement !== commentField) {
      closeImageForm();
    }

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

form.addEventListener('submit', (evt) => {
  if (isValid()) {
    return true;
  } else {
    evt.preventDefault();
  }
});
