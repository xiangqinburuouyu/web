/* index js */

require( ["jquery", "bootstrap", "bootstrap-select", "Chart", "jquery.bxslider", "MetroJs", "rating","bootstrap-validator","alljs"],
	function() {
		$('[data-toggle="popover"]').popover();
		if($('#bxslider').length>0){
			$('#bxslider').bxSlider({
				auto: true,
				pagerCustom: '#bx-pager',
				nextText: ' ',
				prevText: ' ',
				speed: 600,
				pause: 5000
			});
		};

	$(".nav_cons a").click(function(){
		var index = $(this).index(".nav_cons a");

		$($(".nav_cons div")[index]).show().siblings("div").hide();
	});
		

		
		var chartData = {
			labels : ["06-09","07-09","08-09","09-09","10-09"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [19,96,27,100]
				}
			]
		};
		
		var ctx = $("#chart").get(0).getContext("2d");
		window.myLine = new Chart(ctx).Line(chartData,{ responsive: false});

		function changHref(){
			var mang = $('.filterForm [name="manager"]').val();
			var company = $('.filterForm [name="company"]').val();
			var type = $('.filterForm [name="type"]').val();
			var yiel = $('.filterForm [name="yiel"]').val();
			var word = $('.filterForm [name="word"]').val();
			var src = '/product_list/bj' + mang + 'gm' + company + 'cnwnx' + type + 'ardq' + yiel + 'pn1.html' ;
			if (word != ""){
				src += '?word=' + word ;
			}
			$("#filterBtn").attr("href",src);
		}
		$(".filterForm select").change(function(){
			changHref();
		});
		$(".filterForm input").bind("input propertychange",function(){
			changHref();
		});

		$(".live").liveTile({pauseOnHover: true});




	}
);

