    $('.Tooltip span').on({click:function(){
			$(this).find('.tooltip').show();
		},
		mouseleave: function(){
			$(this).find('.tooltip').hide();
		}});

		var slidey = $('.banner').unslider({
			keys: true,
			dots: true,
			fluid: true
		}),
		data = slidey.data('unslider'),
		slides=$(".banner");
		slides.on('swipeleft', function(e) {
			data.next();
		})
		.on('swiperight', function(e) {
			data.prev(); e.preventDefault();
		});
