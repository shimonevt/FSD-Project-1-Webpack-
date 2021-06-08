import * as $ from 'jquery';

jQuery(document).ready(($) => {
  function likeButtonClick(ev) {
    const likeButton = ev.currentTarget;
    const $thisNum = $(likeButton).children('.js-like-button__nmbr');
    const $thisHeart = $(likeButton).children('.js-like-button__img').children('.js-like-button__heart');
    if ($(likeButton).hasClass('active')) {
      $thisHeart.text('favorite_border');
      $thisNum.text(parseInt($thisNum.text(), 10) - 1);
      $(likeButton).removeClass('active');
    } else {
      $thisHeart.text('favorite');
      $thisNum.text(parseInt($thisNum.text(), 10) + 1);
      $(likeButton).addClass('active');
    }
  }
  $('.js-like-button').click(likeButtonClick);
});
