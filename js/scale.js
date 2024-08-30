const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImgPreview = document.querySelector('.img-upload__preview img');

let nowScaleValue = DEFAULT_SCALE;
scaleValue.value = `${nowScaleValue}%`;

const scaleImg = () => {
  uploadImgPreview.style.transform = `scale(${nowScaleValue / 100})`;
};

const onScaleSmallerClick = () => {
  nowScaleValue = nowScaleValue - SCALE_STEP;

  if (nowScaleValue < MIN_SCALE) {
    nowScaleValue = MIN_SCALE;
  }
  scaleValue.value = `${nowScaleValue}%`;
  scaleImg();
};

const onScaleBiggerClick = () => {
  nowScaleValue = nowScaleValue + SCALE_STEP;

  if (nowScaleValue > MAX_SCALE) {
    nowScaleValue = MAX_SCALE;
  }
  scaleValue.value = `${nowScaleValue}%`;
  scaleImg();
};

buttonScaleSmaller.addEventListener('click', onScaleSmallerClick);
buttonScaleBigger.addEventListener('click', onScaleBiggerClick);

export const resetScale = () => {
  nowScaleValue = DEFAULT_SCALE;
  scaleValue.value = `${nowScaleValue}%`;
  scaleImg();
};
