/*  news js */
$(function () {
	var unslider = $('.banner').unslider({
        speed: 500,
        delay: 3000, 
        complete: function() {},  
        keys: true, 
        dots: true,    
        fluid: false  
    });
    var unslider1 = $('.banner1').unslider({
        speed: 800,
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

    var szs = new Array( '12','14','16' );
    var startSz = 1;
    function zoomDoc( inc ) {
        var sz = startSz;
        sz += inc;
        if ( sz < 0 ) sz = 0;
        if ( sz > 2 ) sz = 2;
        startSz = sz;
        $('#contents').css('font-size',szs[sz]+'px');
    };

    $('.font_big').click(function(){zoomDoc(1);});
    $('.font_small').click(function(){zoomDoc(-1);});

    $(".code_pop_wx").mouseover(function() {
        var code_wx = $(this).attr('data-code-wx');
        var html = '<div class="popover code_pop fade bottom in" role="code_pop" style="display: block;"><div class="arrow" style="left: 50%;"></div><h3 class="popover-title" >微信咨询</h3><div class="popover-content"><img src="http://open.weixin.qq.com/qr/code/?username=' + code_wx + '" width="130" alt="微信二维码" /></div></div>';
        if ($(this).find('[role="code_pop"]').size() == 0)
            $(this).append(html);
        $(this).find('[role="code_pop"]').css("display", "block");

    }).mouseout(function() {
        $(this).find('[role="code_pop"]').css("display", "none");
    });
    $(".code_pop_phone").mouseover(function() {
        var code_phone = $(this).attr('data-code-phone');
        var html = '<div class="popover code_pop fade bottom in" role="code_pop" style="display: block;"><div class="arrow" style="left: 50%;"></div><h3 class="popover-title" >电话咨询</h3><div class="popover-content"><p>请拨打电话：</p><b>' + code_phone + '</b></div></div>';
        if ($(this).find('[role="code_pop"]').size() == 0)
            $(this).append(html);
        $(this).find('[role="code_pop"]').css("display", "block");

    }).mouseout(function() {
        $(this).find('[role="code_pop"]').css("display", "none");
    });

    function changHref(filterForm,filterBtn){
        var filterform = $(filterForm);
        var mang = filterform.find('[name="manager"]').val();
        var company = filterform.find('[name="company"]').val();
        var type = filterform.find('[name="type"]').val();
        var yiel = filterform.find('[name="yiel"]').val();
        var word = filterform.find('[name="word"]').val();
        var src = '/product_list/bj' + mang + 'gm' + company + 'cnwnx' + type + 'ardq' + yiel + 'pn1.html' ;
        if (word != ""){
            src += '?word=' + word ;
        }
        $(filterBtn).attr("href",src);
    }
    $(".ty_secp select").change(function(){
        changHref(".ty_secp","#filterBtn");
    });
    $(".ty_secp input").on("input propertychange blur",function(){
        changHref(".ty_secp","#filterBtn");
    });

});
