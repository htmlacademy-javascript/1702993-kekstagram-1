import { renderMini } from './mini.js';
const imgFiltersForm = document.querySelector('.img-filters__form');
const filters = document.querySelector('.img-filters');

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

let localData;

const filteredData = {
  [Filters.DEFAULT]: () => localData,
  [Filters.RANDOM]: () => [...localData].sort(()=> Math.random() - 0.5).slice(0, 10),
  [Filters.DISCUSSED]: () => [...localData].sort((b, a) => a.comments.length - b.comments.length),
};

const makeButtonActive = (element) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  element.classList.add('img-filters__button--active');
};

imgFiltersForm.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    makeButtonActive(evt.target);
    renderMini(filteredData[evt.target.id]());
  }
});

export const activateFilters = (pictures) => {
  filters.classList.remove('img-filters--inactive');
  localData = [...pictures];
};
