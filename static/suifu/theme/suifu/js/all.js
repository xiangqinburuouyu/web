/* alljs */
/* 设置cookie */
function setCookie(name,value){
	$.cookie(name,value, { expires: 100, path: '/' }) ;
}
/* 获取cookie */
function getCookie(name){
	return $.cookie(name) ;
}
/* 调整到指定页面 */
function redirect(href) {
	window.location.href=href ;
}

function Back() {
$(window).scrollTop()>100 ? $("#yzq_top").fadeIn(500) : $("#yzq_top").fadeOut(500)

}

var szs = new Array( '12','14','16' );
var startSz = 1;
function zoomDoc( inc ) {
	var sz = startSz;
	sz += inc;
	if ( sz < 0 ) sz = 0;
	if ( sz > 2 ) sz = 2;
	startSz = sz;
    $('#lip_newc p').css('font-size',szs[sz]+'px');
};

jQuery(function($){
	$('[data-toggle="popover"]').popover();
	
	/* 跳转到指定页 */
	var this_href = window.location.href ;	// 当前链接
	var redi_href = 'alert.html' ;	// 跳转到的链接
	if(this_href.indexOf(redi_href) == -1){
		var airCookie = getCookie('airCookie_01') ;
		if(airCookie == undefined || airCookie =='0'){
			redirect(redi_href);		
		}
	}else{
		$("#accept").click(function(){
			setCookie('airCookie_01','1') ;
		});
		$("#close").click(function(){
			setCookie('airCookie_01','0') ;
		})

	}

	Back();
	$("#yzq_top").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 500);});

	$('li.dropdown').mouseover(function() { $(this).addClass('open'); }).mouseout(function() { $(this).removeClass('open'); }); 

	$("#weixin_icon").hover(function(){
        $(".popover").show();
    },function(){
        $(".popover").hide();
    });

    $(".cp_c li").hover(function(){
	    $(this).addClass("curr")
	},function(){
	    $(this).removeClass("curr")
	});
	$('.cp_c li').click(function (e) {
		e.preventDefault();
		var item=$(this);
	    var tab=$(this).find("a").attr("href")+"";
	    item.siblings().removeClass("selected")
	    item.parent().siblings().children("li").removeClass("selected")
	    item.addClass("selected");
	    $(tab).siblings().hide();
	    $(tab).show();
	});
	$('.fypage a').click(function (e) {
		e.preventDefault();
	    var tab=$(this).attr("href")+"";
	    $(tab).siblings('ul').hide();
	    $(tab).show();
	});

	$('#big').click(function(){zoomDoc(1);});
	$('#small').click(function(){zoomDoc(-1);});
});

$(window).scroll(function() {
	Back()
});