import { isValid } from './validation.js';
import { reset as resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { SubmitButtonText } from './constants.js';
import { showMessage } from './notification.js';
import { setEscapeControl, removeEscapeControl } from './escape-control.js';
import { renderPreview } from './photo.js';

const body = document.querySelector('body');
const form = body.querySelector('.img-upload__form');
const imgForm = form.querySelector('.img-upload__overlay');
const uploadInputElement = form.querySelector('.img-upload__input');
const tagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const imgButtonClose = form.querySelector('.img-upload__cancel');
const submitButton = imgForm.querySelector('.img-upload__submit');

const closeImageForm = () => {
  form.reset();
  resetScale();
  resetEffects();
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
  resetValidation();
};

const isActiveFields = () => document.activeElement !== tagField && document.activeElement !== commentField;

const openImageForm = () => {
  imgForm.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeImageForm, isActiveFields);
  renderPreview();
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
        showMessage();
      })
      .catch(() => {
        showMessage('error');
      })
      .finally(() => {
        blockSubmitButton();
      });
  }
});
