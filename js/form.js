import { isValid } from './validation.js';
import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { SubmitButtonText } from './constants.js';
import { showSuccessMessage, showErrorMessage } from './notification.js';

const imgForm = document.querySelector('.img-upload__overlay');
const imgButtonClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const tagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const body = document.querySelector('body');
// const successMessage = document.querySelector('#success')
//   .content.querySelector('.success');
// const errorMessage = document.querySelector('#error').content.querySelector('.error');

const closeImageForm = () => {
  form.reset();
  resetScale();
  resetEffects();
  imgForm.classList.add('hidden');
  body.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', closeKeyDownEsc);
};

export const closeKeyDownEsc = (evt) => {
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

const blockSubmitButton = (isBlocked = false) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.NORMAL;
};

// const closeSuccessMessage = (successMassageClone, evt) => {
//   successMassageClone.remove();
//   if (isEscapeKey(evt)) {
//     successMassageClone.remove();
//   }
// };

// const showSuccessMessage = () => {
//   const successMassageClone = successMessage.cloneNode(true);
//   body.appendChild(successMassageClone);
//   const buttonSuccess = document.querySelector('.success__button');
//   document.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       successMassageClone.remove();
//     }
//   });
//   successMassageClone.addEventListener('click', (evt) => {
//     if (evt.target === buttonSuccess || evt.target.classList.contains('success')) {
//       closeSuccessMessage(successMassageClone);
//     }
//   });
// };

//вопрос по evt. Как они работают и почему в порядке (evt, function) обработчик не срабатывает, а в порядке (function, evt) все работает?

// const closeErrorMessage = (errorMessageClone, evt) => {
//   errorMessageClone.remove();
//   if (isEscapeKey(evt)) {
//     errorMassageClone.remove();
//   }
// };

// const showErrorMessage = () => {
//   const errorMessageClone = errorMessage.cloneNode(true);
//   body.appendChild(errorMessageClone);
//   const buttonError = document.querySelector('.error__button');
//   document.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       errorMessageClone.remove();
//     }
//   });
//   errorMessageClone.addEventListener('click', (evt) => {
//     if (evt.target === buttonError || evt.target.classList.contains('error')) {
//       closeErrorMessage(errorMessageClone);
//     }
//   });
// };

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton(true);
    sendData(new FormData(evt.target))
      .then(() => {
        closeImageForm();
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
