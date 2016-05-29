/* banner */
 $('.banner').unslider({
		speed: 500,
		delay: 3000,
		keys: true,
		dots: true,
		fluid: false
	});

$(".ban_btn li").hover(function () {
	$(this).find("div").stop(true).animate({ top: -260 }, 500)
}, function () {
    $(this).find("div").stop(true).animate({ top: -0 }, 500)
});

$(".case_ul li").hover(function () {
    $(this).find("p").stop(true,true).slideDown(500);
}, function () {
    $(this).find("p").stop(true,true).slideUp(500);
});
$(".win_ul dl dt img").hover(function () {
    $(this).stop(true).animate({ width: "120%", "margin-left": "-10%", height: "100%", "margin-top": "-15%" }, 800);
}, function () {
    $(this).stop(true).animate({ width: "100%", "margin-left": 0, height: "auto", "margin-top": 0 }, 800)
});
$(".tabs a").click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});
