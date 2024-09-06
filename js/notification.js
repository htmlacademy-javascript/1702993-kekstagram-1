import { setEscapeControl, removeEscapeControl } from './escape-control.js';
//можно ли два раза искать боди?
const body = document.querySelector('body');
const successMessage = body.querySelector('#success')
  .content.querySelector('.success');
const errorMessage = body.querySelector('#error')
  .content.querySelector('.error');

const templates = {
  success: successMessage,
  error: errorMessage
};

const closeMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
};

export const showMessage = (template = 'success') => {
  const messageClone = templates[template].cloneNode(true);
  body.appendChild(messageClone);
  const button = document.querySelector(`.${template}__button`);
  messageClone.addEventListener('click', (evt) => {
    if (evt.target === button || evt.target.classList.contains(template)) {
      closeMessage();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeMessage);
};
