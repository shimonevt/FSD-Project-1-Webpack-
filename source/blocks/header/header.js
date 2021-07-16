import * as $ from 'jquery';

$(document).ready(() => {
  function headerNavClick(ev) {
    const navButton = ev.target;
    const $headerNav = $(navButton).closest('.js-header__menu').children('.js-header__nav');
    $($headerNav).toggleClass('header__nav_active');
    $(navButton).toggleClass('header__nav-smallscr_active');
  }
  function headerOptionsClick(ev) {
    const optionsHeader = ev.target;
    const listOptions = optionsHeader.closest('.js-header__options');
    $(listOptions).toggleClass('header__options_active');
  }
  $('.js-header__nav-smallscr').click(headerNavClick);
  $('.js-header__options').click(headerOptionsClick);
});
