import { renderMini } from './mini.js';
import { debounce } from './util.js';
import { DELAY_TIMER } from './constants.js';

const filters = document.querySelector('.img-filters');
const imgFiltersForm = filters.querySelector('.img-filters__form');

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

const sortFilter = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    renderMini(filteredData[evt.target.id]());
  }
} ;

imgFiltersForm.addEventListener('click', debounce(sortFilter, DELAY_TIMER));
imgFiltersForm.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    makeButtonActive(evt.target);
  }
});

export const activateFilters = (pictures) => {
  filters.classList.remove('img-filters--inactive');
  localData = [...pictures];
};
