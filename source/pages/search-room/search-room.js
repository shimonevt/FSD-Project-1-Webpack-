import './search-room.scss';
import '../../blocks/import-scripts';

jQuery(document).ready(($) => {
  $('.js-search-room__button-open').click((ev) => {
    const searchTools = document.querySelector('.js-search-room__search-tools');
    $(searchTools).addClass('active');
  });
  $('.js-search-room__button-close').click((ev) => {
    const searchTools = document.querySelector('.js-search-room__search-tools');
    $(searchTools).removeClass('active');
  });
});
