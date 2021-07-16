import * as $ from 'jquery';

$(document).ready(() => {
  function checkboxListClick(ev) {
    const listInfo = $(ev.currentTarget);
    const $listOptions = $(listInfo).parent('.js-checkbox-list').find('.js-checkbox-list__options');
    $($listOptions).toggleClass('checkbox-list__options_active');
    $(listInfo).toggleClass('checkbox-list__info_active');
  }
  $('.js-checkbox-list .js-checkbox-list__info').click(checkboxListClick);
});
