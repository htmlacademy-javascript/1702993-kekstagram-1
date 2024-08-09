import { isEscapeKey } from './util.js';
import { setComments } from './comments.js';

const popupImgContainer = document.querySelector('.big-picture__img');
const popupImg = popupImgContainer.querySelector('img');
const popupLikes = document.querySelector('.likes-count');
const popupDescription = document.querySelector('.social__caption');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('.big-picture__cancel');

const closePopup = () => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  popupClose.removeEventListener('click', closePopup);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault;
    popup.classList.add('hidden');
    closePopup();
  }
};

const openPopup = ({ url, likes, comments, description }) => {
  popup.classList.remove('hidden');
  popupClose.addEventListener('click', closePopup);

  document.addEventListener('keydown', onDocumentKeydown);
  popupImg.src = url;
  popupLikes.textContent = likes;
  popupDescription.textContent = description;

  setComments(comments);
};

export { openPopup };
