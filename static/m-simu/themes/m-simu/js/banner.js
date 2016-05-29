jQuery(function($) {

		var slidey = $('.banner').unslider({ 
			keys: true, 
			dots: true, 
			fluid: true
		}),
		data = slidey.data('unslider'), 
		slides=$(".banner"); 
		slides.on('swipeleft', function(e) { 
			e.preventDefault();
			data.next();
		})
		.on('swiperight', function(e) { 
			e.preventDefault();
			data.prev();
			
		});
		 
		

});