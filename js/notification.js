import { setEscapeControl, removeEscapeControl } from './escape-control.js';

const successMessage = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const closeSuccesMessage = () => {
  document.querySelector('.success').remove();
};

const showSuccessMessage = () => {
  const successMassageClone = successMessage.cloneNode(true);
  body.appendChild(successMassageClone);
  const buttonSuccess = document.querySelector('.success__button');
  successMassageClone.addEventListener('click', (evt) => {
    if (evt.target === buttonSuccess || evt.target.classList.contains('success')) {
      closeSuccesMessage();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeSuccesMessage);
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const showErrorMessage = () => {
  const errorMessageClone = errorMessage.cloneNode(true);
  body.appendChild(errorMessageClone);
  const buttonError = document.querySelector('.error__button');
  errorMessageClone.addEventListener('click', (evt) => {
    if (evt.target === buttonError || evt.target.classList.contains('error')) {
      closeErrorMessage();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeErrorMessage);
};

export { showSuccessMessage, showErrorMessage };
