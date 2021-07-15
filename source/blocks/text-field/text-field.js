import * as $ from 'jquery';
import Cleave from 'cleave.js';

$(document).ready(() => {
  const cleaveSelector = document.querySelector('.js-text-field-masked__write-field');
  if (cleaveSelector) {
    const cleave = new Cleave(cleaveSelector, {
      date: true,
      delimiter: '.',
      datePattern: ['d', 'm', 'Y'],
    });
  }
});
