$(".country").on("click", function(e){
   var target = $(e.currentTarget);
   var div_height = $(".country_info").height();
   e.stopPropagation();

   $(target).find(".country_info").slideToggle();
   $(target).siblings().find(".country_info").delay(380).slideUp();
   if($(window).width() > 820)
   {
      $('html,body').animate({ scrollTop: div_height * 5 }, 'slow');
   }
});


$(".dept_head, .dept_sub").on("click", function(event){
   var target2 = $(event.currentTarget);
   event.stopPropagation();

   $(target2).find(".dept_countries").toggle(300);
   $(target2).siblings().find(".dept_countries").hide();
   
});


$(".dept_head, .dept_sub").each(function(){
if($(this).find(".dept_countries").length > 0){
   $(this).css("cursor", "pointer");
   $(this).hover(function(){
      $(this).find(".small_img, .med_img").css({"box-shadow" : "3px 3px 5px #00000030", "border" : "2px solid #30c4ec"});
    },function() {
        $(this).find(".small_img, .med_img").css({"box-shadow" : "revert", "border" : "2px solid transparent"});
   });
}
});


$("body").on("click", function(){
   $(".dept_countries").hide(300);
});