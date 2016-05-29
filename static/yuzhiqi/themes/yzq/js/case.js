/* case */

$(".case_m").hover(function () {
    $(this).find(".case_anim").stop(true).animate({  height: "toggle"}, 500);
}, function () {
    $(this).find(".case_anim").stop(true).animate({  height: "show"}, 300);

});