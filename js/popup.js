import { setEscapeControl, removeEscapeControl } from './escape-control.js';
import { setComments } from './comments.js';

const popupImgContainer = document.querySelector('.big-picture__img');
const popupImg = popupImgContainer.querySelector('img');
const popupLikes = document.querySelector('.likes-count');
const popupDescription = document.querySelector('.social__caption');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('.big-picture__cancel');

const closePopup = () => {
  popup.classList.add('hidden');
};

popupClose.addEventListener('click', () => {
  closePopup();
  removeEscapeControl();
});

const openPopup = ({ url, likes, comments, description }) => {
  popup.classList.remove('hidden');
  popupImg.src = url;
  popupLikes.textContent = likes;
  popupDescription.textContent = description;
  setEscapeControl(closePopup);
  setComments(comments);
};

export { openPopup };
