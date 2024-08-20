import { isEscapeKey } from './util.js';
import { closeKeyDownEsc } from './form.js';

const successMessage = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const closeSuccessMessage = (successMassageClone, evt) => {
  successMassageClone.remove();
  if (isEscapeKey(evt)) {
    successMassageClone.remove();
  }
};

const showSuccessMessage = () => {
  const successMassageClone = successMessage.cloneNode(true);
  body.appendChild(successMassageClone);
  const buttonSuccess = document.querySelector('.success__button');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successMassageClone.remove();
    }
  });
  successMassageClone.addEventListener('click', (evt) => {
    if (evt.target === buttonSuccess || evt.target.classList.contains('success')) {
      closeSuccessMessage(successMassageClone);
    }
  });
};

const

const showErrorMessage = () => {
  const errorMessageClone = errorMessage.cloneNode(true);
  body.appendChild(errorMessageClone);
  const buttonError = document.querySelector('.error__button');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      errorMessageClone.remove();
    }
  });
  errorMessageClone.addEventListener('click', (evt) => {
    if (evt.target === buttonError || evt.target.classList.contains('error')) {
      closeErrorMessage(errorMessageClone);
    }
  });
  document.removeEventListener('keydown', closeKeyDownEsc);
};

const closeErrorMessage = (errorMessageClone, evt) => {
  errorMessageClone.remove();
  if (isEscapeKey(evt)) {
    errorMassageClone.remove();
  }
  document.addEventListener('keydown', closeKeyDownEsc);
};

export { showSuccessMessage, showErrorMessage };
