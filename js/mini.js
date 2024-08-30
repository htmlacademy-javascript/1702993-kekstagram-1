import { openPopup } from './popup.js';

const container = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture');
const template = templateFragment.content.querySelector('.picture');

const localArray = [];

const clear = () => {
  document.querySelectorAll('.picture').forEach((mini) => {
    mini.remove();
  });
};

export const renderMini = (arrayPic) => {
  localArray.length = 0;
  localArray.push(...arrayPic.slice());
  clear();
  const picFragment = document.createDocumentFragment();
  arrayPic.forEach(({ id, likes, url, comments }) => {
    const picItem = template.cloneNode(true);
    picItem.querySelector('.picture__img').src = url;
    picItem.querySelector('.picture__comments').textContent = comments.length;
    picItem.querySelector('.picture__likes').textContent = likes;
    picItem.dataset.id = id;
    picFragment.appendChild(picItem);
  });
  container.appendChild(picFragment);

};

container.addEventListener('click', (evt) => {
  const mini = evt.target.closest('.picture');
  if (mini) {
    const id = mini.dataset.id;
    const picturesData = localArray.find((item) => item.id === Number(id));
    openPopup(picturesData);
  }
});
