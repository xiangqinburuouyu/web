jQuery(function($) {

	var ias = $.ias({
		container : ".containers_ul",
		item : "li",
		pagination : ".nextbtn",
		next : ".nextbtn a"
	});
	ias.extension(new IASTriggerExtension({ 
		text: '<a class="btn btn2 margin_top20">加载更多</a>', 
		offset: 1
	}));
	ias.extension(new IASSpinnerExtension());
	ias.extension(new IASNoneLeftExtension({ 
		text: '<a class="btn btn2 margin_top20">加载完成</a>'
	}));

	


});