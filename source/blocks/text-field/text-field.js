import 'cleave.js';

jQuery(($) => {
  if ($('.text-field-masked__input').length) {
    new Cleave('.text-field-masked__input', {
      date: true,
      delimiter: '.',
      datePattern: ['d', 'm', 'Y'],
    });
  }
});
