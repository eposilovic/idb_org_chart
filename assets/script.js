// COUNTRY FLAGS POPUP
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


// EMPLOYEE INFO POPUP
$(".dept_head, .dept_sub").on("click", function(event){
   var target2 = $(event.currentTarget);
   event.stopPropagation();
   var img_src =  $(target2).find(".med_img, .small_img").attr("src");
   $(target2).find(".dept_countries_wrap, .dept_countries").fadeIn();
   $(target2).siblings().find(".dept_countries_wrap, .dept_countries").fadeOut();
   $(target2).find(".popup_img").attr("src", img_src);
});
// EMPLOYEE HOVER STYLE
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


// DEPARTMENT HIERARCHY POPUP
$(".dept").on("click", function(){
   $(this).find(".dept_popup_wrap").fadeIn();
});

$(".close").on("click", function(e){
   e.stopPropagation();
   $(this).closest(".dept_popup_wrap").fadeOut();
});


// EMPLOYEE COUNTRY TABS
$(".dept_countries ul li").on("click", function(e){
   var target = $(e.currentTarget);
   var flag_class = $(target).attr("class").split(' ')[0];
   $(".dept_countries ul li").removeClass("tab_active");
   $(target).toggleClass("tab_active");
   $('.country_tab:not(.' + flag_class + ')').hide();
   $('.country_tab.' + flag_class).show();
});

$(document).ready(function(){
   $(".dept_countries ul li:first-of-type").addClass("tab_active");
   $(".dept_countries").wrap("<div class='dept_countries_wrap'></div>");
});

$(".close").on("click", function(e){
   e.stopPropagation();
   $(this).closest(".dept_countries_wrap").fadeOut();
   $(".dept_countries ul li").removeClass("tab_active");
   $(".dept_countries ul li:first-of-type").addClass("tab_active");
   $(".country_tab").hide();
   $(".country_tab:first-of-type").show();
});