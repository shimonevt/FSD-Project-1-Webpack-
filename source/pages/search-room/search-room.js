import $ from 'jquery';
import './search-room.scss';
import '../../blocks/import-scripts';

$(document).ready(() => {
  $('.js-search-room__button-open').click(() => {
    const searchTools = document.querySelector('.js-search-room__search-tools');
    $(searchTools).addClass('search-room__search-tools_active');
  });
  $('.js-search-room__button-close').click(() => {
    const searchTools = document.querySelector('.js-search-room__search-tools');
    $(searchTools).removeClass('search-room__search-tools_active');
  });
});
