import { isEscapeKey } from './util.js';

const popupImgContainer = document.querySelector('.big-picture__img');
const popupImg = popupImgContainer.querySelector('img');
const popupLikes = document.querySelector('.likes-count');
const popupCommentsCount = document.querySelector('.comments-count');
const popupDescription = document.querySelector('.social__caption');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('.big-picture__cancel');
const popupComments = document.querySelector('.social__comments');
const socialComment = popupComments.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault;
    popup.classList.add('hidden');
    closePopup();
  }
};

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

function renderComments (comments) {
  const commentFragment = document.createDocumentFragment();
  popupComments.innerHTML = '';
  comments.forEach(({avatar, message, name}) => {
    const comment = socialComment.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(comment);
  });
  popupComments.appendChild(commentFragment);
}

function openPopup ({ url, likes, comments, description }) {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  const commentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  popupImg.src = url;
  popupLikes.textContent = likes;
  popupCommentsCount.textContent = comments.length;
  popupDescription.textContent = description;

  renderComments(comments);
}

function closePopup () {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openPopup};
