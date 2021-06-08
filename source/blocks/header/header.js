import * as $ from 'jquery';

jQuery(document).ready(($) => {
  function headerNavClick(ev) {
    const navButton = ev.target;
    const $headerNav = $(navButton).closest('.js-header__menu').children('.js-header__nav');
    $($headerNav).toggleClass('active');
    $(navButton).toggleClass('active');
  }
  function headerOptionsClick(ev) {
    const optionsHeader = ev.target;
    const listOptions = optionsHeader.closest('.js-header__options');
    $(listOptions).toggleClass('active');
  }
  $('.js-header__nav-smallscr').click(headerNavClick);
  $('.js-header__options').click(headerOptionsClick);
});
