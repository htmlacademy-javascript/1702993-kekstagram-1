import { showAlert } from './util.js';
import { ALERT_SHOW_TIME, ERROR_COLOR } from './constants.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const messageError = 'Данный формат файлов не разрешен. Доступныйе форматы: jpg, jpeg, png';
const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const fileAllowed = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (fileAllowed) {
    preview.src = URL.createObjectURL(file);
    const miniPreUrl = URL.createObjectURL(file);
    effectsPreview.style.cssText = 'background-color: red';
  } else {
    showAlert(messageError, ALERT_SHOW_TIME, ERROR_COLOR);
  }
});
