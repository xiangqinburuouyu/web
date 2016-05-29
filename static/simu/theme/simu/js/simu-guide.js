/* simu js */

require( ["jquery", "bootstrap", "bootstrap-select", "unslider", "alljs"],
	function() {
		
		$('.banner').unslider({
			speed: 500,
			delay: 3000, 
			complete: function() {},  
			keys: true, 
			dots: true,    
			fluid: false  
		});
		
		$(".gui_m").each( function(){
		    $(this).find(".gui_m_b").click(function(){
		        $(this).siblings(".gui_m_c").toggle(200);
		    });
		});
		

		

	}
);

