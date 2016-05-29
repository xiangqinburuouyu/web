jQuery(function($) {
    $(".gui_m").each( function(){
        $(this).find(".gui_m_b").click(function(){
            $(this).find(".icon-double-angle-down").toggle() ;
            $(this).find(".icon-double-angle-up").toggle() ;
            $(this).siblings(".gui_m_c").toggle(200);
        });
    });
});