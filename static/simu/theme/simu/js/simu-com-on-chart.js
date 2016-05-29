/* simu js */

require( ["jquery", "bootstrap", "bootstrap-select", "highstock","highcharts-zh_CN", "rating","alljs"],
	function() {


		var letters_btn_name = $("#letters_name li");
		var coneten_names = $("#coneten_name ul");
		var letters_btn_comp = $("#letters_comp li");
		var conetent_comps = $("#coneten_comp ul"); 
		letters_btn_name.on("click",function(){
			var letter = $(this).children("a").text().toLowerCase();	// 获取当前小写字母
			var index = $(this).index("#letters_name li");	// 获取当前位置
			var this_content = coneten_names.eq(index) ;
			var conetents = this_content.html() ; //获取当前位置的html

			if (conetents == "" || conetents.indexOf("li") == -1) {
				$.get('http://www.mxsimu.com/aa.html', {'word':letter} , function (data){
					this_content.html(data);
				});
			};
			this_content.addClass("in active") ;
			var content_other = this_content.siblings() ;
			content_other.removeClass("in active") ;
			
		});

		letters_btn_comp.on("click",function(){
			var letter = $(this).children("a").text().toLowerCase();	// 获取当前小写字母
			var index = $(this).index("#letters_comp li");	// 获取当前位置
			var this_content = conetent_comps.eq(index) ;
			var conetents = this_content.html() ; //获取当前位置的html

			if (conetents == "" || conetents.indexOf("li") == -1) {
				$.get('http://www.mxsimu.com/aa.html', {'word':letter} , function (data){
					this_content.html(data) ;
				});
			};
			this_content.addClass("in active") ;
			var content_other = this_content.siblings() ;
			content_other.removeClass("in active") ;
		});
		

		$(document).on("mouseenter",".trend",function(){
			var $trend = $(this);
			$trend.addClass("active");
		});

		$(document).on("mouseleave",".trend",function(){
			$(this).removeClass("active");
		});


		$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

		        // Create the chart
		        $('#chart_container').highcharts('StockChart', {

		            rangeSelector: {
		                enabled:false,
		                inputEnabled:false
		            },

		            title: {
		                text: ''
		            },

		            series: [{
		                name: 'AAPL Stock Price',
		                data: data,
		                type: 'spline',
		                tooltip: {
		                    valueDecimals: 2
		                }
		            }]
		        });

		        $('#chart_container2').highcharts('StockChart', {

		            rangeSelector: {
		                enabled:false,
		                inputEnabled:false
		            },

		            title: {
		                text: ''
		            },

		            series: [{
		                name: 'AAPL Stock Price2',
		                data: data,
		                type: 'spline',
		                tooltip: {
		                    valueDecimals: 2
		                }
		            }]
		        });

		    });

	}
);

