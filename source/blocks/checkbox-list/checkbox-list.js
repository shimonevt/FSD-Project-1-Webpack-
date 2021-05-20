jQuery(document).ready(($) => {
  $('.js-checkbox-list .js-checkbox-list__info').click((ev) => {
    const listInfo = $(ev.currentTarget);
    const $listOptions = $(listInfo).parent('.js-checkbox-list').find('.js-checkbox-list__options');
    $($listOptions).toggleClass('active');
    $(listInfo).toggleClass('active');
  });
});
