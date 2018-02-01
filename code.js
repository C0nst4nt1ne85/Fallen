
$(document).ready(function(){
   $(".titles").on("click", function() {
       $(".focus").removeClass("focus");
       $(this).addClass("focus");
       $(this).find(".info").slideToggle();
   })
});