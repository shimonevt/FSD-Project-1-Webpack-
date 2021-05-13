jQuery(document).ready(($) => {
  $('.js-header__list.smallscr').click((ev) => {
    const listButton = ev.target;
    const $headerList = $(listButton).parent('.js-bar-smallscr').parent('.js-header__menu').children('.js-header__list');
    $($headerList).toggleClass('active');
    $(listButton).toggleClass('active');
  });
  $('.js-list__options .js-options-header').click((ev) => {
    const optionsHeader = ev.target;
    const $listOptions = optionsHeader.closest('.js-list__options');
    $($listOptions).toggleClass('active');
  });
  $('.js-list__agree .js-agree-header').click((ev) => {
    const agreeHeader = ev.target;
    const listAgree = agreeHeader.closest('.js-list__agree');
    $(listAgree).toggleClass('active');
  });
});
