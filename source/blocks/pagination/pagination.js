import './simple-pagination';
jQuery(document).ready(function($){
    $('.pagination__body').pagination({
        items: 180,
        itemsOnPage: 12,
        displayedPages : 3,
        edges : 1,
        cssStyle: 'light-theme',
        nextText : 'arrow_forward'
    });
})