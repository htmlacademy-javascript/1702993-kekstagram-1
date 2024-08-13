import { COMMENTS_STEP } from './constants.js';
const socialComment = document.querySelector('.social__comment');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const popupComments = document.querySelector('.social__comments');

const localComments = [];
let totalComments;
let rendredComments;

const renderStatistic = () => {
  commentsCount.innerHTML = `${rendredComments} из <span class="comments-count">${totalComments}</span> комментариев`;
};

const renderLoader = () => {
  if (rendredComments < totalComments) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const commentFragment = document.createDocumentFragment();

  localComments.splice(0, COMMENTS_STEP).forEach(({ avatar, message, name }) => {
    const commentElement = socialComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(commentElement);
    rendredComments++;
  });
  popupComments.appendChild(commentFragment);

  renderLoader();
  renderStatistic();
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

export const setComments = (comments) => {
  rendredComments = 0;
  totalComments = comments.length;
  localComments.length = 0;
  localComments.push(...comments.slice());
  popupComments.innerHTML = '';
  renderComments();
};
