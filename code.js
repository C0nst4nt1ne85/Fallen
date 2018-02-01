
$(document).ready(function(){
   $(".titles").on("click", function() {
       if(!$(this).hasClass("focus")) {
            $(".focus").removeClass("focus");
            $(".titles").find(".info").slideUp();
            $(this).toggleClass("focus");
            $(this).find(".info").slideDown();
       }
       
   })
});