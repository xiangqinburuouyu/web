/* simu js */

require( ["jquery", "bootstrap", "bootstrap-select", "highstock", "highcharts-zh_CN","rating","alljs"],
	function() {
		
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
		            },{
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
		                name: 'AAPL Stock Price',
		                data: data,
		                type: 'spline',
		                tooltip: {
		                    valueDecimals: 2
		                }
		            }]
		        });

		        $('#chart_container3').highcharts('StockChart', {

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

		        

		    });

	}
);

