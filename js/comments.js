import { COMMENTS_STEP } from './constants.js';
const socialComment = document.querySelector('.social__comment');

// let rendredCopyComments = rendredComments;

const renderStatistic = (totalComments, commentsCount, rendredComments) => {
  commentsCount.innerHTML = `${rendredComments} из <span class="comments-count">${totalComments}</span> комментариев`;
};

const renderLoader = (totalComments, commentsLoader, rendredComments) => {
  if (rendredComments < totalComments) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

export const renderComments = (totalComments, localComments, commentsLoader, popupComments, commentsCount, rendredComments) => {
  const commentFragment = document.createDocumentFragment();

  localComments.splice(0, COMMENTS_STEP).forEach(({ avatar, message, name }) => {
    const comment = socialComment.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(comment);
    rendredComments++;
    console.log(rendredComments + ' комментс');
  });
  popupComments.appendChild(commentFragment);

  renderLoader(totalComments, commentsLoader, rendredComments);
  renderStatistic(totalComments, commentsCount, rendredComments);
  console.log(rendredComments + ' После функции renderComments')
};
