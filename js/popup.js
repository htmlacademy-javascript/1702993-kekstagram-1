import { isEscapeKey } from './util.js';

const popupImgContainer = document.querySelector('.big-picture__img');
const popupImg = popupImgContainer.querySelector('img');
const popupLikes = document.querySelector('.likes-count');
const popupDescription = document.querySelector('.social__caption');
const popup = document.querySelector('.big-picture');
const popupClose = document.querySelector('.big-picture__cancel');
const popupComments = document.querySelector('.social__comments');
const socialComment = popupComments.querySelector('.social__comment');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const COMMENTS_STEP = 5;

const localComments = [];
let totalComments;
let rendredComments;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault;
    popup.classList.add('hidden');
    closePopup();
  }
};

popupClose.addEventListener('click', () => {
  closePopup();
});

const renderLoader = () => {
  if (rendredComments < totalComments) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderStatistic = () => {
  commentsCount.innerHTML = `${rendredComments} из <span class="comments-count">${totalComments}</span> комментариев`
};

function renderComments() {
  const commentFragment = document.createDocumentFragment();

  localComments.splice(0, COMMENTS_STEP).forEach(({ avatar, message, name }) => {
    const comment = socialComment.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(comment);
    rendredComments++;
  });
  popupComments.appendChild(commentFragment);

  renderLoader();
  renderStatistic();
}

function openPopup({ url, likes, comments, description }) {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  popupImg.src = url;
  popupLikes.textContent = likes;
  popupDescription.textContent = description;
  rendredComments = 0;
  totalComments = comments.length;
  localComments.length = 0;
  localComments.push(...comments.slice());
  popupComments.innerHTML = '';
  renderComments();
}

function closePopup() {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

commentsLoader.addEventListener('click', () => {
  renderComments();
});

export { openPopup };
