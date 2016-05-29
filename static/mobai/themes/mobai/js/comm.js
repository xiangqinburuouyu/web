$(function(){
	$(".tab_nav a").mouseover(function (e) {
		e.preventDefault();
		$(this).tab('show');
	}); 
	var unslider = $('.banner').unslider({
		speed: 500,               
		delay: 3000,             
		
		keys: true,              
		dots: false,               
		fluid: false              
	});

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
});