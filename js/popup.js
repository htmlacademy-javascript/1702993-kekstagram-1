import { setEscapeControl, removeEscapeControl } from './escape-control.js';
import { setComments } from './comments.js';

const popup = document.querySelector('.big-picture');
const popupLikes = popup.querySelector('.likes-count');
const popupDescription = popup.querySelector('.social__caption');
const popupClose = popup.querySelector('.big-picture__cancel');
const popupImgContainer = popup.querySelector('.big-picture__img');
const popupImg = popupImgContainer.querySelector('img');

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
