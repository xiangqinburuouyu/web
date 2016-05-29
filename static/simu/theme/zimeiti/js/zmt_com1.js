/*  zmt js */
$(function () {
    $(".code_sear").click(function(){
        $(this).addClass('code_sear_h');
        $('.sear_f').animate({ width:'216px'});      
    });
    var $code_select = $('.code_sear');
    $(document).click(function(e){
        if(!(e.target == $code_select[0] || $.contains($code_select[0], e.target))) {
            $code_select.removeClass('code_sear_h');
            $('.sear_f').animate({ width:'0'}); 
        }
        
    });

	

});
