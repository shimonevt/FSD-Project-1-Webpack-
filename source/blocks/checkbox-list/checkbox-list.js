jQuery(document).ready(function($){
    $(".checkbox-list").children(".list__info").click(function(){
        let listInfo = $(this);
        let listOptions = $(listInfo).parent(".checkbox-list").find('.list__options');
        $(listOptions).toggleClass("active");
        $(listInfo).toggleClass("active");
    });
})
