jQuery(document).ready(($) => {
  $('.js-checkbox-list .js-list__info').click((ev) => {
    const listInfo = $(ev.currentTarget);
    const $listOptions = $(listInfo).parent('.js-checkbox-list').find('.js-list__options');
    $($listOptions).toggleClass('active');
    $(listInfo).toggleClass('active');
  });
});
