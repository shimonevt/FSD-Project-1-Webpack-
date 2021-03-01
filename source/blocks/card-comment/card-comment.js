jQuery(function($){
    const cardComment= document.querySelectorAll('.card-comment');
    $(cardComment).each(function(index,element){
        let avatar = $(element).find('.profile__avatar');
        console.log(avatar);
        let avatarData = $(avatar).data("img");
        let avatarImg = document.createElement("img");
        $(avatar).each(function(i,elem){
            avatarImg.src = "../../assets/pictures/"+avatarData;
            elem.appendChild(avatarImg);
        });
        
    });
});