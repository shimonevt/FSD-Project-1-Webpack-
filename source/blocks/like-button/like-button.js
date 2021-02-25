jQuery(document).ready(function($){
    $(".like-button").click(function(){		
        var likeButton = $(this);
        if ($(likeButton).hasClass('active')) {
            let thisNum = $(likeButton).children('.like-button__body').children('.body__like-nmbr');
            let thisHeart = $(likeButton).children('.like-button__body').children('.body__like-img').children('.heart');
            thisHeart.text('favorite_border');
            thisNum.text(parseInt(thisNum.text())-1);
            $(likeButton).removeClass("active");
        } else {				
            $(likeButton).addClass("active");
            let thisNum = $(likeButton).children('.like-button__body').children('.body__like-nmbr');
            let thisHeart = $(likeButton).children('.like-button__body').children('.body__like-img').children('.heart');
            thisNum.text(parseInt(thisNum.text())+1);
            thisHeart.text('favorite');

        }
        
});
})