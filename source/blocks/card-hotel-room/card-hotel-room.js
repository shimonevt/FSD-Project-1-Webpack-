import { data } from 'jquery';
import './slick';

jQuery(function($){
    const imageSlider = this.querySelectorAll('.card__image-slider');
    $(imageSlider).slick({
        prevArrow: '<div class="slick-prev"><i class="material-icons">expand_more</i></div>',
        nextArrow: '<div class="slick-next"><i class="material-icons">expand_more</i></div>',
        dots: true,
        dotsClass : 'slick-dots',
        customPaging : function(slider, i) {
            return '<div class="slick-dot custom"></div>';
        },
    });
    
});