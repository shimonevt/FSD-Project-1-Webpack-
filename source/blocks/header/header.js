import * as $ from 'jquery';

jQuery(document).ready(($) => {
  function headerListClick(ev) {
    const listButton = ev.target;
    const $headerList = $(listButton).parent('.js-header__bar-smallscr').parent('.js-header__menu').children('.js-header__list');
    $($headerList).toggleClass('active');
    $(listButton).toggleClass('active');
  }
  function headerOptionsClick(ev) {
    const optionsHeader = ev.target;
    const listOptions = optionsHeader.closest('.js-header__options');
    $(listOptions).toggleClass('active');
  }
  function headerAgreeClick(ev) {
    const agreeHeader = ev.target;
    const listAgree = agreeHeader.closest('.js-header__agree');
    $(listAgree).toggleClass('active');
  }
  $('.js-header__list-smallscr').click(headerListClick);
  $('.js-header__options').click(headerOptionsClick);
  $('.js-header__agree').click(headerAgreeClick);
});
