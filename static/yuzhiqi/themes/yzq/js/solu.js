/* case */

$(".solu_ul li").hover(function () {
    $(this).find(".solu_m").stop(false,true).fadeOut(400);
}, function () {
    $(this).find(".solu_m").stop(false,true).fadeIn(300);

});