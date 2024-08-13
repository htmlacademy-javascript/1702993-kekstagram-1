import { isValid } from './validation.js';
import { isEscapeKey, showAlert } from './util.js';
import { pristine } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { ALERT_SHOW_TIME, VALID_ERROR_COLLOR, DATA_ERROR_COLOR} from './constants.js';

const imgForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const tagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const successMessage = document.querySelector('#success')
  .content.querySelector('.success');
const errorWarning = document.querySelector('#error').content.querySelector('error');

const closeImageForm = () => {
  form.reset();
  resetScale();
  resetEffects();
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
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

imgButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeImageForm();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправка...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
};

const showSuccessMessage = () => {
  const successMassageClone = successMessage.cloneNode(true);
  body.appendChild(successMassageClone);
  const buttonSuccess = document.querySelector('.success__button');
  successMassageClone.addEventListener('click', (evt) => {
    if (evt.target === buttonSuccess || evt.target !== evt.target.closest('.success__inner')) {
      successMassageClone.remove();
    }
  });
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(showSuccessMessage)
        .then(unblockSubmitButton)
        .catch((err) => {
          showAlert(err.message, ALERT_SHOW_TIME, DATA_ERROR_COLOR);
        });
    }else {
      showAlert('Неправильно заполнена форма!', ALERT_SHOW_TIME, VALID_ERROR_COLLOR);
    }
  });
};

export { setUserFormSubmit, closeImageForm };
