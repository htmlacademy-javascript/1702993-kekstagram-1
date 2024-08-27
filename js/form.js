import { isValid } from './validation.js';
import { pristine } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { SubmitButtonText } from './constants.js';
import { showSuccessMessage, showErrorMessage } from './notification.js';
import { setEscapeControl, removeEscapeControl } from './escape-control.js';

const imgForm = document.querySelector('.img-upload__overlay');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const tagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const body = document.querySelector('body');

const closeImageForm = () => {
  form.reset();
  resetScale();
  resetEffects();
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
  pristine.reset();
};

const isActiveFields = () => document.activeElement !== tagField && document.activeElement !== commentField;

const openImageForm = () => {
  imgForm.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeImageForm, isActiveFields);
};

uploadInputElement.addEventListener('change', () => {
  openImageForm();
});

imgButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeImageForm();
  removeEscapeControl();
});

const blockSubmitButton = (isBlocked = false) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.NORMAL;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton(true);
    sendData(new FormData(evt.target))
      .then(() => {
        closeImageForm();
        removeEscapeControl();
        showSuccessMessage();
      })
      .catch((err) => {
        showErrorMessage();
      })
      .finally(() => {
        blockSubmitButton();
      });
  }
});
