jQuery(document).ready(($) => {
  function checkboxListClick(ev) {
    const listInfo = $(ev.currentTarget);
    const $listOptions = $(listInfo).parent('.js-checkbox-list').find('.js-checkbox-list__options');
    $($listOptions).toggleClass('active');
    $(listInfo).toggleClass('active');
  }
  $('.js-checkbox-list .js-checkbox-list__info').click(checkboxListClick);
});
