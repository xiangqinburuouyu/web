jQuery(function($) {
		//alert($('body').width())

		$('.Tooltip span').on('click',function(){
			$(this).find('.tooltip').show();				
		})
		.on('mouseleave',function(){
			$(this).find('.tooltip').hide();
		});

		$(".tab_nav a").click(function (e) {
			e.preventDefault();
        	$(this).tab('show');
		});

		$("#nav").on("click",function (e) {
			e.preventDefault();
        	$('nav.nav').animate({width:'90%',opacity:'1'});
        	$(this).after('<div class="nav_backdrop"></div>') ;
		});

		
		$('body').on('click','.nav_backdrop,.close',function(){
		 	$('nav.nav').animate({width:'0px',opacity:'0'});
		 	$('div.nav_backdrop').remove() ;
		 });


		$(".nav_down span").click(function(){
			$(".nav_down").children('ul').slideDown(300);
			$(".nav_down").after('<div class="nav_backdrop"></div>') ;
		});
		$('body').on('click','.nav_backdrop',function(){
		 	$(".nav_down").children('ul').slideUp(300);
		 	$('div.nav_backdrop').remove() ;
		 });

		$('a[data-toggle="modal"]').click(function () {
			var pid = $(this).attr("data-pid");
			var pname = $(this).attr("data-pname");
			$('input[name="pid"]').val(pid);
			$('input[name="pname"]').val(pname);
		});
		 
		


		


		

});