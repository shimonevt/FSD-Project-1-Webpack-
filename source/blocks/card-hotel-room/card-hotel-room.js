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
    $(imageSlider).each(function(index,element){
        let dataImg=$(element).data('img');
        let cardSlide = $(element).find('.slick-slide div');
        $(cardSlide).each(function(i,elem){
            let img = document.createElement("img");
            img.src = "../../assets/pictures/"+dataImg;
            elem.appendChild(img);
        });
     });
});