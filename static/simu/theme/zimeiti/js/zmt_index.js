/*  zmt js */
$(function () {
    $(".code_sear").click(function(){
        $(this).addClass('code_sear_h');
        $('.sear_f').animate({ width:'216px'});      
    });
    var $code_select = $('.code_sear');
    $(document).click(function(e){
        if(!(e.target == $code_select[0] || $.contains($code_select[0], e.target))) {
            $('.sear_f').animate({ width:'0'}); 
            $code_select.removeClass('code_sear_h');
            
        }
        
    });

	var unslider = $('.banner').unslider({
        speed: 500,
        delay: 3000, 
        complete: function() {},  
        keys: true, 
        dots: true,    
        fluid: false  
    });

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });

    $('.code_btnbs').click(function(){
       var url = $(this).attr('data-href');
       var conet = $('.inter_con') ;
       $.ajax({
            url: url,
            async: false,
            dataType: "html",
            success: function (data) {

                conet.html(data);

            }
        });

    });

});
