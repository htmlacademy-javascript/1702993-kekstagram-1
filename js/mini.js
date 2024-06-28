import {arrayPic} from './data.js';

const container = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture');
const template = templateFragment.content.querySelector('.picture');

const picFragment = document.createDocumentFragment();

arrayPic.forEach(({likes, url, comments}) => {
  const picItem = template.cloneNode(true);

  picItem.querySelector('.picture__img').src = url;
  picItem.querySelector('.picture__comments').textContent = comments.length;
  picItem.querySelector('.picture__likes').textContent = likes;

  picFragment.appendChild(picItem);
});

container.appendChild(picFragment);
