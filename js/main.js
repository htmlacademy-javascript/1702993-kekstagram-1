import { renderMini } from './mini.js';
import { activateFilters } from './filter.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { ALERT_ERROR_TIME, ERROR_COLOR } from './constants.js';
import './form.js';

getData()
  .then((data) => {
    activateFilters(data);
    renderMini(data);
  })
  .catch((err) => {
    showAlert(err.message, ALERT_ERROR_TIME, ERROR_COLOR);
  });
