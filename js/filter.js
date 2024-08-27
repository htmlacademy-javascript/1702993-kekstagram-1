const imgFiltersForm = document.querySelector('.img-filters__form');
const imgButtonDefault = document.getElementById('filter-default');
const imgButtonRandom = document.getElementById('filter-random');
const imgButtonDiscussed = document.getElementById('filter-discussed');
const imgFilterButtons = document.querySelectorAll('.img-filters__button');

const makeButtonActive = (element) => {
  for (let i = 0; i < imgFilterButtons.length; i++) {
    imgFilterButtons[i].className = 'img-filters__button';
  }
  element.classList.add('img-filters__button--active');
};

imgFiltersForm.addEventListener('click', (evt) => {
  if (evt.target === imgButtonDefault) {
    makeButtonActive(evt.target);
    console.log('Дефолтные');
  }
  if (evt.target === imgButtonRandom) {
    makeButtonActive(evt.target);
    console.log('Рандомные');
  }
  if (evt.target === imgButtonDiscussed) {
    makeButtonActive(evt.target);
    console.log('Обсуждаемые');
  }
});

const compareMini = (comments) => {
  for (let i = 0; i < comments.length; i++) {

  }
};
