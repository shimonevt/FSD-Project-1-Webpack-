jQuery(document).ready(function($){
    $('.header__list.smallscr').click(function(){
        let listButton = $(this);
        let headerList = $(listButton).parent('.bar-smallscr').parent('.header__menu').children('.header__list');
        $(headerList).toggleClass('active');
        $(listButton).toggleClass('active');
        
    })
    $('.list__options .options-header').click(function(){
        let ref = $(this);
        let listOptions = $(ref).parent('.list__options');
        $(listOptions).toggleClass('active');
    })
    $('.list__agree .agree-header').click(function(){
        let ref = $(this);
        let listAgree = $(ref).parent('.list__agree');
        $(listAgree).toggleClass('active');
    })
})