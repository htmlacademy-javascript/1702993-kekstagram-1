import { renderMini } from './mini.js';
import './popup.js';
import './form.js';
import './scale.js';
import './effects.js';
import {activateFilters} from './filter.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { ALERT_SHOW_TIME_DATA_ERROR, DATA_ERROR_COLOR } from './constants.js';

getData()
  .then((data) => {
    activateFilters(data);
    renderMini(data);
  })
  .catch((err) => {
    showAlert(err.message, ALERT_SHOW_TIME_DATA_ERROR, DATA_ERROR_COLOR);
  });


// setUserFormSubmit(closeImageForm);
