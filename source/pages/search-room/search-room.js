import './search-room.scss';
import '../../blocks/import-scripts';

jQuery(document).ready(($) => {
  $('.button-smallscr').click((ev) => {
    const searchTools = document.querySelector('.search-tools__container');
    $(searchTools).addClass('active');
  });
  $('.button-smallscr.close').click((ev) => {
    const searchTools = document.querySelector('.search-tools__container');
    $(searchTools).removeClass('active');
  });
});
