import {EFFECTS} from './constants.js';

const effectsContainer = document.querySelector('.img-upload__effects');
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max
  });
  if (isDefault()){
    hideSlider();
  } else {
    showSlider();
  }
};

const changeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    image.style.filter = DEFAULT_EFFECT.style;
  } else {
    image.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 70,
  step: 1,
  connect: 'lower',
});

export const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};
resetEffects();

effectsContainer.addEventListener('change', changeEffect);
sliderElement.noUiSlider.on('update', onSliderUpdate);
