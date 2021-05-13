jQuery(document).ready(($) => {
  $('.like-button').click((ev) => {
    const likeButton = ev.currentTarget;
    const $thisNum = $(likeButton).children('.js-like-button__body').children('.js-body__like-nmbr');
    console.log($thisNum);
    const $thisHeart = $(likeButton).children('.js-like-button__body').children('.js-body__like-img').children('.js-heart');
    if ($(likeButton).hasClass('active')) {
      $thisHeart.text('favorite_border');
      $thisNum.text(parseInt($thisNum.text(), 10) - 1);
      $(likeButton).removeClass('active');
    } else {
      $thisHeart.text('favorite');
      $thisNum.text(parseInt($thisNum.text(), 10) + 1);
      $(likeButton).addClass('active');
    }
  });
});
