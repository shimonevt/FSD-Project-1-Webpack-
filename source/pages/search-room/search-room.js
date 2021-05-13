import './search-room.scss'
import '../../blocks/import-scripts'
jQuery(document).ready(function($){
    $('.button-smallscr').click(function(){
        const searchTools= document.querySelector('.search-tools__container');
        $(searchTools).addClass('active');
    })
    $('.button-smallscr.close').click(function(){
        const searchTools= document.querySelector('.search-tools__container');
        $(searchTools).removeClass('active');
    })
});