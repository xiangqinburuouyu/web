/*  comm user manage js */


$(function () {
	
	$(".tab_nav a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    


});
require.config({
    paths: {
        echarts: 'theme/zimeiti/echarts'
    }
});

require(
    [
        'echarts',
        'echarts/chart/line',
        'echarts/chart/bar' 
    ],
    function (ec) {
        var myChart = ec.init(document.getElementById('chart_main')); 
        var myChart2 = ec.init(document.getElementById('chart_main2')); 
        var myChart3 = ec.init(document.getElementById('chart_main3')); 

        myChart.setOption(option);
        myChart2.setOption(option);
        myChart3.setOption(option); 
    }
);